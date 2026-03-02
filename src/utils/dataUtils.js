import { saveAs } from 'file-saver';
import Papa from 'papaparse';

// --- EXPORT FUNCTIONS ---

/**
 * Exports the collection to a JSON file.
 * This is the preferred method for full backups as it preserves all data types and structure.
 */
export const exportCollectionToJSON = (items) => {
    try {
        const data = {
            version: '1.0',
            timestamp: new Date().toISOString(),
            items: items
        };
        const blob = new window.Blob([JSON.stringify(data, null, 2)], { type: 'application/json;charset=utf-8' });
        saveAs(blob, `euro_collection_backup_${new Date().toISOString().split('T')[0]}.json`);
        return { success: true, message: 'Backup JSON generado correctamente.' };
    } catch (error) {
        console.error('Export Error:', error);
        return { success: false, message: 'Error al generar el backup JSON.' };
    }
};

/**
 * Exports the collection to a CSV file.
 * Useful for editing in Excel or analyzing data externally.
 */
export const exportCollectionToCSV = (items) => {
    try {
        // Flatten items for CSV
        const csvData = items.map(item => ({
            id: item.id || '',
            country: item.country || '',
            year: item.year || '',
            value: item.value || '',
            mint: item.mint || '',
            category: item.category || 'euro',
            isCommemorative: item.isCommemorative ? 'Yes' : 'No',
            description: item.subject || item.description || '',
            status: item.status || 'collected',
            purchasePrice: item.purchasePrice || '',
            estimatedValue: item.estimatedValue || '',
            acquiredDate: item.createdAt?.seconds ? new Date(item.createdAt.seconds * 1000).toISOString().split('T')[0] : ''
        }));

        const csv = Papa.unparse(csvData);
        const blob = new window.Blob([csv], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, `euro_collection_export_${new Date().toISOString().split('T')[0]}.csv`);
        return { success: true, message: 'Archivo CSV generado correctamente.' };
    } catch (error) {
        console.error('CSV Export Error:', error);
        return { success: false, message: 'Error al generar el archivo CSV.' };
    }
};

// --- IMPORT FUNCTIONS ---

/**
 * Parses and validates a JSON backup file.
 * Returns a Promise that resolves with the parsed items.
 */
export const validateAndParseJSON = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const json = JSON.parse(e.target.result);
                // Basic validation
                if (!json.items || !Array.isArray(json.items)) {
                    reject('Formato de archivo inválido: Falta array de "items".');
                    return;
                }
                resolve(json.items);
            } catch {
                reject('Error al leer el archivo JSON. Asegúrate de que es un JSON válido.');
            }
        };
        reader.onerror = () => reject('Error de lectura de archivo.');
        reader.readAsText(file);
    });
};

/**
 * Parses and validates a CSV export file.
 * Returns a Promise that resolves with the parsed items.
 * Note: CSV import is riskier due to type loss; we attempt to reconstruct structure.
 */
export const validateAndParseCSV = (file) => {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                if (results.errors.length > 0) {
                    console.warn('CSV Parse Errors:', results.errors);
                }
                try {
                    const items = results.data.map(row => ({
                        // Reconstruct object
                        id: row.id || Date.now().toString() + Math.random().toString().slice(2, 5), // Generate new ID if missing to avoid collision on overwrite
                        country: row.country,
                        year: parseInt(row.year) || row.year,
                        value: row.value,
                        mint: row.mint,
                        category: row.category,
                        isCommemorative: row.isCommemorative === 'Yes',
                        subject: row.description,
                        status: row.status,
                        purchasePrice: parseFloat(row.purchasePrice) || 0,
                        createdAt: { seconds: new Date(row.acquiredDate || Date.now()).getTime() / 1000 } // Approx
                    }));
                    resolve(items);
                } catch {
                    reject('Error al procesar datos CSV.');
                }
            },
            error: (err) => reject('Error al leer CSV: ' + err.message)
        });
    });
};

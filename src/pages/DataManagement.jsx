import React, { useState } from 'react';
import { useCoin } from '../hooks/useCoin';
import { exportCollectionToJSON, exportCollectionToCSV, validateAndParseJSON, validateAndParseCSV } from '../utils/dataUtils';
import { Download, Upload, FileJson, FileSpreadsheet, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';
import './DataManagement.css'; // Will create this CSS

const DataManagement = () => {
    const { items, importData, resetCollection } = useCoin();
    const [status, setStatus] = useState({ type: '', message: '' });
    const [importMode, setImportMode] = useState('merge'); // 'merge' or 'replace'
    const [isProcessing, setIsProcessing] = useState(false);

    const handleExportJSON = () => {
        const result = exportCollectionToJSON(items);
        setStatus({ type: result.success ? 'success' : 'error', message: result.message });
    };

    const handleExportCSV = () => {
        const result = exportCollectionToCSV(items);
        setStatus({ type: result.success ? 'success' : 'error', message: result.message });
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsProcessing(true);
        setStatus({ type: 'info', message: 'Procesando archivo...' });

        try {
            let parsedItems = [];
            if (file.name.endsWith('.json')) {
                const jsonData = await validateAndParseJSON(file);
                // If the JSON has a version/timestamp wrapper, extract items
                parsedItems = Array.isArray(jsonData) ? jsonData : (jsonData.items || jsonData);
            } else if (file.name.endsWith('.csv')) {
                parsedItems = await validateAndParseCSV(file);
            } else {
                throw new Error('Formato no soportado. Usa .json o .csv');
            }

            if (!parsedItems || parsedItems.length === 0) {
                throw new Error('No se encontraron datos válidos en el archivo.');
            }

            // Perform Import
            if (importMode === 'replace') {
                if (window.confirm('¿Estás seguro de que deseas REEMPLAZAR toda tu colección actual? Esta acción no se puede deshacer.')) {
                    await resetCollection(); // Clear first
                    await importData(parsedItems); // Then add
                    setStatus({ type: 'success', message: `Colección restaurada exitosamente (${parsedItems.length} items).` });
                } else {
                    setStatus({ type: 'info', message: 'Importación cancelada.' });
                }
            } else {
                // Merge
                await importData(parsedItems);
                setStatus({ type: 'success', message: `Datos fusionados exitosamente (${parsedItems.length} items procesados).` });
            }

        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: error.message || 'Error desconocido durante la importación.' });
        } finally {
            setIsProcessing(false);
            event.target.value = null; // Reset input
        }
    };

    return (
        <div className="data-management-container glass-panel">
            <h2><RefreshCw size={24} style={{ marginRight: '10px' }} /> Gestión de Datos</h2>
            <p className="description">
                Exporta tu colección para tener una copia de seguridad o impórtala para restaurar datos.
                El formato <strong>JSON</strong> es el recomendado para copias de seguridad completas.
            </p>

            {status.message && (
                <div className={`status-message ${status.type}`}>
                    {status.type === 'error' ? <AlertTriangle size={18} /> : <CheckCircle size={18} />}
                    <span>{status.message}</span>
                </div>
            )}

            <div className="management-grid">
                {/* EXPORT SECTION */}
                <div className="management-card">
                    <h3><Download size={20} /> Exportar Colección</h3>
                    <div className="action-buttons">
                        <button onClick={handleExportJSON} className="btn-export json">
                            <FileJson size={18} /> Descargar Backup (.JSON)
                        </button>
                        <button onClick={handleExportCSV} className="btn-export csv">
                            <FileSpreadsheet size={18} /> Exportar a Excel (.CSV)
                        </button>
                    </div>
                </div>

                {/* IMPORT SECTION */}
                <div className="management-card">
                    <h3><Upload size={20} /> Importar / Restaurar</h3>

                    <div className="import-options">
                        <label>
                            <input
                                type="radio"
                                name="importMode"
                                value="merge"
                                checked={importMode === 'merge'}
                                onChange={(e) => setImportMode(e.target.value)}
                            />
                            <strong>Fusionar</strong> (Añadir a lo existente)
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="importMode"
                                value="replace"
                                checked={importMode === 'replace'}
                                onChange={(e) => setImportMode(e.target.value)}
                            />
                            <strong>Reemplazar</strong> (Borrar actual y restaurar)
                        </label>
                    </div>

                    <div className="file-upload-wrapper">
                        <input
                            type="file"
                            id="file-upload"
                            accept=".json,.csv"
                            onChange={handleFileChange}
                            disabled={isProcessing}
                        />
                        <label htmlFor="file-upload" className="btn-import">
                            {isProcessing ? 'Procesando...' : 'Seleccionar Archivo de Respaldo'}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataManagement;

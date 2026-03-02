
export const EURO_SPECS = {
    '1 cent. €': {
        weight: '2.30 g',
        diameter: '16.25 mm',
        thickness: '1.67 mm',
        composition: 'Acero recubierto de cobre',
        edge: 'Liso'
    },
    '2 cents €': {
        weight: '3.06 g',
        diameter: '18.75 mm',
        thickness: '1.67 mm',
        composition: 'Acero recubierto de cobre',
        edge: 'Liso con ranura'
    },
    '5 cents €': {
        weight: '3.92 g',
        diameter: '21.25 mm',
        thickness: '1.67 mm',
        composition: 'Acero recubierto de cobre',
        edge: 'Liso'
    },
    '10 cents €': {
        weight: '4.10 g',
        diameter: '19.75 mm',
        thickness: '1.93 mm',
        composition: 'Oro nórdico',
        edge: 'Festoneado (Borde grueso)'
    },
    '20 cents €': {
        weight: '5.74 g',
        diameter: '22.25 mm',
        thickness: '2.14 mm',
        composition: 'Oro nórdico',
        edge: 'Liso con 7 muescas (Flor española)'
    },
    '50 cents €': {
        weight: '7.80 g',
        diameter: '24.25 mm',
        thickness: '2.38 mm',
        composition: 'Oro nórdico',
        edge: 'Festoneado (Borde grueso)'
    },
    '1 €': {
        weight: '7.50 g',
        diameter: '23.25 mm',
        thickness: '2.33 mm',
        composition: 'Bimetálica (Níquel-Latón / Cuproníquel)',
        edge: 'Estriado discontinuo'
    },
    '2 €': {
        weight: '8.50 g',
        diameter: '25.75 mm',
        thickness: '2.20 mm',
        composition: 'Bimetálica (Cuproníquel / Níquel-Latón)',
        edge: 'Estriado con inscripción (varía por país)'
    },
    '12 €': {
        weight: '18.00 g',
        diameter: '33.00 mm',
        composition: 'Plata (.925)',
        edge: 'Liso'
    },
    '30 €': {
        weight: '18.00 g',
        diameter: '33.00 mm',
        composition: 'Plata (.925)',
        edge: 'Liso'
    }
};

export const getCoinSpecs = (value) => {
    return EURO_SPECS[value] || null;
};

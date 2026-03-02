
// Status Constants
const STATUS_SET_ONLY = 'set_only';
const STATUS_CIRCULATION = 'issued';
const STATUS_NOT_ISSUED = 'not_issued';

/**
 * Bulgaria is scheduled to join the Eurozone on January 1, 2026.
 * The first series of coins will feature the Madara Rider (1c-50c), 
 * St. Ivan of Rila (1€), and St. Paisius of Hilendar (2€).
 */
export const getBulgariaCoinStatus = (year, denomination) => {
    const y = parseInt(year);
    const val = parseFloat(denomination);

    // Bulgaria joins in 2026. Prior years are not issued.
    if (y < 2026 || isNaN(val)) return STATUS_NOT_ISSUED;

    // 2026 marks the first year of circulation for all denominations.
    return STATUS_CIRCULATION;
};

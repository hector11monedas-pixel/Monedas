import fs from 'fs';

let text = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');

// Find where I injected the bad block
const badBlockStart = text.lastIndexOf('export const calculateCommemorativeCatalogSize = () => {\n    let count = JOINT_ISSUES.length');

if (badBlockStart !== -1) {
    // Cut off the bad block
    text = text.trim();
    text = text.substring(0, badBlockStart);
    text = text.trim();

    // Now append exactly what we need (the good getCommemorativesByYear + the export block)
    const newEndBlock = `

export const getCommemorativesByYear = (year) => {
    const list = [];
    JOINT_ISSUES.forEach(issue => {
        if (issue.year === year) {
            issue.participants.forEach(country => {
                list.push({ ...issue, country, isJoint: true });
            });
        }
    });
    Object.entries(COUNTRY_CATALOGS).forEach(([country, coins]) => {
        coins.forEach(coin => {
            if (coin.year === year) {
                list.push({ ...coin, country });
            }
        });
    });
    return list;
};

export { JOINT_ISSUES, COUNTRY_CATALOGS, hasJointIssue };
`;
    text = text + newEndBlock;
    fs.writeFileSync('src/data/CommemorativeCatalog.js', text);
    console.log('Fixed duplicates!');
} else {
    console.log('Could not find bad block!');
}

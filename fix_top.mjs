import fs from 'fs';

let text = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');

// The file currently starts with:
// //
// export const hasJointIssue = (country, year) => {
//     return JOINT_ISSUES.some(issue => issue.year === year && issue.participants.includes(country));
// };
//
//     {
//         year: 2007,
//         subject: '50 Aniv. Tratado de Roma',

const brokenTop = `//
export const hasJointIssue = (country, year) => {
    return JOINT_ISSUES.some(issue => issue.year === year && issue.participants.includes(country));
};

    {
        year: 2007,
        subject: '50 Aniv. Tratado de Roma',`;

const fixedTop = `// Commemorative Catalog 2004-2025
// Includes Joint Issues and Country-Specific Releases

export const GERMAN_MINTS = ['A', 'D', 'F', 'G', 'J'];

export const hasJointIssue = (country, year) => {
    return JOINT_ISSUES.some(issue => issue.year === year && issue.participants.includes(country));
};

export const JOINT_ISSUES = [
    {
        year: 2007,
        subject: '50 Aniv. Tratado de Roma',`;

// It might have \r\n
const brokenRegex = /\/\/\s*[\r\n]+export const hasJointIssue = \(country, year\) => \{\s*[\r\n]+    return JOINT_ISSUES\.some\(issue => issue\.year === year && issue\.participants\.includes\(country\)\);\s*[\r\n]+\};\s*[\r\n]+\s*\{\s*[\r\n]+\s*year: 2007,\s*[\r\n]+\s*subject: '50 Aniv\. Tratado de Roma',/;

text = text.replace(brokenRegex, fixedTop);

fs.writeFileSync('src/data/CommemorativeCatalog.js', text);
console.log('Fixed top of file!');

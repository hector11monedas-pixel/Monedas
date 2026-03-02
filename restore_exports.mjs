import fs from 'fs';

const oldFile = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');
const newFile = fs.readFileSync('temp_new.mjs', 'utf8');

// The bottom of the good file (temp_new) has the export block
const endMarker = 'export const calculateCommemorativeCatalogSize = () => {';
const endBlock = newFile.substring(newFile.indexOf(endMarker));

// Find hasJointIssue in temp_new.mjs
const hasJointStart = newFile.indexOf('export const hasJointIssue =');
const hasJointEndStr = '};\n';
let hasJointContent = '';
if (hasJointStart !== -1) {
    const end = newFile.indexOf(hasJointEndStr, hasJointStart);
    hasJointContent = newFile.substring(hasJointStart, end + hasJointEndStr.length) + '\n';
} else {
    // If not found, recreate it
    hasJointContent = `export const hasJointIssue = (country, year) => {
    return JOINT_ISSUES.some(issue => issue.year === year && issue.participants.includes(country));
};\n\n`;
}

// 1. Remove the old ends from CommemorativeCatalog.js
const badEndMarker1 = 'export const COMMEMORATIVE_CATALOG';
const badEndMarker2 = 'export const calculateCommemorativeCatalogSize = () => {';

let fixedText = oldFile;
if (fixedText.indexOf(badEndMarker1) !== -1) {
    fixedText = fixedText.substring(0, fixedText.indexOf(badEndMarker1));
} else if (fixedText.indexOf(badEndMarker2) !== -1) {
    fixedText = fixedText.substring(0, fixedText.indexOf(badEndMarker2));
}

// Ensure hasJointIssue is under JOINT_ISSUES
const jointIssueEndMarker = '];\n';
const insertPoint = fixedText.indexOf(jointIssueEndMarker, fixedText.indexOf('export const JOINT_ISSUES')) + jointIssueEndMarker.length;
fixedText = fixedText.substring(0, insertPoint) + '\n' + hasJointContent + fixedText.substring(insertPoint);

// Append the good end block
fixedText = fixedText.trim() + '\n\n' + endBlock;

fs.writeFileSync('src/data/CommemorativeCatalog.js', fixedText);
console.log('Restored the lost functions at the bottom safely!');

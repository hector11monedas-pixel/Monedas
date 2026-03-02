import fs from 'fs';
let text = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');

// Replace the bad escaping Templo Ta\\' Ħaġrat with Templo Ta\' Ħaġrat
text = text.replace("Templo Ta\\\\' Ħaġrat", "Templo Ta\\' Ħaġrat");

fs.writeFileSync('src/data/CommemorativeCatalog.js', text);
console.log('Fixed Malta!');

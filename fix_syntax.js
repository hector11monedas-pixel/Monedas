const fs = require('fs');
let text = fs.readFileSync('src/data/CommemorativeCatalog.js', 'utf8');

// 1. Fix missing trailing commas
text = text.replace(/\}(?=\s*[\r\n]+\s*(?:\/\/.*[\r\n]+\s*)*\{)/g, '},');

// 2. Fix the Francia block
// We know exactly what the bad block looks like, ignoring whitespace
const regex = /\]\s*\}\,\s*\{\s*type:\s*'PROOF',\s*title:\s*'Caja Proof',\s*quantity:\s*10000\s*\}\s*\]\s*\}\,/m;

const replacement = `                { type: 'PROOF', title: 'Caja Proof', quantity: 10000 }
            ]
        },`;

if (regex.test(text)) {
    text = text.replace(regex, replacement);
    console.log("Fixed France block!");
} else {
    console.log("Could not find bad France block");
}

fs.writeFileSync('src/data/CommemorativeCatalog.js', text);

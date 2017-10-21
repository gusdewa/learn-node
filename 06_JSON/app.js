const fs = require('fs');

const note = {
  title: 'My Title',
  body: 'Body',
};

fs.writeFileSync('notes.json', JSON.stringify(note));

console.log('Note has been saved');

const noteString = fs.readFileSync('notes.json');
const noteObj = JSON.parse(noteString);
console.log(noteObj);




const fs = require('fs');
const os = require('os');
const notes = require('./notes');

const { username } = os.userInfo();
console.log(notes.add(1, 5));

fs.appendFile('geeting.text', `Hello ${username}`, (err) => {
  console.log(err);
});

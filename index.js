const fs = require('fs'); // file system modyle in node.js
const path = require('path');

const btnCreate = document.getElementById('btnCreate');
const btnRead = document.getElementById('btnRead');
const btnDelete = document.getElementById('btnDelete');
const fileName = document.getElementById('fileName');
const fileContents = document.getElementById('fileContents');
const info = document.querySelector('.info');
const error = document.querySelector('.error');


let pathName = path.join(__dirname, 'Files');

btnCreate.addEventListener('click', function() {
    let file = path.join(pathName, fileName.value);
    let contents = fileContents.value;
    fs.writeFile(file, contents, function(err) {
        if (err) {
            error.textContent = err;
            info.textContent = '';
            return console.log(err);            
        }
        error.textContent = '';
        info.textContent = 'The file was created / updated';
        console.log('The file was created');
    });
});

btnRead.addEventListener('click', function() {
    let file = path.join(pathName, fileName.value);

    fs.readFile(file, function(err, data) {
        if (err) {
            error.textContent = err;
            info.textContent = '';
            return console.log(err);            
        }
        fileContents.value = data;
        error.textContent = '';
        info.textContent = 'The file was read!';
        console.log('The file was read!');
    });
});

btnDelete.addEventListener('click', function() {
    let file = path.join(pathName, fileName.value);
    
    fs.unlink(file, function(err) {
        if (err) {
            error.textContent = err;
            info.textContent = '';
            return console.log(err);
        }
        fileName.value = '';
        fileContents.value = '';
        error.textContent = '';
        info.textContent = 'The file was deleted!';
        console.log('The file was deleted!');
    });
});
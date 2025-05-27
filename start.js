const { app } = require('electron');
const path = require('path');
const mainWindow = require('./index.js');

let indexPath = path.join(__dirname, './src/index.html');

app.on('ready', () => {
    mainWindow.createWindow(indexPath);
});
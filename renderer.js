let ipcRenderer = require('electron').ipcRenderer;

function onMinimizeButtonClick() {
    ipcRenderer.send("window-min");
}

function onCloseButtonClick() {
    ipcRenderer.send("window-close");
}
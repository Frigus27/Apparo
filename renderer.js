let ipcRenderer = require('electron').ipcRenderer;

let closeBtn = document.getElementById("close-button");
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        ipcRenderer.send('window-event', 'close');
    })
}

let minBtn = document.getElementById("minimize-button");
if (minBtn) {
    minBtn.addEventListener('click', () => {
        ipcRenderer.send('window-event', 'min');
    })
}
let ipcRenderer = require('electron').ipcRenderer;
let currentPage = null;

let closeBtn = document.getElementById("close-button");
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        ipcRenderer.send('window-event', 'close');
    });
}

let minBtn = document.getElementById("minimize-button");
if (minBtn) {
    minBtn.addEventListener('click', () => {
        ipcRenderer.send('window-event', 'min');
    });
}

let menuBtnSet = Array.from(document.getElementsByClassName("sidebar-menu-item"));

menuBtnSet.forEach((value) => {
    value.addEventListener('click', () => {
        ipcRenderer.send('menu-button-clicked', value.id);
        let prevButtons = document.getElementsByClassName("sidebar-menu-item-chosen");
        if (prevButtons.length != 0) {
            prevButtons[0].className = "sidebar-menu-item";
        }
        value.className = "sidebar-menu-item-chosen";
        currentPage = value.id;
    });
});

let developerBtn = document.getElementById("sidebar-developer-tool");
if (developerBtn) {
    console.log("found")
    developerBtn.addEventListener('click', () => {
        ipcRenderer.send('developer-button-clicked');
    });
}
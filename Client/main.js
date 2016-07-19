const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

app.setAsDefaultProtocolClient('clouds');

let mainWindow;

function createWindow () {

  mainWindow = new BrowserWindow({width: 1100, height: 650,frame:false});


  mainWindow.loadURL(`file://${__dirname}/pages/html/index.html`);

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=> {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate',() => {
  if (mainWindow === null) {
    createWindow()
  }
});

app.on('open-url',(event,url) =>{
   console.log('Welcome Back You arrived from: ${url}');
});


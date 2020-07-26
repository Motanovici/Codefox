const {app, BrowserWindow} = require('electron')

function createWindow() {

  //creates browser window
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences:{
      nodeIntegration: true
    }
  })

  //loads index.html
  win.loadFile('index.html')

  //open DevTools
  win.webContents.openDevTools()


}

app.whenReady().then(createWindow)

app.on('window-all-closed',() =>{
  if(process.platform !== 'darwin'){
    app.quit()
  }

})

app.on('activate',() => {
  if(BrowserWindow.getAllWindows().length === 0){
    createWindow()
  }
})

const { app, BrowserWindow } = require('electron');
const path = require('node:path');
app.whenReady().then(() => {
  if(process.platform==='darwin')app.dock.setIcon(path.join(__dirname,'assets','app-icon.png'));
  const win = new BrowserWindow({icon:path.join(__dirname,'assets','app-icon.png'),width:1440,height:960,minWidth:1000,minHeight:700,backgroundColor:'#102d2a',title:'Python符文纪事',webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true}});
  win.loadFile(path.join(__dirname,'dist','index.html'));
  win.webContents.setWindowOpenHandler(() => ({action:'deny'}));
});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});
app.on('activate',()=>{if(!BrowserWindow.getAllWindows().length){const win=new BrowserWindow({icon:path.join(__dirname,'assets','app-icon.png'),width:1440,height:960,webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true}});win.loadFile(path.join(__dirname,'dist','index.html'));}});

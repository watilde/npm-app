const packager = require('electron-packager')
const package = require('../package.json')
const electron = require('../node_modules/electron/package.json')
const options = {
  name: package.productName,
  dir: '../',
  out: '../dist',
  icon: '../app/icon.jpg',
  platform: 'darwin',
  arch: 'all',
  version: electron.version,
  overwrite: true,
  asar: true,
  'app-version': package.version,
  'app-copyright': 'Copyright (C) 2016 ' + package.author + '.',
  win32metadata: {
    CompanyName: 'Daijiro Wachi',
    FileDescription: package.description,
    OriginalFilename: package.productName + '.exe',
    ProductName: package.productName,
    InternalName: package.productName
  }
}

packager(options, (err, appPaths) => {
  if (err) throw new Error(e)
  console.log('Out => ', appPaths)
})

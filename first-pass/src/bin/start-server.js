const { start } = require('../')

start()


//Script - perguntar onde ele fica
/* {
    "scripts": {
    "start-dev-server": "nodemon src/bin/start-server.js --color",
    }
} */


/* Ao rodar o comando npm run start-dev-server obtive isto:

npm ERR! syscall open
npm ERR! path D:\Workspace\javascript\practical-microservices/package.json
npm ERR! errno -4058
npm ERR! enoent ENOENT: no such file or directory, open 'D:\Workspace\javascript\practical-microservices\package.json'       
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\diego\AppData\Local\npm-cache\_logs\2022-08-26T03_21_43_716Z-debug-0.log

*/
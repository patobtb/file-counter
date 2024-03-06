// import fs from ("fs");
// import path from ("path");
// const { count } = require("console");
const fs = require("fs");
const path = require("path");

const ff = "./ff";
const folderList = [];
const filesList = [];
const nodeModuls = "./node_modules"
let counter = 0;

function fileCounter(folders){
    folders.forEach(folder => {
        const result = fs.readdirSync(folder);
        const isFolder = result.filter((res) => fs.lstatSync(path.resolve(folder, res)).isDirectory());
        const isFile = result.filter((res) => fs.lstatSync(path.resolve(folder, res)).isFile());
        const folderPaths = isFolder.map(res => path.resolve(folder, res));
        const filePaths = isFile.map(res => path.resolve(folder, res));
        if(isFile.length > 0){
            counter += isFile.length;
        }
        if(isFolder.length === 0){
            return;
        }
        folderPaths.forEach((secFolder) => folderList.push(secFolder));
        filePaths.forEach((secFile) => filesList.push(secFile));
        fileCounter(folderPaths);
        console.log(`there are ${counter} files in ${nodeModuls}`);
    });
}


fileCounter([path.resolve(nodeModuls)]);
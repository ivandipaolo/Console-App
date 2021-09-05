const fs = require('fs');

const file = './db/data.json'; 

const saveDB = async (data) =>{
    fs.writeFileSync(file, JSON.stringify(data));
}

const readDB = () =>{
    if(fs.existsSync(file)){
        const data = JSON.parse(fs.readFileSync(file));
        return data;
    } else{
        return null;
    }

}

module.exports = {
    saveDB,
    readDB,
}
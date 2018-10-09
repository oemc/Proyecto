var uuidv4 = require('uuid/v4');
let waifuList = require('./testlist.json');

class waifuStorage{
    readAll(){
        return waifuList;
    }
    read(i){
        return waifuList.find(w => w.id == i);
    }
    create(waifu){
        waifu.id = uuidv4();
        waifuList.push(waifu);
        console.log(`New waifu registered, ID ${waifu.id}`);
        return waifu.id;
    }
    update(i, waifu){
        waifu.id = i;
        let match = this.read(i);
        if(match != null){
            waifuList[waifuList.indexOf(match)] = waifu;
            return true;
        }
        return false;
    }
}

module.exports = waifuStorage;
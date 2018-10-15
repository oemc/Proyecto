var uuidv4 = require('uuid/v4');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Character = new Schema({
    _id: ObjectId,
    pic: String,
    name: String,
    origin: String,
    occupation: String,
    hairColor: String,
    alias: String
});
const CharacterModel = mongoose.model('character', Character);

class waifuStorage{
    readAll(callback){
        CharacterModel.find({}, callback);
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
    delete(i){
        let match = this.read(i);
        if(match != null){
            waifuList.splice(waifuList.indexOf(match), 1);
            return true;
        }
        return false;
    }
}

module.exports = waifuStorage;
var uuidv4 = require('uuid/v4');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/local');

const Schema = mongoose.Schema;
const Character = new Schema({
    _id: String,
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
    read(i, callback){
        CharacterModel.findById(i, callback);
    }
    create(waifu, callback){
        waifu._id = uuidv4();
        const doc = new CharacterModel(waifu);
        doc.save(callback);
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
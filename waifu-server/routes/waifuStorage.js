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
    update(i, waifu, callback){
        waifu._id = i;
        const doc = new CharacterModel(waifu);
        CharacterModel.update({ _id: i }, doc, callback);
    }
    delete(i, callback){
        CharacterModel.deleteOne({ _id: i }, callback);
    }
}

module.exports = waifuStorage;
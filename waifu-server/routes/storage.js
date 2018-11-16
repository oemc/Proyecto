var uuidv4 = require('uuid/v4');

const mongoose = require('mongoose');
mongoose.connect(`mongodb://${process.env.MONGODB_SERVICE_HOST}:${process.env.MONGODB_SERVICE_PORT}/${process.env.DB_NAME}`, {useNewUrlParser: true});

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


function readAll(callback){
    CharacterModel.find({}, callback);
}
function read(i, callback){
    CharacterModel.findById(i, callback);
}
function create(waifu, callback){
    waifu._id = uuidv4();
    const doc = new CharacterModel(waifu);
    doc.save(callback);
}
function update(i, waifu, callback){
    waifu._id = i;
    const doc = new CharacterModel(waifu);
    CharacterModel.updateOne({ _id: i }, doc, callback);
}
function _delete(i, callback){
    CharacterModel.deleteOne({ _id: i }, callback);
}


module.exports = {
    readAll: readAll,
    read: read,
    create: create,
    update: update,
    delete: _delete
};
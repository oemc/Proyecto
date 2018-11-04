const redis = require('redis');

function redisConnect(){
    let client = redis.createClient({
        retry_strategy: ()=>{
            return new Error('The server refused the connection');
        }
    });
    client.on('error', (err)=>{ console.log(`Redis error: ${err.message}`) });
    client.on('connect', ()=>{ console.log('Successfully connected to redis') });
    return client;
}

function get(key, callback){
    let redisClient = redisConnect();
    redisClient.get(key, callback);
}

function append(key, value, expire){
    let redisClient = redisConnect();
    redisClient.append(key, JSON.stringify(value));
    redisClient.expire(key, expire);
}

module.exports = {
    get: get,
    append: append
};
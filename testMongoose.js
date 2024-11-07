const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var schema = mongoose.Schema({ name: String })
schema.methods.tey = function(){
console.log(this.name + ", чай готов!")
}
const Tea = mongoose.model('Tea', schema);
const tee = new Tea({ name: 'Чаёк' });
tee.save().then(() => tee.tey());
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
const Tea = mongoose.model('Tea', { name: String });
const tee = new Tea({ name: 'Чаёк' });
tee.save().then(() => console.log('Чай готов!'));
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
var Tea = require('./models/tea.js').Tea

var tea = new Tea({
    title: "Чай с виноградом",
    nick: "grape",
    })
    


tea.save();
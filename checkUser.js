var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/tea2024")
var User = require("./models/user.js").User
var first_user = new User({
    username: "aaa",
    password: "bbb"
})
first_user.save();
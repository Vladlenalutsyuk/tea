var User = require("../models/user").User;
module.exports = async function (req, res, next) {
    res.locals.user = null
    var user = await User.findById(req.session.user_id);
    if (user != 0) {
        res.locals.user = user;
    }
    next();
}
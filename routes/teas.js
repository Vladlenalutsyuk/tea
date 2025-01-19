var express = require('express');
var router = express.Router();
var Tea = require('../models/tea').Tea;
var checkAuth = require("../middlewares/checkAuth.js");


/* GET teas listing. */
router.get('/', function (req, res, next) {
    res.send('Новый маршрутизатор');
});

router.get("/:nick", checkAuth, async function(req, res, next) 
{
var teas = await Tea.find({ nick: req.params.nick });
    console.log(teas)
    if (!teas.length) return next(new Error("Нет такого чая"))
    var tea = teas[0];
    res.render('tea', 
        {
        title: tea.title,
        picture: tea.avatar,
        desc: tea.desc,
        de: tea.de
    })
});





module.exports = router;

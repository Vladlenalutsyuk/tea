var express = require('express');
var router = express.Router();
var Tea = require('../models/tea').Tea;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с cats');
});

router.get("/:nick", async function(req, res, next) {
    var teas = await Tea.find({nick: req.params.nick});
    console.log(teas)
    if(!teas.length) return next(new Error("Нет в наличии"))
    var tea = teas[0];
    res.render('tea', {
    title: tea.title,
    picture: tea.avatar,
    desc: tea.desc
    })
    });
    
    

module.exports = router;

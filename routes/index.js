var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница чая с ванилью и клюквой*/
router.get('/vanilla', function(req, res, next) {
  res.send("<h1>Чай с ванилью и клюквой</h1>")
  });

  /* Страница чая с лаймом*/
router.get('/spirit', function(req, res, next) {
  res.send("<h1>Чай с лаймом</h1>")
  });

  /* Страница чая со сливой*/
router.get('/plum', function(req, res, next) {
  res.send("<h1>Чай со сливой</h1>")
  });

  /* Страница чая с виноградом*/
router.get('/grape', function(req, res, next) {
  res.send("<h1>Чай с виноградом</h1>")
  });

  /* Страница Чая с черникой*/
router.get('/blueberry', function(req, res, next) {
  res.send("<h1>Чай с черникой</h1>")
  });
  

module.exports = router;

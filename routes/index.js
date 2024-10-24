var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Страница чая с ванилью и клюквой*/
router.get('/vanilla', function(req, res, next) {
  res.render('tea', {
    title: 'Чай с ванилью и клюквой',
    picture: "/images/vanilla.jpg",
    desc: "черный чай, кусочки сушеной клюквы, натуральный ароматизатор ванили, лепестки розы."
    });
  });

  /* Страница чая с лаймом*/
router.get('/spirit', function(req, res, next) {
  res.render('tea', {
    title: 'Чай с лаймом',
    picture: "/images/spirit.jpg",
    desc: "черный чай, кусочки сушеного лайма, натуральный ароматизатор лайма, лепестки гибискуса."
    });
  });

  /* Страница чая со сливой*/
router.get('/plum', function(req, res, next) {
  res.render('tea', {
    title: 'Чай со сливой',
    picture: "/images/plum.webp",
    desc: "черный чай, лепестки розы, кусочки сушеной сливы, натуральный ароматизатор, плоды шиповника."
    });
  });

  /* Страница чая с виноградом*/
router.get('/grape', function(req, res, next) {
  res.render('tea', {
    title: 'Чай с виноградом',
    picture: "/images/grape.jpg",
    desc: "лепестки гибискуса, шиповник, сушеное яблоко, ароматизатор виноград, листья ежевики, кора апельсина."
    });
  });

  /* Страница Чая с черникой*/
router.get('/blueberry', function(req, res, next) {
  res.render('tea', {
    title: 'Чай с черникой',
    picture: "/images/blueberry.webp",
    desc: "Черный чай, листья ежевики, натуральный ароматизатор черники, сушеные плоды черники, лепестки гибискуса."
    });
  });




  

module.exports = router;

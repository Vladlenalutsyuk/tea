var data = [{
    title: 'Чай с ванилью и клюквой',
    nick: 'peach',
    avatar: '/images/peach.jpg',
    desc: 'черный чай, кусочки сушеной клюквы, натуральный ароматизатор ванили, лепестки розы.'
    },
    {
    title: 'Чай с лаймом',
    nick: 'spirit',
    avatar: '/images/sum.jpg',
    desc: 'черный чай, кусочки сушеного лайма, натуральный ароматизатор лайма, лепестки гибискуса.'
    },
    {
    title: 'Чай со сливой',
    nick: 'plum',
    avatar: '/images/wild.jpg',
    desc: 'черный чай, лепестки розы, кусочки сушеной сливы, натуральный ароматизатор, плоды шиповника.'
    },
    {
    title: 'Чай с виноградом',
    nick: 'grape',
    avatar: '/images/grape.jpg',
    desc: 'лепестки гибискуса, шиповник, сушеное яблоко, ароматизатор виноград, листья ежевики, кора апельсина'
    },
    {
    title: 'Чай с черникой',
    nick: 'blueberry',
    avatar: '/images/blueberry.webp',
    desc: 'Черный чай, листья ежевики, натуральный ароматизатор черники, сушеные плоды черники, лепестки гибискуса.'
    }
    ];
    
    db.teas.updateOne(
               { nick: "blu" },
               { $set: { avatar: "/images/blu.jpg" } }
            );
    
    module.exports.data = data;
    
//Create http server using express's
const express = require('express');
const app = express();
const port = 9015;

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
var Card = [
    {
        Id: 1,
        Name: 'Card1',
        Description: 'Description: x3 Score\nPrice: 0.5 BNB\nTime: 45 Days',
        Count: 1,
        Url: 'http://localhost:9015/card/1',
        Tag: 'Card_Attack',
        Character: 'Card_2',
        Type: 0,
        Color: '#A68543'
    },
    { 
        Id: 2,
        Name: 'Card2',
        Description: 'Description: x5 Score\nPrice: 1 BNB\nTime: 45 Days',
        Count: 1,
        Url: 'http://localhost:9015/card/2',
        Tag: 'Card_Health',
        Character: 'Card_3',
        Type: 1,
        Color: '#B2B2B2'
    },
    { 
        Id: 3,
        Name: 'Card3',
        Description: 'Description: x7 Score\nPrice: 1.2 BNB\nTime: 45 Days',
        Count: 4,
        Url: 'http://localhost:9015/card/3',
        Tag: 'Card_Mana',
        Character: 'Card_4',
        Type: 2,
        Color: '#CDBC3F'
    },
    { 
        Id: 3,
        Name: 'Card3',
        Description: 'Description: x7 Score\nPrice: 1.2 BNB\nTime: 45 Days',
        Count: 0,
        Url: 'http://localhost:9015/card/3',
        Tag: 'Card_Mana',
        Character: 'Card_4',
        Type: 2,
        Color: '#fbc2eb'
    }
    ,
    { 
        Id: 3,
        Name: 'Card3',
        Description: 'Description: x7 Score\nPrice: 1.2 BNB\nTime: 45 Days',
        Count: 0,
        Url: 'http://localhost:9015/card/3',
        Tag: 'Card_Mana',
        Character: 'Card_4',
        Type: 2,
        Color: '#fda085'
    }
];

app.get('/test', function(req, res) {
    res.send("Ok test");
});

app.get('/card/:id', function(req, res) {
    var index = parseInt(req.params.id, 10);
    res.send(JSON.stringify(Card[index-1]));
});

app.get('/userinfo', function(req, res) {
    var resData = {
        listCard: Card,
        HMG: 100000,
        BNB: 10,
        Play: 3
    };

    res.send(JSON.stringify(resData));
});

app.get('/cards', function(req, res) {
    res.send(JSON.stringify(Card));
});

app.get('/login', function(req, res) {
    console.log('Get Login');
    res.send("Ok");

});
app.post('/login', function(req, res) {
    console.log('Login');
    var user = req.body.username;
    var password = req.body.password;
    if(user == 'khanhnguyen' && password == 'khanh123') {
        res.send("Ok");
    }else
    {
        res.status(500);
        res.send("Invalid username or password");
    }
});

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,text/plain');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen(port, function() {
    console.log('listening on port ' + port);
});
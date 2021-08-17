const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const { response } = require('express');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'l1Thyrus',
      database : 'smart_brain'
    }
  });

  
const app = express();
app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'apple',
            entries: '0',
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: '0',
            joined: new Date()
        },

    ]
}

app.get('/', (req, res)=>{
    res.send(database.users)
});

app.post('/signin', (req, res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password){
            res.json(database.users[0]); 
    } else {
        res.status(400).json('error logging in');
    }
});

app.post('/register', (req, res) => {
    const {name, email, password} = req.body
    db('public.users')
    .returning('*')
    .insert({
        name: name,
        email: email,
        joined: new Date()
    }).then(response => {
        res.json(response);
    })
    .catch(console.log('unable to register'))

});

app.get('/profile/:id', (req, res) =>{
    
    const {id} = req.params;
    let found = false;

    database.users.forEach(user => {
        if (user.id === id) {
           found = true
           return res.json(user);
        }
    })
    if (!found){
        res.status(404).json('no such user')
    }
});

app.put('/image', (req,  res) =>{
    const {id} = req.body;
    let found = false;

    database.users.forEach(user => {
        if (user.id === id) {
           found = true
           user.entries ++
           return res.json(user.entries);
        }
    })
    if (!found){
      res.status(404).json('no such user')
    }
})

app.listen(3000, ()=>{
    console.log('I\'m listening! :)');
});
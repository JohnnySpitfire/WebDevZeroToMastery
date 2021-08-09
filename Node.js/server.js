import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send('helloo');
})
app.listen(3000);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
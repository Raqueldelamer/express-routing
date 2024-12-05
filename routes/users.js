import { Router } from 'express';


import data from '../data.json' assert { type: 'json' };
console.log(data);


const usersRoute = new Router();

usersRoute.get("/hello", (req, res) => {
    res.json("Hello, Monde!")
});

usersRoute.get('/', (req, res) => {
    res.json(data)
})

usersRoute.get('/:id', (req, res) => {
    const id = req.params.id;
    let user = usersData[id]
    res.json(user);
})




export default usersRoute;
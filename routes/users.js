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
    const userId = Number(req.params.id);
    console.log(userId);

    let user = data.find((user) => user.id === userId);
    if (!user) {
    res.status(404).json({ error: "user not found" });
    }
    res.json(` User ID: ${user.id}, User: ${user.name}, Email: ${user.email}` );
    console.log(user);
})




export default usersRoute;
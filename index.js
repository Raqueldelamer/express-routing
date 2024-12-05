import express from 'express'
import usersRoutes from './routes/users.js';

const app = express();

//middleware for json post body
app.use(express.json());

app.use('/users', usersRoutes);



// root URL
app.get('/', (req, res) => {
    res.send("Hello, Monde!")
})


app.listen(3000, () => {
    console.log("Express app listening on port 3000")
})
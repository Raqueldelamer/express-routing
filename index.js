import express from 'express'
import usersRoutes from './routes/users.js';
import mainRoutes from './routes/index.js';

const app = express();

//middleware for json post body
app.use(express.json());

app.use('/users', usersRoutes);
app.use("/", mainRoutes);

// root URL
app.get('/', (req, res) => {
    res.send("Hello, Monde!")
})

//middleware for handling 404 error
const handle404 = (req, res) => {
    res.status(404).json({
        error: 404,
        message: "Error, not found",
    });
}

app.use(handle404);
app.listen(3001, () => {
    console.log("Express app listening on port 3001")  // using port 3001 incase 3000 is in use
})
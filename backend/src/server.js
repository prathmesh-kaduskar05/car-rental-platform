import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import carRoutes from './routes/carRoutes.js';

// Initialize Express App
const app = express()

// Connect DataBases
await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/cars', carRoutes); 

app.get('/', (req, res)=> res.send("Server is Running on PORT : 3000"))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

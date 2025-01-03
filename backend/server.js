import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import doctorRoutes from './routes/doctorRoutes.js';
import medicineRoutes from './medicineRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/hospital_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/api', doctorRoutes);
app.use('/api', medicineRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
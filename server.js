import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import pokemonController from './controllers/controllers.js';
import { db } from './models/models.js';

dotenv.config();
const PORT = 3000;
const app = express();

console.log(db.url);
mongoose
  .connect(db.url.toString())
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use(cors());

app.get('/pokemon', pokemonController.getPokemon);
app.get('/pokemon/:name', pokemonController.getPokemonByName);
app.get('/type', pokemonController.getPokemonType);
app.get('/type/:type', pokemonController.getPokemonByType);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

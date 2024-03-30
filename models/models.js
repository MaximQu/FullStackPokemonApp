import mongoose from 'mongoose';
import { url } from '../config/db.config.js';

const db = {};
db.url = url;

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  photo: String,
  height: Number,
  weight: Number,
  types: [String],
  stats: [{ name: String, value: String }],
  abilities: [String],
  moves: [String],
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

const pokemonTypesSchema = new mongoose.Schema({
  types: [String],
});

const PokemonType = mongoose.model('PokemonType', pokemonTypesSchema);

export { Pokemon, PokemonType, db };

import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

const PORT = 3000;
const app = express();

mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected!'));

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

const pokemonTypesSchema = new mongoose.Schema({
  types: [String],
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);
const PokemonType = mongoose.model('PokemonType', pokemonTypesSchema);

app.use(cors());

app.get('/pokemon', async (req, res) => {
  try {
    const { offset, name, type, sortType } = req.query;
    const options = {};
    if (name) {
      const regex = new RegExp('^' + name);
      options.name = {
        $regex: regex,
        $options: 'i',
      };
    }
    if (type) options.types = type.toLowerCase();
    const sorting = {};
    if (sortType) sorting[sortType.toLowerCase()] = 1;

    res.json({
      count: await Pokemon.find(options).countDocuments(),
      results: await Pokemon.find(options).sort(sorting).skip(offset).limit(20),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/pokemon/:name', async (req, res) => {
  try {
    const { name } = req.params;
    res.json(await Pokemon.findOne({ name }));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/type', async (req, res) => {
  try {
    res.json(await PokemonType.findOne());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/type/:type', async (req, res) => {
  try {
    const { type } = req.query;
    await Pokemon.find({ types: type }).skip(offset).limit(20);
    res.json({
      count: (await Pokemon.find({ types: type })).length,
      types: await Pokemon.find({ types: type }).skip(offset).limit(20),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// app.get('/', async (req, res) => {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302`);
//     const data = await response.json();
//     data.results.forEach(async (item) => {
//       if(await Pokemon.findOne({name: item.name}).name.localeCompare(item.name) === 0) return
//       const response = await fetch(item.url);
//       const pokemonData = await response.json();

//       const obj = {
//         name: item.name,
//         photo: pokemonData.sprites.other['official-artwork'].front_default,
//         height: pokemonData.height,
//         weight: pokemonData.weight,
//         types: pokemonData.types.map((item) => item.type.name),
//         stats: pokemonData.stats.map((item) => {
//           return { name: item.stat.name, value: item.base_stat };
//         }),
//         abilities: pokemonData.abilities.map((item) => item.ability.name),
//         moves: pokemonData.moves.map((item) => item.move.name),
//       };
//       await new Pokemon(obj).save();
//     });

//     res.json({
//       text: 'hello',
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get('/type', async (req, res) => {
//   try {
//     const response = await fetch(`https://pokeapi.co/api/v2/type`);
//     const data = await response.json();

//     await new PokemonType({ types: data.results.map((item) => item.name) }).save();
//     res.json({text: 'hello'})
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// app.get('/pokemon/:name', async (req, res) => {
//   try {
//     const { name } = req.params;
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

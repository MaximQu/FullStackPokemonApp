import { Pokemon, PokemonType } from '../models/models.js';

const pokemonController = {
  getPokemon: async (req, res) => {
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

      const count = await Pokemon.find(options).countDocuments();
      const results = await Pokemon.find(options).sort(sorting).skip(offset).limit(20);
      res.json({ count, results });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPokemonByName: async (req, res) => {
    try {
      const { name } = req.params;
      res.json(await Pokemon.findOne({ name }));
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPokemonType: async (req, res) => {
    try {
      res.json(await PokemonType.findOne());
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getPokemonByType: async (req, res) => {
    try {
      const { type } = req.query;
      await Pokemon.find({ types: type }).skip(offset).limit(20);
      const count = (await Pokemon.find({ types: type })).length;
      const types = await Pokemon.find({ types: type }).skip(offset).limit(20);
      res.json({ count, types });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default pokemonController;

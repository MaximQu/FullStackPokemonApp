import dotenv from 'dotenv';

dotenv.config();

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_DATABASE } = process.env;

const url = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@fcctest.lkvggfi.mongodb.net/${MONGODB_DATABASE}?retryWrites=true&w=majority&appName=FCCTest`;

export { url };

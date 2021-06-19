import app from './app'
import express from 'express';
import cors from 'cors';

import { startConnection } from './database'

// starts the server
async function main() {
    startConnection();
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'))    
}

main();

// modules usage
app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/index'));

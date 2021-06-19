import mongoose from 'mongoose';

// connection with the database
export async function startConnection() {
    await mongoose.connect('mongodb://localhost/photo-gallery-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Database is connected')
}

/* mongoose.connect('mongodb://localhost/photo-gallery-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})  
    .then(db => console.log('Conected to database'))
    .catch(err => console.log(err)); */
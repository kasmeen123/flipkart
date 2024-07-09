import mongoose from 'mongoose'

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ibi9wsm-shard-00-00.cionpia.mongodb.net:27017,ac-ibi9wsm-shard-00-01.cionpia.mongodb.net:27017,ac-ibi9wsm-shard-00-02.cionpia.mongodb.net:27017/?ssl=true&replicaSet=atlas-7m65a6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`
    try{
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('Database connected successfully')
    }
    catch(error){
        console.log('Error while connecting to database',error.message);
    }
}

export default Connection
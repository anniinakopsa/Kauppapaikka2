const mongoose = require('mongoose')
const uri = "mongodb+srv://demo:SALASANA@cluster0.5hs0r.mongodb.net/"

const connectDB = async () => {
  try {
    const con = await mongoose.connect(uri)
    console.log(`MongoDB connected: ${con.connection.host}`)
  } catch(err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB;
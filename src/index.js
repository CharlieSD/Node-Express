import mongoose from "mongoose"

const host =  'mongodb://127.0.0.1:27017/films'

mongoose.set('debug', true)
mongoose.Promise = global.Promise

const conn = mongoose.createConnection(
  host,
  { PoolSize: 200 }
)

conn.on('error', err => {
  console.log('Error', err)
  return process.exit()
})

conn.on('connected', () => console.log('Conectado a MongoDB'))

const filSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, trim: true, required: true},
  poster: { type: String, trim: true, required: true}
},{
  strict: false
})

const Film = conn.model('Film', filSchema)

const newDocument = new Film({
  _id: new mongoose.Types.ObjectId,
  title: 'Star Wars',
  poster: 'http://www.debite.com.mx'
})

newDocument.save(err => {
  if(err){
    throw err
  }
})
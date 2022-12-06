//Require morgan
const morgan = require('morgan')

//Require express
const express = require('express')

//Require ejs layout
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 3000

//Setup view engine ejs
app.set('view engine', 'ejs')

//Setup express layout ejs
app.use(expressLayouts)

//Setup express ejs
app.use(express.static('public'));

//Setup morgan ejs
app.use(morgan('dev'))

//Menggunakan middleware
// app.use((req, res, next) => {
//   console.log('Time:', Date.now())
//   next()
// })

//Menghubungkan ke index html (tampilan awal)
app.get('/', (req, res) => {
  res.render('index', 
  //value yang dikirim ke index.ejs
  { nama: 'Anin', 
  title: 'Home Page',
  layout: 'layout/lay'}) 
})

//Menghubungkan ke about.html
app.get('/about', (req, res) => {
  res.render('about',
   //value yang dikirim ke about.ejs
 { title: 'About Page',
   layout: 'layout/lay'})
   //next()
})

//Menghubungkan ke contact html
app.get('/contact', (req, res) => {
  //Membuat variable contact
  cont =[
  {
    name:'Anin',
    email:'anin@gmail.com',
  },

  {
    name:'Anifa',
    email:'anifa@gmail.com',
  },

  {
    name:'Orang',
    email:'orang@gmail.com',
  },
]

res.render('contact', 
{
   //value yang dikirim ke contact.ejs
  nama:'Anin',
  title:'Contact Page',
  cont,
  layout: 'layout/lay'})
})

app.get('/product/:id', (req, res) => {
  res.send(`product id : ${req.params.id} <br> category id : ${req.query.category}`)
})

//Error
app.use('/', (req, res) => {
  res.status(404)
  res.send('Error : Page not found!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
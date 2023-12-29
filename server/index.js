const express = require('express')
const db = require('./database/index.js')
const PORT = 3000
const app = express()
const cors = require('cors')
const commerceRoutes = require('./routes/commerce.js')
const userRoutes=require('./routes/usersRoute.js')
const cartRoutes = require('./routes/cartRoute.js')
const productRoute = require('./routes/productRoute.js')
const authController=require('./controllers/authController.js')
const adminRoute = require('./routes/adminRoute.js')
const wishRoute=require('./routes/wishRoute.js')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/../client/dist'))

app.post('/api/register',authController.Register)
app.post("/api/login",authController.Login)
app.use('/api', commerceRoutes); 
app.use('/api', cartRoutes); 
app.use('/api',userRoutes)
app.use('/api', productRoute); 
app.use('/api', adminRoute); 
app.use('/api', wishRoute);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
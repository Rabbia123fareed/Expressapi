const app = require('express')
const router = app.Router()
const { placeOrder, allOrders, trackOrder } = require('./controller')

router.post('/placeorder', placeOrder)
router.get('/getallorders', allOrders)
router.get('/track-order/:_id', trackOrder)


module.exports = router
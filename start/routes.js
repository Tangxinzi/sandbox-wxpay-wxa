'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Database = use('Database')
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('checkout', 'CheckoutController.render')

Route.post('wxpay/notify', 'CheckoutController.wxPayNotify')

Route.post('checkout/pay', 'CheckoutController.pay')

Route.get('/jscode2session', 'CheckoutController.jscodeToSession')

Route.get('checkout/completed', 'CheckoutController.completed')

Route.post('checkout/query', 'CheckoutController.query')

Route.get('/order', async ({ request }) => {
  const openid = request.input('openid')
  return await Database.from('wp_orders').where({ openid })
})

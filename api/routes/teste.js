module.exports = (res) => {
  console.debug('aqui', res);
  // const app = express();
  res.send('Received a GET HTTP method2');

  // const controller = require('../controllers/teste.controller.js')();

  app.route('/api/teste')
  .get(controller.listCustomerWallets);
}
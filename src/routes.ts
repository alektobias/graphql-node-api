import { Router } from 'express';

const routes = Router();

routes.route('/').get((req, res) => {
  return res.send('Everything is working fine!')
})


export default routes;
const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('index', '/');
routes.add('works', '/works');
routes.add('about', '/about');
routes.add('tac', '/works/tac');
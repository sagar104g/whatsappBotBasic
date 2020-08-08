const messageRoutes = require('./sendMessage');



const API_PREFIX = '/api/v1';

module.exports = (app) => {
  app.use(API_PREFIX, messageRoutes);
};

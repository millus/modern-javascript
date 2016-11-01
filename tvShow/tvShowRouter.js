const express = require('express');
const TvShow = require('./TvShow');
const TvShowService = require('./TvShowService');

const tvShowRouter = express.Router();


tvShowRouter.get('/',(req, res) => {
  res.json(TvShowService.getAll());
});

module.exports = tvShowRouter;

const express = require('express');
const userRouter = require('./user.router');
const countryRouter = require('./country.router');
const cityRouter = require('./city.router');
const continentRouter = require('./continent.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', userRouter)
router.use('/countries', countryRouter)
router.use('/cities', cityRouter);
router.use('/continents', continentRouter)

module.exports = router;

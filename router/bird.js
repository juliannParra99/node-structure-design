const express = require('express');

const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })
  // define the home page route; dejo la ruta vacia por en  index despues la voy a asignar com "/bird"
  router.get('/', (req, res) => {
    res.send('Birds home page')
  })
  // define the about route
  router.get('/about', (req, res) => {
    res.send('About birds')
  })

  module.exports = router;
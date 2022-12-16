const express = require('express');
const router = express.Router();

const laptopsController = require('../app/controllers/LaptopsController');

router.get('/create', laptopsController.create);
router.get('/:id/edit', laptopsController.edit);
router.put('/:id', laptopsController.update);
router.delete('/:id', laptopsController.delete);
router.post('/store', laptopsController.store);
router.get('/:slug', laptopsController.show);
router.get('/', laptopsController.index);

module.exports = router;

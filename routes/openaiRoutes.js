const { generateImage } = require('../controllers/openaiController');

const router = require('express').Router();

router.post('/generateimage', generateImage);

module.exports = router;

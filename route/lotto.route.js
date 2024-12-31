const express = require('express');
const router = express.Router();

const { lottery } = require('../controls/lotto.control');

router.get('/', lottery);

module.exports = router;

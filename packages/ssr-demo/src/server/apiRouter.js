const express = require('express');

const router = express.Router();

router.get('/home', function (req, res, next) {
  res.json({
    title: 'home',
    desc: 'home接口 你好'
  });
});
router.get('/user', function (req, res, next) {
  res.json({
    name: '章三',
    age: 12,
    id: '001'
  });
});

module.exports = router;

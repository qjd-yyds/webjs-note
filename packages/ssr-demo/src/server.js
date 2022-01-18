require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});
const express = require('express');
const appRouter = require('./appRouter');
const app = express();
app.use(appRouter);
// 静态映射
app.use(express.static('build'));
app.listen(3000, () => {
  console.log('express is listen on port 3000');
});

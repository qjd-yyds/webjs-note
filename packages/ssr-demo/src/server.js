require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});
const express = require('express');
const appRouter = require('./appRouter');
const app = express();
// 静态映射
app.use('/build', express.static('build'));
// 匹配到/走这个路由
app.use('/', appRouter);

app.listen(3000, () => {
  console.log('express is listen on port 3000');
});

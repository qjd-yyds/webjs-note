// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// 搜索建议 mock

export default (req, res) => {
  const { kw = '' } = req.query
  res.statusCode = 200
  res.json({
    code: '0',
    msg: 'success',
    data: ['小学大语法集训班', '小学自然拼读飞跃计划全能班', '小学数学', '小学语文', '小学'].map(
      (s) => `${s}${kw}`,
    ),
  })
}
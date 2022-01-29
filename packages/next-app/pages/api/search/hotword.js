// 热门搜索
export default (req, res) => {
  res.statusCode = 200
  res.json({
    msg: 'success',
    code: '0',
    data: [
      {
        title: '英语提升✔',
        type: 2,
        id: 1005,
      },
      {
        title: '高考冲鸭❤',
        type: 2,
        id: 1003,
      },
      {
        title: '中考必胜❤',
        type: 2,
        id: 1002,
      },
      {
        title: '四六级逆袭✌',
        type: 2, // 课程详情页面
        id: 1004, // 课程id
      },
      {
        title: '四级全程班',
        type: 1, // 分类页面
        id: 102, // 分类id
      },
      {
        title: '王菲语法',
        type: 1,
        id: 103,
      },
    ],
  })
}
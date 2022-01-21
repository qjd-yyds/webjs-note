// 动态路由
export default function handler(req, res) {
  const {
    query: { id }
  } = req;
  res.status(200).json({
    query: id
  });
}

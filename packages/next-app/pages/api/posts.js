export default function handler(req, res) {
  res.status(200).json([
    {
      title: '博客1',
      id: '1'
    },
    {
      title: '博客2',
      id: '2'
    },
    {
      title: '博客3',
      id: '3'
    }
  ]);
}

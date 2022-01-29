// 搜索结果
export default (req, res) => {
  const { query } = req
  const { kw = '', start = 0, offset = 10 } = query
  // 模拟没有结果返回
  if (kw === 'empty') {
    res.statusCode = 200
    res.json({
      code: '0',
      msg: 'success',
      data: [],
    })
    return
  }

  // 模拟分页数据
  const mockData = [
    // 课程信息
    {
      // 课时
      lessonNum: 101.5,
      // 教师
      teacherList: [
        {
          // 头像
          img: '/img/teacher2.png',
          // 名字
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
        {
          img: '/img/teacher2.png',
          name: '张三3',
        },
        {
          img: '/img/teacher2.png',
          name: '张三4',
        },
      ],
      // 分类
      categoryName: '专四专八',
      // 标题
      courseTitle: '【适用20备考】专八全程班（领券下单只需1299元！）',
      // 课程id
      id: 100,
      // 促销类型 0: 没有促销， 1: 有促销
      saleType: 0,
      // 已售数量
      saleNum: 394,
      // 原价
      price: 2199,
      // 开课时间
      courseTime: '随报随学',
    },
    {
      lessonNum: 249,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
      ],
      categoryName: '考研',
      courseTitle: '2022考研政治抢跑班（加微信领优惠：YDKS111）',
      id: 101,
      saleType: 0,
      saleNum: 422,
      price: 4999,
      courseTime: '2020-01-09 19:00:00',
    },
    {
      lessonNum: 36.5,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
      ],
      categoryName: '四六级',
      courseTitle: '王菲语法长难句班·第17季（本季新增写译课+精读课）',
      id: 102,
      // 促销开始时间
      saleStartTime: +new Date() - 1000,
      // 有促销
      saleType: 1,
      // 促销结束时间
      saleEndTime: +new Date() + 20000,
      // 原价
      price: 699,
      // 促销价格
      salePrice: 599,
      courseTime: '2020-07-27 19:30',
    },
    {
      lessonNum: 112,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
        {
          img: '/img/teacher2.png',
          name: '张三3',
        },
        {
          img: '/img/teacher2.png',
          name: '张三4',
        },
      ],
      categoryName: '四六级',
      courseTitle: '【12月考试】四级全程班·1班（暑假抢跑，轻松备战！）',
      id: 103,
      saleStartTime: +new Date() - 1000,
      saleType: 1,
      saleNum: 1959,
      saleEndTime: +new Date() + 24 * 60 * 60 * 1000,
      price: 399,
      courseSaleTime: 1593792600000,
      salePrice: 299,
      courseTime: '2020-08-06 08:30',
    },
    {
      lessonNum: 112,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
        {
          img: '/img/teacher2.png',
          name: '张三3',
        },
        {
          img: '/img/teacher2.png',
          name: '张三4',
        },
      ],
      categoryName: '四六级',
      subCategories: [],
      courseTitle: '【12月考试】六级全程班·1班（暑假抢跑，轻松备战！）',
      id: 104,
      saleStartTime: +new Date() - 1000,
      saleType: 1,
      saleNum: 778,
      saleEndTime: +new Date() + 5 * 24 * 60 * 60 * 1000,
      price: 399,
      salePrice: 299,
      courseTime: '2020-08-06 10:30',
    },
    {
      lessonNum: 26,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
      ],
      // 分类
      categoryName: '实用英语',
      // 标题
      courseTitle: '杨亮讲单词·方法与实战16班',
      // 课程id
      id: 105,
      // 促销类型
      saleType: 0,
      saleNum: 100,
      price: 999,
      courseTime: '随到随学',
    },
    {
      lessonNum: 180,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
      ],
      categoryName: '考研',
      courseTitle: '2021考研政治领学14班',
      id: 106,
      saleType: 0,
      saleNum: 0,
      price: 4999,
      courseTime: '随到随学',
    },
    {
      lessonNum: 249,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
        {
          img: '/img/teacher2.png',
          name: '张三1',
        },
        {
          img: '/img/teacher2.png',
          name: '张三2',
        },
      ],
      categoryName: '考研',
      courseTitle: '2022考研政治抢跑班（加微信领优惠）',
      id: 107,
      saleType: 0,
      saleNum: 422,
      price: 4999,
      courseTime: '2020-01-09 19:00:00',
    },
    {
      lessonNum: 265,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
      ],
      categoryName: '考研',
      courseTitle: '2022考研数学抢跑班（加微信领优惠）',
      id: 108,
      saleType: 0,
      saleNum: 224,
      price: 4999,
      courseTime: '2020-01-15 19:00:00',
    },
    {
      lessonNum: 265,
      teacherList: [
        {
          img: '/img/teacher2.png',
          name: '张三',
        },
      ],
      categoryName: '考研',
      courseTitle: '2021考研数学抢跑班',
      id: 109,
      saleType: 0,
      saleNum: 224,
      price: 4999,
      courseTime: '2020-01-15 19:00:00',
    },
  ]
  // start > 0模拟返回不足offset条数据
  const resData =
    Number(start) > 0
      ? mockData.slice(0, offset - 2).map((item, idx) => {
          const index = start * 10 + idx
          item.courseTitle += `${index}-${kw}`
          item.id += index
          return item
        })
      : mockData.slice(0, offset)
  res.statusCode = 200
  res.json({
    code: '0',
    msg: 'success',
    data: resData,
  })
}
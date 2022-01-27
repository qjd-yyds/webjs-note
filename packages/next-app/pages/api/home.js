export default (req, res) => {
  res.statusCode = 200;
  res.json({
    msg: 'success',
    code: '0',
    data: {
      // banner
      banner: [
        {
          img: '/img/banner1.png',
          title: '5天用公式巧学英语',
          courseId: 301
        },
        {
          img: '/img/banner2.png',
          title: '3天带你摆脱“哑巴英语”',
          courseId: 302
        },
        {
          img: '/img/banner3.png',
          title: '雅思从迷茫到7分，备考规划三步走',
          courseId: 303
        },
        {
          img: '/img/banner4.png',
          title: '【延考必备】一节课带你吃透专八听力（不设回放）',
          courseId: 304
        }
      ],
      // 弹窗
      popup: {
        img: '/img/banner1.png',
        courseId: 305
      },
      // 公开课
      talk: {
        recommend: [
          {
            img: '/img/talk1.png',
            title: '教你用中文思维学韩语',
            type: 'left',
            courseId: 305
          },
          {
            img: '/img/talk2.png',
            title: '比动漫有趣的日语入门课',
            type: 'rightTop',
            courseId: 307
          },
          {
            img: '/img/talk3.png',
            title: '教你用中文思维学韩语',
            type: 'rightBottom',
            courseId: 308
          }
        ],
        card: [
          {
            title: '【备战9月 抢分计划】四六级听力涨分必备技巧指导（不设回放）',
            type: 'talk',
            teacher: {
              img: '/img/image(1).png',
              title: '欧阳萍'
            },
            courseId: 309
          },
          {
            title: '【新高一】高中物理运动学问题初探（第九期）',
            type: 'talk',
            teacher: { title: '杨超' },
            courseId: 310
          },
          {
            title: '【升初三】数学几何快速提升攻略',
            type: 'talk',
            teacher: { title: '孟亚飞' },
            courseId: 311
          },
          {
            title: '雅思从迷茫到7分，备考规划三步走',
            type: 'talk',
            teacher: { title: '丁爽' },
            courseId: 312
          }
        ]
      },
      // 一级分类入口
      fixedEntries: [
        {
          img: '/img/image (1).png',
          id: 1001,
          title: '小学'
        },
        {
          img: '/img/image (2).png',
          id: 1002,
          title: '初中'
        },
        {
          img: '/img/image (4).png',
          id: 1003,
          title: '高中'
        },
        {
          img: '/img/image (5).png',
          id: 1004,
          title: '四六级'
        },
        {
          img: '/img/image (8).png',
          id: 1005,
          title: '实用英语'
        },
        {
          img: '/img/image (9).png',
          id: 1006,
          title: '考研'
        },
        {
          img: '/img/image (10).png',
          id: 1007,
          title: '兴趣技能'
        },
        {
          img: '/img/image (11).png',
          id: 1008,
          title: '逻辑英语'
        },
        {
          img: '/img/image (30).png',
          id: 1009,
          title: '专四专八'
        },
        {
          img: '/img/image (31).png',
          id: 1010,
          title: '教师资格'
        },
        {
          img: '/img/image (32).png',
          id: 1011,
          title: '雅思托福'
        },
        {
          img: '/img/image (33).png',
          id: 1012,
          title: '编程开发'
        }
      ]
    }
  });
};

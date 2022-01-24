import request from './request';

// 搜索结果
export const getSearchResult = (kw = '', start = 0) =>
  request.get('/search/result', {
    params: {
      kw,
      start
    }
  });

// 搜索建议
export const getSearchSuggest = (kw = '') =>
  request.get('/search/suggest', {
    params: {
      kw
    }
  });

// 热门词汇
export const getHotWord = () => request.get('/search/hotword');

// 首页
export const getHome = () => request.get('/home');

// 首页推荐
export const getRecommend = (params) => request.get('/recommend', { params });

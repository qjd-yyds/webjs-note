import React, { PureComponent } from 'react';
let scrollTimer = null;
import s from './loadMore.module.css';
function rendercCont(isLoadingMore, hasMore, customNoMoreText) {
  if (isLoadingMore) {
    return <div className={s.loadText}>正在加载</div>;
  }
  return hasMore ? (
    <div className={s.loadText}>加载更多...</div>
  ) : (
    <div className={s.loadText}>{customNoMoreText || '没有更多了'}</div>
  );
}
class LoadMore extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingMore: false
    };
  }
  handleScroll = () => {
    if (scrollTimer) clearTimeout(scrollTimer);
    // 1.可以加载更多
    // 2.没有正在加载更多
    // 3.scroll触底底部：已滚动距离+屏幕高度 >= 文档总高度
    const { onReachBottom, hasMore } = this.props;
    const { isLoadingMore } = this.state;
    const curPos = window.scrollY; // 当前滚动的高度
    const height = window.screen.height; // 当前屏幕高度
    const docHeight = window.document.body.scrollHeight; // 文档总高度
    if (hasMore && !isLoadingMore && curPos + height >= docHeight) {
      scrollTimer = setTimeout(() => {
        this.setState({
          isLoadingMore: true
        });
        onReachBottom()
          .then((res) => {
            this.setState({
              isLoadingMore: false
            });
          })
          .catch((e) => {
            console.error('onReachBottom Error', e);
            this.setState({
              isLoadingMore: false
            });
          });
      }, 300);
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  render() {
    const { hasMore, customNoMoreText } = this.props;
    const { isLoadingMore } = this.state;
    return <div className={s.loadMore}>{rendercCont(isLoadingMore, hasMore, customNoMoreText)}</div>;
  }
}

export default LoadMore;

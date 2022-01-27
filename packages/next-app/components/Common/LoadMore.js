import React, { PureComponent } from 'react';
let scrollTimer = null;
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
    return <div>{this.props.hasMore ? '加载更多...' : '到底了~~~'}</div>;
  }
}

export default LoadMore;

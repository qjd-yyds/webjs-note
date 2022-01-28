import React from 'react';
import s from './countDown.module.css';
/*******
 * @description: 格式化时间
 * @param {Number} ms 计算剩余的时间 单位ms
 * @return {Array} ["hour:min:sec",'day]
 */
const formatCountDown = (ms) => {
  if (ms < 0) return ['00:00:00'];
  const t = ms / 1000; // 得到秒
  let sec = parseInt(t % 60, 10); // 真正的秒 商分钟数
  let m = parseInt((t / 60) % 60, 10); // 不足一小时的分 商小时
  const ho = parseInt(t / 60 / 60, 10);
  let h = parseInt(ho % 24, 10); // 不足一天的小时 商天
  const d = parseInt(ho / 24, 10);
  sec = sec >= 10 ? sec : `0${sec}`;
  m = m >= 10 ? m : `0${m}`;
  h = h >= 10 ? h : `0${h}`;
  return d === 0 ? [`${h}:${m}:${sec}`] : [`${h}:${m}:${sec}`, d];
};
class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curTimeStamp: new Date().getTime()
    };
    this.timer = null;
  }
  componentDidMount() {
    // 每次创建一个系统时间来解决settimeout不准确的问题
    // 使用setstate更新组件
    this.timer = window.setInterval(() => {
      this.setState({
        curTimeStamp: new Date().getTime()
      });
    }, 500);
  }
  componentDidUpdate() {
    const { end, onEnd } = this.props;
    const { curTimeStamp } = this.state;
    if (end - curTimeStamp < 0 && this.timer) {
      window.clearInterval(this.timer);
      this.timer = null;
      onEnd();
    }
  }
  componentWillUnmount() {
    window.clearInterval(this.timer);
    this.timer = null;
  }
  render() {
    const { end, onEnd } = this.props;
    const { curTimeStamp } = this.state;
    // 计算剩余时间
    const countDownArr = formatCountDown(end - curTimeStamp);
    return (
      <span>
        {countDownArr.length > 1 ? (
          <span>
            <span className={s.warningColor}>{countDownArr[1]}</span>天
          </span>
        ) : null}
        <span className={s.warningColor}>{countDownArr[0]}</span>
      </span>
    );
  }
}

export default CountDown;

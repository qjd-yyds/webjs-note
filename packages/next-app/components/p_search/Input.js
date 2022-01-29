import { useRef } from 'react';
import s from './input.module.css';
const Input = ({ inputVlaue, setInputValue, fetchSuggest, showHistory, submitSearch }) => {
  const inputEl = useRef(null);
  // 改变输入框状态
  const handleChange = (e) => {
    const searchVal = e.target.value.trim();
    setInputValue(searchVal);
    if (!searchVal) {
      fetchSuggest.cancel(); // 取消之前搜索建议的请求
      // 切换到搜索历史
      showHistory();
      return;
    }
    // 字符为空搜索建议
    if (searchVal !== inputVlaue) {
      fetchSuggest(searchVal); // 搜索关键词
    }
  };
  // 键盘,键盘的回车不触发onchange事件
  const handleKeyUp = (e) => {
    if (e.keyCode !== 13 || !inputEl?.current) return;
    // 阻止回车的默认事件
    const event = e || window.event;
    event.preventDefault();
    // 取消之前搜索建议的请求
    fetchSuggest.cancel();
    // 按了回车 提交
    const filteredVal = e.target.value.trim();
    if (!filteredVal) {
      // 重置
      setInputValue('');
    }
    submitSearch(filteredVal);
    // 收起软键盘
    inputEl.current.blur();
    return false; // 阻止表单提交
  };
  // 清除输入框
  const handleClean = () => {
    fetchSuggest.cancel();
    showHistory();
    setInputValue('');
    inputEl.current.focus();
  };
  // 软键盘设置成搜索
  // 禁止自动提交
  // 1.在js回调里return false
  // 2.form里多个单行输入框标签，不会触发提交
  return (
    <div className={s.content}>
      <div className={`border-b-1px ${s.formCont}`}>
        <form action="">
          <input
            placeholder="请输入搜索内容"
            className={s.search}
            type="search"
            ref={inputEl}
            value={inputVlaue}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
          />
          <input style={{ display: 'none' }}></input>
        </form>
        {inputVlaue ? <button className={s.clean} onClick={handleClean}></button> : null}
      </div>
    </div>
  );
};

export default Input;

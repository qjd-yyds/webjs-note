import React from 'react';

const CustomLink = ({ onClick, href }, ref) => {
  return (
    // ref父组件拿到当前组件的引用
    <a href={href} ref={ref} onClick={onClick} style={{ color: 'red' }}>
      自定义跳转bookone
    </a>
  );
};

export default React.forwardRef(CustomLink);

import React,{useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import IndexRoute from './router';
import Header from './common/component/header';
import Menu from './common/component/menu';
import "./common/css/reset.css";
import "./common/css/common.css";
function App() {
  const [showMenu,setShowMenu] = useState(false);
  function menuHide(){
      setShowMenu(false);
  }
  function changeShow(){
      setShowMenu(!showMenu);
  }
  return (
    <BrowserRouter>
      <div>
        <Header
          changeShow = {changeShow}  
        />
        <Menu
            menuHide={menuHide}
        />
        <div
          className="pageWrap"
           style={{
                transform: `translateX(${showMenu?4.5:0}rem)`
            }}
            onTouchStart={menuHide}
        >
          {/* <Frame> */}
              <IndexRoute />
          {/* </Frame> */}
        </div>
      </div>  
    </BrowserRouter> 
  );
}

export default App;

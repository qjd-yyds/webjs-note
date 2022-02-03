import React,{useState,useEffect} from 'react';
import {connect} from "react-redux";
import Tab from "../../common/component/tab";
import getWorks from "../../store/action/getWorks";
import "../../common/css/index.css";
import Course from './course';
import Vip from './vip';
import Miaov from './miaov';
import Works from './works';
import Frame from '../../common/component/frame';
let imgData = [
  require("../../common/images/tab/img1.png"),
  require("../../common/images/tab/img2.png"),
  require("../../common/images/tab/img3.png"),
  require("../../common/images/tab/img4.png")
];
function Index(props) {
  let {dispatch} = props;
  function getWorsData(){
    return dispatch((getWorks()))
  }
  useEffect(()=>{
    getWorsData();
  },[]);
  return (
      <Frame
        pullUp = {true}
        getData = {getWorsData}
      >
          <div>
            <Tab 
              data = {imgData}
              render = {(data)=>{
                return <img src={data}/>
              }}
            />
            <section className="index_content">
                <Course />
                <Vip />
                <Miaov />
                <Works {...props}/>
            </section>
        </div>
      </Frame>
);
}

export default connect(props=>({...props.works}))(Index);
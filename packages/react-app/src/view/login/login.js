import React,{useState} from 'react';
import {connect} from "react-redux";
import login from "../../store/action/login";
import {withRouter} from "react-router-dom";
import {useBack} from "../../common/hook/index";
function LoginBox(props){
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [vcode,setVcode] = useState("");
    const [vcodeShow,setVcodeShow] = useState(false);
    const [vcodeSrc,setVcodeSrc] = useState("/miaov/user/verify?"+Date.now());
    const back = useBack(props.history);
    const {setDeg} = props;
    function toLogin(){
        props.dispatch(login({
            verify: vcode,
            username: user,
            password
        })).then(data=>{
            alert(data.msg);
            setTimeout(()=>{
                if(data.code != 0){
                    setVcodeSrc("/miaov/user/verify?"+Date.now());
                } else {
                    back();
                }
            },100);
        })
    }
    let point = {};
    return (
        <div className="login_box">
            <figure className="user_img">
                <img src={require("../../common/images/user_img.png")} alt="" />
                <figcaption>如有账号，请直接登录</figcaption>
            </figure>
            <div className="login_form">
                <p>
                    <input 
                        type="text" 
                        placeholder="用户名"  
                        value = {user}    
                        onChange = {e=>{
                            setUser(e.target.value)
                        }}
                    />
                </p>
                <p>
                    <input 
                        type="password" 
                        placeholder="请输入密码" 
                        value={password}
                        onChange={e=>{
                            setPassword(e.target.value);
                        }}
                    />
                </p>
                <p className="clearfix">
                    <input 
                        type="text" 
                        placeholder="验证码" 
                        value={vcode}
                        onChange={e=>{
                            setVcode(e.target.value);
                        }}
                        onFocus={()=>{
                            setVcodeShow(true);
                        }}
                        className="verifyCode"
                    />
                    {vcodeShow?
                        <img 
                            className="verify" 
                            src={vcodeSrc} 
                            onTouchStart={(e)=>{
                                let touch = e.changedTouches[0];
                                point.x = touch.pageX;
                                point.y = touch.pageY;
                            }}
                            onTouchEnd={(e)=>{
                                    let touch = e.changedTouches[0];
                                    let nowPoint = {
                                        x: touch.pageX,
                                        y: touch.pageY
                                    };
                                    if(Math.abs(nowPoint.x - point.x)<5
                                    &&Math.abs(nowPoint.y - point.y)<5){
                                        setVcodeSrc("/miaov/user/verify?"+Date.now()) 
                                }}}/>:""}
                    
                        </p>
                <button 
                    className="form_btn"
                    onClick = {toLogin}        
                >登录</button>
                <p className="form_tip">没有帐号？<a
                    onClick={()=>{
                        setDeg(-180)
                    }}
                >立即注册</a></p>
            </div>
        </div>
    );
}
export default connect(res=>res)(withRouter(LoginBox));
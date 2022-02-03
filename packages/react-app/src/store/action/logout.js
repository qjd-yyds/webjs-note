import HTTP from "./http";
export default function loginOut(data){
    return function(dispatch){
       return HTTP.post("/user/logout").then(res=>{
           //console.log(res);
            if(res.data.code === 0){
                dispatch({
                    type: "LOGOUT"
                });
            }
        })
    }
}
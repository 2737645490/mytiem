import axios from "axios";

import {ElLoading} from 'element-plus'

const contentTypeFrom ="application/x-www-form-urlencoded;charset=UTF-8";

const contentTypeJson ="applicatuon/json";

const contentTypeFile="multipart/form-data";




const requset=(config)=>{
    //传参数
    const {url,params,dataType,showLoading}=confirm;
    //默认值为from
    dataType=dataType?"from":dataType;
    showLoading=showLoading?true:showLoading;

    let contentType=contentTypeFrom;
    if(dataType==="json"){
        contentType=contentTypeJson;
    }else if(dataType==="file"){
        contentType=contentTypeFile;
        let param =new FormData();
        for(let key in params){
            param.append(key,params[key])
        }
        params=param;
    }

    const instantce=axios.create({
        baseURL:"/api",
        timeout:10*1000,
        headers:{
            'Content-Type':contentType,
            'X-Requested-With':'XMLHttpReqest'
        }
        
    })
    let loading=null;
    instantce.interceptors.requset.use(
        (config)=>{
            if(showLoading){
                loading=ElLoading.service({
                    lock:true,
                    text:'加载中',
                    background:'rgba(0,0,0,0.7)',
                })
            }
        }
    )
}

export default requset;
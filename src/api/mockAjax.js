//對於axios進行二次封裝
import axios from "axios";
//引入進度條
import nprogress from 'nprogress';
//進度條樣式
import 'nprogress/nprogress.css';

//1:利用axios對象的方法create 去創建一個axios實例
//2;request就是axios 只不過稍微配置一下
const requests = axios.create({
    //配置對象
    //基礎路徑 發請求的時候 路徑當中或出現api
    baseURL:"/mock",
    timeout:5000,
});
//請求攔截器
requests.interceptors.request.use((config)=>{
    //config: 配置對象 裡面有一個屬性很重要 headers請求頭
    //進度條開始動
    nprogress.start();
    return config;
})

//相應攔截器
requests.interceptors.response.use((res)=>{
    nprogress.done();
    return res.data
},(error)=>{
    return Promise.reject(new Error('faile'))
})

//對外暴露
export default requests;
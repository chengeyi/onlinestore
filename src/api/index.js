import requests from './request';
import mockRequest from './mockAjax';

//三級連動接口
///api/product/getBaseCategoryList

export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});

//獲取banner(Home首頁輪播圖街口)
export const reqGetBannerList = ()=>mockRequest.get('/banner');
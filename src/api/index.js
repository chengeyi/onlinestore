import requests from './request';

//三級連動接口
///api/product/getBaseCategoryList

export const reCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});
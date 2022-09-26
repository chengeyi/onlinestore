import Mock from 'mockjs';

//因為webpack默認圖片及json數據對外爆露，所以json檔案不用export
import banner from './banner.json';
import floor from './floor.json';

//mock數據：第一個參數請求地址，第二個參數是請求數據
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200,data:floor});
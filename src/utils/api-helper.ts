import axios from 'axios';
import jsSHA from 'jssha';

const baseURL = "https://ptx.transportdata.tw/MOTC/v2/Tourism";
const axiosInstance = axios.create({
  baseURL
});

const getAuthorizationHeader = () => {
  //  填入自己 ID、KEY 開始
      const AppID = '54426ab2ac294e7b8321fff7695e9743';
      const AppKey = 'VDrINApKpSc24ec1SCOwwMfTOV4';
  //  填入自己 ID、KEY 結束
      const GMTString = new Date().toUTCString();
      const ShaObj = new jsSHA('SHA-1', 'TEXT');
      ShaObj.setHMACKey(AppKey, 'TEXT');
      ShaObj.update('x-date: ' + GMTString);
      const HMAC = ShaObj.getHMAC('B64');
      const Authorization = 'hmac username="' + AppID + '", algorithm="hmac-sha1", headers="x-date", signature="' + HMAC + '"';
      return { 'Authorization': Authorization, 'X-Date': GMTString }; 
  }

axiosInstance.interceptors.request.use(
  config => {
    config.headers = getAuthorizationHeader();
    return config;
  },
  err => Promise.reject(err)
)
export const apiHelper = axiosInstance;
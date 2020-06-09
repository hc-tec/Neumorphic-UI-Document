import axios from 'axios';
import { postDataFormat } from './func';


const ajaxGet = (
    url: string, params= {},
    resolve: (res: any, ...args: any) => void,
    reject: (e: Error) => void,
    args: string[]) => {
  args = args ? args : [];
  axios.get(url, {params})
    .then((response) => resolve(response, ...args))
    .catch((e: any) => reject(e));
};

const ajaxPost = (
    url: string,
    data: any,
    resolve: (res: any) => void,
    reject: (e: Error) => void) => {
  axios.post(url, postDataFormat(data))
    .then((response) => resolve(response))
    .catch((e) => reject(e));
};

const ajaxDel = (
    url: string, params= {},
    resolve: (res: any) => void,
    reject: (e: Error) => void) => {
  axios.delete(url, {params})
    .then((response) => resolve(response))
    .catch((e) => reject(e));
};

export {
  ajaxGet,
  ajaxPost,
  ajaxDel,
};


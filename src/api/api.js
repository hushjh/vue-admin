import axios from 'axios';
import common from '@/common/js/common'

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

export const getDbData=(lb, dt)=>{
    var csz = {};
    csz.lb = lb;
    csz.cs = dt;
    var param = {};
    param.sqlcsz = common.objectToParam(csz);
    return axios.get('http://localhost:43427/ashx/dbread.ashx',{params:param});
}
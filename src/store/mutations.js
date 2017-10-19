import * as types from './types';

const mutations = {
    [types.GET_USERNAME]:(state,data)=>{
        state.username = data;//直接修改数据状态
    },
};

export default mutations;
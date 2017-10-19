import * as types from './types';

const mutations = {
    [types.GET_USERNAME]:(state,data)=>{
        state.username = data;
    },
};

export default mutations;
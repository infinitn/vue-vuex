import * as types from './types';

const actions = {
    saveName:({commit},data)=>{
        commit(types.GET_USERNAME,data);
    },
}

export default actions;
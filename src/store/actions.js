import * as types from './types';

const actions = {
    saveName:({commit},data)=>{
        commit(types.GET_USERNAME,data);//提交到mutations中
    },
}

export default actions;
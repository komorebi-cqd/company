export const state = () => ({
    products: "",
})

export const mutations = {
    //更新产品
    upProducts(state, payload) {
        state.products = payload;
    },
    
}

export const actions = {
    //产品页请求产品
    async requestProd(cxt, playload) {
        let requestPath = "/api/products"
        const { data } = await this.$axios.$get(requestPath,{params:playload});
        for (let index = 0; index < data.datas.length; index++) {
            if (typeof  data.datas[index].feature === "string") {
                data.datas[index].feature = data.datas[index].feature.split(" ");
            }
        }
        cxt.commit('upProducts', data);
    },

    
}
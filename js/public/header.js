const jiangweiHeader = `
<div class="header w">
            <div class="logo">
            <i @click="toIndex">
                <img src="./img/logo.png" alt="">
            </i>
            </div>
            <div class="searchLabel">
                    <label>
                        <input type="text" v-model="search" placeholder="" />
                    </label>
                    <button type="text" @click="doSearch"></button>
            </div>
            <div class="toShopCar">
                <i class="fa fa-shopping-cart fa-lg"></i>
                购物车
                <i class="fa fa-angle-right angle fa-lg"></i>
            </div>
        </div>
`;
//  定义Vue组件
var headerComponent = Vue.extend({
    template: jiangweiHeader, //定义组件模板
    data() {
        return {
            search: this.$attrs.searchtext == undefined ? '' : this.$attrs.searchtext
        };
    },
    methods: {
        doSearch() {
            this.$emit("func", this.search);
        },
        toIndex() {
            window.location = 'index.html';
        }
    }, //定义组件的方法
    props: ['searchText'], //配置需要传入的属性
});
//注册Vue全局组件
Vue.component("jiangwei-header", headerComponent);
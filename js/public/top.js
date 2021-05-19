const jiangweiTop = `
<div class="shortcut">
            <div class="w">
                <div class="fl">
                    <ul>
                        <li>疆味欢迎您！</li>
                        <li>
                            <a href="#" class="loginAndSign">登录</a>
                            <a href="#" class="loginAndSign">注册</a>
                        </li>
                    </ul>
                </div>
                <div class="fr">
                    <ul class="shortcut-li">
                        <li><a href="#">我的订单</a></li>
                        <li class="space-line">|</li>
                        <li><a href="#">我的收藏</a></li>
                        <li class="space-line">|</li>
                        <li><a href="#">个人中心</a></li>
                        <li class="space-line">|</li>
                        <li><a href="#">联系客服</a></li>
                        <li class="space-line">|</li>
                        <li class="hasLiIcon"><a href="#">相关网站</a><i class="fa fa-angle-down angle"
                                style="margin: 0px 4px -2px 6px"></i></li>
                    </ul>
                </div>
            </div>
        </div>`;
//  定义Vue组件
var topComponent = Vue.extend({
    template: jiangweiTop,   //定义组件模板
    data() {
        return {
            msg: 'hello,这是自定义的list组件'
        };
    },   
    methods: {},       //定义组件的方法
    props: ['topProps'],  //配置需要传入的属性
});
//注册Vue全局组件
Vue.component("jiangwei-top",topComponent);
const jiangweiFooter = `
<div class="w footer">
<div id="copyright-footer" class="column small">
<ul class="footer-column-t">
<li>
  <a href="#" >关于我们</a>
</li>
<li>
  <a href="#" >招贤纳士</a>
</li>
<li>
  <a href="#" >广告服务</a>
</li>
<li>
  <a href="#" >开发助手</a>
</li>
<li>
  <span>000-000-0000</span>
</li>
<li>
  <a href="#" >www.xxx@jiangwei.net</a>
</li>
<li>
  <a href="#" >在线客服</a>
</li>
<li>
  工作时间&nbsp;8:30-22:00
</li>
</ul>
<ul class="footer-column-b">
<li><a href="#" >公安备案号000000000000000</a></li>
<li><a href="#" >京ICP备000000000号</a></li>
<li><a href="#" >京网文〔2020〕0000-000号</a></li>
<li><a href="#" >经营性网站备案信息</a></li>
<li><a href="#" >北京互联网违法和不良信息举报中心</a></li>
<li><a href="#" >网络110报警服务</a></li>
<li><a href="#" >中国互联网举报中心</a></li>
<li><a href="#" >家长监护</a></li>
<li><a href="#" >Chrome商店下载</a></li>
<li>©1999-2021疆味xxx有限公司</li>
<li><a href="#" >版权与免责声明</a></li>
<li><a href="#" >版权申诉</a></li>
<li><a href="#" >营业执照</a></li>
</ul>
</div>
        </div>
`;
//  定义Vue组件
var footerComponent = Vue.extend({
    template: jiangweiFooter, //定义组件模板
    data() {
        return {
            msg: 'hello,这是自定义的list组件'
        };
    },
    methods: {}, //定义组件的方法
    props: ['footerProps'], //配置需要传入的属性
});
//注册Vue全局组件
Vue.component("jiangwei-footer", footerComponent);
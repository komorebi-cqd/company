(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{405:function(t,e,d){var content=d(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(15).default)("69cc5192",content,!0,{sourceMap:!1})},417:function(t,e,d){"use strict";d(405)},418:function(t,e,d){var n=d(14)(!1);n.push([t.i,".detail-header[data-v-4594e333]{text-align:left}.detail-header .detail-img[data-v-4594e333]{width:400px;height:400px;border:5px solid #ebebeb}.detail-header .detail-img-list[data-v-4594e333]{display:flex;flex-wrap:wrap;overflow:hidden}.detail-header .detail-img-list a[data-v-4594e333]{border:2px solid #ddd;width:90px;height:90px;margin-right:10px}.detail-header .detail-img-list a img[data-v-4594e333]{width:100%}.detail-header .introduce .detail-common[data-v-4594e333]{padding-top:20px}.detail-header .introduce .detail-common span[data-v-4594e333]{font-size:14px;color:#999;padding-right:20px}.detail-header .introduce .detail-title[data-v-4594e333]{font-size:20px}.detail-header .introduce .detail-title span[data-v-4594e333]{color:#999}.detail-header .introduce .detail-price[data-v-4594e333]{font-size:22px;font-weight:400;color:#ef1f1f}.detail-header .introduce .detail-address[data-v-4594e333],.detail-header .introduce .detail-number[data-v-4594e333]{font-size:14px}.detail-header .introduce .detail-contact[data-v-4594e333]{padding-top:50px}",""]),t.exports=n},430:function(t,e,d){"use strict";d.r(e);d(54);var n={props:["datas"],data:function(){return{urlIndex:"0"}},methods:{switchPic:function(t){this.urlIndex=t},open:function(){var t=this;this.$prompt("请输入手机您的手机号码","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^1[3|4|5|7|8][0-9]{9}$/,inputErrorMessage:"手机号码格式不正确"}).then((function(e){var d=e.value;t.$message({type:"success",message:"你的手机号是: "+d+"，我们会尽快和您取得联系"})})).catch((function(){t.$message({type:"info",message:"取消输入"})}))}},computed:{srcList:function(){return this.datas.Mainpics.map((function(t){return t.main_pic}))},bigPic:function(){return this.datas.Mainpics[this.urlIndex].main_pic}},created:function(){},components:{}},r=(d(417),d(4)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("div",{staticClass:"detail-header"},[d("el-row",{attrs:{type:"flex",justify:"space-around"}},[d("el-col",{attrs:{span:9}},[d("el-image",{staticClass:"detail-img",attrs:{src:t.bigPic,"preview-src-list":t.srcList}}),t._v(" "),d("div",{staticClass:"detail-img-list"},t._l(t.datas.Mainpics,(function(e,n){return d("a",{key:n,on:{click:function(e){return t.switchPic(n)}}},[d("img",{attrs:{src:e.main_pic,alt:e.brand}})])})),0)],1),t._v(" "),d("el-col",{staticClass:"introduce",attrs:{span:14}},[d("div",{staticClass:"detail-title"},[d("h3",[d("span",[t._v("产品名称：")]),t._v(t._s(t.datas.title))])]),t._v(" "),d("div",{staticClass:"detail-common detail-price"},[d("p",[d("span",[t._v("价格：")]),t._v("￥"+t._s(t.datas.price))])]),t._v(" "),d("div",{staticClass:"detail-common detail-address"},[d("p",[d("span",[t._v("发货地：")]),t._v(" 广东东莞 ")])]),t._v(" "),d("div",{staticClass:"detail-common detail-address"},[d("p",[d("span",[t._v("特性：")]),t._v(t._s(t.datas.feature))])]),t._v(" "),d("div",{staticClass:"detail-common detail-address"},[d("p",[d("span",[t._v("品牌：")]),t._v(t._s(t.datas.brand)+" "+t._s(t.datas.model))])]),t._v(" "),d("div",{staticClass:"detail-common detail-address"},[d("p",[d("span",[t._v("型号：")]),t._v(t._s(t.datas.pattern))])]),t._v(" "),d("div",{staticClass:"detail-common detail-number"},[d("p",[d("span",[t._v("库存：")]),t._v("≥"+t._s(t.datas.stock)+"公斤")])]),t._v(" "),d("div",{staticClass:"detail-contact"},[d("el-button",{attrs:{type:"primary"},on:{click:t.open}},[t._v("获取报价")]),t._v(" "),d("el-button",{attrs:{type:"primary"},on:{click:t.open}},[t._v("在线留言")])],1)])],1)],1)}),[],!1,null,"4594e333",null);e.default=component.exports}}]);
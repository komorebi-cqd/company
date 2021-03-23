exports.ids = [8];
exports.modules = {

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("30c215ca", content, true, context)
};

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_prodList_vue_vue_type_style_index_0_id_2192e3ab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_prodList_vue_vue_type_style_index_0_id_2192e3ab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_prodList_vue_vue_type_style_index_0_id_2192e3ab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_prodList_vue_vue_type_style_index_0_id_2192e3ab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_prodList_vue_vue_type_style_index_0_id_2192e3ab_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".product-img[data-v-2192e3ab]{padding-bottom:20px}.product-img .el-image[data-v-2192e3ab]{width:200px;height:200px}.product-img .product-card-top[data-v-2192e3ab]{display:flex;justify-content:space-between;line-height:24px}.product-img .product-card-top .product-price[data-v-2192e3ab]{max-width:50%;overflow:hidden;text-overflow:ellipsis;color:#ef1f1f;font-size:16px;font-weight:600}.product-img .product-card-top .product-sales[data-v-2192e3ab]{max-width:45%;overflow:hidden;text-overflow:ellipsis;font-size:12px;color:#999}.product-img .product-card-bottom[data-v-2192e3ab]{display:flex;justify-content:space-between}.product-img .product-card-bottom p[data-v-2192e3ab]{font-size:12px}.product-img .product-card-content[data-v-2192e3ab]{text-align:left;height:20px;line-height:20px;overflow:hidden;text-overflow:ellipsis;word-break:break-all}.product-img .product-features span[data-v-2192e3ab]{font-size:12px;display:inline-block;color:#e88f09;border:1px solid rgba(232,143,9,.3);padding:1px 2px;line-height:1;border-radius:2px;font-weight:400;margin:4px 4px 0 0}.product-img[data-v-2192e3ab]:first-child{padding-bottom:19px}.time[data-v-2192e3ab]{font-size:13px;color:#999}.bottom[data-v-2192e3ab]{margin-top:13px;line-height:12px}.button[data-v-2192e3ab]{font-size:12px;padding:6px 8px}.button a[data-v-2192e3ab]{color:#fff}.image[data-v-2192e3ab]{width:100%;display:block}.clearfix[data-v-2192e3ab]:after,.clearfix[data-v-2192e3ab]:before{display:table;content:\"\"}.clearfix[data-v-2192e3ab]:after{clear:both}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/productComps/prodList.vue?vue&type=template&id=2192e3ab&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prod-list"},[_c('el-row',_vm._l((_vm.products.datas),function(item){return _c('el-col',{key:item.id,staticClass:"product-img",attrs:{"span":5,"offset":1}},[_c('nuxt-link',{attrs:{"to":("/products/" + (item.id))}},[_c('el-card',{attrs:{"body-style":{ padding: '0px' },"shadow":"hover"}},[_c('el-image',{attrs:{"src":item.Mainpics[0].main_pic}}),_vm._v(" "),_c('div',{staticStyle:{"padding":"10px"}},[_c('div',{staticClass:"product-card-top"},[_c('div',{staticClass:"product-price"},[_vm._v("￥"+_vm._s(item.price))]),_vm._v(" "),_c('div',{staticClass:"product-sales"},[_vm._v(">"+_vm._s(item.stock)+"千克")])]),_vm._v(" "),_c('div',{staticClass:"product-card-content"},[_c('p',[_vm._v(_vm._s(item.title))])]),_vm._v(" "),_c('div',{staticClass:"bottom clearfix product-card-bottom"},[_c('div',{staticClass:"product-features"},_vm._l((item.feature),function(i){return _c('span',{key:i},[_vm._v(_vm._s(i))])}),0),_vm._v(" "),_c('el-button',{staticClass:"button",attrs:{"type":"primary"}},[_vm._v("产品详情 "),_c('i',{staticClass:"el-icon-position el-icon--right"})])],1)])],1)],1)],1)}),1),_vm._ssrNode(" "),_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","total":_vm.products.total,"hide-on-single-page":true,"page-size":8,"current-page":_vm.currentPage},on:{"current-change":_vm.currentChange}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/productComps/prodList.vue?vue&type=template&id=2192e3ab&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/productComps/prodList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var prodListvue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  computed: { ...Object(external_vuex_["mapState"])("product", {
      products: state => state.products
    }),

    currentPage() {
      return this.$route.query.page ? +this.$route.query.page : 1;
    }

  },
  watch: {
    $route(res) {
      let pathArr = [];

      if (res.path === "/products" && pathArr[res.fullPath] === undefined) {
        console.log("执行了", pathArr);
        this.$store.dispatch("product/requestProd", { ...res.query
        });
      }

      pathArr.push(res.fullPath);
    }

  },

  created() {},

  methods: {
    currentChange(n) {
      this.$router.push({
        path: "products",
        query: { ...this.$route.query,
          page: n
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./components/productComps/prodList.vue?vue&type=script&lang=js&
 /* harmony default export */ var productComps_prodListvue_type_script_lang_js_ = (prodListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/productComps/prodList.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(139)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productComps_prodListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2192e3ab",
  "ed1e0938"
  
)

/* harmony default export */ var prodList = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-comps-prod-list.js.map
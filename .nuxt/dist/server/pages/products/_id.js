exports.ids = [20,11,12];
exports.modules = {

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(144);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("69cc5192", content, true, context)
};

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("e70a289c", content, true, context)
};

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailHeader_vue_vue_type_style_index_0_id_4594e333_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailHeader_vue_vue_type_style_index_0_id_4594e333_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailHeader_vue_vue_type_style_index_0_id_4594e333_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailHeader_vue_vue_type_style_index_0_id_4594e333_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailHeader_vue_vue_type_style_index_0_id_4594e333_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".detail-header[data-v-4594e333]{text-align:left}.detail-header .detail-img[data-v-4594e333]{width:400px;height:400px;border:5px solid #ebebeb}.detail-header .detail-img-list[data-v-4594e333]{display:flex;flex-wrap:wrap;overflow:hidden}.detail-header .detail-img-list a[data-v-4594e333]{border:2px solid #ddd;width:90px;height:90px;margin-right:10px}.detail-header .detail-img-list a img[data-v-4594e333]{width:100%}.detail-header .introduce .detail-common[data-v-4594e333]{padding-top:20px}.detail-header .introduce .detail-common span[data-v-4594e333]{font-size:14px;color:#999;padding-right:20px}.detail-header .introduce .detail-title[data-v-4594e333]{font-size:20px}.detail-header .introduce .detail-title span[data-v-4594e333]{color:#999}.detail-header .introduce .detail-price[data-v-4594e333]{font-size:22px;font-weight:400;color:#ef1f1f}.detail-header .introduce .detail-address[data-v-4594e333],.detail-header .introduce .detail-number[data-v-4594e333]{font-size:14px}.detail-header .introduce .detail-contact[data-v-4594e333]{padding-top:50px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailContent_vue_vue_type_style_index_0_id_e2127882_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailContent_vue_vue_type_style_index_0_id_e2127882_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailContent_vue_vue_type_style_index_0_id_e2127882_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailContent_vue_vue_type_style_index_0_id_e2127882_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_detailContent_vue_vue_type_style_index_0_id_e2127882_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".detail-introduce[data-v-e2127882]{width:100%;text-align:center;background-color:#ddd}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/productDetail/detailHeader.vue?vue&type=template&id=4594e333&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"detail-header"},[_c('el-row',{attrs:{"type":"flex","justify":"space-around"}},[_c('el-col',{attrs:{"span":9}},[_c('el-image',{staticClass:"detail-img",attrs:{"src":_vm.bigPic,"preview-src-list":_vm.srcList}}),_vm._v(" "),_c('div',{staticClass:"detail-img-list"},_vm._l((_vm.datas.Mainpics),function(item,index){return _c('a',{key:index,on:{"click":function($event){return _vm.switchPic(index)}}},[_c('img',{attrs:{"src":item.main_pic,"alt":item.brand}})])}),0)],1),_vm._v(" "),_c('el-col',{staticClass:"introduce",attrs:{"span":14}},[_c('div',{staticClass:"detail-title"},[_c('h3',[_c('span',[_vm._v("???????????????")]),_vm._v(_vm._s(_vm.datas.title))])]),_vm._v(" "),_c('div',{staticClass:"detail-common detail-price"},[_c('p',[_c('span',[_vm._v("?????????")]),_vm._v("???"+_vm._s(_vm.datas.price))])]),_vm._v(" "),_c('div',{staticClass:"detail-common detail-address"},[_c('p',[_c('span',[_vm._v("????????????")]),_vm._v(" ???????????? ")])]),_vm._v(" "),_c('div',{staticClass:"detail-common detail-address"},[_c('p',[_c('span',[_vm._v("?????????")]),_vm._v(_vm._s(_vm.datas.feature))])]),_vm._v(" "),_c('div',{staticClass:"detail-common detail-address"},[_c('p',[_c('span',[_vm._v("?????????")]),_vm._v(_vm._s(_vm.datas.brand)+" "+_vm._s(_vm.datas.model))])]),_vm._v(" "),_c('div',{staticClass:"detail-common detail-address"},[_c('p',[_c('span',[_vm._v("?????????")]),_vm._v(_vm._s(_vm.datas.pattern))])]),_vm._v(" "),_c('div',{staticClass:"detail-common detail-number"},[_c('p',[_c('span',[_vm._v("?????????")]),_vm._v("???"+_vm._s(_vm.datas.stock)+"??????")])]),_vm._v(" "),_c('div',{staticClass:"detail-contact"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.open}},[_vm._v("????????????")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.open}},[_vm._v("????????????")])],1)])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/productDetail/detailHeader.vue?vue&type=template&id=4594e333&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/productDetail/detailHeader.vue?vue&type=script&lang=js&
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
/* harmony default export */ var detailHeadervue_type_script_lang_js_ = ({
  props: ["datas"],

  data() {
    return {
      urlIndex: "0"
    };
  },

  methods: {
    switchPic(index) {
      this.urlIndex = index;
    },

    open() {
      this.$prompt("?????????????????????????????????", "??????", {
        confirmButtonText: "??????",
        cancelButtonText: "??????",
        inputPattern: /^1[3|4|5|7|8][0-9]{9}$/,
        inputErrorMessage: "???????????????????????????"
      }).then(({
        value
      }) => {
        this.$message({
          type: "success",
          message: "??????????????????: " + value + "???" + "?????????????????????????????????"
        });
      }).catch(() => {
        this.$message({
          type: "info",
          message: "????????????"
        });
      });
    }

  },
  computed: {
    srcList() {
      return this.datas.Mainpics.map(item => item.main_pic);
    },

    bigPic() {
      return this.datas.Mainpics[this.urlIndex].main_pic;
    }

  },

  created() {},

  components: {}
});
// CONCATENATED MODULE: ./components/productDetail/detailHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var productDetail_detailHeadervue_type_script_lang_js_ = (detailHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/productDetail/detailHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(143)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productDetail_detailHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4594e333",
  "38f2dc42"
  
)

/* harmony default export */ var detailHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/productDetail/detailContent.vue?vue&type=template&id=e2127882&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"detail-introduce"},[_vm._ssrNode((_vm._ssrList((_vm.Details),function(item){return ("<img"+(_vm._ssrAttr("src",item.detail_pic))+(_vm._ssrAttr("alt",item.model))+" data-v-e2127882>")}))+" <div data-v-e2127882>"+_vm._ssrEscape(_vm._s(_vm.detailText))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/productDetail/detailContent.vue?vue&type=template&id=e2127882&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/productDetail/detailContent.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var detailContentvue_type_script_lang_js_ = ({
  props: ["detailText", "Details"],

  data() {
    return {};
  },

  components: {}
});
// CONCATENATED MODULE: ./components/productDetail/detailContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var productDetail_detailContentvue_type_script_lang_js_ = (detailContentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/productDetail/detailContent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(145)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  productDetail_detailContentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e2127882",
  "eb7b3ed8"
  
)

/* harmony default export */ var detailContent = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_id.vue?vue&type=template&id=fa56cae0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"prod-detail"},[_c('detailHeader',{attrs:{"datas":_vm.datas}}),_vm._ssrNode(" "),_c('detailContent',{attrs:{"detailText":_vm.detailText,"Details":_vm.Details}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/products/_id.vue?vue&type=template&id=fa56cae0&scoped=true&

// EXTERNAL MODULE: ./components/productDetail/detailHeader.vue + 4 modules
var detailHeader = __webpack_require__(156);

// EXTERNAL MODULE: ./components/productDetail/detailContent.vue + 4 modules
var detailContent = __webpack_require__(157);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/products/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  async asyncData({
    params,
    $axios
  }) {
    const result = await $axios.$get(`/api/products/${params.id}`);

    if (result.code != 200) {}

    const datas = result.data.datas;
    return {
      detailText: datas.detailText,
      Details: datas.Details,
      datas
    };
  },

  data() {
    return {};
  },

  components: {
    detailHeader: detailHeader["default"],
    detailContent: detailContent["default"]
  }
});
// CONCATENATED MODULE: ./pages/products/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var products_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/products/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  products_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fa56cae0",
  "6a0f78f0"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map
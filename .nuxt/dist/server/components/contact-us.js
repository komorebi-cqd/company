exports.ids = [5];
exports.modules = {

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(136);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5963c135", content, true, context)
};

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactUs_vue_vue_type_style_index_0_id_f2599e80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactUs_vue_vue_type_style_index_0_id_f2599e80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactUs_vue_vue_type_style_index_0_id_f2599e80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactUs_vue_vue_type_style_index_0_id_f2599e80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contactUs_vue_vue_type_style_index_0_id_f2599e80_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contact-us[data-v-f2599e80]{margin-bottom:60px}.contact-us .el-row[data-v-f2599e80]{cursor:pointer}.contact-us .contact-us-icon i[data-v-f2599e80]{background-color:#2489eb;font-size:26px;border-radius:50%;padding:16px;color:#fff}.contact-us .contact-us-content[data-v-f2599e80]{margin-top:15px}.contact-us .contact-us-content p[data-v-f2599e80]{font-weight:400;font-size:16px;color:#716c80;line-height:24px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/contactComps/contactUs.vue?vue&type=template&id=f2599e80&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-us"},[_c('el-row',{attrs:{"type":"flex","justify":"space-between"}},_vm._l((_vm.addres),function(item,index){return _c('el-col',{key:index,attrs:{"span":7}},[_c('el-card',{staticClass:"box-card",attrs:{"shadow":"hover"}},[_c('div',{staticClass:"contact-us-icon"},[_c('i',{class:item.icon})]),_vm._v(" "),_c('div',{staticClass:"contact-us-content"},[_c('p',[_vm._v(_vm._s(item.type)+"："+_vm._s(item.text))])])])],1)}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/contactComps/contactUs.vue?vue&type=template&id=f2599e80&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/contactComps/contactUs.vue?vue&type=script&lang=js&
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
/* harmony default export */ var contactUsvue_type_script_lang_js_ = ({
  data() {
    return {
      addres: [{
        icon: "el-icon-location-information",
        type: "公司地址",
        text: "北京市朝阳区六环"
      }, {
        icon: "el-icon-phone-outline",
        type: "联系热线",
        text: "138888888888"
      }, {
        icon: "el-icon-message",
        type: "电子邮箱",
        text: "komorebi_cqd@163.com"
      }]
    };
  },

  components: {}
});
// CONCATENATED MODULE: ./components/contactComps/contactUs.vue?vue&type=script&lang=js&
 /* harmony default export */ var contactComps_contactUsvue_type_script_lang_js_ = (contactUsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/contactComps/contactUs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(135)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contactComps_contactUsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f2599e80",
  "5eb18bce"
  
)

/* harmony default export */ var contactUs = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact-us.js.map
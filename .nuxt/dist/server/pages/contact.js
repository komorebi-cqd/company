exports.ids = [15,1,3,4,5];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("8741b13a", content, true, context)
};

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumb_vue_vue_type_style_index_0_id_35abf657_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumb_vue_vue_type_style_index_0_id_35abf657_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumb_vue_vue_type_style_index_0_id_35abf657_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumb_vue_vue_type_style_index_0_id_35abf657_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_breadcrumb_vue_vue_type_style_index_0_id_35abf657_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".breadcrumb[data-v-35abf657]{border-bottom:1px solid #ddd;padding-bottom:10px;margin-bottom:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/baseComps/breadcrumb.vue?vue&type=template&id=35abf657&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breadcrumb"},[_c('el-breadcrumb',{attrs:{"separator":"/"}},[_c('el-breadcrumb-item',{attrs:{"to":{ path: '/' }}},[_vm._v("\n      首页\n    ")]),_vm._v(" "),_vm._l((_vm.levelList),function(item){return _c('el-breadcrumb-item',{key:item.path},[_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.handleLink(item)}}},[_vm._v(_vm._s(item.meta.title))])])})],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/baseComps/breadcrumb.vue?vue&type=template&id=35abf657&scoped=true&

// EXTERNAL MODULE: external "path-to-regexp"
var external_path_to_regexp_ = __webpack_require__(121);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/baseComps/breadcrumb.vue?vue&type=script&lang=js&
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

/* harmony default export */ var breadcrumbvue_type_script_lang_js_ = ({
  data() {
    return {
      levelList: null
    };
  },

  created() {
    this.getLeveList();
  },

  watch: {
    $route() {
      this.getLeveList();
    }

  },
  components: {},
  methods: {
    getLeveList() {
      let matched = this.$route.matched.filter(item => item.name);
      this.levelList = matched;
    },

    handleLink(item) {
      const {
        redirect,
        path
      } = item;

      if (redirect) {
        this.$router.push(redirect);
        return;
      }

      this.$router.push(this.pathCompile(path));
    },

    pathCompile(path) {
      const {
        params
      } = this.$route;
      var toPath = external_path_to_regexp_["compile"](path); //url 的正则表达式,快速填充 url 字符串的参数值。

      return toPath(params);
    }

  }
});
// CONCATENATED MODULE: ./components/baseComps/breadcrumb.vue?vue&type=script&lang=js&
 /* harmony default export */ var baseComps_breadcrumbvue_type_script_lang_js_ = (breadcrumbvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/baseComps/breadcrumb.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(124)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  baseComps_breadcrumbvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "35abf657",
  "23702d58"
  
)

/* harmony default export */ var breadcrumb = __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/contactComps/onlineMsg.vue?vue&type=template&id=b811a18c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form method=\"post\" class=\"contact-validation-active\" data-v-b811a18c><div data-v-b811a18c><input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Name*\" data-v-b811a18c></div> <div data-v-b811a18c><input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email*\" data-v-b811a18c></div> <div class=\"fullwidth\" data-v-b811a18c><select name=\"subject\" data-v-b811a18c><option disabled=\"disabled\" selected=\"selected\" data-v-b811a18c>Contact subject</option> <option data-v-b811a18c>Subject 1</option> <option data-v-b811a18c>Subject 2</option> <option data-v-b811a18c>Subject 3</option></select></div> <div class=\"fullwidth\" data-v-b811a18c><textarea id=\"note\" placeholder=\"Case Description...\" data-v-b811a18c></textarea></div> <div class=\"submit-area\" data-v-b811a18c><button type=\"submit\" class=\"theme-btn\" data-v-b811a18c>Submit It Now</button></div></form>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/contactComps/onlineMsg.vue?vue&type=template&id=b811a18c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/contactComps/onlineMsg.vue?vue&type=script&lang=js&
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
/* harmony default export */ var onlineMsgvue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  components: {}
});
// CONCATENATED MODULE: ./components/contactComps/onlineMsg.vue?vue&type=script&lang=js&
 /* harmony default export */ var contactComps_onlineMsgvue_type_script_lang_js_ = (onlineMsgvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/contactComps/onlineMsg.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contactComps_onlineMsgvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b811a18c",
  "56e4311e"
  
)

/* harmony default export */ var onlineMsg = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/contactComps/contactMap.vue?vue&type=template&id=2d68d352&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact-map"},[_c('el-row',{attrs:{"type":"flex","justify":"space-between"}},[_c('el-col',{attrs:{"span":11}},[_c('div',[_c('online')],1)]),_vm._v(" "),_c('el-col',{attrs:{"span":11}},[_c('div',{staticClass:"contact-form"})])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/contactComps/contactMap.vue?vue&type=template&id=2d68d352&scoped=true&

// EXTERNAL MODULE: ./components/contactComps/onlineMsg.vue + 4 modules
var onlineMsg = __webpack_require__(134);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/contactComps/contactMap.vue?vue&type=script&lang=js&
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

/* harmony default export */ var contactMapvue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  components: {
    online: onlineMsg["default"]
  }
});
// CONCATENATED MODULE: ./components/contactComps/contactMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var contactComps_contactMapvue_type_script_lang_js_ = (contactMapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/contactComps/contactMap.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contactComps_contactMapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2d68d352",
  "95cf9948"
  
)

/* harmony default export */ var contactMap = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=4ba1c61f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact"},[_c('navImg',{attrs:{"imgs":_vm.imgs}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-4ba1c61f>","</div>",[_c('breadcrumb'),_vm._ssrNode(" "),_c('contactUs'),_vm._ssrNode(" "),_c('contactMap')],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=4ba1c61f&scoped=true&

// EXTERNAL MODULE: ./components/baseComps/navImg.vue + 4 modules
var navImg = __webpack_require__(29);

// EXTERNAL MODULE: ./components/baseComps/breadcrumb.vue + 4 modules
var breadcrumb = __webpack_require__(126);

// EXTERNAL MODULE: ./components/contactComps/contactUs.vue + 4 modules
var contactUs = __webpack_require__(151);

// EXTERNAL MODULE: ./components/contactComps/contactMap.vue + 4 modules
var contactMap = __webpack_require__(152);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
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




/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  head() {
    return {
      title: "联系我们",
      meta: [{
        hid: "联系我们",
        name: 'description',
        content: 'My custom description'
      }]
    };
  },

  components: {
    navImg: navImg["default"],
    breadcrumb: breadcrumb["default"],
    contactUs: contactUs["default"],
    contactMap: contactMap["default"]
  }
});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/contact.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4ba1c61f",
  "1d1ed96c"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map
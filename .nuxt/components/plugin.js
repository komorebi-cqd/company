import Vue from 'vue'

const components = {
  Footer: () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Navigation: () => import('../..\\components\\navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => c.default || c),
  Navmenu: () => import('../..\\components\\navmenu.vue' /* webpackChunkName: "components/navmenu" */).then(c => c.default || c),
  Topbar: () => import('../..\\components\\topbar.vue' /* webpackChunkName: "components/topbar" */).then(c => c.default || c),
  BaseCompsBreadcrumb: () => import('../..\\components\\baseComps\\breadcrumb.vue' /* webpackChunkName: "components/base-comps-breadcrumb" */).then(c => c.default || c),
  BaseCompsNavImg: () => import('../..\\components\\baseComps\\navImg.vue' /* webpackChunkName: "components/base-comps-nav-img" */).then(c => c.default || c),
  ContactCompsBaiduMap: () => import('../..\\components\\contactComps\\baiduMap.vue' /* webpackChunkName: "components/contact-comps-baidu-map" */).then(c => c.default || c),
  ContactMap: () => import('../..\\components\\contactComps\\contactMap.vue' /* webpackChunkName: "components/contact-map" */).then(c => c.default || c),
  ContactUs: () => import('../..\\components\\contactComps\\contactUs.vue' /* webpackChunkName: "components/contact-us" */).then(c => c.default || c),
  ContactCompsOnlineMsg: () => import('../..\\components\\contactComps\\onlineMsg.vue' /* webpackChunkName: "components/contact-comps-online-msg" */).then(c => c.default || c),
  MainCompsBanner: () => import('../..\\components\\mainComps\\banner.vue' /* webpackChunkName: "components/main-comps-banner" */).then(c => c.default || c),
  MainCompsCopyright: () => import('../..\\components\\mainComps\\copyright.vue' /* webpackChunkName: "components/main-comps-copyright" */).then(c => c.default || c),
  MainCompsFooterBottom: () => import('../..\\components\\mainComps\\footerBottom.vue' /* webpackChunkName: "components/main-comps-footer-bottom" */).then(c => c.default || c),
  MainCompsFooterTop: () => import('../..\\components\\mainComps\\footerTop.vue' /* webpackChunkName: "components/main-comps-footer-top" */).then(c => c.default || c),
  MainCompsMyServices: () => import('../..\\components\\mainComps\\myServices.vue' /* webpackChunkName: "components/main-comps-my-services" */).then(c => c.default || c),
  ProductCompsProdList: () => import('../..\\components\\productComps\\prodList.vue' /* webpackChunkName: "components/product-comps-prod-list" */).then(c => c.default || c),
  ProductCompsSearch: () => import('../..\\components\\productComps\\search.vue' /* webpackChunkName: "components/product-comps-search" */).then(c => c.default || c),
  ProductCompsSidebar: () => import('../..\\components\\productComps\\sidebar.vue' /* webpackChunkName: "components/product-comps-sidebar" */).then(c => c.default || c),
  ProductDetailContent: () => import('../..\\components\\productDetail\\detailContent.vue' /* webpackChunkName: "components/product-detail-content" */).then(c => c.default || c),
  ProductDetailHeader: () => import('../..\\components\\productDetail\\detailHeader.vue' /* webpackChunkName: "components/product-detail-header" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

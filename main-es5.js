(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n\n<footer class=\"page-footer\">\n    <div class=\"center-align\">\n        Copyright &copy; Kakao Friends All rights Reserved.\n    </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"container\">\n  <div class=\"row\">\n    <h4 class=\"center-align\">장바구니</h4>\n    \n    <ul class=\"collection with-header\">\n      <li class=\"collection-item active\">주문수량 <span class=\"secondary-content\">{{totalCount}}</span></li>\n      <div *ngIf=\"items.length==0; then thenBlock else elseBlock\"></div>\n      <ng-template #elseBlock>\n        <li class=\"collection-item\" *ngFor=\"let item of items\">\n          {{ item.name }}\n          <span *ngIf=\"item.sale==true; else elseBlock\"><span class=\"secondary-content\">{{ item.salePrice | comma }}</span></span>\n          <ng-template #elseBlock>\n              <span class=\"secondary-content\">{{item.price|comma}}</span>\n          </ng-template>\n        </li>\n      </ng-template>\n      <ng-template #thenBlock><li class=\"collection-item\">장바구니에 담긴 상품이 없습니다.</li></ng-template>\n      <li class=\"collection-item active right-align\">합계 {{totalPrice|comma}}</li>\n    </ul>\n\n    \n    <h5>배송정보 입력</h5>\n    <form [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\">\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">person</i>\n          <input id=\"name\" type=\"text\" class=\"validate\" formControlName=\"name\">\n          <label for=\"name\">이름</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12\">\n          <i class=\"material-icons prefix\">local_shipping</i>\n          <input id=\"address\" type=\"text\" class=\"validate\" formControlName=\"address\">\n          <label for=\"address\">배송주소</label>\n        </div>\n      </div>\n      <div class=\"btn-group center\">\n        <button class=\"btn waves-effect red lighten-1\" type=\"submit\">주문하기</button>\n        <button class=\"btn modal-trigger\" data-target=\"modal1\">배송안내</button>\n      </div>\n    </form>\n  </div>\n\n  <div id=\"modal1\" class=\"modal\">\n    <div class=\"modal-content\">\n      <h4>배송안내</h4>\n      <div class=\"shipping-item\" *ngFor=\"let shipping of shippingCosts | async\">\n        <span>{{ shipping.type }} </span>\n        <span>{{ shipping.price | comma }}</span>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"modal-close waves-effect waves-green btn-flat\">닫기</button>\n    </div>\n  </div>\n</article>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/category/category.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/category.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"container\">\n  <!-- <div class=\"row\">\n    <div class=\"col s12 m6 l4\">\n      <div class=\"card\">\n        <div class=\"card-image\">\n          <img src=\"assets/img/friends_apeach.jpg\">\n          <span class=\"card-title\">어피치(Apeach)</span>\n          <a class=\"btn-floating halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">add</i></a>\n        </div>\n        <div class=\"card-content\">\n          <p>유전자 변이로 자웅동주가 된 것을 알고 \n              복숭아 나무에서 탈출한 악동 복숭아 어피치! \n              섹시한 뒷태로 사람들을 매혹시키며, \n              성격이 매우 급하고 과격합니다.</p>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"row m20\">\n    <div class=\"col s12 m6 l4\" *ngFor=\"let product of products; index as productId\">\n      <div class=\"card\">\n        <div class=\"card-image\">\n          <img src=\"{{product.img}}\">\n          <span class=\"card-title\">{{product.name}}</span>\n          <span class=\"sale chip red lighten-1 white-text\" *ngIf=\"product.sale==true\">Sale</span>\n          <a class=\"btn-floating halfway-fab waves-effect waves-light red\"\n              routerLink=\"/category/{{productId}}\"><i class=\"material-icons\">add</i></a>\n        </div>\n        <div class=\"card-content\">\n          <p>{{product.title}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</article>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/category/product-detail/product-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/category/product-detail/product-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"container\">\n  <div class=\"m20\" *ngIf=\"product\">\n    <h4 class=\"center-align\">상품 상세</h4>\n    <div class=\"center-align\">\n      <img src=\"{{product.img}}\">\n      <h5>{{product.title}}</h5>\n    </div>\n    <table class=\"striped\">\n      <colgroup>\n        <col width=\"100px\">\n      </colgroup>\n      <tbody>\n        <tr>\n          <th>제품명</th>\n          <td>{{product.name}}</td>\n        </tr>\n        <tr>\n          <th>가격</th>\n          <td>\n            <span *ngIf=\"product.sale==true; else elseBlock\">{{product.salePrice|comma}} <del>{{product.price|comma}}</del></span>\n            <ng-template #elseBlock>\n              {{product.price|comma}}\n            </ng-template>\n          </td>\n        </tr>\n        <tr>\n          <th>소개</th>\n          <td>{{product.description}}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"center-align m20 btn-group\">\n      <button class=\"btn waves-effect red lighten-1\" (click)=\"addToCart(product)\">장바구니담기</button>\n      <button class=\"btn modal-trigger\" data-target=\"modal1\">배송안내</button>\n    </div>\n  </div>\n\n  <div id=\"modal1\" class=\"modal\">\n    <div class=\"modal-content\">\n      <h4>배송안내</h4>\n      <div class=\"shipping-item\" *ngFor=\"let shipping of shippingCosts | async\">\n        <span>{{ shipping.type }} </span>\n        <span>{{ shipping.price | comma }}</span>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"modal-close waves-effect waves-green btn-flat\">닫기</button>\n    </div>\n  </div>\n</article> "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/customer/customer.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/customer/customer.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"container\">\n  <p>\n    customer works!\n  </p>\n</article>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"swiper-container m20\">\n  <div class=\"swiper-wrapper\">\n    <div class=\"swiper-slide\"><img src=\"assets/img/slide1.jpg\"></div>\n    <div class=\"swiper-slide\"><img src=\"assets/img/slide2.jpg\"></div>\n    <div class=\"swiper-slide\"><img src=\"assets/img/slide3.jpg\"></div>\n    <div class=\"swiper-slide\"><img src=\"assets/img/slide4.jpg\"></div>\n  </div>\n  <!-- Add Arrows -->\n  <div class=\"swiper-button-next\"></div>\n  <div class=\"swiper-button-prev\"></div>\n  <div class=\"swiper-pagination\"></div>\n</div>\n<div class=\"title center-align\"><strong></strong><h4></h4></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <header>\n  <h1><a routerLink=\"/\">카카오프렌즈</a></h1>\n  <nav>\n    <button class=\"material-icons\">menu</button>\n    <ul>\n      <li><a routerLink=\"/category\">카테고리</a></li>\n      <li><a routerLink=\"/story\">스토리</a></li>\n      <li><a routerLink=\"/store\">매장안내</a></li>\n      <li><a routerLink=\"/customer\">고객센터</a></li>\n    </ul>\n  </nav>\n</header> -->\n\n<nav>\n  <div class=\"nav-wrapper\">\n    <a routerLink=\"/\" class=\"brand-logo center\">카카오프렌즈</a>\n    <a href=\"#!\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\n    <ul class=\"right hide-on-med-and-down\">\n      <li routerLinkActive=\"active\"><a routerLink=\"/category\">카테고리</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/story\">스토리</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/store\">매장안내</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/customer\">고객센터</a></li>\n      <li routerLinkActive=\"active\"><a routerLink=\"/cart\"><i class=\"material-icons dp48\">shopping_cart</i></a></li>\n    </ul>\n  </div>\n</nav>\n\n<ul class=\"sidenav\" id=\"mobile-demo\">\n  <li><a routerLink=\"/category\">카테고리</a></li>\n  <li><a routerLink=\"/story\">스토리</a></li>\n  <li><a routerLink=\"/store\">매장안내</a></li>\n  <li><a routerLink=\"/customer\">고객센터</a></li>\n  <li><a routerLink=\"/cart\">장바구니</a></li>\n</ul>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"container\">\n  <p>\n    페이지를 찾을 수 없습니다.\n  </p>\n</article>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/store/store.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/store/store.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"container\">\n  <p>\n    store works!\n  </p>\n</article>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/story/story.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/story/story.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article class=\"container\">\n  <p>\n    story works!\n  </p>\n</article>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'shopping';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _category_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./category/product-detail/product-detail.component */ "./src/app/category/product-detail/product-detail.component.ts");
/* harmony import */ var _story_story_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./story/story.component */ "./src/app/story/story.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _comma_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./comma.pipe */ "./src/app/comma.pipe.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cart.service */ "./src/app/cart.service.ts");


















var routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"] },
    { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"] },
    { path: 'category/:productId', component: _category_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailComponent"] },
    { path: 'story', component: _story_story_component__WEBPACK_IMPORTED_MODULE_11__["StoryComponent"] },
    { path: 'store', component: _store_store_component__WEBPACK_IMPORTED_MODULE_12__["StoreComponent"] },
    { path: 'customer', component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_13__["CustomerComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            //모듈
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                //서비스연결시 필요 
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                //장바구니시 필요
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            ],
            //컴포넌트, 파이프
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"],
                _category_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailComponent"],
                _store_store_component__WEBPACK_IMPORTED_MODULE_12__["StoreComponent"],
                _story_story_component__WEBPACK_IMPORTED_MODULE_11__["StoryComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_13__["CustomerComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_14__["CartComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
                _comma_pipe__WEBPACK_IMPORTED_MODULE_16__["CommaPipe"],
            ],
            // 서비스
            providers: [_cart_service__WEBPACK_IMPORTED_MODULE_17__["CartService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.items = [];
    }
    CartService.prototype.addToCart = function (product) {
        this.items.push(product);
    };
    CartService.prototype.getItems = function () {
        return this.items;
    };
    CartService.prototype.clearCart = function () {
        this.items = [];
        return this.items;
    };
    CartService.prototype.getShippingPrices = function () {
        return this.http.get('assets/shipping.json');
    };
    CartService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_5__);






var CartComponent = /** @class */ (function () {
    function CartComponent(cartService, formBuilder) {
        this.cartService = cartService;
        this.formBuilder = formBuilder;
        this.totalPrice = 0;
        this.shippingCosts = this.cartService.getShippingPrices();
        this.items = this.cartService.getItems();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
        for (var i in this.items) {
            if (this.items[i].sale) {
                this.totalPrice += this.items[i].salePrice;
            }
            else {
                this.totalPrice += this.items[i].price;
            }
        }
        this.totalCount = this.items.length + '개';
    }
    CartComponent.prototype.onSubmit = function (customerData) {
        if (this.totalCount != '0개') {
            console.warn('주문 완료' + customerData);
            window.alert('주문을 완료하였습니다.');
            this.items = this.cartService.clearCart();
            this.checkoutForm.reset();
            this.totalPrice = 0;
            this.totalCount = '0개';
        }
        else {
            window.alert('주문할 상품이 없습니다.');
        }
    };
    CartComponent.prototype.ngOnInit = function () {
        M.Modal.init(jquery__WEBPACK_IMPORTED_MODULE_4__('.modal'));
    };
    CartComponent.ctorParameters = function () { return [
        { type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        })
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card .card-image .card-title{\r\n  top:0; bottom: auto;\r\n}\r\n.card-content p{\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n}\r\n.sale {\r\n  position: absolute;\r\n  left:20px;\r\n  bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLEtBQUssRUFBRSxZQUFZO0FBQ3JCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQgLmNhcmQtaW1hZ2UgLmNhcmQtdGl0bGV7XHJcbiAgdG9wOjA7IGJvdHRvbTogYXV0bztcclxufVxyXG4uY2FyZC1jb250ZW50IHB7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbi5zYWxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDoyMHB4O1xyXG4gIGJvdHRvbTogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products */ "./src/app/category/products.ts");



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
        this.products = _products__WEBPACK_IMPORTED_MODULE_2__["products"];
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! raw-loader!./category.component.html */ "./node_modules/raw-loader/index.js!./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        })
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/category/product-detail/product-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/category/product-detail/product-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width:767px){\r\n  img{width: 100%;}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLElBQUksV0FBVyxDQUFDO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnkvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KXtcclxuICBpbWd7d2lkdGg6IDEwMCU7fVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/category/product-detail/product-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/category/product-detail/product-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products */ "./src/app/category/products.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_6__);







var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, cartService) {
        this.route = route;
        this.cartService = cartService;
        this.shippingCosts = this.cartService.getShippingPrices();
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //라우터의 아이디값을 자동으로 세팅한다.
        this.route.paramMap.subscribe(function (params) {
            _this.product = _products__WEBPACK_IMPORTED_MODULE_3__["products"][+params.get('productId')];
        });
        M.Modal.init(jquery__WEBPACK_IMPORTED_MODULE_5__('.modal'));
    };
    ProductDetailComponent.prototype.addToCart = function (product) {
        window.alert('장바구니에 담았습니다.');
        console.log('상품:', product);
        this.cartService.addToCart(product);
    };
    ProductDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
    ]; };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/category/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/category/product-detail/product-detail.component.css")]
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/category/products.ts":
/*!**************************************!*\
  !*** ./src/app/category/products.ts ***!
  \**************************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
var products = [
    {
        name: '어피치(Apeach)',
        price: 30000,
        salePrice: 20000,
        sale: true,
        img: 'assets/img/friends_apeach.jpg',
        title: '복숭아 나무에서 탈출한 악동 복숭아',
        description: "\n    \uC720\uC804\uC790 \uBCC0\uC774\uB85C \uC790\uC6C5\uB3D9\uC8FC\uAC00 \uB41C \uAC83\uC744 \uC54C\uACE0 \n    \uBCF5\uC22D\uC544 \uB098\uBB34\uC5D0\uC11C \uD0C8\uCD9C\uD55C \uC545\uB3D9 \uBCF5\uC22D\uC544 \uC5B4\uD53C\uCE58! \n    \uC139\uC2DC\uD55C \uB4B7\uD0DC\uB85C \uC0AC\uB78C\uB4E4\uC744 \uB9E4\uD639\uC2DC\uD0A4\uBA70, \n    \uC131\uACA9\uC774 \uB9E4\uC6B0 \uAE09\uD558\uACE0 \uACFC\uACA9\uD569\uB2C8\uB2E4.",
    },
    {
        name: '콘(Con)',
        price: 20000,
        img: 'assets/img/friends_con.jpg',
        title: '정체불명 콘',
        description: "\n    \uB2E8\uBB34\uC9C0\uB97C \uD0A4\uC6CC \uBB34\uC9C0\uB97C \uB9CC\uB4E0 \uC815\uCCB4\uBD88\uBA85\uC758 \uC545\uC5B4 \uCF58! \n    \uC774\uC81C\uB294 \uBCF5\uC22D\uC544\uB97C \uD0A4\uC6B0\uACE0 \uC2F6\uC5B4 \uC5B4\uD53C\uCE58\uB97C \uCC3E\uC544 \uB2E4\uB2D9\uB2C8\uB2E4."
    },
    {
        name: '프로도(Frodo)',
        price: 35000,
        salePrice: 30000,
        sale: true,
        img: 'assets/img/friends_frodo.jpg',
        title: '부잣집 도시개 프로도',
        description: "\n    \uBD80\uC7A3\uC9D1 \uB3C4\uC2DC\uAC1C \uD504\uB85C\uB3C4\uB294 \uC0AC\uC2E4 \uC7A1\uC885. \uD0DC\uC0DD\uC5D0 \uB300\uD55C \uCF64\uD50C\uB809\uC2A4\uAC00 \uB9CE\uC2B5\uB2C8\uB2E4..",
    },
    {
        name: '제이지(Jay-G)',
        price: 25000,
        img: 'assets/img/friends_jayg.jpg',
        title: '힙합을 사랑하는 자유로운 영혼',
        description: "\n    \uB545\uC18D \uB098\uB77C \uACE0\uD5A5\uC5D0 \uB300\uD55C \uD5A5\uC218\uBCD1\uC774 \uC788\uB294 \uBE44\uBC00\uC694\uC6D0 \uC81C\uC774\uC9C0! \n    \uC0AC\uBA85\uC758\uC2DD\uC774 \uD22C\uCCA0\uD558\uC5EC \uB0C9\uCCA0\uD574\uBCF4\uC774\uACE0 \uC2F6\uC73C\uB098, \uC2E4\uC740 \uC5B4\uB9AC\uBC84\uB9AC\uD569\uB2C8\uB2E4. \n    \uAC89\uBAA8\uC2B5\uACFC \uB2EC\uB9AC \uC54C\uACE0\uBCF4\uBA74 \uC678\uB85C\uC6C0\uC744 \uB9CE\uC774 \uD0C0\uB294 \uC5EC\uB9B0 \uAC10\uC218\uC131\uC758 \uC18C\uC720\uC790. \n    \uD799\uD569 \uAC00\uC218 Jay-Z\uC758 \uC5F4\uD608\uD32C\uC785\uB2C8\uB2E4"
    },
    {
        name: '무지(Muzi)',
        price: 50000,
        img: 'assets/img/friends_muzi.jpg',
        title: '토끼 옷을 입은 단무지인 무지',
        description: "\n    \uD638\uAE30\uC2EC \uB9CE\uC740 \uC7A5\uB09C\uAFB8\uB7EC\uAE30 \uBB34\uC9C0\uC758 \uC815\uCCB4\uB294 \uC0AC\uC2E4 \uD1A0\uB07C \uC637\uC744 \uC785\uC740 \uB2E8\uBB34\uC9C0! \n    \uD1A0\uB07C \uC637\uC744 \uBC97\uC73C\uBA74 \uBD80\uB044\uB7EC\uC6C0\uC744 \uB9CE\uC774 \uD0D1\uB2C8\uB2E4."
    },
    {
        name: '네오(Neo)',
        price: 50000,
        img: 'assets/img/friends_neo.jpg',
        title: '패셔니스타 네오',
        description: "\n    \uC790\uAE30 \uC790\uC2E0\uC744 \uAC00\uC7A5 \uC0AC\uB791\uD558\uB294 \uC0C8\uCE68\uD55C \uACE0\uC591\uC774 \uB124\uC624. \uC1FC\uD551\uC744 \uC88B\uC544\uD558\uB294 \n    \uC774 \uAD6C\uC5ED\uC758 \uB300\uD45C \uD328\uC154\uB2C8\uC2A4\uD0C0\uC785\uB2C8\uB2E4. \uD558\uC9C0\uB9CC \uB3C4\uB3C4\uD55C \uC790\uC2E0\uAC10\uC758 \uADFC\uC6D0\uC774 \n    \uB2E8\uBC1C\uBA38\uB9AC \u2018\uAC00\uBC1C\u2019\uC5D0\uC11C \uB098\uC628\uB2E4\uB294 \uAC74 \uBE44\uBC00!"
    },
    {
        name: '라이언(Ryan)',
        price: 40000,
        img: 'assets/img/friends_ryan.jpg',
        title: '갈기가 없는 것이 콤플렉스인 수사자',
        description: "\n    \uD070 \uB369\uCE58\uC640 \uBB34\uB69D\uB69D\uD55C \uD45C\uC815\uC73C\uB85C \uC624\uD574\uB97C \uB9CE\uC774 \uC0AC\uC9C0\uB9CC, \n    \uC0AC\uC2E4 \uB204\uAD6C\uBCF4\uB2E4\uB3C4 \uC5EC\uB9AC\uACE0 \uC12C\uC138\uD55C \uC18C\uB140\uAC10\uC131\uC744 \uC9C0\uB2CC \uBC18\uC804 \uB9E4\uB825\uC758 \uC18C\uC720\uC790! \n    \uC6D0\uB798 \uC544\uD504\uB9AC\uCE74 \uB465\uB465\uC12C \uC655\uC704 \uACC4\uC2B9\uC790\uC600\uC73C\uB098, \uC790\uC720\uB85C\uC6B4 \uC0B6\uC744 \uB3D9\uACBD\uD574 \uD0C8\uCD9C! \n    \uCE74\uCE74\uC624\uD504\uB80C\uC988\uC758 \uB4E0\uB4E0\uD55C \uC870\uC5B8\uC790 \uC5ED\uD560\uC744 \uB9E1\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \n    \uAF2C\uB9AC\uAC00 \uAE38\uBA74 \uC7A1\uD788\uAE30 \uB54C\uBB38\uC5D0, \uAF2C\uB9AC\uAC00 \uC9E7\uC2B5\uB2C8\uB2E4."
    },
    {
        name: '튜브(Tube)',
        price: 45000,
        img: 'assets/img/friends_tube.jpg',
        title: '겁 많고 마음 약한 오리 튜브',
        description: "\n    \uAC81 \uB9CE\uACE0 \uB9C8\uC74C \uC57D\uD55C \uC624\uB9AC \uD29C\uBE0C\uB294 \uADF9\uB3C4\uC758 \uACF5\uD3EC\uB97C \uB290\uB07C\uBA74 \uBBF8\uCE5C \uC624\uB9AC\uB85C \n    \uBCC0\uC2E0\uD569\uB2C8\uB2E4. \uC791\uC740 \uBC1C\uC774 \uCF64\uD50C\uB809\uC2A4\uC774\uAE30 \uB54C\uBB38\uC5D0 \uD070 \uC624\uB9AC\uBC1C\uC744 \uCC29\uC6A9\uD569\uB2C8\uB2E4. \n    \uBBF8\uC6B4 \uC624\uB9AC \uC0C8\uB07C\uAC00 \uBA3C \uCE5C\uCC99\uC785\uB2C8\uB2E4."
    },
];


/***/ }),

/***/ "./src/app/comma.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/comma.pipe.ts ***!
  \*******************************/
/*! exports provided: CommaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommaPipe", function() { return CommaPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommaPipe = /** @class */ (function () {
    function CommaPipe() {
    }
    CommaPipe.prototype.transform = function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '원';
    };
    CommaPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'comma'
        })
    ], CommaPipe);
    return CommaPipe;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVyL2N1c3RvbWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/index.js!./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        })
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiper-slide{text-align: center;}\r\nimg{width: 100%;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYyxrQkFBa0IsQ0FBQztBQUNqQyxJQUFJLFdBQVcsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci1zbGlkZXt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG5pbWd7d2lkdGg6IDEwMCU7fSJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/dist/js/swiper.esm.bundle.js");




var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngAfterViewInit = function () {
    };
    MainComponent.prototype.ngOnInit = function () {
        var title = [
            ['러블리 어피치 이미용 기구', '러블리 장인 어피치 아이템'],
            ['휴가지에서 인싸각', '물놀이템 고민하지마'],
            ['라이언 어피치 핸디형 선풍기', '지금부터 본격열일'],
            ['내자리를 책임질 사무용품', '사무실 도비들 여기 주목']
        ];
        jquery__WEBPACK_IMPORTED_MODULE_2__('.title strong').text(title[0][0]);
        jquery__WEBPACK_IMPORTED_MODULE_2__('.title h4').text(title[0][1]);
        var swiper = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop: true
        });
        swiper.on('slideChange', function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.title strong').text(title[swiper.realIndex][0]);
            jquery__WEBPACK_IMPORTED_MODULE_2__('.title h4').text(title[swiper.realIndex][1]);
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! materialize-css */ "./node_modules/materialize-css/dist/js/materialize.js");
/* harmony import */ var materialize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(materialize_css__WEBPACK_IMPORTED_MODULE_3__);




var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngAfterViewInit = function () {
        M.Sidenav.init(jquery__WEBPACK_IMPORTED_MODULE_2__('.sidenav'));
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/store/store.component.css":
/*!*******************************************!*\
  !*** ./src/app/store/store.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3N0b3JlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StoreComponent = /** @class */ (function () {
    function StoreComponent() {
    }
    StoreComponent.prototype.ngOnInit = function () {
    };
    StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-store',
            template: __webpack_require__(/*! raw-loader!./store.component.html */ "./node_modules/raw-loader/index.js!./src/app/store/store.component.html"),
            styles: [__webpack_require__(/*! ./store.component.css */ "./src/app/store/store.component.css")]
        })
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/app/story/story.component.css":
/*!*******************************************!*\
  !*** ./src/app/story/story.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3J5L3N0b3J5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/story/story.component.ts":
/*!******************************************!*\
  !*** ./src/app/story/story.component.ts ***!
  \******************************************/
/*! exports provided: StoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoryComponent", function() { return StoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StoryComponent = /** @class */ (function () {
    function StoryComponent() {
    }
    StoryComponent.prototype.ngOnInit = function () {
    };
    StoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-story',
            template: __webpack_require__(/*! raw-loader!./story.component.html */ "./node_modules/raw-loader/index.js!./src/app/story/story.component.html"),
            styles: [__webpack_require__(/*! ./story.component.css */ "./src/app/story/story.component.css")]
        })
    ], StoryComponent);
    return StoryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\05.angular\angular\shopping\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
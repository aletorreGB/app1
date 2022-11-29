"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_userlist_userlist_module_ts"],{

/***/ 2187:
/*!*****************************************************!*\
  !*** ./src/app/userlist/userlist-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserlistPageRoutingModule": () => (/* binding */ UserlistPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _userlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlist.page */ 2972);




const routes = [
    {
        path: '',
        component: _userlist_page__WEBPACK_IMPORTED_MODULE_0__.UserlistPage
    }
];
let UserlistPageRoutingModule = class UserlistPageRoutingModule {
};
UserlistPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserlistPageRoutingModule);



/***/ }),

/***/ 7333:
/*!*********************************************!*\
  !*** ./src/app/userlist/userlist.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserlistPageModule": () => (/* binding */ UserlistPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _userlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlist-routing.module */ 2187);
/* harmony import */ var _userlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userlist.page */ 2972);







let UserlistPageModule = class UserlistPageModule {
};
UserlistPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _userlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserlistPageRoutingModule
        ],
        declarations: [_userlist_page__WEBPACK_IMPORTED_MODULE_1__.UserlistPage]
    })
], UserlistPageModule);



/***/ }),

/***/ 2972:
/*!*******************************************!*\
  !*** ./src/app/userlist/userlist.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserlistPage": () => (/* binding */ UserlistPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _userlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlist.page.html?ngResource */ 3476);
/* harmony import */ var _userlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userlist.page.scss?ngResource */ 4644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);





let UserlistPage = class UserlistPage {
    constructor(http) {
        this.http = http;
        this.characters = [];
    }
    ngOnInit() {
        this.http.get('https://rickandmortyapi.com/api/character')
            .subscribe(res => {
            console.log(res);
            this.characters = res.results;
        });
    }
};
UserlistPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
UserlistPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-userlist',
        template: _userlist_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_userlist_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UserlistPage);



/***/ }),

/***/ 4644:
/*!********************************************************!*\
  !*** ./src/app/userlist/userlist.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VybGlzdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3476:
/*!********************************************************!*\
  !*** ./src/app/userlist/userlist.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Conductores</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"inicio\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col sizeMd=\"4\" offsetMd=\"4\">\n        <ion-list>\n          <ion-item *ngFor=\"let character of characters\" >\n            <ion-avatar slot=\"start\">\n              <img src=\"{{character.image}}\">\n            </ion-avatar>\n            <ion-label>{{character.name}}</ion-label>\n\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_userlist_userlist_module_ts.js.map
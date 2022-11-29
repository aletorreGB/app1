"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ub-picks_ub-picks_module_ts"],{

/***/ 3346:
/*!*****************************************************!*\
  !*** ./src/app/ub-picks/ub-picks-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UbPICKSPageRoutingModule": () => (/* binding */ UbPICKSPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ub_picks_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ub-picks.page */ 165);




const routes = [
    {
        path: '',
        component: _ub_picks_page__WEBPACK_IMPORTED_MODULE_0__.UbPICKSPage
    }
];
let UbPICKSPageRoutingModule = class UbPICKSPageRoutingModule {
};
UbPICKSPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UbPICKSPageRoutingModule);



/***/ }),

/***/ 790:
/*!*********************************************!*\
  !*** ./src/app/ub-picks/ub-picks.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UbPICKSPageModule": () => (/* binding */ UbPICKSPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ub_picks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ub-picks-routing.module */ 3346);
/* harmony import */ var _ub_picks_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ub-picks.page */ 165);







let UbPICKSPageModule = class UbPICKSPageModule {
};
UbPICKSPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ub_picks_routing_module__WEBPACK_IMPORTED_MODULE_0__.UbPICKSPageRoutingModule
        ],
        declarations: [_ub_picks_page__WEBPACK_IMPORTED_MODULE_1__.UbPICKSPage]
    })
], UbPICKSPageModule);



/***/ }),

/***/ 165:
/*!*******************************************!*\
  !*** ./src/app/ub-picks/ub-picks.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UbPICKSPage": () => (/* binding */ UbPICKSPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ub_picks_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ub-picks.page.html?ngResource */ 9330);
/* harmony import */ var _ub_picks_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ub-picks.page.scss?ngResource */ 8651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let UbPICKSPage = class UbPICKSPage {
    constructor() {
        this.places = [
            {
                id: '1',
                title: 'Camioneta 4x2',
                imageURL: 'https://www.rentaleon.com/wp-content/uploads/2020/03/camioneta-fletes-baratos.jpeg',
                comments: ['Camioneta 4X2 MOTOR  GASOLINA 2.5L 166 CABALLOS DE FUERZA ']
            }
        ];
    }
    ngOnInit() {
    }
};
UbPICKSPage.ctorParameters = () => [];
UbPICKSPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ub-picks',
        template: _ub_picks_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ub_picks_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UbPICKSPage);



/***/ }),

/***/ 8651:
/*!********************************************************!*\
  !*** ./src/app/ub-picks/ub-picks.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1Yi1waWNrcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9330:
/*!********************************************************!*\
  !*** ./src/app/ub-picks/ub-picks.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"star\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>UbPICKS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-list>\n\n</ion-list>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ub-picks_ub-picks_module_ts.js.map
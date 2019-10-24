webpackJsonp([1],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function() { return ServicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(696);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServicesPageModule = /** @class */ (function () {
    function ServicesPageModule() {
    }
    ServicesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__services__["a" /* ServicesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__services__["a" /* ServicesPage */]),
            ],
        })
    ], ServicesPageModule);
    return ServicesPageModule;
}());

//# sourceMappingURL=services.module.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_globles__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicesPage = /** @class */ (function () {
    function ServicesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contentURL = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["e" /* k_content_url */];
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesPage');
    };
    ServicesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-services',template:/*ion-inline-start:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/services/services.html"*/'<!--\n  Generated template for the ServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>services</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <p>දෙස් විදෙස් නරඹන්නන් සඳහා තොරතුරු ලබා දීම හා මග පෙන්වීම </p>\n        <p> කෞතුක භාණ්ඩ එක්රැස් කිරීම</p>\n        <p>කෞතුක භාණ්ඩ සංරක්ෂණය කිරීම</p>\n        <p>කෞතුක භාණ්ඩ ප්‍රදර්ශනය කිරීම</p>\n        <p>පර්යේෂණ පැවැත්වීම</p>\n        <p>අධ්‍යාපන මධ්‍යස්ථානයක් වශයෙන් පවත්වාගෙන යාම</p>\n        <p>ජංගම ,තාවකාලික හා ස්ථිර ප්‍රදර්ශන සංවිධානය කිරීම</p>\n        <p>පාසල් දරුවන් සඳහා අධ්‍යාපන වැඩසටහන් සංවිධානය කිරීම</p>\n        <p>කෞතුකාගාරය මහජනතාව අතර ජනප්‍රිය කරවීම සඳහා ජන මාධ්‍යය සඳහා තොරතුරු ලබා දීම</p>\n      </ion-col>\n      <ion-col col-4>\n        <p>දෙස් විදෙස් නරඹන්නන් සඳහා තොරතුරු ලබා දීම හා මග පෙන්වීම </p>\n        <p> කෞතුක භාණ්ඩ එක්රැස් කිරීම</p>\n        <p>කෞතුක භාණ්ඩ සංරක්ෂණය කිරීම</p>\n        <p>කෞතුක භාණ්ඩ ප්‍රදර්ශනය කිරීම</p>\n        <p>පර්යේෂණ පැවැත්වීම</p>\n        <p>අධ්‍යාපන මධ්‍යස්ථානයක් වශයෙන් පවත්වාගෙන යාම</p>\n        <p>ජංගම ,තාවකාලික හා ස්ථිර ප්‍රදර්ශන සංවිධානය කිරීම</p>\n        <p>පාසල් දරුවන් සඳහා අධ්‍යාපන වැඩසටහන් සංවිධානය කිරීම</p>\n        <p>කෞතුකාගාරය මහජනතාව අතර ජනප්‍රිය කරවීම සඳහා ජන මාධ්‍යය සඳහා තොරතුරු ලබා දීම</p>\n      </ion-col>\n      <ion-col col-4>\n        <p>දෙස් විදෙස් නරඹන්නන් සඳහා තොරතුරු ලබා දීම හා මග පෙන්වීම </p>\n        <p> කෞතුක භාණ්ඩ එක්රැස් කිරීම</p>\n        <p>කෞතුක භාණ්ඩ සංරක්ෂණය කිරීම</p>\n        <p>කෞතුක භාණ්ඩ ප්‍රදර්ශනය කිරීම</p>\n        <p>පර්යේෂණ පැවැත්වීම</p>\n        <p>අධ්‍යාපන මධ්‍යස්ථානයක් වශයෙන් පවත්වාගෙන යාම</p>\n        <p>ජංගම ,තාවකාලික හා ස්ථිර ප්‍රදර්ශන සංවිධානය කිරීම</p>\n        <p>පාසල් දරුවන් සඳහා අධ්‍යාපන වැඩසටහන් සංවිධානය කිරීම</p>\n        <p>කෞතුකාගාරය මහජනතාව අතර ජනප්‍රිය කරවීම සඳහා ජන මාධ්‍යය සඳහා තොරතුරු ලබා දීම</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/services/services.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ServicesPage);
    return ServicesPage;
}());

//# sourceMappingURL=services.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
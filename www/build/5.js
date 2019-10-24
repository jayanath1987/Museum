webpackJsonp([5],{

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function() { return GalleryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery__ = __webpack_require__(692);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GalleryPageModule = /** @class */ (function () {
    function GalleryPageModule() {
    }
    GalleryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gallery__["a" /* GalleryPage */]),
            ],
        })
    ], GalleryPageModule);
    return GalleryPageModule;
}());

//# sourceMappingURL=gallery.module.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gallery_gallery__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_globles__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category__ = __webpack_require__(350);
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
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GalleryPage = /** @class */ (function () {
    function GalleryPage(navCtrl, navParams, galleryServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.galleryServiceProvider = galleryServiceProvider;
        this.floors = [];
        this.selectedFloor = "";
        this.items = [];
        this.contentURL = __WEBPACK_IMPORTED_MODULE_3__app_app_globles__["e" /* k_content_url */];
        galleryServiceProvider.getFloors().subscribe(function (successResponse) {
            _this.floors = successResponse;
            _this.selectFloor(_this.floors.floors[0]);
        });
    }
    GalleryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GalleryPage');
    };
    GalleryPage.prototype.selectFloor = function (params) {
        var _this = this;
        if (params) {
            this.selectedFloor = 'කාණ්ඩ (' + params.name_si + ') பிரிவுகள் (' + params.name_ta + ') Categories (' + params.name_en + ')';
            this.galleryServiceProvider.getItemByFloor(params.id, 'si').subscribe(function (successResponse) {
                _this.items = successResponse;
                console.log(successResponse);
            });
        }
    };
    GalleryPage.prototype.selectCategory = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__category_category__["a" /* CategoryPage */], {
            cat: params
        });
    };
    GalleryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gallery',template:/*ion-inline-start:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/gallery/gallery.html"*/'<!--\n  Generated template for the GalleryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Gallery </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid id="info-container">\n   \n    <ion-row>\n      <ion-col col-4>\n         <h3>මහල් மாடிகள் Floors</h3>\n        <ion-card *ngFor="let floor of floors.floors" on-click="selectFloor(floor)">\n\n          <ion-card-content>\n            <ion-label>{{floor.name_si}} {{floor.name_ta}} {{floor.name_en}}</ion-label>\n            <img src="{{contentURL+floor.floor_image}}" />\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-8>\n       <h2> {{selectedFloor}}</h2>\n        <ion-row>\n          <ion-col col-12>\n            <ion-card *ngFor="let category of items.categories" on-click="selectCategory(category)">\n              <img src="{{contentURL+category.thumbnail}}" />\n              <ion-card-content>\n                <ion-card-title>\n                  {{category.name_si}} {{category.name_en}} {{category.name_ta}}\n                </ion-card-title>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <small> <ion-icon name="ios-information-circle"></ion-icon> ගැලරිය බැලීමට කරුණාකර මහල හා කාණ්ඩය තෝරා ගන්න தரையையும் பிரிவையும் தேர்ந்தெடுக்கவும் please select floor and category to see the galary</small>\n</ion-footer>'/*ion-inline-end:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/gallery/gallery.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_gallery_gallery__["a" /* GalleryServiceProvider */]])
    ], GalleryPage);
    return GalleryPage;
}());

//# sourceMappingURL=gallery.js.map

/***/ })

});
//# sourceMappingURL=5.js.map
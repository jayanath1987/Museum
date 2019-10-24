webpackJsonp([7],{

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchMuseumsPageModule", function() { return BranchMuseumsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__branch_museums__ = __webpack_require__(690);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BranchMuseumsPageModule = /** @class */ (function () {
    function BranchMuseumsPageModule() {
    }
    BranchMuseumsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__branch_museums__["a" /* BranchMuseumsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__branch_museums__["a" /* BranchMuseumsPage */]),
            ],
        })
    ], BranchMuseumsPageModule);
    return BranchMuseumsPageModule;
}());

//# sourceMappingURL=branch-museums.module.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchMuseumsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_branch_museums_service_branch_museums_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_globles__ = __webpack_require__(44);
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
 * Generated class for the BranchMuseumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BranchMuseumsPage = /** @class */ (function () {
    function BranchMuseumsPage(navCtrl, navParams, branchMuseumsServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.branchMuseumsServiceProvider = branchMuseumsServiceProvider;
        this.branches = [];
        this.otherLocation = [];
    }
    BranchMuseumsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.contentURL = __WEBPACK_IMPORTED_MODULE_3__app_app_globles__["e" /* k_content_url */];
        var defaultLocation = { lat: 6.9105748, lng: 79.8599694 };
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 7,
            center: defaultLocation
        });
        this.branchMuseumsServiceProvider.getAll().subscribe(function (successResponse) {
            var selected = successResponse;
            for (var branch in selected.museums) {
                _this.branchMuseumsServiceProvider.getById(selected.museums[branch].id, 'en').subscribe(function (successResponse2) {
                    var val = successResponse2;
                    _this.branches.push(val);
                    var position = new google.maps.LatLng(val.latitude, val.longitude);
                    var museumMarker = new google.maps.Marker({ position: position, title: val.name });
                    museumMarker.setMap(_this.map);
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BranchMuseumsPage.prototype, "mapElement", void 0);
    BranchMuseumsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-branch-museums',template:/*ion-inline-start:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/branch-museums/branch-museums.html"*/'<!--\n  Generated template for the BranchMuseumsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Branches</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid id="info-container">\n    <ion-row>\n      <ion-col col-5>\n        <ion-card *ngFor="let branch of branches">\n\n          <ion-card-content>\n            <img src="{{contentURL+branch.museum_image}}" style="width:100%" />\n            <ion-grid id="info-container">\n              <ion-row>\n                <ion-col>\n                  <button ion-button icon-start clear small>\n        <ion-icon name="ios-clock"></ion-icon>\n        <div>{{branch.opening_hours}}</div>\n      </button>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <button ion-button icon-start clear small>\n        <ion-icon name="ios-calendar"></ion-icon>\n        <div>{{branch.opening_days}}</div>\n      </button>\n                </ion-col>\n\n              </ion-row>\n              <ion-row>\n                <ion-col col-12>\n                  <ion-card-title>\n                    {{branch.name}}\n                  </ion-card-title>\n                  <p>\n                    {{branch.description}}\n                  </p>\n\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-7>\n        <div #map id="map"></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/branch-museums/branch-museums.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_branch_museums_service_branch_museums_service__["a" /* BranchMuseumsServiceProvider */]])
    ], BranchMuseumsPage);
    return BranchMuseumsPage;
}());

//# sourceMappingURL=branch-museums.js.map

/***/ })

});
//# sourceMappingURL=7.js.map
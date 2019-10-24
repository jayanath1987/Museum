webpackJsonp([11],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_globles__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ApiManagerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiManagerProvider = /** @class */ (function () {
    function ApiManagerProvider(http) {
        this.http = http;
        console.log('Hello ApiManagerProvider Provider');
    }
    ApiManagerProvider.prototype.initiateRest = function (url, params, requestBody, httpMethod) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set('Content-Type', 'application/json');
        //headers = headers.set('Accept', 'application/json');
        headers = headers.set(__WEBPACK_IMPORTED_MODULE_4__app_app_globles__["b" /* k_api_key */], __WEBPACK_IMPORTED_MODULE_4__app_app_globles__["c" /* k_api_key_value */]);
        if (httpMethod == __WEBPACK_IMPORTED_MODULE_4__app_app_globles__["a" /* HttpMethod */].get) {
            console.log("url -" + url);
            return this.http.get(url, { headers: headers, params: params }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
        }
        else if (httpMethod == __WEBPACK_IMPORTED_MODULE_4__app_app_globles__["a" /* HttpMethod */].post) {
            console.log("auth Header" + this.authHeaders);
            return this.http.post(url, requestBody, { headers: headers }).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
        }
    };
    ApiManagerProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiManagerProvider.prototype.handleError = function (error) {
        var err;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpErrorResponse */]) {
            err = error || '';
            // const err = error || '';
            // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            err = error.message ? error.message : error.toString();
        }
        console.error(err);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
    };
    ApiManagerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ApiManagerProvider);
    return ApiManagerProvider;
}());

//# sourceMappingURL=api-manager.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_globles__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_gallery_gallery__ = __webpack_require__(154);
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
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemPage = /** @class */ (function () {
    function ItemPage(navCtrl, navParams, galleryServiceProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.galleryServiceProvider = galleryServiceProvider;
        this.selectedItem = [];
        this.contentURL = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["e" /* k_content_url */];
        this.paramVal = navParams.get('item');
        console.log(this.paramVal);
        galleryServiceProvider.getItemById(this.paramVal.id, 'en').subscribe(function (successResponse) {
            console.log(successResponse);
            _this.selectedItem = successResponse;
        });
    }
    ItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ItemPage');
    };
    ItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item',template:/*ion-inline-start:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/item/item.html"*/'<!--\n  Generated template for the ItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{selectedItem.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card>\n  <ion-card-content>\n    <ion-card-title>\n     {{selectedItem.name}}\n      </ion-card-title>\n    <p [innerHtml]="selectedItem.description">\n    </p>\n  </ion-card-content>\n  <img src="{{contentURL+selectedItem.thumb}}" style="height:100%" />\n  \n</ion-card>\n\n<ion-grid *ngIf="selectedItem.photos !== undefined">\n    <ion-row>\n      <ion-col col-4 *ngFor="let photo of selectedItem.photos">\n\n        <ion-card >\n          <img src="{{contentURL+photo}}" /> \n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/item/item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_gallery_gallery__["a" /* GalleryServiceProvider */]])
    ], ItemPage);
    return ItemPage;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_globles__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_manager_api_manager__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the BranchMuseumsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GalleryServiceProvider = /** @class */ (function () {
    function GalleryServiceProvider(http, apiManager) {
        this.http = http;
        this.apiManager = apiManager;
        this.newBranches = [];
        this.seletectlanguage = 'en';
    }
    GalleryServiceProvider.prototype.getFloors = function () {
        var temp_url = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["d" /* k_base_url */] + __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["g" /* k_url_floors */];
        var http_body = { "museumId": __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["f" /* k_default_museum_id */] };
        var params = null;
        var http_method = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["a" /* HttpMethod */].post;
        return this.apiManager.initiateRest(temp_url, params, http_body, http_method);
    };
    GalleryServiceProvider.prototype.getItemByFloor = function (floorId, language) {
        var temp_url = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["d" /* k_base_url */] + __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["h" /* k_url_item_by_floor */];
        var http_body = { "languageId": language, "museumId": __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["f" /* k_default_museum_id */], "floorId": floorId };
        var params = null;
        var http_method = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["a" /* HttpMethod */].post;
        return this.apiManager.initiateRest(temp_url, params, http_body, http_method);
    };
    GalleryServiceProvider.prototype.getItemById = function (itemId, language) {
        var temp_url = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["d" /* k_base_url */] + __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["i" /* k_url_item_by_id */];
        var http_body = { "languageId": language, "museumId": __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["f" /* k_default_museum_id */], "itemId": itemId };
        var params = null;
        var http_method = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["a" /* HttpMethod */].post;
        return this.apiManager.initiateRest(temp_url, params, http_body, http_method);
    };
    GalleryServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_api_manager_api_manager__["a" /* ApiManagerProvider */]])
    ], GalleryServiceProvider);
    return GalleryServiceProvider;
}());

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeTabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
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
 * Generated class for the HomeTabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeTabPage = /** @class */ (function () {
    function HomeTabPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.informationRoot = 'InformationPage';
        this.ticketPricesRoot = 'TicketPricesPage';
        this.floorPlanRoot = 'FloorPlanPage';
        this.galleryRoot = 'GalleryPage';
        this.servicesRoot = 'ServicesPage';
        this.nearbyAttractionsRoot = 'NearbyAttractionsPage';
        this.openingHoursRoot = 'OpeningHoursPage';
        this.branchMuseumsRoot = 'BranchMuseumsPage';
    }
    HomeTabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home-tab',template:/*ion-inline-start:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/home-tab/home-tab.html"*/'<ion-tabs>\n    <ion-tab [root]="informationRoot" tabTitle="Information" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="galleryRoot" tabTitle="Gallery" tabIcon="ios-images"></ion-tab>\n    <ion-tab [root]="ticketPricesRoot" tabTitle="Ticket prices" tabIcon="ios-cash"></ion-tab>\n    <!--ion-tab [root]="floorPlanRoot" tabTitle="Floor plan" tabIcon="information-circle"></ion-tab-->\n    \n    <ion-tab [root]="servicesRoot" tabTitle="Services" tabIcon="ios-construct"></ion-tab>\n    <!--ion-tab [root]="nearbyAttractionsRoot" tabTitle="Nearby attractions" tabIcon="information-circle"></ion-tab-->\n    <!--ion-tab [root]="openingHoursRoot" tabTitle="Opening hours" tabIcon="information-circle"></ion-tab-->\n    <ion-tab [root]="branchMuseumsRoot" tabTitle="Branches" tabIcon="ios-pin"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/home-tab/home-tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomeTabPage);
    return HomeTabPage;
}());

//# sourceMappingURL=home-tab.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/branch-museums/branch-museums.module": [
		679,
		7
	],
	"../pages/category/category.module": [
		680,
		10
	],
	"../pages/floor-plan/floor-plan.module": [
		681,
		6
	],
	"../pages/gallery/gallery.module": [
		682,
		5
	],
	"../pages/home-tab/home-tab.module": [
		683,
		9
	],
	"../pages/information/information.module": [
		684,
		4
	],
	"../pages/item/item.module": [
		685,
		8
	],
	"../pages/nearby-attractions/nearby-attractions.module": [
		686,
		3
	],
	"../pages/opening-hours/opening-hours.module": [
		687,
		2
	],
	"../pages/services/services.module": [
		688,
		1
	],
	"../pages/ticket-prices/ticket-prices.module": [
		689,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 210;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BranchMuseumsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_globles__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_manager_api_manager__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the BranchMuseumsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BranchMuseumsServiceProvider = /** @class */ (function () {
    function BranchMuseumsServiceProvider(http, apiManager) {
        this.http = http;
        this.apiManager = apiManager;
        this.newBranches = [];
        this.seletectlanguage = 'en';
    }
    BranchMuseumsServiceProvider.prototype.getAll = function () {
        var temp_url = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["d" /* k_base_url */] + __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["k" /* k_url_museum_list */];
        var http_body = null;
        var params = null;
        var http_method = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["a" /* HttpMethod */].post;
        return this.apiManager.initiateRest(temp_url, params, http_body, http_method);
    };
    BranchMuseumsServiceProvider.prototype.populateMuseum = function (language) {
        var _this = this;
        if (this.seletectlanguage === language && this.newBranches.length > 0) {
            console.log('Get from the List');
            return this.newBranches;
        }
        else {
            this.getAll().subscribe(function (successResponse) {
                var branches = successResponse;
                for (var branch in branches.museums) {
                    _this.getById(branches.museums[branch].id, language).subscribe(function (successResponse2) {
                        _this.seletectlanguage = language;
                        console.log('Populate');
                        _this.newBranches.push(successResponse2);
                    });
                }
            });
            return this.newBranches;
        }
    };
    BranchMuseumsServiceProvider.prototype.getById = function (id, language) {
        var temp_url = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["d" /* k_base_url */] + __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["j" /* k_url_museum_by_id */];
        var http_body = { "languageId": language, "museumId": id };
        var params = null;
        var http_method = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["a" /* HttpMethod */].post;
        return this.apiManager.initiateRest(temp_url, params, http_body, http_method);
    };
    BranchMuseumsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_api_manager_api_manager__["a" /* ApiManagerProvider */]])
    ], BranchMuseumsServiceProvider);
    return BranchMuseumsServiceProvider;
}());

//# sourceMappingURL=branch-museums-service.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_globles__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_item__ = __webpack_require__(153);
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
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contentURL = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["e" /* k_content_url */];
        this.category = navParams.get('cat');
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.selectItem = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_item__["a" /* ItemPage */], {
            item: params
        });
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/category/category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{category.name_si}} {{category.name_en}} {{category.name_ta}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card >\n    <img src="{{contentURL+category.thumbnail}}" />\n    <ion-card-content>\n      <ion-card-title>\n        {{category.name_si}} {{category.name_en}} {{category.name_ta}}\n      </ion-card-title>\n      <ion-row>\n        <ion-col col-4><small>\n                    <div [innerHtml]="category.description_si"></div>\n                    </small>\n        </ion-col>\n        <ion-col col-4><small>\n                    <div [innerHtml]="category.description_en"></div>\n                    </small>\n        </ion-col>\n        <ion-col col-4>\n          <small>\n                    <div [innerHtml]="category.description_ta"></div>\n                    </small>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-3 *ngFor="let item of category.items">\n\n        <ion-card on-click="selectItem(item)">\n          <img src="{{contentURL+item.thumb}}" />\n          <ion-card-content>\n            <div class="card-title" [innerHtml]="item.name_si"></div>\n            <div class="card-subtitle" [innerHtml]="item.name_en"></div>\n            <div class="card-subtitle" [innerHtml]="item.name_ta"></div>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <small> <ion-icon name="ios-information-circle"></ion-icon> \nවැඩි විස්තර සඳහා පහත අයිතම තෝරා ගන්න மேலும் தகவலுக்கு கீழேயுள்ள உருப்படிகளைத் தேர்ந்தெடுக்கவும் Select below items for more information</small>\n</ion-footer>'/*ion-inline-end:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/category/category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_audio__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_api_manager_api_manager__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_branch_museums_service_branch_museums_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_gallery_gallery__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_tab_home_tab__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_category_category__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_item_item__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_tab_home_tab__["a" /* HomeTabPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_item_item__["a" /* ItemPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/branch-museums/branch-museums.module#BranchMuseumsPageModule', name: 'BranchMuseumsPage', segment: 'branch-museums', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/floor-plan/floor-plan.module#FloorPlanPageModule', name: 'FloorPlanPage', segment: 'floor-plan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gallery/gallery.module#GalleryPageModule', name: 'GalleryPage', segment: 'gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-tab/home-tab.module#HomeTabPageModule', name: 'HomeTabPage', segment: 'home-tab', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/information/information.module#InformationPageModule', name: 'InformationPage', segment: 'information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item/item.module#ItemPageModule', name: 'ItemPage', segment: 'item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nearby-attractions/nearby-attractions.module#NearbyAttractionsPageModule', name: 'NearbyAttractionsPage', segment: 'nearby-attractions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/opening-hours/opening-hours.module#OpeningHoursPageModule', name: 'OpeningHoursPage', segment: 'opening-hours', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/services/services.module#ServicesPageModule', name: 'ServicesPage', segment: 'services', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ticket-prices/ticket-prices.module#TicketPricesPageModule', name: 'TicketPricesPage', segment: 'ticket-prices', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_tab_home_tab__["a" /* HomeTabPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_item_item__["a" /* ItemPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_audio__["a" /* NativeAudio */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_8__providers_api_manager_api_manager__["a" /* ApiManagerProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_branch_museums_service_branch_museums_service__["a" /* BranchMuseumsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_gallery_gallery__["a" /* GalleryServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return k_base_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return k_content_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return k_api_key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return k_api_key_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return k_url_museum_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return k_url_museum_by_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return k_url_floors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return k_url_item_by_floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return k_url_item_by_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return k_default_museum_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpMethod; });
//
// ===== File globals.ts    
//
var k_base_url = '/museum_app_v4/public/api/v4/';
var k_content_url = '/museum_app_v4/public';
var k_api_key = 'x-api-key';
var k_api_key_value = 'd8fe450d0ba04ecf812575de584664c9';
var k_url_museum_list = 'getMuseums';
var k_url_museum_by_id = 'getMuseumById';
var k_url_floors = 'getFloors';
var k_url_item_by_floor = 'getItemsByFloor';
var k_url_item_by_id = 'getItemsById';
var k_default_museum_id = 1;
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["get"] = "GET";
    HttpMethod["post"] = "POST";
    HttpMethod["put"] = "PUT";
})(HttpMethod || (HttpMethod = {}));
//# sourceMappingURL=app-globles.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_tab_home_tab__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, nativeAudio) {
        var _this = this;
        this.nativeAudio = nativeAudio;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_tab_home_tab__["a" /* HomeTabPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.nativeAudio.preloadSimple('music', 'assets/music/background.mp3').then(function (msg) {
                this.nativeAudio.loop('music');
            }, function (msg) {
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map
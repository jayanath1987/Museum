webpackJsonp([0],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketPricesPageModule", function() { return TicketPricesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ticket_prices__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TicketPricesPageModule = /** @class */ (function () {
    function TicketPricesPageModule() {
    }
    TicketPricesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ticket_prices__["a" /* TicketPricesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ticket_prices__["a" /* TicketPricesPage */]),
            ],
        })
    ], TicketPricesPageModule);
    return TicketPricesPageModule;
}());

//# sourceMappingURL=ticket-prices.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketPricesPage; });
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
 * Generated class for the TicketPricesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketPricesPage = /** @class */ (function () {
    function TicketPricesPage(navCtrl, navParams, branchMuseumsServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.branchMuseumsServiceProvider = branchMuseumsServiceProvider;
        this.contentURL = __WEBPACK_IMPORTED_MODULE_3__app_app_globles__["e" /* k_content_url */];
        this.branches = branchMuseumsServiceProvider.populateMuseum("en");
    }
    TicketPricesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TicketPricesPage');
    };
    TicketPricesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ticket-prices',template:/*ion-inline-start:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/ticket-prices/ticket-prices.html"*/'<!--\n  Generated template for the TicketPricesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ticket Prices</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let branch of branches">\n\n    <ion-card-content>\n      <ion-grid id="info-container">\n        <ion-row>\n          <ion-col col-3>\n            <img src="{{contentURL+branch.museum_image}}" style="width:100%" />\n          </ion-col>\n          <ion-col col-9>\n            <ion-card-title>\n              {{branch.name}}\n            </ion-card-title>\n            <p>\n              {{branch.description}}\n            </p>\n\n          </ion-col>\n        </ion-row>\n        <ion-row >\n          <ion-col>\n            <ion-icon color=\'primary\' name="ios-person"></ion-icon>\n            <div >\n              <h2 color=\'primary\'> Local (Rs.)</h2>\n              <p>Child - {{branch.ticket_local_child}}</p>\n              <p>Adult -{{branch.ticket_local_adult}}</p>\n            </div>\n          </ion-col>\n          <ion-col>\n             <ion-icon color=\'primary\' name="ios-plane"></ion-icon>\n            <div>\n              <h2 color=\'primary\'> Foreign (Rs.)</h2>\n              <p>Child - {{branch.ticket_foreign_child}}</p>\n              <p>Adult - {{branch.ticket_foreign_adult}}</p>\n            </div>\n          </ion-col>\n          <ion-col center text-center>\n            <div>\n               <ion-icon color=\'primary\' name="ios-people"></ion-icon>\n              <h2 color=\'primary\'> Group - School (Rs.)</h2>\n              <p>Child - {{branch.ticket_group_school_children}}</p>\n              <p>Teachers - {{branch.ticket_group_teachers}}</p>\n            </div>\n          </ion-col>\n\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/ticket-prices/ticket-prices.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_branch_museums_service_branch_museums_service__["a" /* BranchMuseumsServiceProvider */]])
    ], TicketPricesPage);
    return TicketPricesPage;
}());

//# sourceMappingURL=ticket-prices.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
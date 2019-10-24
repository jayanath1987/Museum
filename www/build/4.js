webpackJsonp([4],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageModule", function() { return InformationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information__ = __webpack_require__(693);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InformationPageModule = /** @class */ (function () {
    function InformationPageModule() {
    }
    InformationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__information__["a" /* InformationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__information__["a" /* InformationPage */]),
            ],
        })
    ], InformationPageModule);
    return InformationPageModule;
}());

//# sourceMappingURL=information.module.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationPage; });
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
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slideData = [{ image: "../../assets/imgs/slider/1.jpg" }, { image: "../../assets/imgs/slider/2.jpg" }, { image: "../../assets/imgs/slider/3.jpg" }, { image: "../../assets/imgs/slider/4.jpg" }, { image: "../../assets/imgs/slider/5.jpg" }, { image: "../../assets/imgs/slider/6.jpg" }, { image: "../../assets/imgs/slider/7.jpg" }, { image: "../../assets/imgs/slider/8.jpg" }, { image: "../../assets/imgs/slider/9.jpg" }, { image: "../../assets/imgs/slider/10.jpg" }, { image: "../../assets/imgs/slider/11.jpg" }];
        this.contentURL = __WEBPACK_IMPORTED_MODULE_2__app_app_globles__["e" /* k_content_url */];
    }
    InformationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InformationPage');
    };
    InformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information',template:/*ion-inline-start:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/information/information.html"*/'<!--\n  Generated template for the InformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      <p style="text-align: center;width:100%"> <img width="42" src="../../assets/imgs/background/Sl-logo.png" /> කොළඹ\n        කෞතුකාගාරය - முதலாவதாக கொழும்பு - The Colombo Museum</p>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <video style="width:100%" controls="controls" autoplay="autoplay" webkit-playsinline="webkit-playsinline" class="videoPlayer"\n          muted="true" playsinline looped preload="auto">\n          <source src="../../assets/videos/Museum App 1080p.mpg" type="video/mp4" /></video>\n      </ion-col>\n      <ion-col col-8>\n        <ion-slides autoplay="5000" loop="true" speed="3000" style="height:100%">\n          <ion-slide *ngFor="let slide of slideData">\n            <img src="{{slide.image}}" />\n          </ion-slide>\n        </ion-slides>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n          <ion-grid>\n              <ion-row>\n                <ion-col>\n                  Scan <strong>QR Code</strong> to Download "Sri Lanka Museums" app\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                    <img width="100"  src="../../assets/imgs/background/google-play-badge.png" />\n                </ion-col>\n                <ion-col>\n                    <img width="100" src="../../assets/imgs/background/apple-appstore-badge.png" />\n                </ion-col>\n                \n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                      <img height="100" src="../../assets/imgs/background/google-appstore.png" />\n                  </ion-col>\n                  <ion-col>\n                      <img height="100" src="../../assets/imgs/background/apple-appstore.png" />\n                  </ion-col>\n                  \n                </ion-row>\n            </ion-grid>\n        <p> </p>\n      </ion-col>\n      <ion-col col-8>\n\n        <small>\n          කොළඹ කෞතුකාගාරය යනුවෙන් ප්‍රථමයෙන් හඳුන්වනු ලැබූ වර්තමාන ජාතික කෞතුකාගාරය පිහිටුවන ලද්දේ 1877 ජනවාරි 01\n          දිනය. එදා ශ්‍රී ලංකාවේ\n          ආණ්ඩුකාරවරයා වූ ශ්‍රීමත් විලියම් හෙන්රි ග්‍රෙගරි එහි ආදිකර්තෘ විය. වර්ෂ 1872 දී ග්‍රෙගරි ආණ්ඩුකාර පදවියට\n          පත් කිරීමත්\n          සමඟ ප්‍රසිද්ධ කෞතුකාගාරයක අවශ්‍යතාවය සම්බන්ධයෙන් අවධානය යොමු කරලීමට ඉදිරිපත් වූයේ රාජකීය ආසියාතික සමිතිය\n          (ලංකා ශාඛාව)\n          යි. ඉතාලි ගෘහනිර්මාණ ශිල්පයට අනුව නව ගොඩනැගිල්ලක් සඳහා සැලසුම් සකස් කිරීමට එදා ප්‍රසිද්ධ වැඩ\n          දෙපාර්තමේන්තුවේ වාස්තු\n          විද්‍යාඥයා වශයෙන් සේවය කළ ජේ.පී. ස්මිදර් සමත් විය. මෙහි ඉදිකිරීම් 1876 දී නිම වූ අතර, 1877 දී මහජන\n          ප්‍රදර්ශනය සඳහා\n          විවෘත කරන ලදී.\n        </small>\n        <br/>\n        <small>\n          முதலாவதாக கொழும்பு தேசிய நூதனசாலை என அறிமுகப்படுத்திய தற்போதைய தேசிய நூதனசாலையினை 1877 ஆம் ஆண்டு ஜனவரி\n          01ஆந் திகதி ஸ்தாபிக்கப்பட்டுள்ளது.\n          அப்போதைய இலங்கை ஆளுனரான மான்புமிகு விலியம் கெக்கரி அதன் ஆதி கர்கராவர். ஆசிய அரச சங்கத்தின் இலங்கைக்\n          குழுவினால் ஒரு\n          பிரபல நூதனசாலையின் தேவைப்பாடை 1872 ஆம் ஆண்டில் கெக்கரி ஆளுனராக பதவி ஏற்றதும் அவர்களின் கவனத்திற்கு\n          கொண்டுவரப்பட்டது.\n        </small>\n        <br/>\n        <small>\n          The Colombo Museum as it was called at the beginning was established on 1st January 1877. It founder was\n          Sir William Henry\n          Gregory, the British Governor of Ceylon (Sri Lanka) at the time. The Royal Asiatic Society (CB) was\n          instrumental\n          in bringing to the notice of Gregory on his appointment as Governor in 1872 the need for a public museum\n          with much\n          difficulty the approval of the legislative council was obtained within a year. The Architect of the Public\n          Works\n          Department, J.G. Smither was able to prepare the plans for new structure on Italian architectural style.\n          The construction\n          was completed in 1876 and the Museum commenced it functions in the following year.\n        </small>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/media/jayanath/Data/ICTA/museum/Slm/museum/src/pages/information/information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], InformationPage);
    return InformationPage;
}());

//# sourceMappingURL=information.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
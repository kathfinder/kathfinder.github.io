webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		150
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 149;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about_module__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { SplashScreen } from '@ionic-native/splash-screen';
//import { StatusBar } from '@ionic-native/status-bar';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about_module__["AboutPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            ],
            providers: [
                //StatusBar,
                //SplashScreen,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Platform } from 'ionic-angular';
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';

var MyApp = /** @class */ (function () {
    function MyApp() {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */];
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kathy/Development/Ionic/kathfinder/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/kathy/Development/Ionic/kathfinder/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(76);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage_1 = AboutPage;
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.goToAboutPage = function () {
        this.navCtrl.setRoot(AboutPage_1);
    };
    AboutPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AboutPage = AboutPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/kathy/Development/Ionic/kathfinder/src/pages/about/about.html"*/'<ion-header align="center" padding>\n  <button ion-button icon-only large outline round color="highlight" (click)="goToHomePage()">\n    <ion-icon name="home"></ion-icon>\n  </button>\n  <button ion-button large outline round color="highlight" (click)="goToAboutPage()">About</button>\n  <a button ion-button large outline round color="highlight" href="https://kathy.life">Blog</a>\n  <a button ion-button large outline round color="highlight" href="https://buildbuilds.com">Slog</a>\n  <a button ion-button large outline round color="highlight" href="https://www.youtube.com/kathyli">Vlog</a>\n</ion-header>\n\n<ion-content padding>\n\n  <h2 align="center" padding>About Kathy</h2>\n\n  <div class="image-grid">\n    <ion-grid fixed sm>\n      <ion-row align-items-center padding>\n        <ion-col col-12 col-sm align-self-center>\n          <div align="center">\n            <img width="256px" height="256px" src="assets/imgs/kathfinder.png" />\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row align-items-center padding>\n        <ion-col col-12 col-sm align-self-center padding>\n          <div>\n            <hr>\n\n            &nbsp;\n\n            <h2>A few examples of the <a href="https://buildiful.com">Buildiful</a> inventions, which Kathy "inventgineered<sup>*</sup>"</h2>\n\n            <p>1. The world\'s biggest internet of things (IoT)</p>\n\n            <p><a href="https://biotob.org">BIOTOB</a></p>\n\n            <p>2. Contactless control</p>\n\n            <p><a href="https://signborg.com">Signborg</a></p>\n\n            <p>3. Voice labels</p>\n\n            <p><a href="https://listenabel.com">Listenabel</a></p>\n\n            <p><sup>*</sup><small>[inventgineered = invented + engineered]</small></p>\n\n            &nbsp;\n\n            <hr>\n\n            &nbsp;\n\n            <h1>Background</h1>\n\n            <p>As the saying goes, “Things were different back then.”</p>\n\n            <p>Kathy graduated from the University of Washington’s Paul G. Allen School of Computer Science and Engineering. Her research focus was in Artificial Intelligence / Robotics.</p>\n\n            <p>At the time of her graduation, A.I. jobs were few and far between. So Kathy started her tech career in a then-disruptive field —— namely, the mobile gaming industry.</p>\n\n            <p>Kathy is gratified to have lived and worked in Silicon Valley, San Francisco, Seattle, London, Hong Kong —— and she intends for the list to keep growing, still.</p>\n\n            <p>Her past employers include both multinational corporations and pre-funded startups alike. To date, she has published 50+ mobile apps worldwide, most of which are best-selling and award-winning games.</p>\n\n            <p>(At Bandai Namco in particular, Kathy led a team of engineers to turn Namco classics into their mobile counterparts. Original games were among her projects as well. Several other games she worked on have been published by companies like Sony Pictures and The Walt Disney Company.)</p>\n\n            &nbsp;\n\n            <hr color="#ffffff">\n\n            &nbsp;\n\n            <h1>What Now?</h1>\n\n            <p>Fast forward to many moons later, the tide has turned —— A.I. engineers are all of a sudden in dire demand.</p>\n\n            <p>But Kathy is no longer interested in getting paid handsomely to build for Corporate America.</p>\n\n            <p>Her goal now, is to explore paths where technology can be leveraged to do good for humanity.</p>\n\n            <p>Meanwhile, she won’t stop building <a href="http://buildiful.com">Buildiful</a> builds alongside great teams.</p>\n\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer align="center" padding>\n    <ion-buttons>\n        <a button ion-button icon-only large clear color="highlight" href="https://medium.com/@kathyli">\n          <ion-icon name="logo-medium"></ion-icon>\n        </a>\n        <a button ion-button icon-only large clear color="highlight" href="https://facebook.com/inventgineer">\n          <ion-icon name="logo-facebook"></ion-icon>\n        </a>\n        <a button ion-button icon-only large clear color="highlight" href="https://twitter.com/kathfinder">\n          <ion-icon name="logo-twitter"></ion-icon>\n        </a>\n        <a button ion-button icon-only large clear color="highlight" href="https://instagram.com/kathfinder">\n          <ion-icon name="logo-instagram"></ion-icon>\n        </a>\n      </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"/Users/kathy/Development/Ionic/kathfinder/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
    var AboutPage_1;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.goToAboutPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'You have found Kathy!',
            position: 'middle',
            duration: 2000,
            cssClass: 'toast-box-big',
        });
        toast.present();
    };
    HomePage.prototype.presentToast_Buildbot = function () {
        var toast = this.toastCtrl.create({
            message: 'Robot Buildie',
            position: 'middle',
            duration: 1500,
            cssClass: 'toast-box',
        });
        toast.present();
    };
    HomePage.prototype.presentToast_Panda = function () {
        var toast = this.toastCtrl.create({
            message: 'Panda Buildie',
            position: 'middle',
            duration: 1500,
            cssClass: 'toast-box',
        });
        toast.present();
    };
    HomePage.prototype.presentToast_Puppy = function () {
        var toast = this.toastCtrl.create({
            message: 'Puppy Buildie',
            position: 'middle',
            duration: 1500,
            cssClass: 'toast-box',
        });
        toast.present();
    };
    HomePage.prototype.presentToast_Kitty = function () {
        var toast = this.toastCtrl.create({
            message: 'Kitty Buildie',
            position: 'middle',
            duration: 1500,
            cssClass: 'toast-box',
        });
        toast.present();
    };
    HomePage.prototype.presentToast_Pig = function () {
        var toast = this.toastCtrl.create({
            message: 'Piggie Buildie',
            position: 'middle',
            duration: 1500,
            cssClass: 'toast-box',
        });
        toast.present();
    };
    HomePage.prototype.presentToast_Duck = function () {
        var toast = this.toastCtrl.create({
            message: 'Duckie Buildie',
            position: 'middle',
            duration: 1500,
            cssClass: 'toast-box',
        });
        toast.present();
    };
    HomePage.prototype.presentToast_Emoji = function () {
        var toast = this.toastCtrl.create({
            message: 'Emoji Buildie',
            position: 'middle',
            duration: 1500,
            cssClass: 'toast-box',
        });
        toast.present();
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/kathy/Development/Ionic/kathfinder/src/pages/home/home.html"*/'<ion-header align="center" padding>\n  <button ion-button icon-only large outline round color="highlight" (click)="goToHomePage()">\n    <ion-icon name="home"></ion-icon>\n  </button>\n  <button ion-button large outline round color="highlight" (click)="goToAboutPage()">About</button>\n  <a button ion-button large outline round color="highlight" href="https://kathy.life">Blog</a>\n  <a button ion-button large outline round color="highlight" href="https://buildbuilds.com">Slog</a>\n  <a button ion-button large outline round color="highlight" href="https://www.youtube.com/kathyli">Vlog</a>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="main">\n  <h1 align="center" padding>Find Kathy</h1></div>\n\n  <div class="image-grid">\n    <ion-grid align="center" fixed xs>\n      <ion-row align-items-center padding>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Panda()"><img src="assets/imgs/buildbot-panda.png" /></a>\n        </ion-col>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast()"><img src="assets/imgs/buildbot-kathfinder.png"/></a>\n        </ion-col>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Buildbot()"><img src="assets/imgs/buildbot-original.png"/></a>\n        </ion-col>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Puppy()"><img src="assets/imgs/buildbot-puppy.png"/></a>\n        </ion-col>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Duck()"><img src="assets/imgs/buildbot-duck.png"/></a>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center padding>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Emoji()"><img src="assets/imgs/buildbot-emoji.png"/></a>\n        </ion-col>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Kitty()"><img src="assets/imgs/buildbot-kitty.png"/></a>\n        </ion-col>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Panda()"><img src="assets/imgs/buildbot-panda.png"/></a>\n        </ion-col>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Emoji()"><img src="assets/imgs/buildbot-emoji.png"/></a>\n        </ion-col>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Pig()"><img src="assets/imgs/buildbot-pig.png"/></a>\n        </ion-col>\n      </ion-row>\n      <ion-row align-items-center padding>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Puppy()"><img src="assets/imgs/buildbot-puppy.png"/></a>\n        </ion-col>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Pig()"><img src="assets/imgs/buildbot-pig.png"/></a>\n        </ion-col>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Duck()"><img src="assets/imgs/buildbot-duck.png"/></a>\n        </ion-col>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Kitty()"><img src="assets/imgs/buildbot-kitty.png"/></a>\n        </ion-col>\n        <ion-col align-self-center col-xs>\n          <a (click)="presentToast_Buildbot()"><img src="assets/imgs/buildbot-original.png"/></a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n<ion-footer align="center" padding>\n  <ion-buttons>\n      <a button ion-button icon-only large clear color="highlight" href="https://medium.com/@kathyli">\n        <ion-icon name="logo-medium"></ion-icon>\n      </a>\n      <a button ion-button icon-only large clear color="highlight" href="https://facebook.com/inventgineer">\n        <ion-icon name="logo-facebook"></ion-icon>\n      </a>\n      <a button ion-button icon-only large clear color="highlight" href="https://twitter.com/kathfinder">\n        <ion-icon name="logo-twitter"></ion-icon>\n      </a>\n      <a button ion-button icon-only large clear color="highlight" href="https://instagram.com/kathfinder">\n        <ion-icon name="logo-instagram"></ion-icon>\n      </a>\n    </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"/Users/kathy/Development/Ionic/kathfinder/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ToastController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[190]);
//# sourceMappingURL=main.js.map

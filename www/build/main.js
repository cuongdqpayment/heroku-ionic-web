webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebbrowserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ApiService } from '../../providers/apiService';

var WebbrowserPage = /** @class */ (function () {
    function WebbrowserPage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
    }
    WebbrowserPage.prototype.searchEnter = function () {
        //neu parse truc tiep se cho ra web nguyen mau
        this.link = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
        //neu muon doc lay text thoi thi phai chuyen sang html nhung vao
        //<div style="overflow-x:auto;" [innerHTML]="this.content"></div>
        /* this.apiService.getHtmlWeb(this.url)
            .subscribe( texthtml => this.content = this.sanitizer.bypassSecurityTrustHtml(texthtml))
            ,(err=>console.log(err)); */
    };
    WebbrowserPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    WebbrowserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-webbrowser',template:/*ion-inline-start:"D:\IONIC\heroku-ionic-web\src\pages\webbrowser\webbrowser.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-item class="input-item">\n\n          <ion-input type="text" [(ngModel)]="url" placeholder="Gõ địa chỉ để duyệt web từ server" (keyup.enter)="searchEnter()"></ion-input>\n\n        </ion-item>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only color="royal">\n\n              <ion-icon name="share-alt" ios="ios-share-alt" md="md-share-alt"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n</ion-navbar>\n\n  \n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!--   <div style="overflow-x:auto;" [innerHTML]="this.content"></div> -->\n\n  <iframe style="min-height:400px;"  width=100% height=100% [attr.src]="this.link" frameborder="1" allowfullscreen sandbox="allow-same-origin allow-scripts"></iframe>\n\n</ion-content>'/*ion-inline-end:"D:\IONIC\heroku-ionic-web\src\pages\webbrowser\webbrowser.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], WebbrowserPage);
    return WebbrowserPage;
}());

//# sourceMappingURL=webbrowser.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 153:
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
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__webbrowser_webbrowser__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_apiService__ = __webpack_require__(198);
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
    function HomePage(navCtrl, apiService, plt, alertCtrl) {
        this.navCtrl = navCtrl;
        this.apiService = apiService;
        this.plt = plt;
        this.alertCtrl = alertCtrl;
        this.users = [];
        this.page = 0; // Observable<any>;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getRandomUser(20)
            .subscribe(function (userArray) {
            _this.page++;
            _this.users = _this.users.concat(userArray);
        });
    };
    HomePage.prototype.checkPlatform = function () {
        var alert = this.alertCtrl.create({
            title: 'Platform',
            message: 'You are running on: ' + this.plt.platforms(),
            buttons: ['OK']
        });
        alert.present();
        if (this.plt.is('cordova')) {
            // Do Cordova stuff
        }
        else {
            // Do stuff inside the regular browser
        }
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.apiService.getRandomUser(20)
                .subscribe(function (userArray) {
                _this.users = _this.users.concat(userArray);
                _this.page++;
            });
            infiniteScroll.complete();
        }, 1000);
    };
    HomePage.prototype.forwardWeb = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__webbrowser_webbrowser__["a" /* WebbrowserPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\IONIC\heroku-ionic-web\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n          <button ion-button menuToggle color="primary">\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          <ion-buttons start>\n\n              <img src="assets/imgs/logo.png">\n\n          </ion-buttons>\n\n          <ion-buttons end>\n\n              <button ion-button icon-only color="royal" (click)="forwardWeb()">\n\n                <ion-icon name="notifications" ios="ios-notifications" md="md-notifications"></ion-icon>\n\n                <ion-badge color="danger" *ngIf="page > 0">{{ page }}</ion-badge>\n\n              </button>\n\n          </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col *ngFor="let user of users" col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6>\n\n        <ion-card>\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img [src]="user.picture?.medium">\n\n            </ion-avatar>\n\n            <h2 text-capitalize>{{ user.name?.first }} {{ user.name?.last }}</h2>\n\n          </ion-item>\n\n          <ion-card-content>\n\n            Đây là nội dung BIẾT làm sao đây nè\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar color="primary">\n\n        <ion-buttons start>\n\n          <button ion-button icon-only color="royal">\n\n            <ion-icon name="logo-googleplus"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n        <ion-buttons left>\n\n            <button ion-button icon-only color="royal">\n\n              <ion-icon name="thumbs-up" ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        <ion-buttons right>\n\n            <button ion-button icon-only color="royal">\n\n              <ion-icon name="chatbubbles" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        <ion-title>cuongdq.payment@gmail.com</ion-title>\n\n        <ion-buttons end>\n\n          <button ion-button icon-only color="royal">\n\n            <ion-icon name="logo-facebook"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\IONIC\heroku-ionic-web\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_apiService__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_platform_platform__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = /** @class */ (function () {
    function ApiService(httpClient, sanitizer) {
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
    }
    ApiService.prototype.getRandomUser = function (nRecord) {
        return this.httpClient.get('https://randomuser.me/api/?results=' + nRecord)
            .map(function (res) { return res['results']; });
    };
    ApiService.prototype.getHtmlWeb = function (url) {
        //ket qua tra ve la text hay json, neu la text thi phai xu ly chuyen doi html
        //this.sanitizer.bypassSecurityTrustHtml(webhtml)
        return this.httpClient.get(url, { responseType: 'text' })
            .map(function (webhtml) { return webhtml; });
    };
    ApiService.prototype.postHtmlWeb = function (url, jsonRequest) {
        var _this = this;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                //'Authorization': 'my-auth-token',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/html; text/html'
            })
        };
        return this.httpClient.post(url, jsonRequest, httpOptions)
            .subscribe(function (webhtml) { return _this.sanitizer.bypassSecurityTrustHtml(webhtml['_body']); });
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], ApiService);
    return ApiService;
}());

//# sourceMappingURL=apiService.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);


//cho phep mode phat trien

Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_webbrowser_webbrowser__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_apiService__ = __webpack_require__(198);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_webbrowser_webbrowser__["a" /* WebbrowserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_webbrowser_webbrowser__["a" /* WebbrowserPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__providers_apiService__["a" /* ApiService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_webbrowser_webbrowser__ = __webpack_require__(101);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.pages = [{ title: "Trang chủ",
                page_id: 1
            },
            { title: "Tìm kiếm",
                page_id: 2
            }];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_webbrowser_webbrowser__["a" /* WebbrowserPage */]);
    };
    MyApp.prototype.openPage = function (page) {
        var page_id = page.page_id;
        switch (page_id) {
            case 1:
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
                break;
            case 2:
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
                break;
            case 99:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_webbrowser_webbrowser__["a" /* WebbrowserPage */]);
                break;
            default:
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\IONIC\heroku-ionic-web\src\app\app.html"*/'<!-- \n\nxs	auto	Don’t set the grid width for xs screens\n\nsm	540px	Set grid width to 540px when (min-width: 576px)\n\nmd	720px	Set grid width to 720px when (min-width: 768px)\n\nlg	960px	Set grid width to 960px when (min-width: 992px)\n\nxl	1140px	Set grid width to 1140px when (min-width: 1200px)\n\n-->\n\n<ion-split-pane when="md">\n\n  <ion-menu [content]="content" *ngIf="true">\n\n    <ion-header>\n\n      <ion-toolbar color="primary">\n\n        <ion-buttons start>\n\n          <button ion-button icon-only color="royal" (click)="goSearch()">\n\n            <ion-icon name="search"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n        <ion-title>\n\n          Login...\n\n        </ion-title>\n\n        <ion-buttons end>\n\n          <button ion-button icon-only color="royal">\n\n            <ion-icon name="person-add"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n        <ion-buttons right>\n\n          <button ion-button icon-only color="royal">\n\n            <ion-icon name="cog" ios="ios-cog" md="md-cog"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="menu-container">\n\n      <ion-list no-lines>\n\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="transparent list-item">\n\n          {{p.title}}\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n  <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"D:\IONIC\heroku-ionic-web\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map
webpackJsonp([0],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebbrowserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(22);
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
            selector: 'page-webbrowser',template:/*ion-inline-start:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/webbrowser/webbrowser.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-item class="input-item">\n          <ion-input type="text" [(ngModel)]="url" placeholder="Gõ địa chỉ để duyệt web từ server" (keyup.enter)="searchEnter()"></ion-input>\n        </ion-item>\n        <ion-buttons end>\n            <button ion-button icon-only color="royal">\n              <ion-icon name="share-alt" ios="ios-share-alt" md="md-share-alt"></ion-icon>\n            </button>\n        </ion-buttons>\n</ion-navbar>\n  \n\n</ion-header>\n\n<ion-content>\n  <!--   <div style="overflow-x:auto;" [innerHTML]="this.content"></div> -->\n  <iframe style="min-height:400px;"  width=100% height=100% [attr.src]="this.link" frameborder="1" allowfullscreen sandbox="allow-same-origin allow-scripts"></iframe>\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/webbrowser/webbrowser.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n          <button ion-button menuToggle color="primary">\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          <ion-buttons start>\n              <img src="assets/imgs/logo.png">\n          </ion-buttons>\n          <ion-buttons end>\n              <button ion-button icon-only color="royal" (click)="forwardWeb()">\n                <ion-icon name="notifications" ios="ios-notifications" md="md-notifications"></ion-icon>\n                <ion-badge color="danger" *ngIf="page > 0">{{ page }}</ion-badge>\n              </button>\n          </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor="let user of users" col-12 col-xl-4 col-lg-4 col-md-6 col-sm-6>\n        <ion-card>\n          <ion-item>\n            <ion-avatar item-start>\n              <img [src]="user.picture?.medium">\n            </ion-avatar>\n            <h2 text-capitalize>{{ user.name?.first }} {{ user.name?.last }}</h2>\n          </ion-item>\n          <ion-card-content>\n            Đây là nội dung BIẾT làm sao đây nè\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more data..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<ion-footer>\n    <ion-toolbar color="primary">\n        <ion-buttons start>\n          <button ion-button icon-only color="royal">\n            <ion-icon name="logo-googleplus"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-buttons left>\n            <button ion-button icon-only color="royal">\n              <ion-icon name="thumbs-up" ios="ios-thumbs-up" md="md-thumbs-up"></ion-icon>\n            </button>\n          </ion-buttons>\n        <ion-buttons right>\n            <button ion-button icon-only color="royal">\n              <ion-icon name="chatbubbles" ios="ios-chatbubbles" md="md-chatbubbles"></ion-icon>\n            </button>\n          </ion-buttons>\n        <ion-title>cuongdq.payment@gmail.com</ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only color="royal">\n            <ion-icon name="logo-facebook"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/home/home.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(278);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
    }
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/news/news.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      News\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadPage = /** @class */ (function () {
    function UploadPage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
    }
    UploadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload',template:/*ion-inline-start:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/upload/upload.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      upload\n    </ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/upload/upload.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], UploadPage);
    return UploadPage;
}());

//# sourceMappingURL=upload.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);


//cho phep mode phat trien

Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_news_news__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_upload_upload__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_webbrowser_webbrowser__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_apiService__ = __webpack_require__(198);
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
                __WEBPACK_IMPORTED_MODULE_5__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_webbrowser_webbrowser__["a" /* WebbrowserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_upload_upload__["a" /* UploadPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_webbrowser_webbrowser__["a" /* WebbrowserPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__providers_apiService__["a" /* ApiService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_news_news__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_webbrowser_webbrowser__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_upload_upload__ = __webpack_require__(201);
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
            { title: "Tin tức",
                page_id: 2
            },
            { title: "Upload",
                page_id: 3
            },
            { title: "trang 4",
                page_id: 4
            },
            { title: "trang 5",
                page_id: 5
            },
            { title: "trang 6",
                page_id: 6
            },
            { title: "Tìm kiếm",
                page_id: 99
            }];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_webbrowser_webbrowser__["a" /* WebbrowserPage */]);
    };
    MyApp.prototype.openPage = function (page) {
        var page_id = page.page_id;
        switch (page_id) {
            case 1:
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
                break;
            case 2:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_news_news__["a" /* NewsPage */]);
                break;
            case 3:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_upload_upload__["a" /* UploadPage */]);
                break;
            case 99:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_webbrowser_webbrowser__["a" /* WebbrowserPage */]);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/cuongdq/IONIC/cuongdqionic/src/app/app.html"*/'<!-- \nxs	auto	Don’t set the grid width for xs screens\nsm	540px	Set grid width to 540px when (min-width: 576px)\nmd	720px	Set grid width to 720px when (min-width: 768px)\nlg	960px	Set grid width to 960px when (min-width: 992px)\nxl	1140px	Set grid width to 1140px when (min-width: 1200px)\n-->\n<ion-split-pane when="md">\n  <ion-menu [content]="content" *ngIf="true">\n    <ion-header>\n      <ion-toolbar color="primary">\n        <ion-buttons start>\n          <button ion-button icon-only color="royal" (click)="goSearch()">\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title>\n          Login...\n        </ion-title>\n        <ion-buttons end>\n          <button ion-button icon-only color="royal">\n            <ion-icon name="person-add"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-buttons right>\n          <button ion-button icon-only color="royal">\n            <ion-icon name="cog" ios="ios-cog" md="md-cog"></ion-icon>\n          </button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="menu-container">\n      <ion-list no-lines>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="transparent list-item">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n</ion-split-pane>'/*ion-inline-end:"/Users/cuongdq/IONIC/cuongdqionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_age__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_username__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        this.slideOneForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            age: ['', __WEBPACK_IMPORTED_MODULE_3__validators_age__["a" /* AgeValidator */].isValid]
        });
        this.slideTwoForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern('[a-zA-Z]*')]), __WEBPACK_IMPORTED_MODULE_4__validators_username__["a" /* UsernameValidator */].checkUsername],
            privacy: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            bio: ['']
        });
    }
    SignupPage.prototype.next = function () {
        this.signupSlider.slideNext();
    };
    SignupPage.prototype.prev = function () {
        this.signupSlider.slidePrev();
    };
    SignupPage.prototype.save = function () {
        this.submitAttempt = true;
        if (!this.slideOneForm.valid) {
            this.signupSlider.slideTo(0);
        }
        else if (!this.slideTwoForm.valid) {
            this.signupSlider.slideTo(1);
        }
        else {
            console.log("success!");
            console.log(this.slideOneForm.value);
            console.log(this.slideTwoForm.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('signupSlider'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "signupSlider", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Sign Up\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button icon-left (click)="prev()">\n        <ion-icon name="arrow-back"></ion-icon> Prev\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-right (click)="next()">Next <ion-icon name="arrow-forward"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-slides #signupSlider pager>\n\n    <ion-slide>\n\n      <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n      <ion-list no-lines>\n\n        <form [formGroup]="slideOneForm">\n\n          <ion-item>\n            <ion-label floating>First Name</ion-label>\n            <ion-input formControlName="firstName" type="text" [class.invalid]="!slideOneForm.controls.firstName.valid && (slideOneForm.controls.firstName.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf="!slideOneForm.controls.firstName.valid  && (slideOneForm.controls.firstName.dirty || submitAttempt)">\n            <p>Please enter a valid name.</p>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Last Name</ion-label>\n            <ion-input formControlName="lastName" type="text" [class.invalid]="!slideOneForm.controls.lastName.valid && (slideOneForm.controls.age.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf="!slideOneForm.controls.lastName.valid  && (slideOneForm.controls.lastName.dirty || submitAttempt)">\n            <p>Please enter a valid name.</p>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Age</ion-label>\n            <ion-input formControlName="age" type="number" [class.invalid]="!slideOneForm.controls.age.valid && (slideOneForm.controls.age.dirty || submitAttempt)"></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf="!slideOneForm.controls.age.valid  && (slideOneForm.controls.age.dirty || submitAttempt)">\n            <p>Please enter a valid age.</p>\n          </ion-item>\n\n        </form>\n\n      </ion-list>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <ion-list no-lines>\n\n        <form [formGroup]="slideTwoForm">\n\n          <ion-item>\n            <ion-label floating>Username</ion-label>\n            <ion-input [class.invalid]="!slideTwoForm.controls.username.valid && (slideTwoForm.controls.username.dirty || submitAttempt)"\n              formControlName="username" type="text"></ion-input>\n          </ion-item>\n\n          <ion-item *ngIf="slideTwoForm.controls.username.pending">\n            <p>Checking username...</p>\n          </ion-item>\n\n          <ion-item *ngIf="!slideTwoForm.controls.username.valid && !slideTwoForm.controls.username.pending && (slideTwoForm.controls.username.dirty || submitAttempt)">\n            <p>Sorry, that username can not be used!</p>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Privacy</ion-label>\n            <ion-select [class.invalid]="!slideTwoForm.controls.privacy.valid && (slideTwoForm.controls.privacy.dirty || submitAttempt)"\n              formControlName="privacy">\n              <ion-option value="public" checked="true">Public</ion-option>\n              <ion-option value="friends">Friends Only</ion-option>\n              <ion-option value="private">Private</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Bio</ion-label>\n            <ion-textarea formControlName="bio"></ion-textarea>\n          </ion-item>\n\n        </form>\n\n      </ion-list>\n\n      <button ion-button full color="primary" (click)="save()">Create Account!</button>\n\n    </ion-slide>\n\n  </ion-slides>\n\n\n  <p *ngIf="submitAttempt" style="color: #ea6153;">Please fill out all details accurately.</p>\n\n  <ion-list no-lines>\n\n    <form [formGroup]="slideOneForm">\n\n      <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input formControlName="firstName" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input formControlName="lastName" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Age</ion-label>\n        <ion-input formControlName="age" type="number"></ion-input>\n      </ion-item>\n\n    </form>\n\n  </ion-list>\n\n  <br />\n  <ion-list no-lines>\n\n    <form [formGroup]="slideTwoForm">\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input formControlName="username" type="text"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Privacy</ion-label>\n        <ion-select formControlName="privacy">\n          <ion-option value="public" checked="true">Public</ion-option>\n          <ion-option value="friends">Friends Only</ion-option>\n          <ion-option value="private">Private</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Bio</ion-label>\n        <ion-textarea formControlName="bio"></ion-textarea>\n      </ion-item>\n\n    </form>\n\n  </ion-list>\n\n  <button ion-button full color="primary" (click)="save()">Create Account!</button>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeValidator; });
var AgeValidator = /** @class */ (function () {
    function AgeValidator() {
    }
    AgeValidator.isValid = function (control) {
        if (isNaN(control.value)) {
            return {
                "not a number": true
            };
        }
        if (control.value % 1 !== 0) {
            return {
                "not a whole number": true
            };
        }
        if (control.value < 18) {
            return {
                "too young": true
            };
        }
        if (control.value > 120) {
            return {
                "not realistic": true
            };
        }
        return null;
    };
    return AgeValidator;
}());

//# sourceMappingURL=age.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameValidator; });
var UsernameValidator = /** @class */ (function () {
    function UsernameValidator() {
    }
    UsernameValidator.checkUsername = function (control) {
        return new Promise(function (resolve) {
            //Fake a slow response from server
            setTimeout(function () {
                if (control.value.toLowerCase() === "greg") {
                    resolve({
                        "username taken": true
                    });
                }
                else {
                    resolve(null);
                }
            }, 2000);
        });
    };
    return UsernameValidator;
}());

//# sourceMappingURL=username.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
    }
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      login\n    </ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
    }
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      chat\n    </ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>'/*ion-inline-end:"/Users/cuongdq/IONIC/cuongdqionic/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map
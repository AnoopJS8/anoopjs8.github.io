webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1>Welcome {{name}}</h1><github></github> -->\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Github Search</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n\n  </div>\n</nav>\n\n<main role=\"main\" class=\"container\">\n\n  <div class=\"starter-template\">\n    <div class=\"row\">\n      <div class=\"col-md-8 col-md-offset-2\">\n        <github></github>\n      </div>\n    </div>\n  </div>\n\n</main><!-- /.container -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_github_component__ = __webpack_require__("../../../../../src/app/components/github.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__components_github_component__["a" /* GithubComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/github.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf = user>\r\n<h1>{{user.login}}</h1>\r\n</div> -->\r\n<div class=\"row\">\r\n  <div class=\"\">\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Github Username\" [(ngModel)]=\"username\" name=\"username\" (keyup)=\"search()\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<br>\r\n\r\n<div class=\"panel panel-info\" *ngIf=user >\r\n  <div class=\"panel-heading\">\r\n    <h3 class=\"panel-title\">{{user.name}}</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <img class=\"img-thumbnail github-avatar\" src=\"{{user.avatar_url}}\" alt=\"user_avatar\">\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <span class=\"label label-success\">GitHub Handle ::: {{user.login}}</span>\r\n        <span class=\"label label-primary\">Followers {{user.followers}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-info\">\r\n  <div class=\"panel-heading\">\r\n    <h3 class=\"panel-title\">Followers</h3>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <ul class=\"list-group\" *ngFor=\"let follower of followers\" >\r\n          <div class=\"row\">\r\n            <li class=\"list-group-item\">\r\n                <h3>{{follower.login}}</h3>\r\n            </li>\r\n            <div class=\"col-md-3\">\r\n              <img class=\"img-thumbnail github-avatar\" src=\"{{follower.avatar_url}}\" alt=\"avatar\">\r\n            </div>\r\n          </div>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n  <button type=\"submit\" class=\"btn btn-info\"  (click)=\"searchNextLoad()\" *ngIf=\"followers!==[]\" >Load More</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/github.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_github_service__ = __webpack_require__("../../../../../src/app/services/github.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GithubComponent = (function () {
    function GithubComponent(_githubService) {
        this._githubService = _githubService;
        this.count = 0;
        console.log('Github Component init');
    }
    GithubComponent.prototype.search = function () {
        var _this = this;
        //console.log(this.username);
        this._githubService.updateUsername(this.username);
        this._githubService.getUser().subscribe(function (user) {
            //console.log(user);
            _this.user = user;
        });
        this._githubService.getFollowers().subscribe(function (followers) {
            //console.log(followers);
            _this.followers = followers;
        });
    };
    GithubComponent.prototype.searchNextLoad = function () {
        var _this = this;
        this._githubService.updateCount();
        this._githubService.getNextFollowers().subscribe(function (followers) {
            //console.log(followers);
            _this.followers = followers;
        });
    };
    return GithubComponent;
}());
GithubComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'github',
        template: __webpack_require__("../../../../../src/app/components/github.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_github_service__["a" /* GithubService */]) === "function" && _a || Object])
], GithubComponent);

var _a;
//# sourceMappingURL=github.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/github.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubService = (function () {
    function GithubService(_http) {
        this._http = _http;
        this.username = ''; //AnoopJS8';
        this.client_id = ' ';
        this.client_secret = '';
        this.count = 1;
        console.log('Github Service init');
    }
    GithubService.prototype.getUser = function () {
        return this._http.get('https://api.github.com/users/' + this.username)
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.getFollowers = function () {
        return this._http.get('https://api.github.com/users/' + this.username + "/" + "followers?per_page=50")
            .map(function (res) { return res.json(); });
    };
    GithubService.prototype.updateUsername = function (username) {
        this.username = username;
    };
    GithubService.prototype.updateCount = function () {
        this.count += 1;
    };
    GithubService.prototype.getNextFollowers = function () {
        return this._http.get('https://api.github.com/users/' + this.username + "/" + "followers?per_page=50&page=" + this.count)
            .map(function (res) { return res.json(); });
    };
    return GithubService;
}());
GithubService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], GithubService);

var _a;
//# sourceMappingURL=github.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
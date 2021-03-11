(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-pages-auth-auth-module-ngfactory"], {
  /***/
  "./src/app/views/pages/auth/auth.module.ngfactory.js":
  /*!***********************************************************!*\
    !*** ./src/app/views/pages/auth/auth.module.ngfactory.js ***!
    \***********************************************************/

  /*! exports provided: AuthModuleNgFactory */

  /***/
  function srcAppViewsPagesAuthAuthModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModuleNgFactory", function () {
      return AuthModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.module */
    "./src/app/views/pages/auth/auth.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _auth_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.component.ngfactory */
    "./src/app/views/pages/auth/auth.component.ngfactory.js");
    /* harmony import */


    var _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component.ngfactory */
    "./src/app/views/pages/auth/login/login.component.ngfactory.js");
    /* harmony import */


    var _register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component.ngfactory */
    "./src/app/views/pages/auth/register/register.component.ngfactory.js");
    /* harmony import */


    var _forgot_password_forgot_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component.ngfactory */
    "./src/app/views/pages/auth/forgot-password/forgot-password.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _core_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../core/auth/_effects/auth.effects */
    "./src/app/core/auth/_effects/auth.effects.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/fesm2015/effects.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_auth_services_auth_service_fake__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../core/auth/_services/auth.service.fake */
    "./src/app/core/auth/_services/auth.service.fake.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _core_base_crud_utils_intercept_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../core/_base/crud/utils/intercept.service */
    "./src/app/core/_base/crud/utils/intercept.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/fesm2015/checkbox.js");
    /* harmony import */


    var _core_auth_reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../../../core/auth/_reducers/auth.reducers */
    "./src/app/core/auth/_reducers/auth.reducers.ts");
    /* harmony import */


    var _auth_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./auth.component */
    "./src/app/views/pages/auth/auth.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/views/pages/auth/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/views/pages/auth/register/register.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/views/pages/auth/forgot-password/forgot-password.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var AuthModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _auth_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["AuthComponentNgFactory"], _login_login_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["LoginComponentNgFactory"], _register_register_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RegisterComponentNgFactory"], _forgot_password_forgot_password_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateFakeLoader"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateFakeCompiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateDefaultParser"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["FakeMissingTranslationHandler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateStore"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateCompiler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateParser"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["MissingTranslationHandler"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["USE_DEFAULT_LANG"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["USE_STORE"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["USE_EXTEND"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_LANGUAGE"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_12__["AuthEffects"], _core_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_12__["AuthEffects"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["Actions"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _core_auth_services_auth_service_fake__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _core_base_crud_utils_intercept_service__WEBPACK_IMPORTED_MODULE_17__["InterceptService"], _core_base_crud_utils_intercept_service__WEBPACK_IMPORTED_MODULE_17__["InterceptService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"], function () {
        return [new _core_base_crud_utils_intercept_service__WEBPACK_IMPORTED_MODULE_17__["InterceptService"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_20__["HighContrastModeDetector"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MATERIAL_SANITY_CHECKS"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_21__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_22__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_23__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_9__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["_MatCheckboxRequiredValidatorModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["_MatCheckboxRequiredValidatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_store_store_n"], function () {
        return [{}];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["STORE_FEATURES"], function () {
        return [{
          key: "auth",
          reducerFactory: _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["combineReducers"],
          metaReducers: [],
          initialState: undefined
        }];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_store_store_o"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_store_store_u"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_store_store_n"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["STORE_FEATURES"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_store_store_m"], function () {
        return [_core_auth_reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_27__["authReducer"]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_store_store_p"], function (p0_0) {
        return [p0_0];
      }, [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_store_store_m"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["FEATURE_REDUCERS"], function (p0_0, p0_1, p0_2) {
        return [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_store_store_v"](p0_0, p0_1, p0_2)];
      }, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_store_store_p"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073873408, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreFeatureModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ɵngrx_modules_store_store_o"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["FEATURE_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["ReducerManager"], _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreRootModule"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["ɵngrx_modules_effects_effects_g"], function () {
        return [[_core_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_12__["AuthEffects"]]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["USER_PROVIDED_EFFECTS"], function () {
        return [[]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["ɵngrx_modules_effects_effects_h"], function (p0_0, p0_1, p0_2) {
        return [_ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["ɵngrx_modules_effects_effects_b"](p0_0, p0_1, p0_2)];
      }, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["ɵngrx_modules_effects_effects_g"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["USER_PROVIDED_EFFECTS"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsFeatureModule"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["ɵngrx_modules_effects_effects_h"], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreRootModule"]], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreFeatureModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"], _auth_module__WEBPACK_IMPORTED_MODULE_1__["AuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], function () {
        return [[{
          path: "",
          component: _auth_component__WEBPACK_IMPORTED_MODULE_28__["AuthComponent"],
          children: [{
            path: "",
            redirectTo: "login",
            pathMatch: "full"
          }, {
            path: "login",
            component: _login_login_component__WEBPACK_IMPORTED_MODULE_29__["LoginComponent"],
            data: _auth_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"]
          }, {
            path: "register",
            component: _register_register_component__WEBPACK_IMPORTED_MODULE_30__["RegisterComponent"]
          }, {
            path: "forgot-password",
            component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_31__["ForgotPasswordComponent"]
          }]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["USE_STORE"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["USE_DEFAULT_LANG"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["USE_EXTEND"], undefined, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["DEFAULT_LANGUAGE"], undefined, [])]);
    });
    /***/

  }
}]);
//# sourceMappingURL=views-pages-auth-auth-module-ngfactory-es5.js.map
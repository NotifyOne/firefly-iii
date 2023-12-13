/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/Checkbox.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/Checkbox.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Checkbox",
  props: {
    name: {
      type: String
    },
    title: {
      type: String
    },
    value: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      active: true
    };
  },
  mounted: function mounted() {
    this.active = this.value;
  },
  methods: {
    handleInput: function handleInput() {
      console.log(this.active);
      this.$emit('input', this.active);
    }
  },
  watch: {
    value: function value(val) {
      this.active = val;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/Title.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/Title.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    error: {
      type: Array,
      required: true,
      "default": function _default() {
        return [];
      }
    },
    value: {
      type: String,
      required: true
    }
  },
  name: "Title",
  mounted: function mounted() {
    this.title = this.value;
  },
  watch: {
    value: function value() {
      this.title = this.value;
    }
  },
  components: {},
  data: function data() {
    return {
      title: ''
    };
  },
  methods: {
    hasError: function hasError() {
      return this.error.length > 0;
    },
    clearTitle: function clearTitle() {
      this.title = '';
    },
    handleInput: function handleInput() {
      this.$emit('input', this.title);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/URL.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/URL.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    error: {
      type: Array,
      required: true,
      "default": function _default() {
        return [];
      }
    },
    value: {
      type: String,
      required: true
    }
  },
  name: "URL",
  watch: {
    value: function value() {
      this.url = this.value;
    }
  },
  mounted: function mounted() {
    this.url = this.value;
  },
  components: {},
  data: function data() {
    return {
      url: null
    };
  },
  methods: {
    hasError: function hasError() {
      var _this$error;
      return ((_this$error = this.error) === null || _this$error === void 0 ? void 0 : _this$error.length) > 0;
    },
    clearUrl: function clearUrl() {
      this.url = '';
    },
    handleInput: function handleInput() {
      this.$emit('input', this.url);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookDelivery.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookDelivery.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "WebhookDelivery",
  data: function data() {
    return {
      delivery: 0,
      deliveries: []
    };
  },
  props: {
    error: {
      type: Array,
      required: true,
      "default": function _default() {
        return [];
      }
    },
    value: {
      type: Number,
      required: true
    }
  },
  mounted: function mounted() {
    this.delivery = this.value;
    this.deliveries = [{
      id: 300,
      name: this.$t('firefly.webhook_delivery_JSON')
    }];
  },
  watch: {
    value: function value() {
      this.delivery = this.value;
    },
    delivery: function delivery(newValue) {
      this.$emit('input', newValue);
    }
  },
  methods: {
    hasError: function hasError() {
      var _this$error;
      return ((_this$error = this.error) === null || _this$error === void 0 ? void 0 : _this$error.length) > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookResponse.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookResponse.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "WebhookResponse",
  data: function data() {
    return {
      response: 0,
      responses: []
    };
  },
  props: {
    error: {
      type: Array,
      required: true,
      "default": function _default() {
        return [];
      }
    },
    value: {
      type: Number,
      required: true
    }
  },
  watch: {
    value: function value() {
      this.response = this.value;
    },
    response: function response(newValue) {
      this.$emit('input', newValue);
    }
  },
  mounted: function mounted() {
    this.response = this.value;
    this.responses = [{
      id: 200,
      name: this.$t('firefly.webhook_response_TRANSACTIONS')
    }, {
      id: 210,
      name: this.$t('firefly.webhook_response_ACCOUNTS')
    }, {
      id: 220,
      name: this.$t('firefly.webhook_response_none_NONE')
    }];
  },
  methods: {
    hasError: function hasError() {
      var _this$error;
      return ((_this$error = this.error) === null || _this$error === void 0 ? void 0 : _this$error.length) > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookTrigger.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookTrigger.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "WebhookTrigger",
  data: function data() {
    return {
      trigger: 0,
      triggers: []
    };
  },
  props: {
    error: {
      type: Array,
      required: true,
      "default": function _default() {
        return [];
      }
    },
    value: {
      type: Number,
      required: true
    }
  },
  mounted: function mounted() {
    this.trigger = this.value;
    this.triggers = [{
      id: 100,
      name: this.$t('firefly.webhook_trigger_STORE_TRANSACTION')
    }, {
      id: 110,
      name: this.$t('firefly.webhook_trigger_UPDATE_TRANSACTION')
    }, {
      id: 120,
      name: this.$t('firefly.webhook_trigger_DESTROY_TRANSACTION')
    }];
  },
  watch: {
    value: function value() {
      this.trigger = this.value;
    },
    trigger: function trigger(newValue) {
      this.$emit('input', newValue);
    }
  },
  methods: {
    hasError: function hasError() {
      var _this$error;
      return ((_this$error = this.error) === null || _this$error === void 0 ? void 0 : _this$error.length) > 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/webhooks/Create.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/webhooks/Create.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form_Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form/Title */ "./resources/assets/js/components/form/Title.vue");
/* harmony import */ var _form_WebhookTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form/WebhookTrigger */ "./resources/assets/js/components/form/WebhookTrigger.vue");
/* harmony import */ var _form_WebhookResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form/WebhookResponse */ "./resources/assets/js/components/form/WebhookResponse.vue");
/* harmony import */ var _form_WebhookDelivery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form/WebhookDelivery */ "./resources/assets/js/components/form/WebhookDelivery.vue");
/* harmony import */ var _form_URL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form/URL */ "./resources/assets/js/components/form/URL.vue");
/* harmony import */ var _form_Checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/Checkbox */ "./resources/assets/js/components/form/Checkbox.vue");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Create",
  components: {
    URL: _form_URL__WEBPACK_IMPORTED_MODULE_4__["default"],
    Title: _form_Title__WEBPACK_IMPORTED_MODULE_0__["default"],
    WebhookTrigger: _form_WebhookTrigger__WEBPACK_IMPORTED_MODULE_1__["default"],
    WebhookResponse: _form_WebhookResponse__WEBPACK_IMPORTED_MODULE_2__["default"],
    WebhookDelivery: _form_WebhookDelivery__WEBPACK_IMPORTED_MODULE_3__["default"],
    Checkbox: _form_Checkbox__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      error_message: '',
      success_message: '',
      title: '',
      trigger: 100,
      response: 200,
      delivery: 300,
      active: true,
      url: '',
      errors: {
        title: [],
        trigger: [],
        response: [],
        delivery: [],
        url: [],
        active: []
      }
    };
  },
  methods: {
    submit: function submit(e) {
      var _this = this;
      // reset messages
      this.error_message = '';
      this.success_message = '';
      this.errors = {
        title: [],
        trigger: [],
        response: [],
        delivery: [],
        url: [],
        active: []
      };

      // disable button
      $('#submitButton').prop("disabled", true);

      // collect data
      var data = {
        title: this.title,
        trigger: this.trigger,
        response: this.response,
        delivery: this.delivery,
        url: this.url,
        active: this.active
      };

      // post!
      axios.post('./api/v1/webhooks', data).then(function (response) {
        //this.success_message = $.text(response.data.message);
        // console.log('Will now go to redirectUser()');
        var webhookId = response.data.data.id;
        window.location.href = window.previousUrl + '?webhook_id=' + webhookId + '&message=created';
      })["catch"](function (error) {
        //console.log(error.response.data);
        _this.error_message = error.response.data.message;
        _this.errors.title = error.response.data.errors.title;
        _this.errors.trigger = error.response.data.errors.trigger;
        _this.errors.response = error.response.data.errors.response;
        _this.errors.delivery = error.response.data.errors.delivery;
        _this.errors.url = error.response.data.errors.url;

        // enable button again
        $('#submitButton').prop("disabled", false);
      });
      if (e) {
        e.preventDefault();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/Checkbox.vue?vue&type=template&id=61f7d147":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/Checkbox.vue?vue&type=template&id=61f7d147 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group"
  }, [_c("label", {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-8"
  }, [_c("div", {
    staticClass: "checkbox"
  }, [_c("label", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.active,
      expression: "active"
    }],
    attrs: {
      name: _vm.name,
      type: "checkbox",
      value: "1"
    },
    domProps: {
      checked: Array.isArray(_vm.active) ? _vm._i(_vm.active, "1") > -1 : _vm.active
    },
    on: {
      change: [function ($event) {
        var $$a = _vm.active,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "1",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.active = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.active = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.active = $$c;
        }
      }, _vm.handleInput]
    }
  })])]), _vm._v(" "), _c("p", {
    staticClass: "help-block",
    domProps: {
      textContent: _vm._s(_vm.$t("firefly.webhook_active_form_help"))
    }
  })])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/Title.vue?vue&type=template&id=24318404":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/Title.vue?vue&type=template&id=24318404 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("label", {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("form.title")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-8"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.title,
      expression: "title"
    }],
    ref: "title",
    staticClass: "form-control",
    attrs: {
      title: _vm.$t("form.title"),
      autocomplete: "off",
      name: "title",
      type: "text",
      placeholder: _vm.$t("form.title")
    },
    domProps: {
      value: _vm.title
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.title = $event.target.value;
      }, _vm.handleInput]
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      tabIndex: "-1",
      type: "button"
    },
    on: {
      click: _vm.clearTitle
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])]), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/URL.vue?vue&type=template&id=c6e116ca":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/URL.vue?vue&type=template&id=c6e116ca ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("label", {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("form.url")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-8"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.url,
      expression: "url"
    }],
    ref: "title",
    staticClass: "form-control",
    attrs: {
      title: _vm.$t("form.url"),
      autocomplete: "off",
      name: "url",
      type: "text",
      placeholder: "https://"
    },
    domProps: {
      value: _vm.url
    },
    on: {
      input: [function ($event) {
        if ($event.target.composing) return;
        _vm.url = $event.target.value;
      }, _vm.handleInput],
      submit: function submit($event) {
        $event.preventDefault();
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-default",
    attrs: {
      tabIndex: "-1",
      type: "button"
    },
    on: {
      click: _vm.clearUrl
    }
  }, [_c("i", {
    staticClass: "fa fa-trash-o"
  })])])]), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookDelivery.vue?vue&type=template&id=4b63d6b7":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookDelivery.vue?vue&type=template&id=4b63d6b7 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("label", {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("form.webhook_delivery")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-8"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.delivery,
      expression: "delivery"
    }],
    ref: "bill",
    staticClass: "form-control",
    attrs: {
      title: _vm.$t("form.webhook_delivery"),
      name: "webhook_delivery"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.delivery = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(this.deliveries, function (delivery) {
    return _c("option", {
      attrs: {
        label: delivery.name
      },
      domProps: {
        value: delivery.id
      }
    }, [_vm._v(_vm._s(delivery.name) + "\n      ")]);
  }), 0), _vm._v(" "), _c("p", {
    staticClass: "help-block",
    domProps: {
      textContent: _vm._s(_vm.$t("firefly.webhook_delivery_form_help"))
    }
  }), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookResponse.vue?vue&type=template&id=7886e084":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookResponse.vue?vue&type=template&id=7886e084 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("label", {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("form.webhook_response")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-8"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.response,
      expression: "response"
    }],
    ref: "bill",
    staticClass: "form-control",
    attrs: {
      title: _vm.$t("form.webhook_response"),
      name: "webhook_response"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.response = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(this.responses, function (response) {
    return _c("option", {
      attrs: {
        label: response.name
      },
      domProps: {
        value: response.id
      }
    }, [_vm._v(_vm._s(response.name) + "\n      ")]);
  }), 0), _vm._v(" "), _c("p", {
    staticClass: "help-block",
    domProps: {
      textContent: _vm._s(_vm.$t("firefly.webhook_response_form_help"))
    }
  }), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookTrigger.vue?vue&type=template&id=5456d8c5":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookTrigger.vue?vue&type=template&id=5456d8c5 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "form-group",
    "class": {
      "has-error": _vm.hasError()
    }
  }, [_c("label", {
    staticClass: "col-sm-4 control-label"
  }, [_vm._v("\n    " + _vm._s(_vm.$t("form.webhook_trigger")) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-8"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.trigger,
      expression: "trigger"
    }],
    ref: "bill",
    staticClass: "form-control",
    attrs: {
      title: _vm.$t("form.webhook_trigger"),
      name: "webhook_trigger"
    },
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.trigger = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(this.triggers, function (trigger) {
    return _c("option", {
      attrs: {
        label: trigger.name
      },
      domProps: {
        value: trigger.id
      }
    }, [_vm._v(_vm._s(trigger.name) + "\n      ")]);
  }), 0), _vm._v(" "), _c("p", {
    staticClass: "help-block",
    domProps: {
      textContent: _vm._s(_vm.$t("firefly.webhook_trigger_form_help"))
    }
  }), _vm._v(" "), _vm._l(this.error, function (error) {
    return _c("ul", {
      staticClass: "list-unstyled"
    }, [_c("li", {
      staticClass: "text-danger"
    }, [_vm._v(_vm._s(error))])]);
  })], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/webhooks/Create.vue?vue&type=template&id=4ce9f968":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/webhooks/Create.vue?vue&type=template&id=4ce9f968 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("form", {
    staticClass: "form-horizontal",
    attrs: {
      "accept-charset": "UTF-8",
      enctype: "multipart/form-data"
    }
  }, [_c("input", {
    attrs: {
      name: "_token",
      type: "hidden",
      value: "xxx"
    }
  }), _vm._v(" "), _vm.error_message !== "" ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "alert alert-danger alert-dismissible",
    attrs: {
      role: "alert"
    }
  }, [_c("button", {
    staticClass: "close",
    attrs: {
      "data-dismiss": "alert",
      type: "button",
      "aria-label": _vm.$t("firefly.close")
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.$t("firefly.flash_error")))]), _vm._v(" " + _vm._s(_vm.error_message) + "\n      ")])])]) : _vm._e(), _vm._v(" "), _vm.success_message !== "" ? _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "alert alert-success alert-dismissible",
    attrs: {
      role: "alert"
    }
  }, [_c("button", {
    staticClass: "close",
    attrs: {
      "data-dismiss": "alert",
      type: "button",
      "aria-label": _vm.$t("firefly.close")
    }
  }, [_c("span", {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _vm._v(" "), _c("strong", [_vm._v(_vm._s(_vm.$t("firefly.flash_success")))]), _vm._v(" "), _c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.success_message)
    }
  })])])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-6 col-md-12 col-sm-12"
  }, [_c("div", {
    staticClass: "box box-primary"
  }, [_c("div", {
    staticClass: "box-header with-border"
  }, [_c("h3", {
    staticClass: "box-title"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("firefly.create_new_webhook")) + "\n          ")])]), _vm._v(" "), _c("div", {
    staticClass: "box-body"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("Title", {
    attrs: {
      value: this.title,
      error: _vm.errors.title
    },
    on: {
      input: function input($event) {
        _vm.title = $event;
      }
    }
  }), _vm._v(" "), _c("WebhookTrigger", {
    attrs: {
      value: this.trigger,
      error: _vm.errors.trigger
    },
    on: {
      input: function input($event) {
        _vm.trigger = $event;
      }
    }
  }), _vm._v(" "), _c("WebhookResponse", {
    attrs: {
      value: this.response,
      error: _vm.errors.response
    },
    on: {
      input: function input($event) {
        _vm.response = $event;
      }
    }
  }), _vm._v(" "), _c("WebhookDelivery", {
    attrs: {
      value: this.delivery,
      error: _vm.errors.delivery
    },
    on: {
      input: function input($event) {
        _vm.delivery = $event;
      }
    }
  }), _vm._v(" "), _c("URL", {
    attrs: {
      value: this.url,
      error: _vm.errors.url
    },
    on: {
      input: function input($event) {
        _vm.url = $event;
      }
    }
  }), _vm._v(" "), _c("Checkbox", {
    attrs: {
      value: this.active,
      error: _vm.errors.active,
      help: "ACTIVE HELP TODO",
      title: _vm.$t("form.active")
    },
    on: {
      input: function input($event) {
        _vm.active = $event;
      }
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "box-footer"
  }, [_c("div", {
    staticClass: "btn-group"
  }, [_c("button", {
    ref: "submitButton",
    staticClass: "btn btn-success",
    attrs: {
      id: "submitButton"
    },
    on: {
      click: _vm.submit
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("firefly.submit")) + "\n            ")])]), _vm._v(" "), _c("p", {
    staticClass: "text-success",
    domProps: {
      innerHTML: _vm._s(_vm.success_message)
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "text-danger",
    domProps: {
      innerHTML: _vm._s(_vm.error_message)
    }
  })])])])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/*!******************************************!*\
  !*** ./resources/assets/js/bootstrap.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*
 * bootstrap.js
 * Copyright (c) 2019 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/*
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/***/ }),

/***/ "./resources/assets/js/i18n.js":
/*!*************************************!*\
  !*** ./resources/assets/js/i18n.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 * i18n.js
 * Copyright (c) 2020 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// Create VueI18n instance with options
module.exports = new vuei18n({
  locale: document.documentElement.lang,
  // set locale
  fallbackLocale: 'en',
  messages: {
    'bg': __webpack_require__(/*! ./locales/bg.json */ "./resources/assets/js/locales/bg.json"),
    'ca-es': __webpack_require__(/*! ./locales/ca.json */ "./resources/assets/js/locales/ca.json"),
    'cs': __webpack_require__(/*! ./locales/cs.json */ "./resources/assets/js/locales/cs.json"),
    'da': __webpack_require__(/*! ./locales/da.json */ "./resources/assets/js/locales/da.json"),
    'de': __webpack_require__(/*! ./locales/de.json */ "./resources/assets/js/locales/de.json"),
    'el': __webpack_require__(/*! ./locales/el.json */ "./resources/assets/js/locales/el.json"),
    'en': __webpack_require__(/*! ./locales/en.json */ "./resources/assets/js/locales/en.json"),
    'en-us': __webpack_require__(/*! ./locales/en.json */ "./resources/assets/js/locales/en.json"),
    'en-gb': __webpack_require__(/*! ./locales/en-gb.json */ "./resources/assets/js/locales/en-gb.json"),
    'es': __webpack_require__(/*! ./locales/es.json */ "./resources/assets/js/locales/es.json"),
    'fi': __webpack_require__(/*! ./locales/fi.json */ "./resources/assets/js/locales/fi.json"),
    'fr': __webpack_require__(/*! ./locales/fr.json */ "./resources/assets/js/locales/fr.json"),
    'hu': __webpack_require__(/*! ./locales/hu.json */ "./resources/assets/js/locales/hu.json"),
    'id': __webpack_require__(/*! ./locales/id.json */ "./resources/assets/js/locales/id.json"),
    'it': __webpack_require__(/*! ./locales/it.json */ "./resources/assets/js/locales/it.json"),
    'ja': __webpack_require__(/*! ./locales/ja.json */ "./resources/assets/js/locales/ja.json"),
    'ko': __webpack_require__(/*! ./locales/ko.json */ "./resources/assets/js/locales/ko.json"),
    'nb': __webpack_require__(/*! ./locales/nb.json */ "./resources/assets/js/locales/nb.json"),
    'nl': __webpack_require__(/*! ./locales/nl.json */ "./resources/assets/js/locales/nl.json"),
    'nn': __webpack_require__(/*! ./locales/nn.json */ "./resources/assets/js/locales/nn.json"),
    'pl': __webpack_require__(/*! ./locales/pl.json */ "./resources/assets/js/locales/pl.json"),
    'pt-br': __webpack_require__(/*! ./locales/pt-br.json */ "./resources/assets/js/locales/pt-br.json"),
    'pt-pt': __webpack_require__(/*! ./locales/pt.json */ "./resources/assets/js/locales/pt.json"),
    'pt': __webpack_require__(/*! ./locales/pt.json */ "./resources/assets/js/locales/pt.json"),
    'ro': __webpack_require__(/*! ./locales/ro.json */ "./resources/assets/js/locales/ro.json"),
    'ru': __webpack_require__(/*! ./locales/ru.json */ "./resources/assets/js/locales/ru.json"),
    'sk': __webpack_require__(/*! ./locales/sk.json */ "./resources/assets/js/locales/sk.json"),
    'sl': __webpack_require__(/*! ./locales/sl.json */ "./resources/assets/js/locales/sl.json"),
    'sr': __webpack_require__(/*! ./locales/sl.json */ "./resources/assets/js/locales/sl.json"),
    'sv': __webpack_require__(/*! ./locales/sv.json */ "./resources/assets/js/locales/sv.json"),
    'tr': __webpack_require__(/*! ./locales/tr.json */ "./resources/assets/js/locales/tr.json"),
    'uk': __webpack_require__(/*! ./locales/uk.json */ "./resources/assets/js/locales/uk.json"),
    'vi': __webpack_require__(/*! ./locales/vi.json */ "./resources/assets/js/locales/vi.json"),
    'zh': __webpack_require__(/*! ./locales/zh-cn.json */ "./resources/assets/js/locales/zh-cn.json"),
    'zh-tw': __webpack_require__(/*! ./locales/zh-tw.json */ "./resources/assets/js/locales/zh-tw.json"),
    'zh-cn': __webpack_require__(/*! ./locales/zh-cn.json */ "./resources/assets/js/locales/zh-cn.json")
  }
});

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = __webpack_require__.g.TYPED_ARRAY_SUPPORT !== undefined
  ? __webpack_require__.g.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./resources/assets/js/components/form/Checkbox.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/components/form/Checkbox.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Checkbox_vue_vue_type_template_id_61f7d147__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=template&id=61f7d147 */ "./resources/assets/js/components/form/Checkbox.vue?vue&type=template&id=61f7d147");
/* harmony import */ var _Checkbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkbox.vue?vue&type=script&lang=js */ "./resources/assets/js/components/form/Checkbox.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Checkbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Checkbox_vue_vue_type_template_id_61f7d147__WEBPACK_IMPORTED_MODULE_0__.render,
  _Checkbox_vue_vue_type_template_id_61f7d147__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/form/Checkbox.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/form/Title.vue":
/*!*******************************************************!*\
  !*** ./resources/assets/js/components/form/Title.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Title_vue_vue_type_template_id_24318404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title.vue?vue&type=template&id=24318404 */ "./resources/assets/js/components/form/Title.vue?vue&type=template&id=24318404");
/* harmony import */ var _Title_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title.vue?vue&type=script&lang=js */ "./resources/assets/js/components/form/Title.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Title_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Title_vue_vue_type_template_id_24318404__WEBPACK_IMPORTED_MODULE_0__.render,
  _Title_vue_vue_type_template_id_24318404__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/form/Title.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/form/URL.vue":
/*!*****************************************************!*\
  !*** ./resources/assets/js/components/form/URL.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _URL_vue_vue_type_template_id_c6e116ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./URL.vue?vue&type=template&id=c6e116ca */ "./resources/assets/js/components/form/URL.vue?vue&type=template&id=c6e116ca");
/* harmony import */ var _URL_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./URL.vue?vue&type=script&lang=js */ "./resources/assets/js/components/form/URL.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _URL_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _URL_vue_vue_type_template_id_c6e116ca__WEBPACK_IMPORTED_MODULE_0__.render,
  _URL_vue_vue_type_template_id_c6e116ca__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/form/URL.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/form/WebhookDelivery.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/form/WebhookDelivery.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WebhookDelivery_vue_vue_type_template_id_4b63d6b7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebhookDelivery.vue?vue&type=template&id=4b63d6b7 */ "./resources/assets/js/components/form/WebhookDelivery.vue?vue&type=template&id=4b63d6b7");
/* harmony import */ var _WebhookDelivery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebhookDelivery.vue?vue&type=script&lang=js */ "./resources/assets/js/components/form/WebhookDelivery.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WebhookDelivery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebhookDelivery_vue_vue_type_template_id_4b63d6b7__WEBPACK_IMPORTED_MODULE_0__.render,
  _WebhookDelivery_vue_vue_type_template_id_4b63d6b7__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/form/WebhookDelivery.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/form/WebhookResponse.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/components/form/WebhookResponse.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WebhookResponse_vue_vue_type_template_id_7886e084__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebhookResponse.vue?vue&type=template&id=7886e084 */ "./resources/assets/js/components/form/WebhookResponse.vue?vue&type=template&id=7886e084");
/* harmony import */ var _WebhookResponse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebhookResponse.vue?vue&type=script&lang=js */ "./resources/assets/js/components/form/WebhookResponse.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WebhookResponse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebhookResponse_vue_vue_type_template_id_7886e084__WEBPACK_IMPORTED_MODULE_0__.render,
  _WebhookResponse_vue_vue_type_template_id_7886e084__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/form/WebhookResponse.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/form/WebhookTrigger.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/components/form/WebhookTrigger.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WebhookTrigger_vue_vue_type_template_id_5456d8c5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebhookTrigger.vue?vue&type=template&id=5456d8c5 */ "./resources/assets/js/components/form/WebhookTrigger.vue?vue&type=template&id=5456d8c5");
/* harmony import */ var _WebhookTrigger_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebhookTrigger.vue?vue&type=script&lang=js */ "./resources/assets/js/components/form/WebhookTrigger.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WebhookTrigger_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _WebhookTrigger_vue_vue_type_template_id_5456d8c5__WEBPACK_IMPORTED_MODULE_0__.render,
  _WebhookTrigger_vue_vue_type_template_id_5456d8c5__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/form/WebhookTrigger.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/webhooks/Create.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/components/webhooks/Create.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Create_vue_vue_type_template_id_4ce9f968__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=4ce9f968 */ "./resources/assets/js/components/webhooks/Create.vue?vue&type=template&id=4ce9f968");
/* harmony import */ var _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js */ "./resources/assets/js/components/webhooks/Create.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_4ce9f968__WEBPACK_IMPORTED_MODULE_0__.render,
  _Create_vue_vue_type_template_id_4ce9f968__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/webhooks/Create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/form/Checkbox.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/components/form/Checkbox.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkbox.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/Checkbox.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/form/Title.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/form/Title.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Title.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/Title.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/form/URL.vue?vue&type=script&lang=js":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/components/form/URL.vue?vue&type=script&lang=js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_URL_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./URL.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/URL.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_URL_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/form/WebhookDelivery.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/form/WebhookDelivery.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookDelivery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebhookDelivery.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookDelivery.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookDelivery_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/form/WebhookResponse.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/components/form/WebhookResponse.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookResponse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebhookResponse.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookResponse.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookResponse_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/form/WebhookTrigger.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/form/WebhookTrigger.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookTrigger_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebhookTrigger.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookTrigger.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookTrigger_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/webhooks/Create.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/assets/js/components/webhooks/Create.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/webhooks/Create.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/form/Checkbox.vue?vue&type=template&id=61f7d147":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/components/form/Checkbox.vue?vue&type=template&id=61f7d147 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_61f7d147__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_61f7d147__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkbox_vue_vue_type_template_id_61f7d147__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkbox.vue?vue&type=template&id=61f7d147 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/Checkbox.vue?vue&type=template&id=61f7d147");


/***/ }),

/***/ "./resources/assets/js/components/form/Title.vue?vue&type=template&id=24318404":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/form/Title.vue?vue&type=template&id=24318404 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_template_id_24318404__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_template_id_24318404__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Title_vue_vue_type_template_id_24318404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Title.vue?vue&type=template&id=24318404 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/Title.vue?vue&type=template&id=24318404");


/***/ }),

/***/ "./resources/assets/js/components/form/URL.vue?vue&type=template&id=c6e116ca":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/components/form/URL.vue?vue&type=template&id=c6e116ca ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_URL_vue_vue_type_template_id_c6e116ca__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_URL_vue_vue_type_template_id_c6e116ca__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_URL_vue_vue_type_template_id_c6e116ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./URL.vue?vue&type=template&id=c6e116ca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/URL.vue?vue&type=template&id=c6e116ca");


/***/ }),

/***/ "./resources/assets/js/components/form/WebhookDelivery.vue?vue&type=template&id=4b63d6b7":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/form/WebhookDelivery.vue?vue&type=template&id=4b63d6b7 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookDelivery_vue_vue_type_template_id_4b63d6b7__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookDelivery_vue_vue_type_template_id_4b63d6b7__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookDelivery_vue_vue_type_template_id_4b63d6b7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebhookDelivery.vue?vue&type=template&id=4b63d6b7 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookDelivery.vue?vue&type=template&id=4b63d6b7");


/***/ }),

/***/ "./resources/assets/js/components/form/WebhookResponse.vue?vue&type=template&id=7886e084":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/components/form/WebhookResponse.vue?vue&type=template&id=7886e084 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookResponse_vue_vue_type_template_id_7886e084__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookResponse_vue_vue_type_template_id_7886e084__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookResponse_vue_vue_type_template_id_7886e084__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebhookResponse.vue?vue&type=template&id=7886e084 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookResponse.vue?vue&type=template&id=7886e084");


/***/ }),

/***/ "./resources/assets/js/components/form/WebhookTrigger.vue?vue&type=template&id=5456d8c5":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/components/form/WebhookTrigger.vue?vue&type=template&id=5456d8c5 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookTrigger_vue_vue_type_template_id_5456d8c5__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookTrigger_vue_vue_type_template_id_5456d8c5__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WebhookTrigger_vue_vue_type_template_id_5456d8c5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WebhookTrigger.vue?vue&type=template&id=5456d8c5 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/form/WebhookTrigger.vue?vue&type=template&id=5456d8c5");


/***/ }),

/***/ "./resources/assets/js/components/webhooks/Create.vue?vue&type=template&id=4ce9f968":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/components/webhooks/Create.vue?vue&type=template&id=4ce9f968 ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_4ce9f968__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_4ce9f968__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_4ce9f968__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Create.vue?vue&type=template&id=4ce9f968 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/assets/js/components/webhooks/Create.vue?vue&type=template&id=4ce9f968");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/axios/dist/browser/axios.cjs":
/*!***************************************************!*\
  !*** ./node_modules/axios/dist/browser/axios.cjs ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
// Axios v1.6.0 Copyright (c) 2023 Matt Zabriskie and contributors


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// utils is a library of generic helper functions non-specific to axios

const {toString} = Object.prototype;
const {getPrototypeOf} = Object;

const kindOf = (cache => thing => {
    const str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
};

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
};

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : __webpack_require__.g)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
};

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
};

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
};

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];

  const iterator = generator.call(obj);

  let result;

  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
};

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
};

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
};

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  };

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
};

const noop = () => {};

const toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

const DIGIT = '0123456789';

const ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};

const generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = '';
  const {length} = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length|0];
  }

  return str;
};

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === 'FormData' && thing[Symbol.iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  };

  return visit(obj, 0);
};

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

var utils = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

const prototype$1 = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype$1, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype$1);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

// eslint-disable-next-line strict
var httpAdapter = null;

/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode$1(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && toFormData(params, this, options);
}

const prototype = AxiosURLSearchParams.prototype;

prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode$1);
  } : encode$1;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?object} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || encode;

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

var InterceptorManager$1 = InterceptorManager;

var transitionalDefaults = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

var URLSearchParams$1 = typeof URLSearchParams !== 'undefined' ? URLSearchParams : AxiosURLSearchParams;

var FormData$1 = typeof FormData !== 'undefined' ? FormData : null;

var Blob$1 = typeof Blob !== 'undefined' ? Blob : null;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const isStandardBrowserEnv = (() => {
  let product;
  if (typeof navigator !== 'undefined' && (
    (product = navigator.product) === 'ReactNative' ||
    product === 'NativeScript' ||
    product === 'NS')
  ) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
})();

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
 const isStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();


var platform = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams$1,
    FormData: FormData$1,
    Blob: Blob$1
  },
  isStandardBrowserEnv,
  isStandardBrowserWebWorkerEnv,
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
};

function toURLEncodedForm(data, options) {
  return toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: transitionalDefaults,

  adapter: ['xhr', 'http'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

var defaults$1 = defaults;

// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils.freezeMethods(AxiosHeaders);

var AxiosHeaders$1 = AxiosHeaders;

/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || defaults$1;
  const context = response || config;
  const headers = AxiosHeaders$1.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

var cookies = platform.isStandardBrowserEnv ?

// Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        const cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

// Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })();

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

var isURLSameOrigin = platform.isStandardBrowserEnv ?

// Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    const msie = /(msie|trident)/i.test(navigator.userAgent);
    const urlParsingNode = document.createElement('a');
    let originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      let href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
          urlParsingNode.pathname :
          '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      const parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
          parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })();

function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer(50, 250);

  return e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e
    };

    data[isDownloadStream ? 'download' : 'upload'] = true;

    listener(data);
  };
}

const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

var xhrAdapter = isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders$1.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    let contentType;

    if (utils.isFormData(requestData)) {
      if (platform.isStandardBrowserEnv || platform.isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false); // Let the browser set it
      } else if(!requestHeaders.getContentType(/^\s*multipart\/form-data/)){
        requestHeaders.setContentType('multipart/form-data'); // mobile/desktop app frameworks
      } else if(utils.isString(contentType = requestHeaders.getContentType())){
        // fix semicolon duplication issue for ReactNative FormData implementation
        requestHeaders.setContentType(contentType.replace(/^\s*(multipart\/form-data);+/, '$1'));
      }
    }

    let request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      const username = config.auth.username || '';
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    }

    const fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = AxiosHeaders$1.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (platform.isStandardBrowserEnv) {
      // Add xsrf header
      // regarding CVE-2023-45857 config.withCredentials condition was removed temporarily
      const xsrfValue = isURLSameOrigin(fullPath) && config.xsrfCookieName && cookies.read(config.xsrfCookieName);

      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', progressEventReducer(config.onDownloadProgress, true));
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', progressEventReducer(config.onUploadProgress));
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(fullPath);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
};

const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
};

utils.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils.isFunction(adapter) || adapter === null || adapter === false;

var adapters = {
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new AxiosError(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = AxiosHeaders$1.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || defaults$1.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = AxiosHeaders$1.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders$1.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

const headersToObject = (thing) => thing instanceof AxiosHeaders$1 ? thing.toJSON() : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };

  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

const VERSION = "1.6.0";

const validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions,
  validators: validators$1
};

const validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager$1(),
      response: new InterceptorManager$1()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: validators.function,
          serialize: validators.function
        }, true);
      }
    }

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = AxiosHeaders$1.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios$1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

var CancelToken$1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

var HttpStatusCode$1 = HttpStatusCode;

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new Axios$1(defaultConfig);
  const instance = bind(Axios$1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios$1.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(defaults$1);

// Expose Axios class to allow class inheritance
axios.Axios = Axios$1;

// Expose Cancel & CancelToken
axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken$1;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData;

// Expose AxiosError class
axios.AxiosError = AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = AxiosHeaders$1;

axios.formToJSON = thing => formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = HttpStatusCode$1;

axios.default = axios;

module.exports = axios;
//# sourceMappingURL=axios.cjs.map


/***/ }),

/***/ "./resources/assets/js/locales/bg.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/bg.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Какво се случва?","flash_error":"Грешка!","flash_warning":"Внимание!","flash_success":"Успех!","close":"Затвори","split_transaction_title":"Описание на разделена транзакция","errors_submission":"Имаше нещо нередно с вашите данни. Моля, проверете грешките.","split":"Раздели","single_split":"Раздел","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Транзакция #{ID}(\\"{title}\\")</a> беше записана.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Транзакция #{ID}</a> (\\"{title}\\") беше обновена.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Транзакция #{ID}</a> беше записана.","transaction_journal_information":"Информация за транзакция","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Изглежда все още нямате бюджети. Трябва да създадете някои на страницата <a href=\\"budgets\\"> Бюджети </a>. Бюджетите могат да ви помогнат да следите разходите си.","no_bill_pointer":"Изглежда все още нямате сметки. Трябва да създадете някои на страницата <a href=\\"bills\\"> Сметки </a>. Сметките могат да ви помогнат да следите разходите си.","source_account":"Разходна сметка","hidden_fields_preferences":"Можете да активирате повече опции за транзакции във вашите <a href=\\"preferences\\">настройки</a>.","destination_account":"Приходна сметка","add_another_split":"Добавяне на друг раздел","submission":"Изпращане","create_another":"След съхраняването се върнете тук, за да създадете нова.","reset_after":"Изчистване на формуляра след изпращане","submit":"Потвърди","amount":"Сума","date":"Дата","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Етикети","no_budget":"(без бюджет)","no_bill":"(няма сметка)","category":"Категория","attachments":"Прикачени файлове","notes":"Бележки","external_url":"Външен URL адрес","update_transaction":"Обнови транзакцията","after_update_create_another":"След обновяването се върнете тук, за да продължите с редакцията.","store_as_new":"Съхранете като нова транзакция, вместо да я актуализирате.","split_title_help":"Ако създадете разделена транзакция, трябва да има глобално описание за всички раздели на транзакцията.","none_in_select_list":"(нищо)","no_piggy_bank":"(без касичка)","description":"Описание","split_transaction_title_help":"Ако създадете разделена транзакция, трябва да има глобално описание за всички раздели на транзакцията.","destination_account_reconciliation":"Не може да редактирате приходната сметка на транзакция за съгласуване.","source_account_reconciliation":"Не може да редактирате разходната сметка на транзакция за съгласуване.","budget":"Бюджет","bill":"Сметка","you_create_withdrawal":"Създавате теглене.","you_create_transfer":"Създавате прехвърляне.","you_create_deposit":"Създавате депозит.","edit":"Промени","delete":"Изтрий","name":"Име","profile_whoops":"Опаааа!","profile_something_wrong":"Нещо се обърка!","profile_try_again":"Нещо се обърка. Моля, опитайте отново.","profile_oauth_clients":"OAuth клиенти","profile_oauth_no_clients":"Не сте създали клиенти на OAuth.","profile_oauth_clients_header":"Клиенти","profile_oauth_client_id":"ИД (ID) на клиент","profile_oauth_client_name":"Име","profile_oauth_client_secret":"Тайна","profile_oauth_create_new_client":"Създай нов клиент","profile_oauth_create_client":"Създай клиент","profile_oauth_edit_client":"Редактирай клиент","profile_oauth_name_help":"Нещо, което вашите потребители ще разпознаят и ще се доверят.","profile_oauth_redirect_url":"Линк на препратката","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"URL адрес за обратно извикване на оторизацията на вашето приложение.","profile_authorized_apps":"Удостоверени приложения","profile_authorized_clients":"Удостоверени клиенти","profile_scopes":"Сфери","profile_revoke":"Анулирай","profile_personal_access_tokens":"Персонални маркери за достъп","profile_personal_access_token":"Персонален маркер за достъп","profile_personal_access_token_explanation":"Това е новия ви персонален маркер за достъп. Това е единственият път, когато ще бъде показан, така че не го губете! Вече можете да използвате този маркер, за да отправяте заявки към API.","profile_no_personal_access_token":"Не сте създали никакви лични маркери за достъп.","profile_create_new_token":"Създай нов маркер","profile_create_token":"Създай маркер","profile_create":"Създай","profile_save_changes":"Запазване на промените","default_group_title_name":"(без група)","piggy_bank":"Касичка","profile_oauth_client_secret_title":"Тайна на клиента","profile_oauth_client_secret_expl":"Това е новата ви \\"тайна на клиента\\". Това е единственият път, когато ще бъде показана, така че не го губете! Вече можете да използвате този маркер, за да отправяте заявки към API.","profile_oauth_confidential":"Поверително","profile_oauth_confidential_help":"Изисквайте клиента да се удостоверява с тайна. Поверителните клиенти могат да притежават идентификационни данни по защитен начин, без да ги излагат на неоторизирани страни. Публичните приложения, като например десктопа или JavaScript SPA приложения, не могат да пазят тайни по сигурен начин.","multi_account_warning_unknown":"В зависимост от вида на транзакцията която създавате, източникът и / или целевата сметка на следващите разделяния може да бъде променена от това което е дефинирано в първото разделение на транзакцията.","multi_account_warning_withdrawal":"Имайте предвид, че разходна сметка на следващите разделяния ще бъде тази която е дефинирана в първия раздел на тегленето.","multi_account_warning_deposit":"Имайте предвид, че приходната сметка на следващите разделяния ще бъде тази която е дефинирана в първия раздел на депозита.","multi_account_warning_transfer":"Имайте предвид, че приходната + разходната сметка на следващите разделяния ще бъде тази която е дефинирана в първия раздел на прехвърлянето.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Действия","meta_data":"Мета данни","webhook_messages":"Webhook message","inactive":"Неактивно","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Активен","interest_date":"Падеж на лихва","title":"Заглавие","book_date":"Дата на осчетоводяване","process_date":"Дата на обработка","due_date":"Дата на падеж","foreign_amount":"Сума във валута","payment_date":"Дата на плащане","invoice_date":"Дата на фактура","internal_reference":"Вътрешна референция","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Активен ли е?","trigger":"Задействане","response":"Отговор","delivery":"Delivery","url":"URL адрес","secret":"Тайна"},"config":{"html_language":"bg","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/ca.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/ca.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Què està passant?","flash_error":"Error!","flash_warning":"Atenció!","flash_success":"Èxit!","close":"Tancar","split_transaction_title":"Descripció de la transacció dividida","errors_submission":"Ha hagut un error amb el teu enviament. Per favor, revisa els errors.","split":"Dividir","single_split":"Divisió","transaction_stored_link":"La <a href=\\"transactions/show/{ID}\\">Transacció #{ID} (\\"{title}\\")</a> s\'ha desat.","webhook_stored_link":"S\'ha desat <a href=\\"webhooks/show/{ID}\\">el Webook #{ID} (\\"{title}\\")</a> correctament.","webhook_updated_link":"S\'ha actualitzat el <a href=\\"webhooks/show/{ID}\\">Webook #{ID}</a> (\\"{title}\\").","transaction_updated_link":"La <a href=\\"transactions/show/{ID}\\">transacció#{ID}</a> (\\"{title}\\") s\'ha actualitzat.","transaction_new_stored_link":"La <a href=\\"transactions/show/{ID}\\">Transacció #{ID}</a> s\'ha desat.","transaction_journal_information":"Informació de la transacció","submission_options":"Opcions de tramesa","apply_rules_checkbox":"Aplicar regles","fire_webhooks_checkbox":"Disparar webhooks","no_budget_pointer":"Sembla que encara no tens cap pressupost. N\'hauries de crear alguns a la pàgina de <a href=\\"budgets\\">pressuposts</a>. Els pressupostos et poden ajudar a fer el seguiment de les teves despeses.","no_bill_pointer":"Sembla que encara no tens cap factura. N\'hauries de crear alguna a la pàgina de <a href=\\"bills\\">factures</a>. Les factures et poden ajudar a fer el seguiment de les teves despeses.","source_account":"Compte d\'origen","hidden_fields_preferences":"Pots habilitar més opcions de transacció a la <a href=\\"preferences\\">configuració</a>.","destination_account":"Compte de destí","add_another_split":"Afegeix una nova divisió","submission":"Enviament","create_another":"Després de guardar, torna ací per crear-ne un altre.","reset_after":"Reiniciar el formulari després d\'enviar","submit":"Enviar","amount":"Import","date":"Data","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Etiquetes","no_budget":"(cap pressupost)","no_bill":"(cap factura)","category":"Categoria","attachments":"Adjunts","notes":"Notes","external_url":"URL extern","update_transaction":"Actualitzar transacció","after_update_create_another":"Després d\'actualitzar, torna ací per a seguir editant.","store_as_new":"Desa com a una nova transacció, en comptes d\'actualitzar.","split_title_help":"Si crees una transacció dividida, ha d\'haver una descripció global per a totes les divisions de la transacció.","none_in_select_list":"(cap)","no_piggy_bank":"(sense guardiola)","description":"Descripció","split_transaction_title_help":"Si crees una transacció dividida, ha d\'haver una descripció global per a totes les divisions de la transacció.","destination_account_reconciliation":"No pots editar el compte de destí d\'una transacció de reconciliació.","source_account_reconciliation":"No pots editar el compte d\'origen d\'una transacció de consolidació.","budget":"Pressupost","bill":"Factura","you_create_withdrawal":"Estàs creant una retirada.","you_create_transfer":"Estàs creant una transferència.","you_create_deposit":"Estàs creant un ingrés.","edit":"Editar","delete":"Eliminar","name":"Nom","profile_whoops":"Vaja!","profile_something_wrong":"Alguna cosa ha sortit malament!","profile_try_again":"Alguna cosa ha anat malament. Si us plau, prova de nou.","profile_oauth_clients":"Clients OAuth","profile_oauth_no_clients":"No has creat cap client OAuth.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"ID de Client","profile_oauth_client_name":"Nom","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Crear client nou","profile_oauth_create_client":"Crear client","profile_oauth_edit_client":"Editar client","profile_oauth_name_help":"Alguna cosa que els teus usuaris reconeixeran i hi confiaran.","profile_oauth_redirect_url":"URL de redirecció","profile_oauth_clients_external_auth":"Si estàs fent servir un proveïdor extern d\'autentificació com Authelia, els Clients OAuth no funcionaran. Sols pots fer servir Tokens d\'Accés Personal.","profile_oauth_redirect_url_help":"L\'URL de crida de retorn de la teva aplicació.","profile_authorized_apps":"Aplicacions autoritzades","profile_authorized_clients":"Clients autoritzats","profile_scopes":"Àmbits","profile_revoke":"Revocar","profile_personal_access_tokens":"Testimoni d\'accés personal","profile_personal_access_token":"Testimoni d\'accés personal","profile_personal_access_token_explanation":"Aquest és el teu nou testimoni d\'accés personal. És l\'únic cop que es mostrarà, així que no el perdis! Ara ja pots utilitzar aquest testimoni per fer crides a l\'API.","profile_no_personal_access_token":"No has creat cap testimoni d\'accés personal.","profile_create_new_token":"Crear nou testimoni","profile_create_token":"Crear testimoni","profile_create":"Crear","profile_save_changes":"Desar els canvis","default_group_title_name":"(no agrupades)","piggy_bank":"Guardiola","profile_oauth_client_secret_title":"Secret del client","profile_oauth_client_secret_expl":"Aquest és el teu nou secret de client. És l\'únic cop que es mostrarà, així que no el perdis! Ara ja pots utilitzar aquest secret per fer crides a l\'API.","profile_oauth_confidential":"Confidencial","profile_oauth_confidential_help":"Requerir el client d\'autenticar-se amb un secret. Els clients confidencials poden mantenir credencials de forma segura sense exposar-les a parts no autoritzades. Les aplicacions públiques, com les d\'escriptori o SPA de JavaScript, no poden guardar secrets de forma segura.","multi_account_warning_unknown":"Depenent del tipus de transacció que creïs, el compte d\'origen i/o el de destí de divisions posteriors pot ser anul·lada pel que es defineix en la primera divisió de la transacció.","multi_account_warning_withdrawal":"Tingues en compte que el compte d\'origen de divisions posteriors serà anul·lat pel que es troba definit a la primera divisió de la retirada.","multi_account_warning_deposit":"Tingues en compte que el compte de destí de divisions posteriors serà anul·lat pel que es troba definit a la primera divisió del dipòsit.","multi_account_warning_transfer":"Tingues en compte que el compte d\'origen + destí de divisions posteriors serà anul·lat pel que es troba definit a la primera divisió de la transferència.","webhook_trigger_STORE_TRANSACTION":"Després de crear la transacció","webhook_trigger_UPDATE_TRANSACTION":"Després d\'actualitzar la transacció","webhook_trigger_DESTROY_TRANSACTION":"Després d\'eliminar la transacció","webhook_response_TRANSACTIONS":"Detalls de la transacció","webhook_response_ACCOUNTS":"Detalls del compte","webhook_response_none_NONE":"Sense detalls","webhook_delivery_JSON":"JSON","actions":"Accions","meta_data":"Meta dades","webhook_messages":"Missatge del webhook","inactive":"Inactiu","no_webhook_messages":"No hi ha missatges webhook","inspect":"Inspeccionar","create_new_webhook":"Crear nou webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicar quin esdeveniment activarà el webhook","webhook_response_form_help":"Indicar què ha d\'enviar el webhook a l\'URL.","webhook_delivery_form_help":"En quin format ha d\'entregar les dades el webhook.","webhook_active_form_help":"El wehook ha d\'estar actiu o no es cridarà.","edit_webhook_js":"Editar webhook \\"{title}\\"","webhook_was_triggered":"El webhook ha sigut cridat a la transacció indicada. Per favor, espera a que apareguen els resultats.","view_message":"Veure el missatge","view_attempts":"Veure intents fallits","message_content_title":"Contingut del missatge del webhook","message_content_help":"Aquest és el contingut del missatge que s\'ha enviat (o s\'ha intentat) utilitzant aquest webhook.","attempt_content_title":"Intents de webhook","attempt_content_help":"Aquests han estat tots els intents sense èxit d\'enviar el missatge del webhook a l\'URL configurat. Després de cert temps, Firefly III deixarà de provar-ho.","no_attempts":"No hi ha hagut intents sense èxit. Això és bon senyal!","webhook_attempt_at":"Intent de {moment}","logs":"Registres","response":"Resposta","visit_webhook_url":"Visitar l\'URL del webhook","reset_webhook_secret":"Reiniciar el secret del webhook"},"form":{"url":"URL","active":"Actiu","interest_date":"Data d\'interès","title":"Títol","book_date":"Data de registre","process_date":"Data de processament","due_date":"Data de venciment","foreign_amount":"Import estranger","payment_date":"Data de pagament","invoice_date":"Data de facturació","internal_reference":"Referència interna","webhook_response":"Resposta","webhook_trigger":"Activador","webhook_delivery":"Lliurament"},"list":{"active":"Està actiu?","trigger":"Activador","response":"Resposta","delivery":"Lliurament","url":"URL","secret":"Secret"},"config":{"html_language":"ca","date_time_fns":"D [de/d\'] MMMM yyyy [a les] HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/cs.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/cs.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Jak to jde?","flash_error":"Chyba!","flash_warning":"Varování!","flash_success":"Úspěšně dokončeno!","close":"Zavřít","split_transaction_title":"Popis rozúčtování","errors_submission":"There was something wrong with your submission. Please check out the errors.","split":"Rozdělit","single_split":"Rozdělit","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Informace o transakci","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Zdá se, že ještě nemáte žádné rozpočty. Měli byste některé vytvořit na <a href=\\"budgets\\">rozpočty</a>-. Rozpočty vám mohou pomoci sledovat výdaje.","no_bill_pointer":"Zdá se, že ještě nemáte žádné účty. Měli byste některé vytvořit na <a href=\\"bills\\">účtech</a>. Účty vám mohou pomoci sledovat výdaje.","source_account":"Zdrojový účet","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Cílový účet","add_another_split":"Přidat další rozúčtování","submission":"Submission","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Odeslat","amount":"Částka","date":"Datum","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Štítky","no_budget":"(žádný rozpočet)","no_bill":"(no bill)","category":"Kategorie","attachments":"Přílohy","notes":"Poznámky","external_url":"Externí URL adresa","update_transaction":"Aktualizovat transakci","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"Pokud vytvoříte rozúčtování, je třeba, aby zde byl celkový popis pro všechna rozúčtování dané transakce.","none_in_select_list":"(žádné)","no_piggy_bank":"(žádná pokladnička)","description":"Popis","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"Cílový účet odsouhlasené transakce nelze upravit.","source_account_reconciliation":"Nemůžete upravovat zdrojový účet srovnávací transakce.","budget":"Rozpočet","bill":"Účet","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Upravit","delete":"Odstranit","name":"Název","profile_whoops":"Omlouváme se, tohle nějak nefunguje","profile_something_wrong":"Something went wrong!","profile_try_again":"Something went wrong. Please try again.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"Zatím jste nevytvořili OAuth klienty.","profile_oauth_clients_header":"Klienti","profile_oauth_client_id":"ID zákazníka","profile_oauth_client_name":"Jméno","profile_oauth_client_secret":"Tajný klíč","profile_oauth_create_new_client":"Vytvořit nového klienta","profile_oauth_create_client":"Vytvořit klienta","profile_oauth_edit_client":"Upravit klienta","profile_oauth_name_help":"Something your users will recognize and trust.","profile_oauth_redirect_url":"Přesměrovat URL adresu","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Your application\'s authorization callback URL.","profile_authorized_apps":"Authorized applications","profile_authorized_clients":"Autorizovaní klienti","profile_scopes":"Scopes","profile_revoke":"Revoke","profile_personal_access_tokens":"Personal Access Tokens","profile_personal_access_token":"Personal Access Token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"You have not created any personal access tokens.","profile_create_new_token":"Vytvořit nový token","profile_create_token":"Vytvořit token","profile_create":"Vytvořit","profile_save_changes":"Uložit změny","default_group_title_name":"(neseskupeno)","piggy_bank":"Pokladnička","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Confidential","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Akce","meta_data":"Metadata","webhook_messages":"Webhook message","inactive":"Neaktivní","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooky","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Aktivní","interest_date":"Úrokové datum","title":"Název","book_date":"Datum rezervace","process_date":"Datum zpracování","due_date":"Datum splatnosti","foreign_amount":"Částka v cizí měně","payment_date":"Datum zaplacení","invoice_date":"Datum vystavení","internal_reference":"Interní reference","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Aktivní?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"cs","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/da.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/da.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Hvad spiller?","flash_error":"Fejl!","flash_warning":"Advarsel!","flash_success":"Succes!","close":"Luk","split_transaction_title":"Description of the split transaction","errors_submission":"There was something wrong with your submission. Please check out the errors.","split":"Opdel","single_split":"Opdel","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Transaction information","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Det ser ud til, at du ikke har oprettet budgetter endnu. Du burde oprette nogle på <a href=\\"/budgets\\">budgetsiden</a>. Budgetter kan hjælpe dig med at holde styr på udgifter.","no_bill_pointer":"Du synes ikke at have nogen regninger endnu. Du bør oprette nogle på <a href=\\"bills\\">regninger</a>-siden. Regninger kan hjælpe dig med at holde styr på udgifterne.","source_account":"Kildekonto","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Destinationskonto","add_another_split":"Add another split","submission":"Submission","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Submit","amount":"Beløb","date":"Date","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Etiketter","no_budget":"(no budget)","no_bill":"(no bill)","category":"Kategori","attachments":"Vedhæftninger","notes":"Noter","external_url":"Ekstern URL","update_transaction":"Opdater transaktion","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","none_in_select_list":"(ingen)","no_piggy_bank":"(ingen opsparing)","description":"Description","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"Du kan ikke redigere destinationskontoen på en afstemningstransaktion.","source_account_reconciliation":"Du kan ikke redigere kildekontoen på en afstemningstransaktion.","budget":"Budget","bill":"Regning","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Rediger","delete":"Slet","name":"Name","profile_whoops":"Hovsa!","profile_something_wrong":"Noget gik galt!","profile_try_again":"Noget gik galt. Forsøg venligst igen.","profile_oauth_clients":"OAuth Klienter","profile_oauth_no_clients":"Du har ikke oprettet nogen OAuth klienter.","profile_oauth_clients_header":"Klienter","profile_oauth_client_id":"Klient ID","profile_oauth_client_name":"Navn","profile_oauth_client_secret":"Hemmelighed","profile_oauth_create_new_client":"Opret ny klient","profile_oauth_create_client":"Opret klient","profile_oauth_edit_client":"Rediger klient","profile_oauth_name_help":"Noget dine brugere vil genkende og stole på.","profile_oauth_redirect_url":"Omdirigerings-URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Din autoriserings callback URL.","profile_authorized_apps":"Autoriserede programmer","profile_authorized_clients":"Autoriserede klienter","profile_scopes":"Anvendelsesområde","profile_revoke":"Tilbagekald","profile_personal_access_tokens":"Personlige Adgangstokens","profile_personal_access_token":"Personligt Adgangstoken","profile_personal_access_token_explanation":"Her er dit nye personlige adgangstoken. Dette er den eneste gang det vil blive vist, så mist det ikke! Du kan nu bruge dette token til at foretage API-anmodninger.","profile_no_personal_access_token":"Du har ikke oprettet en personlig adgangstoken.","profile_create_new_token":"Opret nyt token","profile_create_token":"Opret token","profile_create":"Opret","profile_save_changes":"Gem ændringer","default_group_title_name":"(ungrouped)","piggy_bank":"Sparegris","profile_oauth_client_secret_title":"Klient Hemmelighed","profile_oauth_client_secret_expl":"Her er din nye klient hemmelighed. Dette er den eneste tid, den vil blive vist, så mist det ikke! Du kan nu bruge denne hemmelighed til at lave API-anmodninger.","profile_oauth_confidential":"Fortroligt","profile_oauth_confidential_help":"Kræver klienten at godkende med en hemmelighed. Fortrolige klienter kan holde legitimationsoplysninger på en sikker måde uden at udsætte dem for uautoriserede parter. Offentlige applikationer, såsom native desktop eller JavaScript SPA applikationer, er ikke i stand til at holde hemmeligheder sikkert.","multi_account_warning_unknown":"Afhængigt af hvilken type transaktion du opretter kan kilden og/eller destinationskontoen for efterfølgende opsplitninger tilsidesættes, uanset hvad der er defineret i den første opdeling af transaktionen.","multi_account_warning_withdrawal":"Husk, at kildekontoen for efterfølgende opdelinger vil blive overstyret af hvad der er defineret i den første opdeling af tilbagetrækningen.","multi_account_warning_deposit":"Husk, at destinationskontoen for efterfølgende opdelinger vil blive tilsidesat af hvad der er defineret i den første opsplitning af depositummet.","multi_account_warning_transfer":"Husk på, at kilden + destination konto for efterfølgende opdelinger vil blive overstyret af hvad der er defineret i den første opdeling af overførslen.","webhook_trigger_STORE_TRANSACTION":"Efter oprettelse af transaktion","webhook_trigger_UPDATE_TRANSACTION":"Efter opdatering af transaktion","webhook_trigger_DESTROY_TRANSACTION":"Efter sletning af transaktion","webhook_response_TRANSACTIONS":"Transaktionsdetaljer","webhook_response_ACCOUNTS":"Kontodetaljer","webhook_response_none_NONE":"Ingen detaljer","webhook_delivery_JSON":"JSON","actions":"Handlinger","meta_data":"Meta data","webhook_messages":"Webhook-besked","inactive":"Inactive","no_webhook_messages":"Der er ingen webhook-beskeder","inspect":"Inspect","create_new_webhook":"Opret ny webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Hvilket format webhook skal levere data i.","webhook_active_form_help":"Webhooken skal være aktiv, ellers vil den ikke blive kaldt.","edit_webhook_js":"Rediger webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"Vis besked","view_attempts":"Vis mislykkede forsøg","message_content_title":"Webhook-beskedindhold","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook-forsøg","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"Der er ingen mislykkede forsøg. Det er en god ting!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Svar","visit_webhook_url":"Besøg webhook-URL","reset_webhook_secret":"Nulstil webhook-hemmelighed"},"form":{"url":"URL","active":"Aktiv","interest_date":"Rentedato","title":"Titel","book_date":"Bogføringsdato","process_date":"Behandlingsdato","due_date":"Forfaldsdato","foreign_amount":"Fremmed beløb","payment_date":"Betalingsdato","invoice_date":"Fakturadato","internal_reference":"Intern reference","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Aktiv?","trigger":"Udløser","response":"Svar","delivery":"Delivery","url":"URL","secret":"Hemmelighed"},"config":{"html_language":"da","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/de.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/de.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Überblick","flash_error":"Fehler!","flash_warning":"Achtung!","flash_success":"Geschafft!","close":"Schließen","split_transaction_title":"Beschreibung der Splittbuchung","errors_submission":"Ihre Übermittlung ist fehlgeschlagen. Bitte überprüfen Sie die Fehler.","split":"Teilen","single_split":"Teilen","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Buchung #{ID} (\\"{title}\\")</a> wurde gespeichert.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> wurde gespeichert.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") wurde aktualisiert.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Die Buchung #{ID}</a> (\\"{title}\\") wurde aktualisiert.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Buchung #{ID}</a> wurde gespeichert.","transaction_journal_information":"Transaktionsinformationen","submission_options":"Übermittlungsoptionen","apply_rules_checkbox":"Regeln anwenden","fire_webhooks_checkbox":"Webhooks abfeuern","no_budget_pointer":"Sie scheinen noch keine Budgets festgelegt zu haben. Sie sollten einige davon auf der Seite <a href=\\"budgets\\">Budgets</a> anlegen. Budgets können Ihnen dabei helfen, den Überblick über die Ausgaben zu behalten.","no_bill_pointer":"Sie scheinen noch keine Rechnungen zu haben. Sie sollten einige auf der Seite <a href=\\"bills\\">Rechnungen</a> erstellen. Anhand der Rechnungen können Sie den Überblick über Ihre Ausgaben behalten.","source_account":"Quellkonto","hidden_fields_preferences":"Sie können weitere Buchungsoptionen in Ihren <a href=\\"preferences\\">Einstellungen</a> aktivieren.","destination_account":"Zielkonto","add_another_split":"Eine weitere Aufteilung hinzufügen","submission":"Übermittlung","create_another":"Nach dem Speichern hierher zurückkehren, um ein weiteres zu erstellen.","reset_after":"Formular nach der Übermittlung zurücksetzen","submit":"Absenden","amount":"Betrag","date":"Datum","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Schlagwörter","no_budget":"(kein Budget)","no_bill":"(keine Belege)","category":"Kategorie","attachments":"Anhänge","notes":"Notizen","external_url":"Externe URL","update_transaction":"Buchung aktualisieren","after_update_create_another":"Nach dem Aktualisieren hierher zurückkehren, um weiter zu bearbeiten.","store_as_new":"Als neue Buchung speichern statt zu aktualisieren.","split_title_help":"Wenn Sie eine Splittbuchung anlegen, muss es eine eindeutige Beschreibung für alle Aufteilungen der Buchhaltung geben.","none_in_select_list":"(Keine)","no_piggy_bank":"(kein Sparschwein)","description":"Beschreibung","split_transaction_title_help":"Wenn Sie eine Splittbuchung anlegen, muss es eine eindeutige Beschreibung für alle Aufteilungen der Buchung geben.","destination_account_reconciliation":"Sie können das Zielkonto einer Kontenausgleichsbuchung nicht bearbeiten.","source_account_reconciliation":"Sie können das Quellkonto einer Kontenausgleichsbuchung nicht bearbeiten.","budget":"Budget","bill":"Rechnung","you_create_withdrawal":"Sie haben eine Ausgabe erstellt.","you_create_transfer":"Sie erstellen eine Umbuchung.","you_create_deposit":"Sie haben eine Einnahme erstellt.","edit":"Bearbeiten","delete":"Löschen","name":"Name","profile_whoops":"Huch!","profile_something_wrong":"Ein Problem ist aufgetreten!","profile_try_again":"Ein Problem ist aufgetreten. Bitte versuchen Sie es erneut.","profile_oauth_clients":"OAuth-Clients","profile_oauth_no_clients":"Sie haben noch keine OAuth-Clients erstellt.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client-ID","profile_oauth_client_name":"Name","profile_oauth_client_secret":"Geheimnis","profile_oauth_create_new_client":"Neuen Client erstellen","profile_oauth_create_client":"Client erstellen","profile_oauth_edit_client":"Client bearbeiten","profile_oauth_name_help":"Etwas das Ihre Nutzer erkennen und dem sie vertrauen.","profile_oauth_redirect_url":"Weiterleitungs-URL","profile_oauth_clients_external_auth":"Wenn Sie einen externen Authentifizierungsanbieter wie Authelia verwenden, funktionieren OAuth Clients nicht. Sie können ausschließlich persönliche Zugriffstoken verwenden.","profile_oauth_redirect_url_help":"Die Authorisierungs-Callback-URL Ihrer Anwendung.","profile_authorized_apps":"Autorisierte Anwendungen","profile_authorized_clients":"Autorisierte Clients","profile_scopes":"Bereiche","profile_revoke":"Widerrufen","profile_personal_access_tokens":"Persönliche Zugangs-Tokens","profile_personal_access_token":"Persönlicher Zugangs-Token","profile_personal_access_token_explanation":"Hier ist Ihr neuer persönlicher Zugangsschlüssel. Dies ist das einzige Mal, dass er angezeigt wird, also verlieren Sie ihn nicht! Sie können diesen Token jetzt verwenden, um API-Anfragen zu stellen.","profile_no_personal_access_token":"Sie haben keine persönlichen Zugangsschlüssel erstellt.","profile_create_new_token":"Neuen Schlüssel erstellen","profile_create_token":"Schlüssel erstellen","profile_create":"Erstellen","profile_save_changes":"Änderungen speichern","default_group_title_name":"(ohne Gruppierung)","piggy_bank":"Sparschwein","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Hier ist Ihr neuer persönlicher Zugangsschlüssel. Dies ist das einzige Mal, dass er angezeigt wird, also verlieren Sie ihn nicht! Sie können diesen Token jetzt verwenden, um API-Anfragen zu stellen.","profile_oauth_confidential":"Vertraulich","profile_oauth_confidential_help":"Der Client muss sich mit einem Secret authentifizieren. Vertrauliche Clients können die Anmeldedaten speichern, ohne diese unautorisierten Akteuren mitzuteilen. Öffentliche Anwendungen wie native Desktop- oder JavaScript-SPA-Anwendungen können Geheimnisse nicht sicher speichern.","multi_account_warning_unknown":"Abhängig von der Art der Buchung, die Sie anlegen, kann das Quell- und/oder Zielkonto nachfolgender Aufteilungen durch das überschrieben werden, was in der ersten Aufteilung der Buchung definiert wurde.","multi_account_warning_withdrawal":"Bedenken Sie, dass das Quellkonto nachfolgender Aufteilungen von dem, was in der ersten Aufteilung der Abhebung definiert ist, außer Kraft gesetzt wird.","multi_account_warning_deposit":"Bedenken Sie, dass das Zielkonto nachfolgender Aufteilungen von dem, was in der ersten Aufteilung der Einnahmen definiert ist, außer Kraft gesetzt wird.","multi_account_warning_transfer":"Bedenken Sie, dass das Quell- und Zielkonto nachfolgender Aufteilungen durch das, was in der ersten Aufteilung der Übertragung definiert ist, außer Kraft gesetzt wird.","webhook_trigger_STORE_TRANSACTION":"Nach Erstellen einer Buchung","webhook_trigger_UPDATE_TRANSACTION":"Nach Aktualisierung einer Buchung","webhook_trigger_DESTROY_TRANSACTION":"Nach dem Löschen einer Buchung","webhook_response_TRANSACTIONS":"Buchungsdetails","webhook_response_ACCOUNTS":"Kontodetails","webhook_response_none_NONE":"Keine Daten","webhook_delivery_JSON":"JSON","actions":"Aktionen","meta_data":"Metadaten","webhook_messages":"Webhook-Nachricht","inactive":"Inaktiv","no_webhook_messages":"Es gibt keine Webhook Nachrichten","inspect":"Überprüfen","create_new_webhook":"Neuen Webhook erstellen","webhooks":"Webhooks","webhook_trigger_form_help":"Geben Sie an, bei welchem Ereignis der Webhook ausgelöst werden soll","webhook_response_form_help":"Geben Sie an, was der Webhook an die URL senden soll.","webhook_delivery_form_help":"In welchem Format der Webhook Daten liefern muss.","webhook_active_form_help":"Der Webhook muss aktiv sein oder wird nicht aufgerufen.","edit_webhook_js":"Webhook \\"{title} \\" bearbeiten","webhook_was_triggered":"Der Webhook wurde für die angezeigte Transaktion ausgelöst. Bitte warten Sie, bis die Ergebnisse erscheinen.","view_message":"Nachricht anzeigen","view_attempts":"Gescheiterte Versuche anzeigen","message_content_title":"Webhook Nachrichteninhalt","message_content_help":"Dies ist der Inhalt der Nachricht, die mit diesem Webhook gesendet (oder zu Senden versucht) wurde.","attempt_content_title":"Webhook Versuche","attempt_content_help":"Dies sind alle erfolglosen Versuche dieser Webhook-Nachricht, an die konfigurierte URL zu senden. Nach einiger Zeit wird es Firefly III nicht mehr versuchen.","no_attempts":"Es gibt keine erfolglosen Versuche. Das ist eine gute Sache!","webhook_attempt_at":"Versuch bei {moment}","logs":"Protokolle","response":"Antwort","visit_webhook_url":"Webhook-URL besuchen","reset_webhook_secret":"Webhook Secret zurücksetzen"},"form":{"url":"URL","active":"Aktiv","interest_date":"Zinstermin","title":"Titel","book_date":"Buchungsdatum","process_date":"Bearbeitungsdatum","due_date":"Fälligkeitstermin","foreign_amount":"Ausländischer Betrag","payment_date":"Zahlungsdatum","invoice_date":"Rechnungsdatum","internal_reference":"Interner Verweis","webhook_response":"Antwort","webhook_trigger":"Auslöser","webhook_delivery":"Zustellung"},"list":{"active":"Aktiv?","trigger":"Auslöser","response":"Antwort","delivery":"Zustellung","url":"URL","secret":"Secret"},"config":{"html_language":"de","date_time_fns":"dd. MMM. yyyy um HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/el.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/el.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Τι παίζει;","flash_error":"Σφάλμα!","flash_warning":"Προσοχή!","flash_success":"Επιτυχία!","close":"Κλείσιμο","split_transaction_title":"Περιγραφή της συναλλαγής με διαχωρισμό","errors_submission":"Υπήρξε κάποιο λάθος με την υποβολή σας. Παρακαλώ ελέγξτε τα σφάλματα.","split":"Διαχωρισμός","single_split":"Διαχωρισμός","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Η συναλλαγή #{ID} (\\"{title}\\")</a> έχει αποθηκευτεί.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> έχει αποθηκευτεί.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Το Webhook #{ID}</a> (\\"{title}\\") έχει ενημερωθεί.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Η συναλλαγή #{ID}</a> (\\"{title}\\") έχει ενημερωθεί.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Η συναλλαγή #{ID}</a> έχει αποθηκευτεί.","transaction_journal_information":"Πληροφορίες συναλλαγής","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Ενεργοποίηση των webhook","no_budget_pointer":"Φαίνεται πως δεν έχετε ορίσει προϋπολογισμούς ακόμη. Πρέπει να δημιουργήσετε κάποιον στη σελίδα <a href=\\"budgets\\">προϋπολογισμών</a>. Οι προϋπολογισμοί σας βοηθούν να επιβλέπετε τις δαπάνες σας.","no_bill_pointer":"Φαίνεται πως δεν έχετε ορίσει πάγια έξοδα ακόμη. Πρέπει να δημιουργήσετε κάποιο στη σελίδα <a href=\\"bills\\">πάγιων εξόδων</a>. Τα πάγια έξοδα σας βοηθούν να επιβλέπετε τις δαπάνες σας.","source_account":"Λογαριασμός προέλευσης","hidden_fields_preferences":"Μπορείτε να ενεργοποιήσετε περισσότερες επιλογές συναλλαγών στις <a href=\\"/preferences\\">προτιμήσεις</a>.","destination_account":"Λογαριασμός προορισμού","add_another_split":"Προσθήκη ενός ακόμα διαχωρισμού","submission":"Υποβολή","create_another":"Μετά την αποθήκευση, επιστρέψτε εδώ για να δημιουργήσετε ακόμη ένα.","reset_after":"Επαναφορά φόρμας μετά την υποβολή","submit":"Υποβολή","amount":"Ποσό","date":"Ημερομηνία","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Ετικέτες","no_budget":"(χωρίς προϋπολογισμό)","no_bill":"(χωρίς πάγιο έξοδο)","category":"Κατηγορία","attachments":"Συνημμένα","notes":"Σημειώσεις","external_url":"Εξωτερικό URL","update_transaction":"Ενημέρωση συναλλαγής","after_update_create_another":"Μετά την ενημέρωση, επιστρέψτε εδώ για να συνεχίσετε την επεξεργασία.","store_as_new":"Αποθήκευση ως νέα συναλλαγή αντί για ενημέρωση.","split_title_help":"Εάν δημιουργήσετε μια διαχωρισμένη συναλλαγή, πρέπει να υπάρχει μια καθολική περιγραφή για όλους τους διαχωρισμούς της συναλλαγής.","none_in_select_list":"(τίποτα)","no_piggy_bank":"(χωρίς κουμπαρά)","description":"Περιγραφή","split_transaction_title_help":"Εάν δημιουργήσετε μια διαχωρισμένη συναλλαγή, πρέπει να υπάρχει μια καθολική περιγραφή για όλους τους διαχωρισμούς της συναλλαγής.","destination_account_reconciliation":"Δεν μπορείτε να τροποποιήσετε τον λογαριασμό προορισμού σε μια συναλλαγή τακτοποίησης.","source_account_reconciliation":"Δεν μπορείτε να τροποποιήσετε τον λογαριασμό προέλευσης σε μια συναλλαγή τακτοποίησης.","budget":"Προϋπολογισμός","bill":"Πάγιο έξοδο","you_create_withdrawal":"Δημιουργείτε μια ανάληψη.","you_create_transfer":"Δημιουργείτε μια μεταφορά.","you_create_deposit":"Δημιουργείτε μια κατάθεση.","edit":"Επεξεργασία","delete":"Διαγραφή","name":"Όνομα","profile_whoops":"Ούπς!","profile_something_wrong":"Κάτι πήγε στραβά!","profile_try_again":"Κάτι πήγε στραβά. Παρακαλώ προσπαθήστε ξανά.","profile_oauth_clients":"Πελάτες OAuth","profile_oauth_no_clients":"Δεν έχετε δημιουργήσει πελάτες OAuth.","profile_oauth_clients_header":"Πελάτες","profile_oauth_client_id":"Αναγνωριστικό πελάτη","profile_oauth_client_name":"Όνομα","profile_oauth_client_secret":"Μυστικό","profile_oauth_create_new_client":"Δημιουργία νέου πελάτη","profile_oauth_create_client":"Δημιουργία πελάτη","profile_oauth_edit_client":"Επεξεργασία πελάτη","profile_oauth_name_help":"Κάτι που οι χρήστες σας θα αναγνωρίζουν και θα εμπιστεύονται.","profile_oauth_redirect_url":"URL ανακατεύθυνσης","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"To authorization callback URL της εφαρμογής σας.","profile_authorized_apps":"Εξουσιοδοτημένες εφαρμογές","profile_authorized_clients":"Εξουσιοδοτημένοι πελάτες","profile_scopes":"Πεδία εφαρμογής","profile_revoke":"Ανάκληση","profile_personal_access_tokens":"Διακριτικά προσωπικής πρόσβασης","profile_personal_access_token":"Διακριτικά προσωπικής πρόσβασης","profile_personal_access_token_explanation":"Εδώ είναι το νέο διακριτικό προσωπικής πρόσβασης. Αυτή είναι η μόνη φορά που θα εμφανιστεί, οπότε μη το χάσετε! Μπορείτε να χρησιμοποιείτε αυτό το διακριτικό για να κάνετε κλήσεις API.","profile_no_personal_access_token":"Δεν έχετε δημιουργήσει προσωπικά διακριτικά πρόσβασης.","profile_create_new_token":"Δημιουργία νέου διακριτικού","profile_create_token":"Δημιουργία διακριτικού","profile_create":"Δημιουργία","profile_save_changes":"Αποθήκευση αλλαγών","default_group_title_name":"(χωρίς ομάδα)","piggy_bank":"Κουμπαράς","profile_oauth_client_secret_title":"Μυστικό Πελάτη","profile_oauth_client_secret_expl":"Εδώ είναι το νέο σας μυστικό πελάτη. Αυτή είναι η μόνη φορά που θα σας εμφανιστεί, οπότε μην το χάσετε! Μπορείτε να το χρησιμοποιείτε για να κάνετε αιτήματα API.","profile_oauth_confidential":"Εμπιστευτικό","profile_oauth_confidential_help":"Απαιτήστε από το πρόγραμμα πελάτη να πραγματοποιήσει έλεγχο ταυτότητας με ένα μυστικό. Οι έμπιστοι πελάτες μπορούν να διατηρούν διαπιστευτήρια με ασφαλή τρόπο χωρίς να τα εκθέτουν σε μη εξουσιοδοτημένα μέρη. Οι δημόσιες εφαρμογές, όπως οι εγγενείς εφαρμογές για επιτραπέζιους υπολογιστές ή JavaScript SPA, δεν μπορούν να κρατήσουν μυστικά με ασφάλεια.","multi_account_warning_unknown":"Ανάλογα με τον τύπο της συναλλαγής που δημιουργείτε, ο λογαριασμός προέλευσης ή/και προορισμού των επόμενων διαχωρισμών ενδέχεται να παρακαμφθεί από αυτό που ορίζεται στο πρώτο διαχωρισμό της συναλλαγής.","multi_account_warning_withdrawal":"Λάβετε υπόψη ότι ο λογαριασμός προέλευσης των επόμενων διαχωρισμών θα υπερισχύσει αυτού του πρώτου διαχωρισμού της ανάληψης.","multi_account_warning_deposit":"Λάβετε υπόψη ότι ο λογαριασμός προορισμού των επόμενων διαχωρισμών θα υπερισχύσει αυτού του πρώτου διαχωρισμού της κατάθεσης.","multi_account_warning_transfer":"Λάβετε υπόψη ότι ο λογαριασμός προέλευσης και προορισμού των επόμενων διαχωρισμών θα υπερισχύσει αυτού του πρώτου διαχωρισμού της μεταφοράς.","webhook_trigger_STORE_TRANSACTION":"Μετά τη δημιουργία συναλλαγής","webhook_trigger_UPDATE_TRANSACTION":"Μετά την ενημέρωση της συναλλαγής","webhook_trigger_DESTROY_TRANSACTION":"Μετά τη διαγραφή συναλλαγής","webhook_response_TRANSACTIONS":"Λεπτομέρειες συναλλαγής","webhook_response_ACCOUNTS":"Πληροφορίες λογαριασμού","webhook_response_none_NONE":"Δεν υπάρχουν λεπτομέρειες","webhook_delivery_JSON":"JSON","actions":"Ενέργειες","meta_data":"Μετα-δεδομένα","webhook_messages":"Μήνυμα Webhook","inactive":"Ανενεργό","no_webhook_messages":"Δεν υπάρχουν μηνύματα webhook","inspect":"Έλεγχος","create_new_webhook":"Δημιουργία νέου webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Επιλέξτε που θα ενεργοποιηθεί το webhook","webhook_response_form_help":"Υποδείξτε τι πρέπει να υποβάλει το webhook στη διεύθυνση URL.","webhook_delivery_form_help":"Ποια μορφή πρέπει να παραδώσει δεδομένα στο webhook.","webhook_active_form_help":"Το webhook πρέπει να είναι ενεργό αλλιώς δεν θα κληθεί.","edit_webhook_js":"Επεξεργασία webhook \\"{title}\\"","webhook_was_triggered":"Το webhook ενεργοποιήθηκε στην επιλεγμένη συναλλαγή. Παρακαλώ περιμένετε να εμφανιστούν τα αποτελέσματα.","view_message":"Προβολή μηνύματος","view_attempts":"Προβολή αποτυχημένων προσπαθειών","message_content_title":"Περιεχόμενο μηνύματος Webhook","message_content_help":"Αυτό είναι το περιεχόμενο του μηνύματος που στάλθηκε (ή δοκιμάστηκε) χρησιμοποιώντας αυτό το webhook.","attempt_content_title":"Προσπάθειες Webhook","attempt_content_help":"Αυτές είναι όλες οι ανεπιτυχείς προσπάθειες αυτού του μηνύματος webhook για υποβολή στην ρυθμισμένη διεύθυνση URL. Μετά από κάποιο χρονικό διάστημα, το Firefly III θα σταματήσει να προσπαθεί.","no_attempts":"Δεν υπάρχουν ανεπιτυχείς προσπάθειες. Αυτό είναι καλό!","webhook_attempt_at":"Προσπάθεια στο {moment}","logs":"Αρχεία καταγραφής (Logs)","response":"Απόκριση","visit_webhook_url":"Επισκεφθείτε το URL του webhook","reset_webhook_secret":"Επαναφορά μυστικού webhook"},"form":{"url":"Διεύθυνση URL","active":"Ενεργό","interest_date":"Ημερομηνία τοκισμού","title":"Τίτλος","book_date":"Ημερομηνία εγγραφής","process_date":"Ημερομηνία επεξεργασίας","due_date":"Ημερομηνία προθεσμίας","foreign_amount":"Ποσό σε ξένο νόμισμα","payment_date":"Ημερομηνία πληρωμής","invoice_date":"Ημερομηνία τιμολόγησης","internal_reference":"Εσωτερική αναφορά","webhook_response":"Απόκριση","webhook_trigger":"Ενεργοποίηση","webhook_delivery":"Παράδοση"},"list":{"active":"Είναι ενεργό;","trigger":"Ενεργοποίηση","response":"Απόκριση","delivery":"Παράδοση","url":"Διεύθυνση URL","secret":"Μυστικό"},"config":{"html_language":"el","date_time_fns":"do MMMM yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/en-gb.json":
/*!************************************************!*\
  !*** ./resources/assets/js/locales/en-gb.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"What\'s playing?","flash_error":"Error!","flash_warning":"Warning!","flash_success":"Success!","close":"Close","split_transaction_title":"Description of the split transaction","errors_submission":"There was something wrong with your submission. Please check out the errors.","split":"Split","single_split":"Split","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Transaction information","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"You seem to have no budgets yet. You should create some on the <a href=\\"budgets\\">budgets</a>-page. Budgets can help you keep track of expenses.","no_bill_pointer":"You seem to have no bills yet. You should create some on the <a href=\\"bills\\">bills</a>-page. Bills can help you keep track of expenses.","source_account":"Source account","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Destination account","add_another_split":"Add another split","submission":"Submission","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Submit","amount":"Amount","date":"Date","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tags","no_budget":"(no budget)","no_bill":"(no bill)","category":"Category","attachments":"Attachments","notes":"Notes","external_url":"External URL","update_transaction":"Update transaction","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","none_in_select_list":"(none)","no_piggy_bank":"(no piggy bank)","description":"Description","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"You can\'t edit the destination account of a reconciliation transaction.","source_account_reconciliation":"You can\'t edit the source account of a reconciliation transaction.","budget":"Budget","bill":"Bill","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Edit","delete":"Delete","name":"Name","profile_whoops":"Whoops!","profile_something_wrong":"Something went wrong!","profile_try_again":"Something went wrong. Please try again.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"You have not created any OAuth clients.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Name","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Create New Client","profile_oauth_create_client":"Create Client","profile_oauth_edit_client":"Edit Client","profile_oauth_name_help":"Something your users will recognize and trust.","profile_oauth_redirect_url":"Redirect URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Your application\'s authorization callback URL.","profile_authorized_apps":"Authorized applications","profile_authorized_clients":"Authorized clients","profile_scopes":"Scopes","profile_revoke":"Revoke","profile_personal_access_tokens":"Personal Access Tokens","profile_personal_access_token":"Personal Access Token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"You have not created any personal access tokens.","profile_create_new_token":"Create new token","profile_create_token":"Create token","profile_create":"Create","profile_save_changes":"Save changes","default_group_title_name":"(ungrouped)","piggy_bank":"Piggy bank","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Confidential","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Actions","meta_data":"Meta data","webhook_messages":"Webhook message","inactive":"Inactive","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Active","interest_date":"Interest date","title":"Title","book_date":"Book date","process_date":"Processing date","due_date":"Due date","foreign_amount":"Foreign amount","payment_date":"Payment date","invoice_date":"Invoice date","internal_reference":"Internal reference","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Is active?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"en-gb","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/en.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/en.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"What\'s playing?","flash_error":"Error!","flash_warning":"Warning!","flash_success":"Success!","close":"Close","split_transaction_title":"Description of the split transaction","errors_submission":"There was something wrong with your submission. Please check out the errors.","split":"Split","single_split":"Split","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Transaction information","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"You seem to have no budgets yet. You should create some on the <a href=\\"budgets\\">budgets</a>-page. Budgets can help you keep track of expenses.","no_bill_pointer":"You seem to have no bills yet. You should create some on the <a href=\\"bills\\">bills</a>-page. Bills can help you keep track of expenses.","source_account":"Source account","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Destination account","add_another_split":"Add another split","submission":"Submission","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Submit","amount":"Amount","date":"Date","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tags","no_budget":"(no budget)","no_bill":"(no bill)","category":"Category","attachments":"Attachments","notes":"Notes","external_url":"External URL","update_transaction":"Update transaction","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","none_in_select_list":"(none)","no_piggy_bank":"(no piggy bank)","description":"Description","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"You can\'t edit the destination account of a reconciliation transaction.","source_account_reconciliation":"You can\'t edit the source account of a reconciliation transaction.","budget":"Budget","bill":"Bill","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Edit","delete":"Delete","name":"Name","profile_whoops":"Whoops!","profile_something_wrong":"Something went wrong!","profile_try_again":"Something went wrong. Please try again.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"You have not created any OAuth clients.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Name","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Create New Client","profile_oauth_create_client":"Create Client","profile_oauth_edit_client":"Edit Client","profile_oauth_name_help":"Something your users will recognize and trust.","profile_oauth_redirect_url":"Redirect URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Your application\'s authorization callback URL.","profile_authorized_apps":"Authorized applications","profile_authorized_clients":"Authorized clients","profile_scopes":"Scopes","profile_revoke":"Revoke","profile_personal_access_tokens":"Personal Access Tokens","profile_personal_access_token":"Personal Access Token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"You have not created any personal access tokens.","profile_create_new_token":"Create new token","profile_create_token":"Create token","profile_create":"Create","profile_save_changes":"Save changes","default_group_title_name":"(ungrouped)","piggy_bank":"Piggy bank","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Confidential","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Actions","meta_data":"Meta data","webhook_messages":"Webhook message","inactive":"Inactive","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Active","interest_date":"Interest date","title":"Title","book_date":"Book date","process_date":"Processing date","due_date":"Due date","foreign_amount":"Foreign amount","payment_date":"Payment date","invoice_date":"Invoice date","internal_reference":"Internal reference","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Is active?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"en","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/es.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/es.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"¿Qué está pasando?","flash_error":"¡Error!","flash_warning":"¡Atención!","flash_success":"¡Operación correcta!","close":"Cerrar","split_transaction_title":"Descripción de la transacción dividida","errors_submission":"Hubo un problema con su envío. Por favor, compruebe los errores.","split":"Separar","single_split":"División","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">La transacción #{ID} (\\"{title}\\")</a> ha sido almacenada.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">El webhook #{ID} (\\"{title}\\")</a> ha sido almacenado.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">El webhook #{ID} (\\"{title}\\")</a> ha sido actualizado.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">La transacción #{ID}</a> (\\"{title}\\") ha sido actualizada.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">La transacción #{ID}</a> ha sido guardada.","transaction_journal_information":"Información de transacción","submission_options":"Opciones de envío","apply_rules_checkbox":"Aplicar reglas","fire_webhooks_checkbox":"Disparar webhooks","no_budget_pointer":"Parece que aún no tienes presupuestos. Debes crear algunos en la página <a href=\\"budgets\\">presupuestos</a>. Los presupuestos pueden ayudarle a realizar un seguimiento de los gastos.","no_bill_pointer":"Parece que aún no tienes facturas. Deberías crear algunas en la página de <a href=\\"bills\\">facturas</a>. Las facturas pueden ayudarte a llevar un seguimiento de los gastos.","source_account":"Cuenta origen","hidden_fields_preferences":"Puede habilitar más opciones de transacción en sus <a href=\\"preferences\\">ajustes </a>.","destination_account":"Cuenta destino","add_another_split":"Añadir otra división","submission":"Envío","create_another":"Después de guardar, vuelve aquí para crear otro.","reset_after":"Restablecer formulario después del envío","submit":"Enviar","amount":"Cantidad","date":"Fecha","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Etiquetas","no_budget":"(sin presupuesto)","no_bill":"(sin factura)","category":"Categoria","attachments":"Archivos adjuntos","notes":"Notas","external_url":"URL externa","update_transaction":"Actualizar transacción","after_update_create_another":"Después de actualizar, vuelve aquí para continuar editando.","store_as_new":"Almacenar como una nueva transacción en lugar de actualizar.","split_title_help":"Si crea una transacción dividida, debe haber una descripción global para todos los fragmentos de la transacción.","none_in_select_list":"(ninguno)","no_piggy_bank":"(sin hucha)","description":"Descripción","split_transaction_title_help":"Si crea una transacción dividida, debe existir una descripción global para todas las divisiones de la transacción.","destination_account_reconciliation":"No puedes editar la cuenta de destino de una transacción de reconciliación.","source_account_reconciliation":"No puedes editar la cuenta de origen de una transacción de reconciliación.","budget":"Presupuesto","bill":"Factura","you_create_withdrawal":"Está creando un gasto.","you_create_transfer":"Está creando una transferencia.","you_create_deposit":"Está creando un ingreso.","edit":"Editar","delete":"Eliminar","name":"Nombre","profile_whoops":"¡Ups!","profile_something_wrong":"¡Algo salió mal!","profile_try_again":"Algo salió mal. Por favor, vuelva a intentarlo.","profile_oauth_clients":"Clientes de OAuth","profile_oauth_no_clients":"No ha creado ningún cliente OAuth.","profile_oauth_clients_header":"Clientes","profile_oauth_client_id":"ID del cliente","profile_oauth_client_name":"Nombre","profile_oauth_client_secret":"Secreto","profile_oauth_create_new_client":"Crear un Nuevo Cliente","profile_oauth_create_client":"Crear Cliente","profile_oauth_edit_client":"Editar Cliente","profile_oauth_name_help":"Algo que sus usuarios reconocerán y confiarán.","profile_oauth_redirect_url":"Redirigir URL","profile_oauth_clients_external_auth":"Si está utilizando un proveedor de autenticación externo como Authelia, los clientes OAuth no funcionarán. Sólo puede utilizar tokens de acceso personal.","profile_oauth_redirect_url_help":"La URL de devolución de autorización de su aplicación.","profile_authorized_apps":"Aplicaciones autorizadas","profile_authorized_clients":"Clientes autorizados","profile_scopes":"Ámbitos","profile_revoke":"Revocar","profile_personal_access_tokens":"Tokens de acceso personal","profile_personal_access_token":"Token de acceso personal","profile_personal_access_token_explanation":"Aquí está su nuevo token de acceso personal. Esta es la única vez que se mostrará así que ¡no lo pierda! Ahora puede usar este token para hacer solicitudes de la API.","profile_no_personal_access_token":"No ha creado ningún token de acceso personal.","profile_create_new_token":"Crear nuevo token","profile_create_token":"Crear token","profile_create":"Crear","profile_save_changes":"Guardar cambios","default_group_title_name":"(sin agrupación)","piggy_bank":"Hucha","profile_oauth_client_secret_title":"Secreto del Cliente","profile_oauth_client_secret_expl":"Aquí está su nuevo secreto de cliente. Esta es la única vez que se mostrará así que no lo pierda! Ahora puede usar este secreto para hacer solicitudes de API.","profile_oauth_confidential":"Confidencial","profile_oauth_confidential_help":"Requerir que el cliente se autentifique con un secreto. Los clientes confidenciales pueden mantener las credenciales de forma segura sin exponerlas a partes no autorizadas. Las aplicaciones públicas, como aplicaciones de escritorio nativo o SPA de JavaScript, no pueden guardar secretos de forma segura.","multi_account_warning_unknown":"Dependiendo del tipo de transacción que cree, la cuenta de origen y/o destino de divisiones posteriores puede ser anulada por lo que se define en la primera división de la transacción.","multi_account_warning_withdrawal":"Tenga en cuenta que la cuenta de origen de las divisiones posteriores será anulada por lo que se defina en la primera división del gasto.","multi_account_warning_deposit":"Tenga en cuenta que la cuenta de destino de las divisiones posteriores será anulada por lo que se defina en la primera división del retiro.","multi_account_warning_transfer":"Tenga en cuenta que la cuenta de origen + destino de divisiones posteriores será anulada por lo que se defina en la primera división de la transferencia.","webhook_trigger_STORE_TRANSACTION":"Después de crear la transacción","webhook_trigger_UPDATE_TRANSACTION":"Después de actualizar la transacción","webhook_trigger_DESTROY_TRANSACTION":"Después de eliminar la transacción","webhook_response_TRANSACTIONS":"Detalles de la transacción","webhook_response_ACCOUNTS":"Detalles de la cuenta","webhook_response_none_NONE":"Sin detalles","webhook_delivery_JSON":"JSON","actions":"Acciones","meta_data":"Meta Datos","webhook_messages":"Mensaje de Webhook","inactive":"Inactivo","no_webhook_messages":"No hay mensajes webhook","inspect":"Inspeccionar","create_new_webhook":"Crear un nuevo webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indica en qué evento se activará el webhook","webhook_response_form_help":"Indique lo que el webhook debe enviar a la URL.","webhook_delivery_form_help":"En qué formato debe entregar los datos el webhook.","webhook_active_form_help":"El webhook debe estar activo o no será llamado.","edit_webhook_js":"Editar webhook \\"{title}\\"","webhook_was_triggered":"El disparador se activó en la transacción indicada. Por favor, espere a que aparezcan los resultados.","view_message":"Ver mensaje","view_attempts":"Ver intentos fallidos","message_content_title":"Contenido del mensaje del webhook","message_content_help":"Este es el contenido del mensaje que se envió (o se intentó) usando este webhook.","attempt_content_title":"Intentos de webhook","attempt_content_help":"Estos son todos los intentos fallidos de enviar este mensaje de webhook a la URL configurada. Después de algún tiempo, Firefly III dejará de intentarlo.","no_attempts":"No hay intentos fallidos. ¡Eso es bueno!","webhook_attempt_at":"Intento a las {moment}","logs":"Registros","response":"Respuesta","visit_webhook_url":"Visita la URL del webhook","reset_webhook_secret":"Restablecer secreto del webhook"},"form":{"url":"URL","active":"Activo","interest_date":"Fecha de interés","title":"Título","book_date":"Fecha de registro","process_date":"Fecha de procesamiento","due_date":"Fecha de vencimiento","foreign_amount":"Cantidad extranjera","payment_date":"Fecha de pago","invoice_date":"Fecha de la factura","internal_reference":"Referencia interna","webhook_response":"Respuesta","webhook_trigger":"Disparador","webhook_delivery":"Entrega"},"list":{"active":"¿Está Activo?","trigger":"Disparador","response":"Respuesta","delivery":"Entrega","url":"URL","secret":"Secreto"},"config":{"html_language":"es","date_time_fns":"El MMMM hacer, yyyy a las HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/fi.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/fi.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Mitä kuuluu?","flash_error":"Virhe!","flash_warning":"Varoitus!","flash_success":"Valmista tuli!","close":"Sulje","split_transaction_title":"Jaetun tapahtuman kuvaus","errors_submission":"Lomakkeen tiedoissa oli jotain vikaa. Ole hyvä ja tarkista virheet.","split":"Jaa","single_split":"Jako","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Tapahtuma #{ID} (\\"{title}\\")</a> on tallennettu.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Tapahtuma #{ID}</a> (\\"{title}\\") on päivitetty.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Tapahtuma #{ID}</a> on tallennettu.","transaction_journal_information":"Tapahtumatiedot","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Sinulla ei näytä olevan vielä budjetteja. Sinun pitäisi luoda joitakin <a href=\\"budgets\\">budjetit</a>-sivulla. Budjetit auttavat sinua pitämään kirjaa kuluista.","no_bill_pointer":"Sinulla ei näytä olevan vielä laskuja. Sinun pitäisi luoda joitakin <a href=\\"bills\\">laskut</a>-sivulla. Laskut auttavat sinua pitämään kirjaa kuluista.","source_account":"Lähdetili","hidden_fields_preferences":"Voit ottaa käyttöön lisää tapahtumavalintoja <a href=\\"preferences\\">asetuksissa</a>.","destination_account":"Kohdetili","add_another_split":"Lisää tapahtumaan uusi osa","submission":"Vahvistus","create_another":"Tallennuksen jälkeen, palaa takaisin luomaan uusi tapahtuma.","reset_after":"Tyhjennä lomake lähetyksen jälkeen","submit":"Vahvista","amount":"Summa","date":"Päivämäärä","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tägit","no_budget":"(ei budjettia)","no_bill":"(ei laskua)","category":"Kategoria","attachments":"Liitteet","notes":"Muistiinpanot","external_url":"Ulkoinen URL","update_transaction":"Päivitä tapahtuma","after_update_create_another":"Päivityksen jälkeen, palaa takaisin jatkamaan muokkausta.","store_as_new":"Tallenna uutena tapahtumana päivityksen sijaan.","split_title_help":"Jos luot jaetun tapahtuman, kokonaisuudelle tarvitaan nimi.","none_in_select_list":"(ei mitään)","no_piggy_bank":"(ei säästöpossu)","description":"Kuvaus","split_transaction_title_help":"Jos luot jaetun tapahtuman, kokonaisuudelle tarvitaan nimi.","destination_account_reconciliation":"Et voi muokata täsmäytystapahtuman kohdetiliä.","source_account_reconciliation":"Et voi muokata täsmäytystapahtuman lähdetiliä.","budget":"Budjetti","bill":"Lasku","you_create_withdrawal":"Olet luomassa nostoa.","you_create_transfer":"Olet luomassa siirtoa.","you_create_deposit":"Olet luomassa talletusta.","edit":"Muokkaa","delete":"Poista","name":"Nimi","profile_whoops":"Hupsis!","profile_something_wrong":"Jokin meni vikaan!","profile_try_again":"Jokin meni vikaan. Yritä uudelleen.","profile_oauth_clients":"OAuth Asiakkaat","profile_oauth_no_clients":"Et ole luonut yhtään OAuth-asiakasta.","profile_oauth_clients_header":"Asiakasohjelmat","profile_oauth_client_id":"Asiakastunnus","profile_oauth_client_name":"Nimi","profile_oauth_client_secret":"Salaisuus","profile_oauth_create_new_client":"Luo Uusi Asiakas","profile_oauth_create_client":"Luo Asiakas","profile_oauth_edit_client":"Muokkaa asiakasta","profile_oauth_name_help":"Jotain käyttäjillesi tuttua ja luotettavaa.","profile_oauth_redirect_url":"URL:n uudelleenohjaus","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Sovelluksesi valtuutuksen callback URL.","profile_authorized_apps":"Valtuutetut sovellukset","profile_authorized_clients":"Valtuutetut asiakkaat","profile_scopes":"Aihepiirit","profile_revoke":"Peruuta","profile_personal_access_tokens":"Henkilökohtaiset Käyttöoikeuskoodit","profile_personal_access_token":"Henkilökohtainen Käyttöoikeuskoodi","profile_personal_access_token_explanation":"Tässä on uusi henkilökohtainen pääsytunnuksesi. Tämä on ainoa kerta, kun se näytetään, joten älä hävitä sitä! Voit nyt käyttää tätä tunnusta tehdäksesi API-pyyntöjä.","profile_no_personal_access_token":"Et ole luonut henkilökohtaisia käyttöoikeustunnuksia.","profile_create_new_token":"Luo uusi tunnus","profile_create_token":"Luo tunnus","profile_create":"Luo","profile_save_changes":"Tallenna muutokset","default_group_title_name":"(ryhmittelemättömät)","piggy_bank":"Säästöpossu","profile_oauth_client_secret_title":"Asiakkaan salausavain (Client secret)","profile_oauth_client_secret_expl":"Tässä on uusi asiakkaan salausavaimesi. Tämä on ainoa kerta kun se näytetään, joten älä hukkaa sitä! Voit nyt käyttää tätä avainta tehdäksesi API komentoja.","profile_oauth_confidential":"Luottamuksellinen","profile_oauth_confidential_help":"Vaadi asiakasta tunnistautumaan salausavaimella. Luotettavat asiakkaat pystyvät ylläpitämään käyttäjätunnuksia turvallisella tavalla paljastamatta niitä luvattomille osapuolille. Julkiset sovellukset, kuten natiivi työpöytä tai JavaScript SPA sovellukset, eivät pysty pitämään salausavaimia tietoturvallisesti.","multi_account_warning_unknown":"Riippuen luomasi tapahtuman tyypistä, myöhempien jaotteluiden lähde- ja/tai kohdetilin tyyppi voidaan kumota sen mukaan, mitä on määritelty tapahtuman ensimmäisessä jaossa.","multi_account_warning_withdrawal":"Muista, että myöhempien jakojen lähdetili määräytyy noston ensimmäisen jaon määritysten mukaan.","multi_account_warning_deposit":"Muista, että myöhempien jakojen kohdetili määräytyy talletuksen ensimmäisen jaon määritysten mukaan.","multi_account_warning_transfer":"Muista, että myöhempien jakojen lähde- ja kohdetili määräytyvät ensimmäisen jaon määritysten mukaan.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Toiminnot","meta_data":"Metatieto","webhook_messages":"Webhook message","inactive":"Ei aktiivinen","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhookit","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL-osoite","active":"Aktiivinen","interest_date":"Korkopäivä","title":"Otsikko","book_date":"Kirjauspäivä","process_date":"Käsittelypäivä","due_date":"Eräpäivä","foreign_amount":"Ulkomaan summa","payment_date":"Maksupäivä","invoice_date":"Laskun päivämäärä","internal_reference":"Sisäinen viite","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Aktiivinen?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"fi","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/fr.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/fr.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Quoi de neuf ?","flash_error":"Erreur !","flash_warning":"Attention !","flash_success":"Super !","close":"Fermer","split_transaction_title":"Description de l\'opération ventilée","errors_submission":"Certaines informations ne sont pas correctes dans votre formulaire. Veuillez vérifier les erreurs.","split":"Ventiler","single_split":"Ventilation","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">L\'opération n°{ID} (\\"{title}\\")</a> a été enregistrée.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Le Webhook #{ID} (\\"{title}\\")</a> a été enregistré.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Le webhook #{ID}</a> (\\"{title}\\") a été mis à jour.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">L\'opération n°{ID}</a> (\\"{title}\\") a été mise à jour.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">L\'opération n°{ID}</a> a été enregistrée.","transaction_journal_information":"Informations sur l\'opération","submission_options":"Options de soumission","apply_rules_checkbox":"Appliquer les règles","fire_webhooks_checkbox":"Lancer les webhooks","no_budget_pointer":"Vous semblez n’avoir encore aucun budget. Vous devriez en créer un sur la page des <a href=\\"budgets\\">budgets</a>. Les budgets peuvent vous aider à garder une trace des dépenses.","no_bill_pointer":"Vous semblez n\'avoir encore aucune facture. Vous devriez en créer une sur la page <a href=\\"bills\\">factures</a>-. Les factures peuvent vous aider à garder une trace des dépenses.","source_account":"Compte source","hidden_fields_preferences":"Vous pouvez activer plus d\'options d\'opérations dans vos <a href=\\"preferences\\">paramètres</a>.","destination_account":"Compte de destination","add_another_split":"Ajouter une autre fraction","submission":"Soumission","create_another":"Après enregistrement, revenir ici pour en créer un nouveau.","reset_after":"Réinitialiser le formulaire après soumission","submit":"Soumettre","amount":"Montant","date":"Date","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tags","no_budget":"(pas de budget)","no_bill":"(aucune facture)","category":"Catégorie","attachments":"Pièces jointes","notes":"Notes","external_url":"URL externe","update_transaction":"Mettre à jour l\'opération","after_update_create_another":"Après la mise à jour, revenir ici pour continuer l\'édition.","store_as_new":"Enregistrer comme une nouvelle opération au lieu de mettre à jour.","split_title_help":"Si vous créez une opération ventilée, il doit y avoir une description globale pour chaque fractions de l\'opération.","none_in_select_list":"(aucun)","no_piggy_bank":"(aucune tirelire)","description":"Description","split_transaction_title_help":"Si vous créez une opération ventilée, il doit y avoir une description globale pour chaque fraction de l\'opération.","destination_account_reconciliation":"Vous ne pouvez pas modifier le compte de destination d\'une opération de rapprochement.","source_account_reconciliation":"Vous ne pouvez pas modifier le compte source d\'une opération de rapprochement.","budget":"Budget","bill":"Facture","you_create_withdrawal":"Vous saisissez une dépense.","you_create_transfer":"Vous saisissez un transfert.","you_create_deposit":"Vous saisissez un dépôt.","edit":"Modifier","delete":"Supprimer","name":"Nom","profile_whoops":"Oups !","profile_something_wrong":"Une erreur s\'est produite !","profile_try_again":"Une erreur s’est produite. Merci d’essayer à nouveau.","profile_oauth_clients":"Clients OAuth","profile_oauth_no_clients":"Vous n’avez pas encore créé de client OAuth.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Identifiant","profile_oauth_client_name":"Nom","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Créer un nouveau client","profile_oauth_create_client":"Créer un client","profile_oauth_edit_client":"Modifier le client","profile_oauth_name_help":"Quelque chose que vos utilisateurs reconnaîtront et qui inspirera confiance.","profile_oauth_redirect_url":"URL de redirection","profile_oauth_clients_external_auth":"Si vous utilisez un fournisseur d\'authentification externe comme Authelia, les clients OAuth ne fonctionneront pas. Vous ne pouvez utiliser que des jetons d\'accès personnel.","profile_oauth_redirect_url_help":"URL de callback de votre application.","profile_authorized_apps":"Applications autorisées","profile_authorized_clients":"Clients autorisés","profile_scopes":"Permissions","profile_revoke":"Révoquer","profile_personal_access_tokens":"Jetons d\'accès personnels","profile_personal_access_token":"Jeton d\'accès personnel","profile_personal_access_token_explanation":"Voici votre nouveau jeton d’accès personnel. Ceci est la seule fois où vous pourrez le voir, ne le perdez pas ! Vous pouvez dès à présent utiliser ce jeton pour lancer des requêtes avec l’API.","profile_no_personal_access_token":"Vous n’avez pas encore créé de jeton d’accès personnel.","profile_create_new_token":"Créer un nouveau jeton","profile_create_token":"Créer un jeton","profile_create":"Créer","profile_save_changes":"Enregistrer les modifications","default_group_title_name":"(Sans groupement)","piggy_bank":"Tirelire","profile_oauth_client_secret_title":"Secret du client","profile_oauth_client_secret_expl":"Voici votre nouveau secret de client. C\'est la seule fois qu\'il sera affiché, donc ne le perdez pas ! Vous pouvez maintenant utiliser ce secret pour faire des requêtes d\'API.","profile_oauth_confidential":"Confidentiel","profile_oauth_confidential_help":"Exiger que le client s\'authentifie avec un secret. Les clients confidentiels peuvent détenir des informations d\'identification de manière sécurisée sans les exposer à des tiers non autorisés. Les applications publiques, telles que les applications de bureau natif ou les SPA JavaScript, ne peuvent pas tenir des secrets en toute sécurité.","multi_account_warning_unknown":"Selon le type d\'opération que vous créez, le(s) compte(s) source et/ou de destination des ventilations suivantes peuvent être remplacés par celui de la première ventilation de l\'opération.","multi_account_warning_withdrawal":"Gardez en tête que le compte source des ventilations suivantes peut être remplacé par celui de la première ventilation de la dépense.","multi_account_warning_deposit":"Gardez en tête que le compte de destination des ventilations suivantes peut être remplacé par celui de la première ventilation du dépôt.","multi_account_warning_transfer":"Gardez en tête que les comptes source et de destination des ventilations suivantes peuvent être remplacés par ceux de la première ventilation du transfert.","webhook_trigger_STORE_TRANSACTION":"Après la création de l\'opération","webhook_trigger_UPDATE_TRANSACTION":"Après la mise à jour de l\'opération","webhook_trigger_DESTROY_TRANSACTION":"Après la suppression de l\'opération","webhook_response_TRANSACTIONS":"Détails de l\'opération","webhook_response_ACCOUNTS":"Détails du compte","webhook_response_none_NONE":"Aucun détail","webhook_delivery_JSON":"JSON","actions":"Actions","meta_data":"Métadonnées","webhook_messages":"Message webhook","inactive":"Inactif","no_webhook_messages":"Il n\'y a pas de messages webhook","inspect":"Inspecter","create_new_webhook":"Créer un nouveau webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indique sur quel événement le webhook va se déclencher","webhook_response_form_help":"Indiquer ce que le webhook doit envoyer à l\'URL.","webhook_delivery_form_help":"Le format dans lequel le webhook doit fournir des données.","webhook_active_form_help":"Le webhook doit être actif, sinon il ne sera pas appelé.","edit_webhook_js":"Modifier le webhook \\"{title}\\"","webhook_was_triggered":"Le webhook a été déclenché sur l\'opération indiquée. Veuillez attendre que les résultats apparaissent.","view_message":"Afficher le message","view_attempts":"Voir les tentatives échouées","message_content_title":"Contenu du message webhook","message_content_help":"Il s\'agit du contenu du message qui a été envoyé (ou essayé) avec ce webhook.","attempt_content_title":"Tentatives de webhook","attempt_content_help":"Ce sont toutes les tentatives infructueuses de ce message webhook à envoyer à l\'URL configurée. Après un certain temps, Firefly III cessera d\'essayer.","no_attempts":"Il n\'y a pas de tentatives infructueuses. C\'est une bonne chose !","webhook_attempt_at":"Tentative à {moment}","logs":"Journaux","response":"Réponse","visit_webhook_url":"Visiter l\'URL du webhook","reset_webhook_secret":"Réinitialiser le secret du webhook"},"form":{"url":"Liens","active":"Actif","interest_date":"Date de valeur (intérêts)","title":"Titre","book_date":"Date d\'enregistrement","process_date":"Date de traitement","due_date":"Échéance","foreign_amount":"Montant en devise étrangère","payment_date":"Date de paiement","invoice_date":"Date de facturation","internal_reference":"Référence interne","webhook_response":"Réponse","webhook_trigger":"Déclencheur","webhook_delivery":"Distribution"},"list":{"active":"Actif ?","trigger":"Déclencheur","response":"Réponse","delivery":"Distribution","url":"URL","secret":"Secret"},"config":{"html_language":"fr","date_time_fns":"do MMMM, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/hu.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/hu.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Mi a helyzet?","flash_error":"Hiba!","flash_warning":"Figyelmeztetés!","flash_success":"Siker!","close":"Bezárás","split_transaction_title":"Felosztott tranzakció leírása","errors_submission":"There was something wrong with your submission. Please check out the errors.","split":"Felosztás","single_split":"Felosztás","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> mentve.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> mentve.","transaction_journal_information":"Tranzakciós információk","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Úgy tűnik, még nincsenek költségkeretek. Költségkereteket a <a href=\\"budgets\\">költségkeretek</a> oldalon lehet létrehozni. A költségkeretek segítenek nyomon követni a költségeket.","no_bill_pointer":"Úgy tűnik, még nincsenek költségkeretek. Költségkereteket a <a href=\\"bills\\">költségkeretek</a> oldalon lehet létrehozni. A költségkeretek segítenek nyomon követni a költségeket.","source_account":"Forrás számla","hidden_fields_preferences":"A <a href=\\"preferences\\">beállításokban</a> több mező is engedélyezhető.","destination_account":"Célszámla","add_another_split":"Másik felosztás hozzáadása","submission":"Feliratkozás","create_another":"A tárolás után térjen vissza ide új létrehozásához.","reset_after":"Űrlap törlése a beküldés után","submit":"Beküldés","amount":"Összeg","date":"Dátum","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Címkék","no_budget":"(nincs költségkeret)","no_bill":"(no bill)","category":"Kategória","attachments":"Mellékletek","notes":"Megjegyzések","external_url":"External URL","update_transaction":"Tranzakció frissítése","after_update_create_another":"A frissítés után térjen vissza ide a szerkesztés folytatásához.","store_as_new":"Tárolás új tranzakcióként frissítés helyett.","split_title_help":"Felosztott tranzakció létrehozásakor meg kell adni egy globális leírást a tranzakció összes felosztása részére.","none_in_select_list":"(nincs)","no_piggy_bank":"(nincs malacpersely)","description":"Leírás","split_transaction_title_help":"Felosztott tranzakció létrehozásakor meg kell adni egy globális leírást a tranzakció összes felosztása részére.","destination_account_reconciliation":"Nem lehet szerkeszteni egy egyeztetett tranzakció célszámláját.","source_account_reconciliation":"Nem lehet szerkeszteni egy egyeztetett tranzakció forrásszámláját.","budget":"Költségkeret","bill":"Számla","you_create_withdrawal":"Egy költség létrehozása.","you_create_transfer":"Egy átutalás létrehozása.","you_create_deposit":"Egy bevétel létrehozása.","edit":"Szerkesztés","delete":"Törlés","name":"Név","profile_whoops":"Hoppá!","profile_something_wrong":"Hiba történt!","profile_try_again":"Hiba történt. Kérjük, próbálja meg újra.","profile_oauth_clients":"OAuth kliensek","profile_oauth_no_clients":"Nincs létrehozva egyetlen OAuth kliens sem.","profile_oauth_clients_header":"Kliensek","profile_oauth_client_id":"Kliens ID","profile_oauth_client_name":"Megnevezés","profile_oauth_client_secret":"Titkos kód","profile_oauth_create_new_client":"Új kliens létrehozása","profile_oauth_create_client":"Kliens létrehozása","profile_oauth_edit_client":"Kliens szerkesztése","profile_oauth_name_help":"Segítség, hogy a felhasználók tudják mihez kapcsolódik.","profile_oauth_redirect_url":"Átirányítási URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Az alkalmazásban használt autentikációs URL.","profile_authorized_apps":"Engedélyezett alkalmazások","profile_authorized_clients":"Engedélyezett kliensek","profile_scopes":"Hatáskörök","profile_revoke":"Visszavonás","profile_personal_access_tokens":"Személyes hozzáférési tokenek","profile_personal_access_token":"Személyes hozzáférési token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"Nincs létrehozva egyetlen személyes hozzáférési token sem.","profile_create_new_token":"Új token létrehozása","profile_create_token":"Token létrehozása","profile_create":"Létrehozás","profile_save_changes":"Módosítások mentése","default_group_title_name":"(nem csoportosított)","piggy_bank":"Malacpersely","profile_oauth_client_secret_title":"Kliens titkos kódja","profile_oauth_client_secret_expl":"Ez a kliens titkos kódja. Ez az egyetlen alkalom, amikor meg van jelenítve, ne hagyd el! Ezzel a kóddal végezhetsz API hívásokat.","profile_oauth_confidential":"Bizalmas","profile_oauth_confidential_help":"Titkos kód használata a kliens bejelentkezéséhez. Bizonyos kliensek biztonságosan tudnak hitelesítő adatokat tárolni, anélkül hogy jogosulatlan fél hozzáférhetne. Nyilvános kliensek, például mint asztali vagy JavaScript SPA alkalmazások nem tudnak biztonságosan titkos kódot tárolni.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Műveletek","meta_data":"Metaadat","webhook_messages":"Webhook message","inactive":"Inaktív","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Aktív","interest_date":"Kamatfizetési időpont","title":"Cím","book_date":"Könyvelés dátuma","process_date":"Feldolgozás dátuma","due_date":"Lejárati időpont","foreign_amount":"Külföldi összeg","payment_date":"Fizetés dátuma","invoice_date":"Számla dátuma","internal_reference":"Belső hivatkozás","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Aktív?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"hu","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/id.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/id.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Apa yang sedang dimainkan?","flash_error":"Kesalahan!","flash_warning":"PERINGATAN!","flash_success":"Keberhasilan!","close":"Dekat","split_transaction_title":"Description of the split transaction","errors_submission":"There was something wrong with your submission. Please check out the errors.","split":"Pisah","single_split":"Pisah","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Informasi transaksi","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Anda tampaknya belum memiliki anggaran. Anda harus membuat beberapa di halaman-<a href=\\"budgets\\">anggaran</a>. Anggaran dapat membantu anda melacak pengeluaran.","no_bill_pointer":"Anda tampaknya belum memiliki tagihan. Anda harus membuat beberapa di halaman-<a href=\\"bills\\">tagihan</a>. Tagihan dapat membantu anda melacak pengeluaran.","source_account":"Akun sumber","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Akun tujuan","add_another_split":"Tambahkan perpecahan lagi","submission":"Submission","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Menyerahkan","amount":"Jumlah","date":"Tanggal","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tag","no_budget":"(no budget)","no_bill":"(no bill)","category":"Kategori","attachments":"Lampiran","notes":"Notes","external_url":"URL luar","update_transaction":"Update transaction","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","none_in_select_list":"(tidak ada)","no_piggy_bank":"(tidak ada celengan)","description":"Deskripsi","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"You can\'t edit the destination account of a reconciliation transaction.","source_account_reconciliation":"Anda tidak dapat mengedit akun sumber dari transaksi rekonsiliasi.","budget":"Anggaran","bill":"Tagihan","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Edit","delete":"Menghapus","name":"Nama","profile_whoops":"Whoops!","profile_something_wrong":"Something went wrong!","profile_try_again":"Something went wrong. Please try again.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"You have not created any OAuth clients.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Name","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Create New Client","profile_oauth_create_client":"Create Client","profile_oauth_edit_client":"Edit Client","profile_oauth_name_help":"Something your users will recognize and trust.","profile_oauth_redirect_url":"Redirect URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Your application\'s authorization callback URL.","profile_authorized_apps":"Authorized applications","profile_authorized_clients":"Authorized clients","profile_scopes":"Scopes","profile_revoke":"Revoke","profile_personal_access_tokens":"Personal Access Tokens","profile_personal_access_token":"Personal Access Token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"You have not created any personal access tokens.","profile_create_new_token":"Create new token","profile_create_token":"Create token","profile_create":"Create","profile_save_changes":"Save changes","default_group_title_name":"(ungrouped)","piggy_bank":"Celengan","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Confidential","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Tindakan","meta_data":"Data meta","webhook_messages":"Webhook message","inactive":"Tidak-aktif","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Aktif","interest_date":"Tanggal bunga","title":"Judul","book_date":"Tanggal buku","process_date":"Tanggal pemrosesan","due_date":"Batas tanggal terakhir","foreign_amount":"Jumlah asing","payment_date":"Tanggal pembayaran","invoice_date":"Tanggal faktur","internal_reference":"Referensi internal","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Aktif?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"id","date_time_fns":"do MMMM yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/it.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/it.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"La tua situazione finanziaria","flash_error":"Errore!","flash_warning":"Avviso!","flash_success":"Successo!","close":"Chiudi","split_transaction_title":"Descrizione della transazione suddivisa","errors_submission":"Errore durante l\'invio. Controlla gli errori segnalati qui sotto.","split":"Dividi","single_split":"Divisione","transaction_stored_link":"La <a href=\\"transactions/show/{ID}\\">transazione #{ID} (\\"{title}\\")</a> è stata salvata.","webhook_stored_link":"Il <a href=\\"webhooks/show/{ID}\\">webhook #{ID} (\\"{title}\\")</a> è stato archiviato.","webhook_updated_link":"Il <a href=\\"webhooks/show/{ID}\\">webhook #{ID} (\\"{title}\\")</a> è stato aggiornato.","transaction_updated_link":"La <a href=\\"transactions/show/{ID}\\">transazione #{ID}</a> (\\"{title}\\") è stata aggiornata.","transaction_new_stored_link":"La <a href=\\"transactions/show/{ID}\\">transazione #{ID}</a> è stata salvata.","transaction_journal_information":"Informazioni transazione","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Sembra che tu non abbia ancora dei budget. Dovresti crearne alcuni nella pagina dei <a href=\\"budgets\\">budget</a>. I budget possono aiutarti a tenere traccia delle spese.","no_bill_pointer":"Sembra che tu non abbia ancora delle bollette. Dovresti crearne alcune nella pagina delle <a href=\\"bills\\">bollette</a>. Le bollette possono aiutarti a tenere traccia delle spese.","source_account":"Conto di origine","hidden_fields_preferences":"Puoi abilitare maggiori opzioni per le transazioni nelle tue <a href=\\"preferences\\">impostazioni</a>.","destination_account":"Conto destinazione","add_another_split":"Aggiungi un\'altra divisione","submission":"Invio","create_another":"Dopo il salvataggio, torna qui per crearne un\'altra.","reset_after":"Resetta il modulo dopo l\'invio","submit":"Invia","amount":"Importo","date":"Data","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Etichette","no_budget":"(nessun budget)","no_bill":"(nessuna bolletta)","category":"Categoria","attachments":"Allegati","notes":"Note","external_url":"URL esterno","update_transaction":"Aggiorna transazione","after_update_create_another":"Dopo l\'aggiornamento, torna qui per continuare la modifica.","store_as_new":"Salva come nuova transazione invece di aggiornarla.","split_title_help":"Se crei una transazione suddivisa è necessario che ci sia una descrizione globale per tutte le suddivisioni della transazione.","none_in_select_list":"(nessuna)","no_piggy_bank":"(nessun salvadanaio)","description":"Descrizione","split_transaction_title_help":"Se crei una transazione suddivisa, è necessario che ci sia una descrizione globale per tutte le suddivisioni della transazione.","destination_account_reconciliation":"Non è possibile modificare il conto di destinazione di una transazione di riconciliazione.","source_account_reconciliation":"Non puoi modificare il conto di origine di una transazione di riconciliazione.","budget":"Budget","bill":"Bolletta","you_create_withdrawal":"Stai creando un prelievo.","you_create_transfer":"Stai creando un trasferimento.","you_create_deposit":"Stai creando un deposito.","edit":"Modifica","delete":"Elimina","name":"Nome","profile_whoops":"Oops!","profile_something_wrong":"Qualcosa non ha funzionato!","profile_try_again":"Qualcosa non ha funzionato. Riprova.","profile_oauth_clients":"Client OAuth","profile_oauth_no_clients":"Non hai creato nessun client OAuth.","profile_oauth_clients_header":"Client","profile_oauth_client_id":"ID client","profile_oauth_client_name":"Nome","profile_oauth_client_secret":"Segreto","profile_oauth_create_new_client":"Crea nuovo client","profile_oauth_create_client":"Crea client","profile_oauth_edit_client":"Modifica client","profile_oauth_name_help":"Qualcosa di cui i tuoi utenti potranno riconoscere e fidarsi.","profile_oauth_redirect_url":"URL di reindirizzamento","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"L\'URL di callback dell\'autorizzazione della tua applicazione.","profile_authorized_apps":"Applicazioni autorizzate","profile_authorized_clients":"Client autorizzati","profile_scopes":"Ambiti","profile_revoke":"Revoca","profile_personal_access_tokens":"Token di acceso personale","profile_personal_access_token":"Token di acceso personale","profile_personal_access_token_explanation":"Ecco il tuo nuovo token di accesso personale. Questa è l\'unica volta che ti viene mostrato per cui non perderlo! Da adesso puoi utilizzare questo token per effettuare delle richieste API.","profile_no_personal_access_token":"Non hai creato alcun token di accesso personale.","profile_create_new_token":"Crea nuovo token","profile_create_token":"Crea token","profile_create":"Crea","profile_save_changes":"Salva modifiche","default_group_title_name":"(non in un gruppo)","piggy_bank":"Salvadanaio","profile_oauth_client_secret_title":"Segreto del client","profile_oauth_client_secret_expl":"Ecco il segreto del nuovo client. Questa è l\'unica occasione in cui viene mostrato pertanto non perderlo! Ora puoi usare questo segreto per effettuare delle richieste alle API.","profile_oauth_confidential":"Riservato","profile_oauth_confidential_help":"Richiede al client di autenticarsi con un segreto. I client riservati possono conservare le credenziali in modo sicuro senza esporle a soggetti non autorizzati. Le applicazioni pubbliche, come le applicazioni desktop native o JavaScript SPA, non sono in grado di conservare i segreti in modo sicuro.","multi_account_warning_unknown":"A seconda del tipo di transazione che hai creato, il conto di origine e/o destinazione delle successive suddivisioni può essere sovrascritto da qualsiasi cosa sia definita nella prima suddivisione della transazione.","multi_account_warning_withdrawal":"Ricorda che il conto di origine delle successive suddivisioni verrà sovrascritto da quello definito nella prima suddivisione del prelievo.","multi_account_warning_deposit":"Ricorda che il conto di destinazione delle successive suddivisioni verrà sovrascritto da quello definito nella prima suddivisione del deposito.","multi_account_warning_transfer":"Ricorda che il conto di origine e il conto di destinazione delle successive suddivisioni verranno sovrascritti da quelli definiti nella prima suddivisione del trasferimento.","webhook_trigger_STORE_TRANSACTION":"Dopo aver creato la transazione","webhook_trigger_UPDATE_TRANSACTION":"Dopo aver aggiornato la transazione","webhook_trigger_DESTROY_TRANSACTION":"Dopo aver eliminato la transazione","webhook_response_TRANSACTIONS":"Dettagli transazione","webhook_response_ACCOUNTS":"Dettagli conto","webhook_response_none_NONE":"Nessun dettaglio","webhook_delivery_JSON":"JSON","actions":"Azioni","meta_data":"Meta dati","webhook_messages":"Messaggio Webhook","inactive":"Disattivo","no_webhook_messages":"Non ci sono messaggi webhook","inspect":"Ispeziona","create_new_webhook":"Crea nuovo webhook","webhooks":"Webhook","webhook_trigger_form_help":"Indica quale evento attiverà il webhook","webhook_response_form_help":"Indica cosa il webhook deve inviare all\'URL.","webhook_delivery_form_help":"In quale formato il webhook deve fornire i dati.","webhook_active_form_help":"Il webhook deve essere attivo o non verrà chiamato.","edit_webhook_js":"Modifica webhook \\"{title}\\"","webhook_was_triggered":"Il webhook è stato attivato sulla transazione indicata. Si prega di attendere che i risultati appaiano.","view_message":"Visualizza messaggio","view_attempts":"Visualizza tentativi falliti","message_content_title":"Contenuto del messaggio Webhook","message_content_help":"Questo è il contenuto del messaggio che è stato inviato (o ha tentato) utilizzando questo webhook.","attempt_content_title":"Tentativi del Webhook","attempt_content_help":"Questi sono tutti i tentativi falliti di questo messaggio webhook da inviare all\'URL configurato. Dopo qualche tempo, Firefly III smetterà di provare.","no_attempts":"Non ci sono tentativi falliti. È una buona cosa!","webhook_attempt_at":"Tentativo a {moment}","logs":"Log","response":"Risposta","visit_webhook_url":"Visita URL webhook","reset_webhook_secret":"Reimposta il segreto del webhook"},"form":{"url":"URL","active":"Attivo","interest_date":"Data di valuta","title":"Titolo","book_date":"Data contabile","process_date":"Data elaborazione","due_date":"Data scadenza","foreign_amount":"Importo estero","payment_date":"Data pagamento","invoice_date":"Data fatturazione","internal_reference":"Riferimento interno","webhook_response":"Risposta","webhook_trigger":"Trigger","webhook_delivery":"Consegna"},"list":{"active":"Attivo","trigger":"Trigger","response":"Risposta","delivery":"Consegna","url":"URL","secret":"Segreto"},"config":{"html_language":"it","date_time_fns":"do MMMM yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/ja.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/ja.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"概要","flash_error":"エラー！","flash_warning":"警告！","flash_success":"成功しました！","close":"閉じる","split_transaction_title":"分割取引の概要","errors_submission":"送信内容に問題がありました。エラーを確認してください。","split":"分割","single_split":"分割","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">取引 #{ID}「{title}」</a> が保存されました。","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> が保存されました。","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> が更新されました。","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">取引 #{ID}「{title}」</a> が更新されました。","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">取引 #{ID}</a> が保存されました。","transaction_journal_information":"取引情報","submission_options":"送信オプション","apply_rules_checkbox":"ルールを適用","fire_webhooks_checkbox":"Webhookを実行","no_budget_pointer":"まだ予算を立てていないようです。<a href=\\"/budgets\\">予算</a>ページで作成してください。予算は支出の把握に役立ちます。","no_bill_pointer":"まだ請求がないようです。<a href=\\"/budgets\\">請求</a>ページで作成してください。請求は支出の把握に役立ちます。","source_account":"引き出し口座","hidden_fields_preferences":"<a href=\\"preferences\\">設定</a> で追加の取引オプションを有効にできます。","destination_account":"預け入れ口座","add_another_split":"別の分割を追加","submission":"送信","create_another":"保存後に戻り作成を続ける。","reset_after":"送信後にフォームをリセット","submit":"送信","amount":"金額","date":"日付","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"タグ","no_budget":"(予算なし)","no_bill":"(請求なし)","category":"カテゴリ","attachments":"添付ファイル","notes":"備考","external_url":"外部 URL","update_transaction":"取引を更新","after_update_create_another":"保存後に戻って編集を続ける。","store_as_new":"更新せず新しい取引として保存する。","split_title_help":"分割取引を作成する場合、取引のすべての分割の包括的な概要が必要です。","none_in_select_list":"(なし)","no_piggy_bank":"(貯金箱がありません)","description":"概要","split_transaction_title_help":"分割取引を作成する場合、取引のすべての分割の包括的な概要が必要です。","destination_account_reconciliation":"預け入れ口座の取引照合を編集することはできません。","source_account_reconciliation":"引き出し口座の取引照合を編集することはできません。","budget":"予算","bill":"請求","you_create_withdrawal":"出金を作成しています。","you_create_transfer":"送金を作成しています。","you_create_deposit":"入金を作成しています。","edit":"編集","delete":"削除","name":"名称","profile_whoops":"おっと！","profile_something_wrong":"何か問題が発生しました！","profile_try_again":"問題が発生しました。もう一度やり直してください。","profile_oauth_clients":"OAuthクライアント","profile_oauth_no_clients":"OAuthクライアントを作成していません。","profile_oauth_clients_header":"クライアント","profile_oauth_client_id":"クライアント ID","profile_oauth_client_name":"名前","profile_oauth_client_secret":"シークレット","profile_oauth_create_new_client":"新しいクライアントを作成","profile_oauth_create_client":"クライアントを作成","profile_oauth_edit_client":"クライアントの編集","profile_oauth_name_help":"ユーザーが認識、信頼するものです。","profile_oauth_redirect_url":"リダイレクト URL","profile_oauth_clients_external_auth":"Autheliaのような外部認証プロバイダを使用している場合、OAuth クライアントは動作しません。パーソナルアクセストークンのみを使用できます。","profile_oauth_redirect_url_help":"アプリケーションの認証コールバック URL です。","profile_authorized_apps":"認証済みアプリケーション","profile_authorized_clients":"認証済みクライアント","profile_scopes":"スコープ","profile_revoke":"無効にする","profile_personal_access_tokens":"パーソナルアクセストークン","profile_personal_access_token":"個人アクセストークン","profile_personal_access_token_explanation":"新しいパーソナルアクセストークンです。 これは一度しか表示されないので、失くさないでください！このシークレットにより API リクエストを実行できます。","profile_no_personal_access_token":"パーソナルアクセストークンは作成されていません。","profile_create_new_token":"新しいトークンを作成","profile_create_token":"トークンを作成","profile_create":"作成","profile_save_changes":"変更を保存","default_group_title_name":"(グループなし)","piggy_bank":"貯金箱","profile_oauth_client_secret_title":"クライアントシークレット","profile_oauth_client_secret_expl":"新しいクライアントシークレットです。 これは一度しか表示されないので、失くさないでください！このシークレットにより API リクエストを実行できます。","profile_oauth_confidential":"機密","profile_oauth_confidential_help":"クライアントにシークレットを使って認証することを要求します。内々のクライアントは、許可されていない者に公開することなく、認証情報を安全な方法で保持できます。 ネイティブデスクトップや JavaScript SPAアプリケーションなどのパブリックアプリケーションは、シークレットを安全に保持することはできません。","multi_account_warning_unknown":"作成する取引の種類に応じて、続く分割の引き出し口座や預け入れ口座は、取引の最初の分割で定義されているものによって覆される可能性があります。","multi_account_warning_withdrawal":"続く分割の引き出し口座は、出金の最初の分割の定義によって覆されることに注意してください。","multi_account_warning_deposit":"続く分割の預け入れ口座は、送金の最初の分割の定義によって覆されることに注意してください。","multi_account_warning_transfer":"続く分割の預け入れ口座と引き出し口座は、送金の最初の分割の定義によって覆されることに注意してください。","webhook_trigger_STORE_TRANSACTION":"取引作成後","webhook_trigger_UPDATE_TRANSACTION":"取引更新後","webhook_trigger_DESTROY_TRANSACTION":"取引削除後","webhook_response_TRANSACTIONS":"取引詳細","webhook_response_ACCOUNTS":"口座詳細","webhook_response_none_NONE":"詳細なし","webhook_delivery_JSON":"JSON","actions":"操作","meta_data":"メタデータ","webhook_messages":"Webhookメッセージ","inactive":"非アクティブ","no_webhook_messages":"Webhookメッセージはありません","inspect":"詳細確認","create_new_webhook":"Webhookを作成","webhooks":"Webhook","webhook_trigger_form_help":"Webhookがトリガーするイベントです","webhook_response_form_help":"WebhookがURLに送信するものです。","webhook_delivery_form_help":"Webhookがデータを配信するフォーマットです。","webhook_active_form_help":"Webhookは有効である必要があります。でなければ呼び出されません。","edit_webhook_js":"Webhook「{title}」を編集","webhook_was_triggered":"指定された取引でWebhookがトリガーされました。結果が表示されるまでお待ちください。","view_message":"メッセージを見る","view_attempts":"失敗した試行の表示","message_content_title":"Webhookメッセージの内容","message_content_help":"このWebhookを使用して送信（または送信試行）されたメッセージの内容です。","attempt_content_title":"Webhookの試行","attempt_content_help":"設定されたURLに送信するWebhookメッセージの試みはすべて失敗しました。しばらくするとFirefly IIIは試行を停止します。","no_attempts":"失敗した試行はありません。これは良いことです！","webhook_attempt_at":"{moment} に試行","logs":"ログ","response":"レスポンス","visit_webhook_url":"WebhookのURLを開く","reset_webhook_secret":"Webhookのシークレットをリセット"},"form":{"url":"URL","active":"有効","interest_date":"利息日","title":"タイトル","book_date":"記帳日","process_date":"処理日","due_date":"期日","foreign_amount":"外貨金額","payment_date":"引き落とし日","invoice_date":"領収書発行日","internal_reference":"内部参照","webhook_response":"レスポンス","webhook_trigger":"トリガー","webhook_delivery":"配信"},"list":{"active":"有効","trigger":"トリガー","response":"レスポンス","delivery":"配信","url":"URL","secret":"シークレット"},"config":{"html_language":"ja","date_time_fns":"yyyy年MMMM月do日 HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/ko.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/ko.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"무슨 일이죠?","flash_error":"오류!","flash_warning":"경고!","flash_success":"성공!","close":"닫기","split_transaction_title":"분할 거래에 대한 설명","errors_submission":"제출한 내용에 문제가 있습니다. 오류를 확인해 주세요.","split":"나누기","single_split":"나누기","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">거래 #{ID} (\\"{title}\\")</a>가 저장되었습니다.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">웹훅 #{ID} (\\"{title}\\")</a>이 저장되었습니다.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">웹훅 #{ID}</a> (\\"{title}\\")이 업데이트 되었습니다.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">거래 #{ID}</a> (\\"{title}\\") 이 업데이트 되었습니다.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">거래 #{ID}</a>가 저장되었습니다.","transaction_journal_information":"거래 정보","submission_options":"제출 옵션","apply_rules_checkbox":"규칙 적용","fire_webhooks_checkbox":"웹훅 실행","no_budget_pointer":"예산이 아직 없는 것 같습니다. <a href=\\"budgets\\">예산</a> 페이지에서 예산을 만들어야 합니다. 예산은 지출을 추적하는데 도움이 됩니다.","no_bill_pointer":"청구서가 아직 없는 것 같습니다. <a href=\\"bills\\">청구서</a> 페이지에서 청구서를 만들어야 합니다. 청구서는 비용을 추적하는 데 도움이 됩니다.","source_account":"소스 계정","hidden_fields_preferences":"<a href=\\"preferences\\">환경설정</a>에서 더 많은 거래 옵션을 활성화할 수 있습니다.","destination_account":"대상 계정","add_another_split":"다른 분할 추가","submission":"제출","create_another":"저장후 이 페이지로 돌아와 다른 것을 만듭니다.","reset_after":"제출 후 양식 재설정","submit":"제출","amount":"금액","date":"날짜","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"태그","no_budget":"(예산 없음)","no_bill":"(청구서 없음)","category":"카테고리","attachments":"첨부 파일","notes":"노트","external_url":"외부 URL","update_transaction":"거래 업데이트","after_update_create_another":"업데이트 후 여기로 돌아와서 수정을 계속합니다.","store_as_new":"업데이트하는 대신 새 거래로 저장합니다.","split_title_help":"분할 거래를 생성하는 경우 거래의 모든 분할에 대한 전체 설명이 있어야 합니다.","none_in_select_list":"(없음)","no_piggy_bank":"(저금통 없음)","description":"설명","split_transaction_title_help":"분할 거래를 생성하는 경우 거래의 모든 분할에 대한 전체 설명이 있어야 합니다.","destination_account_reconciliation":"조정 거래의 대상 계정은 편집할 수 없습니다.","source_account_reconciliation":"조정 거래의 소스 계정은 편집할 수 없습니다.","budget":"예산","bill":"청구서","you_create_withdrawal":"출금을 생성하고 있습니다.","you_create_transfer":"전송을 생성하고 있습니다.","you_create_deposit":"입금을 생성하고 있습니다.","edit":"수정","delete":"삭제","name":"이름","profile_whoops":"이런!","profile_something_wrong":"문제가 발생했습니다!","profile_try_again":"문제가 발생했습니다. 다시 시도해주세요.","profile_oauth_clients":"OAuth 클라이언트","profile_oauth_no_clients":"OAuth 클라이언트를 만들지 않았습니다.","profile_oauth_clients_header":"클라이언트","profile_oauth_client_id":"클라이언트 ID","profile_oauth_client_name":"이름","profile_oauth_client_secret":"시크릿","profile_oauth_create_new_client":"새로운 클라이언트 만들기","profile_oauth_create_client":"클라이언트 만들기","profile_oauth_edit_client":"클라이언트 수정","profile_oauth_name_help":"사용자가 인지하고 신뢰할 수 있는 것.","profile_oauth_redirect_url":"리디렉션 URL","profile_oauth_clients_external_auth":"Authelia와 같은 외부 인증 제공업체를 사용하는 경우 OAuth 클라이언트가 작동하지 않습니다. 개인 액세스 토큰만 사용할 수 있습니다.","profile_oauth_redirect_url_help":"애플리케이션의 인증 콜백 URL입니다.","profile_authorized_apps":"인증된 애플리케이션","profile_authorized_clients":"인증된 클라이언트","profile_scopes":"범위","profile_revoke":"취소","profile_personal_access_tokens":"개인 액세스 토큰","profile_personal_access_token":"개인 액세스 토큰","profile_personal_access_token_explanation":"다음은 새 개인용 액세스 토큰입니다. 이번 한 번만 표시되니 놓치지 마세요! 이제 이 토큰을 사용하여 API 요청을 할 수 있습니다.","profile_no_personal_access_token":"개인 액세스 토큰을 생성하지 않았습니다.","profile_create_new_token":"새로운 토큰 만들기","profile_create_token":"토큰 생성","profile_create":"생성","profile_save_changes":"변경사항 저장","default_group_title_name":"(그룹화 해제)","piggy_bank":"저금통","profile_oauth_client_secret_title":"클라이언트 시크릿","profile_oauth_client_secret_expl":"다음은 새 클라이언트 암호입니다. 이번 한 번만 표시되니 놓치지 마세요! 이제 이 비밀 번호를 사용하여 API 요청을 할 수 있습니다.","profile_oauth_confidential":"비밀","profile_oauth_confidential_help":"클라이언트가 시크릿으로 인증하도록 요구합니다. 기밀 클라이언트는 권한이 없는 사람에게 자격 증명을 노출하지 않고 안전한 방식으로 자격 증명을 보관할 수 있습니다. 기본 데스크톱 또는 JavaScript SPA 애플리케이션과 같은 공개 애플리케이션은 시크릿을 안전하게 보관할 수 없습니다.","multi_account_warning_unknown":"생성한 거래 유형에 따라 뒤따르는 분할의 소스 및/또는 대상 계정은 대상 계정 거래의 첫 번째 분할에 정의된 내용에 따라 무시될 수 있습니다.","multi_account_warning_withdrawal":"뒤따르는 분할의 소스 계정은 첫 번째 출금 분할에 정의된 내용에 따라 재정의된다는 점에 유의하시기 바랍니다.","multi_account_warning_deposit":"뒤따르는 분할의 대상 계정은 첫 번째 입금 분할에 정의된 내용에 따라 재정의된다는 점에 유의하시기 바랍니다.","multi_account_warning_transfer":"뒤따르는 분할의 소스 + 대상 계정은 첫 번째 이체 분할에 정의된 내용에 따라 재정의된다는 점에 유의하시기 바랍니다.","webhook_trigger_STORE_TRANSACTION":"거래 생성 이후","webhook_trigger_UPDATE_TRANSACTION":"거래 업데이트 이후","webhook_trigger_DESTROY_TRANSACTION":"거래 삭제 이후","webhook_response_TRANSACTIONS":"거래 세부 정보","webhook_response_ACCOUNTS":"계정 정보","webhook_response_none_NONE":"상세정보 없음","webhook_delivery_JSON":"JSON","actions":"액션","meta_data":"메타데이터","webhook_messages":"웹훅 메시지","inactive":"비활성화","no_webhook_messages":"웹훅 메시지 없음","inspect":"검사","create_new_webhook":"웹훅 만들기","webhooks":"웹훅","webhook_trigger_form_help":"웹훅이 트리거할 이벤트를 표시합니다","webhook_response_form_help":"웹훅이 URL에 제출해야 하는 내용을 표시합니다.","webhook_delivery_form_help":"웹훅이 데이터를 전달해야 하는 형식입니다.","webhook_active_form_help":"웹훅이 활성화되어 있어야 하며 그렇지 않으면 호출되지 않습니다.","edit_webhook_js":"\\"{title}\\" 웹훅 수정","webhook_was_triggered":"표시된 거래에서 웹훅이 트리거되었습니다. 결과가 나타날 때까지 기다려주세요.","view_message":"메시지 보기","view_attempts":"실패한 시도 보기","message_content_title":"웹훅 메시지 내용","message_content_help":"이 웹훅을 사용하여 전송된(또는 시도한) 메시지의 내용입니다.","attempt_content_title":"웹훅 시도","attempt_content_help":"구성된 URL에 제출하려는 이 웹훅 메시지의 모든 실패한 시도입니다. 잠시 후 Firefly III가 시도를 중지합니다.","no_attempts":"실패한 시도가 없습니다. 좋은 일이네요!","webhook_attempt_at":"{moment}에 시도","logs":"로그","response":"응답","visit_webhook_url":"웹훅 URL 방문","reset_webhook_secret":"웹훅 시크릿 재설정"},"form":{"url":"URL","active":"활성","interest_date":"이자 날짜","title":"제목","book_date":"예약일","process_date":"처리일","due_date":"기한","foreign_amount":"외화 금액","payment_date":"결제일","invoice_date":"청구서 날짜","internal_reference":"내부 참조","webhook_response":"응답","webhook_trigger":"트리거","webhook_delivery":"전달"},"list":{"active":"활성 상태입니까?","trigger":"트리거","response":"응답","delivery":"전달","url":"URL","secret":"Secret"},"config":{"html_language":"ko","date_time_fns":"YYYY년 M월 D일 HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/nb.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/nb.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Hvordan går det?","flash_error":"Feil!","flash_warning":"Advarsel!","flash_success":"Suksess!","close":"Lukk","split_transaction_title":"Beskrivelse av den splittende transaksjon","errors_submission":"Noe gikk galt med innleveringen. Vennligst sjekk ut feilene.","split":"Del opp","single_split":"Del opp","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaksjon #{ID} (\\"{title}\\")</a> har blitt lagret.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> er lagret.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") er oppdatert.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaksjon #{ID} (\\"{title}\\")</a> har blitt oppdatert.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaksjon #{ID}</a> har blitt lagret.","transaction_journal_information":"Transaksjonsinformasjon","submission_options":"Alternativer for innsending","apply_rules_checkbox":"Bruk regler","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Det ser ikke ut til at du har noen budsjetter ennå. Du bør opprette noen på <a href=\\"/budgets\\">budsjett</a>-siden. Budsjetter kan hjelpe deg med å holde oversikt over utgifter.","no_bill_pointer":"Det ser ut til at du ikke har noen regninger ennå. Du bør opprette noen på <a href=\\"bills\\">regninger</a>-side. Regninger kan hjelpe deg med å holde oversikt over utgifter.","source_account":"Kildekonto","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Destinasjonskonto","add_another_split":"Legg til en oppdeling til","submission":"Submission","create_another":"Gå tilbake hit etter lagring for å opprette en ny.","reset_after":"Nullstill skjema etter innsending","submit":"Send inn","amount":"Beløp","date":"Dato","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tagger","no_budget":"(ingen budsjett)","no_bill":"(ingen regning)","category":"Kategori","attachments":"Vedlegg","notes":"Notater","external_url":"Ekstern URL","update_transaction":"Oppdater transaksjonen","after_update_create_another":"Gå tilbake hit etter oppdatering, for å fortsette å redigere.","store_as_new":"Lagre som en ny transaksjon istedenfor å oppdatere.","split_title_help":"Hvis du oppretter en splittet transaksjon, må du ha en global beskrivelse for alle deler av transaksjonen.","none_in_select_list":"(ingen)","no_piggy_bank":"(ingen sparegriser)","description":"Beskrivelse","split_transaction_title_help":"Hvis du oppretter en splittet transaksjon, må du ha en hoved beskrivelse for alle deler av transaksjonen.","destination_account_reconciliation":"Du kan ikke redigere kildekontoen for en avstemmingstransaksjon.","source_account_reconciliation":"Du kan ikke redigere kildekontoen for en avstemmingstransaksjon.","budget":"Busjett","bill":"Regning","you_create_withdrawal":"Du lager et uttak.","you_create_transfer":"Du lager en overføring.","you_create_deposit":"Du lager en innskud.","edit":"Rediger","delete":"Slett","name":"Navn","profile_whoops":"Whoops!","profile_something_wrong":"Noe gikk galt!","profile_try_again":"Noe gikk galt. Prøv på nytt.","profile_oauth_clients":"OAuth klienter","profile_oauth_no_clients":"Du har ikke opprettet noen OAuth klienter.","profile_oauth_clients_header":"Klienter","profile_oauth_client_id":"Klient-ID","profile_oauth_client_name":"Navn","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Opprett Ny Klient","profile_oauth_create_client":"Opprett Klient","profile_oauth_edit_client":"Rediger Klient","profile_oauth_name_help":"Noe brukerne dine vil gjenkjenne og stole på.","profile_oauth_redirect_url":"Videresendings-URL","profile_oauth_clients_external_auth":"Hvis du bruker en ekstern autentiseringsleverandør, som Authelia, vil ikke OAuth klienter fungere. Du kan bare bruke personlige tilgangstokener.","profile_oauth_redirect_url_help":"Programmets tilbakekallingslenke til din adresse.","profile_authorized_apps":"Dine autoriserte applikasjoner","profile_authorized_clients":"Autoriserte klienter","profile_scopes":"Omfang","profile_revoke":"Tilbakekall","profile_personal_access_tokens":"Personlig tilgangsnøkkel (Tokens)","profile_personal_access_token":"Personlig tilgangsnøkkel (Token)","profile_personal_access_token_explanation":"Her er din nye klient \\"secret\\". Dette er den eneste tiden det blir vist så ikke mister den! Du kan nå bruke denne token til å lage API-forespørsler.","profile_no_personal_access_token":"Du har ikke opprettet noen personlig tilgangsnøkkel (tokens).","profile_create_new_token":"Opprette nytt token","profile_create_token":"Opprett token","profile_create":"Opprett","profile_save_changes":"Lagre endringer","default_group_title_name":"(ikke gruppert)","piggy_bank":"Sparegris","profile_oauth_client_secret_title":"Klient hemmilghet","profile_oauth_client_secret_expl":"Her er din nye klient hemmelighet. Dette er den eneste tiden det blir vist så ikke mister den! Du kan nå bruke denne hemmeligheten til å lage API-forespørsler.","profile_oauth_confidential":"Konfidensiell","profile_oauth_confidential_help":"Krev at klienten godkjenner med en \\"secret\\". Konfidensielle klienter kan holde legitimasjon på en sikker måte uten å utsette dem for uautoriserte parter. Offentlige programmer, som skrivebord eller JavaScript SPA-programmer, kan ikke holde secret \\"sikret\\".","multi_account_warning_unknown":"Avhengig av hvilken type transaksjon du oppretter, Kilden og/eller destinasjonskonto for etterfølgende delinger kan overstyres av det som er definert i transaksjonens første del.","multi_account_warning_withdrawal":"Husk at kildekontoen for etterfølgende oppsplitting skal overlates av hva som defineres i den første delen av uttrekket.","multi_account_warning_deposit":"Husk at mottakerkontoen for etterfølgende oppsplitting skal overstyres av det som er definert i den første delen av depositumet.","multi_account_warning_transfer":"Husk at kildens pluss destinasjonskonto med etterfølgende oppdeling overstyres av det som er definert i en første del av overføringen.","webhook_trigger_STORE_TRANSACTION":"Etter transaksjons opprettelse","webhook_trigger_UPDATE_TRANSACTION":"Etter transaksjons oppdatering","webhook_trigger_DESTROY_TRANSACTION":"Etter transaksjons sletting","webhook_response_TRANSACTIONS":"Transaksjonsdetaljer","webhook_response_ACCOUNTS":"Kontodetaljer","webhook_response_none_NONE":"Ingen detaljer","webhook_delivery_JSON":"JSON","actions":"Handlinger","meta_data":"Metadata","webhook_messages":"Webhook melding","inactive":"Inaktiv","no_webhook_messages":"Ingen Webhook meldinger","inspect":"Inspiser","create_new_webhook":"Opprett ny Webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Hvilken hendelse skal Webhook utløse","webhook_response_form_help":"Hva skal Webhook sende til URL.","webhook_delivery_form_help":"Hvilket format skal Webhook sende data i.","webhook_active_form_help":"Webhook må aktiveres for å virke.","edit_webhook_js":"Rediger Webhook \\"{title}\\"","webhook_was_triggered":"Webhook ble trigget på den angitte transaksjonen. Vennligst vent på resultatet.","view_message":"Vis melding","view_attempts":"Vis mislykkede forsøk","message_content_title":"Webhook meldingsinnhold","message_content_help":"Dette er innholdet av meldingen som ble sendt (eller forsøkt sendt) med denne Webhook.","attempt_content_title":"Webhook forsøk","attempt_content_help":"Dette er alle mislykkede forsøk på denne webhook-meldingen som sendes til den konfigurerte URL-en. Etter en tid vil Firefly III slutte å prøve.","no_attempts":"Det er ingen mislykkede forsøk. Det er god ting!","webhook_attempt_at":"Forsøk på {moment}","logs":"Logger","response":"Respons","visit_webhook_url":"Besøk URL til webhook","reset_webhook_secret":"Tilbakestill Webhook nøkkel"},"form":{"url":"Nettadresse","active":"Aktiv","interest_date":"Rentedato","title":"Tittel","book_date":"Bokføringsdato","process_date":"Prosesseringsdato","due_date":"Forfallsdato","foreign_amount":"Utenlandske beløp","payment_date":"Betalingsdato","invoice_date":"Fakturadato","internal_reference":"Intern referanse","webhook_response":"Respons","webhook_trigger":"Utløser","webhook_delivery":"Levering"},"list":{"active":"Er aktiv?","trigger":"Utløser","response":"Respons","delivery":"Levering","url":"Nettadresse","secret":"Hemmelighet"},"config":{"html_language":"nb","date_time_fns":"do MMMM, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/nl.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/nl.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Hoe staat het er voor?","flash_error":"Fout!","flash_warning":"Waarschuwing!","flash_success":"Gelukt!","close":"Sluiten","split_transaction_title":"Beschrijving van de gesplitste transactie","errors_submission":"Er ging iets mis. Check de errors.","split":"Splitsen","single_split":"Split","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transactie #{ID} (\\"{title}\\")</a> is opgeslagen.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} ({title})</a> is opgeslagen.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} ({title})</a> is geüpdatet.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transactie #{ID}</a> (\\"{title}\\") is geüpdatet.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transactie #{ID}</a> is opgeslagen.","transaction_journal_information":"Transactieinformatie","submission_options":"Inzending opties","apply_rules_checkbox":"Regels toepassen","fire_webhooks_checkbox":"Webhooks starten","no_budget_pointer":"Je hebt nog geen budgetten. Maak er een aantal op de <a href=\\"budgets\\">budgetten</a>-pagina. Met budgetten kan je je uitgaven beter bijhouden.","no_bill_pointer":"Je hebt nog geen contracten. Maak er een aantal op de <a href=\\"bills\\">contracten</a>-pagina. Met contracten kan je je uitgaven beter bijhouden.","source_account":"Bronrekening","hidden_fields_preferences":"Je kan meer transactieopties inschakelen in je <a href=\\"preferences\\">instellingen</a>.","destination_account":"Doelrekening","add_another_split":"Voeg een split toe","submission":"Indienen","create_another":"Terug naar deze pagina voor een nieuwe transactie.","reset_after":"Reset formulier na opslaan","submit":"Invoeren","amount":"Bedrag","date":"Datum","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tags","no_budget":"(geen budget)","no_bill":"(geen contract)","category":"Categorie","attachments":"Bijlagen","notes":"Notities","external_url":"Externe URL","update_transaction":"Update transactie","after_update_create_another":"Na het opslaan terug om door te gaan met wijzigen.","store_as_new":"Opslaan als nieuwe transactie ipv de huidige bij te werken.","split_title_help":"Als je een gesplitste transactie maakt, moet er een algemene beschrijving zijn voor alle splitsingen van de transactie.","none_in_select_list":"(geen)","no_piggy_bank":"(geen spaarpotje)","description":"Omschrijving","split_transaction_title_help":"Als je een gesplitste transactie maakt, moet er een algemene beschrijving zijn voor alle splitsingen van de transactie.","destination_account_reconciliation":"Je kan de doelrekening van een afstemming niet wijzigen.","source_account_reconciliation":"Je kan de bronrekening van een afstemming niet wijzigen.","budget":"Budget","bill":"Contract","you_create_withdrawal":"Je maakt een uitgave.","you_create_transfer":"Je maakt een overschrijving.","you_create_deposit":"Je maakt inkomsten.","edit":"Wijzig","delete":"Verwijder","name":"Naam","profile_whoops":"Oeps!","profile_something_wrong":"Er is iets mis gegaan!","profile_try_again":"Er is iets misgegaan. Probeer het nogmaals.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"Je hebt nog geen OAuth-clients aangemaakt.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Naam","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Nieuwe client aanmaken","profile_oauth_create_client":"Client aanmaken","profile_oauth_edit_client":"Client bewerken","profile_oauth_name_help":"Iets dat je gebruikers herkennen en vertrouwen.","profile_oauth_redirect_url":"Redirect-URL","profile_oauth_clients_external_auth":"Als je een externe verificatieprovider zoals Authelia gebruikt, dan zullen OAuth Clients niet werken. Je kan alleen persoonlijke toegangstokens gebruiken.","profile_oauth_redirect_url_help":"De authorisatie-callback-url van jouw applicatie.","profile_authorized_apps":"Geautoriseerde toepassingen","profile_authorized_clients":"Geautoriseerde clients","profile_scopes":"Scopes","profile_revoke":"Intrekken","profile_personal_access_tokens":"Persoonlijke toegangstokens","profile_personal_access_token":"Persoonlijk toegangstoken","profile_personal_access_token_explanation":"Hier is je nieuwe persoonlijke toegangstoken. Dit is de enige keer dat deze getoond wordt dus verlies deze niet! Je kan deze toegangstoken gebruiken om API-aanvragen te maken.","profile_no_personal_access_token":"Je hebt nog geen persoonlijke toegangstokens aangemaakt.","profile_create_new_token":"Nieuwe token aanmaken","profile_create_token":"Token aanmaken","profile_create":"Creër","profile_save_changes":"Aanpassingen opslaan","default_group_title_name":"(ongegroepeerd)","piggy_bank":"Spaarpotje","profile_oauth_client_secret_title":"Client secret","profile_oauth_client_secret_expl":"Hier is je nieuwe client secret. Dit is de enige keer dat deze getoond wordt dus verlies deze niet! Je kan dit secret gebruiken om API-aanvragen te maken.","profile_oauth_confidential":"Vertrouwelijk","profile_oauth_confidential_help":"Dit vinkje is bedoeld voor applicaties die geheimen kunnen bewaren. Applicaties zoals sommige desktop-apps en Javascript apps kunnen dit niet. In zo\'n geval haal je het vinkje weg.","multi_account_warning_unknown":"Afhankelijk van het type transactie wordt de bron- en/of doelrekening overschreven door wat er in de eerste split staat.","multi_account_warning_withdrawal":"De bronrekening wordt overschreven door wat er in de eerste split staat.","multi_account_warning_deposit":"De doelrekening wordt overschreven door wat er in de eerste split staat.","multi_account_warning_transfer":"De bron + doelrekening wordt overschreven door wat er in de eerste split staat.","webhook_trigger_STORE_TRANSACTION":"Na het maken van een transactie","webhook_trigger_UPDATE_TRANSACTION":"Na het updaten van een transactie","webhook_trigger_DESTROY_TRANSACTION":"Na het verwijderen van een transactie","webhook_response_TRANSACTIONS":"Transactiedetails","webhook_response_ACCOUNTS":"Rekeningdetails","webhook_response_none_NONE":"Geen details","webhook_delivery_JSON":"JSON","actions":"Acties","meta_data":"Metagegevens","webhook_messages":"Webhook-bericht","inactive":"Niet actief","no_webhook_messages":"Er zijn geen webhook-berichten","inspect":"Inspecteren","create_new_webhook":"Maak nieuwe webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Geef aan bij welke gebeurtenis de webhook afgaat","webhook_response_form_help":"Geef aan wat de webhook mee moet sturen.","webhook_delivery_form_help":"Geef aan welk dataformaat gebruikt moet worden.","webhook_active_form_help":"De webhook moet actief zijn anders doet-ie het niet.","edit_webhook_js":"Webhook \\"{title}\\" wijzigen","webhook_was_triggered":"De webhook is getriggerd op de aangegeven transactie. Het resultaat zie je zometeen.","view_message":"Bekijk bericht","view_attempts":"Bekijk mislukte pogingen","message_content_title":"Inhoud van webhook-bericht","message_content_help":"Dit is de inhoud van het bericht dat verzonden was (of niet) met behulp van deze webhook.","attempt_content_title":"Webhookpogingen","attempt_content_help":"Dit zijn alle mislukte pogingen van de webhook om data te versturen. Na een paar keer stopt Firefly III met proberen.","no_attempts":"Er zijn geen mislukte pogingen. Lekker toch?","webhook_attempt_at":"Poging op {moment}","logs":"Logboeken","response":"Reactie","visit_webhook_url":"Bezoek URL van webhook","reset_webhook_secret":"Reset webhook-geheim"},"form":{"url":"URL","active":"Actief","interest_date":"Rentedatum","title":"Titel","book_date":"Boekdatum","process_date":"Verwerkingsdatum","due_date":"Vervaldatum","foreign_amount":"Bedrag in vreemde valuta","payment_date":"Betalingsdatum","invoice_date":"Factuurdatum","internal_reference":"Interne verwijzing","webhook_response":"Reactie","webhook_trigger":"Trigger","webhook_delivery":"Bericht"},"list":{"active":"Actief?","trigger":"Trigger","response":"Reactie","delivery":"Bericht","url":"URL","secret":"Geheim"},"config":{"html_language":"nl","date_time_fns":"D MMMM yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/nn.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/nn.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Korleis går det?","flash_error":"Feil!","flash_warning":"Advarsel!","flash_success":"Suksess!","close":"Lukk","split_transaction_title":"Beskrivinga av den splitta transaksjonen","errors_submission":"Noko gjekk gale med innleveringa. Ver venleg å sjekk feila.","split":"Del opp","single_split":"Del opp","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaksjon #{ID} (\\"{title}\\")</a> har vorte lagra.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> er lagra.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") er oppdatert.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaksjon #{ID} (\\"{title}\\")</a> har vorte oppdatert.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaksjon #{ID}</a> har vorte lagra.","transaction_journal_information":"Transaksjonsinformasjon","submission_options":"Alternativer for innsending","apply_rules_checkbox":"Bruk reglar","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Det ser ikkje ut til at du har budsjett enda. Du bør oppretta nokon på <a href=\\"/budgets\\">budsjett</a>-sida. Budsjett kan hjelpa deg med å halda oversikt over utgifter.","no_bill_pointer":"Det ser ut til at du ikkje har nokon rekningar enda. Du bør oppretta nokon på <a href=\\"bills\\">rekningar</a>-side. Rekningar kan hjelpa deg med å holde oversikt over utgifter.","source_account":"Kjeldekonto","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Målkonto","add_another_split":"Legg til ein oppdeling til","submission":"Submission","create_another":"Gå tilbake hit etter lagring for å oppretta ein ny.","reset_after":"Nullstill skjema etter innsending","submit":"Send inn","amount":"Beløp","date":"Dato","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Nøkkelord","no_budget":"(ingen budsjett)","no_bill":"(ingen rekning)","category":"Kategori","attachments":"Vedlegg","notes":"Notat","external_url":"Ekstern URL","update_transaction":"Oppdater transaksjonen","after_update_create_another":"Gå tilbake hit etter oppdatering, for å fortsetja å redigera.","store_as_new":"Lagra som ein ny transaksjon istedenfor å oppdatera.","split_title_help":"Om du oppretter ein splittet transaksjon, må du ha ein global beskriving for alle deler av transaksjonen.","none_in_select_list":"(ingen)","no_piggy_bank":"(ingen sparegriser)","description":"Beskriving","split_transaction_title_help":"Om du oppretter ein splittet transaksjon, må du ha ein hoved beskriving for alle deler av transaksjonen.","destination_account_reconciliation":"Du kan ikkje redigera kildekontoen for ein avstemmingstransaksjon.","source_account_reconciliation":"Du kan ikkje redigera kildekontoen for ein avstemmingstransaksjon.","budget":"Budsjett","bill":"Rekning","you_create_withdrawal":"Du lager eit uttak.","you_create_transfer":"Du lager ein overføring.","you_create_deposit":"Du lager ein innskud.","edit":"Rediger","delete":"Slett","name":"Namn","profile_whoops":"Oisann!","profile_something_wrong":"Noko gjekk gale!","profile_try_again":"Noko gjekk gale. Prøv på nytt.","profile_oauth_clients":"OAuth klienter","profile_oauth_no_clients":"Du har ikkje oppretta nokon OAuth klienter.","profile_oauth_clients_header":"Klienter","profile_oauth_client_id":"Klient-ID","profile_oauth_client_name":"Namn","profile_oauth_client_secret":"Hemmelegheit","profile_oauth_create_new_client":"Opprett Ny Klient","profile_oauth_create_client":"Opprett Klient","profile_oauth_edit_client":"Rediger Klient","profile_oauth_name_help":"Noko brukarane dine vil gjenkjenne og stole på.","profile_oauth_redirect_url":"Videresendings-URL","profile_oauth_clients_external_auth":"Om du brukar ein ekstern autentiseringsleverandør som Authelia, vil ikkje OAuth klientar fungera. Du kan berre bruka personlege tilgangsnøklar.","profile_oauth_redirect_url_help":"Programmets tilbakekallingslenkje for autorisering.","profile_authorized_apps":"Dine autoriserte applikasjoner","profile_authorized_clients":"Autoriserte klienter","profile_scopes":"Omfang","profile_revoke":"Tilbakekall","profile_personal_access_tokens":"Personleg tilgangsnøkkel","profile_personal_access_token":"Personleg tilgangsnøkkel","profile_personal_access_token_explanation":"Her er din nye personlege tilgangsnøkkel. Dette er den einaste gongen han vert vist så ikkje mist han! Du kan no bruka tilgangsnøkkelen til å laga API-spørsmål.","profile_no_personal_access_token":"Du har ikkje oppretta personlege tilgangsnøklar.","profile_create_new_token":"Opprette nytt token","profile_create_token":"Opprett token","profile_create":"Opprett","profile_save_changes":"Lagra endringer","default_group_title_name":"(ikkje gruppert)","piggy_bank":"Sparegris","profile_oauth_client_secret_title":"Klient Hemmelegheit","profile_oauth_client_secret_expl":"Her er din nye klienthemmelegheit. Dette er den einaste gongen han vert vist så ikkje mist han! Du kan bruka denne hemmeligheita til å laga API-spørsmål.","profile_oauth_confidential":"Konfidensiell","profile_oauth_confidential_help":"Krev at klienten godkjenner med ein hemmelegheit. Konfidensielle klienter kan halde legitimasjon på ein sikker måte uten å utsette dei for uautoriserte parter. Offentlige programmer, som skrivebord eller JavaScript SPA-programmer er ikkje istand til å halda hemmelegheiter sikra.","multi_account_warning_unknown":"Avhengig av kva type transaksjon du opprettar, Kjelde og/eller målkonto for etterfølgande delingar kan overstyrast av det som er definert i transaksjonens første del.","multi_account_warning_withdrawal":"Husk at kildekontoen for etterfølgende oppsplitting skal overlates av kva som defineres i den første delen av uttrekket.","multi_account_warning_deposit":"Husk at mottakerkontoen for etterfølgende oppsplitting skal overstyres av det som er definert i den første delen av depositumet.","multi_account_warning_transfer":"Husk at kildens pluss destinasjonskonto med etterfølgende oppdeling overstyres av det som er definert i ein første del av overføringen.","webhook_trigger_STORE_TRANSACTION":"Etter transaksjons opprettelse","webhook_trigger_UPDATE_TRANSACTION":"Etter transaksjons oppdatering","webhook_trigger_DESTROY_TRANSACTION":"Etter transaksjons sletting","webhook_response_TRANSACTIONS":"Transaksjonsdetaljer","webhook_response_ACCOUNTS":"Kontodetaljer","webhook_response_none_NONE":"Ingen detaljer","webhook_delivery_JSON":"JSON","actions":"Handlinger","meta_data":"Metadata","webhook_messages":"Webhook melding","inactive":"Inaktiv","no_webhook_messages":"Ingen Webhook meldingar","inspect":"Inspiser","create_new_webhook":"Opprett ny Webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Kva for ei hending skal Webhook utløysa","webhook_response_form_help":"Kva skal Webhook må senda til URL.","webhook_delivery_form_help":"Kva format skal Webhook sende data i.","webhook_active_form_help":"Webhook må aktiverast for å fungera.","edit_webhook_js":"Rediger Webhook \\"{title}\\"","webhook_was_triggered":"Webhook vart trigget på den angitte transaksjonen. Ver venleg å vent på resultatet.","view_message":"Vis melding","view_attempts":"Vis mislykkede forsøk","message_content_title":"Webhook meldingsinnhold","message_content_help":"Dette er innhaldet av meldinga som vart sendt (eller forsøkt sendt) med denne Webhook.","attempt_content_title":"Webhook forsøk","attempt_content_help":"Dette er alle mislykkede forsøk på denne webhook-meldinga som vert sendt til den konfigurerte URL-en. Etter ein tid vil Firefly III slutta å prøve.","no_attempts":"Det er ingen mislykkede forsøk. Det er god ting!","webhook_attempt_at":"Forsøk på {moment}","logs":"Logger","response":"Respons","visit_webhook_url":"Besøk URL til webhook","reset_webhook_secret":"Tilbakestill Webhook hemmelegheit"},"form":{"url":"Nettadresse","active":"Aktiv","interest_date":"Rentedato","title":"Tittel","book_date":"Bokføringsdato","process_date":"Prosesseringsdato","due_date":"Forfallsdato","foreign_amount":"Utenlandske beløp","payment_date":"Betalingsdato","invoice_date":"Fakturadato","internal_reference":"Intern referanse","webhook_response":"Respons","webhook_trigger":"Utløser","webhook_delivery":"Levering"},"list":{"active":"Er aktiv?","trigger":"Utløser","response":"Respons","delivery":"Levering","url":"Nettadresse","secret":"Hemmelegheit"},"config":{"html_language":"nn","date_time_fns":"do MMMM, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/pl.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/pl.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Co jest grane?","flash_error":"Błąd!","flash_warning":"Ostrzeżenie!","flash_success":"Sukces!","close":"Zamknij","split_transaction_title":"Opis podzielonej transakcji","errors_submission":"Coś poszło nie tak w czasie zapisu. Proszę sprawdź błędy.","split":"Podziel","single_split":"Podział","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transakcja #{ID} (\\"{title}\\")</a> została zapisana.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> został zapisany.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") został zaktualizowany.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transakcja #{ID}</a> (\\"{title}\\") została zaktualizowana.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transakcja #{ID}</a> została zapisana.","transaction_journal_information":"Informacje o transakcji","submission_options":"Opcje zapisu","apply_rules_checkbox":"Zastosuj reguły","fire_webhooks_checkbox":"Uruchom webhooki","no_budget_pointer":"Wygląda na to, że nie masz jeszcze budżetów. Powinieneś utworzyć kilka na stronie <a href=\\"budgets\\">budżetów</a>. Budżety mogą Ci pomóc śledzić wydatki.","no_bill_pointer":"Wygląda na to, że nie masz jeszcze rachunków. Powinieneś utworzyć kilka na stronie <a href=\\"bills\\">rachunków</a>. Rachunki mogą Ci pomóc śledzić wydatki.","source_account":"Konto źródłowe","hidden_fields_preferences":"Możesz włączyć więcej opcji transakcji w swoich <a href=\\"preferences\\">ustawieniach</a>.","destination_account":"Konto docelowe","add_another_split":"Dodaj kolejny podział","submission":"Zapisz","create_another":"Po zapisaniu wróć tutaj, aby utworzyć kolejny.","reset_after":"Wyczyść formularz po zapisaniu","submit":"Prześlij","amount":"Kwota","date":"Data","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tagi","no_budget":"(brak budżetu)","no_bill":"(brak rachunku)","category":"Kategoria","attachments":"Załączniki","notes":"Notatki","external_url":"Zewnętrzny adres URL","update_transaction":"Zaktualizuj transakcję","after_update_create_another":"Po aktualizacji wróć tutaj, aby kontynuować edycję.","store_as_new":"Zapisz jako nową zamiast aktualizować.","split_title_help":"Podzielone transakcje muszą posiadać globalny opis.","none_in_select_list":"(żadne)","no_piggy_bank":"(brak skarbonki)","description":"Opis","split_transaction_title_help":"Jeśli tworzysz podzieloną transakcję, musi ona posiadać globalny opis dla wszystkich podziałów w transakcji.","destination_account_reconciliation":"Nie możesz edytować konta docelowego transakcji uzgadniania.","source_account_reconciliation":"Nie możesz edytować konta źródłowego transakcji uzgadniania.","budget":"Budżet","bill":"Rachunek","you_create_withdrawal":"Tworzysz wydatek.","you_create_transfer":"Tworzysz przelew.","you_create_deposit":"Tworzysz wpłatę.","edit":"Modyfikuj","delete":"Usuń","name":"Nazwa","profile_whoops":"Uuuups!","profile_something_wrong":"Coś poszło nie tak!","profile_try_again":"Coś poszło nie tak. Spróbuj ponownie.","profile_oauth_clients":"Klienci OAuth","profile_oauth_no_clients":"Nie utworzyłeś żadnych klientów OAuth.","profile_oauth_clients_header":"Klienci","profile_oauth_client_id":"ID klienta","profile_oauth_client_name":"Nazwa","profile_oauth_client_secret":"Sekretny klucz","profile_oauth_create_new_client":"Utwórz nowego klienta","profile_oauth_create_client":"Utwórz klienta","profile_oauth_edit_client":"Edytuj klienta","profile_oauth_name_help":"Coś, co Twoi użytkownicy będą rozpoznawać i ufać.","profile_oauth_redirect_url":"Przekierowanie URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Adres URL wywołania zwrotnego autoryzacji aplikacji.","profile_authorized_apps":"Autoryzowane aplikacje","profile_authorized_clients":"Autoryzowani klienci","profile_scopes":"Zakresy","profile_revoke":"Unieważnij","profile_personal_access_tokens":"Osobiste tokeny dostępu","profile_personal_access_token":"Osobisty token dostępu","profile_personal_access_token_explanation":"Oto twój nowy osobisty token dostępu. Jest to jedyny raz, gdy zostanie wyświetlony, więc nie zgub go! Możesz teraz użyć tego tokenu, aby wykonać zapytania API.","profile_no_personal_access_token":"Nie utworzyłeś żadnych osobistych tokenów.","profile_create_new_token":"Utwórz nowy token","profile_create_token":"Utwórz token","profile_create":"Utwórz","profile_save_changes":"Zapisz zmiany","default_group_title_name":"(bez grupy)","piggy_bank":"Skarbonka","profile_oauth_client_secret_title":"Sekret klienta","profile_oauth_client_secret_expl":"Oto twój nowy sekret klienta. Jest to jedyny raz, gdy zostanie wyświetlony, więc nie zgub go! Możesz teraz użyć tego sekretu, aby wykonać zapytania API.","profile_oauth_confidential":"Poufne","profile_oauth_confidential_help":"Wymagaj od klienta uwierzytelnienia za pomocą sekretu. Poufni klienci mogą przechowywać poświadczenia w bezpieczny sposób bez narażania ich na dostęp przez nieuprawnione strony. Publiczne aplikacje, takie jak natywne aplikacje desktopowe lub JavaScript SPA, nie są w stanie bezpiecznie trzymać sekretów.","multi_account_warning_unknown":"W zależności od rodzaju transakcji, którą tworzysz, konto źródłowe i/lub docelowe kolejnych podziałów może zostać ustawione na konto zdefiniowane w pierwszym podziale transakcji.","multi_account_warning_withdrawal":"Pamiętaj, że konto źródłowe kolejnych podziałów zostanie ustawione na konto zdefiniowane w pierwszym podziale wypłaty.","multi_account_warning_deposit":"Pamiętaj, że konto docelowe kolejnych podziałów zostanie ustawione na konto zdefiniowane w pierwszym podziale wpłaty.","multi_account_warning_transfer":"Pamiętaj, że konta źródłowe i docelowe kolejnych podziałów zostaną ustawione na konto zdefiniowane w pierwszym podziale transferu.","webhook_trigger_STORE_TRANSACTION":"Po utworzeniu transakcji","webhook_trigger_UPDATE_TRANSACTION":"Po zmodyfikowaniu transakcji","webhook_trigger_DESTROY_TRANSACTION":"Po usunięciu transakcji","webhook_response_TRANSACTIONS":"Szczegóły transakcji","webhook_response_ACCOUNTS":"Szczegóły konta","webhook_response_none_NONE":"Brak szczegółów","webhook_delivery_JSON":"JSON","actions":"Akcje","meta_data":"Metadane","webhook_messages":"Wiadomość webhook\'a","inactive":"Nieaktywne","no_webhook_messages":"Brak wiadomości webhook","inspect":"Zbadaj","create_new_webhook":"Utwórz nowy webhook","webhooks":"Webhooki","webhook_trigger_form_help":"Wskaż zdarzenie do wyzwolenia webhook\'a","webhook_response_form_help":"Wskaż, co webhook musi przesłać do adresu URL.","webhook_delivery_form_help":"W jakim formacie webhook musi dostarczać dane.","webhook_active_form_help":"Webhook musi być aktywny lub nie zostanie wywołany.","edit_webhook_js":"Edytuj webhook \\"{title}\\"","webhook_was_triggered":"Webhook został uruchomiony na wskazanej transakcji. Poczekaj na wyniki.","view_message":"Podgląd wiadomości","view_attempts":"Podgląd nieudanych prób","message_content_title":"Treść wiadomości webhook\'a","message_content_help":"To jest zawartość wiadomości, która została wysłana (lub próbowano wysłać) za pomocą tego webhooka.","attempt_content_title":"Próby dostępu do webhook","attempt_content_help":"To są wszystkie nieudane próby przesłania tej wiadomości webhooka do skonfigurowanego adresu URL. Po pewnym czasie Firefly III przestanie próbować.","no_attempts":"Nie ma nieudanych prób. To dobrze!","webhook_attempt_at":"Próba o {moment}","logs":"Logi","response":"Odpowiedź","visit_webhook_url":"Odwiedź adres URL webhooka","reset_webhook_secret":"Resetuj sekret webhooka"},"form":{"url":"URL","active":"Aktywny","interest_date":"Data odsetek","title":"Tytuł","book_date":"Data księgowania","process_date":"Data przetworzenia","due_date":"Termin realizacji","foreign_amount":"Kwota zagraniczna","payment_date":"Data płatności","invoice_date":"Data faktury","internal_reference":"Wewnętrzny numer","webhook_response":"Odpowiedź","webhook_trigger":"Wyzwalacz","webhook_delivery":"Doręczenie"},"list":{"active":"Jest aktywny?","trigger":"Wyzwalacz","response":"Odpowiedź","delivery":"Doręczenie","url":"URL","secret":"Sekret"},"config":{"html_language":"pl","date_time_fns":"do MMMM yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/pt-br.json":
/*!************************************************!*\
  !*** ./resources/assets/js/locales/pt-br.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"O que está acontecendo?","flash_error":"Erro!","flash_warning":"Atenção!","flash_success":"Sucesso!","close":"Fechar","split_transaction_title":"Descrição da transação dividida","errors_submission":"Há algo de errado com o seu envio. Por favor, verifique os erros abaixo.","split":"Dividir","single_split":"Divisão","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transação #{ID} (\\"{title}\\")</a> foi salva.","webhook_stored_link":"<a href=\\"transactions/show/{ID}\\">Webhooh #{ID} (\\"{title}\\")</a> foi salva.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") foi atualizado.","transaction_updated_link":"A <a href=\\"transactions/show/{ID}\\">Transação #{ID}</a> (\\"{title}\\") foi atualizada.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transação #{ID}</a> foi salva.","transaction_journal_information":"Informação da transação","submission_options":"Opções de envio","apply_rules_checkbox":"Aplicar regras","fire_webhooks_checkbox":"Acionar webhooks","no_budget_pointer":"Parece que você ainda não tem orçamentos. Você deve criar alguns na página de <a href=\\"budgets\\">orçamentos</a>. Orçamentos podem ajudá-lo a manter o controle das despesas.","no_bill_pointer":"Parece que você ainda não tem faturas. Você deve criar algumas em <a href=\\"bills\\">faturas</a>. Faturas podem ajudar você a manter o controle de despesas.","source_account":"Conta origem","hidden_fields_preferences":"Você pode habilitar mais opções de transação em suas <a href=\\"preferences\\">preferências</a>.","destination_account":"Conta destino","add_another_split":"Adicionar outra divisão","submission":"Envio","create_another":"Depois de armazenar, retorne aqui para criar outro.","reset_after":"Limpar o formulário após o envio","submit":"Enviar","amount":"Valor","date":"Data","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Tags","no_budget":"(sem orçamento)","no_bill":"(sem fatura)","category":"Categoria","attachments":"Anexos","notes":"Notas","external_url":"URL externa","update_transaction":"Atualizar transação","after_update_create_another":"Depois de atualizar, retorne aqui para continuar editando.","store_as_new":"Armazene como uma nova transação em vez de atualizar.","split_title_help":"Se você criar uma transação dividida, é necessário haver uma descrição global para todas as partes da transação.","none_in_select_list":"(nenhum)","no_piggy_bank":"(nenhum cofrinho)","description":"Descrição","split_transaction_title_help":"Se você criar uma transação dividida, deve haver uma descrição global para todas as partes da transação.","destination_account_reconciliation":"Você não pode editar a conta de origem de uma transação de reconciliação.","source_account_reconciliation":"Você não pode editar a conta de origem de uma transação de reconciliação.","budget":"Orçamento","bill":"Fatura","you_create_withdrawal":"Você está criando uma saída.","you_create_transfer":"Você está criando uma transferência.","you_create_deposit":"Você está criando uma entrada.","edit":"Editar","delete":"Apagar","name":"Nome","profile_whoops":"Ops!","profile_something_wrong":"Alguma coisa deu errado!","profile_try_again":"Algo deu errado. Por favor tente novamente.","profile_oauth_clients":"Clientes OAuth","profile_oauth_no_clients":"Você não criou nenhum cliente OAuth.","profile_oauth_clients_header":"Clientes","profile_oauth_client_id":"ID do Cliente","profile_oauth_client_name":"Nome","profile_oauth_client_secret":"Segredo","profile_oauth_create_new_client":"Criar um novo cliente","profile_oauth_create_client":"Criar um cliente","profile_oauth_edit_client":"Editar cliente","profile_oauth_name_help":"Alguma coisa que seus usuários vão reconhecer e identificar.","profile_oauth_redirect_url":"URL de redirecionamento","profile_oauth_clients_external_auth":"Se você estiver usando um provedor de autenticação externo, como Authelia, clientes OAuth (como apps) não funcionarão. Você só poderá usar Tokens de Acesso Pessoal.","profile_oauth_redirect_url_help":"A URL de retorno da sua solicitação de autorização.","profile_authorized_apps":"Aplicativos autorizados","profile_authorized_clients":"Clientes autorizados","profile_scopes":"Escopos","profile_revoke":"Revogar","profile_personal_access_tokens":"Tokens de acesso pessoal","profile_personal_access_token":"Token de acesso pessoal","profile_personal_access_token_explanation":"Aqui está seu novo token de acesso pessoal. Esta é a única vez que ela será mostrada então não perca! Agora você pode usar esse token para fazer solicitações de API.","profile_no_personal_access_token":"Você não criou nenhum token de acesso pessoal.","profile_create_new_token":"Criar novo token","profile_create_token":"Criar token","profile_create":"Criar","profile_save_changes":"Salvar alterações","default_group_title_name":"(não agrupado)","piggy_bank":"Cofrinho","profile_oauth_client_secret_title":"Segredo do cliente","profile_oauth_client_secret_expl":"Aqui está o seu novo segredo de cliente. Esta é a única vez que ela será mostrada, então não o perca! Agora você pode usar este segredo para fazer requisições de API.","profile_oauth_confidential":"Confidencial","profile_oauth_confidential_help":"Exige que o cliente se autentique com um segredo. Clientes confidenciais podem manter credenciais de forma segura sem expô-las à partes não autorizadas. Aplicações públicas, como aplicações de área de trabalho nativas ou JavaScript SPA, são incapazes de manter segredos com segurança.","multi_account_warning_unknown":"Dependendo do tipo de transação que você criar, a conta de origem e/ou de destino das divisões subsequentes pode ser sobrescrita pelo que estiver definido na primeira divisão da transação.","multi_account_warning_withdrawal":"Tenha em mente que a conta de origem das subsequentes divisões será sobrescrita pelo que estiver definido na primeira divisão da saída.","multi_account_warning_deposit":"Tenha em mente que a conta de destino das divisões subsequentes será sobrescrita pelo que estiver definido na primeira divisão da entrada.","multi_account_warning_transfer":"Tenha em mente que a conta de origem + de destino das divisões subsequentes será sobrescrita pelo que for definido na primeira divisão da transferência.","webhook_trigger_STORE_TRANSACTION":"Após criação da transação","webhook_trigger_UPDATE_TRANSACTION":"Após atualização da transação","webhook_trigger_DESTROY_TRANSACTION":"Após exclusão da transação","webhook_response_TRANSACTIONS":"Detalhes da transação","webhook_response_ACCOUNTS":"Detalhes da conta","webhook_response_none_NONE":"Sem detalhes","webhook_delivery_JSON":"JSON","actions":"Ações","meta_data":"Meta dados","webhook_messages":"Mensagem do webhook","inactive":"Inativo","no_webhook_messages":"Não há mensagens de webhook","inspect":"Inspecionar","create_new_webhook":"Criar novo webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indica em que evento o webhook será acionado","webhook_response_form_help":"Indica o que o webhook deve enviar para a URL.","webhook_delivery_form_help":"Em que formato o webhook deverá entregar os dados.","webhook_active_form_help":"O webhook deverá estar ativo ou não será chamado.","edit_webhook_js":"Editar webhook \\"{title}\\"","webhook_was_triggered":"O webhook foi acionado na transação indicada. Por favor, aguarde os resultados aparecerem.","view_message":"Ver mensagem","view_attempts":"Ver tentativas que falharam","message_content_title":"Conteúdo da mensagem do webhook","message_content_help":"Este é o conteúdo da mensagem enviada (ou a tentativa) usando este webhook.","attempt_content_title":"Tentativas do webhook","attempt_content_help":"Estas são todas as tentativas mal sucedidas do webhook enviar mensagem para a URL configurada. Depois de algum tempo, Firefly III parará de tentar.","no_attempts":"Não há tentativas mal sucedidas. Esta é uma coisa boa!","webhook_attempt_at":"Tentativa em {moment}","logs":"Registros","response":"Resposta","visit_webhook_url":"Acesse a URL do webhook","reset_webhook_secret":"Redefinir chave do webhook"},"form":{"url":"URL","active":"Ativar","interest_date":"Data de interesse","title":"Título","book_date":"Data reserva","process_date":"Data de processamento","due_date":"Data de vencimento","foreign_amount":"Montante em moeda estrangeira","payment_date":"Data de pagamento","invoice_date":"Data da Fatura","internal_reference":"Referência interna","webhook_response":"Resposta","webhook_trigger":"Gatilho","webhook_delivery":"Entrega"},"list":{"active":"Está ativo?","trigger":"Gatilho","response":"Resposta","delivery":"Entrega","url":"URL","secret":"Chave"},"config":{"html_language":"pt-br","date_time_fns":"dd \'de\' MMMM \'de\' yyyy, \'às\' HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/pt.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/pt.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Painel de controlo","flash_error":"Erro!","flash_warning":"Aviso!","flash_success":"Sucesso!","close":"Fechar","split_transaction_title":"Descrição da transação dividida","errors_submission":"Aconteceu algo errado com a sua submissão. Por favor, verifique os erros.","split":"Dividir","single_split":"Divisão","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">A transação #{ID} (\\"{title}\\")</a> foi guardada.","webhook_stored_link":"<a href=\\"transactions/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> foi guardado.","webhook_updated_link":"<a href=\\"transactions/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> foi guardado.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">A transação #{ID}</a> (\\"{title}\\") foi atualizada.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">A transação#{ID}</a> foi guardada.","transaction_journal_information":"Informação da transação","submission_options":"Opções de submissão","apply_rules_checkbox":"Aplicar regras","fire_webhooks_checkbox":"Ativar webhooks","no_budget_pointer":"Parece que ainda não tem orçamentos. Pode criá-los na página de <a href=\\"budgets\\">orçamentos</a>. Os orçamentos podem ajudá-lo a controlar as despesas.","no_bill_pointer":"Parece que ainda não tem encargos. Pode criá-los na página de <a href=\\"bills\\">encargos</a>. Os Encargos podem ajudá-lo a controlar as despesas.","source_account":"Conta de origem","hidden_fields_preferences":"Pode ativar mais opções de transações nas suas <a href=\\"preferences\\">preferências</a>.","destination_account":"Conta de destino","add_another_split":"Adicionar outra divisão","submission":"Submissão","create_another":"Depois de guardar, voltar aqui para criar outra.","reset_after":"Reiniciar o formulário após o envio","submit":"Guardar","amount":"Montante","date":"Data","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Etiquetas","no_budget":"(sem orçamento)","no_bill":"(sem encargo)","category":"Categoria","attachments":"Anexos","notes":"Notas","external_url":"URL Externo","update_transaction":"Atualizar transação","after_update_create_another":"Após atualizar, regresse aqui para continuar a editar.","store_as_new":"Guarde como nova transação em vez de atualizar.","split_title_help":"Se criar uma transação dividida, deve haver uma descrição global para todas as partes da transação.","none_in_select_list":"(nenhum)","no_piggy_bank":"(nenhum mealheiro)","description":"Descrição","split_transaction_title_help":"Se criar uma transação dividida, deve haver uma descrição global para todas as partes da transação.","destination_account_reconciliation":"Não pode editar a conta de destino de uma transação de reconciliação.","source_account_reconciliation":"Não pode editar a conta de origem de uma transação de reconciliação.","budget":"Orçamento","bill":"Encargo","you_create_withdrawal":"Está a criar um levantamento.","you_create_transfer":"Está a criar uma transferência.","you_create_deposit":"Está a criar um depósito.","edit":"Editar","delete":"Eliminar","name":"Nome","profile_whoops":"Oops!","profile_something_wrong":"Algo correu mal!","profile_try_again":"Algo correu mal. Por favor, tente novamente.","profile_oauth_clients":"Clientes OAuth","profile_oauth_no_clients":"Não criou nenhum cliente OAuth.","profile_oauth_clients_header":"Clientes","profile_oauth_client_id":"ID do Cliente","profile_oauth_client_name":"Nome","profile_oauth_client_secret":"Segredo","profile_oauth_create_new_client":"Criar Novo Cliente","profile_oauth_create_client":"Criar Cliente","profile_oauth_edit_client":"Editar Cliente","profile_oauth_name_help":"Algo que os utilizadores reconheçam e confiem.","profile_oauth_redirect_url":"URL de redirecionamento","profile_oauth_clients_external_auth":"Se estivar a usar um provedor de autenticação externo, como o Authelia, os clientes OAuth não funcionarão. Só pode usar Tokens de Acesso Pessoal.","profile_oauth_redirect_url_help":"URL de callback de autorização da aplicação.","profile_authorized_apps":"Aplicações autorizadas","profile_authorized_clients":"Clientes autorizados","profile_scopes":"Contextos","profile_revoke":"Revogar","profile_personal_access_tokens":"Tokens de acesso pessoal","profile_personal_access_token":"Token de acesso pessoal","profile_personal_access_token_explanation":"Aqui está o seu novo token de acesso pessoal. Esta é a única vez que será mostrado, portanto, não o perca! Pode usá-lo para fazer pedidos à API.","profile_no_personal_access_token":"Ainda não criou tokens de acesso pessoal.","profile_create_new_token":"Criar novo token","profile_create_token":"Criar token","profile_create":"Criar","profile_save_changes":"Guardar alterações","default_group_title_name":"(não agrupado)","piggy_bank":"Mealheiro","profile_oauth_client_secret_title":"Segredo do cliente","profile_oauth_client_secret_expl":"Aqui está o seu segredo de cliente. Apenas estará visível uma vez, portanto não o perca! Pode agora utilizar este segredo para fazer pedidos à API.","profile_oauth_confidential":"Confidencial","profile_oauth_confidential_help":"Exigir que o cliente se autentique com um segredo. Clientes confidenciais podem manter credenciais de forma segura sem as expor a terceiros não autorizados. Aplicações públicas, tais como aplicações desktop nativas ou JavaScript SPA, são incapazes de garantir a segurança dos segredos.","multi_account_warning_unknown":"Dependendo do tipo de transação que criar, a conta de origem e/ou destino de subsequentes divisões pode ser sobrescrita pelo que estiver definido na primeira divisão da transação.","multi_account_warning_withdrawal":"Tenha presente que a conta de origem de divisões subsequentes será sobrescrita pelo que estiver definido na primeira divisão do levantamento.","multi_account_warning_deposit":"Tenha presente que a conta de destino de divisões subsequentes será sobrescrita pelo que estiver definida na primeira divisão do depósito.","multi_account_warning_transfer":"Tenha presenta que a conta de origem + destino de divisões subsequentes serão sobrescritas pelo que estiver definido na primeira divisão da transferência.","webhook_trigger_STORE_TRANSACTION":"Após criar transação","webhook_trigger_UPDATE_TRANSACTION":"Após atualizar transação","webhook_trigger_DESTROY_TRANSACTION":"Após eliminar transação","webhook_response_TRANSACTIONS":"Detalhes da transação","webhook_response_ACCOUNTS":"Detalhes da conta","webhook_response_none_NONE":"Sem dados","webhook_delivery_JSON":"JSON","actions":"Ações","meta_data":"Meta dados","webhook_messages":"Mensagem do webhook","inactive":"Inativo","no_webhook_messages":"Não existem mensagens novas","inspect":"Inspecionar","create_new_webhook":"Criar um novo webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicar em que evento o webhook será a acionado","webhook_response_form_help":"Indicar o que o webhook deve submeter para o URL.","webhook_delivery_form_help":"Em que formato deve o webhook entregar os dados.","webhook_active_form_help":"O webhook deve ser ativado ou não será acionado.","edit_webhook_js":"Editar webhook \\":title\\"","webhook_was_triggered":"O webhook foi acionado na transação indicada. Por favor, aguarde que os resultados surjam.","view_message":"Ver mensagem","view_attempts":"Ver tentativas falhadas","message_content_title":"Conteúdo da mensagem do webhook","message_content_help":"Este é o conteúdo da mensagem que foi enviada (ou se tentou enviar) usando este webhook.","attempt_content_title":"Tentativas de webhook","attempt_content_help":"Estas são todas as tentativas falhadas de envio desta mensagem webhook para o URL configurado. Após algum tempo, o Firefly vai deixar de tentar.","no_attempts":"Não há tentativas falhadas. Isso é bom!","webhook_attempt_at":"Tentativa em {moment}","logs":"Logs","response":"Respostas","visit_webhook_url":"Ir para URL do webhook","reset_webhook_secret":"Redefinir segredo webhook"},"form":{"url":"URL","active":"Ativo","interest_date":"Data de juros","title":"Título","book_date":"Data de registo","process_date":"Data de processamento","due_date":"Data de vencimento","foreign_amount":"Montante estrangeiro","payment_date":"Data de pagamento","invoice_date":"Data da fatura","internal_reference":"Referência interna","webhook_response":"Resposta","webhook_trigger":"Gatilho","webhook_delivery":"Entrega"},"list":{"active":"Esta ativo?","trigger":"Gatilho","response":"Resposta","delivery":"Entrega","url":"URL","secret":"Segredo"},"config":{"html_language":"pt","date_time_fns":"DO [de] MMMM YYYY, @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/ro.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/ro.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Ce se redă?","flash_error":"Eroare!","flash_warning":"Avertizare!","flash_success":"Succes!","close":"Închide","split_transaction_title":"Descrierea tranzacției divizate","errors_submission":"A fost ceva în neregulă cu depunerea ta. Te rugăm să verifici erorile.","split":"Împarte","single_split":"Împarte","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Tranzacția #{ID} (\\"{title}\\")</a> a fost stocată.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Tranzacția #{ID}</a> (\\"{title}\\") a fost actualizată.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Tranzacția #{ID}</a> a fost stocată.","transaction_journal_information":"Informații despre tranzacții","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Se pare că nu aveți încă bugete. Ar trebui să creați câteva pe pagina <a href=\\"/budgets\\">bugete</a>. Bugetele vă pot ajuta să țineți evidența cheltuielilor.","no_bill_pointer":"Se pare că nu aveți încă facturi. Ar trebui să creați unele pe pagina <a href=\\"bills\\">facturi</a>. Facturile vă pot ajuta să țineți evidența cheltuielilor.","source_account":"Contul sursă","hidden_fields_preferences":"Puteți activa mai multe opțiuni de tranzacție în <a href=\\"preferences\\">preferințele</a> dvs.","destination_account":"Contul de destinație","add_another_split":"Adăugați o divizare","submission":"Transmitere","create_another":"După stocare, reveniți aici pentru a crea alta.","reset_after":"Resetați formularul după trimitere","submit":"Trimite","amount":"Sumă","date":"Dată","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Etichete","no_budget":"(nici un buget)","no_bill":"(fără factură)","category":"Categorie","attachments":"Atașamente","notes":"Notițe","external_url":"URL extern","update_transaction":"Actualizați tranzacția","after_update_create_another":"După actualizare, reveniți aici pentru a continua editarea.","store_as_new":"Stocați ca o tranzacție nouă în loc să actualizați.","split_title_help":"Dacă creați o tranzacție divizată, trebuie să existe o descriere globală pentru toate diviziunile tranzacției.","none_in_select_list":"(nici unul)","no_piggy_bank":"(nicio pușculiță)","description":"Descriere","split_transaction_title_help":"Dacă creați o tranzacție divizată, trebuie să existe o descriere globală pentru toate diviziunile tranzacției.","destination_account_reconciliation":"Nu puteți edita contul de destinație al unei tranzacții de reconciliere.","source_account_reconciliation":"Nu puteți edita contul sursă al unei tranzacții de reconciliere.","budget":"Buget","bill":"Factură","you_create_withdrawal":"Creezi o retragere.","you_create_transfer":"Creezi un transfer.","you_create_deposit":"Creezi un depozit.","edit":"Editează","delete":"Șterge","name":"Nume","profile_whoops":"Hopaa!","profile_something_wrong":"A apărut o eroare!","profile_try_again":"A apărut o problemă. Încercați din nou.","profile_oauth_clients":"Clienți OAuth","profile_oauth_no_clients":"Nu ați creat niciun client OAuth.","profile_oauth_clients_header":"Clienți","profile_oauth_client_id":"ID Client","profile_oauth_client_name":"Nume","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Creare client nou","profile_oauth_create_client":"Creare client","profile_oauth_edit_client":"Editare client","profile_oauth_name_help":"Ceva ce utilizatorii vor recunoaște și vor avea încredere.","profile_oauth_redirect_url":"Redirectioneaza URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"URL-ul de retroapelare al aplicației dvs.","profile_authorized_apps":"Aplicațiile dvs autorizate","profile_authorized_clients":"Clienți autorizați","profile_scopes":"Domenii","profile_revoke":"Revocați","profile_personal_access_tokens":"Token de acces personal","profile_personal_access_token":"Token de acces personal","profile_personal_access_token_explanation":"Aici este noul dvs. token de acces personal. Este singura dată când va fi afișat așa că nu îl pierde! Acum poți folosi acest token pentru a face cereri API.","profile_no_personal_access_token":"Nu aţi creat nici un token personal de acces.","profile_create_new_token":"Crează un nou token","profile_create_token":"Crează token","profile_create":"Crează","profile_save_changes":"Salvează modificările","default_group_title_name":"(negrupat)","piggy_bank":"Pușculiță","profile_oauth_client_secret_title":"Secret client","profile_oauth_client_secret_expl":"Aici este noul tău cod secret de client. Este singura dată când va fi afișat așa că nu îl pierzi! Acum poți folosi acest cod pentru a face cereri API.","profile_oauth_confidential":"Confidenţial","profile_oauth_confidential_help":"Solicitați clientului să se autentifice cu un secret. Clienții confidențiali pot păstra acreditările într-un mod securizat fără a le expune unor părți neautorizate. Aplicațiile publice, cum ar fi aplicațiile native desktop sau JavaScript SPA, nu pot păstra secretele în siguranță.","multi_account_warning_unknown":"În funcție de tipul de tranzacție pe care o creați, contul sursei și/sau destinației fracționărilor ulterioare poate fi depășit cu orice se definește în prima împărțire a tranzacției.","multi_account_warning_withdrawal":"Reţineţi faptul că sursa scindărilor ulterioare va fi anulată de orice altceva definit în prima împărţire a retragerii.","multi_account_warning_deposit":"Țineți cont de faptul că destinația scindărilor ulterioare va fi depășită cu orice se definește la prima împărțire a depozitului.","multi_account_warning_transfer":"Reţineţi faptul că contul sursei + destinaţia fracţionărilor ulterioare va fi anulat de orice se defineşte în prima împărţire a transferului.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Acțiuni","meta_data":"Date meta","webhook_messages":"Webhook message","inactive":"Inactiv","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhook-uri","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Activ","interest_date":"Data de interes","title":"Titlu","book_date":"Rezervă dată","process_date":"Data procesării","due_date":"Data scadentă","foreign_amount":"Sumă străină","payment_date":"Data de plată","invoice_date":"Data facturii","internal_reference":"Referință internă","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Este activ?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"ro","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/ru.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/ru.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Что происходит с моими финансами?","flash_error":"Ошибка!","flash_warning":"Предупреждение!","flash_success":"Успешно!","close":"Закрыть","split_transaction_title":"Описание разделённой транзакции","errors_submission":"При отправке что-то пошло не так. Пожалуйста, проверьте ошибки ниже.","split":"Разделить","single_split":"Разделённая транзакция","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Транзакция #{ID} (\\"{title}\\")</a> сохранена.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Транзакция #{ID}</a> (\\"{title}\\") обновлена.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Транзакция #{ID}</a> сохранена.","transaction_journal_information":"Информация о транзакции","submission_options":"Опции отправки","apply_rules_checkbox":"Применить правила","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Похоже, у вас пока нет бюджетов. Вы должны создать их на странице <a href=\\"budgets\\">Бюджеты</a>. Бюджеты могут помочь вам отслеживать расходы.","no_bill_pointer":"Похоже, у вас пока нет счетов на оплату. Вы должны создать их на странице <a href=\\"bills\\">Счета на оплату</a>. Счета на оплату могут помочь вам отслеживать расходы.","source_account":"Счёт-источник","hidden_fields_preferences":"Вы можете включить больше параметров транзакции в <a href=\\"preferences\\">настройках</a>.","destination_account":"Счёт назначения","add_another_split":"Добавить еще одну часть","submission":"Отправить","create_another":"После сохранения вернуться сюда и создать ещё одну аналогичную запись.","reset_after":"Сбросить форму после отправки","submit":"Подтвердить","amount":"Сумма","date":"Дата","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Метки","no_budget":"(вне бюджета)","no_bill":"(нет счёта на оплату)","category":"Категория","attachments":"Вложения","notes":"Заметки","external_url":"Внешний URL-адрес","update_transaction":"Обновить транзакцию","after_update_create_another":"После обновления вернитесь сюда, чтобы продолжить редактирование.","store_as_new":"Сохранить как новую транзакцию вместо обновления.","split_title_help":"Если вы создаёте разделённую транзакцию, то должны указать общее описание дле всех её составляющих.","none_in_select_list":"(нет)","no_piggy_bank":"(нет копилки)","description":"Описание","split_transaction_title_help":"Если вы создаёте разделённую транзакцию, то должны указать общее описание для всех её составляющих.","destination_account_reconciliation":"Вы не можете редактировать счёт назначения для сверяемой транзакции.","source_account_reconciliation":"Вы не можете редактировать счёт-источник для сверяемой транзакции.","budget":"Бюджет","bill":"Счёт к оплате","you_create_withdrawal":"Вы создаёте расход.","you_create_transfer":"Вы создаёте перевод.","you_create_deposit":"Вы создаёте доход.","edit":"Изменить","delete":"Удалить","name":"Название","profile_whoops":"Ууупс!","profile_something_wrong":"Что-то пошло не так!","profile_try_again":"Произошла ошибка. Пожалуйста, попробуйте снова.","profile_oauth_clients":"Клиенты OAuth","profile_oauth_no_clients":"У вас пока нет клиентов OAuth.","profile_oauth_clients_header":"Клиенты","profile_oauth_client_id":"ID клиента","profile_oauth_client_name":"Название","profile_oauth_client_secret":"Секретный ключ","profile_oauth_create_new_client":"Создать нового клиента","profile_oauth_create_client":"Создать клиента","profile_oauth_edit_client":"Изменить клиента","profile_oauth_name_help":"Что-то, что ваши пользователи знают, и чему доверяют.","profile_oauth_redirect_url":"URL редиректа","profile_oauth_clients_external_auth":"Если вы используете внешний поставщик аутентификации, например Authelia, клиенты OAuth не будут работать. Вы можете использовать только персональные токены доступа.","profile_oauth_redirect_url_help":"URL обратного вызова для вашего приложения.","profile_authorized_apps":"Авторизованные приложения","profile_authorized_clients":"Авторизованные клиенты","profile_scopes":"Разрешения","profile_revoke":"Отключить","profile_personal_access_tokens":"Персональные Access Tokens","profile_personal_access_token":"Персональный Access Token","profile_personal_access_token_explanation":"Вот ваш новый персональный токен доступа. Он будет показан вам только сейчас, поэтому не потеряйте его! Теперь вы можете использовать этот токен, чтобы делать запросы по API.","profile_no_personal_access_token":"Вы не создали ни одного персонального токена доступа.","profile_create_new_token":"Создать новый токен","profile_create_token":"Создать токен","profile_create":"Создать","profile_save_changes":"Сохранить изменения","default_group_title_name":"(без группировки)","piggy_bank":"Копилка","profile_oauth_client_secret_title":"Ключ клиента","profile_oauth_client_secret_expl":"Вот ваш новый ключ клиента. Он будет показан вам только сейчас, поэтому не потеряйте его! Теперь вы можете использовать этот ключ, чтобы делать запросы по API.","profile_oauth_confidential":"Конфиденциальный","profile_oauth_confidential_help":"Требовать, чтобы клиент аутентифицировался с секретным ключом. Конфиденциальные клиенты могут хранить учётные данные в надёжном виде, защищая их от несанкционированного доступа. Публичные приложения, такие как обычный рабочий стол или приложения JavaScript SPA, не могут надёжно хранить ваши ключи.","multi_account_warning_unknown":"В зависимости от типа транзакции, которую вы создаёте, счёт-источник и/или счёт назначения следующих частей разделённой транзакции могут быть заменены теми, которые указаны для первой части транзакции.","multi_account_warning_withdrawal":"Имейте в виду, что счёт-источник в других частях разделённой транзакции будет таким же, как в первой части расхода.","multi_account_warning_deposit":"Имейте в виду, что счёт назначения в других частях разделённой транзакции будет таким же, как в первой части дохода.","multi_account_warning_transfer":"Имейте в виду, что счёт-источник и счёт назначения в других частях разделённой транзакции будут такими же, как в первой части перевода.","webhook_trigger_STORE_TRANSACTION":"После создания транзакции","webhook_trigger_UPDATE_TRANSACTION":"После обновления транзакции","webhook_trigger_DESTROY_TRANSACTION":"После удаления транзакции","webhook_response_TRANSACTIONS":"Детали операции","webhook_response_ACCOUNTS":"Сведения об учетной записи","webhook_response_none_NONE":"Нет подробных сведений","webhook_delivery_JSON":"JSON","actions":"Действия","meta_data":"Расширенные данные","webhook_messages":"Сообщение вебхука","inactive":"Неактивный","no_webhook_messages":"Нет сообщений от вебхуков","inspect":"Проинспектировать","create_new_webhook":"Создать новый вебхук","webhooks":"Веб-хуки","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Редактировать вебхук \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"Просмотр сообщения","view_attempts":"Просмотр неудачных попыток","message_content_title":"Содержимое сообщения webhook","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Логи","response":"Ответ","visit_webhook_url":"Посетить URL вебхука","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"Ссылка","active":"Активный","interest_date":"Дата начисления процентов","title":"Заголовок","book_date":"Дата бронирования","process_date":"Дата обработки","due_date":"Срок оплаты","foreign_amount":"Сумма в иностранной валюте","payment_date":"Дата платежа","invoice_date":"Дата выставления счёта","internal_reference":"Внутренняя ссылка","webhook_response":"Ответ","webhook_trigger":"События","webhook_delivery":"Доставка"},"list":{"active":"Активен?","trigger":"Событие","response":"Ответ","delivery":"Доставка","url":"Ссылка","secret":"Секрет"},"config":{"html_language":"ru","date_time_fns":"Do MMMM yyyy, @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/sk.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/sk.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Ako to ide?","flash_error":"Chyba!","flash_warning":"Varovanie!","flash_success":"Hotovo!","close":"Zavrieť","split_transaction_title":"Popis rozúčtovania","errors_submission":"Pri odosielaní sa niečo nepodarilo. Skontrolujte prosím chyby.","split":"Rozúčtovať","single_split":"Rozúčtovať","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transakcia #{ID} (\\"{title}\\")</a> bola uložená.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transakcia #{ID}</a> (\\"{title}\\") bola upravená.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transakcia #{ID}</a> bola uložená.","transaction_journal_information":"Informácie o transakcii","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Zdá sa, že zatiaľ nemáte žiadne rozpočty. Na stránke <a href=\\"/budgets\\">rozpočty</a> by ste si nejaké mali vytvoriť. Rozpočty môžu pomôcť udržať prehľad vo výdavkoch.","no_bill_pointer":"Zdá sa, že zatiaľ nemáte žiadne účty. Na stránke <a href=\\"/bills\\">účty</a> by ste mali nejaké vytvoriť. Účty môžu pomôcť udržať si prehľad vo výdavkoch.","source_account":"Zdrojový účet","hidden_fields_preferences":"Viac možností transakcií môžete povoliť vo svojich <a href=\\"/preferences\\">nastaveniach</a>.","destination_account":"Cieľový účet","add_another_split":"Pridať ďalšie rozúčtovanie","submission":"Odoslanie","create_another":"Po uložení sa vrátiť späť sem a vytvoriť ďalší.","reset_after":"Po odoslaní vynulovať formulár","submit":"Odoslať","amount":"Suma","date":"Dátum","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Štítky","no_budget":"(žiadny rozpočet)","no_bill":"(žiadny účet)","category":"Kategória","attachments":"Prílohy","notes":"Poznámky","external_url":"Externá URL","update_transaction":"Upraviť transakciu","after_update_create_another":"Po aktualizácii sa vrátiť späť a pokračovať v úpravách.","store_as_new":"Namiesto aktualizácie uložiť ako novú transakciu.","split_title_help":"Ak vytvoríte rozúčtovanie transakcie, je potrebné, aby ste určili všeobecný popis pre všetky rozúčtovania danej transakcie.","none_in_select_list":"(žiadne)","no_piggy_bank":"(žiadna pokladnička)","description":"Popis","split_transaction_title_help":"Ak vytvoríte rozúčtovanú transakciu, musí existovať globálny popis všetkých rozúčtovaní transakcie.","destination_account_reconciliation":"Nemôžete upraviť cieľový účet zúčtovacej transakcie.","source_account_reconciliation":"Nemôžete upraviť zdrojový účet zúčtovacej transakcie.","budget":"Rozpočet","bill":"Účet","you_create_withdrawal":"Vytvárate výber.","you_create_transfer":"Vytvárate prevod.","you_create_deposit":"Vytvárate vklad.","edit":"Upraviť","delete":"Odstrániť","name":"Názov","profile_whoops":"Ajaj!","profile_something_wrong":"Niečo sa pokazilo!","profile_try_again":"Niečo sa pokazilo. Prosím, skúste znova.","profile_oauth_clients":"OAuth klienti","profile_oauth_no_clients":"Zatiaľ ste nevytvorili žiadneho OAuth klienta.","profile_oauth_clients_header":"Klienti","profile_oauth_client_id":"ID klienta","profile_oauth_client_name":"Meno/Názov","profile_oauth_client_secret":"Tajný kľúč","profile_oauth_create_new_client":"Vytvoriť nového klienta","profile_oauth_create_client":"Vytvoriť klienta","profile_oauth_edit_client":"Upraviť klienta","profile_oauth_name_help":"Niečo, čo vaši použivatelia poznajú a budú tomu dôverovať.","profile_oauth_redirect_url":"URL presmerovania","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Spätná URL pre overenie autorizácie vašej aplikácie.","profile_authorized_apps":"Povolené aplikácie","profile_authorized_clients":"Autorizovaní klienti","profile_scopes":"Rozsahy","profile_revoke":"Odvolať","profile_personal_access_tokens":"Osobné prístupové tokeny","profile_personal_access_token":"Osobný prístupový token","profile_personal_access_token_explanation":"Toto je váš nový osobný prístupový token. Toto je jediný raz, kedy sa zobrazí - nestraťte ho! Odteraz ho môžete používať pre prístup k API.","profile_no_personal_access_token":"Ešte ste nevytvorili žiadne osobné prístupové tokeny.","profile_create_new_token":"Vytvoriť nový token","profile_create_token":"Vytvoriť token","profile_create":"Vytvoriť","profile_save_changes":"Uložiť zmeny","default_group_title_name":"(nezoskupené)","piggy_bank":"Pokladnička","profile_oauth_client_secret_title":"Tajný kľúč klienta","profile_oauth_client_secret_expl":"Toto je váš tajný kľúč klienta. Toto je jediný raz, kedy sa zobrazí - nestraťte ho! Odteraz môžete tento tajný kľúč používať pre prístup k API.","profile_oauth_confidential":"Dôverné","profile_oauth_confidential_help":"Vyžadujte od klienta autentifikáciu pomocou tajného kľúča. Dôverní klienti môžu uchovávať poverenia bezpečným spôsobom bez toho, aby boli vystavení neoprávneným stranám. Verejné aplikácie, ako napríklad natívna pracovná plocha alebo aplikácie Java SPA, nedokážu tajné kľúče bezpečne uchovať.","multi_account_warning_unknown":"V závislosti od typu vytvorenej transakcie, môže byť zdrojový a/alebo cieľový účet následných rozúčtovaní prepísaný údajmi v prvom rozdelení transakcie.","multi_account_warning_withdrawal":"Majte na pamäti, že zdrojový bankový účet následných rozúčtovaní bude prepísaný tým, čo je definované v prvom rozdelení výberu.","multi_account_warning_deposit":"Majte na pamäti, že zdrojový bankový účet následných rozúčtovaní bude prepísaný tým, čo je definované v prvom rozúčtovaní vkladu.","multi_account_warning_transfer":"Majte na pamäti, že zdrojový a cieľový bankový účet následných rozúčtovaní bude prepísaný tým, čo je definované v prvom rozúčtovaní prevodu.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Akcie","meta_data":"Metadata","webhook_messages":"Webhook message","inactive":"Neaktívne","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooky","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Aktívne","interest_date":"Úrokový dátum","title":"Názov","book_date":"Dátum rezervácie","process_date":"Dátum spracovania","due_date":"Dátum splatnosti","foreign_amount":"Suma v cudzej mene","payment_date":"Dátum úhrady","invoice_date":"Dátum vystavenia","internal_reference":"Interná referencia","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Aktívne?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"sk","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/sl.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/sl.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Kaj dogaja?","flash_error":"Napaka!","flash_warning":"Opozorilo!","flash_success":"Uspelo je!","close":"zapri","split_transaction_title":"Opis deljene transakcije","errors_submission":"There was something wrong with your submission. Please check out the errors.","split":"Razdeli","single_split":"Razdeli","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> je bil shranjen.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") je posodobljen.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Informacije o transakciji","submission_options":"Submission options","apply_rules_checkbox":"Uporabi pravila","fire_webhooks_checkbox":"Sproži Webhooke","no_budget_pointer":"Zdi se, da še nimate proračuna. Ustvarite jih nekaj na strani <a href=\\"budgets\\">proračuni</a>. Proračuni vam lahko pomagajo spremljati stroške.","no_bill_pointer":"Zdi se, da še nimate računov. Ustvarite jih na strani <a href=\\"bills\\">računi</a>. Računi vam lahko pomagajo spremljati stroške.","source_account":"Izvorni račun","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Ciljni račun","add_another_split":"Dodaj delitev","submission":"Oddaja","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Potrdi","amount":"Znesek","date":"Datum","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Oznake","no_budget":"(brez proračuna)","no_bill":"(ni računa)","category":"Kategorija","attachments":"Priloge","notes":"Opombe","external_url":"Zunanji URL","update_transaction":"Posodobi transakcije","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"Če ustvarite deljeno transakcijo, mora obstajati globalni opis za vse dele transakcije.","none_in_select_list":"(brez)","no_piggy_bank":"(brez hranilnika)","description":"Opis","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"Pri usklajevalni transakciji ni možno urejati ciljnega računa.","source_account_reconciliation":"Pri usklajevalni transakciji ni možno urejati izvornega računa.","budget":"Proračun","bill":"Trajnik","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"uredi","delete":"izbriši","name":"Ime","profile_whoops":"Ups!","profile_something_wrong":"Nekaj je šlo narobe!","profile_try_again":"Something went wrong. Please try again.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"You have not created any OAuth clients.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Ime","profile_oauth_client_secret":"Skrivnost","profile_oauth_create_new_client":"Create New Client","profile_oauth_create_client":"Create Client","profile_oauth_edit_client":"Urejanje odjemalca","profile_oauth_name_help":"Something your users will recognize and trust.","profile_oauth_redirect_url":"Redirect URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Your application\'s authorization callback URL.","profile_authorized_apps":"Authorized applications","profile_authorized_clients":"Authorized clients","profile_scopes":"Obseg","profile_revoke":"Prekliči","profile_personal_access_tokens":"Personal Access Tokens","profile_personal_access_token":"Personal Access Token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"You have not created any personal access tokens.","profile_create_new_token":"Ustvari nov žeton","profile_create_token":"Ustvari žeton","profile_create":"Ustvari","profile_save_changes":"Shrani spremembe","default_group_title_name":"(ungrouped)","piggy_bank":"Dodaj hranilnik","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Zaupno","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"Po ustvarjanju transakcije","webhook_trigger_UPDATE_TRANSACTION":"Po posodabljanju transakcije","webhook_trigger_DESTROY_TRANSACTION":"Po brisanju transakcije","webhook_response_TRANSACTIONS":"Podrobnosti transakcije","webhook_response_ACCOUNTS":"Podrobnosti računa","webhook_response_none_NONE":"Ni podrobnosti","webhook_delivery_JSON":"JSON","actions":"Dejanja","meta_data":"Meta podatki","webhook_messages":"Webhook sporočilo","inactive":"Neaktivno","no_webhook_messages":"Tukaj ni sporočil spletnih kljuk","inspect":"Preglejte","create_new_webhook":"Ustvari nov webhook","webhooks":"Spletne kljuke (Webhooks)","webhook_trigger_form_help":"Navedite, ob katerem dogodku se bo sprožil webhook","webhook_response_form_help":"Navedite, kaj mora webhook predložiti URL-ju.","webhook_delivery_form_help":"V kateri obliki mora webhook dostaviti podatke.","webhook_active_form_help":"Webhook mora biti aktiven, sicer ne bo poklican.","edit_webhook_js":"Uredi webhook \\"{title}\\"","webhook_was_triggered":"Webhook je bil sprožen ob navedeni transakciji. Počakajte, da se prikažejo rezultati.","view_message":"Poglej sporočilo","view_attempts":"Ogled neuspelih poskusov","message_content_title":"Vsebina sporočila Webhook","message_content_help":"To je vsebina sporočila, ki je bilo poslano (ali poskuseno) s tem webhookom.","attempt_content_title":"Poskusi Webhook","attempt_content_help":"To so vsi neuspešni poskusi pošiljanja tega sporočila webhook na konfigurirani URL. Čez nekaj časa bo Firefly III nehal poskušati.","no_attempts":"Neuspešnih poskusov ni. To je dobra stvar!","webhook_attempt_at":"Poskus ob {moment}","logs":"Logi","response":"Odziv","visit_webhook_url":"Obiščite URL webhooka","reset_webhook_secret":"Ponastavi skrivnost webhooka"},"form":{"url":"URL","active":"Aktivno","interest_date":"Datum obresti","title":"Naslov","book_date":"Datum knjiženja","process_date":"Datum obdelave","due_date":"Datum zapadlosti","foreign_amount":"Tuj znesek","payment_date":"Datum plačila","invoice_date":"Datum računa","internal_reference":"Notranji sklic","webhook_response":"Odziv","webhook_trigger":"Sprožilec","webhook_delivery":"Dostava"},"list":{"active":"Aktiviran?","trigger":"Sprožilec","response":"Odziv","delivery":"Dostava","url":"URL","secret":"Skrivnost"},"config":{"html_language":"sl","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/sv.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/sv.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Vad spelas?","flash_error":"Fel!","flash_warning":"Varning!","flash_success":"Slutförd!","close":"Stäng","split_transaction_title":"Beskrivning av delad transaktion","errors_submission":"Något fel uppstod med inskickningen. Vänligen kontrollera felen nedan.","split":"Dela","single_split":"Dela","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaktion #{ID} (\\"{title}\\")</a> sparades.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaktion #{ID}</a> (\\"{title}\\") uppdaterades.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaktion #{ID}</a> sparades.","transaction_journal_information":"Transaktionsinformation","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Du verkar inte ha några budgetar än. Du bör skapa några på <a href=\\"budgets\\">budgetar</a>-sidan. Budgetar kan hjälpa dig att hålla reda på utgifter.","no_bill_pointer":"Du verkar inte ha några räkningar ännu. Du bör skapa några på <a href=\\"bills\\">räkningar</a>-sidan. Räkningar kan hjälpa dig att hålla reda på utgifter.","source_account":"Källkonto","hidden_fields_preferences":"Du kan aktivera fler transaktionsalternativ i dina <a href=\\"preferences\\">inställningar</a>.","destination_account":"Till konto","add_another_split":"Lägga till en annan delning","submission":"Inskickning","create_another":"Efter sparat, återkom hit för att skapa ytterligare en.","reset_after":"Återställ formulär efter inskickat","submit":"Skicka","amount":"Belopp","date":"Datum","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Etiketter","no_budget":"(ingen budget)","no_bill":"(ingen räkning)","category":"Kategori","attachments":"Bilagor","notes":"Noteringar","external_url":"Extern URL","update_transaction":"Uppdatera transaktion","after_update_create_another":"Efter uppdaterat, återkom hit för att fortsätta redigera.","store_as_new":"Spara en ny transaktion istället för att uppdatera.","split_title_help":"Om du skapar en delad transaktion måste det finnas en global beskrivning för alla delningar av transaktionen.","none_in_select_list":"(Ingen)","no_piggy_bank":"(ingen spargris)","description":"Beskrivning","split_transaction_title_help":"Om du skapar en delad transaktion måste det finnas en global beskrivning för alla delningar av transaktionen.","destination_account_reconciliation":"Du kan inte redigera destinationskontot för en avstämningstransaktion.","source_account_reconciliation":"Du kan inte redigera källkontot för en avstämningstransaktion.","budget":"Budget","bill":"Nota","you_create_withdrawal":"Du skapar ett uttag.","you_create_transfer":"Du skapar en överföring.","you_create_deposit":"Du skapar en insättning.","edit":"Redigera","delete":"Ta bort","name":"Namn","profile_whoops":"Hoppsan!","profile_something_wrong":"Något gick fel!","profile_try_again":"Något gick fel. Försök igen.","profile_oauth_clients":"OAuth klienter","profile_oauth_no_clients":"Du har inte skapat några OAuth klienter.","profile_oauth_clients_header":"Klienter","profile_oauth_client_id":"Klient ID","profile_oauth_client_name":"Namn","profile_oauth_client_secret":"Hemlighet","profile_oauth_create_new_client":"Skapa ny klient","profile_oauth_create_client":"Skapa klient","profile_oauth_edit_client":"Redigera klient","profile_oauth_name_help":"Något som dina användare kommer att känna igen och lita på.","profile_oauth_redirect_url":"Omdirigera URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Din applikations auktorisering callback URL.","profile_authorized_apps":"Auktoriserade applikationer","profile_authorized_clients":"Auktoriserade klienter","profile_scopes":"Omfattningar","profile_revoke":"Återkalla","profile_personal_access_tokens":"Personliga åtkomst-Tokens","profile_personal_access_token":"Personlig åtkomsttoken","profile_personal_access_token_explanation":"Här är din nya personliga tillgångs token. Detta är den enda gången det kommer att visas så förlora inte det! Du kan nu använda denna token för att göra API-förfrågningar.","profile_no_personal_access_token":"Du har inte skapat några personliga åtkomsttokens.","profile_create_new_token":"Skapa ny token","profile_create_token":"Skapa token","profile_create":"Skapa","profile_save_changes":"Spara ändringar","default_group_title_name":"(ogrupperad)","piggy_bank":"Spargris","profile_oauth_client_secret_title":"Klienthemlighet","profile_oauth_client_secret_expl":"Här är din nya klient hemlighet. Detta är den enda gången det kommer att visas så förlora inte det! Du kan nu använda denna hemlighet för att göra API-förfrågningar.","profile_oauth_confidential":"Konfidentiell","profile_oauth_confidential_help":"Kräv att klienten autentiserar med en hemlighet. Konfidentiella klienter kan hålla autentiseringsuppgifter på ett säkert sätt utan att utsätta dem för obehöriga parter. Publika applikationer, som skrivbord eller JavaScript-SPA-applikationer, kan inte hålla hemligheter på ett säkert sätt.","multi_account_warning_unknown":"Beroende på vilken typ av transaktion du skapar, källan och/eller destinationskontot för efterföljande delningar kan åsidosättas av vad som än definieras i den första delningen av transaktionen.","multi_account_warning_withdrawal":"Tänk på att källkontot för efterföljande uppdelningar kommer att upphävas av vad som än definieras i den första uppdelningen av uttaget.","multi_account_warning_deposit":"Tänk på att destinationskontot för efterföljande uppdelningar kommer att styras av vad som än definieras i den första uppdelningen av insättningen.","multi_account_warning_transfer":"Tänk på att käll + destinationskonto av efterföljande delningar kommer att styras av vad som definieras i den första uppdelningen av överföringen.","webhook_trigger_STORE_TRANSACTION":"Efter skapande av transaktion","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaktionsdetaljer","webhook_response_ACCOUNTS":"Kontodetaljer","webhook_response_none_NONE":"Inga detaljer","webhook_delivery_JSON":"JSON","actions":"Åtgärder","meta_data":"Metadata","webhook_messages":"Webhook message","inactive":"Inaktiv","no_webhook_messages":"There are no webhook messages","inspect":"Inspektera","create_new_webhook":"Create new webhook","webhooks":"Webhookar","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"Visa meddelande","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Loggar","response":"Svar","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"Länk","active":"Aktiv","interest_date":"Räntedatum","title":"Titel","book_date":"Bokföringsdatum","process_date":"Behandlingsdatum","due_date":"Förfallodatum","foreign_amount":"Utländskt belopp","payment_date":"Betalningsdatum","invoice_date":"Fakturadatum","internal_reference":"Intern referens","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Är aktiv?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"sv","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/tr.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/tr.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Neler oluyor?","flash_error":"Hata!","flash_warning":"Uyarı!","flash_success":"Başarılı!","close":"Kapat","split_transaction_title":"Description of the split transaction","errors_submission":"There was something wrong with your submission. Please check out the errors.","split":"Böl","single_split":"Böl","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">İşlem #{ID} (\\"{title}\\")</a> saklı olmuştur.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">İşlem #{ID}</a>saklı olmuştur.","transaction_journal_information":"İşlem Bilgileri","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Henüz bütçeniz yok gibi görünüyor. <a href=\\"budgets\\">bütçeler</a> sayfasında biraz oluşturmalısınız. Bütçeler, giderleri takip etmenize yardımcı olabilir.","no_bill_pointer":"Henüz faturanız yok gibi görünüyor. <a href=\\"bills\\">faturalar</a> sayfasında biraz oluşturmalısınız. Faturalar, harcamaları takip etmenize yardımcı olabilir.","source_account":"Kaynak hesap","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Hedef hesap","add_another_split":"Başka bir bölme ekle","submission":"Submission","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Gönder","amount":"Miktar","date":"Tarih","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Etiketler","no_budget":"(bütçe yok)","no_bill":"(hayır bill)","category":"Kategori","attachments":"Ekler","notes":"Notlar","external_url":"Harici URL","update_transaction":"Update transaction","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","none_in_select_list":"(Yok)","no_piggy_bank":"(kumbara bankası yok)","description":"Açıklama","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"Bir mutabakat işleminin hedef hesabını düzenleyemezsiniz.","source_account_reconciliation":"Bir mutabakat işleminin kaynak hesabını düzenleyemezsiniz.","budget":"Bütçe","bill":"Fatura","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Düzenle","delete":"Sil","name":"İsim","profile_whoops":"Hoppala!","profile_something_wrong":"Bir şeyler ters gitti!","profile_try_again":"Bir şeyler yanlış gitti. Lütfen tekrar deneyin.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"You have not created any OAuth clients.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Name","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Create New Client","profile_oauth_create_client":"Müşteri Oluştur","profile_oauth_edit_client":"İstemciyi Düzenle","profile_oauth_name_help":"Kullanıcılarınızın tanıyacağı ve güveneceği bir şey.","profile_oauth_redirect_url":"URL\'yi yönlendir","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Uygulamanızın yetkilendirme geri arama URL\'si.","profile_authorized_apps":"Yetkili uygulamalar","profile_authorized_clients":"Yetkili müşteriler","profile_scopes":"Kapsamalar","profile_revoke":"İptal etmek","profile_personal_access_tokens":"Kişisel Erişim Belirteçleri","profile_personal_access_token":"Kişisel Erişim Belirteci","profile_personal_access_token_explanation":"İşte yeni kişisel erişim belirteciniz. Bu gösterilecek tek zaman, bu yüzden onu kaybetme! Artık API istekleri yapmak için bu belirtecini kullanabilirsiniz.","profile_no_personal_access_token":"Herhangi bir kişisel erişim belirteci oluşturmadınız.","profile_create_new_token":"Yeni belirteç oluştur","profile_create_token":"Belirteç oluştur","profile_create":"Belirteç oluşturma","profile_save_changes":"Değişiklikleri kaydet","default_group_title_name":"(ungrouped)","piggy_bank":"Kumbara","profile_oauth_client_secret_title":"Müşteri Sırrı","profile_oauth_client_secret_expl":"İşte yeni müşteri sırrın. Bu gösterilecek tek zaman, bu yüzden onu kaybetme! Artık API istekleri yapmak için bu sırrı kullanabilirsiniz.","profile_oauth_confidential":"Gizli","profile_oauth_confidential_help":"İstemcinin bir sır ile kimlik doğrulaması yapmasını isteyin. Gizli müşteriler, kimlik bilgilerini yetkisiz taraflara ifşa etmeden güvenli bir şekilde saklayabilir. Yerel masaüstü veya JavaScript SPA uygulamaları gibi genel uygulamalar sırları güvenli bir şekilde saklayamaz.","multi_account_warning_unknown":"Oluşturduğunuz işlemin türüne bağlı olarak, sonraki bölünmelerin kaynak ve / veya hedef hesabı, işlemin ilk bölünmesinde tanımlanan her şey tarafından geçersiz kılınabilir.","multi_account_warning_withdrawal":"Sonraki bölünmelerin kaynak hesabının, geri çekilmenin ilk bölünmesinde tanımlanan herhangi bir şey tarafından reddedileceğini unutmayın.","multi_account_warning_deposit":"Sonraki bölünmelerin hedef hesabının, mevduatın ilk bölünmesinde tanımlanan herhangi bir şey tarafından iptal edileceğini unutmayın.","multi_account_warning_transfer":"Sonraki bölünmelerin kaynak + hedef hesabının, aktarımın ilk bölünmesinde tanımlanan her şey tarafından geçersiz kılınacağını unutmayın.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Eylemler","meta_data":"Meta veri","webhook_messages":"Webhook message","inactive":"Etkisiz","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Web kancaları","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Aktif","interest_date":"Faiz tarihi","title":"Başlık","book_date":"Kitap Tarihi","process_date":"İşlem tarihi","due_date":"Bitiş Tarihi","foreign_amount":"Foreign amount","payment_date":"Ödeme Tarihi","invoice_date":"Fatura Tarihi","internal_reference":"Dahili referans","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Aktif mi?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"tr","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/uk.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/uk.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Що в гаманці?","flash_error":"Помилка!","flash_warning":"Увага!","flash_success":"Успішно!","close":"Закрити","split_transaction_title":"Description of the split transaction","errors_submission":"There was something wrong with your submission. Please check out the errors.","split":"Розділити","single_split":"Розділити","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Вебхук #{ID} (\\"{title}\\")</a> був збережений.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Вебхук #{ID}</a> (\\"{title}\\") був оновлений.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"Transaction information","submission_options":"Submission options","apply_rules_checkbox":"Застосувати правила","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"Здається, не створили жодного бюджету. Створіть один на сторінці <a href=\\"budgets\\">бюджетів</a>. Бюджети можуть допомогти вам стежити за витратами.","no_bill_pointer":"У вас, здається, ще немає рахунків до сплати. Створіть кілька на сторінці <a href=\\"bills\\">рахунків</a>. Рахунки можуть допомогти вам стежити за витратами.","source_account":"Вихідний рахунок","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Рахунок призначення","add_another_split":"Add another split","submission":"Submission","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"Підтвердити","amount":"Сума","date":"Дата","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Теги","no_budget":"(поза бюджетом)","no_bill":"(no bill)","category":"Category","attachments":"Вкладення","notes":"Notes","external_url":"Зовнішній URL","update_transaction":"Update transaction","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","none_in_select_list":"(немає)","no_piggy_bank":"(немає скарбнички)","description":"Опис","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"Ви не можете редагувати операції погодження, рахунку призначення.","source_account_reconciliation":"Ви не можете редагувати операції звірки, рахунка джерела.","budget":"Budget","bill":"Рахунок","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"Редагувати","delete":"Видалити","name":"Name","profile_whoops":"Лишенько!","profile_something_wrong":"Щось пішло не так!","profile_try_again":"Щось пішло не так. Будь ласка, спробуйте ще раз.","profile_oauth_clients":"Клієнти OAuth","profile_oauth_no_clients":"Ви не створили жодних клієнтів OAuth.","profile_oauth_clients_header":"Клієнти","profile_oauth_client_id":"ID клієнта","profile_oauth_client_name":"Ім\'я","profile_oauth_client_secret":"Секретний ключ","profile_oauth_create_new_client":"Створити нового клієнта","profile_oauth_create_client":"Створити клієнта","profile_oauth_edit_client":"Редагувати клієнта","profile_oauth_name_help":"Щось, що ваші користувачі впізнають і довірятимуть.","profile_oauth_redirect_url":"URL-адреса перенаправлення","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Зовнішній URL для авторизації додатка.","profile_authorized_apps":"Авторизовані додатки","profile_authorized_clients":"Авторизовані клієнти","profile_scopes":"Області застосування","profile_revoke":"Відкликати","profile_personal_access_tokens":"Токени особистого доступу","profile_personal_access_token":"Токен персонального доступу","profile_personal_access_token_explanation":"Ось ваш новий особистий токен. Це єдиний раз, коли він буде показаний, тому не втрачайте його! Тепер ви можете використовувати цей токен для надсилання запитів API.","profile_no_personal_access_token":"Ви не створили особистих токенів доступу.","profile_create_new_token":"Створити новий токен","profile_create_token":"Створити токен","profile_create":"Створити","profile_save_changes":"Зберегти зміни","default_group_title_name":"(ungrouped)","piggy_bank":"Скарбничка","profile_oauth_client_secret_title":"Секретний ключ клієнта","profile_oauth_client_secret_expl":"Ось новий секретний ключ клієнта. Це єдиний раз, коли він буде показаний, тому не втрачайте його! Тепер ви можете використовувати цей секретний ключ для надсилання запитів API.","profile_oauth_confidential":"Конфіденційно","profile_oauth_confidential_help":"Вимагайте від клієнта автентифікації за допомогою секретного ключа. Конфіденційні клієнти можуть безпечно зберігати облікові дані, без надання їх неавторизованим особам. Публічні додатки, такі як native desktop програми або програми JavaScript SPA, не можуть надійно зберігати секрети.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"Після створення операції","webhook_trigger_UPDATE_TRANSACTION":"Після оновлення операції","webhook_trigger_DESTROY_TRANSACTION":"Після видалення операції","webhook_response_TRANSACTIONS":"Деталі операції","webhook_response_ACCOUNTS":"Дані рахунку","webhook_response_none_NONE":"Немає даних","webhook_delivery_JSON":"JSON","actions":"Дії","meta_data":"Мета-дані","webhook_messages":"Повідомлення веб-хука","inactive":"Inactive","no_webhook_messages":"Повідомлення відсутні","inspect":"Дослідити","create_new_webhook":"Створити новий веб-хук","webhooks":"Веб-гаки","webhook_trigger_form_help":"Укажіть, за якої події запускатиметься вебхук","webhook_response_form_help":"Укажіть, що веб-хук має передати в URL-адресу.","webhook_delivery_form_help":"У якому форматі веб-хук має надавати дані.","webhook_active_form_help":"Веб-хук має бути активним, інакше його не буде викликано.","edit_webhook_js":"Редагувати веб-хук \\"{title}\\"","webhook_was_triggered":"Вебхук був запущений в зазначеній транзакції. Будь ласка, зачекайте на отримання результатів.","view_message":"Переглянути повідомлення","view_attempts":"Переглянути невдалі спроби","message_content_title":"Вміст веб-хук повідомлення","message_content_help":"Це вміст повідомлення, яке було надіслано (або зроблено спробу) за допомогою цього вебхука.","attempt_content_title":"Спроби веб-хуку","attempt_content_help":"Це всі невдалі спроби цього повідомлення вебхуку надіслати налаштовану URL-адресу. Через деякий час Firefly III припинить спроби.","no_attempts":"Безуспішних спроб нема. Це добре!","webhook_attempt_at":"Спроба {moment}","logs":"Журнали","response":"Відповідь","visit_webhook_url":"Відвідайте URL-адресу веб-хуку","reset_webhook_secret":"Відновити сікрет веб-хука"},"form":{"url":"URL-адреса","active":"Активно","interest_date":"Дата нарахування відсотку","title":"Назва","book_date":"Дата обліку","process_date":"Дата опрацювання","due_date":"Дата закінчення","foreign_amount":"Іноземна сума","payment_date":"Дата оплати","invoice_date":"Дата рахунку","internal_reference":"Внутрішнє посилання","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Чи активний?","trigger":"Тригер","response":"Відповідь","delivery":"Доставка","url":"URL-адреса","secret":"Секрет"},"config":{"html_language":"uk","date_time_fns":"ММММ do, рік @ ГГ:хв:сек"}}');

/***/ }),

/***/ "./resources/assets/js/locales/vi.json":
/*!*********************************************!*\
  !*** ./resources/assets/js/locales/vi.json ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"Chào mừng trở lại?","flash_error":"Lỗi!","flash_warning":"Cảnh báo!","flash_success":"Thành công!","close":"Đóng","split_transaction_title":"Mô tả giao dịch tách","errors_submission":"There was something wrong with your submission. Please check out the errors.","split":"Chia ra","single_split":"Chia ra","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Giao dịch #{ID} (\\"{title}\\")</a> đã được lưu trữ.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\"> Giao dịch #{ID}</a> đã được lưu trữ.","transaction_journal_information":"Thông tin giao dịch","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"You seem to have no budgets yet. You should create some on the <a href=\\"budgets\\">budgets</a>-page. Budgets can help you keep track of expenses.","no_bill_pointer":"You seem to have no bills yet. You should create some on the <a href=\\"bills\\">bills</a>-page. Bills can help you keep track of expenses.","source_account":"Nguồn tài khoản","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"Tài khoản đích","add_another_split":"Thêm một phân chia khác","submission":"Gửi","create_another":"Sau khi lưu trữ, quay trở lại đây để tạo một cái khác.","reset_after":"Đặt lại mẫu sau khi gửi","submit":"Gửi","amount":"Số tiền","date":"Ngày","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"Nhãn","no_budget":"(không có ngân sách)","no_bill":"(no bill)","category":"Danh mục","attachments":"Tệp đính kèm","notes":"Ghi chú","external_url":"URL bên ngoài","update_transaction":"Cập nhật giao dịch","after_update_create_another":"Sau khi cập nhật, quay lại đây để tiếp tục chỉnh sửa.","store_as_new":"Lưu trữ như một giao dịch mới thay vì cập nhật.","split_title_help":"Nếu bạn tạo một giao dịch phân tách, phải có một mô tả toàn cầu cho tất cả các phân chia của giao dịch.","none_in_select_list":"(Trống)","no_piggy_bank":"(chưa có heo đất)","description":"Sự miêu tả","split_transaction_title_help":"Nếu bạn tạo một giao dịch phân tách, phải có một mô tả toàn cầu cho tất cả các phân chia của giao dịch.","destination_account_reconciliation":"Bạn không thể chỉnh sửa tài khoản đích của giao dịch đối chiếu.","source_account_reconciliation":"Bạn không thể chỉnh sửa tài khoản nguồn của giao dịch đối chiếu.","budget":"Ngân sách","bill":"Hóa đơn","you_create_withdrawal":"Bạn đang tạo một <strong>rút tiền</strong>.","you_create_transfer":"Bạn đang tạo một <strong>chuyển khoản</strong>.","you_create_deposit":"Bạn đang tạo một <strong>tiền gửi</strong>.","edit":"Sửa","delete":"Xóa","name":"Tên","profile_whoops":"Rất tiếc!","profile_something_wrong":"Có lỗi xảy ra!","profile_try_again":"Xảy ra lỗi. Vui lòng thử lại.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"Bạn đã không tạo ra bất kỳ OAuth clients nào.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Tên","profile_oauth_client_secret":"Mã bí mật","profile_oauth_create_new_client":"Tạo mới Client","profile_oauth_create_client":"Tạo Client","profile_oauth_edit_client":"Sửa Client","profile_oauth_name_help":"Một cái gì đó người dùng của bạn sẽ nhận ra và tin tưởng.","profile_oauth_redirect_url":"URL chuyển tiếp","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"URL gọi lại ủy quyền của ứng dụng của bạn.","profile_authorized_apps":"Uỷ quyền ứng dụng","profile_authorized_clients":"Client ủy quyền","profile_scopes":"Phạm vi","profile_revoke":"Thu hồi","profile_personal_access_tokens":"Mã truy cập cá nhân","profile_personal_access_token":"Mã truy cập cá nhân","profile_personal_access_token_explanation":"Đây là mã thông báo truy cập cá nhân mới của bạn. Đây là lần duy nhất nó sẽ được hiển thị vì vậy đừng đánh mất nó! Bây giờ bạn có thể sử dụng mã thông báo này để thực hiện API.","profile_no_personal_access_token":"Bạn chưa tạo bất kỳ mã thông báo truy cập cá nhân nào.","profile_create_new_token":"Tạo mã mới","profile_create_token":"Tạo mã","profile_create":"Tạo","profile_save_changes":"Lưu thay đổi","default_group_title_name":"(chưa nhóm)","piggy_bank":"Heo đất","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Confidential","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"Hành động","meta_data":"Meta data","webhook_messages":"Webhook message","inactive":"Không hoạt động","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"Hành động","interest_date":"Ngày lãi","title":"Tiêu đề","book_date":"Ngày đặt sách","process_date":"Ngày xử lý","due_date":"Ngày đáo hạn","foreign_amount":"Ngoại tệ","payment_date":"Ngày thanh toán","invoice_date":"Ngày hóa đơn","internal_reference":"Tài liệu tham khảo nội bộ","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"Đang hoạt động?","trigger":"Trigger","response":"Response","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"vi","date_time_fns":"MMMM do, yyyy @ HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/zh-cn.json":
/*!************************************************!*\
  !*** ./resources/assets/js/locales/zh-cn.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"今天理财了吗？","flash_error":"错误！","flash_warning":"警告！","flash_success":"成功！","close":"关闭","split_transaction_title":"拆分交易的描述","errors_submission":"您提交的内容有误，请检查错误信息。","split":"拆分","single_split":"拆分","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">交易 #{ID} (“{title}”)</a> 已保存。","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">推送 #{ID} (\\"{title}\\")</a> 已保存.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">推送 #{ID}</a> (\\"{title}\\") 已更新.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">交易 #{ID}</a> (“{title}”) 已更新。","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">交易 #{ID}</a> 已保存。","transaction_journal_information":"交易信息","submission_options":"提交选项","apply_rules_checkbox":"应用规则","fire_webhooks_checkbox":"触发 webhook","no_budget_pointer":"您还没有预算，您应该在<a href=\\"budgets\\">预算页面</a>进行创建。预算可以帮助您追踪支出。","no_bill_pointer":"您还没有账单，您应该在<a href=\\"bills\\">账单页面</a>进行创建。账单可以帮助您追踪支出。","source_account":"来源账户","hidden_fields_preferences":"您可以在<a href=\\"preferences\\">偏好设定</a>中启用更多交易选项。","destination_account":"目标账户","add_another_split":"增加另一笔拆分","submission":"提交","create_another":"保存后，返回此页面以创建新记录","reset_after":"提交后重置表单","submit":"提交","amount":"金额","date":"日期","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"标签","no_budget":"(无预算)","no_bill":"(无账单)","category":"分类","attachments":"附件","notes":"备注","external_url":"外部链接","update_transaction":"更新交易","after_update_create_another":"更新后，返回此页面继续编辑。","store_as_new":"保存为新交易而不是更新此交易。","split_title_help":"如果您创建了一笔拆分交易，必须有一个所有拆分的全局描述。","none_in_select_list":"(空)","no_piggy_bank":"(无存钱罐)","description":"描述","split_transaction_title_help":"如果您创建了一笔拆分交易，必须有一个所有拆分的全局描述。","destination_account_reconciliation":"您不能编辑对账交易的目标账户","source_account_reconciliation":"您不能编辑对账交易的来源账户。","budget":"预算","bill":"账单","you_create_withdrawal":"您正在创建一笔支出","you_create_transfer":"您正在创建一笔转账","you_create_deposit":"您正在创建一笔收入","edit":"编辑","delete":"删除","name":"名称","profile_whoops":"很抱歉！","profile_something_wrong":"发生错误！","profile_try_again":"发生错误，请稍后再试。","profile_oauth_clients":"OAuth 客户端","profile_oauth_no_clients":"您尚未创建任何 OAuth 客户端。","profile_oauth_clients_header":"客户端","profile_oauth_client_id":"客户端 ID","profile_oauth_client_name":"名称","profile_oauth_client_secret":"密钥","profile_oauth_create_new_client":"创建新客户端","profile_oauth_create_client":"创建客户端","profile_oauth_edit_client":"编辑客户端","profile_oauth_name_help":"您的用户可以识别并信任的信息","profile_oauth_redirect_url":"跳转网址","profile_oauth_clients_external_auth":"如果您正在使用如 Authelia 的外部身份验证提供商，OAuth 客户端将无法工作。您只能使用个人访问令牌。","profile_oauth_redirect_url_help":"您的应用程序的授权回调网址","profile_authorized_apps":"已授权应用","profile_authorized_clients":"已授权客户端","profile_scopes":"范围","profile_revoke":"撤消","profile_personal_access_tokens":"个人访问令牌","profile_personal_access_token":"个人访问令牌","profile_personal_access_token_explanation":"请妥善保存您的新个人访问令牌，此令牌仅会在这里展示一次。您现在已可以使用此令牌进行 API 请求。","profile_no_personal_access_token":"您还没有创建个人访问令牌。","profile_create_new_token":"创建新令牌","profile_create_token":"创建令牌","profile_create":"创建","profile_save_changes":"保存更改","default_group_title_name":"(未分组)","piggy_bank":"存钱罐","profile_oauth_client_secret_title":"客户端密钥","profile_oauth_client_secret_expl":"请妥善保存您的新客户端的密钥，此密钥仅会在这里展示一次。您现在已可以使用此密钥进行 API 请求。","profile_oauth_confidential":"使用加密","profile_oauth_confidential_help":"要求客户端使用密钥进行认证。加密客户端可以安全储存凭据且不将其泄露给未授权方，而公共应用程序（例如本地计算机或 JavaScript SPA 应用程序）无法保证凭据的安全性。","multi_account_warning_unknown":"根据您创建的交易类型，后续拆分的来源和/或目标账户可能被交易的首笔拆分的配置所覆盖。","multi_account_warning_withdrawal":"请注意，后续拆分的来源账户将会被支出的首笔拆分的配置所覆盖。","multi_account_warning_deposit":"请注意，后续拆分的目标账户将会被收入的首笔拆分的配置所覆盖。","multi_account_warning_transfer":"请注意，后续拆分的来源和目标账户将会被转账的首笔拆分的配置所覆盖。","webhook_trigger_STORE_TRANSACTION":"交易创建后","webhook_trigger_UPDATE_TRANSACTION":"交易更新后","webhook_trigger_DESTROY_TRANSACTION":"交易删除后","webhook_response_TRANSACTIONS":"交易详情","webhook_response_ACCOUNTS":"账户详情","webhook_response_none_NONE":"无详细信息","webhook_delivery_JSON":"JSON","actions":"操作","meta_data":"后设资料","webhook_messages":"Webhook 消息","inactive":"已停用","no_webhook_messages":"没有 Webhook 消息","inspect":"检查","create_new_webhook":"创建新 Webhook","webhooks":"Webhooks","webhook_trigger_form_help":"推送事件发生时的触发条件","webhook_response_form_help":"推送必须提交给URL的内容","webhook_delivery_form_help":"推送采用哪种格式发送数据","webhook_active_form_help":"Webhook 必须是激活状态，否则不会被调用。","edit_webhook_js":"编辑 webhook “{title}”","webhook_was_triggered":"在指定的交易中触发了推送，请等待显示结果","view_message":"查看消息","view_attempts":"查看失败的尝试","message_content_title":"Webhook 消息内容","message_content_help":"这是使用推送发送（或尝试）的消息内容","attempt_content_title":"Webhook 尝试","attempt_content_help":"这是提交至配置网址的webhook消息的所有失败请求，一段时间后，Firefly III 将停止尝试。","no_attempts":"所有尝试均已成功完成。好极了！","webhook_attempt_at":"尝试于 {moment}","logs":"日志","response":"响应","visit_webhook_url":"访问 webhook URL","reset_webhook_secret":"重置 webhook 密钥"},"form":{"url":"网址","active":"启用","interest_date":"利息日期","title":"标题","book_date":"登记日期","process_date":"处理日期","due_date":"到期日","foreign_amount":"外币金额","payment_date":"付款日期","invoice_date":"发票日期","internal_reference":"内部引用","webhook_response":"响应内容","webhook_trigger":"触发条件","webhook_delivery":"发送格式"},"list":{"active":"是否启用？","trigger":"触发条件","response":"答复","delivery":"交付","url":"网址","secret":"密钥"},"config":{"html_language":"zh-cn","date_time_fns":"YYYY年M月D日 HH:mm:ss"}}');

/***/ }),

/***/ "./resources/assets/js/locales/zh-tw.json":
/*!************************************************!*\
  !*** ./resources/assets/js/locales/zh-tw.json ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"firefly":{"welcome_back":"What\'s playing?","flash_error":"錯誤！","flash_warning":"警告！","flash_success":"成功！","close":"關閉","split_transaction_title":"拆分交易的描述","errors_submission":"There was something wrong with your submission. Please check out the errors.","split":"分割","single_split":"Split","transaction_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID} (\\"{title}\\")</a> has been stored.","webhook_stored_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID} (\\"{title}\\")</a> has been stored.","webhook_updated_link":"<a href=\\"webhooks/show/{ID}\\">Webhook #{ID}</a> (\\"{title}\\") has been updated.","transaction_updated_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> (\\"{title}\\") has been updated.","transaction_new_stored_link":"<a href=\\"transactions/show/{ID}\\">Transaction #{ID}</a> has been stored.","transaction_journal_information":"交易資訊","submission_options":"Submission options","apply_rules_checkbox":"Apply rules","fire_webhooks_checkbox":"Fire webhooks","no_budget_pointer":"You seem to have no budgets yet. You should create some on the <a href=\\"budgets\\">budgets</a>-page. Budgets can help you keep track of expenses.","no_bill_pointer":"You seem to have no bills yet. You should create some on the <a href=\\"bills\\">bills</a>-page. Bills can help you keep track of expenses.","source_account":"來源帳戶","hidden_fields_preferences":"You can enable more transaction options in your <a href=\\"preferences\\">preferences</a>.","destination_account":"目標帳戶","add_another_split":"增加拆分","submission":"Submission","create_another":"After storing, return here to create another one.","reset_after":"Reset form after submission","submit":"送出","amount":"金額","date":"日期","is_reconciled_fields_dropped":"Because this transaction is reconciled, you will not be able to update the accounts, nor the amount(s).","tags":"標籤","no_budget":"(無預算)","no_bill":"(no bill)","category":"分類","attachments":"附加檔案","notes":"備註","external_url":"External URL","update_transaction":"Update transaction","after_update_create_another":"After updating, return here to continue editing.","store_as_new":"Store as a new transaction instead of updating.","split_title_help":"若您建立一筆拆分交易，須有一個有關交易所有拆分的整體描述。","none_in_select_list":"(空)","no_piggy_bank":"(no piggy bank)","description":"描述","split_transaction_title_help":"If you create a split transaction, there must be a global description for all splits of the transaction.","destination_account_reconciliation":"You can\'t edit the destination account of a reconciliation transaction.","source_account_reconciliation":"You can\'t edit the source account of a reconciliation transaction.","budget":"預算","bill":"帳單","you_create_withdrawal":"You\'re creating a withdrawal.","you_create_transfer":"You\'re creating a transfer.","you_create_deposit":"You\'re creating a deposit.","edit":"編輯","delete":"刪除","name":"名稱","profile_whoops":"Whoops!","profile_something_wrong":"Something went wrong!","profile_try_again":"Something went wrong. Please try again.","profile_oauth_clients":"OAuth Clients","profile_oauth_no_clients":"You have not created any OAuth clients.","profile_oauth_clients_header":"Clients","profile_oauth_client_id":"Client ID","profile_oauth_client_name":"Name","profile_oauth_client_secret":"Secret","profile_oauth_create_new_client":"Create New Client","profile_oauth_create_client":"Create Client","profile_oauth_edit_client":"Edit Client","profile_oauth_name_help":"Something your users will recognize and trust.","profile_oauth_redirect_url":"Redirect URL","profile_oauth_clients_external_auth":"If you\'re using an external authentication provider like Authelia, OAuth Clients will not work. You can use Personal Access Tokens only.","profile_oauth_redirect_url_help":"Your application\'s authorization callback URL.","profile_authorized_apps":"Authorized applications","profile_authorized_clients":"Authorized clients","profile_scopes":"Scopes","profile_revoke":"Revoke","profile_personal_access_tokens":"Personal Access Tokens","profile_personal_access_token":"Personal Access Token","profile_personal_access_token_explanation":"Here is your new personal access token. This is the only time it will be shown so don\'t lose it! You may now use this token to make API requests.","profile_no_personal_access_token":"You have not created any personal access tokens.","profile_create_new_token":"Create new token","profile_create_token":"Create token","profile_create":"Create","profile_save_changes":"Save changes","default_group_title_name":"(ungrouped)","piggy_bank":"小豬撲滿","profile_oauth_client_secret_title":"Client Secret","profile_oauth_client_secret_expl":"Here is your new client secret. This is the only time it will be shown so don\'t lose it! You may now use this secret to make API requests.","profile_oauth_confidential":"Confidential","profile_oauth_confidential_help":"Require the client to authenticate with a secret. Confidential clients can hold credentials in a secure way without exposing them to unauthorized parties. Public applications, such as native desktop or JavaScript SPA applications, are unable to hold secrets securely.","multi_account_warning_unknown":"Depending on the type of transaction you create, the source and/or destination account of subsequent splits may be overruled by whatever is defined in the first split of the transaction.","multi_account_warning_withdrawal":"Keep in mind that the source account of subsequent splits will be overruled by whatever is defined in the first split of the withdrawal.","multi_account_warning_deposit":"Keep in mind that the destination account of subsequent splits will be overruled by whatever is defined in the first split of the deposit.","multi_account_warning_transfer":"Keep in mind that the source + destination account of subsequent splits will be overruled by whatever is defined in the first split of the transfer.","webhook_trigger_STORE_TRANSACTION":"After transaction creation","webhook_trigger_UPDATE_TRANSACTION":"After transaction update","webhook_trigger_DESTROY_TRANSACTION":"After transaction delete","webhook_response_TRANSACTIONS":"Transaction details","webhook_response_ACCOUNTS":"Account details","webhook_response_none_NONE":"No details","webhook_delivery_JSON":"JSON","actions":"操作","meta_data":"中繼資料","webhook_messages":"Webhook message","inactive":"未啟用","no_webhook_messages":"There are no webhook messages","inspect":"Inspect","create_new_webhook":"Create new webhook","webhooks":"Webhooks","webhook_trigger_form_help":"Indicate on what event the webhook will trigger","webhook_response_form_help":"Indicate what the webhook must submit to the URL.","webhook_delivery_form_help":"Which format the webhook must deliver data in.","webhook_active_form_help":"The webhook must be active or it won\'t be called.","edit_webhook_js":"Edit webhook \\"{title}\\"","webhook_was_triggered":"The webhook was triggered on the indicated transaction. Please wait for results to appear.","view_message":"View message","view_attempts":"View failed attempts","message_content_title":"Webhook message content","message_content_help":"This is the content of the message that was sent (or tried) using this webhook.","attempt_content_title":"Webhook attempts","attempt_content_help":"These are all the unsuccessful attempts of this webhook message to submit to the configured URL. After some time, Firefly III will stop trying.","no_attempts":"There are no unsuccessful attempts. That\'s a good thing!","webhook_attempt_at":"Attempt at {moment}","logs":"Logs","response":"Response","visit_webhook_url":"Visit webhook URL","reset_webhook_secret":"Reset webhook secret"},"form":{"url":"URL","active":"啟用","interest_date":"利率日期","title":"標題","book_date":"登記日期","process_date":"處理日期","due_date":"到期日","foreign_amount":"外幣金額","payment_date":"付款日期","invoice_date":"發票日期","internal_reference":"內部參考","webhook_response":"Response","webhook_trigger":"Trigger","webhook_delivery":"Delivery"},"list":{"active":"是否啟用？","trigger":"觸發器","response":"回應","delivery":"Delivery","url":"URL","secret":"Secret"},"config":{"html_language":"zh-tw","date_time_fns":"YYYY年 M月 D日 dddd 於 HH:mm:ss"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************************************!*\
  !*** ./resources/assets/js/webhooks/create.js ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_webhooks_Create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/webhooks/Create */ "./resources/assets/js/components/webhooks/Create.vue");
/*
 * create.js
 * Copyright (c) 2019 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */



/**
 * First we will load Axios via bootstrap.js
 * jquery and bootstrap-sass preloaded in app.js
 * vue, uiv and vuei18n are in app_vue.js
 */

__webpack_require__(/*! ../bootstrap */ "./resources/assets/js/bootstrap.js");
var i18n = __webpack_require__(/*! ../i18n */ "./resources/assets/js/i18n.js");
var props = {};
var app = new Vue({
  i18n: i18n,
  el: "#webhooks_create",
  render: function render(createElement) {
    return createElement(_components_webhooks_Create__WEBPACK_IMPORTED_MODULE_0__["default"], {
      props: props
    });
  }
});
})();

/******/ })()
;
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Vendors/VendorsIndex.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Vendors/VendorsIndex.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_ModalBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ModalBox */ "./resources/js/components/ModalBox.vue");
/* harmony import */ var _components_HeroBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/HeroBar */ "./resources/js/components/HeroBar.vue");
/* harmony import */ var _components_CardToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CardToolbar */ "./resources/js/components/CardToolbar.vue");
/* harmony import */ var _components_ModalTrashBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ModalTrashBox */ "./resources/js/components/ModalTrashBox.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VendorIndex",
  components: {
    ModalTrashBox: _components_ModalTrashBox__WEBPACK_IMPORTED_MODULE_5__["default"],
    CardToolbar: _components_CardToolbar__WEBPACK_IMPORTED_MODULE_4__["default"],
    HeroBar: _components_HeroBar__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalBox: _components_ModalBox__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isModalActive: false,
      trashObject: null,
      vendors: [],
      isLoading: false,
      paginated: false,
      perPage: 10,
      checkedRows: []
    };
  },
  computed: {
    trashSubject: function trashSubject() {
      if (this.trashObject) {
        return this.trashObject.name;
      }

      if (this.checkedRows.length) {
        return "".concat(this.checkedRows.length, " entries");
      }

      return null;
    }
  },
  created: function created() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      this.isLoading = true;
      axios.get('/vendors').then(function (r) {
        _this.isLoading = false;

        if (r.data && r.data.data) {
          if (r.data.data.length > _this.perPage) {
            _this.paginated = true;
          }

          _this.vendors = r.data.data;
        }
      })["catch"](function (err) {
        _this.isLoading = false;

        _this.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    trashModal: function trashModal() {
      var trashObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (trashObject || this.checkedRows.length) {
        this.trashObject = trashObject;
        this.isModalActive = true;
      }
    },
    trashConfirm: function trashConfirm() {
      var _this2 = this;

      var url;
      var method;
      var data = null;
      this.isModalActive = false;

      if (this.trashObject) {
        method = 'delete';
        url = "/vendors/".concat(this.trashObject.id, "/destroy");
      } else if (this.checkedRows.length) {
        method = 'post';
        url = '/vendors/destroy';
        data = {
          ids: lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(this.checkedRows, function (row) {
            return row.id;
          })
        };
      }

      axios({
        method: method,
        url: url,
        data: data
      }).then(function (r) {
        _this2.getData();

        _this2.trashObject = null;
        _this2.checkedRows = [];

        _this2.$buefy.snackbar.open({
          message: "Deleted",
          queue: false
        });
      })["catch"](function (err) {
        _this2.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    trashCancel: function trashCancel() {
      this.isModalActive = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Vendors/VendorsIndex.vue?vue&type=template&id=763b7b0a&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Vendors/VendorsIndex.vue?vue&type=template&id=763b7b0a& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "hero-bar",
        [
          _vm._v("\n    Händler\n    "),
          _c(
            "router-link",
            {
              staticClass: "button",
              attrs: { slot: "right", to: "/vendors/new" },
              slot: "right"
            },
            [_vm._v("\n      Neuer Händler\n    ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "section is-main-section" },
        [
          _c(
            "card-component",
            {
              staticClass: "has-table has-mobile-sort-spaced",
              attrs: { title: "Händler", icon: "account-multiple" }
            },
            [
              _c("card-toolbar", [
                _c(
                  "button",
                  {
                    staticClass:
                      "button is-danger is-small has-checked-rows-number",
                    attrs: {
                      slot: "right",
                      type: "button",
                      disabled: !_vm.checkedRows.length
                    },
                    on: {
                      click: function($event) {
                        return _vm.trashModal(null)
                      }
                    },
                    slot: "right"
                  },
                  [
                    _c("b-icon", {
                      attrs: { icon: "trash-can", "custom-size": "default" }
                    }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Löschen")]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !!_vm.checkedRows.length,
                            expression: "!!checkedRows.length"
                          }
                        ]
                      },
                      [_vm._v("(" + _vm._s(_vm.checkedRows.length) + ")")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("modal-trash-box", {
                attrs: {
                  "is-active": _vm.isModalActive,
                  "trash-subject": _vm.trashSubject
                },
                on: { confirm: _vm.trashConfirm, cancel: _vm.trashCancel }
              }),
              _vm._v(" "),
              _c(
                "b-table",
                {
                  attrs: {
                    "checked-rows": _vm.checkedRows,
                    checkable: true,
                    loading: _vm.isLoading,
                    paginated: _vm.paginated,
                    "per-page": _vm.perPage,
                    striped: true,
                    hoverable: true,
                    "default-sort": "name",
                    data: _vm.vendors
                  },
                  on: {
                    "update:checkedRows": function($event) {
                      _vm.checkedRows = $event
                    },
                    "update:checked-rows": function($event) {
                      _vm.checkedRows = $event
                    }
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(props) {
                        return [
                          _c(
                            "b-table-column",
                            {
                              attrs: { label: "ID", field: "ID", sortable: "" }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(props.row.id) +
                                  "\n          "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                label: "Firma",
                                field: "Firma",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(props.row.companyname) +
                                  "\n          "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                label: "Straße",
                                field: "Straße",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(props.row.street) +
                                  " " +
                                  _vm._s(props.row.streetnumber) +
                                  "\n          "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                label: "Ort",
                                field: "Ort",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(props.row.postalcode) +
                                  " " +
                                  _vm._s(props.row.city) +
                                  "\n          "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                label: "Telefon",
                                field: "Telefon",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(props.row.phone) +
                                  "\n          "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                label: "Email",
                                field: "Email",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(props.row.email) +
                                  "\n          "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                label: "Ansprechpartner",
                                field: "Ansprechpartner",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(props.row.contactperson) +
                                  "\n          "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              staticClass: "is-actions-cell",
                              attrs: { "custom-key": "actions" }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "buttons is-right" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "button is-small is-primary",
                                      attrs: {
                                        to: {
                                          name: "vendors.edit",
                                          params: { id: props.row.id }
                                        }
                                      }
                                    },
                                    [
                                      _c("b-icon", {
                                        attrs: {
                                          icon: "account-edit",
                                          size: "is-small"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "button is-small is-danger",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.trashModal(props.row)
                                        }
                                      }
                                    },
                                    [
                                      _c("b-icon", {
                                        attrs: {
                                          icon: "trash-can",
                                          size: "is-small"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "section",
                    {
                      staticClass: "section",
                      attrs: { slot: "empty" },
                      slot: "empty"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "content has-text-grey has-text-centered"
                        },
                        [
                          _vm.isLoading
                            ? [
                                _c(
                                  "p",
                                  [
                                    _c("b-icon", {
                                      attrs: {
                                        icon: "dots-horizontal",
                                        size: "is-large"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("p", [_vm._v("Fetching data...")])
                              ]
                            : [
                                _c(
                                  "p",
                                  [
                                    _c("b-icon", {
                                      attrs: {
                                        icon: "emoticon-sad",
                                        size: "is-large"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("p", [_vm._v("Nothing's here…")])
                              ]
                        ],
                        2
                      )
                    ]
                  )
                ]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Vendors/VendorsIndex.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/Vendors/VendorsIndex.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VendorsIndex_vue_vue_type_template_id_763b7b0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendorsIndex.vue?vue&type=template&id=763b7b0a& */ "./resources/js/views/Vendors/VendorsIndex.vue?vue&type=template&id=763b7b0a&");
/* harmony import */ var _VendorsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VendorsIndex.vue?vue&type=script&lang=js& */ "./resources/js/views/Vendors/VendorsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VendorsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VendorsIndex_vue_vue_type_template_id_763b7b0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VendorsIndex_vue_vue_type_template_id_763b7b0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Vendors/VendorsIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Vendors/VendorsIndex.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Vendors/VendorsIndex.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorsIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Vendors/VendorsIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorsIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Vendors/VendorsIndex.vue?vue&type=template&id=763b7b0a&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Vendors/VendorsIndex.vue?vue&type=template&id=763b7b0a& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorsIndex_vue_vue_type_template_id_763b7b0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VendorsIndex.vue?vue&type=template&id=763b7b0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Vendors/VendorsIndex.vue?vue&type=template&id=763b7b0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorsIndex_vue_vue_type_template_id_763b7b0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VendorsIndex_vue_vue_type_template_id_763b7b0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
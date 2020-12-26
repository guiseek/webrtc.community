;(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ 0:
      /*!***************************************!*\
  !*** multi ./apps/client/src/main.ts ***!
  \***************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /Users/guiseek/dev/workspaces/quertc/apps/client/src/main.ts */ 'Zr4m'
        )

        /***/
      },

    /***/ '0ujj':
      /*!***************************************************!*\
  !*** ./libs/ui/overlog/src/lib/overlog.module.ts ***!
  \***************************************************/
      /*! exports provided: OverlogModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OverlogModule',
          function () {
            return OverlogModule
          }
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/cdk/overlay */ 'rDax'
        )
        /* harmony import */ var _overlog_snack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./overlog.snack */ 'yXgJ'
        )
        /* harmony import */ var _overlog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./overlog.service */ 'iBb4'
        )
        /* harmony import */ var _overlog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./overlog-config */ 'cPJY'
        )

        class OverlogModule {
          static forRoot(
            config = _overlog_config__WEBPACK_IMPORTED_MODULE_5__[
              'defaultOverlogConfig'
            ]
          ) {
            return {
              ngModule: OverlogModule,
              providers: [
                {
                  provide:
                    _overlog_config__WEBPACK_IMPORTED_MODULE_5__[
                      'OVERLOG_CONFIG'
                    ],
                  useValue: Object.assign(
                    Object.assign(
                      {},
                      _overlog_config__WEBPACK_IMPORTED_MODULE_5__[
                        'defaultOverlogConfig'
                      ]
                    ),
                    config
                  ),
                },
              ],
            }
          }
        }
        OverlogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          'ɵɵdefineNgModule'
        ]({ type: OverlogModule })
        OverlogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          'ɵɵdefineInjector'
        ]({
          factory: function OverlogModule_Factory(t) {
            return new (t || OverlogModule)()
          },
          providers: [
            _overlog_service__WEBPACK_IMPORTED_MODULE_4__['OverlogService'],
          ],
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
              _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__[
                'OverlayModule'
              ],
            ],
          ],
        })
        ;(function () {
          ;(typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              'ɵɵsetNgModuleScope'
            ](OverlogModule, {
              declarations: [
                _overlog_snack__WEBPACK_IMPORTED_MODULE_3__['OverlogSnack'],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__[
                  'OverlayModule'
                ],
              ],
              exports: [
                _overlog_snack__WEBPACK_IMPORTED_MODULE_3__['OverlogSnack'],
              ],
            })
        })()
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            OverlogModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_0__[
                        'CommonModule'
                      ],
                      _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__[
                        'OverlayModule'
                      ],
                    ],
                    declarations: [
                      _overlog_snack__WEBPACK_IMPORTED_MODULE_3__[
                        'OverlogSnack'
                      ],
                    ],
                    providers: [
                      _overlog_service__WEBPACK_IMPORTED_MODULE_4__[
                        'OverlogService'
                      ],
                    ],
                    exports: [
                      _overlog_snack__WEBPACK_IMPORTED_MODULE_3__[
                        'OverlogSnack'
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ 1:
      /*!********************!*\
  !*** ws (ignored) ***!
  \********************/
      /*! no static exports found */
      /***/ function (module, exports) {
        /* (ignored) */
        /***/
      },

    /***/ '1/2/':
      /*!**********************************************!*\
  !*** ./libs/ui/carousel/src/lib/carousel.ts ***!
  \**********************************************/
      /*! exports provided: CarouselItem, Carousel */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CarouselItem',
          function () {
            return CarouselItem
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Carousel',
          function () {
            return Carousel
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/cdk/a11y */ 'u47x'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/icon */ 'NFeN'
        )

        const _c0 = ['contentWrapper']
        function Carousel_button_2_Template(rf, ctx) {
          if (rf & 1) {
            const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵgetCurrentView'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'button',
              5
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function Carousel_button_2_Template_button_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r4)
                const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵnextContext'
                ]()
                return ctx_r3.previous()
              }
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              1,
              'mat-icon'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              2,
              'navigate_before'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        function Carousel_button_5_Template(rf, ctx) {
          if (rf & 1) {
            const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵgetCurrentView'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'button',
              6
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function Carousel_button_5_Template_button_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r6)
                const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵnextContext'
                ]()
                return ctx_r5.next()
              }
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              1,
              'mat-icon'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
              2,
              'navigate_next'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        const _c1 = ['*']
        class CarouselItem {
          constructor(carousel, element) {
            this.carousel = carousel
            this.element = element
            this.role = 'listitem'
            this.width = this.carousel.itemWidth
            this.tabindex = '-1'
          }
          focus() {
            this.element.nativeElement.focus({ preventScroll: true })
          }
        }
        CarouselItem.ɵfac = function CarouselItem_Factory(t) {
          return new (t || CarouselItem)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              Carousel
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
            )
          )
        }
        CarouselItem.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineDirective'
        ]({
          type: CarouselItem,
          selectors: [['', 'carousel-item', '']],
          hostVars: 4,
          hostBindings: function CarouselItem_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵhostProperty'](
                'tabindex',
                ctx.tabindex
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵattribute'](
                'role',
                ctx.role
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵstyleProp'](
                'width',
                ctx.width,
                'px'
              )
            }
          },
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CarouselItem,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Directive'],
                args: [
                  {
                    selector: '[carousel-item]',
                  },
                ],
              },
            ],
            function () {
              return [
                { type: Carousel },
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'],
                },
              ]
            },
            {
              role: [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostBinding'],
                  args: ['attr.role'],
                },
              ],
              width: [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostBinding'],
                  args: ['style.width.px'],
                },
              ],
              tabindex: [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostBinding'],
                  args: ['tabindex'],
                },
              ],
            }
          )
        })()
        class Carousel {
          constructor(element) {
            this.element = element
            this.position = 0
            this.showPrevArrow = false
            this.showNextArrow = true
            this._index = 0
          }
          get index() {
            return this._index
          }
          set index(i) {
            this._index = i
            this.showPrevArrow = i > 0
            this.showNextArrow = i < this.items.length - this.visibleItems
          }
          onKeydown(event) {
            switch (event.key) {
              case 'Tab':
                if (!this.focusKeyManager.activeItem) {
                  this.focusKeyManager.setFirstItemActive()
                  this._updateItemTabIndices()
                }
                break
              case 'ArrowLeft':
                if (this.focusKeyManager.activeItemIndex === this.index) {
                  this.previous()
                }
                this.focusKeyManager.setPreviousItemActive()
                this._updateItemTabIndices()
                break
              case 'ArrowRight':
                if (
                  this.focusKeyManager.activeItemIndex ===
                  this.index + this.visibleItems - 1
                ) {
                  this.next()
                }
                this.focusKeyManager.setNextItemActive()
                this._updateItemTabIndices()
                break
              default:
                break
            }
          }
          onResize() {
            this._resizeCarousel()
          }
          ngAfterContentInit() {
            this.focusKeyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__[
              'FocusKeyManager'
            ](this.items)
            // timeout to make sure clientWidth is defined
            setTimeout(() => {
              this.itemsArray = this.items.toArray()
              this.shiftWidth = this.items.first.element.nativeElement.clientWidth
              this._resizeCarousel()
            })
          }
          next() {
            // prevent keyboard navigation from going out of bounds
            if (this.showNextArrow) {
              this._shiftItems(1)
            }
          }
          previous() {
            // prevent keyboard navigation from going out of bounds
            if (this.showPrevArrow) {
              this._shiftItems(-1)
            }
          }
          _updateItemTabIndices() {
            this.items.forEach((item) => {
              item.tabindex =
                item === this.focusKeyManager.activeItem ? '0' : '-1'
            })
          }
          _shiftItems(shiftIndex) {
            this.index += shiftIndex
            this.position += shiftIndex * this.shiftWidth
            this.items.forEach((item) => {
              item.element.nativeElement.style.transform = `translateX(-${this.position}px)`
            })
          }
          _resizeCarousel() {
            const newVisibleItems = Math.max(
              1,
              Math.min(
                Math.floor(
                  this.element.nativeElement.offsetWidth / this.shiftWidth
                ),
                this.items.length
              )
            )
            if (this.visibleItems !== newVisibleItems) {
              if (this.visibleItems < newVisibleItems) {
                const shiftIndex =
                  this.index - (this.items.length - this.visibleItems) + 1
                if (shiftIndex > 0) {
                  this._shiftItems(-shiftIndex)
                }
              } else {
                if (
                  this.focusKeyManager.activeItemIndex &&
                  this.focusKeyManager.activeItemIndex >
                    this.index + newVisibleItems - 1
                ) {
                  this.focusKeyManager.setPreviousItemActive()
                  this._updateItemTabIndices()
                }
              }
              this.visibleItems = newVisibleItems
              this.showNextArrow =
                this.index < this.items.length - this.visibleItems
            }
            this.wrapper.nativeElement.style.width = `${
              this.visibleItems * this.shiftWidth
            }px`
          }
        }
        Carousel.ɵfac = function Carousel_Factory(t) {
          return new (t || Carousel)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef']
            )
          )
        }
        Carousel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: Carousel,
          selectors: [['quertc-carousel']],
          contentQueries: function Carousel_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵcontentQuery'](
                dirIndex,
                CarouselItem,
                false
              )
            }
            if (rf & 2) {
              let _t
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.items = _t)
            }
          },
          viewQuery: function Carousel_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵviewQuery'](
                _c0,
                true
              )
            }
            if (rf & 2) {
              let _t
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.wrapper = _t.first)
            }
          },
          inputs: {
            ariaLabel: ['aria-label', 'ariaLabel'],
            itemWidth: 'itemWidth',
          },
          ngContentSelectors: _c1,
          decls: 6,
          vars: 4,
          consts: [
            [
              'role',
              'region',
              1,
              'docs-carousel-content-wrapper',
              3,
              'keyup',
              'resize',
            ],
            ['contentWrapper', ''],
            [
              'aria-hidden',
              'true',
              'tabindex',
              '-1',
              'class',
              'docs-carousel-nav docs-carousel-nav-prev',
              'mat-mini-fab',
              '',
              'aria-label',
              'previous',
              3,
              'click',
              4,
              'ngIf',
            ],
            ['role', 'list', 'tabindex', '0', 1, 'docs-carousel-content'],
            [
              'aria-hidden',
              'true',
              'tabindex',
              '-1',
              'class',
              'docs-carousel-nav docs-carousel-nav-next',
              'mat-mini-fab',
              '',
              'aria-label',
              'next',
              3,
              'click',
              4,
              'ngIf',
            ],
            [
              'aria-hidden',
              'true',
              'tabindex',
              '-1',
              'mat-mini-fab',
              '',
              'aria-label',
              'previous',
              1,
              'docs-carousel-nav',
              'docs-carousel-nav-prev',
              3,
              'click',
            ],
            [
              'aria-hidden',
              'true',
              'tabindex',
              '-1',
              'mat-mini-fab',
              '',
              'aria-label',
              'next',
              1,
              'docs-carousel-nav',
              'docs-carousel-nav-next',
              3,
              'click',
            ],
          ],
          template: function Carousel_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojectionDef']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'div',
                0,
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'keyup',
                function Carousel_Template_div_keyup_0_listener($event) {
                  return ctx.onKeydown($event)
                }
              )(
                'resize',
                function Carousel_Template_div_resize_0_listener() {
                  return ctx.onResize()
                },
                false,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵresolveWindow']
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                Carousel_button_2_Template,
                3,
                0,
                'button',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                3,
                'div',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵprojection'](4)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                5,
                Carousel_button_5_Template,
                3,
                0,
                'button',
                4
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵstyleProp'](
                'min-width',
                ctx.shiftWidth + 'px'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.showPrevArrow
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.showNextArrow
              )
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgIf'],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__['MatButton'],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__['MatIcon'],
          ],
          styles: [
            'quertc-carousel {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 40px;\n}\n\n.docs-carousel-content {\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n  outline: none;\n}\n\n.docs-carousel-content-wrapper {\n  position: relative;\n}\n\n[carousel-item] {\n  flex-shrink: 0;\n  transition: transform 0.5s ease-in-out;\n}\n\n.docs-carousel-nav {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.docs-carousel-nav-prev {\n  left: -40px;\n}\n\n.docs-carousel-nav-next {\n  right: -40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Nhcm91c2VsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxzQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJjYXJvdXNlbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicXVlcnRjLWNhcm91c2VsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCA0MHB4O1xufVxuXG4uZG9jcy1jYXJvdXNlbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmRvY3MtY2Fyb3VzZWwtY29udGVudC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5bY2Fyb3VzZWwtaXRlbV0ge1xuICBmbGV4LXNocmluazogMDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5kb2NzLWNhcm91c2VsLW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmRvY3MtY2Fyb3VzZWwtbmF2LXByZXYge1xuICBsZWZ0OiAtNDBweDtcbn1cblxuLmRvY3MtY2Fyb3VzZWwtbmF2LW5leHQge1xuICByaWdodDogLTQwcHg7XG59XG4iXX0= */',
          ],
          encapsulation: 2,
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            Carousel,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'quertc-carousel',
                    templateUrl: './carousel.html',
                    styleUrls: ['./carousel.scss'],
                    encapsulation:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        'ViewEncapsulation'
                      ].None,
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['ElementRef'],
                },
              ]
            },
            {
              ariaLabel: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                  args: ['aria-label'],
                },
              ],
              wrapper: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'],
                  args: ['contentWrapper'],
                },
              ],
              items: [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                      'ContentChildren'
                    ],
                  args: [CarouselItem],
                },
              ],
              itemWidth: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ '2Mw2':
      /*!**********************************!*\
  !*** ./libs/shared/src/index.ts ***!
  \**********************************/
      /*! exports provided: MediaStreamService, CallAvatarComponent, SharedModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _lib_services_media_stream_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lib/services/media-stream.service */ 'Yrrw'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MediaStreamService',
          function () {
            return _lib_services_media_stream_service__WEBPACK_IMPORTED_MODULE_0__[
              'MediaStreamService'
            ]
          }
        )

        /* harmony import */ var _lib_components_call_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./lib/components/call-avatar */ 'N6N/'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'CallAvatarComponent',
          function () {
            return _lib_components_call_avatar__WEBPACK_IMPORTED_MODULE_1__[
              'CallAvatarComponent'
            ]
          }
        )

        /* harmony import */ var _lib_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./lib/shared.module */ 'ZUmW'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'SharedModule',
          function () {
            return _lib_shared_module__WEBPACK_IMPORTED_MODULE_2__[
              'SharedModule'
            ]
          }
        )

        /***/
      },

    /***/ '4ciH':
      /*!*********************************************************!*\
  !*** ./libs/ui/controls/src/lib/code/code.component.ts ***!
  \*********************************************************/
      /*! exports provided: Code, CodeComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Code',
          function () {
            return Code
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CodeComponent',
          function () {
            return CodeComponent
          }
        )
        /* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/cdk/a11y */ 'u47x'
        )
        /* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/cdk/coercion */ '8LU1'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */ '3Pt+'
        )
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/form-field */ 'kmnG'
        )
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! rxjs */ 'qCKp'
        )

        const _c0 = ['timeLow']
        const _c1 = ['timeMid']
        const _c2 = ['timeHiAndVersion']
        class Code {
          constructor(timeLow, timeMid, timeHiAndVersion) {
            this.timeLow = timeLow
            this.timeMid = timeMid
            this.timeHiAndVersion = timeHiAndVersion
          }
        }
        class CodeComponent {
          constructor(
            formBuilder,
            _focusMonitor,
            _elementRef,
            _formField,
            ngControl
          ) {
            this._focusMonitor = _focusMonitor
            this._elementRef = _elementRef
            this._formField = _formField
            this.ngControl = ngControl
            this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__[
              'Subject'
            ]()
            this.focused = false
            this.controlType = 'control-code-input'
            this.id = `control-code-input-${CodeComponent.nextId++}`
            this.onChange = (_) => {}
            this.onTouched = () => {}
            this._required = false
            this._disabled = false
            this.parts = formBuilder.group({
              timeLow: [
                null,
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_3__['Validators']
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                    'Validators'
                  ].minLength(8),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                    'Validators'
                  ].maxLength(8),
                ],
              ],
              timeMid: [
                null,
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_3__['Validators']
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                    'Validators'
                  ].minLength(4),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                    'Validators'
                  ].maxLength(4),
                ],
              ],
              timeHiAndVersion: [
                null,
                [
                  _angular_forms__WEBPACK_IMPORTED_MODULE_3__['Validators']
                    .required,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                    'Validators'
                  ].minLength(4),
                  _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                    'Validators'
                  ].maxLength(4),
                ],
              ],
            })
            _focusMonitor.monitor(_elementRef, true).subscribe((origin) => {
              if (this.focused && !origin) {
                this.onTouched()
              }
              this.focused = !!origin
              this.stateChanges.next()
            })
            if (this.ngControl != null) {
              this.ngControl.valueAccessor = this
            }
          }
          get empty() {
            const {
              value: { timeLow, timeMid, timeHiAndVersion },
            } = this.parts
            return !timeLow && !timeMid && !timeHiAndVersion
          }
          get shouldLabelFloat() {
            return this.focused || !this.empty
          }
          get placeholder() {
            return this._placeholder
          }
          set placeholder(value) {
            this._placeholder = value
            this.stateChanges.next()
          }
          get required() {
            return this._required
          }
          set required(value) {
            this._required = Object(
              _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__[
                'coerceBooleanProperty'
              ]
            )(value)
            this.stateChanges.next()
          }
          get disabled() {
            return this._disabled
          }
          set disabled(value) {
            this._disabled = Object(
              _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__[
                'coerceBooleanProperty'
              ]
            )(value)
            this._disabled ? this.parts.disable() : this.parts.enable()
            this.stateChanges.next()
          }
          get value() {
            if (this.parts.valid) {
              const {
                value: { timeLow, timeMid, timeHiAndVersion },
              } = this.parts
              return new Code(timeLow, timeMid, timeHiAndVersion)
            }
            return null
          }
          set value(tel) {
            const { timeLow, timeMid, timeHiAndVersion } =
              tel || new Code('', '', '')
            this.parts.setValue({ timeLow, timeMid, timeHiAndVersion })
            this.stateChanges.next()
          }
          get errorState() {
            return this.parts.invalid && this.parts.dirty
          }
          autoFocusNext(control, nextElement) {
            if (!control.errors && nextElement) {
              this._focusMonitor.focusVia(nextElement, 'program')
            }
          }
          autoFocusPrev(control, prevElement) {
            if (control.value.length < 1) {
              this._focusMonitor.focusVia(prevElement, 'program')
            }
          }
          ngOnDestroy() {
            this.stateChanges.complete()
            this._focusMonitor.stopMonitoring(this._elementRef)
          }
          setDescribedByIds(ids) {
            const controlElement = this._elementRef.nativeElement.querySelector(
              '.control-code-input-container'
            )
            controlElement.setAttribute('aria-describedby', ids.join(' '))
          }
          onContainerClick() {
            if (this.parts.controls.timeHiAndVersion.valid) {
              this._focusMonitor.focusVia(this.timeHiAndVersionInput, 'program')
            } else if (this.parts.controls.timeMid.valid) {
              this._focusMonitor.focusVia(this.timeHiAndVersionInput, 'program')
            } else if (this.parts.controls.timeLow.valid) {
              this._focusMonitor.focusVia(this.timeMidInput, 'program')
            } else {
              this._focusMonitor.focusVia(this.timeLowInput, 'program')
            }
          }
          writeValue(tel) {
            this.value = tel
          }
          registerOnChange(fn) {
            this.onChange = fn
          }
          registerOnTouched(fn) {
            this.onTouched = fn
          }
          setDisabledState(isDisabled) {
            this.disabled = isDisabled
          }
          _handleInput(control, nextElement) {
            this.autoFocusNext(control, nextElement)
            this.onChange(this.value)
          }
        }
        CodeComponent.nextId = 0
        CodeComponent.ɵfac = function CodeComponent_Factory(t) {
          return new (t || CodeComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵdirectiveInject'](
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormBuilder']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵdirectiveInject'](
              _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__['FocusMonitor']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ElementRef']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵdirectiveInject'](
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__[
                'MAT_FORM_FIELD'
              ],
              8
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵdirectiveInject'](
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__['NgControl'],
              10
            )
          )
        }
        CodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
          'ɵɵdefineComponent'
        ]({
          type: CodeComponent,
          selectors: [['control-code']],
          viewQuery: function CodeComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵviewQuery'](
                _c0,
                true
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵviewQuery'](
                _c1,
                true
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵviewQuery'](
                _c2,
                true
              )
            }
            if (rf & 2) {
              let _t
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.timeLowInput = _t.first)
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.timeMidInput = _t.first)
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.timeHiAndVersionInput = _t.first)
            }
          },
          hostVars: 3,
          hostBindings: function CodeComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵattribute'](
                'id',
                ctx.id
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵclassProp'](
                'control-floating',
                ctx.shouldLabelFloat
              )
            }
          },
          inputs: {
            userAriaDescribedBy: ['aria-describedby', 'userAriaDescribedBy'],
            placeholder: 'placeholder',
            required: 'required',
            disabled: 'disabled',
            value: 'value',
          },
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵProvidersFeature']([
              {
                provide:
                  _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__[
                    'MatFormFieldControl'
                  ],
                useExisting: CodeComponent,
              },
            ]),
          ],
          decls: 11,
          vars: 2,
          consts: [
            [
              'role',
              'group',
              1,
              'control-code-input-container',
              3,
              'formGroup',
            ],
            [
              'formControlName',
              'timeLow',
              'size',
              '8',
              'maxlength',
              '8',
              'aria-label',
              'Time low',
              1,
              'control-code-input-element',
              3,
              'input',
            ],
            ['timeLow', ''],
            [1, 'control-code-input-spacer'],
            [
              'formControlName',
              'timeMid',
              'maxlength',
              '4',
              'size',
              '4',
              'aria-label',
              'Time mid',
              1,
              'control-code-input-element',
              3,
              'input',
              'keyup.backspace',
            ],
            ['timeMid', ''],
            [
              'formControlName',
              'timeHiAndVersion',
              'maxlength',
              '4',
              'size',
              '4',
              'aria-label',
              'Time hi and version',
              1,
              'control-code-input-element',
              3,
              'input',
              'keyup.backspace',
            ],
            ['timeHiAndVersion', ''],
          ],
          template: function CodeComponent_Template(rf, ctx) {
            if (rf & 1) {
              const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                'ɵɵgetCurrentView'
              ]()
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](
                0,
                'div',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](
                1,
                'input',
                1,
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵlistener'](
                'input',
                function CodeComponent_Template_input_input_1_listener() {
                  _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵrestoreView'](
                    _r3
                  )
                  const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                    'ɵɵreference'
                  ](6)
                  return ctx._handleInput(ctx.parts.controls.timeLow, _r1)
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](
                3,
                'span',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtext'](4, '\u2013')
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](
                5,
                'input',
                4,
                5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵlistener'](
                'input',
                function CodeComponent_Template_input_input_5_listener() {
                  _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵrestoreView'](
                    _r3
                  )
                  const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                    'ɵɵreference'
                  ](10)
                  return ctx._handleInput(ctx.parts.controls.timeMid, _r2)
                }
              )(
                'keyup.backspace',
                function CodeComponent_Template_input_keyup_backspace_5_listener() {
                  _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵrestoreView'](
                    _r3
                  )
                  const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                    'ɵɵreference'
                  ](2)
                  return ctx.autoFocusPrev(ctx.parts.controls.timeMid, _r0)
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](
                7,
                'span',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵtext'](8, '\u2013')
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementStart'](
                9,
                'input',
                6,
                7
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵlistener'](
                'input',
                function CodeComponent_Template_input_input_9_listener() {
                  return ctx._handleInput(ctx.parts.controls.timeHiAndVersion)
                }
              )(
                'keyup.backspace',
                function CodeComponent_Template_input_keyup_backspace_9_listener() {
                  _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵrestoreView'](
                    _r3
                  )
                  const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__[
                    'ɵɵreference'
                  ](6)
                  return ctx.autoFocusPrev(
                    ctx.parts.controls.timeHiAndVersion,
                    _r1
                  )
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵelementEnd']()
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵproperty'](
                'formGroup',
                ctx.parts
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵɵattribute'](
                'aria-labelledby',
                ctx._formField == null ? null : ctx._formField.getLabelId()
              )
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormControlName'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__['MaxLengthValidator'],
          ],
          styles: [
            '[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  color: white;\n}\n.control-code-input-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n.control-code-input-element[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n.control-code-input-spacer[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n.control-floating[_nghost-%COMP%]   .control-code-input-spacer[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7QUFBRTtFQUNFLFlBQUE7QUFFSjtBQUNBO0VBQ0UsYUFBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUVGO0FBQ0E7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUFFRjtBQUNBO0VBQ0UsVUFBQTtBQUVGIiwiZmlsZSI6ImNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBpbnB1dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG4uY29udHJvbC1jb2RlLWlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250cm9sLWNvZGUtaW5wdXQtZWxlbWVudCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udHJvbC1jb2RlLWlucHV0LXNwYWNlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG59XG5cbjpob3N0LmNvbnRyb2wtZmxvYXRpbmcgLmNvbnRyb2wtY29kZS1pbnB1dC1zcGFjZXIge1xuICBvcGFjaXR5OiAxO1xufVxuIl19 */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__['ɵsetClassMetadata'](
            CodeComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['Component'],
                args: [
                  {
                    selector: 'control-code',
                    templateUrl: './code.component.html',
                    styleUrls: ['./code.component.scss'],
                    providers: [
                      {
                        provide:
                          _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__[
                            'MatFormFieldControl'
                          ],
                        useExisting: CodeComponent,
                      },
                    ],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormBuilder'],
                },
                {
                  type:
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__[
                      'FocusMonitor'
                    ],
                },
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_2__['ElementRef'],
                },
                {
                  type:
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__[
                      'MatFormField'
                    ],
                  decorators: [
                    {
                      type:
                        _angular_core__WEBPACK_IMPORTED_MODULE_2__['Optional'],
                    },
                    {
                      type:
                        _angular_core__WEBPACK_IMPORTED_MODULE_2__['Inject'],
                      args: [
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__[
                          'MAT_FORM_FIELD'
                        ],
                      ],
                    },
                  ],
                },
                {
                  type:
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__['NgControl'],
                  decorators: [
                    {
                      type:
                        _angular_core__WEBPACK_IMPORTED_MODULE_2__['Optional'],
                    },
                    {
                      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['Self'],
                    },
                  ],
                },
              ]
            },
            {
              timeLowInput: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['ViewChild'],
                  args: ['timeLow'],
                },
              ],
              timeMidInput: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['ViewChild'],
                  args: ['timeMid'],
                },
              ],
              timeHiAndVersionInput: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['ViewChild'],
                  args: ['timeHiAndVersion'],
                },
              ],
              id: [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_2__['HostBinding'],
                  args: ['attr.id'],
                },
              ],
              shouldLabelFloat: [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_2__['HostBinding'],
                  args: ['class.control-floating'],
                },
              ],
              userAriaDescribedBy: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['Input'],
                  args: ['aria-describedby'],
                },
              ],
              placeholder: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['Input'],
                },
              ],
              required: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['Input'],
                },
              ],
              disabled: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['Input'],
                },
              ],
              value: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_2__['Input'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ '4m4H':
      /*!*************************************************************!*\
  !*** ./apps/client/src/app/components/camera-lens/index.ts ***!
  \*************************************************************/
      /*! exports provided: CameraLensComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _camera_lens_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./camera-lens.component */ 'kPov'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'CameraLensComponent',
          function () {
            return _camera_lens_component__WEBPACK_IMPORTED_MODULE_0__[
              'CameraLensComponent'
            ]
          }
        )

        /***/
      },

    /***/ '4mQU':
      /*!*************************************************!*\
  !*** ./libs/shared/src/lib/components/index.ts ***!
  \*************************************************/
      /*! exports provided: CallAvatarComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _call_avatar_call_avatar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./call-avatar/call-avatar.component */ 'WX4o'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'CallAvatarComponent',
          function () {
            return _call_avatar_call_avatar_component__WEBPACK_IMPORTED_MODULE_0__[
              'CallAvatarComponent'
            ]
          }
        )

        /***/
      },

    /***/ '4xjg':
      /*!**********************************************!*\
  !*** ./libs/core/src/lib/peer-event.enum.ts ***!
  \**********************************************/
      /*! exports provided: PeerEvent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerEvent',
          function () {
            return PeerEvent
          }
        )
        var PeerEvent
        ;(function (PeerEvent) {
          PeerEvent['Connect'] = 'connect'
          PeerEvent['Disconnect'] = 'disconnect'
          PeerEvent['Connected'] = 'connected'
          PeerEvent['Completed'] = 'completed'
          PeerEvent['Offer'] = 'offer'
          PeerEvent['Answer'] = 'answer'
        })(PeerEvent || (PeerEvent = {}))

        /***/
      },

    /***/ '7c5J':
      /*!**********************************************!*\
  !*** ./libs/core/src/lib/peer-state.enum.ts ***!
  \**********************************************/
      /*! exports provided: PeerState */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerState',
          function () {
            return PeerState
          }
        )
        var PeerState
        ;(function (PeerState) {
          PeerState['Connected'] = 'connected'
          PeerState['Completed'] = 'completed'
        })(PeerState || (PeerState = {}))

        /***/
      },

    /***/ A6zu:
      /*!************************************************!*\
  !*** ./libs/core/src/lib/signaling-channel.ts ***!
  \************************************************/
      /*! exports provided: SignalingChannel */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SignalingChannel',
          function () {
            return SignalingChannel
          }
        )
        /* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! socket.io-client */ 'gFX4'
        )
        /* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          socket_io_client__WEBPACK_IMPORTED_MODULE_0__
        )
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! rxjs */ 'qCKp'
        )

        class SignalingChannel {
          constructor(uri) {
            this.message = new rxjs__WEBPACK_IMPORTED_MODULE_1__['Subject']()
            this.message$ = this.message.asObservable()
            console.log({ uri })
            if (uri) {
              this.io = socket_io_client__WEBPACK_IMPORTED_MODULE_0__[
                'connect'
              ](uri)
              this.io.on('message', (evt) => this.message.next(evt))
            }
          }
          send(data) {
            this.io.send(data)
          }
        }

        /***/
      },

    /***/ AlC0:
      /*!********************************************************!*\
  !*** ./apps/client/src/app/components/footer/index.ts ***!
  \********************************************************/
      /*! exports provided: FooterComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./footer.component */ 'pBeP'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'FooterComponent',
          function () {
            return _footer_component__WEBPACK_IMPORTED_MODULE_0__[
              'FooterComponent'
            ]
          }
        )

        /***/
      },

    /***/ Bmdo:
      /*!***********************************************!*\
  !*** ./apps/client/src/app/adapters/index.ts ***!
  \***********************************************/
      /*! exports provided: SignalingFactory, SIGNALING_CLIENT */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _signaling_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./signaling.adapter */ 'jvfH'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'SignalingFactory',
          function () {
            return _signaling_adapter__WEBPACK_IMPORTED_MODULE_0__[
              'SignalingFactory'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'SIGNALING_CLIENT',
          function () {
            return _signaling_adapter__WEBPACK_IMPORTED_MODULE_0__[
              'SIGNALING_CLIENT'
            ]
          }
        )

        /***/
      },

    /***/ CGVH:
      /*!*********************************************************************************!*\
  !*** ./apps/client/src/app/components/github-corner/github-corner.component.ts ***!
  \*********************************************************************************/
      /*! exports provided: GithubCornerComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'GithubCornerComponent',
          function () {
            return GithubCornerComponent
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )

        class GithubCornerComponent {
          constructor() {
            this.githubCorner = true
          }
        }
        GithubCornerComponent.ɵfac = function GithubCornerComponent_Factory(t) {
          return new (t || GithubCornerComponent)()
        }
        GithubCornerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: GithubCornerComponent,
          selectors: [['app-github-corner'], ['a', 'app-github-corner', '']],
          hostVars: 2,
          hostBindings: function GithubCornerComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'github-corner',
                ctx.githubCorner
              )
            }
          },
          decls: 4,
          vars: 0,
          consts: [
            ['width', '80', 'height', '80', 'viewBox', '0 0 250 250'],
            ['d', 'M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z'],
            [
              'd',
              'M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2',
              1,
              'octo-arm',
              2,
              'transform-origin',
              '130px 106px',
            ],
            [
              'd',
              'M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z',
              1,
              'octo-body',
            ],
          ],
          template: function GithubCornerComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'svg',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                1,
                'path',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                2,
                'path',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                3,
                'path',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
          },
          styles: [
            '[_nghost-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 0;\n  border: 0;\n  right: 0;\n  z-index: 10;\n}\n.github-corner[_nghost-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%] {\n  animation: octocat-wave 560ms ease-in-out;\n}\n@keyframes octocat-wave {\n  0%, 100% {\n    transform: rotate(0);\n  }\n  20%, 60% {\n    transform: rotate(-15deg);\n  }\n  40%, 80% {\n    transform: rotate(10deg);\n  }\n}\n@media (max-width: 500px) {\n  .github-corner[_ngcontent-%COMP%]:hover   .octo-arm[_ngcontent-%COMP%] {\n    animation: none;\n  }\n\n  .github-corner[_ngcontent-%COMP%]   .octo-arm[_ngcontent-%COMP%] {\n    animation: octocat-wave 560ms ease-in-out;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2dpdGh1Yi1jb3JuZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFBRTtFQUNFLHlDQUFBO0FBRUo7QUFFQTtFQUNFO0lBRUUsb0JBQUE7RUFBRjtFQUVBO0lBRUUseUJBQUE7RUFERjtFQUdBO0lBRUUsd0JBQUE7RUFGRjtBQUNGO0FBSUE7RUFDRTtJQUNFLGVBQUE7RUFGRjs7RUFJQTtJQUNFLHlDQUFBO0VBREY7QUFDRiIsImZpbGUiOiJnaXRodWItY29ybmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm9yZGVyOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTA7XG4gICYuZ2l0aHViLWNvcm5lcjpob3ZlciAub2N0by1hcm0ge1xuICAgIGFuaW1hdGlvbjogb2N0b2NhdC13YXZlIDU2MG1zIGVhc2UtaW4tb3V0O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgb2N0b2NhdC13YXZlIHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDIwJSxcbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xuICB9XG4gIDQwJSxcbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZ2l0aHViLWNvcm5lcjpob3ZlciAub2N0by1hcm0ge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxuICAuZ2l0aHViLWNvcm5lciAub2N0by1hcm0ge1xuICAgIGFuaW1hdGlvbjogb2N0b2NhdC13YXZlIDU2MG1zIGVhc2UtaW4tb3V0O1xuICB9XG59XG4iXX0= */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            GithubCornerComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-github-corner, a[app-github-corner]',
                    templateUrl: './github-corner.component.html',
                    styleUrls: ['./github-corner.component.scss'],
                  },
                ],
              },
            ],
            null,
            {
              githubCorner: [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostBinding'],
                  args: ['class.github-corner'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ F1In:
      /*!******************************************************************!*\
  !*** ./apps/client/$$_lazy_route_resource lazy namespace object ***!
  \******************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'")
            e.code = 'MODULE_NOT_FOUND'
            throw e
          })
        }
        webpackEmptyAsyncContext.keys = function () {
          return []
        }
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext
        module.exports = webpackEmptyAsyncContext
        webpackEmptyAsyncContext.id = 'F1In'

        /***/
      },

    /***/ Huv7:
      /*!********************************!*\
  !*** ./libs/core/src/index.ts ***!
  \********************************/
      /*! exports provided: PeerStats, SignalingChannel, Logger, PeerEvent, PeerState, RTCPeerMock */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _lib_signaling_channel_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lib/signaling-channel.interface */ 'aKNb'
        )
        /* empty/unused harmony star reexport */ /* harmony import */ var _lib_utilities_with_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./lib/utilities/with-target */ 'si1g'
        )
        /* empty/unused harmony star reexport */ /* harmony import */ var _lib_entities_peer_stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./lib/entities/peer-stats */ 'plik'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerStats',
          function () {
            return _lib_entities_peer_stats__WEBPACK_IMPORTED_MODULE_2__[
              'PeerStats'
            ]
          }
        )

        /* harmony import */ var _lib_signaling_channel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./lib/signaling-channel */ 'A6zu'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'SignalingChannel',
          function () {
            return _lib_signaling_channel__WEBPACK_IMPORTED_MODULE_3__[
              'SignalingChannel'
            ]
          }
        )

        /* harmony import */ var _lib_utilities_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./lib/utilities/logger */ 'vWg3'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Logger',
          function () {
            return _lib_utilities_logger__WEBPACK_IMPORTED_MODULE_4__['Logger']
          }
        )

        /* harmony import */ var _lib_peer_event_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./lib/peer-event.enum */ '4xjg'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerEvent',
          function () {
            return _lib_peer_event_enum__WEBPACK_IMPORTED_MODULE_5__[
              'PeerEvent'
            ]
          }
        )

        /* harmony import */ var _lib_peer_state_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./lib/peer-state.enum */ '7c5J'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerState',
          function () {
            return _lib_peer_state_enum__WEBPACK_IMPORTED_MODULE_6__[
              'PeerState'
            ]
          }
        )

        /* harmony import */ var _tests_rtc_peer_mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./tests/rtc-peer-mock */ 'lSsD'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'RTCPeerMock',
          function () {
            return _tests_rtc_peer_mock__WEBPACK_IMPORTED_MODULE_7__[
              'RTCPeerMock'
            ]
          }
        )

        /***/
      },

    /***/ Jd0j:
      /*!*****************************************************!*\
  !*** ./libs/ui/controls/src/lib/controls.module.ts ***!
  \*****************************************************/
      /*! exports provided: ControlsModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ControlsModule',
          function () {
            return ControlsModule
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _quertc_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @quertc/shared */ '2Mw2'
        )
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */ '3Pt+'
        )
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/icon */ 'NFeN'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )
        /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/select */ 'd3UM'
        )
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/form-field */ 'kmnG'
        )
        /* harmony import */ var _devices_devices_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./devices/devices.component */ 'sl1n'
        )
        /* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./code/code.component */ '4ciH'
        )

        class ControlsModule {}
        ControlsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineNgModule'
        ]({ type: ControlsModule })
        ControlsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineInjector'
        ]({
          factory: function ControlsModule_Factory(t) {
            return new (t || ControlsModule)()
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _quertc_shared__WEBPACK_IMPORTED_MODULE_2__['SharedModule'],
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__[
                'MatIconModule'
              ],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_5__[
                'MatButtonModule'
              ],
              _angular_material_select__WEBPACK_IMPORTED_MODULE_6__[
                'MatSelectModule'
              ],
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__[
                'MatFormFieldModule'
              ],
              _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                'ReactiveFormsModule'
              ],
            ],
          ],
        })
        ;(function () {
          ;(typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵsetNgModuleScope'
            ](ControlsModule, {
              declarations: [
                _devices_devices_component__WEBPACK_IMPORTED_MODULE_8__[
                  'DevicesComponent'
                ],
                _code_code_component__WEBPACK_IMPORTED_MODULE_9__[
                  'CodeComponent'
                ],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _quertc_shared__WEBPACK_IMPORTED_MODULE_2__['SharedModule'],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__[
                  'MatIconModule'
                ],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__[
                  'MatButtonModule'
                ],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__[
                  'MatSelectModule'
                ],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__[
                  'MatFormFieldModule'
                ],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                  'ReactiveFormsModule'
                ],
              ],
              exports: [
                _devices_devices_component__WEBPACK_IMPORTED_MODULE_8__[
                  'DevicesComponent'
                ],
                _code_code_component__WEBPACK_IMPORTED_MODULE_9__[
                  'CodeComponent'
                ],
              ],
            })
        })()
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ControlsModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__[
                        'CommonModule'
                      ],
                      _quertc_shared__WEBPACK_IMPORTED_MODULE_2__[
                        'SharedModule'
                      ],
                      _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__[
                        'MatIconModule'
                      ],
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_5__[
                        'MatButtonModule'
                      ],
                      _angular_material_select__WEBPACK_IMPORTED_MODULE_6__[
                        'MatSelectModule'
                      ],
                      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__[
                        'MatFormFieldModule'
                      ],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_3__[
                        'ReactiveFormsModule'
                      ],
                    ],
                    declarations: [
                      _devices_devices_component__WEBPACK_IMPORTED_MODULE_8__[
                        'DevicesComponent'
                      ],
                      _code_code_component__WEBPACK_IMPORTED_MODULE_9__[
                        'CodeComponent'
                      ],
                    ],
                    exports: [
                      _devices_devices_component__WEBPACK_IMPORTED_MODULE_8__[
                        'DevicesComponent'
                      ],
                      _code_code_component__WEBPACK_IMPORTED_MODULE_9__[
                        'CodeComponent'
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ Jt1E:
      /*!*****************************************************!*\
  !*** ./libs/ui/carousel/src/lib/carousel.module.ts ***!
  \*****************************************************/
      /*! exports provided: CarouselModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CarouselModule',
          function () {
            return CarouselModule
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/icon */ 'NFeN'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )
        /* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./carousel */ '1/2/'
        )

        class CarouselModule {}
        CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineNgModule'
        ]({ type: CarouselModule })
        CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineInjector'
        ]({
          factory: function CarouselModule_Factory(t) {
            return new (t || CarouselModule)()
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__[
                'MatIconModule'
              ],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_3__[
                'MatButtonModule'
              ],
            ],
          ],
        })
        ;(function () {
          ;(typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵsetNgModuleScope'
            ](CarouselModule, {
              declarations: [
                _carousel__WEBPACK_IMPORTED_MODULE_4__['Carousel'],
                _carousel__WEBPACK_IMPORTED_MODULE_4__['CarouselItem'],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__[
                  'MatIconModule'
                ],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__[
                  'MatButtonModule'
                ],
              ],
              exports: [
                _carousel__WEBPACK_IMPORTED_MODULE_4__['Carousel'],
                _carousel__WEBPACK_IMPORTED_MODULE_4__['CarouselItem'],
              ],
            })
        })()
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CarouselModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__[
                        'CommonModule'
                      ],
                      _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__[
                        'MatIconModule'
                      ],
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_3__[
                        'MatButtonModule'
                      ],
                    ],
                    exports: [
                      _carousel__WEBPACK_IMPORTED_MODULE_4__['Carousel'],
                      _carousel__WEBPACK_IMPORTED_MODULE_4__['CarouselItem'],
                    ],
                    declarations: [
                      _carousel__WEBPACK_IMPORTED_MODULE_4__['Carousel'],
                      _carousel__WEBPACK_IMPORTED_MODULE_4__['CarouselItem'],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ MAu8:
      /*!***************************************!*\
  !*** ./libs/ui/controls/src/index.ts ***!
  \***************************************/
      /*! exports provided: Code, CodeComponent, DevicesComponent, code, ControlsModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _lib_code_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lib/code/code.component */ '4ciH'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Code',
          function () {
            return _lib_code_code_component__WEBPACK_IMPORTED_MODULE_0__['Code']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'CodeComponent',
          function () {
            return _lib_code_code_component__WEBPACK_IMPORTED_MODULE_0__[
              'CodeComponent'
            ]
          }
        )

        /* harmony import */ var _lib_devices_devices_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./lib/devices/devices.component */ 'sl1n'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'DevicesComponent',
          function () {
            return _lib_devices_devices_component__WEBPACK_IMPORTED_MODULE_1__[
              'DevicesComponent'
            ]
          }
        )

        /* harmony import */ var _lib_utilities_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./lib/utilities/code */ 'waiM'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'code',
          function () {
            return _lib_utilities_code__WEBPACK_IMPORTED_MODULE_2__['code']
          }
        )

        /* harmony import */ var _lib_controls_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./lib/controls.module */ 'Jd0j'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'ControlsModule',
          function () {
            return _lib_controls_module__WEBPACK_IMPORTED_MODULE_3__[
              'ControlsModule'
            ]
          }
        )

        /***/
      },

    /***/ 'N6N/':
      /*!*************************************************************!*\
  !*** ./libs/shared/src/lib/components/call-avatar/index.ts ***!
  \*************************************************************/
      /*! exports provided: CallAvatarComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _call_avatar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./call-avatar.component */ 'WX4o'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'CallAvatarComponent',
          function () {
            return _call_avatar_component__WEBPACK_IMPORTED_MODULE_0__[
              'CallAvatarComponent'
            ]
          }
        )

        /***/
      },

    /***/ OYOV:
      /*!******************************************************!*\
  !*** ./libs/ui/controls/src/lib/control-accessor.ts ***!
  \******************************************************/
      /*! exports provided: ControlAccessor */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ControlAccessor',
          function () {
            return ControlAccessor
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )

        class ControlAccessor {
          constructor() {
            this.onChange = () => {}
            this.onTouched = () => {}
          }
          get value() {
            return this._value
          }
          set value(value) {
            console.log('value: ', value)
            this._value = value
          }
          writeValue(obj) {
            this.value = obj
          }
          registerOnChange(fn) {
            this.onChange = fn
          }
          registerOnTouched(fn) {
            this.onTouched = fn
          }
          setDisabledState(isDisabled) {
            this._disabled = isDisabled
          }
        }
        ControlAccessor.ɵfac = function ControlAccessor_Factory(t) {
          return new (t || ControlAccessor)()
        }
        ControlAccessor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineInjectable'
        ]({ token: ControlAccessor, factory: ControlAccessor.ɵfac })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ControlAccessor,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
              },
            ],
            null,
            {
              value: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostBinding'],
                  args: ['attr.value'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ R5Lt:
      /*!****************************************************!*\
  !*** ./apps/client/src/app/home/home.component.ts ***!
  \****************************************************/
      /*! exports provided: HomeComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'HomeComponent',
          function () {
            return HomeComponent
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _libs_ui_carousel_src_lib_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../../../../libs/ui/carousel/src/lib/carousel */ '1/2/'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/divider */ 'f0Cb'
        )
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        )
        /* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../components/footer/footer.component */ 'pBeP'
        )

        function HomeComponent_div_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'div',
              7
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              1,
              'div',
              8
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'img', 9)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
          if (rf & 2) {
            const item_r1 = ctx.$implicit
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'alt',
              item_r1.alt
            )(
              'src',
              item_r1.src,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
              ' ',
              item_r1.alt,
              ' '
            )
          }
        }
        class HomeComponent {
          constructor() {
            this.banners = [
              {
                src: 'assets/banners/peer-to-peer.svg',
                alt: 'Ponto a ponto',
                action: '',
              },
              { src: 'assets/banners/live.svg', alt: 'Tempo real', action: '' },
              {
                src: 'assets/banners/broadcast.svg',
                alt: 'Difusor',
                action: '',
              },
              {
                src: 'assets/banners/multi-protocols.svg',
                alt: 'Multi protocolo',
                action: '',
              },
              { src: 'assets/banners/security.svg', alt: 'Seguro', action: '' },
              { src: 'assets/banners/easy.svg', alt: 'Simples', action: '' },
            ]
          }
        }
        HomeComponent.ɵfac = function HomeComponent_Factory(t) {
          return new (t || HomeComponent)()
        }
        HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: HomeComponent,
          selectors: [['app-home']],
          decls: 47,
          vars: 3,
          consts: [
            [1, 'docs-home-promo'],
            [1, 'docs-home-featured-components', 'docs-home-carousel-row'],
            [3, 'itemWidth', 'aria-label'],
            [
              'carousel-item',
              '',
              'class',
              'docs-featured-components-carousel-item',
              4,
              'ngFor',
              'ngForOf',
            ],
            [1, 'docs-home-row', 'docs-introduction'],
            [1, 'docs-home-row-column'],
            ['routerLink', '', 1, 'docs-link'],
            ['carousel-item', '', 1, 'docs-featured-components-carousel-item'],
            [1, 'docs-home-img-container'],
            ['role', 'presentation', 3, 'alt', 'src'],
          ],
          template: function HomeComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'main',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                1,
                'div',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                2,
                'quertc-carousel',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                3,
                HomeComponent_div_3_Template,
                4,
                3,
                'div',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                4,
                'mat-divider'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                5,
                'div',
                4
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                6,
                'div',
                5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                7,
                'h2'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                8,
                'C\u00F3digo aberto'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                9,
                'p'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                10,
                ' O projeto WebRTC \u00E9 de c\u00F3digo aberto e suportado pela Apple, Google, Microsoft e Mozilla, entre outros. '
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                11,
                'p'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                12,
                ' Todo conte\u00FAdo do projeto s\u00E3o/ser\u00E3o mantidos pela comunidade. '
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                13,
                'a',
                6
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                14,
                'Gostaria de contribuir?'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                15,
                'div',
                5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                16,
                'h2'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                17,
                'Vers\u00E1til'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                18,
                'p'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                19,
                ' Projetado de forma que possa ser integrado aos sistemas de comunica\u00E7\u00E3o existentes: voz sobre IP (VOIP), v\u00E1rios clientes SIP. '
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                20,
                'p'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                21,
                'Inclusive rede telef\u00F4nica p\u00FAblica comutada.'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                22,
                'div',
                5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                23,
                'h2'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                24,
                'Simples'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                25,
                'p'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                26,
                ' Aplica\u00E7\u00F5es de \u00E1udio, v\u00EDdeo e troca de dados ponto a ponto com alta qualidade, requer muitas novas funcionalidades no navegador. '
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                27,
                'p'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                28,
                ' Felizmente, o navegador abstrai a essa complexidade com tr\u00EAs APIs principais. '
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](29, 'br')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                30,
                'div',
                4
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                31,
                'div',
                5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                32,
                'h2'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                33,
                'MediaStream'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                34,
                'p'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                35,
                'Aquisi\u00E7\u00E3o de streams para \u00E1udio e v\u00EDdeo'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                36,
                'div',
                5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                37,
                'h2'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                38,
                'RTCPeerConnection'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                39,
                'p'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                40,
                'Comunica\u00E7\u00E3o de dados para \u00E1udio e v\u00EDdeo'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                41,
                'div',
                5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                42,
                'h2'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                43,
                'RTCDataChannel'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                44,
                'p'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                45,
                'Comunica\u00E7\u00E3o de dados para aplicativos'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                46,
                'app-footer'
              )
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'itemWidth',
                260
              )('aria-label', 'Featured components')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngForOf',
                ctx.banners
              )
            }
          },
          directives: [
            _libs_ui_carousel_src_lib_carousel__WEBPACK_IMPORTED_MODULE_1__[
              'Carousel'
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__['NgForOf'],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__[
              'MatDivider'
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__['RouterLinkWithHref'],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__[
              'FooterComponent'
            ],
            _libs_ui_carousel_src_lib_carousel__WEBPACK_IMPORTED_MODULE_1__[
              'CarouselItem'
            ],
          ],
          styles: [
            '[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.docs-header-background[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 420px;\n}\n\n.docs-header-background[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  background-size: 600px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-repeat: no-repeat;\n  background-position: 80% 20px;\n  opacity: 0.2;\n}\n\n.docs-header-section[_ngcontent-%COMP%] {\n  width: 90%;\n  position: absolute;\n  z-index: 0;\n  text-align: center;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.docs-header-headline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 56px;\n  font-weight: bold;\n  line-height: 56px;\n  margin: 15px 5px;\n}\n\n.docs-header-headline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 28px;\n  margin: 15px 0 25px 0;\n}\n\n.docs-home-promo[_ngcontent-%COMP%] {\n  flex: 1;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n}\n\n.docs-home-promo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.docs-home-promo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 400;\n  margin: 16px 0;\n  padding: 0;\n}\n\n.docs-home-promo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 28px;\n  margin: 0 0 24px 0;\n  padding: 0;\n}\n\n.docs-home-promo[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.docs-home-promo[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.docs-home-row[_ngcontent-%COMP%] {\n  width: 75%;\n  display: flex;\n  flex-direction: row;\n  margin: 50px 0;\n}\n\n.docs-home-carousel-row[_ngcontent-%COMP%] {\n  margin: 50px 0;\n  width: 75%;\n  display: flex;\n  flex-direction: column;\n}\n\n.docs-home-carousel-row[_ngcontent-%COMP%]   a.docs-link[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n}\n\n.docs-home-carousel-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\n.docs-home-guides[_ngcontent-%COMP%]   .docs-home-guides-card-divider[_ngcontent-%COMP%] {\n  width: 30%;\n  height: 5px;\n  margin: 15px auto;\n}\n\n.docs-home-guides[_ngcontent-%COMP%]   .docs-home-guides-carousel-item[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: flex;\n  text-decoration: none;\n}\n\n.docs-home-guides[_ngcontent-%COMP%]   .docs-home-guides-card.mat-card[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.docs-home-guides[_ngcontent-%COMP%]   .docs-home-guides-card[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  height: 35%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.docs-home-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n}\n\n.docs-home-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]   .docs-home-img-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 259px;\n  height: 144px;\n  margin-bottom: 10px;\n}\n\n.docs-home-featured-components[_ngcontent-%COMP%]   .docs-featured-components-carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n  width: 100%;\n}\n\n.docs-home-row-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n  width: 30%;\n}\n\n.docs-header-start[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 50px 0 0 0;\n}\n\n.docs-header-start[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n@media (max-width: 1200px) {\n  .docs-header-background[_ngcontent-%COMP%] {\n    height: 330px;\n  }\n\n  .docs-header-background[_ngcontent-%COMP%]:before {\n    background-image: none;\n  }\n}\n\n@media (max-width: 850px) {\n  .docs-header-background[_ngcontent-%COMP%]:before {\n    background-image: none;\n  }\n\n  .docs-introduction[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .docs-home-row-column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n\n\n@media (max-width: 720px) {\n  .docs-header-start[_ngcontent-%COMP%] {\n    margin: 15px 0 0 0;\n  }\n\n  .docs-home-row[_ngcontent-%COMP%], .docs-home-carousel-row[_ngcontent-%COMP%] {\n    margin: 15px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7QUFGRjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQURGOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUhKOztBQU9BO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUpGOztBQU1FO0VBQ0UscUJBQUE7QUFKSjs7QUFPRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBTEo7O0FBUUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU5KOztBQVNFO0VBQ0UsVUFBQTtBQVBKOztBQVVFO0VBQ0Usc0JBQUE7QUFSSjs7QUFZQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBVEY7O0FBWUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVRGOztBQVdFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBVEo7O0FBWUU7RUFDRSxhQUFBO0FBVko7O0FBZUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBWko7O0FBZUU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBYko7O0FBZ0JFO0VBQ0Usa0JBQUE7QUFkSjs7QUFpQkU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBZko7O0FBb0JFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBakJKOztBQW1CSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWpCTjs7QUFvQkk7RUFDRSw0QkFBQTtFQUNBLFdBQUE7QUFsQk47O0FBdUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFwQkY7O0FBdUJBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQXBCRjs7QUFzQkU7RUFDRSxlQUFBO0FBcEJKOztBQXdCQTtFQUNFO0lBQ0UsYUFBQTtFQXJCRjs7RUF1QkE7SUFDRSxzQkFBQTtFQXBCRjtBQUNGOztBQXVCQTtFQUNFO0lBQ0Usc0JBQUE7RUFyQkY7O0VBdUJBO0lBQ0Usc0JBQUE7RUFwQkY7O0VBdUJBO0lBQ0UsV0FBQTtFQXBCRjtBQUNGOztBQXVCQTs7R0FBQTs7QUFHQTtFQUNFO0lBQ0Usa0JBQUE7RUFyQkY7O0VBd0JBOztJQUVFLGNBQUE7RUFyQkY7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1hcmdpbiBiZXR3ZWVuIHR3byBzZWN0aW9uc1xuJG1hcmdpbi1wcm9tb3Rpb24tc2VjdGlvbnM6IDUwcHg7XG4kbWFyZ2luLXByb21vdGlvbi1zZWN0aW9ucy1zbWFsbDogMTVweDtcbjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuLmRvY3MtaGVhZGVyLWJhY2tncm91bmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNDIwcHg7XG59XG5cbi5kb2NzLWhlYWRlci1iYWNrZ3JvdW5kOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDYwMHB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDgwJSAyMHB4O1xuICBvcGFjaXR5OiAwLjI7XG59XG5cbi5kb2NzLWhlYWRlci1zZWN0aW9uIHtcbiAgd2lkdGg6IDkwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZG9jcy1oZWFkZXItaGVhZGxpbmUge1xuICBoMSB7XG4gICAgZm9udC1zaXplOiA1NnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICAgIG1hcmdpbjogMTVweCA1cHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiAxNXB4IDAgMjVweCAwO1xuICB9XG59XG5cbi5kb2NzLWhvbWUtcHJvbW8ge1xuICBmbGV4OiAxO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxNnB4O1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDE2cHggMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiAwIDAgMjRweCAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBtYXQtZGl2aWRlciB7XG4gICAgd2lkdGg6IDc1JTtcbiAgfVxuXG4gIG1hdC1pY29uIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59XG5cbi5kb2NzLWhvbWUtcm93IHtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAkbWFyZ2luLXByb21vdGlvbi1zZWN0aW9ucyAwO1xufVxuXG4uZG9jcy1ob21lLWNhcm91c2VsLXJvdyB7XG4gIG1hcmdpbjogJG1hcmdpbi1wcm9tb3Rpb24tc2VjdGlvbnMgMDtcbiAgd2lkdGg6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBhLmRvY3MtbGluayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG4uZG9jcy1ob21lLWd1aWRlcyB7XG4gIC5kb2NzLWhvbWUtZ3VpZGVzLWNhcmQtZGl2aWRlciB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgfVxuXG4gIC5kb2NzLWhvbWUtZ3VpZGVzLWNhcm91c2VsLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICAuZG9jcy1ob21lLWd1aWRlcy1jYXJkLm1hdC1jYXJkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZG9jcy1ob21lLWd1aWRlcy1jYXJkIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgaGVpZ2h0OiAzNSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4uZG9jcy1ob21lLWZlYXR1cmVkLWNvbXBvbmVudHMge1xuICAuZG9jcy1mZWF0dXJlZC1jb21wb25lbnRzLWNhcm91c2VsLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmRvY3MtaG9tZS1pbWctY29udGFpbmVyIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogMjU5cHg7XG4gICAgICBoZWlnaHQ6IDE0NHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG4uZG9jcy1ob21lLXJvdy1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmRvY3MtaGVhZGVyLXN0YXJ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46ICRtYXJnaW4tcHJvbW90aW9uLXNlY3Rpb25zIDAgMCAwO1xuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmRvY3MtaGVhZGVyLWJhY2tncm91bmQge1xuICAgIGhlaWdodDogMzMwcHg7XG4gIH1cbiAgLmRvY3MtaGVhZGVyLWJhY2tncm91bmQ6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuICAuZG9jcy1oZWFkZXItYmFja2dyb3VuZDpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIH1cbiAgLmRvY3MtaW50cm9kdWN0aW9uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLmRvY3MtaG9tZS1yb3ctY29sdW1uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4vKipcbiAgKiBSdWxlcyBmb3Igd2hlbiB0aGUgZGV2aWNlIGlzIGRldGVjdGVkIHRvIGJlIGEgc21hbGwgc2NyZWVuLlxuICAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5kb2NzLWhlYWRlci1zdGFydCB7XG4gICAgbWFyZ2luOiAkbWFyZ2luLXByb21vdGlvbi1zZWN0aW9ucy1zbWFsbCAwIDAgMDtcbiAgfVxuXG4gIC5kb2NzLWhvbWUtcm93LFxuICAuZG9jcy1ob21lLWNhcm91c2VsLXJvdyB7XG4gICAgbWFyZ2luOiAkbWFyZ2luLXByb21vdGlvbi1zZWN0aW9ucy1zbWFsbCAwO1xuICB9XG59XG4iXX0= */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            HomeComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-home',
                    templateUrl: './home.component.html',
                    styleUrls: ['./home.component.scss'],
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ TK90:
      /*!********************************************************!*\
  !*** ./apps/client/src/app/components/navbar/index.ts ***!
  \********************************************************/
      /*! exports provided: NavbarComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./navbar.component */ 'xKNM'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'NavbarComponent',
          function () {
            return _navbar_component__WEBPACK_IMPORTED_MODULE_0__[
              'NavbarComponent'
            ]
          }
        )

        /***/
      },

    /***/ TftE:
      /*!***************************************************************!*\
  !*** ./apps/client/src/app/components/github-corner/index.ts ***!
  \***************************************************************/
      /*! exports provided: GithubCornerComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _github_corner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./github-corner.component */ 'CGVH'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'GithubCornerComponent',
          function () {
            return _github_corner_component__WEBPACK_IMPORTED_MODULE_0__[
              'GithubCornerComponent'
            ]
          }
        )

        /***/
      },

    /***/ VF6i:
      /*!*************************************!*\
  !*** ./apps/client/src/envs/env.ts ***!
  \*************************************/
      /*! exports provided: env */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'env',
          function () {
            return env
          }
        )
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        const env = {
          prod: false,
          signaling: 'http://localhost:3000',
        }
        /*
         * For easier debugging in development mode, you can import the following file
         * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
         *
         * This import should be commented out in production mode because it will have a negative impact
         * on performance if an error is thrown.
         */
        // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

        /***/
      },

    /***/ WX4o:
      /*!*****************************************************************************!*\
  !*** ./libs/shared/src/lib/components/call-avatar/call-avatar.component.ts ***!
  \*****************************************************************************/
      /*! exports provided: CallAvatarComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CallAvatarComponent',
          function () {
            return CallAvatarComponent
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )

        function CallAvatarComponent_ng_container_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵelementContainerStart'
            ](0)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'img', 3)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵelementContainerEnd'
            ]()
          }
          if (rf & 2) {
            const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵnextContext'
            ]()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'src',
              ctx_r0.src,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
            )('alt', ctx_r0.alt)
          }
        }
        function CallAvatarComponent_ng_template_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'svg',
              4
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
              1,
              'path',
              5
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
              2,
              'path',
              6
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
        }
        const _c0 = function (a0) {
          return { 'call-avatar-animation': a0 }
        }
        class CallAvatarComponent {
          constructor() {
            this.alt = 'avatar'
            // private _animation: boolean | undefined = false
            // public get animation(): boolean | undefined {
            //   return this._animation ?? false
            // }
            this.animation = false
          }
        }
        CallAvatarComponent.ɵfac = function CallAvatarComponent_Factory(t) {
          return new (t || CallAvatarComponent)()
        }
        CallAvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: CallAvatarComponent,
          selectors: [['quertc-call-avatar']],
          inputs: { src: 'src', alt: 'alt', animation: 'animation' },
          decls: 4,
          vars: 5,
          consts: [
            [1, 'call-avatar', 3, 'ngClass'],
            [4, 'ngIf', 'ngIfElse'],
            ['noSrc', ''],
            ['width', '135', 3, 'src', 'alt'],
            [
              'xmlns',
              'http://www.w3.org/2000/svg',
              'viewBox',
              '0 0 496.158 496.158',
            ],
            [
              'd',
              'M496.158,248.085c0-137.022-111.069-248.082-248.075-248.082C111.07,0.003,0,111.063,0,248.085\n\tc0,137.001,111.07,248.07,248.083,248.07C385.089,496.155,496.158,385.086,496.158,248.085z',
              2,
              'fill',
              '#333',
            ],
            [
              'd',
              'M138.216,173.592c0-13.915,4.467-28.015,13.403-42.297c8.933-14.282,21.973-26.11,39.111-35.486\n\tc17.139-9.373,37.134-14.062,59.985-14.062c21.238,0,39.99,3.921,56.25,11.755c16.26,7.838,28.818,18.495,37.683,31.97\n\tc8.861,13.479,13.293,28.125,13.293,43.945c0,12.452-2.527,23.367-7.581,32.739c-5.054,9.376-11.062,17.469-18.018,24.279\n\tc-6.959,6.812-19.446,18.275-37.463,34.388c-4.981,4.542-8.975,8.535-11.975,11.976c-3.004,3.443-5.239,6.592-6.702,9.447\n\tc-1.466,2.857-2.603,5.713-3.406,8.57c-0.807,2.855-2.015,7.875-3.625,15.051c-2.784,15.236-11.501,22.852-26.147,22.852\n\tc-7.618,0-14.028-2.489-19.226-7.471c-5.201-4.979-7.8-12.377-7.8-22.192c0-12.305,1.902-22.962,5.713-31.97\n\tc3.808-9.01,8.861-16.92,15.161-23.73c6.296-6.812,14.794-14.904,25.488-24.28c9.373-8.202,16.15-14.392,20.325-18.567\n\tc4.175-4.175,7.69-8.823,10.547-13.953c2.856-5.126,4.285-10.691,4.285-16.699c0-11.718-4.36-21.605-13.074-29.663\n\tc-8.717-8.054-19.961-12.085-33.728-12.085c-16.116,0-27.981,4.065-35.596,12.195c-7.618,8.13-14.062,20.105-19.336,35.925\n\tc-4.981,16.555-14.43,24.829-28.345,24.829c-8.206,0-15.127-2.891-20.764-8.679C141.035,186.593,138.216,180.331,138.216,173.592z\n\t M245.442,414.412c-8.937,0-16.737-2.895-23.401-8.68c-6.667-5.784-9.998-13.877-9.998-24.279c0-9.229,3.22-16.991,9.668-23.291\n\tc6.444-6.297,14.354-9.448,23.73-9.448c9.229,0,16.991,3.151,23.291,9.448c6.296,6.3,9.448,14.062,9.448,23.291\n\tc0,10.255-3.296,18.312-9.888,24.17C261.7,411.481,254.084,414.412,245.442,414.412z',
              2,
              'fill',
              '#18ffff',
            ],
          ],
          template: function CallAvatarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'div',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                1,
                CallAvatarComponent_ng_container_1_Template,
                2,
                2,
                'ng-container',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                2,
                CallAvatarComponent_ng_template_2_Template,
                3,
                0,
                'ng-template',
                null,
                2,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵtemplateRefExtractor'
                ]
              )
            }
            if (rf & 2) {
              const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                'ɵɵreference'
              ](3)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngClass',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction1'](
                  3,
                  _c0,
                  ctx.animation
                )
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngIf',
                ctx.src
              )('ngIfElse', _r1)
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgClass'],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['NgIf'],
          ],
          styles: [
            '[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .call-avatar[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 135px;\n  height: 135px;\n  position: relative;\n  margin: 0 auto;\n  border-radius: 100%;\n  border: solid 5px #fff;\n}\n[_nghost-%COMP%]   .call-avatar-animation[_ngcontent-%COMP%] {\n  -webkit-animation: play 2s ease infinite;\n          animation: play 2s ease infinite;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n[_nghost-%COMP%]     video {\n  width: 135px;\n  height: 135px;\n  border-radius: 100%;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%], [_nghost-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 135px;\n  height: 135px;\n  border-radius: 100%;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n@-webkit-keyframes play {\n  0% {\n    transform: scale(1);\n  }\n  15% {\n    box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.4);\n  }\n  25% {\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.4), 0 0 0 20px rgba(255, 255, 255, 0.2);\n  }\n  25% {\n    box-shadow: 0 0 0 15px rgba(255, 255, 255, 0.4), 0 0 0 30px rgba(255, 255, 255, 0.2);\n  }\n}\n@keyframes play {\n  0% {\n    transform: scale(1);\n  }\n  15% {\n    box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.4);\n  }\n  25% {\n    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.4), 0 0 0 20px rgba(255, 255, 255, 0.2);\n  }\n  25% {\n    box-shadow: 0 0 0 15px rgba(255, 255, 255, 0.4), 0 0 0 30px rgba(255, 255, 255, 0.2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NhbGwtYXZhdGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFDRSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQUVOO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUNKO0FBQ0U7O0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFDSjtBQUNFO0VBQ0U7SUFDRSxtQkFBQTtFQUNKO0VBQ0U7SUFDRSw4Q0FBQTtFQUNKO0VBQ0U7SUFDRSxvRkFBQTtFQUNKO0VBRUU7SUFDRSxvRkFBQTtFQUFKO0FBQ0Y7QUFiRTtFQUNFO0lBQ0UsbUJBQUE7RUFDSjtFQUNFO0lBQ0UsOENBQUE7RUFDSjtFQUNFO0lBQ0Usb0ZBQUE7RUFDSjtFQUVFO0lBQ0Usb0ZBQUE7RUFBSjtBQUNGIiwiZmlsZSI6ImNhbGwtYXZhdGFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcblxuICAuY2FsbC1hdmF0YXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIGhlaWdodDogMTM1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCA1cHggI2ZmZjtcbiAgICAmLWFuaW1hdGlvbiB7XG4gICAgICBhbmltYXRpb246IHBsYXkgMnMgZWFzZSBpbmZpbml0ZTtcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gIH1cbiAgOjpuZy1kZWVwIHZpZGVvIHtcbiAgICB3aWR0aDogMTM1cHg7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAwcHg7XG4gIH1cbiAgaW1nLFxuICB2aWRlbyB7XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIGhlaWdodDogMTM1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICB9XG4gIEBrZXlmcmFtZXMgcGxheSB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgMTUlIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiAgICAgICAgMCAwIDAgMjBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSxcbiAgICAgICAgMCAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgfVxuICB9XG59XG4iXX0= */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CallAvatarComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'quertc-call-avatar',
                    templateUrl: './call-avatar.component.html',
                    styleUrls: ['./call-avatar.component.scss'],
                  },
                ],
              },
            ],
            null,
            {
              src: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              alt: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              animation: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ Yrrw:
      /*!**************************************************************!*\
  !*** ./libs/shared/src/lib/services/media-stream.service.ts ***!
  \**************************************************************/
      /*! exports provided: MediaStreamService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'MediaStreamService',
          function () {
            return MediaStreamService
          }
        )
        /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */ 'mrSG'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )

        class MediaStreamService {
          constructor() {
            this.constraints = {
              audio: { echoCancellation: true },
              video: {
                facingMode: 'user',
                frameRate: 30,
                width: {
                  max: 1280,
                  ideal: 800,
                },
              },
            }
          }
          getUserMedia(constraints) {
            return navigator.mediaDevices.getUserMedia(
              constraints ? constraints : this.constraints
            )
          }
          getDevices(deviceKind) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
              this,
              void 0,
              void 0,
              function* () {
                const filter = ({ kind }) => kind === deviceKind
                const devices = yield navigator.mediaDevices.enumerateDevices()
                return deviceKind ? devices.filter(filter) : devices
              }
            )
          }
          getDisplayMedia() {
            const configuration = { video: true }
            const mediaDevices = navigator.mediaDevices
            if ('getDisplayMedia' in navigator) {
              return navigator.getDisplayMedia(configuration)
            } else if ('getDisplayMedia' in mediaDevices) {
              return mediaDevices.getDisplayMedia(configuration)
            } else {
              return mediaDevices.getUserMedia({
                video: { mediaSourcee: 'screen' },
              })
            }
          }
        }
        MediaStreamService.ɵfac = function MediaStreamService_Factory(t) {
          return new (t || MediaStreamService)()
        }
        MediaStreamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          'ɵɵdefineInjectable'
        ]({
          token: MediaStreamService,
          factory: MediaStreamService.ɵfac,
          providedIn: 'root',
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            MediaStreamService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'],
                args: [
                  {
                    providedIn: 'root',
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ 'ZL+G':
      /*!************************************************!*\
  !*** ./libs/ui/overlog/src/lib/overlog-ref.ts ***!
  \************************************************/
      /*! exports provided: OverlogRef */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OverlogRef',
          function () {
            return OverlogRef
          }
        )
        class OverlogRef {
          constructor(overlay) {
            this.overlay = overlay
          }
          close() {
            this.overlay.dispose()
          }
          isVisible() {
            return this.overlay && this.overlay.overlayElement
          }
          getPosition() {
            return this.overlay.overlayElement.getBoundingClientRect()
          }
        }

        /***/
      },

    /***/ ZUmW:
      /*!**********************************************!*\
  !*** ./libs/shared/src/lib/shared.module.ts ***!
  \**********************************************/
      /*! exports provided: MediaStreamService, SharedModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SharedModule',
          function () {
            return SharedModule
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./components */ '4mQU'
        )
        /* harmony import */ var _services_media_stream_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./services/media-stream.service */ 'Yrrw'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'MediaStreamService',
          function () {
            return _services_media_stream_service__WEBPACK_IMPORTED_MODULE_3__[
              'MediaStreamService'
            ]
          }
        )

        class SharedModule {}
        SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineNgModule'
        ]({ type: SharedModule })
        SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineInjector'
        ]({
          factory: function SharedModule_Factory(t) {
            return new (t || SharedModule)()
          },
          providers: [
            _services_media_stream_service__WEBPACK_IMPORTED_MODULE_3__[
              'MediaStreamService'
            ],
          ],
          imports: [
            [_angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule']],
          ],
        })
        ;(function () {
          ;(typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__[
              'ɵɵsetNgModuleScope'
            ](SharedModule, {
              declarations: [
                _components__WEBPACK_IMPORTED_MODULE_2__['CallAvatarComponent'],
              ],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              ],
              exports: [
                _components__WEBPACK_IMPORTED_MODULE_2__['CallAvatarComponent'],
              ],
            })
        })()
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            SharedModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__[
                        'CommonModule'
                      ],
                    ],
                    declarations: [
                      _components__WEBPACK_IMPORTED_MODULE_2__[
                        'CallAvatarComponent'
                      ],
                    ],
                    providers: [
                      _services_media_stream_service__WEBPACK_IMPORTED_MODULE_3__[
                        'MediaStreamService'
                      ],
                    ],
                    exports: [
                      _components__WEBPACK_IMPORTED_MODULE_2__[
                        'CallAvatarComponent'
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ Zr4m:
      /*!*********************************!*\
  !*** ./apps/client/src/main.ts ***!
  \*********************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _envs_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./envs/env */ 'VF6i'
        )
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */ 'q7cF'
        )
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */ 'jhN1'
        )

        if (_envs_env__WEBPACK_IMPORTED_MODULE_1__['env'].prod) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode'])()
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
          'platformBrowser'
        ]()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule']
          )
          .catch((err) => console.error(err))

        /***/
      },

    /***/ aKNb:
      /*!**********************************************************!*\
  !*** ./libs/core/src/lib/signaling-channel.interface.ts ***!
  \**********************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)

        /***/
      },

    /***/ cPJY:
      /*!***************************************************!*\
  !*** ./libs/ui/overlog/src/lib/overlog-config.ts ***!
  \***************************************************/
      /*! exports provided: OverlogData, defaultOverlogConfig, defaultPositions, OVERLOG_CONFIG */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OverlogData',
          function () {
            return OverlogData
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'defaultOverlogConfig',
          function () {
            return defaultOverlogConfig
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'defaultPositions',
          function () {
            return defaultPositions
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OVERLOG_CONFIG',
          function () {
            return OVERLOG_CONFIG
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )

        class OverlogData {
          constructor() {
            this.type = 'info'
          }
        }
        const defaultOverlogConfig = {
          position: {
            top: 20,
            right: 20,
            bottom: 20,
          },
          animation: {
            fadeOut: 500,
            fadeIn: 0,
          },
        }
        const defaultPositions = [
          // top center
          {
            overlayX: 'center',
            overlayY: 'bottom',
            originX: 'center',
            originY: 'top',
            panelClass: ['bottom', 'center'],
          },
          // top left
          {
            overlayX: 'start',
            overlayY: 'bottom',
            originX: 'center',
            originY: 'top',
          },
          // top right
          {
            overlayX: 'end',
            overlayY: 'bottom',
            originX: 'center',
            originY: 'top',
            panelClass: ['bottom', 'right'],
          },
          // bottom center
          {
            overlayX: 'center',
            overlayY: 'top',
            originX: 'center',
            originY: 'bottom',
            panelClass: ['top', 'center'],
          },
          // bottom left
          {
            overlayX: 'start',
            overlayY: 'top',
            originX: 'center',
            originY: 'bottom',
            panelClass: ['top', 'left'],
          },
          // bottom right
          {
            overlayX: 'end',
            overlayY: 'top',
            originX: 'center',
            originY: 'bottom',
            panelClass: ['top', 'right'],
          },
        ]
        const OVERLOG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'InjectionToken'
        ]('OverlogConfig')

        /***/
      },

    /***/ 'i0E/':
      /*!**********************************************!*\
  !*** ./apps/client/src/app/app.component.ts ***!
  \**********************************************/
      /*! exports provided: AppComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppComponent',
          function () {
            return AppComponent
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/cdk/layout */ '0MNC'
        )
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        )
        /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/sidenav */ 'XhcP'
        )
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs/operators */ 'kU1M'
        )
        /* harmony import */ var _quertc_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @quertc/shared */ '2Mw2'
        )
        /* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./components/navbar/navbar.component */ 'xKNM'
        )
        /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/list */ 'MutI'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _components_github_corner_github_corner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./components/github-corner/github-corner.component */ 'CGVH'
        )
        /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/material/tooltip */ 'Qu3c'
        )
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @angular/material/icon */ 'NFeN'
        )

        const _c0 = ['snav']
        function AppComponent_a_6_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              0,
              'a',
              9
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              1,
              'mat-icon',
              10
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
              3,
              'span'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
          }
          if (rf & 2) {
            const nav_r2 = ctx.$implicit
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'routerLink',
              nav_r2.route
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              nav_r2.icon
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2)
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
              nav_r2.label
            )
          }
        }
        class AppComponent {
          constructor(stream, mediaMatcher, detector, router) {
            this.stream = stream
            this.title = 'WebRTC.Community'
            this.navLinks = [
              { route: '/', icon: 'home', label: 'Home' },
              {
                route: '/restart-ice',
                icon: 'cached',
                label: 'Reiniciar candidato',
              },
              {
                route: '/peer-to-peer',
                icon: 'alt_route',
                label: 'Ponto a ponto',
              },
              {
                route: '/perfect-negotiation',
                icon: 'swap_calls',
                label: 'Negociação perfeita',
              },
            ]
            this.mobileQuery = mediaMatcher.matchMedia('(max-width: 600px)')
            this._mobileQueryListener = () => detector.detectChanges()
            this.mobileQuery.addEventListener(
              'change',
              this._mobileQueryListener
            )
            this.subscription = router.events
              .pipe(
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__['filter'])(
                  (evt) =>
                    evt instanceof
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__[
                      'NavigationStart'
                    ]
                )
              )
              .subscribe(() => this.onRouteChange())
          }
          onRouteChange() {
            var _a
            if (this.snav.opened) {
              this.snav.close()
            }
            if (
              (_a = this.stream.currentStream) === null || _a === void 0
                ? void 0
                : _a.active
            ) {
              this.stream.currentStream.getTracks().forEach((t) => t.stop())
            }
          }
          ngOnDestroy() {
            this.subscription.unsubscribe()
            this.mobileQuery.removeEventListener(
              'change',
              this._mobileQueryListener
            )
          }
        }
        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _quertc_shared__WEBPACK_IMPORTED_MODULE_5__['MediaStreamService']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__['MediaMatcher']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ChangeDetectorRef']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router']
            )
          )
        }
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: AppComponent,
          selectors: [['app-root']],
          viewQuery: function AppComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵviewQuery'](
                _c0,
                true
              )
            }
            if (rf & 2) {
              let _t
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  'ɵɵloadQuery'
                ]())
              ) && (ctx.snav = _t.first)
            }
          },
          decls: 10,
          vars: 7,
          consts: [
            [1, 'client-container'],
            [3, 'snav', 'title'],
            [1, 'client-sidenav-container'],
            ['fixedTopGap', '56', 3, 'mode', 'fixedInViewport'],
            ['snav', ''],
            [1, 'client-nav-list'],
            ['mat-list-item', '', 3, 'routerLink', 4, 'ngFor', 'ngForOf'],
            [1, 'client-sidenav-content'],
            [
              'rel',
              'external',
              'target',
              '_blank',
              'app-github-corner',
              '',
              'matTooltip',
              'Contribua com o projeto',
              'matTooltipPosition',
              'before',
              'href',
              'https://github.com/guiseek/webrtc.community',
            ],
            ['mat-list-item', '', 3, 'routerLink'],
            ['color', 'accent', 1, 'mat-18'],
          ],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'div',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                1,
                'app-navbar',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                2,
                'mat-sidenav-container',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                3,
                'mat-sidenav',
                3,
                4
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                5,
                'mat-nav-list',
                5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                6,
                AppComponent_a_6_Template,
                5,
                3,
                'a',
                6
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                7,
                'mat-sidenav-content',
                7
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](8, 'a', 8)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                9,
                'router-outlet'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
            if (rf & 2) {
              const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                'ɵɵreference'
              ](4)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'client-is-mobile',
                ctx.mobileQuery.matches
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'snav',
                _r0
              )('title', ctx.title)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'mode',
                'over'
              )('fixedInViewport', ctx.mobileQuery.matches)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'ngForOf',
                ctx.navLinks
              )
            }
          },
          directives: [
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__[
              'NavbarComponent'
            ],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__[
              'MatSidenavContainer'
            ],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__[
              'MatSidenav'
            ],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__['MatNavList'],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__['NgForOf'],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__[
              'MatSidenavContent'
            ],
            _components_github_corner_github_corner_component__WEBPACK_IMPORTED_MODULE_9__[
              'GithubCornerComponent'
            ],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__[
              'MatTooltip'
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterOutlet'],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__['MatListItem'],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterLinkWithHref'],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__['MatIcon'],
          ],
          styles: [
            '[_nghost-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  font-family: sans-serif;\n}\n.client-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.client-is-mobile[_ngcontent-%COMP%]   .client-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\nh1.client-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.client-nav-list[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.client-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n.client-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.client-is-mobile[_ngcontent-%COMP%]   .client-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFBQTtBQUdBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFFRjtBQUNBO0VBQ0UsZUFBQTtFQUNBLDhFQUFBO0VBQ0EsVUFBQTtBQUVGO0FBQ0E7RUFDRSxnQkFBQTtBQUVGO0FBQ0E7RUFDRSxpQkFBQTtBQUVGO0FBQ0E7RUFDRTswRkFBQTtFQUVBLE9BQUE7QUFFRjtBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBR0Y7QUFBQTtFQUNFOytEQUFBO0VBRUEsY0FBQTtBQUdGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBSZW1vdmUgdGVtcGxhdGUgY29kZSBiZWxvd1xuICovXG46aG9zdCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG4uY2xpZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY2xpZW50LWlzLW1vYmlsZSAuY2xpZW50LXRvb2xiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIE1ha2Ugc3VyZSB0aGUgdG9vbGJhciB3aWxsIHN0YXkgb24gdG9wIG9mIHRoZSBjb250ZW50IGFzIGl0IHNjcm9sbHMgcGFzdC4gKi9cbiAgei1pbmRleDogMjtcbn1cblxuaDEuY2xpZW50LWFwcC1uYW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmNsaWVudC1uYXYtbGlzdCAubWF0LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNsaWVudC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgbm90IGZpeGVkLCBzdHJldGNoIHRoZSBzaWRlbmF2IGNvbnRhaW5lciB0byBmaWxsIHRoZSBhdmFpbGFibGUgc3BhY2UuIFRoaXNcbiAgICAgY2F1c2VzIGA8bWF0LXNpZGVuYXYtY29udGVudD5gIHRvIGFjdCBhcyBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIGRlc2t0b3AgbGF5b3V0cy4gKi9cbiAgZmxleDogMTtcbn1cbi5jbGllbnQtc2lkZW5hdi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNsaWVudC1pcy1tb2JpbGUgLmNsaWVudC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXG4gICAgIGA8Ym9keT5gIHRvIGJlIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgbW9iaWxlIGxheW91dHMuICovXG4gIGZsZXg6IDEgMCBhdXRvO1xufVxuIl19 */',
          ],
          changeDetection: 0,
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.scss'],
                    changeDetection:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        'ChangeDetectionStrategy'
                      ].OnPush,
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _quertc_shared__WEBPACK_IMPORTED_MODULE_5__[
                      'MediaStreamService'
                    ],
                },
                {
                  type:
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__[
                      'MediaMatcher'
                    ],
                },
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                      'ChangeDetectorRef'
                    ],
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__['Router'],
                },
              ]
            },
            {
              snav: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'],
                  args: ['snav'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ iBb4:
      /*!****************************************************!*\
  !*** ./libs/ui/overlog/src/lib/overlog.service.ts ***!
  \****************************************************/
      /*! exports provided: OverlogService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OverlogService',
          function () {
            return OverlogService
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/cdk/portal */ '+rOU'
        )
        /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/cdk/overlay */ 'rDax'
        )
        /* harmony import */ var _overlog_snack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./overlog.snack */ 'yXgJ'
        )
        /* harmony import */ var _overlog_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./overlog-ref */ 'ZL+G'
        )
        /* harmony import */ var _overlog_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./overlog-config */ 'cPJY'
        )

        class OverlogService {
          constructor(overlay, parentInjector, overlogConfig) {
            this.overlay = overlay
            this.parentInjector = parentInjector
            this.overlogConfig = overlogConfig
          }
          show(data, config) {
            this.overlogConfig = Object.assign({}, this.overlogConfig, config)
            const positionStrategy = this.getPositionStrategy()
            const overlayRef = this.overlay.create({ positionStrategy })
            const overlogRef = new _overlog_ref__WEBPACK_IMPORTED_MODULE_4__[
              'OverlogRef'
            ](overlayRef)
            this.lastOverlog = overlogRef
            const injector = this.getInjector(
              data,
              overlogRef,
              this.parentInjector
            )
            const overlogPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__[
              'ComponentPortal'
            ](
              _overlog_snack__WEBPACK_IMPORTED_MODULE_3__['OverlogSnack'],
              null,
              injector
            )
            overlayRef.attach(overlogPortal)
            return overlogRef
          }
          showFrom(data, target) {
            const positionStrategy = this.getConnectedPosition(target)
            const overlayRef = this.overlay.create({ positionStrategy })
            const overlogRef = new _overlog_ref__WEBPACK_IMPORTED_MODULE_4__[
              'OverlogRef'
            ](overlayRef)
            this.lastOverlog = overlogRef
            const injector = this.getInjector(
              data,
              overlogRef,
              this.parentInjector
            )
            const overlogPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__[
              'ComponentPortal'
            ](
              _overlog_snack__WEBPACK_IMPORTED_MODULE_3__['OverlogSnack'],
              null,
              injector
            )
            overlayRef.attach(overlogPortal)
            return overlogRef
          }
          getConnectedPosition(target) {
            return this.overlay
              .position()
              .flexibleConnectedTo(target)
              .withFlexibleDimensions(false)
              .withPush(true)
              .withPositions(
                _overlog_config__WEBPACK_IMPORTED_MODULE_5__['defaultPositions']
              )
          }
          getPositionStrategy() {
            return this.overlay
              .position()
              .global()
              .top(this.getPosition())
              .right(this.overlogConfig.position.right + 'px')
          }
          getPosition() {
            const lastOverlogIsVisible =
              this.lastOverlog && this.lastOverlog.isVisible()
            const position = lastOverlogIsVisible
              ? this.lastOverlog.getPosition().bottom
              : this.overlogConfig.position.top
            return position + 'px'
          }
          getInjector(data, overlogRef, parentInjector) {
            const tokens = new WeakMap()
            tokens.set(
              _overlog_config__WEBPACK_IMPORTED_MODULE_5__['OverlogData'],
              data
            )
            tokens.set(
              _overlog_ref__WEBPACK_IMPORTED_MODULE_4__['OverlogRef'],
              overlogRef
            )
            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__[
              'PortalInjector'
            ](parentInjector, tokens)
          }
        }
        OverlogService.ɵfac = function OverlogService_Factory(t) {
          return new (t || OverlogService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__['Overlay']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injector']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵinject'](
              _overlog_config__WEBPACK_IMPORTED_MODULE_5__['OVERLOG_CONFIG']
            )
          )
        }
        OverlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineInjectable'
        ]({
          token: OverlogService,
          factory: OverlogService.ɵfac,
          providedIn: 'root',
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            OverlogService,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'],
                args: [
                  {
                    providedIn: 'root',
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__[
                      'Overlay'
                    ],
                },
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Injector'],
                },
                {
                  type: undefined,
                  decorators: [
                    {
                      type:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__['Inject'],
                      args: [
                        _overlog_config__WEBPACK_IMPORTED_MODULE_5__[
                          'OVERLOG_CONFIG'
                        ],
                      ],
                    },
                  ],
                },
              ]
            },
            null
          )
        })()

        /***/
      },

    /***/ jvfH:
      /*!***********************************************************!*\
  !*** ./apps/client/src/app/adapters/signaling.adapter.ts ***!
  \***********************************************************/
      /*! exports provided: SignalingFactory, SIGNALING_CLIENT */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SignalingFactory',
          function () {
            return SignalingFactory
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SIGNALING_CLIENT',
          function () {
            return SIGNALING_CLIENT
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _quertc_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @quertc/core */ 'Huv7'
        )

        function SignalingFactory(uri) {
          return new _quertc_core__WEBPACK_IMPORTED_MODULE_1__[
            'SignalingChannel'
          ](uri)
        }
        const SIGNALING_CLIENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'InjectionToken'
        ]('SignalingChannel')

        /***/
      },

    /***/ kPov:
      /*!*****************************************************************************!*\
  !*** ./apps/client/src/app/components/camera-lens/camera-lens.component.ts ***!
  \*****************************************************************************/
      /*! exports provided: CameraLensComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CameraLensComponent',
          function () {
            return CameraLensComponent
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )

        class CameraLensComponent {
          constructor() {
            this.cameraLens = true
          }
        }
        CameraLensComponent.ɵfac = function CameraLensComponent_Factory(t) {
          return new (t || CameraLensComponent)()
        }
        CameraLensComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: CameraLensComponent,
          selectors: [['app-camera-lens']],
          hostVars: 2,
          hostBindings: function CameraLensComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
                'app-camera-lens',
                ctx.cameraLens
              )
            }
          },
          decls: 12,
          vars: 0,
          consts: [
            [
              'xmlns',
              'http://www.w3.org/2000/svg',
              0,
              'xmlns',
              'xlink',
              'http://www.w3.org/1999/xlink',
              'viewBox',
              '0 0 180 180',
              'enable-background',
              'new 0 0 180 180',
              0,
              'xml',
              'space',
              'preserve',
            ],
            [1, 'outer'],
            [
              'stroke',
              '#202123',
              'stroke-width',
              '7',
              'stroke-miterlimit',
              '10',
              'cx',
              '90',
              'cy',
              '90',
              'r',
              '85.5',
            ],
            [
              'fill',
              'none',
              'stroke',
              '#202123',
              'stroke-width',
              '4',
              'stroke-miterlimit',
              '10',
              'd',
              'M17.9,71.7C23.9,47.4,42,28,65.3,19.8 M154,127.2\n\tc-5.7,9.6-13.4,18-22.6,24.2',
            ],
            [1, 'mid'],
            [
              'stroke',
              '#202123',
              'stroke-width',
              '11',
              'stroke-miterlimit',
              '10',
              'cx',
              '90',
              'cy',
              '90',
              'r',
              '59.8',
            ],
            [
              'fill',
              'none',
              'stroke-width',
              '3',
              'stroke-miterlimit',
              '10',
              'd',
              'M109.3,33.4c15.8,5.4,28.7,17.2,35.4,32.5\n\t M61.5,142.6c-7.8-4.2-14.7-10.3-19.9-17.5',
            ],
            [1, 'inner'],
            [
              'stroke',
              '#202123',
              'stroke-miterlimit',
              '10',
              'cx',
              '90',
              'cy',
              '90',
              'r',
              '18',
            ],
            [1, 'lens-flare'],
            ['fill', '#FFFFFF', 'cx', '108.6', 'cy', '66.2', 'r', '19.9'],
            ['fill', '#FFFFFF', 'cx', '73.9', 'cy', '112.5', 'r', '10.9'],
          ],
          template: function CameraLensComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'svg',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                1,
                'g',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                2,
                'circle',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                3,
                'path',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                4,
                'g',
                4
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                5,
                'circle',
                5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                6,
                'path',
                6
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                7,
                'g',
                7
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                8,
                'circle',
                8
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                9,
                'g',
                9
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                10,
                'circle',
                10
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                11,
                'circle',
                11
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
          },
          styles: [
            '[_nghost-%COMP%] {\n  display: block;\n  min-width: 100px;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: auto;\n  overflow: visible;\n  transition: all 0.3s ease-in-out;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   g.outer[_ngcontent-%COMP%] {\n  fill: #777;\n  transition: fill 0.5s ease-in;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   g.outer[_ngcontent-%COMP%], [_nghost-%COMP%]   svg[_ngcontent-%COMP%]   g.mid[_ngcontent-%COMP%], [_nghost-%COMP%]   svg[_ngcontent-%COMP%]   g.inner[_ngcontent-%COMP%], [_nghost-%COMP%]   svg[_ngcontent-%COMP%]   g.lens-flare[_ngcontent-%COMP%] {\n  transform-origin: 50% 50%;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   g.mid[_ngcontent-%COMP%] {\n  fill: #373737;\n  transition: fill 0.5s ease-in;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   g.mid[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #373737;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   g.inner[_ngcontent-%COMP%] {\n  stroke-width: 20;\n  fill: #373737;\n  transition: stroke-width 0.5s ease-in, fill 0.5s ease-in;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   g.lens-flare[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  transition: opacity 1s ease-in;\n}\n[_nghost-%COMP%]:hover   g.outer[_ngcontent-%COMP%] {\n  fill: #5e5e5e;\n  animation: rotate 0.5s ease-in-out 0.3s, scale 0.3s ease-in-out;\n}\n[_nghost-%COMP%]:hover   g.mid[_ngcontent-%COMP%] {\n  animation: scale 0.4s ease-in-out 0.2s;\n  fill: #aaaaaa;\n}\n[_nghost-%COMP%]:hover   g.inner[_ngcontent-%COMP%] {\n  animation: scale-inner 0.8s ease-in-out 0.3s;\n  fill: #c4c4c4;\n  stroke-width: 25;\n}\n[_nghost-%COMP%]:hover   g.lens-flare[_ngcontent-%COMP%] {\n  animation: scale-flare 1s ease-in-out 0.3s;\n  opacity: 0.8;\n}\n@keyframes rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  70% {\n    transform: rotate(45deg);\n  }\n  90% {\n    transform: rotate(20deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes scale {\n  0% {\n    transform: scale(1);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  70% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes scale-inner {\n  0% {\n    transform: scale(1);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  70% {\n    transform: scale(1.25);\n  }\n  100% {\n    transform: scale(1.2);\n  }\n}\n@keyframes scale-flare {\n  0% {\n    transform: scale(1);\n  }\n  30% {\n    transform: scale(0.95);\n  }\n  70% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2NhbWVyYS1sZW5zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBRkY7QUFHRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBREo7QUFFSTtFQUNFLFVBVFU7RUFVViw2QkFBQTtBQUFOO0FBRUk7Ozs7RUFJRSx5QkFBQTtBQUFOO0FBRUk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUFBTjtBQUNNO0VBQ0UsZUFBQTtBQUNSO0FBRUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx3REFBQTtBQUFOO0FBRUk7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7QUFBTjtBQUtJO0VBQ0UsYUFBQTtFQUNBLCtEQUFBO0FBSE47QUFLSTtFQUNFLHNDQUFBO0VBQ0EsYUFBQTtBQUhOO0FBS0k7RUFDRSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUhOO0FBS0k7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUFITjtBQU9FO0VBQ0U7SUFDRSx1QkFBQTtFQUxKO0VBT0U7SUFDRSx3QkFBQTtFQUxKO0VBT0U7SUFDRSx3QkFBQTtFQUxKO0VBT0U7SUFDRSx1QkFBQTtFQUxKO0FBQ0Y7QUFRRTtFQUNFO0lBQ0UsbUJBQUE7RUFOSjtFQVFFO0lBQ0Usc0JBQUE7RUFOSjtFQVFFO0lBQ0Usc0JBQUE7RUFOSjtFQVFFO0lBQ0UsbUJBQUE7RUFOSjtBQUNGO0FBU0U7RUFDRTtJQUNFLG1CQUFBO0VBUEo7RUFTRTtJQUNFLHNCQUFBO0VBUEo7RUFTRTtJQUNFLHNCQUFBO0VBUEo7RUFTRTtJQUNFLHFCQUFBO0VBUEo7QUFDRjtBQVVFO0VBQ0U7SUFDRSxtQkFBQTtFQVJKO0VBVUU7SUFDRSxzQkFBQTtFQVJKO0VBVUU7SUFDRSxzQkFBQTtFQVJKO0VBVUU7SUFDRSxtQkFBQTtFQVJKO0FBQ0YiLCJmaWxlIjoiY2FtZXJhLWxlbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAkY29sb3ItcHJpbWFyeTogIzZiNmJjMTtcbi8vICRjb2xvci1wcmltYXJ5OiAjODk2N2M2O1xuJGNvbG9yLXByaW1hcnk6ICM3Nzc7XG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBzdmcge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgIGcub3V0ZXIge1xuICAgICAgZmlsbDogJGNvbG9yLXByaW1hcnk7XG4gICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuNXMgZWFzZS1pbjtcbiAgICB9XG4gICAgZy5vdXRlcixcbiAgICBnLm1pZCxcbiAgICBnLmlubmVyLFxuICAgIGcubGVucy1mbGFyZSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIH1cbiAgICBnLm1pZCB7XG4gICAgICBmaWxsOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDI1JSk7XG4gICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuNXMgZWFzZS1pbjtcbiAgICAgIHBhdGgge1xuICAgICAgICBzdHJva2U6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMjUlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZy5pbm5lciB7XG4gICAgICBzdHJva2Utd2lkdGg6IDIwO1xuICAgICAgZmlsbDogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAyNSUpO1xuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlLXdpZHRoIDAuNXMgZWFzZS1pbiwgZmlsbCAwLjVzIGVhc2UtaW47XG4gICAgfVxuICAgIGcubGVucy1mbGFyZSB7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW47XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgZy5vdXRlciB7XG4gICAgICBmaWxsOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwJSk7XG4gICAgICBhbmltYXRpb246IHJvdGF0ZSAwLjVzIGVhc2UtaW4tb3V0IDAuM3MsIHNjYWxlIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIGcubWlkIHtcbiAgICAgIGFuaW1hdGlvbjogc2NhbGUgMC40cyBlYXNlLWluLW91dCAwLjJzO1xuICAgICAgZmlsbDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMjAlKTtcbiAgICB9XG4gICAgZy5pbm5lciB7XG4gICAgICBhbmltYXRpb246IHNjYWxlLWlubmVyIDAuOHMgZWFzZS1pbi1vdXQgMC4zcztcbiAgICAgIGZpbGw6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDMwJSk7XG4gICAgICBzdHJva2Utd2lkdGg6IDI1O1xuICAgIH1cbiAgICBnLmxlbnMtZmxhcmUge1xuICAgICAgYW5pbWF0aW9uOiBzY2FsZS1mbGFyZSAxcyBlYXNlLWluLW91dCAwLjNzO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNjYWxlIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHNjYWxlLWlubmVyIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgICB9XG4gICAgNzAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2NhbGUtZmxhcmUge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICAgIDMwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIH1cbiAgICA3MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxufVxuIl19 */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            CameraLensComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-camera-lens',
                    templateUrl: './camera-lens.component.html',
                    styleUrls: ['./camera-lens.component.scss'],
                  },
                ],
              },
            ],
            null,
            {
              cameraLens: [
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__['HostBinding'],
                  args: ['class.app-camera-lens'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ krWd:
      /*!***************************************!*\
  !*** ./libs/ui/carousel/src/index.ts ***!
  \***************************************/
      /*! exports provided: CarouselModule, CarouselItem, Carousel */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _lib_carousel_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lib/carousel.module */ 'Jt1E'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'CarouselModule',
          function () {
            return _lib_carousel_module__WEBPACK_IMPORTED_MODULE_0__[
              'CarouselModule'
            ]
          }
        )

        /* harmony import */ var _lib_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./lib/carousel */ '1/2/'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'CarouselItem',
          function () {
            return _lib_carousel__WEBPACK_IMPORTED_MODULE_1__['CarouselItem']
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'Carousel',
          function () {
            return _lib_carousel__WEBPACK_IMPORTED_MODULE_1__['Carousel']
          }
        )

        /***/
      },

    /***/ lSsD:
      /*!**********************************************!*\
  !*** ./libs/core/src/tests/rtc-peer-mock.ts ***!
  \**********************************************/
      /*! exports provided: RTCPeerMock */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'RTCPeerMock',
          function () {
            return RTCPeerMock
          }
        )
        class RTCPeerMock {
          constructor() {
            this.conn = new RTCPeerConnection()
            this.conn.addEventListener = (evt) => this.addEventListener(evt)
            this.conn.onconnectionstatechange = (event) =>
              this.onConnectionStateChange()
            this.conn.onicecandidate = (event) => this.onIceCandidate(event)
          }
          onConnectionStateChange() {
            console.log('onConnectionStateChange')
          }
          onIceCandidate(event) {
            console.log('onIceCandidate')
          }
          addEventListener(event) {
            console.log('addEventListener')
          }
        }

        /***/
      },

    /***/ mlcd:
      /*!******************************************************!*\
  !*** ./libs/ui/overlog/src/lib/overlog-animation.ts ***!
  \******************************************************/
      /*! exports provided: overlogAnimations, pulseAnimation, slideInAnimation, slideOutAnimation */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'overlogAnimations',
          function () {
            return overlogAnimations
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'pulseAnimation',
          function () {
            return pulseAnimation
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'slideInAnimation',
          function () {
            return slideInAnimation
          }
        )
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'slideOutAnimation',
          function () {
            return slideOutAnimation
          }
        )
        /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/animations */ 'R0Ic'
        )

        const overlogAnimations = {
          fadeOverlog: Object(
            _angular_animations__WEBPACK_IMPORTED_MODULE_0__['trigger']
          )('fadeAnimation', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__['state'])(
              'default',
              Object(
                _angular_animations__WEBPACK_IMPORTED_MODULE_0__['style']
              )({ opacity: 1 })
            ),
            Object(
              _angular_animations__WEBPACK_IMPORTED_MODULE_0__['transition']
            )('void => *', [
              Object(
                _angular_animations__WEBPACK_IMPORTED_MODULE_0__['style']
              )({ opacity: 0 }),
              Object(
                _angular_animations__WEBPACK_IMPORTED_MODULE_0__['animate']
              )('{{ fadeIn }}ms'),
            ]),
            Object(
              _angular_animations__WEBPACK_IMPORTED_MODULE_0__['transition']
            )(
              'default => closing',
              Object(
                _angular_animations__WEBPACK_IMPORTED_MODULE_0__['animate']
              )(
                '{{ fadeOut }}ms',
                Object(
                  _angular_animations__WEBPACK_IMPORTED_MODULE_0__['style']
                )({ opacity: 0 })
              )
            ),
          ]),
        }
        const pulseAnimation = Object(
          _angular_animations__WEBPACK_IMPORTED_MODULE_0__['animation']
        )([
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__['style'])({
            transform: 'scale(1)',
          }),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__['animate'])(
            '{{ timings }}',
            Object(
              _angular_animations__WEBPACK_IMPORTED_MODULE_0__['keyframes']
            )([
              Object(
                _angular_animations__WEBPACK_IMPORTED_MODULE_0__['style']
              )({ transform: 'scale(1)', offset: 0 }),
              Object(
                _angular_animations__WEBPACK_IMPORTED_MODULE_0__['style']
              )({ transform: 'scale(2)', offset: 0.5 }),
              Object(
                _angular_animations__WEBPACK_IMPORTED_MODULE_0__['style']
              )({ transform: 'scale(1)', offset: 1 }),
            ])
          ),
        ])
        const slideInAnimation = Object(
          _angular_animations__WEBPACK_IMPORTED_MODULE_0__['animation']
        )([
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__['style'])({
            transform: 'translateY({{ from }})',
            opacity: 0,
          }),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__['animate'])(
            '{{ timings }}',
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__['style'])(
              '*'
            )
          ),
        ])
        const slideOutAnimation = Object(
          _angular_animations__WEBPACK_IMPORTED_MODULE_0__['animation']
        )([
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__['animate'])(
            '{{ timings }}',
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__['style'])({
              transform: 'translateY({{ to }})',
              opacity: 0,
            })
          ),
        ])

        /***/
      },

    /***/ pBeP:
      /*!*******************************************************************!*\
  !*** ./apps/client/src/app/components/footer/footer.component.ts ***!
  \*******************************************************************/
      /*! exports provided: FooterComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FooterComponent',
          function () {
            return FooterComponent
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/toolbar */ '/t3+'
        )

        class FooterComponent {}
        FooterComponent.ɵfac = function FooterComponent_Factory(t) {
          return new (t || FooterComponent)()
        }
        FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: FooterComponent,
          selectors: [['app-footer']],
          decls: 8,
          vars: 0,
          consts: [
            [
              'rel',
              'external',
              'target',
              '_blank',
              'href',
              'https://github.com/guiseek/webrtc.community/blob/main/LICENSE',
              1,
              'docs-link',
            ],
            [
              'rel',
              'external',
              'target',
              '_blank',
              'href',
              'https://github.com/guiseek/webrtc.community',
              1,
              'docs-link',
            ],
            [
              'xmlns',
              'http://www.w3.org/2000/svg',
              'height',
              '32',
              'viewBox',
              '0 0 16 16',
              'version',
              '1.1',
              'width',
              '32',
              'aria-hidden',
              'true',
            ],
            [
              'fill-rule',
              'evenodd',
              'd',
              'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z',
            ],
          ],
          template: function FooterComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'mat-toolbar'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                1,
                'a',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                2,
                ' BSD 3-Clause License '
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                3,
                'a',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceSVG']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                4,
                'svg',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                5,
                'path',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnamespaceHTML']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                6,
                'span'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](
                7,
                '(c) 2020, Guilherme Siquinelli'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
          },
          directives: [
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__[
              'MatToolbar'
            ],
          ],
          styles: [
            'app-footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  /**\n  * Rules for when the device is detected to be a small screen.\n  */\n}\napp-footer .mat-toolbar {\n  font-size: 90%;\n  justify-content: center;\n  align-items: center;\n}\napp-footer .mat-toolbar a {\n  display: inline-flex;\n}\napp-footer .mat-toolbar svg {\n  display: inline-flex;\n  width: 24px;\n  height: auto;\n  margin: 0px 12px;\n}\n@media (max-width: 720px) {\n  app-footer .mat-toolbar {\n    flex-direction: column;\n  }\n  app-footer .mat-toolbar span {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBZUE7O0dBQUE7QUFYRjtBQUhFO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFLSjtBQUpJO0VBQ0Usb0JBQUE7QUFNTjtBQUpJO0VBQ0Usb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBTU47QUFBRTtFQUNFO0lBQ0Usc0JBQUE7RUFFSjtFQURJO0lBQ0UsYUFBQTtFQUdOO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5tYXQtdG9vbGJhciB7XG4gICAgZm9udC1zaXplOiA5MCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG1hcmdpbjogMHB4IDEycHg7XG4gICAgfVxuICB9XG4gIC8qKlxuICAqIFJ1bGVzIGZvciB3aGVuIHRoZSBkZXZpY2UgaXMgZGV0ZWN0ZWQgdG8gYmUgYSBzbWFsbCBzY3JlZW4uXG4gICovXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAgIC5tYXQtdG9vbGJhciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgc3BhbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */',
          ],
          encapsulation: 2,
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            FooterComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-footer',
                    templateUrl: './footer.component.html',
                    styleUrls: ['./footer.component.scss'],
                    encapsulation:
                      _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                        'ViewEncapsulation'
                      ].None,
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ plik:
      /*!**************************************************!*\
  !*** ./libs/core/src/lib/entities/peer-stats.ts ***!
  \**************************************************/
      /*! exports provided: PeerStats */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PeerStats',
          function () {
            return PeerStats
          }
        )
        class PeerStats {}

        /***/
      },

    /***/ q7cF:
      /*!*******************************************!*\
  !*** ./apps/client/src/app/app.module.ts ***!
  \*******************************************/
      /*! exports provided: AppModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppModule',
          function () {
            return AppModule
          }
        )
        /* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./routes */ 'zQRm'
        )
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/form-field */ 'kmnG'
        )
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/platform-browser/animations */ 'R1ws'
        )
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */ 'jhN1'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _quertc_overlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @quertc/overlog */ 't7Mq'
        )
        /* harmony import */ var _quertc_controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @quertc/controls */ 'MAu8'
        )
        /* harmony import */ var _quertc_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @quertc/carousel */ 'krWd'
        )
        /* harmony import */ var _quertc_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @quertc/core */ 'Huv7'
        )
        /* harmony import */ var _quertc_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @quertc/shared */ '2Mw2'
        )
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./app.component */ 'i0E/'
        )
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        )
        /* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! @angular/cdk/layout */ '0MNC'
        )
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          /*! @angular/material/icon */ 'NFeN'
        )
        /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          /*! @angular/material/list */ 'MutI'
        )
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          /*! @angular/material/card */ 'Wp6s'
        )
        /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          /*! @angular/material/tooltip */ 'Qu3c'
        )
        /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          /*! @angular/material/divider */ 'f0Cb'
        )
        /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          /*! @angular/material/toolbar */ '/t3+'
        )
        /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
          /*! @angular/material/sidenav */ 'XhcP'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
          /*! @angular/forms */ '3Pt+'
        )
        /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
          /*! @angular/service-worker */ 'Jho9'
        )
        /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
          /*! ./components */ 'vUUS'
        )
        /* harmony import */ var _adapters__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
          /*! ./adapters */ 'Bmdo'
        )
        /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          /*! ./home/home.component */ 'R5Lt'
        )
        /* harmony import */ var _envs_env__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          /*! ./../envs/env */ 'VF6i'
        )
        /* harmony import */ var _libs_ui_overlog_src_lib_overlog_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
          /*! ../../../../libs/ui/overlog/src/lib/overlog.module */ '0ujj'
        )

        class AppModule {}
        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__[
          'ɵɵdefineNgModule'
        ]({
          type: AppModule,
          bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__['AppComponent'],
          ],
        })
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__[
          'ɵɵdefineInjector'
        ]({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)()
          },
          providers: [
            {
              provide:
                _adapters__WEBPACK_IMPORTED_MODULE_24__['SIGNALING_CLIENT'],
              useValue:
                _envs_env__WEBPACK_IMPORTED_MODULE_26__['env'].signaling,
            },
            {
              provide:
                _quertc_core__WEBPACK_IMPORTED_MODULE_8__['SignalingChannel'],
              useFactory:
                _adapters__WEBPACK_IMPORTED_MODULE_24__['SignalingFactory'],
              deps: [
                _adapters__WEBPACK_IMPORTED_MODULE_24__['SIGNALING_CLIENT'],
              ],
            },
          ],
          imports: [
            [
              _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__['LayoutModule'],
              _quertc_shared__WEBPACK_IMPORTED_MODULE_9__['SharedModule'],
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
                'BrowserModule'
              ],
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__[
                'MatIconModule'
              ],
              _angular_material_list__WEBPACK_IMPORTED_MODULE_14__[
                'MatListModule'
              ],
              _angular_material_card__WEBPACK_IMPORTED_MODULE_15__[
                'MatCardModule'
              ],
              _angular_material_button__WEBPACK_IMPORTED_MODULE_20__[
                'MatButtonModule'
              ],
              _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__[
                'MatToolbarModule'
              ],
              _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__[
                'MatDividerModule'
              ],
              _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__[
                'MatSidenavModule'
              ],
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__[
                'MatFormFieldModule'
              ],
              _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                'MatTooltipModule'
              ],
              _quertc_controls__WEBPACK_IMPORTED_MODULE_6__['ControlsModule'],
              _quertc_carousel__WEBPACK_IMPORTED_MODULE_7__['CarouselModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_21__[
                'ReactiveFormsModule'
              ],
              _quertc_overlog__WEBPACK_IMPORTED_MODULE_5__[
                'OverlogModule'
              ].forRoot(),
              _angular_router__WEBPACK_IMPORTED_MODULE_11__[
                'RouterModule'
              ].forRoot(_routes__WEBPACK_IMPORTED_MODULE_0__['DOCS_ROUTES'], {
                initialNavigation: 'enabled',
                useHash: true,
              }),
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__[
                'BrowserAnimationsModule'
              ],
              _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__[
                'ServiceWorkerModule'
              ].register('ngsw-worker.js', {
                enabled: _envs_env__WEBPACK_IMPORTED_MODULE_26__['env'].prod,
              }),
            ],
          ],
        })
        ;(function () {
          ;(typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_4__[
              'ɵɵsetNgModuleScope'
            ](AppModule, {
              declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__['AppComponent'],
                _components__WEBPACK_IMPORTED_MODULE_23__['NavbarComponent'],
                _components__WEBPACK_IMPORTED_MODULE_23__[
                  'CameraLensComponent'
                ],
                _home_home_component__WEBPACK_IMPORTED_MODULE_25__[
                  'HomeComponent'
                ],
                _components__WEBPACK_IMPORTED_MODULE_23__['FooterComponent'],
                _components__WEBPACK_IMPORTED_MODULE_23__[
                  'GithubCornerComponent'
                ],
              ],
              imports: [
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__[
                  'LayoutModule'
                ],
                _quertc_shared__WEBPACK_IMPORTED_MODULE_9__['SharedModule'],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
                  'BrowserModule'
                ],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__[
                  'MatIconModule'
                ],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__[
                  'MatListModule'
                ],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__[
                  'MatCardModule'
                ],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_20__[
                  'MatButtonModule'
                ],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__[
                  'MatToolbarModule'
                ],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__[
                  'MatDividerModule'
                ],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__[
                  'MatSidenavModule'
                ],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__[
                  'MatFormFieldModule'
                ],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                  'MatTooltipModule'
                ],
                _quertc_controls__WEBPACK_IMPORTED_MODULE_6__['ControlsModule'],
                _quertc_carousel__WEBPACK_IMPORTED_MODULE_7__['CarouselModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_21__[
                  'ReactiveFormsModule'
                ],
                _libs_ui_overlog_src_lib_overlog_module__WEBPACK_IMPORTED_MODULE_27__[
                  'OverlogModule'
                ],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__['RouterModule'],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__[
                  'BrowserAnimationsModule'
                ],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__[
                  'ServiceWorkerModule'
                ],
              ],
            })
        })()
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__['ɵsetClassMetadata'](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__['NgModule'],
                args: [
                  {
                    declarations: [
                      _app_component__WEBPACK_IMPORTED_MODULE_10__[
                        'AppComponent'
                      ],
                      _components__WEBPACK_IMPORTED_MODULE_23__[
                        'NavbarComponent'
                      ],
                      _components__WEBPACK_IMPORTED_MODULE_23__[
                        'CameraLensComponent'
                      ],
                      _home_home_component__WEBPACK_IMPORTED_MODULE_25__[
                        'HomeComponent'
                      ],
                      _components__WEBPACK_IMPORTED_MODULE_23__[
                        'FooterComponent'
                      ],
                      _components__WEBPACK_IMPORTED_MODULE_23__[
                        'GithubCornerComponent'
                      ],
                    ],
                    imports: [
                      _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__[
                        'LayoutModule'
                      ],
                      _quertc_shared__WEBPACK_IMPORTED_MODULE_9__[
                        'SharedModule'
                      ],
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[
                        'BrowserModule'
                      ],
                      _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__[
                        'MatIconModule'
                      ],
                      _angular_material_list__WEBPACK_IMPORTED_MODULE_14__[
                        'MatListModule'
                      ],
                      _angular_material_card__WEBPACK_IMPORTED_MODULE_15__[
                        'MatCardModule'
                      ],
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_20__[
                        'MatButtonModule'
                      ],
                      _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__[
                        'MatToolbarModule'
                      ],
                      _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__[
                        'MatDividerModule'
                      ],
                      _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__[
                        'MatSidenavModule'
                      ],
                      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__[
                        'MatFormFieldModule'
                      ],
                      _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__[
                        'MatTooltipModule'
                      ],
                      _quertc_controls__WEBPACK_IMPORTED_MODULE_6__[
                        'ControlsModule'
                      ],
                      _quertc_carousel__WEBPACK_IMPORTED_MODULE_7__[
                        'CarouselModule'
                      ],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_21__[
                        'ReactiveFormsModule'
                      ],
                      _quertc_overlog__WEBPACK_IMPORTED_MODULE_5__[
                        'OverlogModule'
                      ].forRoot(),
                      _angular_router__WEBPACK_IMPORTED_MODULE_11__[
                        'RouterModule'
                      ].forRoot(
                        _routes__WEBPACK_IMPORTED_MODULE_0__['DOCS_ROUTES'],
                        {
                          initialNavigation: 'enabled',
                          useHash: true,
                        }
                      ),
                      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__[
                        'BrowserAnimationsModule'
                      ],
                      _angular_service_worker__WEBPACK_IMPORTED_MODULE_22__[
                        'ServiceWorkerModule'
                      ].register('ngsw-worker.js', {
                        enabled:
                          _envs_env__WEBPACK_IMPORTED_MODULE_26__['env'].prod,
                      }),
                    ],
                    providers: [
                      {
                        provide:
                          _adapters__WEBPACK_IMPORTED_MODULE_24__[
                            'SIGNALING_CLIENT'
                          ],
                        useValue:
                          _envs_env__WEBPACK_IMPORTED_MODULE_26__['env']
                            .signaling,
                      },
                      {
                        provide:
                          _quertc_core__WEBPACK_IMPORTED_MODULE_8__[
                            'SignalingChannel'
                          ],
                        useFactory:
                          _adapters__WEBPACK_IMPORTED_MODULE_24__[
                            'SignalingFactory'
                          ],
                        deps: [
                          _adapters__WEBPACK_IMPORTED_MODULE_24__[
                            'SIGNALING_CLIENT'
                          ],
                        ],
                      },
                    ],
                    bootstrap: [
                      _app_component__WEBPACK_IMPORTED_MODULE_10__[
                        'AppComponent'
                      ],
                    ],
                  },
                ],
              },
            ],
            null,
            null
          )
        })()

        /***/
      },

    /***/ si1g:
      /*!****************************************************!*\
  !*** ./libs/core/src/lib/utilities/with-target.ts ***!
  \****************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)

        /***/
      },

    /***/ sl1n:
      /*!***************************************************************!*\
  !*** ./libs/ui/controls/src/lib/devices/devices.component.ts ***!
  \***************************************************************/
      /*! exports provided: DevicesComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DevicesComponent',
          function () {
            return DevicesComponent
          }
        )
        /* harmony import */ var _quertc_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @quertc/shared */ '2Mw2'
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */ '3Pt+'
        )
        /* harmony import */ var _control_accessor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../control-accessor */ 'OYOV'
        )
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs */ 'qCKp'
        )
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/form-field */ 'kmnG'
        )
        /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/select */ 'd3UM'
        )
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/common */ 'ofXK'
        )
        /* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/material/core */ 'FKr1'
        )

        function DevicesComponent_mat_option_4_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](
              0,
              'mat-option',
              3
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']()
          }
          if (rf & 2) {
            const choice_r2 = ctx.$implicit
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty'](
              'value',
              choice_r2
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](1)
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtextInterpolate1'](
              ' ',
              choice_r2.label,
              ' '
            )
          }
        }
        function DevicesComponent_mat_error_6_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](
              0,
              'mat-error'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](
              1,
              'Inv\u00E1lido'
            )
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']()
          }
        }
        const DevicesProvider = {
          provide:
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['NG_VALUE_ACCESSOR'],
          useExisting: Object(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['forwardRef']
          )(
            () =>
              _control_accessor__WEBPACK_IMPORTED_MODULE_3__['ControlAccessor']
          ),
          multi: true,
        }
        class DevicesComponent extends _control_accessor__WEBPACK_IMPORTED_MODULE_3__[
          'ControlAccessor'
        ] {
          constructor(ngControl, mediaStream) {
            super()
            this.ngControl = ngControl
            this.mediaStream = mediaStream
            this.placeholder = ''
            this._value = ''
            this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              'EventEmitter'
            ]()
            this._choices = new rxjs__WEBPACK_IMPORTED_MODULE_4__[
              'BehaviorSubject'
            ]([])
            this.choices$ = this._choices.asObservable()
            if (this.ngControl) {
              this.ngControl.valueAccessor = this
            }
          }
          get kind() {
            return this._kind
          }
          set kind(value) {
            this._kind = value
          }
          get required() {
            return this._required
          }
          set required(value) {
            this._required = value
            if (value !== false) {
              this._required = true
            }
          }
          get value() {
            return this._value
          }
          set value(value) {
            this._value = value
          }
          ngOnInit() {
            const inputs = ['', 'audioinput', 'audiooutput', 'videoinput']
            if (!!this.kind && !inputs.includes(this.kind)) {
              throw Error(
                'Invalid kind, example of valid kinds' + inputs.join(', ')
              )
            }
            this.setUpChoices(this.kind)
          }
          deviceChange(device) {
            this.valueChange.emit(device)
          }
          setUpChoices(deviceKind) {
            this.mediaStream
              .getDevices(deviceKind)
              .then((devices) => this._choices.next(devices))
          }
        }
        DevicesComponent.ɵfac = function DevicesComponent_Factory(t) {
          return new (t || DevicesComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__['NgControl'],
              10
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _quertc_shared__WEBPACK_IMPORTED_MODULE_0__['MediaStreamService']
            )
          )
        }
        DevicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          'ɵɵdefineComponent'
        ]({
          type: DevicesComponent,
          selectors: [['control-devices']],
          hostVars: 1,
          hostBindings: function DevicesComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵattribute'](
                'required',
                ctx.required
              )
            }
          },
          inputs: {
            kind: 'kind',
            required: 'required',
            label: 'label',
            placeholder: 'placeholder',
          },
          outputs: { valueChange: 'valueChange' },
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵProvidersFeature']([
              _control_accessor__WEBPACK_IMPORTED_MODULE_3__['ControlAccessor'],
              DevicesProvider,
            ]),
            _angular_core__WEBPACK_IMPORTED_MODULE_1__[
              'ɵɵInheritDefinitionFeature'
            ],
          ],
          decls: 7,
          vars: 7,
          consts: [
            [3, 'placeholder', 'formControl', 'selectionChange'],
            [3, 'value', 4, 'ngFor', 'ngForOf'],
            [4, 'ngIf'],
            [3, 'value'],
          ],
          template: function DevicesComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](
                0,
                'mat-form-field'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](
                1,
                'mat-label'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](2)
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](
                3,
                'mat-select',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵlistener'](
                'selectionChange',
                function DevicesComponent_Template_mat_select_selectionChange_3_listener(
                  $event
                ) {
                  return ctx.deviceChange($event.value)
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtemplate'](
                4,
                DevicesComponent_mat_option_4_Template,
                2,
                2,
                'mat-option',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵpipe'](5, 'async')
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtemplate'](
                6,
                DevicesComponent_mat_error_6_Template,
                2,
                0,
                'mat-error',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']()
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](2)
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtextInterpolate'](
                ctx.label || 'Device'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty'](
                'placeholder',
                ctx.placeholder
              )(
                'formControl',
                ctx.ngControl == null ? null : ctx.ngControl.control
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty'](
                'ngForOf',
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵpipeBind1'](
                  5,
                  5,
                  ctx.choices$
                )
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](2)
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty'](
                'ngIf',
                ctx.required && ctx.ngControl.invalid
              )
            }
          },
          directives: [
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__[
              'MatFormField'
            ],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__[
              'MatLabel'
            ],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__['MatSelect'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormControlDirective'],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__['NgForOf'],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__['NgIf'],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__['MatOption'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__[
              'MatError'
            ],
          ],
          pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__['AsyncPipe']],
          styles: [
            '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            DevicesComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'],
                args: [
                  {
                    selector: 'control-devices',
                    templateUrl: './devices.component.html',
                    styleUrls: ['./devices.component.scss'],
                    providers: [
                      _control_accessor__WEBPACK_IMPORTED_MODULE_3__[
                        'ControlAccessor'
                      ],
                      DevicesProvider,
                    ],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__['NgControl'],
                  decorators: [
                    {
                      type:
                        _angular_core__WEBPACK_IMPORTED_MODULE_1__['Optional'],
                    },
                    {
                      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Self'],
                    },
                  ],
                },
                {
                  type:
                    _quertc_shared__WEBPACK_IMPORTED_MODULE_0__[
                      'MediaStreamService'
                    ],
                },
              ]
            },
            {
              kind: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Input'],
                },
              ],
              required: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Input'],
                },
                {
                  type:
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__['HostBinding'],
                  args: ['attr.required'],
                },
              ],
              label: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Input'],
                },
              ],
              placeholder: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Input'],
                },
              ],
              valueChange: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Output'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ t7Mq:
      /*!**************************************!*\
  !*** ./libs/ui/overlog/src/index.ts ***!
  \**************************************/
      /*! exports provided: OverlogModule, OverlogService, OverlogRef, OverlogData, defaultOverlogConfig, defaultPositions, OVERLOG_CONFIG, OverlogSnack */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _lib_overlog_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./lib/overlog.module */ '0ujj'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'OverlogModule',
          function () {
            return _lib_overlog_module__WEBPACK_IMPORTED_MODULE_0__[
              'OverlogModule'
            ]
          }
        )

        /* harmony import */ var _lib_overlog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./lib/overlog.service */ 'iBb4'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'OverlogService',
          function () {
            return _lib_overlog_service__WEBPACK_IMPORTED_MODULE_1__[
              'OverlogService'
            ]
          }
        )

        /* harmony import */ var _lib_overlog_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./lib/overlog-ref */ 'ZL+G'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'OverlogRef',
          function () {
            return _lib_overlog_ref__WEBPACK_IMPORTED_MODULE_2__['OverlogRef']
          }
        )

        /* harmony import */ var _lib_overlog_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./lib/overlog-config */ 'cPJY'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'OverlogData',
          function () {
            return _lib_overlog_config__WEBPACK_IMPORTED_MODULE_3__[
              'OverlogData'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'defaultOverlogConfig',
          function () {
            return _lib_overlog_config__WEBPACK_IMPORTED_MODULE_3__[
              'defaultOverlogConfig'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'defaultPositions',
          function () {
            return _lib_overlog_config__WEBPACK_IMPORTED_MODULE_3__[
              'defaultPositions'
            ]
          }
        )

        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'OVERLOG_CONFIG',
          function () {
            return _lib_overlog_config__WEBPACK_IMPORTED_MODULE_3__[
              'OVERLOG_CONFIG'
            ]
          }
        )

        /* harmony import */ var _lib_overlog_snack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./lib/overlog.snack */ 'yXgJ'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'OverlogSnack',
          function () {
            return _lib_overlog_snack__WEBPACK_IMPORTED_MODULE_4__[
              'OverlogSnack'
            ]
          }
        )

        /***/
      },

    /***/ vUUS:
      /*!*************************************************!*\
  !*** ./apps/client/src/app/components/index.ts ***!
  \*************************************************/
      /*! exports provided: CameraLensComponent, FooterComponent, GithubCornerComponent, NavbarComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony import */ var _camera_lens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./camera-lens */ '4m4H'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'CameraLensComponent',
          function () {
            return _camera_lens__WEBPACK_IMPORTED_MODULE_0__[
              'CameraLensComponent'
            ]
          }
        )

        /* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./footer */ 'AlC0'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'FooterComponent',
          function () {
            return _footer__WEBPACK_IMPORTED_MODULE_1__['FooterComponent']
          }
        )

        /* harmony import */ var _github_corner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./github-corner */ 'TftE'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'GithubCornerComponent',
          function () {
            return _github_corner__WEBPACK_IMPORTED_MODULE_2__[
              'GithubCornerComponent'
            ]
          }
        )

        /* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./navbar */ 'TK90'
        )
        /* harmony reexport (safe) */ __webpack_require__.d(
          __webpack_exports__,
          'NavbarComponent',
          function () {
            return _navbar__WEBPACK_IMPORTED_MODULE_3__['NavbarComponent']
          }
        )

        /***/
      },

    /***/ vWg3:
      /*!***********************************************!*\
  !*** ./libs/core/src/lib/utilities/logger.ts ***!
  \***********************************************/
      /*! exports provided: Logger */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'Logger',
          function () {
            return Logger
          }
        )
        class Logger {
          static log(message, color = Logger.logColor) {
            console.log(`%c${message}`, `color:${color}`)
          }
          static info(message, color = Logger.infoColor) {
            console.info(`%c${message}`, `color:${color}`)
          }
          static warn(message, color = Logger.warnColor) {
            console.warn(`%c${message}`, `color:${color}`)
          }
          static error(message, color = Logger.errorColor) {
            console.error(`%c${message}`, `color:${color}`)
          }
        }
        Logger.logColor = '#2196F3'
        Logger.infoColor = 'purple'
        Logger.warnColor = 'orange'
        Logger.errorColor = 'red'

        /***/
      },

    /***/ waiM:
      /*!****************************************************!*\
  !*** ./libs/ui/controls/src/lib/utilities/code.ts ***!
  \****************************************************/
      /*! exports provided: code */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'code',
          function () {
            return code
          }
        )
        function code() {
          function S4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1)
          }
          return `${S4()}${S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`
        }

        /***/
      },

    /***/ xKNM:
      /*!*******************************************************************!*\
  !*** ./apps/client/src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************************/
      /*! exports provided: NavbarComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'NavbarComponent',
          function () {
            return NavbarComponent
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/sidenav */ 'XhcP'
        )
        /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/toolbar */ '/t3+'
        )
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/button */ 'bTqV'
        )
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/icon */ 'NFeN'
        )
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/router */ 'tyNb'
        )

        class NavbarComponent {
          constructor() {}
        }
        NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
          return new (t || NavbarComponent)()
        }
        NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: NavbarComponent,
          selectors: [['app-navbar']],
          inputs: { snav: 'snav', title: 'title' },
          decls: 11,
          vars: 1,
          consts: [
            ['color', 'primary', 1, 'client-toolbar'],
            ['mat-icon-button', '', 3, 'click'],
            ['mat-icon-button', '', 'routerLink', '/'],
            [1, 'client-app-name'],
            [1, 'spacer'],
            ['src', 'assets/message.svg', 'alt', ''],
          ],
          template: function NavbarComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'mat-toolbar',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                1,
                'button',
                1
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function NavbarComponent_Template_button_click_1_listener() {
                  return ctx.snav.toggle()
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                2,
                'mat-icon'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3, 'menu')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                4,
                'a',
                2
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                5,
                'mat-icon'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6, 'home')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                7,
                'h1',
                3
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                9,
                'span',
                4
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](
                10,
                'img',
                5
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](8)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
                ctx.title
              )
            }
          },
          directives: [
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__[
              'MatToolbar'
            ],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__['MatButton'],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__['MatIcon'],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__['MatAnchor'],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__['RouterLinkWithHref'],
          ],
          styles: [
            '@media (max-width: 720px) {\n  .client-app-name[_ngcontent-%COMP%] {\n    font-size: 86%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FBQTtBQUdBO0VBQ0U7SUFDRSxjQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgKiBSdWxlcyBmb3Igd2hlbiB0aGUgZGV2aWNlIGlzIGRldGVjdGVkIHRvIGJlIGEgc21hbGwgc2NyZWVuLlxuICAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5jbGllbnQtYXBwLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogODYlO1xuICB9XG59XG4iXX0= */',
          ],
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            NavbarComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'app-navbar',
                    templateUrl: './navbar.component.html',
                    styleUrls: ['./navbar.component.scss'],
                  },
                ],
              },
            ],
            function () {
              return []
            },
            {
              snav: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
              title: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input'],
                },
              ],
            }
          )
        })()

        /***/
      },

    /***/ yXgJ:
      /*!**************************************************!*\
  !*** ./libs/ui/overlog/src/lib/overlog.snack.ts ***!
  \**************************************************/
      /*! exports provided: OverlogSnack */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'OverlogSnack',
          function () {
            return OverlogSnack
          }
        )
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ 'fXoL'
        )
        /* harmony import */ var _overlog_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./overlog-animation */ 'mlcd'
        )
        /* harmony import */ var _overlog_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./overlog-config */ 'cPJY'
        )
        /* harmony import */ var _overlog_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./overlog-ref */ 'ZL+G'
        )

        const _c0 = function (a0, a1) {
          return { fadeIn: a0, fadeOut: a1 }
        }
        const _c1 = function (a0, a1) {
          return { value: a0, params: a1 }
        }
        class OverlogSnack {
          constructor(data, ref, overlogConfig) {
            this.data = data
            this.ref = ref
            this.overlogConfig = overlogConfig
            this.animationState = 'default'
            this.iconType = data.type === 'success' ? 'done' : data.type
          }
          ngOnInit() {
            const { duration } = this.data
            this.intervalId = window.setTimeout(() => {
              this.animationState = 'closing'
            }, duration || 5000)
          }
          ngOnDestroy() {
            window.clearTimeout(this.intervalId)
          }
          close() {
            this.ref.close()
          }
          onFadeFinished(event) {
            const { toState } = event
            const isFadeOut = toState === 'closing'
            const itFinished = this.animationState === 'closing'
            if (isFadeOut && itFinished) {
              this.close()
            }
          }
        }
        OverlogSnack.ɵfac = function OverlogSnack_Factory(t) {
          return new (t || OverlogSnack)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _overlog_config__WEBPACK_IMPORTED_MODULE_2__['OverlogData']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _overlog_ref__WEBPACK_IMPORTED_MODULE_3__['OverlogRef']
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](
              _overlog_config__WEBPACK_IMPORTED_MODULE_2__['OVERLOG_CONFIG']
            )
          )
        }
        OverlogSnack.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__[
          'ɵɵdefineComponent'
        ]({
          type: OverlogSnack,
          selectors: [['quertc-overlog']],
          decls: 4,
          vars: 10,
          consts: [[1, 'material-icons', 3, 'click']],
          template: function OverlogSnack_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                0,
                'i',
                0
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function OverlogSnack_Template_i_click_0_listener() {
                  return ctx.close()
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'close')
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](
                2,
                'div'
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                '@fadeAnimation.done',
                function OverlogSnack_Template_div_animation_fadeAnimation_done_2_listener(
                  $event
                ) {
                  return ctx.onFadeFinished($event)
                }
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']()
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassMap'](
                'overlog ' + ctx.data.type
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                '@fadeAnimation',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction2'](
                  7,
                  _c1,
                  ctx.animationState,
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction2'](
                    4,
                    _c0,
                    ctx.overlogConfig.animation.fadeIn,
                    ctx.overlogConfig.animation.fadeOut
                  )
                )
              )
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1)
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](
                ' ',
                ctx.data.text,
                ' '
              )
            }
          },
          styles: [
            '[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  padding: 8px 16px;\n  border-radius: 6px;\n  margin-bottom: 8px;\n  background-color: #ffffff70;\n  transition: background-color 200ms ease-in-out;\n}\n[_nghost-%COMP%]:hover {\n  background-color: #ffffff;\n}\n[_nghost-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  color: #111;\n  font-size: 16px;\n  height: 16px;\n  width: 16px;\n  right: 0px;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL292ZXJsb2cuc25hY2suc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOENBQUE7QUFDRjtBQUFFO0VBQ0UseUJBQUE7QUFFSjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBRUoiLCJmaWxlIjoib3ZlcmxvZy5zbmFjay5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY3MDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgfVxuICAubWF0ZXJpYWwtaWNvbnMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICMxMTE7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICB3aWR0aDogMTZweDtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMHB4O1xuICB9XG59XG4iXX0= */',
          ],
          data: {
            animation: [
              _overlog_animation__WEBPACK_IMPORTED_MODULE_1__[
                'overlogAnimations'
              ].fadeOverlog,
            ],
          },
        })
        /*@__PURE__*/ ;(function () {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            OverlogSnack,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'quertc-overlog',
                    template: `
    <i class="material-icons" (click)="close()">close</i>
    <div
      [class]="'overlog ' + data.type"
      [@fadeAnimation]="{
        value: animationState,
        params: {
          fadeIn: overlogConfig.animation.fadeIn,
          fadeOut: overlogConfig.animation.fadeOut
        }
      }"
      (@fadeAnimation.done)="onFadeFinished($event)"
    >
      {{ data.text }}
    </div>
  `,
                    styleUrls: ['./overlog.snack.scss'],
                    animations: [
                      _overlog_animation__WEBPACK_IMPORTED_MODULE_1__[
                        'overlogAnimations'
                      ].fadeOverlog,
                    ],
                  },
                ],
              },
            ],
            function () {
              return [
                {
                  type:
                    _overlog_config__WEBPACK_IMPORTED_MODULE_2__['OverlogData'],
                },
                {
                  type: _overlog_ref__WEBPACK_IMPORTED_MODULE_3__['OverlogRef'],
                },
                {
                  type: undefined,
                  decorators: [
                    {
                      type:
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__['Inject'],
                      args: [
                        _overlog_config__WEBPACK_IMPORTED_MODULE_2__[
                          'OVERLOG_CONFIG'
                        ],
                      ],
                    },
                  ],
                },
              ]
            },
            null
          )
        })()

        /***/
      },

    /***/ zQRm:
      /*!***************************************!*\
  !*** ./apps/client/src/app/routes.ts ***!
  \***************************************/
      /*! exports provided: DOCS_ROUTES */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict'
        __webpack_require__.r(__webpack_exports__)
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'DOCS_ROUTES',
          function () {
            return DOCS_ROUTES
          }
        )
        /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./home/home.component */ 'R5Lt'
        )

        const DOCS_ROUTES = [
          {
            path: '',
            component:
              _home_home_component__WEBPACK_IMPORTED_MODULE_0__[
                'HomeComponent'
              ],
          },
          {
            path: 'restart-ice',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | quertc-restart-ice */ 'quertc-restart-ice')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! @quertc/restart-ice */ 'R3tv'
                  )
                )
                .then((m) => m.RestartIceModule),
          },
          {
            path: 'peer-to-peer',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | quertc-peer-to-peer */ 'quertc-peer-to-peer')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! @quertc/peer-to-peer */ 'E4j7'
                  )
                )
                .then((m) => m.PeerToPeerModule),
          },
          {
            path: 'perfect-negotiation',
            loadChildren: () =>
              __webpack_require__
                .e(
                  /*! import() | quertc-perfect-negotiation */ 'quertc-perfect-negotiation'
                )
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! @quertc/perfect-negotiation */ 'zOaj'
                  )
                )
                .then((m) => m.PerfectNegotiationModule),
          },
        ]

        /***/
      },
  },
  [[0, 'runtime', 'vendor']],
])
//# sourceMappingURL=main.js.map

;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    'e/BV': function (t, e, r) {
      'use strict'
      r.d(e, 'b', function () {
        return g
      }),
        r.d(e, 'a', function () {
          return d
        })
      var n = r('6Mrm'),
        s = r('fXoL')
      let i = (() => {
        class t extends n.d {
          load() {
            return this.http.get(this.endpoint + '/user/info')
          }
          signup(t) {
            return this.http.post(this.endpoint + '/user/signup', t)
          }
          loadById(t) {
            return this.http.get(`${this.endpoint}/user/${t}`)
          }
        }
        return (
          (t.ɵfac = function (e) {
            return a(e || t)
          }),
          (t.ɵprov = s.Hb({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      const a = s.Sb(i)
      var o = r('eIep'),
        u = r('tk/3')
      let c = (() => {
        class t extends n.d {
          constructor(t, e, r, n) {
            super(t, n),
              (this.http = t),
              (this.userDataService = e),
              (this.tokenStorage = r),
              (this.config = n)
          }
          login(t) {
            return this.http
              .post(this.endpoint + '/auth/login', t)
              .pipe(
                Object(o.a)(
                  (t) => (
                    this.tokenStorage.storeToken(t), this.userDataService.load()
                  )
                )
              )
          }
          load() {
            return this.userDataService.load()
          }
          signup(t) {
            return this.userDataService.signup(t)
          }
          logout() {
            this.tokenStorage.clearStorage()
          }
        }
        return (
          (t.ɵfac = function (e) {
            return new (e || t)(s.Ub(u.b), s.Ub(i), s.Ub(n.a), s.Ub(n.b))
          }),
          (t.ɵprov = s.Hb({ token: t, factory: t.ɵfac })),
          t
        )
      })()
      var h = r('2Vo4'),
        p = r('pLZG'),
        b = r('lJxs')
      const l = (t, e) => (t.next(e), e)
      let d = (() => {
          class t {
            constructor(t) {
              ;(this.authDataService = t),
                (this.currentUser = new h.a({})),
                (this.currentUser$ = this.currentUser.pipe(
                  Object(p.a)((t) => !!t)
                ))
            }
            checkAuthentication() {
              return this.authDataService
                .load()
                .pipe(Object(b.a)((t) => l(this.currentUser, t)))
            }
            login(t) {
              return this.authDataService
                .login(t)
                .pipe(Object(b.a)((t) => l(this.currentUser, t)))
            }
            signup(t) {
              return this.authDataService.signup(t)
            }
            logout() {
              this.authDataService.logout()
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Ub(c))
            }),
            (t.ɵprov = s.Hb({ token: t, factory: t.ɵfac })),
            t
          )
        })(),
        f = (() => {
          class t {
            constructor(t) {
              ;(this.userDataService = t),
                (this.user = new h.a({})),
                (this.user$ = this.user.asObservable())
            }
            loadById(t) {
              this.userDataService.loadById(t).subscribe((t) => {
                this.user.next(t)
              })
            }
          }
          return (
            (t.ɵfac = function (e) {
              return new (e || t)(s.Ub(i))
            }),
            (t.ɵprov = s.Hb({ token: t, factory: t.ɵfac })),
            t
          )
        })(),
        g = (() => {
          class t {}
          return (
            (t.ɵmod = s.Jb({ type: t })),
            (t.ɵinj = s.Ib({
              factory: function (e) {
                return new (e || t)()
              },
              providers: [d, c, f, i],
            })),
            t
          )
        })()
    },
  },
])

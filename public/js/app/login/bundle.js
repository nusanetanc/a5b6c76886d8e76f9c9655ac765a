var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("subs", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Sub;
    return {
        setters:[],
        execute: function() {
            Sub = (function () {
                function Sub(subid, groovyid, name, nohp, email, dateinst, timeinst, password, datebrith, packlev, cardid, nova, status, regisby, regisref, billing, history) {
                    this.subid = subid;
                    this.groovyid = groovyid;
                    this.name = name;
                    this.nohp = nohp;
                    this.email = email;
                    this.dateinst = dateinst;
                    this.timeinst = timeinst;
                    this.password = password;
                    this.datebrith = datebrith;
                    this.packlev = packlev;
                    this.cardid = cardid;
                    this.nova = nova;
                    this.status = status;
                    this.regisby = regisby;
                    this.regisref = regisref;
                    this.billing = billing;
                    this.history = history;
                }
                return Sub;
            }());
            exports_1("Sub", Sub);
        }
    }
});
System.register("login.component", ['angular2/core', 'angular2/router', 'angular2/common', 'rxjs/add/operator/map', 'angular2/http'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1, router_1, common_1, http_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_fb, http) {
                    this._fb = _fb;
                    this.http = http;
                    // Link to our api, pointing to localhost
                    this.API = 'http://202.162.207.164:3000';
                    // Declare empty list of people
                    this.emps = [];
                    this.sessionemps = [];
                }
                // Angular 2 Life Cycle event when component has been initialized
                LoginComponent.prototype.ngOnInit = function () {
                    this.getAcountEmp();
                };
                // Get all Sub from the API
                LoginComponent.prototype.getAllEmp = function () {
                    var _this = this;
                    this.http.get(this.API + "/employee/listemp")
                        .map(function (res) { return res.json(); })
                        .subscribe(function (emps) {
                        _this.emps = emps;
                    });
                };
                // Add one person to the API
                LoginComponent.prototype.signEmp = function (signEmail, signPassword) {
                    var body = "email=" + signEmail + "&password=" + signPassword;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http
                        .post(this.API + "/subscribe/login", body, {
                        headers: headers
                    })
                        .subscribe(function (data) {
                        window.location.href = "/is";
                    }, function (error) {
                        //alert(error.text());
                        //console.log(JSON.stringify(error.json()));
                        document.getElementById("message").innerHTML = error.text();
                        $('#failed').modal('show');
                        $('.modal-backdrop').removeClass("modal-backdrop");
                    });
                };
                LoginComponent.prototype.getAcountEmp = function () {
                    var _this = this;
                    this.http.get(this.API + "/subscribe/detailemp")
                        .map(function (res) { return res.json(); })
                        .subscribe(function (sessionemps) {
                        _this.sessionemps = sessionemps;
                        window.location.href = "/is";
                    });
                };
                LoginComponent.prototype.ngOnInit = function () {
                    this.myForm = this._fb.group({
                        signEmail: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                this.isEmail
                            ])],
                        signPassword: ['', common_1.Validators.required]
                    });
                };
                LoginComponent.prototype.isEmail = function (control) {
                    var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|id|ida|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
                    if (!control.value.match(re)) {
                        console.log(control.value);
                        return { invalidEmail: true };
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'form-login',
                        template: "\n        <div *ngIf=\"sessionemps.accessrole == null\" class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4 card-login\">\n                            <form class=\"form-horizontal\" [ngFormModel]=\"myForm\">\n                                <center><img src=\"images/logo-groovy.png\" alt=\"Logo Groovy\" width=\"40%\">\n                                <h6 class=\"grey-text\">INFORMATION SYSTEM</h6></center><br><br>\n                                <div class=\"form-group\">\n                                    <label for=\"inputEmail3\" class=\"control-label orange-text\">Email</label><br>\n                                    <input [ngFormControl]=\"myForm.find('signEmail')\" type=\"email\" class=\"form-login\" id=\"signEmail\" #signEmail placeholder=\"Type your mail\"><br>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"inputPassword3\" class=\"control-label orange-text\">Password</label><br>\n                                    <input [ngFormControl]=\"myForm.find('signPassword')\" type=\"password\" class=\"form-login\" id=\"signPassword\" #signPassword placeholder=\"Type your password\"><br>\n                                </div><br>\n                                <div class=\"form-group form-forgot\">\n                                    <a href=\"\" class=\"orange-text\">I forgot password</a>\n                                    <button [disabled]=\"!myForm.valid\" type=\"submit\" id=\"logins\" class=\"btn btn-login\" (click)=\"signEmp(signEmail.value, signPassword.value)\">LOGIN</button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Modal -->\n        <div id=\"failed\" class=\"modal fade bs-example-modal-sm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"mySmallModalLabel\">\n          <div class=\"modal-dialog\" role=\"document\" style=\"float: left; padding-left: 44%;\">\n            <div class=\"text-center\" style=\"padding: 5px; background-color: #FC592E; width: 200px; float: left; box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0);\">\n              <h5 id=\"message\" style=\"color: #FFF;\"></h5>\n            </div>\n          </div>\n        </div>\n        <style *ngIf=\"emps.accessrole == null\">\n            .load > img {\n                bottom: 0;\n                left: 0;\n                margin: auto;\n                position: absolute;\n                right: 0;\n                top: 0;\n                height:159px;\n                width:500px;\n            }\n        </style>\n        <div *ngIf=\"sessionemps.accessrole != null\" class=\"load\">\n            <img src=\"images/logo-groovy.png\">\n        </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, http_1.Http])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_2("LoginComponent", LoginComponent);
        }
    }
});
System.register("app.component", ['angular2/core', 'angular2/router', 'rxjs/add/operator/map', "login.component"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var core_2, router_2, login_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (_2) {},
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_2.Component({
                        selector: 'my-app',
                        template: "\n            <router-outlet></router-outlet>\n    ",
                        directives: [login_component_1.LoginComponent, router_2.ROUTER_DIRECTIVES]
                    }),
                    router_2.RouteConfig([
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_3("AppComponent", AppComponent);
        }
    }
});
System.register("boot", ['angular2/platform/browser', "app.component", 'angular2/http', "angular2/router"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var browser_1, app_component_1, http_2, router_3;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (router_3_1) {
                router_3 = router_3_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_3.ROUTER_PROVIDERS, http_2.HTTP_PROVIDERS]);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnMudHMiLCJsb2dpbi5jb21wb25lbnQudHMiLCJhcHAuY29tcG9uZW50LnRzIiwiYm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1lBQUE7Z0JBQ0UsYUFDTyxLQUFhLEVBQ2IsUUFBZ0IsRUFDaEIsSUFBWSxFQUNaLElBQVksRUFDWixLQUFhLEVBQ2IsUUFBYyxFQUNkLFFBQWMsRUFDZCxRQUFnQixFQUNoQixTQUFpQixFQUNqQixPQUFlLEVBQ2YsTUFBYyxFQUNkLElBQVksRUFDWixNQUFjLEVBQ2QsT0FBZSxFQUNmLFFBQWdCLEVBQ2hCLE9BQWUsRUFDZixPQUFlO29CQWhCZixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUNiLGFBQVEsR0FBUixRQUFRLENBQVE7b0JBQ2hCLFNBQUksR0FBSixJQUFJLENBQVE7b0JBQ1osU0FBSSxHQUFKLElBQUksQ0FBUTtvQkFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO29CQUNiLGFBQVEsR0FBUixRQUFRLENBQU07b0JBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBTTtvQkFDZCxhQUFRLEdBQVIsUUFBUSxDQUFRO29CQUNoQixjQUFTLEdBQVQsU0FBUyxDQUFRO29CQUNqQixZQUFPLEdBQVAsT0FBTyxDQUFRO29CQUNmLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQ2QsU0FBSSxHQUFKLElBQUksQ0FBUTtvQkFDWixXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUNkLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBUTtvQkFDaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFDZixZQUFPLEdBQVAsT0FBTyxDQUFRO2dCQUNqQixDQUFDO2dCQUNSLFVBQUM7WUFBRCxDQXBCQSxBQW9CQyxJQUFBO1lBcEJELHFCQW9CQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDMkNEO2dCQUtJLHdCQUFvQixHQUFlLEVBQVUsSUFBVTtvQkFBbkMsUUFBRyxHQUFILEdB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QUM7b0JBQ2pSLEVBQUUsQ0FBQSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDM0IsTUFBTSxDQUFDLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBQyxDQUFDO29CQUM5QixDQUFDO2dCQUNILENBQUM7Z0JBaElMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSx1K0ZBa0RUO3dCQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO3FCQUNsQyxDQUFDOztrQ0FBQTtnQkEyRUYscUJBQUM7WUFBRCxDQTFFQSxBQTBFQyxJQUFBO1lBMUVELDJDQTBFQyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lDckhEO2dCQUFBO2dCQUNBLENBQUM7Z0JBYkQ7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLHFEQUVUO3dCQUNELFVBQVUsRUFBRSxDQUFDLGdDQUFjLEVBQUUsMEJBQWlCLENBQUM7cUJBQ2xELENBQUM7b0JBRUQsb0JBQVcsQ0FBQzt3QkFDVCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFDO3FCQUNqRixDQUFDOztnQ0FBQTtnQkFHRixtQkFBQztZQUFELENBREEsQUFDQyxJQUFBO1lBREQsdUNBQ0MsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUNmRCxtQkFBUyxDQUFDLDRCQUFZLEVBQUUsQ0FBQyx5QkFBZ0IsRUFBRSxxQkFBYyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiIuLi8uLi8uLi93b3Jrc3BhY2UvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN1YiB7XG4gIGNvbnN0cnVjdG9yKFxuICBwdWJsaWMgc3ViaWQ6IFN0cmluZyxcbiAgcHVibGljIGdyb292eWlkOiBTdHJpbmcsXG4gIHB1YmxpYyBuYW1lOiBTdHJpbmcsXG4gIHB1YmxpYyBub2hwOiBTdHJpbmcsXG4gIHB1YmxpYyBlbWFpbDogU3RyaW5nLFxuICBwdWJsaWMgZGF0ZWluc3Q6IERhdGUsXG4gIHB1YmxpYyB0aW1laW5zdDogRGF0ZSxcbiAgcHVibGljIHBhc3N3b3JkOiBTdHJpbmcsXG4gIHB1YmxpYyBkYXRlYnJpdGg6IFN0cmluZyxcbiAgcHVibGljIHBhY2tsZXY6IFN0cmluZyxcbiAgcHVibGljIGNhcmRpZDogU3RyaW5nLFxuICBwdWJsaWMgbm92YTogTnVtYmVyLFxuICBwdWJsaWMgc3RhdHVzOiBTdHJpbmcsXG4gIHB1YmxpYyByZWdpc2J5OiBTdHJpbmcsXG4gIHB1YmxpYyByZWdpc3JlZjogU3RyaW5nLFxuICBwdWJsaWMgYmlsbGluZzogU3RyaW5nLFxuICBwdWJsaWMgaGlzdG9yeTogU3RyaW5nXG4gICkgeyAgfVxufVxuIiwiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Um91dGVDb25maWcsIFJPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRk9STV9QUk9WSURFUlMsIEZPUk1fRElSRUNUSVZFUywgQ29udHJvbCwgQ29udHJvbEdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVyc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5pbXBvcnQge21vbmdvb3NlfSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgeyBTdWIgfSBmcm9tICcuL3N1YnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2Zvcm0tbG9naW4nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKm5nSWY9XCJzZXNzaW9uZW1wcy5hY2Nlc3Nyb2xlID09IG51bGxcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00IGNhcmQtbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiIFtuZ0Zvcm1Nb2RlbF09XCJteUZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNlbnRlcj48aW1nIHNyYz1cImltYWdlcy9sb2dvLWdyb292eS5wbmdcIiBhbHQ9XCJMb2dvIEdyb292eVwiIHdpZHRoPVwiNDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImdyZXktdGV4dFwiPklORk9STUFUSU9OIFNZU1RFTTwvaDY+PC9jZW50ZXI+PGJyPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJpbnB1dEVtYWlsM1wiIGNsYXNzPVwiY29udHJvbC1sYWJlbCBvcmFuZ2UtdGV4dFwiPkVtYWlsPC9sYWJlbD48YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW25nRm9ybUNvbnRyb2xdPVwibXlGb3JtLmZpbmQoJ3NpZ25FbWFpbCcpXCIgdHlwZT1cImVtYWlsXCIgY2xhc3M9XCJmb3JtLWxvZ2luXCIgaWQ9XCJzaWduRW1haWxcIiAjc2lnbkVtYWlsIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1haWxcIj48YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlucHV0UGFzc3dvcmQzXCIgY2xhc3M9XCJjb250cm9sLWxhYmVsIG9yYW5nZS10ZXh0XCI+UGFzc3dvcmQ8L2xhYmVsPjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uZmluZCgnc2lnblBhc3N3b3JkJylcIiB0eXBlPVwicGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tbG9naW5cIiBpZD1cInNpZ25QYXNzd29yZFwiICNzaWduUGFzc3dvcmQgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcGFzc3dvcmRcIj48YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pjxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgZm9ybS1mb3Jnb3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cIm9yYW5nZS10ZXh0XCI+SSBmb3Jnb3QgcGFzc3dvcmQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhbXlGb3JtLnZhbGlkXCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwibG9naW5zXCIgY2xhc3M9XCJidG4gYnRuLWxvZ2luXCIgKGNsaWNrKT1cInNpZ25FbXAoc2lnbkVtYWlsLnZhbHVlLCBzaWduUGFzc3dvcmQudmFsdWUpXCI+TE9HSU48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIE1vZGFsIC0tPlxuICAgICAgICA8ZGl2IGlkPVwiZmFpbGVkXCIgY2xhc3M9XCJtb2RhbCBmYWRlIGJzLWV4YW1wbGUtbW9kYWwtc21cIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cIm15U21hbGxNb2RhbExhYmVsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiIHJvbGU9XCJkb2N1bWVudFwiIHN0eWxlPVwiZmxvYXQ6IGxlZnQ7IHBhZGRpbmctbGVmdDogNDQlO1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCIgc3R5bGU9XCJwYWRkaW5nOiA1cHg7IGJhY2tncm91bmQtY29sb3I6ICNGQzU5MkU7IHdpZHRoOiAyMDBweDsgZmxvYXQ6IGxlZnQ7IGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwwLDAsMC4xMiksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsMCk7XCI+XG4gICAgICAgICAgICAgIDxoNSBpZD1cIm1lc3NhZ2VcIiBzdHlsZT1cImNvbG9yOiAjRkZGO1wiPjwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSAqbmdJZj1cImVtcHMuYWNjZXNzcm9sZSA9PSBudWxsXCI+XG4gICAgICAgICAgICAubG9hZCA+IGltZyB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OjE1OXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOjUwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwic2Vzc2lvbmVtcHMuYWNjZXNzcm9sZSAhPSBudWxsXCIgY2xhc3M9XCJsb2FkXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9sb2dvLWdyb292eS5wbmdcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbm15Rm9ybTogQ29udHJvbEdyb3VwO1xuLy8gTGluayB0byBvdXIgYXBpLCBwb2ludGluZyB0byBsb2NhbGhvc3RcbiAgICBBUEkgPSAnaHR0cDovLzIwMi4xNjIuMjA3LjE2NDozMDAwJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOkZvcm1CdWlsZGVyLCBwcml2YXRlIGh0dHA6IEh0dHApIHt9XG5cbiAgICAvLyBBbmd1bGFyIDIgTGlmZSBDeWNsZSBldmVudCB3aGVuIGNvbXBvbmVudCBoYXMgYmVlbiBpbml0aWFsaXplZFxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5nZXRBY291bnRFbXAoKTtcbiAgICB9XG5cbiAgLy8gRGVjbGFyZSBlbXB0eSBsaXN0IG9mIHBlb3BsZVxuICBlbXBzOiBhbnlbXSA9IFtdO1xuICBzZXNzaW9uZW1wczogYW55W10gPSBbXTtcblxuICAvLyBHZXQgYWxsIFN1YiBmcm9tIHRoZSBBUElcbiAgZ2V0QWxsRW1wKCkge1xuICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5BUEl9L2VtcGxveWVlL2xpc3RlbXBgKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5zdWJzY3JpYmUoZW1wcyA9PiB7XG4gICAgICAgIHRoaXMuZW1wcyA9IGVtcHNcbiAgICAgIH0pXG4gIH1cblxuLy8gQWRkIG9uZSBwZXJzb24gdG8gdGhlIEFQSVxuICAgIHNpZ25FbXAoc2lnbkVtYWlsLCBzaWduUGFzc3dvcmQpIHtcblxuICAgICAgICB2YXIgYm9keSA9IGBlbWFpbD0ke3NpZ25FbWFpbH0mcGFzc3dvcmQ9JHtzaWduUGFzc3dvcmR9YDtcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5wb3N0KGAke3RoaXMuQVBJfS9zdWJzY3JpYmUvbG9naW5gLFxuICAgICAgICAgICAgICAgIGJvZHksIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvaXNgO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2FsZXJ0KGVycm9yLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZVwiKS5pbm5lckhUTUwgPSBlcnJvci50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNmYWlsZWQnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwtYmFja2Ryb3AnKS5yZW1vdmVDbGFzcyhcIm1vZGFsLWJhY2tkcm9wXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuICAgIGdldEFjb3VudEVtcCgpIHtcbiAgICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLkFQSX0vc3Vic2NyaWJlL2RldGFpbGVtcGApXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShzZXNzaW9uZW1wcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXNzaW9uZW1wcyA9IHNlc3Npb25lbXBzXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2lzYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgfVxuICAgIG5nT25Jbml0KCkge1xuICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XG4gICAgICAgIHNpZ25FbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xuICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgdGhpcy5pc0VtYWlsXG4gICAgICAgIF0pXSxcbiAgICAgICAgc2lnblBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICB9KVxuICAgIH1cbiAgICBwcml2YXRlIGlzRW1haWwoY29udHJvbDogQ29udHJvbCk6IHsgW3M6IHN0cmluZ106IGJvb2xlYW59IHtcbiAgICAgIHZhciByZSA9IC9eWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSsoXFwuWy1hLXowLTl+ISQlXiYqXz0rfXtcXCc/XSspKkAoW2EtejAtOV9dWy1hLXowLTlfXSooXFwuWy1hLXowLTlfXSspKlxcLihhZXJvfGFycGF8Yml6fGNvbXxjb29wfGVkdXxnb3Z8aW5mb3xpbnR8bWlsfG11c2V1bXxuYW1lfG5ldHxvcmd8cHJvfHRyYXZlbHxtb2JpfGlkfGlkYXxbYS16XVthLXpdKXwoWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfSkpKDpbMC05XXsxLDV9KT8kL2k7XG4gICAgICBpZighY29udHJvbC52YWx1ZS5tYXRjaChyZSkpe1xuICAgICAgICBjb25zb2xlLmxvZyhjb250cm9sLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHtpbnZhbGlkRW1haWw6IHRydWV9O1xuICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JvdXRlQ29uZmlnLCBST1VURVJfRElSRUNUSVZFUywgUk9VVEVSX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Rk9STV9QUk9WSURFUlMsIEZPUk1fRElSRUNUSVZFUywgQ29udHJvbH0gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnN9IGZyb20gJ2FuZ3VsYXIyL2h0dHAnO1xuaW1wb3J0IHsgU3ViIH0gZnJvbSAnLi9zdWJzJztcbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL2xvZ2luLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtMb2dpbkNvbXBvbmVudCwgUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuXG5AUm91dGVDb25maWcoW1xuICAgIHtwYXRoOiAnL2xvZ2luJywgbmFtZTogJ0xvZ2luJywgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCwgdXNlQXNEZWZhdWx0OiB0cnVlfVxuXSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudHtcbn1cbiIsIi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9hbmd1bGFyMi90eXBpbmdzL2Jyb3dzZXIuZC50c1wiLz5cbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICdhbmd1bGFyMi9wbGF0Zm9ybS9icm93c2VyJztcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9odHRwJztcbmltcG9ydCB7Uk9VVEVSX1BST1ZJREVSU30gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5ib290c3RyYXAoQXBwQ29tcG9uZW50LCBbUk9VVEVSX1BST1ZJREVSUywgSFRUUF9QUk9WSURFUlNdKTtcbiJdfQ==

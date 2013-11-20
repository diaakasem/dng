(function(){"use strict";angular.module("dng.parse",[]).config(function(){})}).call(this),function(){"use strict";angular.module("dng.parse",[]).config(function(){})}.call(this),function(){"use strict";var a;angular.module("dng.parse").service("Dngconfig",a=function(){var a;return a={}})}.call(this),function(){"use strict";var a;angular.module("dng.parse").service("Dngconfig",a=function(){var a;return a={}})}.call(this),function(){"use strict";var a,b;b='<div class="row">\n  <div class="col-md-12">\n    <form name="form" class="form" role="form" ng-submit="signup(form)" id="login-nav"\n      novalidate>\n\n      <div class="form-group">\n        <label class="sr-only" for="name">Name</label>\n        <input name="name" type="text" class="form-control" id="name" ng-model="model.name"\n        placeholder="Full name" required>\n        <span ng-show="form.name.$error.required && form.name.$dirty">\n          Name is required\n        </span>\n      </div>\n\n      <div class="form-group">\n        <label class="sr-only" for="email">Email address</label>\n        <input name="email" type="email" class="form-control" id="email" ng-model="model.email"\n        placeholder="Email address" required>\n        <span ng-show="form.email.$error.required && form.email.$dirty">\n          Email is required\n        </span>\n      </div>\n\n      <div class="form-group">\n        <label class="sr-only" for="password">Password</label>\n        <input type="password" class="form-control"  ng-model="model.password"\n         ng-minlength="5" ng-maxlength="20" name="password"\n        id="password" placeholder="Password" required>\n        <span ng-show="form.password.$error.required &&\n          form.password.$dirty">Password is required</span>\n        <span ng-show="!form.password.$error.required &&\n          (form.password.$error.minlength ||\n          form.password.$error.maxlength) &&\n          form.password.$dirty">Password must be between 5 and 20 characters.</span>\n      </div>\n\n      <div class="form-group">\n        <label class="sr-only" for="confirmpassword">Confirm Password</label>\n        <input type="password" class="form-control" name="confirmpassword"\n        ng-model="model.confirmpassword"\n        id="confirmpassword" placeholder="Confirm Password" required>\n        <span ng-show="form.confirmpassword.$error.required &&\n          form.confirmpassword.$dirty">Please confirm your\n          password.</span>\n        <span ng-show="!form.confirmpassword.$error.required &&\n          form.confirmpassword.$error.nomatch &&\n          form.password.$dirty">Passwords do not match.</span>\n      </div>\n      <div class="form-group">\n        <button type="submit" class="btn btn-success btn-block">Sign up</button>\n      </div>\n    </form>\n  </div>\n</div>\n<div class="divider"></div>\n<div class="row">\n<input class="btn btn-primary btn-block" type="button"\nid="sign-in-facebook" value="Sign Up with Facebook">\n</div>',a=function(a,b){return b.model={},b.signup=function(c){var d;return c.$invalid?void 0:c.$valid&&b.model.password!==b.model.confirmpassword?(c.confirmpassword.$error.nomatch=!0,void 0):(delete b.model.confirmpassword,d=new Parse.User,d.set("name",b.model.name),d.set("username",b.model.email),d.set("password",b.model.password),d.set("email",b.model.email),d.set("ACL",new Parse.ACL),d.signUp(null,{success:function(b){return a.user=b,a.go("/")},error:function(){return alert("Invalid username or password. Please try again.")}}))}},angular.module("dng.parse").directive("register",function(){return{template:b,restrict:"E",replace:!0,scope:!0,link:function(){},controller:["$rootScope","$scope",a]}})}.call(this),function(){"use strict";var a,b;b='<div class="row">\n  <div class="col-md-12">\n    <form name="form" class="form" role="form" ng-submit="signup(form)" id="login-nav"\n      novalidate>\n\n      <div class="form-group">\n        <label class="sr-only" for="name">Name</label>\n        <input name="name" type="text" class="form-control" id="name" ng-model="model.name"\n        placeholder="Full name" required>\n        <span ng-show="form.name.$error.required && form.name.$dirty">\n          Name is required\n        </span>\n      </div>\n\n      <div class="form-group">\n        <label class="sr-only" for="email">Email address</label>\n        <input name="email" type="email" class="form-control" id="email" ng-model="model.email"\n        placeholder="Email address" required>\n        <span ng-show="form.email.$error.required && form.email.$dirty">\n          Email is required\n        </span>\n      </div>\n\n      <div class="form-group">\n        <label class="sr-only" for="password">Password</label>\n        <input type="password" class="form-control"  ng-model="model.password"\n         ng-minlength="5" ng-maxlength="20" name="password"\n        id="password" placeholder="Password" required>\n        <span ng-show="form.password.$error.required &&\n          form.password.$dirty">Password is required</span>\n        <span ng-show="!form.password.$error.required &&\n          (form.password.$error.minlength ||\n          form.password.$error.maxlength) &&\n          form.password.$dirty">Password must be between 5 and 20 characters.</span>\n      </div>\n\n      <div class="form-group">\n        <label class="sr-only" for="confirmpassword">Confirm Password</label>\n        <input type="password" class="form-control" name="confirmpassword"\n        ng-model="model.confirmpassword"\n        id="confirmpassword" placeholder="Confirm Password" required>\n        <span ng-show="form.confirmpassword.$error.required &&\n          form.confirmpassword.$dirty">Please confirm your\n          password.</span>\n        <span ng-show="!form.confirmpassword.$error.required &&\n          form.confirmpassword.$error.nomatch &&\n          form.password.$dirty">Passwords do not match.</span>\n      </div>\n      <div class="form-group">\n        <button type="submit" class="btn btn-success btn-block">Sign up</button>\n      </div>\n    </form>\n  </div>\n</div>\n<div class="divider"></div>\n<div class="row">\n<input class="btn btn-primary btn-block" type="button"\nid="sign-in-facebook" value="Sign Up with Facebook">\n</div>',a=function(a,b){return b.model={},b.signup=function(c){var d;return c.$invalid?void 0:c.$valid&&b.model.password!==b.model.confirmpassword?(c.confirmpassword.$error.nomatch=!0,void 0):(delete b.model.confirmpassword,d=new Parse.User,d.set("name",b.model.name),d.set("username",b.model.email),d.set("password",b.model.password),d.set("email",b.model.email),d.set("ACL",new Parse.ACL),d.signUp(null,{success:function(b){return a.user=b,a.go("/")},error:function(){return alert("Invalid username or password. Please try again.")}}))}},angular.module("dng.parse").directive("register",function(){return{template:b,restrict:"E",replace:!0,scope:!0,link:function(){},controller:["$rootScope","$scope",a]}})}.call(this),function(){"use strict";var a,b;b='<div class="row">\n  <div class="col-md-12">\n    <form name="form" class="form" role="form" ng-submit="signin(form)" id="login-nav"\n      novalidate>\n\n      <div class="form-group">\n        <label class="sr-only" for="email">Email address</label>\n        <input name="email" type="email" class="form-control" id="email" ng-model="model.email"\n        placeholder="Email address" required>\n        <span ng-show="form.email.$error.required && form.email.$dirty">\n          Email is required\n        </span>\n      </div>\n\n      <div class="form-group">\n        <label class="sr-only" for="password">Password</label>\n        <input type="password" class="form-control" ng-model="model.password"\n        name="password"\n        id="password" placeholder="Password" required>\n        <span ng-show="form.password.$error.required &&\n          form.password.$dirty">Password is required</span>\n      </div>\n\n      <div class="form-group">\n        <button type="submit" class="btn btn-success btn-block">Sign in</button>\n      </div>\n    </form>\n  </div>\n</div>\n<div class="divider"></<div>\n<div class="row">\n  <input class="btn btn-primary btn-block" type="button"\n  id="sign-in-facebook" value="Sign In with Facebook">\n  </input>\n</div>',a=function(a,b){return b.model={},b.signin=function(c){return c.$invalid?void 0:Parse.User.logIn(b.model.email,b.model.password,{success:function(b){return a.user=b,a.go("/")},error:function(){return alert("Invalid username or password. Please try again.")}})}},angular.module("dng.parse").directive("login",function(){return{template:b,restrict:"E",replace:!0,scope:!0,controller:["$rootScope","$scope",a]}})}.call(this),function(){"use strict";var a,b;b='<div class="row">\n  <div class="col-md-12">\n    <form name="form" class="form" role="form" ng-submit="signin(form)" id="login-nav"\n      novalidate>\n\n      <div class="form-group">\n        <label class="sr-only" for="email">Email address</label>\n        <input name="email" type="email" class="form-control" id="email" ng-model="model.email"\n        placeholder="Email address" required>\n        <span ng-show="form.email.$error.required && form.email.$dirty">\n          Email is required\n        </span>\n      </div>\n\n      <div class="form-group">\n        <label class="sr-only" for="password">Password</label>\n        <input type="password" class="form-control" ng-model="model.password"\n        name="password"\n        id="password" placeholder="Password" required>\n        <span ng-show="form.password.$error.required &&\n          form.password.$dirty">Password is required</span>\n      </div>\n\n      <div class="form-group">\n        <button type="submit" class="btn btn-success btn-block">Sign in</button>\n      </div>\n    </form>\n  </div>\n</div>\n<div class="divider"></<div>\n<div class="row">\n  <input class="btn btn-primary btn-block" type="button"\n  id="sign-in-facebook" value="Sign In with Facebook">\n  </input>\n</div>',a=function(a,b){return b.model={},b.signin=function(c){return c.$invalid?void 0:Parse.User.logIn(b.model.email,b.model.password,{success:function(b){return a.user=b,a.go("/")},error:function(){return alert("Invalid username or password. Please try again.")}})}},angular.module("dng.parse").directive("login",function(){return{template:b,restrict:"E",replace:!0,scope:!0,controller:["$rootScope","$scope",a]}})}.call(this),function(){"use strict";angular.module("dng.parse").directive("logout",function(){return{template:"<div></div>",restrict:"E",link:function(a,b){return b.text("this is the logout directive")}}})}.call(this),function(){"use strict";angular.module("dng.parse").directive("logout",function(){return{template:"<div></div>",restrict:"E",link:function(a,b){return b.text("this is the logout directive")}}})}.call(this);
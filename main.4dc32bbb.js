parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=new Promise(function(e,n){setTimeout(function(){n("First promise was rejected")},3e3),document.addEventListener("click",function(){e("First promise was resolved")})}),n=new Promise(function(e){document.addEventListener("mouseup",function(n){var t=n.which;1!==t&&3!==t||e("Second promise was resolved")})}),t=new Promise(function(e){document.addEventListener("mouseup",function(n){var t=n.which;if(1===t||3===t){var i=1===t?3:1;e(new Promise(function(e){document.addEventListener("mouseup",function(n){n.which===i&&e("Third promise was resolved")})}))}})}),i=function(e){var n=document.createElement("p");n.setAttribute("data-qa","notification"),n.classList.add("success"),n.innerText=e,document.body.appendChild(n)},o=function(e){var n=document.createElement("p");n.setAttribute("data-qa","notification"),n.classList.add("warning"),n.innerText=e,document.body.appendChild(n)};e.then(i).catch(o),n.then(i),t.then(i);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.4dc32bbb.js.map
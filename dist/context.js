!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.body,t=document.querySelector(".clubs-list>ul");e.addEventListener("click",(function(e){var n=e.target;n.closest(".club-select")&&"none"===getComputedStyle(t).display?t.style.display="block":n.closest(".clubs-list>ul")||(t.style.display="")}))},i=function(){var e=document.querySelector("body"),t=document.querySelector(".fixed-gift");e.addEventListener("click",(function(e){var n=e.target.dataset.popup;if(n){var o=document.querySelector("".concat(n));"#gift"===n&&(t.style.display="none"),o.style.display="block"}})),document.querySelectorAll(".popup").forEach((function(e){e.addEventListener("click",(function(t){var n=t.target,o=e.querySelectorAll("input");n.classList.contains("close_icon")||n.closest(".close-btn")?(e.style.display="none",o.forEach((function(e){e.value=""}))):(n=n.closest(".form-wrapper"))||(e.style.display="none",o.forEach((function(e){e.value=""})))}))}))},r=function(){var e=document.querySelector(".popup-menu");document.querySelector(".header-main").addEventListener("click",(function(t){var n=t.target;n.closest(".menu-button>img")?e.style.display="flex":(n.closest(".scroll>a")||n.closest(".close-menu-btn>img"))&&(e.style.display="none")}))},l=function(e){var t=document.querySelectorAll(e),n=0,o=function(){t[n].style.display="none",++n>=t.length&&(n=0),function(e,t){e[t].style.display="flex"}(t,n)};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(o,e)}(3e3)},s=function(){var e=document.getElementById("totop");0===window.pageYOffset&&(e.style.display="none"),window.addEventListener("scroll",(function(){window.pageYOffset<700?e.style.display="none":e.style.display="block"}))},a=function(){var e=document.getElementById("price-total"),t=document.querySelector(".cardPrice");if(t){var n={mozaika:{1:1990,6:9900,9:13900,12:19900},schelkovo:{1:2999,6:14990,9:21990,12:24990}},o={"ТЕЛО2020":30};t.addEventListener("input",(function(){var t,i,r=document.querySelectorAll(".month-input"),l=document.querySelectorAll(".club-input"),s=document.querySelector(".promo-input");r.forEach((function(e){e.checked&&(t=e.value)})),l.forEach((function(e){e.checked&&(i=e.value)}));var a=s.value,c=o[a]||0;e.textContent=Math.round(n[i][t]*(1-c/100))}))}};function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function e(t){var n=t.main,o=t.wrap,i=t.next,r=t.prev,l=t.position,s=void 0===l?0:l,a=t.slidesToShow,c=void 0===a?4:a,d=t.infinity,u=void 0!==d&&d,p=t.responsive,f=void 0===p?[]:p;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n&&o||console.warn("slider-carousel: Необходимо ввести 2 свойства(main, wrap)"),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.next=document.querySelector(i),this.prev=document.querySelector(r),this.buttonAll=document.querySelector(".buttonAll"),this.slides=document.querySelector(o).children,this.slidesToShow=c,this.options={position:s,infinity:u,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=f}var t,n,o;return t=e,(n=[{key:"init",value:function(){this.addStyle(),this.addGloClass(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e,t=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw r}}}}(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("glo-slider__item")}catch(e){t.e(e)}finally{t.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n        .glo-slider {\n          overflow: hidden  !important;\n        }\n        .glo-slider__wrap {\n          display: flex !important;\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n        }\n        .glo-slider__item {\n          display: flex !important;\n          align-items: center;\n          flex-direction: column;\n          flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        }\n        @media (max-width: 1280px) {\n            .glo-slider {\n                width: 890px !important;\n            }\n            .glo-slider__wrap {\n                width: 1085px !important;\n            }\n        }\n        @media (max-width: 992px) {\n            .glo-slider {\n                width: 670px !important;\n            }\n        }\n        @media (max-width: 767px) {\n            .glo-slider {\n                width: 560px !important;\n            }\n            .glo-slider__wrap {\n                width: 900px !important;\n            }\n        }\n        @media (max-width: 567px) {\n            .glo-slider {\n                width: 420px !important;\n            }\n            .glo-slider__wrap {\n                width: 1000px !important;\n            }\n        }\n        @media (max-width: 420px) {\n            .glo-slider {\n                width: 208px !important;\n            }\n        }\n        "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.options.position*this.options.widthSlide==0?this.wrap.style.transform="translateX(-2.5%)":this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide+4,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.options.position*this.options.widthSlide==0?this.wrap.style.transform="translateX(-2.5%)":this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide+4,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.buttonAll.appendChild(this.prev),this.buttonAll.appendChild(this.next),this.main.appendChild(this.buttonAll);var e=document.createElement("style");e.textContent="\n        .buttonAll {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n         position: relative;\n         bottom: 210px;\n        }\n        \n        \n      .glo-slider__prev,\n      .glo-slider__next {\n          margin: 0 10px;\n          border: 20px solid transparent;\n          background: transparent;\n\n      }\n      \n      .glo-slider__next{\n          border-left-color: #19b5fe;\n      }\n      .glo-slider__prev {\n          border-right-color: #19b5fe;\n      }\n      .glo-slider__prev:hover,\n      .glo-slider__next:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:focus {\n          background: transparent;\n          outline: transparent;\n      }\n      ",document.head.appendChild(e)}},{key:"responseInit",value:function(){var e=this,t=this.slidesToShow,n=this.responsive.map((function(e){return e.breakpoint})),o=Math.max.apply(Math,c(n)),i=function(){e.options.widthSlide=Math.floor(100/e.slidesToShow),e.options.maxPosition=e.slides.length-e.slidesToShow,e.addStyle()},r=function(){var r=document.documentElement.clientWidth;if(r<o)for(var l=0;l<n.length;l++)r<n[l]&&(e.slidesToShow=e.responsive[l].slidesToShow,i());else e.slidesToShow=t,i()};r(),window.addEventListener("resize",r)}}])&&p(t.prototype,n),o&&p(t,o),e}(),h=function(){var e=document.querySelectorAll(".forms"),t=document.getElementById("thanks"),n=document.querySelectorAll(".popup"),o=t.querySelector(".response"),i=t.querySelector(".catch"),r=document.querySelectorAll(".month-input"),l=document.querySelector(".preloader"),s=document.createElement("div");e.forEach((function(e){var c=e.querySelector('input[name="name"]'),d=e.querySelector('input[name="phone"]'),u=e.querySelector("button"),p=e.querySelector(".checkbox-popup");u.disabled=!0,u.style.backgroundColor="#808080",e.addEventListener("input",(function(e){var t=e.target;"name"===t.name&&(t.value=t.value.replace(/[^А-Яа-я\s]/,"")),c&&""===c.value||""===d.value||p&&!p.checked?(u.disabled=!0,u.style.backgroundColor="#808080"):(u.disabled=!1,u.style.backgroundColor="#ffd11a")})),e.addEventListener("submit",(function(f){l.classList.remove("loaded");var h=function(){t.style.display="block",c&&(c.value=""),p.checked=!1,d.value="",setTimeout((function(){n.forEach((function(e){e.style.display="none"}))}),4e3),r&&(r[0].checked=!0),u.disabled=!0,u.style.backgroundColor="#808080"};f.preventDefault(),e.appendChild(s);var y=new FormData(e),m={};y.forEach((function(e,t){m[t]=e})),a(m).then((function(e){if(200!==e.status)throw new Error("Статус нетворк нот 200");o.style.display="block",i.style.display="none",h(),l.classList.add("loaded")})).catch((function(){o.style.display="none",i.style.display="block",h()}))}))}));var a=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}};function y(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,r=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw r}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(e);function o(e){var n=e.keyCode,o=t,i=o.replace(/\D/g,""),r=this.value.replace(/\D/g,""),l=0,s=o.replace(/[_\d]/g,(function(e){return l<r.length?r.charAt(l++)||i.charAt(l):e}));-1!=(l=s.indexOf("_"))&&(s=s.slice(0,l));var a=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")}var i,r=y(n);try{for(r.s();!(i=r.n()).done;){var l=i.value;l.addEventListener("input",o),l.addEventListener("focus",o),l.addEventListener("blur",o)}}catch(e){r.e(e)}finally{r.f()}},g=function(){var e,t=document.querySelectorAll(".item"),n=document.querySelector(".slider"),o=0,i=document.querySelectorAll(".dot"),r=function(e,t){e[t].style.display="none"},l=function(e,t){e[t].style.display="flex"},s=function(e,t,n){e[t].classList.remove(n)},a=function(e,t,n){e[t].classList.add(n)},c=function(){r(t,o),s(i,o,"dot-active"),++o>=t.length&&(o=0),l(t,o),a(i,o,"dot-active")},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(c,t)};n.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".next, .prev, .dot")&&(r(t,o),s(i,o,"dot-active"),n.matches(".next")?o++:n.matches(".prev")?o--:n.matches(".dot")&&i.forEach((function(e,t){e===n&&(o=t)})),o>=t.length&&(o=0),o<0&&(o=t.length-1),l(t,o),a(i,o,"dot-active"))})),n.addEventListener("mouseover",(function(t){(t.target.matches(".next")||t.target.matches(".prev")||t.target.matches(".dot"))&&clearInterval(e)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".next")||e.target.matches(".prev")||e.target.matches(".dot"))&&d()})),d(1500)},b=function(){var e=document.querySelector(".top-menu"),t=document.querySelector(".header-main");window.addEventListener("resize",(function(){window.innerWidth<=767?(e.style.position="fixed",t.style.marginTop="60px"):(e.style.position="",t.style.marginTop="")}))};o(),i(),r(),l(".main-slider>.slide"),s(),a(),new f({main:".services-wrapper",wrap:".services-slider",slidesToShow:4,infinity:!0}).init(),g(),h(),v('input[name="phone"]'),b()}]);
//# sourceMappingURL=context.js.map
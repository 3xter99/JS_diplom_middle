!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function(){var t=document.body,e=document.querySelector(".clubs-list>ul");t.addEventListener("click",(function(t){var n=t.target;n.closest(".club-select")&&"none"===getComputedStyle(e).display?e.style.display="block":n.closest(".clubs-list>ul")||(e.style.display="")}))},i=function(){var t=document.querySelector("body"),e=document.querySelector(".fixed-gift");t.addEventListener("click",(function(t){var n=t.target.dataset.popup;if(n){var o=document.querySelector("".concat(n));"#gift"===n&&(e.style.display="none"),o.style.display="block"}})),document.querySelectorAll(".popup").forEach((function(t){t.addEventListener("click",(function(e){var n=e.target;n.classList.contains("close_icon")||n.closest(".close-btn")?t.style.display="none":(n=n.closest(".form-wrapper"))||(t.style.display="none")}))}))},r=function(){var t=document.querySelector(".popup-menu");document.querySelector(".header-main").addEventListener("click",(function(e){var n=e.target;n.closest(".menu-button>img")?t.style.display="flex":(n.closest(".scroll>a")||n.closest(".close-menu-btn>img"))&&(t.style.display="none")}))},l=function(t){var e=document.querySelectorAll(t),n=0,o=function(){e[n].style.display="none",++n>=e.length&&(n=0),function(t,e){t[e].style.display="flex"}(e,n)};!function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(o,t)}(3e3)},s=function(){var t=document.getElementById("totop");0===window.pageYOffset&&(t.style.display="none"),window.addEventListener("scroll",(function(){window.pageYOffset<700?t.style.display="none":t.style.display="block"}))},a=function(){var t=document.getElementById("price-total"),e=document.querySelector(".cardPrice");if(e){var n={mozaika:{1:1990,6:9900,9:13900,12:19900},schelkovo:{1:2999,6:14990,9:21990,12:24990}},o={"ТЕЛО2020":30};e.addEventListener("change",(function(){var e,i,r=document.querySelectorAll(".month-input"),l=document.querySelectorAll(".club-input"),s=document.querySelector(".promo-input");r.forEach((function(t){t.checked&&(e=t.value)})),l.forEach((function(t){t.checked&&(i=t.value)}));var a=s.value,c=o[a]||0;t.textContent=Math.round(n[i][e]*(1-c/100))}))}};function c(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var f=function(){function t(e){var n=e.main,o=e.wrap,i=e.next,r=e.prev,l=e.position,s=void 0===l?0:l,a=e.slidesToShow,c=void 0===a?4:a,u=e.infinity,d=void 0!==u&&u,p=e.responsive,f=void 0===p?[]:p;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n&&o||console.warn("slider-carousel: Необходимо ввести 2 свойства(main, wrap)"),this.main=document.querySelector(n),this.wrap=document.querySelector(o),this.next=document.querySelector(i),this.prev=document.querySelector(r),this.buttonAll=document.querySelector(".buttonAll"),this.slides=document.querySelector(o).children,this.slidesToShow=c,this.options={position:s,infinity:d,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=f}var e,n,o;return e=t,(n=[{key:"init",value:function(){this.addStyle(),this.addGloClass(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var t,e=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=u(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){s=!0,r=t},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw r}}}}(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("glo-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("sliderCarousel-style");t||((t=document.createElement("style")).id="sliderCarousel-style"),t.textContent="\n        .glo-slider {\n          overflow: hidden  !important;\n        }\n        .glo-slider__wrap {\n          display: flex !important;\n          transition: transform 0.5s !important;\n          will-change: transform !important;\n        }\n        .glo-slider__item {\n          display: flex !important;\n          align-items: center;\n          flex-direction: column;\n          flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n        }\n        @media (max-width: 1280px) {\n            .glo-slider {\n                width: 890px !important;\n            }\n            .glo-slider__wrap {\n                width: 1085px !important;\n            }\n        }\n        @media (max-width: 992px) {\n            .glo-slider {\n                width: 670px !important;\n            }\n        }\n        @media (max-width: 767px) {\n            .glo-slider {\n                width: 560px !important;\n            }\n            .glo-slider__wrap {\n                width: 900px !important;\n            }\n        }\n        @media (max-width: 567px) {\n            .glo-slider {\n                width: 420px !important;\n            }\n            .glo-slider__wrap {\n                width: 1000px !important;\n            }\n        }\n        @media (max-width: 420px) {\n            .glo-slider {\n                width: 208px !important;\n            }\n        }\n        "),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.options.position*this.options.widthSlide==0?this.wrap.style.transform="translateX(-2.5%)":this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide+4,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.options.position*this.options.widthSlide==0?this.wrap.style.transform="translateX(-2.5%)":this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide+4,"%)"))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.buttonAll.appendChild(this.prev),this.buttonAll.appendChild(this.next),this.main.appendChild(this.buttonAll);var t=document.createElement("style");t.textContent="\n        .buttonAll {\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n         position: relative;\n         bottom: 210px;\n        }\n        \n        \n      .glo-slider__prev,\n      .glo-slider__next {\n          margin: 0 10px;\n          border: 20px solid transparent;\n          background: transparent;\n\n      }\n      \n      .glo-slider__next{\n          border-left-color: #19b5fe;\n      }\n      .glo-slider__prev {\n          border-right-color: #19b5fe;\n      }\n      .glo-slider__prev:hover,\n      .glo-slider__next:hover,\n      .glo-slider__prev:focus,\n      .glo-slider__next:focus {\n          background: transparent;\n          outline: transparent;\n      }\n      ",document.head.appendChild(t)}},{key:"responseInit",value:function(){var t=this,e=this.slidesToShow,n=this.responsive.map((function(t){return t.breakpoint})),o=Math.max.apply(Math,c(n)),i=function(){t.options.widthSlide=Math.floor(100/t.slidesToShow),t.options.maxPosition=t.slides.length-t.slidesToShow,t.addStyle()},r=function(){var r=document.documentElement.clientWidth;if(r<o)for(var l=0;l<n.length;l++)r<n[l]&&(t.slidesToShow=t.responsive[l].slidesToShow,i());else t.slidesToShow=e,i()};r(),window.addEventListener("resize",r)}}])&&p(e.prototype,n),o&&p(e,o),t}(),h=function(){var t=document.querySelectorAll(".forms"),e=document.getElementById("thanks"),n=document.querySelectorAll(".popup"),o=e.querySelector(".response"),i=e.querySelector(".catch"),r=document.createElement("div");t.forEach((function(t){t.addEventListener("input",(function(t){var e=t.target;"name"===e.name&&(e.value=e.value.replace(/[^А-Яа-я\s]/,""))})),t.addEventListener("submit",(function(s){var a=t.querySelector('input[name="name"]'),c=t.querySelector('input[name="phone"]'),u=function(){e.style.display="block",a.value="",c.value="",setTimeout((function(){n.forEach((function(t){t.style.display="none"}))}),4e3)};s.preventDefault(),t.appendChild(r);var d=new FormData(t),p={};!a||a.value?(d.forEach((function(t,e){p[e]=t})),l(p).then((function(t){if(200!==t.status)throw new Error("Статус нетворк нот 200");o.style.display="block",i.style.display="none",u()})).catch((function(){o.style.display="none",i.style.display="block",u()}))):alert("Поле имя не заполнено")}))}));var l=function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}};function y(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){s=!0,r=t},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw r}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll(t);function o(t){var n=t.keyCode,o=e,i=o.replace(/\D/g,""),r=this.value.replace(/\D/g,""),l=0,s=o.replace(/[_\d]/g,(function(t){return l<r.length?r.charAt(l++)||i.charAt(l):t}));-1!=(l=s.indexOf("_"))&&(s=s.slice(0,l));var a=o.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"==t.type&&this.value.length<5&&(this.value="")}var i,r=y(n);try{for(r.s();!(i=r.n()).done;){var l=i.value;l.addEventListener("input",o),l.addEventListener("focus",o),l.addEventListener("blur",o)}}catch(t){r.e(t)}finally{r.f()}},g=function(){var t,e=1;function n(){o(e+=1)}function o(t){var n,o=document.getElementsByClassName("item");for(t>o.length&&(e=1),t<1&&(e=o.length),n=0;n<o.length;n++)o[n].style.display="none";o[e-1].style.display="block"}o(e);var i=document.querySelector(".slider");i.addEventListener("click",(function(t){var i=t.target;i.closest(".next")&&n(),i.closest(".prev")&&o(e-=1)}));var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;t=setInterval(n,e)};r(3e3);i.addEventListener("mouseover",(function(e){(e.target.matches(".next")||e.target.matches(".prev"))&&clearInterval(t)})),i.addEventListener("mouseout",(function(t){(t.target.matches(".next")||t.target.matches(".prev"))&&r()}))},b=function(){var t=document.querySelector(".top-menu");window.addEventListener("resize",(function(){window.innerWidth<=767?t.style.position="fixed":t.style.position=""}))};o(),i(),r(),l(".main-slider>.slide"),s(),a(),new f({main:".services-wrapper",wrap:".services-slider",slidesToShow:4,infinity:!0}).init(),g(),h(),v('input[name="phone"]'),b()}]);
//# sourceMappingURL=context.js.map
if(!self.define){let e,s={};const r=(r,n)=>(r=new URL(r+".js",n).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>r(e,o),c={module:{uri:o},exports:l,require:t};s[o]=Promise.all(n.map((e=>c[e]||t(e)))).then((e=>(i(...e),l)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pwa-project"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/chunk-vendors.4a8d65c9.css",revision:null},{url:"/img/logo.4d6033c9.svg",revision:null},{url:"/index.html",revision:"605b6a0b207112dcd77b63c5323c7bf7"},{url:"/js/about.52a6b3ab.js",revision:null},{url:"/js/app.9729fb26.js",revision:null},{url:"/js/chunk-vendors.51107a4c.js",revision:null},{url:"/manifest.json",revision:"681286d6882bfa5e6a6f77d7777349a3"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map

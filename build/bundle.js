(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var a;e.g.importScripts&&(a=e.g.location+"");var i=e.g.document;if(!a&&i&&(i.currentScript&&(a=i.currentScript.src),!a)){var n=i.getElementsByTagName("script");if(n.length)for(var t=n.length-1;t>-1&&!a;)a=n[t--].src}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=a})();const a=function(e){const a=document.createElement(`${e.tagName}`);return e.className&&a.classList.add(`${e.className}`),e.text&&(a.innerHTML=`${e.text}`),a},i=class{constructor(e,i){this.container=a({tagName:e}),this.contentContainer=a({tagName:"div",className:"content-container"}),i&&(this.container.className=i)}appendElements(){}createElements(){}render(){this.container.innerHTML="",this.appendElements()}getElement(){return this.container}},n=class extends i{constructor(){super("footer"),this.contentContainer.id="contact-us",this.appendElements()}appendElements(){this.contentContainer.insertAdjacentHTML("beforeend",'<div class="offer-container">\n\n  <h2>Sip, Savor, Smile.</h2>\n  <h2>It’s coffee time!</h2>\n  <div class="socials-btn-container">\n    <a href="https://www.twitter.com">\n      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n        <path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>\n    </a>\n    <a href="https://www.instagram.com">\n      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"/>\n        <path d="M17.5 6.51L17.51 6.49889" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>\n    </a>\n    <a href="https://www.facebook.com">\n      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n        <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>\n    </a>\n  </div>\n</div>\n\n\n<div class="contact-container">\n  <h3>Contact us</h3>\n\n  <a href="https://maps.app.goo.gl/dmTJZ3w33e8YTzSd6">\n    <span class="icon">\n      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n        <path d="M16.6663 8.33329C16.6663 12.0152 9.99967 18.3333 9.99967 18.3333C9.99967 18.3333 3.33301 12.0152 3.33301 8.33329C3.33301 4.65139 6.31778 1.66663 9.99967 1.66663C13.6816 1.66663 16.6663 4.65139 16.6663 8.33329Z" stroke="#E1D4C9" stroke-width="1.5"/>\n        <path d="M10.0003 9.16667C10.4606 9.16667 10.8337 8.79357 10.8337 8.33333C10.8337 7.8731 10.4606 7.5 10.0003 7.5C9.54009 7.5 9.16699 7.8731 9.16699 8.33333C9.16699 8.79357 9.54009 9.16667 10.0003 9.16667Z" fill="#E1D4C9" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    </span>\n    <span class="text">8558 Green Rd.,  LA</span>\n  </a>\n\n  <br>\n\n  <a href="tel:+1(603)555-0123">\n    <span class="icon">\n      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n        <path d="M15.0984 12.2516L11.6665 12.9166C9.34845 11.7531 7.91654 10.4166 7.08321 8.33329L7.72483 4.89154L6.51197 1.66663L3.72946 1.66663C2.60191 1.66663 1.71466 2.59958 1.90108 3.71161C2.29888 6.08454 3.37231 10.0391 6.24987 12.9166C9.27338 15.9401 13.5661 17.3318 16.1378 17.9288C17.299 18.1983 18.3332 17.2908 18.3332 16.0988L18.3332 13.4843L15.0984 12.2516Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>\n    </span>\n    <span class="text">+1 (603) 555-0123</span>\n  </a>\n\n  <br>\n\n  <span class="icon">\n    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n      <g clip-path="url(#clip0_217_1736)">\n      <path d="M10 5L10 10L15 10" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n      <path d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n      </g>\n      <defs>\n      <clipPath id="clip0_217_1736">\n      <rect width="20" height="20" fill="white"/>\n      </clipPath>\n      </defs>\n      </svg>\n  </span>\n\n  <span>\n    <span class="text">Mon-Sat: 9:00 AM – 23:00 PM</span>\n  </span>\n</div>'),this.container.append(this.contentContainer)}},t=e.p+"./assets/img/logo.svg",s=e.p+"./assets/img/coffee-cup.svg",r=(e,a="img")=>{const i=new Image;return i.src=e,i.alt=a,i};class d extends i{static links=this.links;constructor(){super("nav"),this.createElements(),this.appendElements()}createElements(){const e=["Favorite coffee","About","Mobile app","Contact us"];this.links={names:e,elements:e.map((e=>{const i=a({tagName:"li"}),n=a({tagName:"a",text:e});return n.href=`#${e.replace(" ","-").toLocaleLowerCase()}`,i.append(n),i}))}}appendElements(){this.links.elements.forEach((e=>{this.container.append(e)}))}}const c=d,p=class extends i{constructor(){super("header"),this.createElements(),this.appendElements()}createElements(){this.logoWrap=a({tagName:"div",className:"logo-wrap"}),this.menuBtn=a({tagName:"button",className:"menu-btn"}),this.menuBtnWrap=a({tagName:"div",className:"menu-btn-wrap"}),this.menuBtnIconContainer=a({tagName:"div",className:"menu-img-container"}),this.menuBtnText=a({tagName:"p",text:"Menu"})}appendElements(){this.logoWrap.append(r(t,"logo")),this.menuBtnIconContainer.append(r(s,"cup-logo")),this.menuBtnWrap.append(this.menuBtnText),this.menuBtnWrap.append(this.menuBtnIconContainer),this.menuBtn.append(this.menuBtnWrap),this.contentContainer.append(this.logoWrap),this.contentContainer.append((new c).getElement()),this.contentContainer.append(this.menuBtn),this.container.append(this.contentContainer)}},o=class extends i{constructor(e){super("div","choose-category-wrap"),this.prop=e,this.createElements(),this.appendElements()}createElements(){this.input=a({tagName:"input"}),this.input.id=this.prop.id,this.input.type="radio",this.input.name=this.prop.name,this.label=a({tagName:"label",className:"choose-category"}),this.label.htmlFor=this.prop.id,this.icon=a({tagName:"span",text:this.prop.icon}),this.text=a({tagName:"p",text:this.prop.text})}appendElements(){this.container.append(this.input),this.container.append(this.label),this.label.append(this.icon),this.label.append(this.text)}};class m extends i{constructor(){super("div","choose-category-btn-wrap"),this.createElements(),this.appendElements();const e=this.chooseCategoryBTNs[0].firstElementChild;e.checked=!0,m.value=e.id,this.container.onchange=()=>{this.chooseCategoryBTNs.forEach((e=>{const a=e.firstChild;a.checked&&(m.value=a.id)}))}}createElements(){this.chooseCategoryBTNs=[new o({id:"coffee",name:"category",text:"Coffee",icon:"☕"}).getElement(),new o({id:"tea",name:"category",text:"Tea",icon:"🫖"}).getElement(),new o({id:"dessert",name:"category",text:"Dessert",icon:"🍰"}).getElement()]}appendElements(){this.chooseCategoryBTNs.forEach((e=>this.container.append(e)))}}const l=m,h=class extends i{constructor(e){super("div","card-container"),this.product=e,this.createElements(),this.appendElements()}createElements(){this.cardHTML=`\n      <div class="img-wrap">\n      <img src="${this.product.image}" alt="card-image">\n      </div>\n      <div class="text-wrap">\n        <h3>${this.product.name}</h3>\n        <p>${this.product.description}</p>\n      </div>\n      <h3 class="price">$${this.product.price}</h3>\n    `}appendElements(){this.container.insertAdjacentHTML("beforeend",this.cardHTML)}},g=[{name:"Irish coffee",description:"Fragrant black coffee with Jameson Irish whiskey and whipped milk",price:"7.00",category:"coffee",image:e.p+"./assets/img/coffee-1.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Kahlua coffee",description:"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",price:"7.00",category:"coffee",image:e.p+"./assets/img/coffee-2.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Honey raf",description:"Espresso with frothed milk, cream and aromatic honey",price:"5.50",category:"coffee",image:e.p+"./assets/img/coffee-3.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Ice cappuccino",description:"Cappuccino with soft thick foam in summer version with ice",price:"5.00",category:"coffee",image:e.p+"./assets/img/coffee-4.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Espresso",description:"Classic black coffee",price:"4.50",category:"coffee",image:e.p+"./assets/img/coffee-5.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Latte",description:"Espresso coffee with the addition of steamed milk and dense milk foam",price:"5.50",category:"coffee",image:e.p+"./assets/img/coffee-6.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Latte macchiato",description:"Espresso with frothed milk and chocolate",price:"5.50",category:"coffee",image:e.p+"./assets/img/coffee-7.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Coffee with cognac",description:"Fragrant black coffee with cognac and whipped cream",price:"6.50",category:"coffee",image:e.p+"./assets/img/coffee-8.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Moroccan",description:"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",price:"4.50",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Ginger",description:"Original black tea with fresh ginger, lemon and honey",price:"5.00",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Cranberry",description:"Invigorating black tea with cranberry and honey",price:"5.00",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Sea buckthorn",description:"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",price:"5.50",category:"tea",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Marble cheesecake",description:"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",price:"3.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Red velvet",description:"Layer cake with cream cheese frosting",price:"4.00",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Cheesecakes",description:"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",price:"4.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Creme brulee",description:"Delicate creamy dessert in a caramel basket with wild berries",price:"4.00",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Pancakes",description:"Tender pancakes with strawberry jam and fresh strawberries",price:"4.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Honey cake",description:"Classic honey cake with delicate custard",price:"4.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Chocolate cake",description:"Cake with hot chocolate filling and nuts with dried apricots",price:"5.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Black forest",description:"A combination of thin sponge cake with cherry jam and light chocolate mousse",price:"6.50",category:"dessert",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]}],u=class extends i{constructor(){super("div","products-container"),this.products=g.filter((e=>e.category===l.value)),this.appendElements()}appendElements(){this.products.forEach((e=>{this.container.append(new h(e).getElement())}))}},f=class extends i{constructor(){super("main","menu"),this.container.id="menu",this.createElements(),this.appendElements()}createElements(){this.headline=a({tagName:"h1",text:"Behind each of our cups hides an <span>amazing surprise</span>"}),this.chooseCategoryBtnWrap=a({tagName:"div",className:"choose-category-btn-wrap"})}appendElements(){this.contentContainer.append(this.headline),this.contentContainer.append((new l).getElement()),this.contentContainer.append((new u).getElement()),this.container.append(this.contentContainer)}};(new class{constructor(){this.container=document.body}run(){this.container.append((new p).getElement()),this.container.append((new f).getElement()),this.container.append((new n).getElement())}}).run()})();
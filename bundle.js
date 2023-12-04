/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var i=a.length-1;i>-1&&!t;)t=a[i--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=function(e){const t=document.createElement(`${e.tagName}`);return e.className&&t.classList.add(`${e.className}`),e.text&&(t.innerHTML=`${e.text}`),t},n=class{constructor(e,n){this.container=t({tagName:e}),this.contentContainer=t({tagName:"div",className:"content-container"}),n&&(this.container.className=n)}appendElements(){}createComponent(){}render(){this.container.innerHTML="",this.contentContainer.innerHTML="",this.createComponent()}getElement(){return this.container}},a=class extends n{constructor(){super("footer"),this.contentContainer.id="contact-us",this.appendElements()}appendElements(){this.contentContainer.insertAdjacentHTML("beforeend",'<div class="content">\n  <div class="offer-container">\n\n    <h2>Sip, Savor, Smile. \n      <span>It’s coffee time!</span>\n    </h2>\n    <div class="socials-btn-container">\n      <a href="https://www.twitter.com">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n          <path d="M23 3.01006C23 3.01006 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 23 3.01006 23 3.01006Z" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n      </a>\n      <a href="https://www.instagram.com">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n          <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke-linecap="round" stroke-linejoin="round"/>\n          <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"/>\n          <path d="M17.5 6.51L17.51 6.49889" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n      </a>\n      <a href="https://www.facebook.com">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">\n          <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n      </a>\n    </div>\n  </div>\n\n\n  <div class="contact-container">\n    <h3>Contact us</h3>\n\n    <a href="https://maps.app.goo.gl/dmTJZ3w33e8YTzSd6" target=»_blank» >\n      <span class="icon">\n        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n          <path d="M16.6663 8.33329C16.6663 12.0152 9.99967 18.3333 9.99967 18.3333C9.99967 18.3333 3.33301 12.0152 3.33301 8.33329C3.33301 4.65139 6.31778 1.66663 9.99967 1.66663C13.6816 1.66663 16.6663 4.65139 16.6663 8.33329Z" stroke="#E1D4C9" stroke-width="1.5"/>\n          <path d="M10.0003 9.16667C10.4606 9.16667 10.8337 8.79357 10.8337 8.33333C10.8337 7.8731 10.4606 7.5 10.0003 7.5C9.54009 7.5 9.16699 7.8731 9.16699 8.33333C9.16699 8.79357 9.54009 9.16667 10.0003 9.16667Z" fill="#E1D4C9" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n          </svg>\n      </span>\n      <span class="text">8558 Green Rd.,  LA</span>\n    </a>\n\n    <br>\n\n    <a href="tel:+1(603)555-0123">\n      <span class="icon">\n        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n          <path d="M15.0984 12.2516L11.6665 12.9166C9.34845 11.7531 7.91654 10.4166 7.08321 8.33329L7.72483 4.89154L6.51197 1.66663L3.72946 1.66663C2.60191 1.66663 1.71466 2.59958 1.90108 3.71161C2.29888 6.08454 3.37231 10.0391 6.24987 12.9166C9.27338 15.9401 13.5661 17.3318 16.1378 17.9288C17.299 18.1983 18.3332 17.2908 18.3332 16.0988L18.3332 13.4843L15.0984 12.2516Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n      </span>\n      <span class="text">+1 (603) 555-0123</span>\n    </a>\n\n    <br>\n\n    <span class="icon">\n      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">\n        <g clip-path="url(#clip0_217_1736)">\n        <path d="M10 5L10 10L15 10" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6023 18.3337 9.99996C18.3337 5.39759 14.6027 1.66663 10.0003 1.66663C5.39795 1.66663 1.66699 5.39759 1.66699 9.99996C1.66699 14.6023 5.39795 18.3333 10.0003 18.3333Z" stroke="#E1D4C9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </g>\n        <defs>\n        <clipPath id="clip0_217_1736">\n        <rect width="20" height="20" fill="white"/>\n        </clipPath>\n        </defs>\n      </svg>\n    </span>\n\n    <span>\n      <span class="text">Mon-Sat: 9:00 AM – 23:00 PM</span>\n    </span>\n  </div>\n</div>'),this.container.append(this.contentContainer)}},i=e.p+"./assets/img/logo.svg",s=e.p+"./assets/img/coffee-cup.svg",r=(e,t="img")=>{const n=new Image;return n.src=e,n.alt=t,n};class o extends n{constructor(){super("nav"),this.createElements(),this.appendElements()}createElements(){const e=["Favorite coffee","About","Mobile app","Contact us"];this.nList=t({tagName:"ul"}),o.links={names:e,elements:e.map((e=>{const n=t({tagName:"li"}),a=t({tagName:"a",text:e});return a.href=`#${e.replace(" ","-").toLocaleLowerCase()}`,n.append(a),n}))}}appendElements(){o.links.elements.forEach((e=>{this.nList.append(e)})),this.container.append(this.nList)}}const c=o,d=e=>{window.location.hash=e},p={home:"/home",menu:"/menu",favoriteCoffee:"favorite-coffee",about:"about",mobileApp:"mobile-app",contactUs:"contact-us"};class m extends n{constructor(e){super("div","burger-wrapper"),this.links=e.map((e=>e.cloneNode(!0))),this.createComponent()}static open=!1;createComponent(){this.button=t({tagName:"div",className:"burger-btn"}),this.menu=t({tagName:"div",className:"burger"}),this.nList=t({tagName:"ul"}),this.links.forEach((e=>this.nList.append(e))),this.menu.append(this.nList),this.container.append(this.menu)}openBurger(){this.menu.classList.add("burger-active"),this.button.classList.add("burger-btn-active"),m.open=!0}closeBurger(){this.menu.classList.remove("burger-active"),this.button.classList.remove("burger-btn-active"),m.open=!1}getElement(){return{button:this.button,menu:this.container}}}const h=m,l=class extends n{constructor(){super("header"),this.createComponent()}createComponent(){const e=t({tagName:"div",className:"logo-wrap"}),n=t({tagName:"div",className:"menu-btn"}),a=t({tagName:"div",className:"menu-btn-wrap"}),o=t({tagName:"div",className:"menu-img-container"}),m=t({tagName:"p",text:"Menu"});this.nav=(new c).getElement(),this.burger=new h(c.links.elements).getElement(),D.currentPageID===p.home&&n.classList.add("menu-btn-hover"),D.currentPageID===p.menu&&(n.classList.add("menu-btn-active"),e.classList.add("logo-active")),n.onclick=()=>D.currentPageID===p.home&&d(p.menu),e.onclick=()=>D.currentPageID===p.menu&&d(p.home),e.append(r(i,"logo")),o.append(r(s,"cup-logo")),a.append(m),a.append(o),n.append(a),this.contentContainer.append(e),this.contentContainer.append(this.nav),this.contentContainer.append(n),this.contentContainer.append(this.burger.button),this.contentContainer.append(this.burger.menu),this.container.append(this.contentContainer)}},g=class extends n{constructor(e){super("div","choose-category-wrap"),this.prop=e,this.createElements(),this.appendElements()}createElements(){this.input=t({tagName:"input"}),this.input.id=this.prop.id,this.input.type="radio",this.input.name=this.prop.name,this.label=t({tagName:"label",className:"choose-category"}),this.label.htmlFor=this.prop.id,this.icon=t({tagName:"span",text:this.prop.icon}),this.text=t({tagName:"span",text:this.prop.text})}appendElements(){this.container.append(this.input),this.container.append(this.label),this.label.append(this.icon),this.label.append(this.text)}};class u extends n{constructor(){super("div","choose-category-btn-wrap"),this.createElements(),this.appendElements();const e=this.chooseCategoryBTNs[0].firstElementChild;e.checked=!0,u.value=e.id,this.container.onchange=()=>{e.checked=!0}}createElements(){this.chooseCategoryBTNs=[new g({id:"coffee",name:"category",text:"Coffee",icon:"☕"}).getElement(),new g({id:"tea",name:"category",text:"Tea",icon:"🫖"}).getElement(),new g({id:"dessert",name:"category",text:"Dessert",icon:"🍰"}).getElement()]}appendElements(){this.chooseCategoryBTNs.forEach((e=>this.container.append(e)))}}const f=u,w=class extends n{constructor(e){super("div","card-container"),this.product=e,this.createElements(),this.appendElements()}createElements(){this.cardHTML=`\n      <div class="img-wrap">\n      <img src="${this.product.image}" alt="card-image">\n      </div>\n      <div class="text-wrap">\n        <h3>${this.product.name}</h3>\n        <p>${this.product.description}</p>\n      </div>\n      <h3 class="price">$${this.product.price}</h3>\n    `}appendElements(){this.container.insertAdjacentHTML("beforeend",this.cardHTML)}},C=[{name:"Irish coffee",description:"Fragrant black coffee with Jameson Irish whiskey and whipped milk",price:"7.00",category:"coffee",image:e.p+"./assets/img/coffee-1.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Kahlua coffee",description:"Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",price:"7.00",category:"coffee",image:e.p+"./assets/img/coffee-2.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Honey raf",description:"Espresso with frothed milk, cream and aromatic honey",price:"5.50",category:"coffee",image:e.p+"./assets/img/coffee-3.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Ice cappuccino",description:"Cappuccino with soft thick foam in summer version with ice",price:"5.00",category:"coffee",image:e.p+"./assets/img/coffee-4.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Espresso",description:"Classic black coffee",price:"4.50",category:"coffee",image:e.p+"./assets/img/coffee-5.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Latte",description:"Espresso coffee with the addition of steamed milk and dense milk foam",price:"5.50",category:"coffee",image:e.p+"./assets/img/coffee-6.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Latte macchiato",description:"Espresso with frothed milk and chocolate",price:"5.50",category:"coffee",image:e.p+"./assets/img/coffee-7.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Coffee with cognac",description:"Fragrant black coffee with cognac and whipped cream",price:"6.50",category:"coffee",image:e.p+"./assets/img/coffee-8.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Cinnamon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Moroccan",description:"Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",price:"4.50",category:"tea",image:e.p+"./assets/img/tea-1.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Ginger",description:"Original black tea with fresh ginger, lemon and honey",price:"5.00",category:"tea",image:e.p+"./assets/img/tea-2.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Cranberry",description:"Invigorating black tea with cranberry and honey",price:"5.00",category:"tea",image:e.p+"./assets/img/tea-3.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Sea buckthorn",description:"Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",price:"5.50",category:"tea",image:e.p+"./assets/img/tea-4.png",sizes:{s:{size:"200 ml","add-price":"0.00"},m:{size:"300 ml","add-price":"0.50"},l:{size:"400 ml","add-price":"1.00"}},additives:[{name:"Sugar","add-price":"0.50"},{name:"Lemon","add-price":"0.50"},{name:"Syrup","add-price":"0.50"}]},{name:"Marble cheesecake",description:"Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",price:"3.50",category:"dessert",image:e.p+"./assets/img/dessert-1.png",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Red velvet",description:"Layer cake with cream cheese frosting",price:"4.00",category:"dessert",image:e.p+"./assets/img/dessert-2.png",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Cheesecakes",description:"Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",price:"4.50",category:"dessert",image:e.p+"./assets/img/dessert-3.png",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Creme brulee",description:"Delicate creamy dessert in a caramel basket with wild berries",price:"4.00",category:"dessert",image:e.p+"./assets/img/dessert-4.png",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Pancakes",description:"Tender pancakes with strawberry jam and fresh strawberries",price:"4.50",category:"dessert",image:e.p+"./assets/img/dessert-5.png",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Honey cake",description:"Classic honey cake with delicate custard",price:"4.50",category:"dessert",image:e.p+"./assets/img/dessert-6.png",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Chocolate cake",description:"Cake with hot chocolate filling and nuts with dried apricots",price:"5.50",category:"dessert",image:e.p+"./assets/img/dessert-7.png",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]},{name:"Black forest",description:"A combination of thin sponge cake with cherry jam and light chocolate mousse",price:"6.50",category:"dessert",image:e.p+"./assets/img/dessert-8.png",sizes:{s:{size:"50 g","add-price":"0.00"},m:{size:"100 g","add-price":"0.50"},l:{size:"200 g","add-price":"1.00"}},additives:[{name:"Berries","add-price":"0.50"},{name:"Nuts","add-price":"0.50"},{name:"Jam","add-price":"0.50"}]}];class v extends n{constructor(){super("div","products-container"),this.numShowProducts=window.innerWidth<1050?4:8,this.createComponent(),v.elem=this,window.onresize=()=>{window.innerWidth<1050&&this.numShowProducts>4&&(this.numShowProducts=4,this.smoothRender()),window.innerWidth>1050&&this.numShowProducts<8&&(this.numShowProducts=8,this.smoothRender())}}createComponent(){C.filter(((e,t)=>e.category===f.value&&t<this.numShowProducts)).forEach((e=>{this.container.append(new w(e).getElement())}))}smoothRender(){this.container.style.opacity=0,setTimeout((()=>{this.render(),this.container.style=null}),200)}}const b=v,N=class extends n{constructor(){super("main","menu"),this.container.id=p.menu.slice(1),this.createElements(),this.appendElements()}createElements(){this.headline=t({tagName:"h1",text:"Behind each of our cups hides an <span>amazing surprise</span>"}),this.chooseCategoryBtnWrap=t({tagName:"div",className:"choose-category-btn-wrap"}),this.refreshBtn=t({tagName:"div",className:"refresh-btn"})}appendElements(){this.contentContainer.append(this.headline),this.contentContainer.append((new f).getElement()),this.contentContainer.append((new b).getElement()),this.contentContainer.append(this.refreshBtn),this.container.append(this.contentContainer)}},E=e.p+"./assets/img/about-1.png",y=e.p+"./assets/img/about-2.png",x=e.p+"./assets/img/about-3.png",z=e.p+"./assets/img/about-4.png",k=class extends n{constructor(){super("section","about"),this.container.id="about",this.createElements(),this.appendElements()}createElements(){this.pictureElements=[E,x,y,z].map((e=>r(e))),this.firstPicturesBox=t({tagName:"div",className:"first-pictures-box"}),this.secondPicturesBox=t({tagName:"div",className:"second-pictures-box"}),this.headline=t({tagName:"h2",text:"Resource is\n      <span>the perfect and cozy place</span>\n      where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done."}),this.picturesWrap=t({tagName:"div",className:"pictures-wrap"})}appendElements(){this.pictureElements.forEach(((e,n)=>{const a=t({tagName:"div",className:"picture-wrap"});a.append(e),n%2==0?this.firstPicturesBox.append(a):this.secondPicturesBox.append(a)})),this.picturesWrap.append(this.firstPicturesBox),this.picturesWrap.append(this.secondPicturesBox),this.contentContainer.append(this.headline),this.contentContainer.append(this.picturesWrap),this.container.append(this.contentContainer)}},L=class extends n{constructor(){super("section","enjoy"),this.createElements(),this.appendElements(),this.menuBtn.onclick=()=>d(p.menu)}createElements(){this.offerBlock=t({tagName:"div",className:"offerBlock"}),this.headline=t({tagName:"h1",text:"<span>Enjoy</span> premium coffee at our charming cafe"}),this.text=t({tagName:"p",text:"With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage."}),this.menuBtn=t({tagName:"div",className:"menu-btn"}),this.menuBtnText=t({tagName:"p",text:"Menu"}),this.content=t({tagName:"div",className:"content"})}appendElements(){this.menuBtn.append(this.menuBtnText),this.offerBlock.append(this.headline),this.offerBlock.append(this.text),this.offerBlock.append(this.menuBtn),this.content.append(this.offerBlock),this.contentContainer.append(this.content),this.container.append(this.contentContainer)}},B=e.p+"./assets/img/coffee-slider-1.png",S=class extends n{constructor(){super("div","slider-control-container"),this.createElements(),this.appendElements()}createElements(){const e=new Array(3).fill(null);this.activeSlide=0,e.forEach(((e,n)=>{const a=t({tagName:"div",className:"vie-line"});this.activeSlide===n&&a.classList.add("vie-line-active"),this.container.append(a)}))}},P=class extends n{constructor(){super("section","favorite-coffee"),this.container.id="favorite-coffee",this.createElements(),this.appendElements()}createElements(){this.headline=t({tagName:"h2",text:"Choose your <span>favorite</span> coffee"}),this.sliderWrap=t({tagName:"div",className:"slider-wrap"}),this.leftBtn=t({tagName:"button",className:"left-btn"}),this.rightBtn=t({tagName:"button",className:"right-btn"}),this.slideContainer=t({tagName:"div",className:"slider-container"}),this.slideImgWrap=t({tagName:"div",className:"img-wrap"}),this.slideHeadline=t({tagName:"h3",className:"slider-headline",text:"S’mores Frappuccino"}),this.slideDescription=t({tagName:"p",className:"slider-description",text:"This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk."}),this.slidePrice=t({tagName:"span",className:"slider-price",text:"$5.50"})}appendElements(){this.slideImgWrap.append(r(B)),this.slideContainer.append(this.slideImgWrap),this.slideContainer.append(this.slideHeadline),this.slideContainer.append(this.slideDescription),this.slideContainer.append(this.slidePrice),this.sliderWrap.append(this.leftBtn),this.sliderWrap.append(this.slideContainer),this.sliderWrap.append(this.rightBtn),this.contentContainer.append(this.headline),this.contentContainer.append(this.sliderWrap),this.contentContainer.append((new S).getElement()),this.container.append(this.contentContainer)}},M=class extends n{constructor(e,t,n){super("div","app-Store-Btn"),this.createElements(),this.appendElements(),this.logoWrap.innerHTML=e,this.text.innerHTML=t,this.storeText.innerHTML=n}createElements(){this.logoWrap=t({tagName:"div",className:"logo-wrap"}),this.textContainer=t({tagName:"div",className:"text-container"}),this.text=t({tagName:"p"}),this.storeText=t({tagName:"p"})}appendElements(){this.textContainer.append(this.text),this.textContainer.append(this.storeText),this.container.append(this.logoWrap),this.container.append(this.textContainer)}},T=class extends n{constructor(){super("section","mobile-app"),this.container.id="mobile-app",this.createElements(),this.appendElements()}createElements(){this.downloadContainer=t({tagName:"div",className:"download-container"}),this.mobileScreens=t({tagName:"div",className:"mobile-screens"}),this.headline=t({tagName:"h2",text:"<span>Download</span> our apps to start ordering"}),this.offer=t({tagName:"p",className:"offer-text",text:"Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are"}),this.btnContainer=t({tagName:"div",className:"btn-container"})}appendElements(){this.btnContainer.append(new M('<svg width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">\n<g id="icon">\n<g id="Icon">\n<g id="Vector">\n<path d="M26.7073 18.6307C26.6704 14.6324 30.065 12.6872 30.2203 12.5966C28.2977 9.86366 25.3178 9.49026 24.2707 9.46048C21.7679 9.20369 19.3403 10.9206 18.0654 10.9206C16.765 10.9206 14.8017 9.48529 12.6858 9.52747C9.96293 9.56841 7.41566 11.1055 6.0186 13.4923C3.13542 18.359 5.28572 25.5108 8.04802 29.4446C9.42981 31.3712 11.0444 33.5223 13.1578 33.4466C15.2254 33.3635 15.9978 32.1614 18.4929 32.1614C20.9651 32.1614 21.6903 33.4466 23.8457 33.3983C26.0647 33.3635 27.4618 31.463 28.7952 29.519C30.392 27.3108 31.0333 25.1362 31.0588 25.0245C31.0066 25.0071 26.7493 23.4229 26.7073 18.6307Z" />\n<path d="M22.6357 6.87268C23.7477 5.51675 24.5086 3.67205 24.2974 1.80005C22.6879 1.86952 20.675 2.88554 19.5159 4.21169C18.4903 5.38029 17.5742 7.29571 17.8109 9.097C19.6189 9.2285 21.4753 8.20752 22.6357 6.87268Z"/>\n</g>\n</g>\n</g>\n</svg>\n',"Available on the","App Store").getElement()),this.btnContainer.append(new M('<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">\n  <path d="M3.7558 3.20297C3.39335 3.57289 3.18359 4.14884 3.18359 4.89471V31.4994C3.18359 32.2453 3.39335 32.8212 3.7558 33.1911L3.84525 33.2723L19.1359 18.37V18.0181L3.84525 3.11575L3.7558 3.20297Z"/>\n  <path d="M26.0776 23.34L20.9863 18.37V18.0181L26.0837 13.0482L26.1979 13.1128L32.2345 16.4617C33.9573 17.4121 33.9573 18.976 32.2345 19.9324L26.1979 23.2753L26.0776 23.34Z"/>\n  <path d="M25.2733 24.2007L20.0617 19.1195L4.68164 34.1166C5.25384 34.7031 6.18695 34.7737 7.24807 34.1873L25.2733 24.2007Z"/>\n  <path d="M25.2733 12.1876L7.24807 2.20103C6.18695 1.62058 5.25384 1.69125 4.68164 2.27772L20.0617 17.2688L25.2733 12.1876Z"/>\n  </svg>',"Available on","Google Play").getElement()),this.downloadContainer.append(this.headline),this.downloadContainer.append(this.offer),this.downloadContainer.append(this.btnContainer),this.contentContainer.append(this.downloadContainer),this.contentContainer.append(this.mobileScreens),this.container.append(this.contentContainer)}},H=class extends n{constructor(){super("main"),this.container.id=p.home.slice(1),this.appendElements()}appendElements(){this.container.append((new L).getElement()),this.container.append((new P).getElement()),this.container.append((new k).getElement()),this.container.append((new T).getElement())}};class I{constructor(){this.container=document.body,window.location.hash=I.currentPageID}static currentPageID=p.home;pages={home:new H,menu:new N};elem={header:new l,footer:new a};renderPage(e){const{header:t}=this.elem,n=Object.values(this.pages).map((e=>e.getElement())),a=document.getElementById(I.currentPageID.slice(1)),[i,s]=n;n.forEach((e=>{e.style.opacity=0})),e===p.home&&t.getElement().after(i),e===p.menu&&t.getElement().after(s),console.log(a),setTimeout((()=>{n.forEach((e=>{e.style=null})),a&&e!==I.currentPageID&&a.remove(),I.currentPageID=e,this.elem.header.render()}),70)}router(){window.onhashchange=()=>{const e=window.location.hash.slice(1);if(Object.values(p).includes(e))return e===p.home||e===p.menu?this.renderPage(e):void(document.getElementById(e)||(I.currentPageID===p.home?this.renderPage(p.menu):this.renderPage(p.home),document.getElementById(e).scrollIntoView()))}}run(){const{header:e,footer:t}=this.elem;this.container.append(e.getElement()),this.container.append(t.getElement()),this.renderPage(p.home),this.router()}}const D=I;(new D).run()})();
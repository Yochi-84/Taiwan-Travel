(self["webpackChunktravel"]=self["webpackChunktravel"]||[]).push([[64],{6469:function(e,t,n){"use strict";n.d(t,{Z:function(){return He}});var i=n(2119),r=n(6252);const s={class:"home"};function a(e,t,n,i,a,o){const l=(0,r.up)("MainBanner"),c=(0,r.up)("ExploreArea"),u=(0,r.up)("ParticipateArea"),p=(0,r.up)("EnjoyArea"),g=(0,r.up)("SubscribeArea");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r.Wm)(l),(0,r.Wm)(c),(0,r.Wm)(u),(0,r.Wm)(p),(0,r.Wm)(g)])}var o=n(3577);const l=e=>((0,r.dD)("data-v-3e32ebd5"),e=e(),(0,r.Cn)(),e),c={class:"banner"},u=l((()=>(0,r._)("div",{class:"banner-text"},[(0,r._)("p",null,[(0,r.Uk)("遠離日常喧囂"),(0,r._)("br"),(0,r.Uk)("讓旅行豐富你的生活")])],-1))),p={class:"banner-controller"},g=["onClick"];function A(e,t,n,i,s,a){const l=(0,r.up)("SearchInput");return(0,r.wg)(),(0,r.iD)("div",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.pic,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)(["banner-pic",{isShow:i.bannerIndex===t}]),style:(0,o.j5)({backgroundImage:"url("+e.url+")"}),key:e.url},null,6)))),128)),u,(0,r.Wm)(l),(0,r._)("div",p,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.pic,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,o.C_)(["controller-item",{isActive:i.bannerIndex===t}]),key:e.url,onClick:e=>i.bannerChange(t)},null,10,g)))),128))])])}var v=n(2262),d=n(9963),f=n(7772);const m=e=>((0,r.dD)("data-v-5fb8d620"),e=e(),(0,r.Cn)(),e),b={class:"search-bar"},x=m((()=>(0,r._)("img",{class:"search-icon",src:f},null,-1)));function h(e,t,n,i,s,a){return(0,r.wg)(),(0,r.iD)("div",b,[x,(0,r.wy)((0,r._)("input",{class:"search-input",type:"text",placeholder:"想去哪裡？","onUpdate:modelValue":t[0]||(t[0]=e=>i.wannaGo=e),onKeydown:t[1]||(t[1]=(0,d.D2)((0,d.iM)(((...e)=>i.searchSpot&&i.searchSpot(...e)),["exact"]),["enter"]))},null,544),[[d.nr,i.wannaGo,void 0,{trim:!0}]]),(0,r._)("button",{class:"search-btn",onClick:t[2]||(t[2]=(...e)=>i.searchSpot&&i.searchSpot(...e))},"Go")])}var y={setup(){const e=(0,v.iH)("");function t(){const t=e.value;He.push({name:"search",params:{kind:"Attractions",keyword:t}})}return{wannaGo:e,searchSpot:t}}},E=n(3744);const D=(0,E.Z)(y,[["render",h],["__scopeId","data-v-5fb8d620"]]);var C=D,w={name:"MainBanner",components:{SearchInput:C},setup(){const e=e=>n(2846)(`./${e}.png`),t=(0,v.iH)([{title:"",url:e("banner-1")},{title:"",url:e("banner-2")},{title:"",url:e("banner-3")},{title:"",url:e("banner-4")},{title:"",url:e("banner-5")}]),i=(0,v.iH)(0),r=setInterval((()=>{i.value=(i.value+1)%t.value.length}),8e3);function s(e){i.value=e}return{pic:t,bannerIndex:i,interval:r,bannerChange:s}}};const k=(0,E.Z)(w,[["render",A],["__scopeId","data-v-3e32ebd5"]]);var F=k,L=n(130);const N=e=>((0,r.dD)("data-v-5518a410"),e=e(),(0,r.Cn)(),e),P={class:"explore"},j=N((()=>(0,r._)("div",{class:"explore-text"},[(0,r._)("h2",null,"Explore"),(0,r._)("small",null,"探索台灣每個角落"),(0,r._)("p",null," 台灣擁有高山峽谷及四面環海地理特性，因此充滿各種自然景致等待人們發現，而各縣市有其特色文化與在地必嚐美食，無論想要來場山林陶冶身心之旅，抑或體驗歷史人文深度旅行，都能在台灣這片土地上踏尋。 ")],-1))),H={class:"explore-list"},z=["onClick"],q=N((()=>(0,r._)("div",{class:"more-view"},[(0,r._)("span",null,"探索更多景色"),(0,r._)("img",{src:L,alt:""})],-1)));function O(e,t,n,i,s,a){return(0,r.wg)(),(0,r.iD)("div",P,[j,(0,r._)("div",H,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.area,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:e.title,onClick:e=>i.currentArea=t},(0,o.zw)(e.title),9,z)))),128))]),q]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.area[i.currentArea].place,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:e.title,class:"explore-place-item",style:(0,o.j5)({gridArea:"pic"+(t+1)})},[(0,r._)("div",{class:"explore-place-pic",style:(0,o.j5)({backgroundImage:"url("+e.url+")"})},null,4)],4)))),128))])}var S={setup(){const e=e=>n(9284)(`./${e}.png`),t=(0,v.iH)(0),i=(0,v.iH)([{title:"都市文情:北台灣",place:[{title:"台東金剛大道",url:e("Explore-1")},{title:"南投日月潭文武廟",url:e("Explore-2")},{title:"寧夏觀光夜市",url:e("Explore-3")},{title:"南投合歡山",url:e("Explore-4")},{title:"北投圖書館",url:e("Explore-5")},{title:"樹林三角埔頂山步道",url:e("Explore-6")}]},{title:"休閒樂活:中台灣",place:[{title:"台東金剛大道",url:e("Explore-1")},{title:"南投日月潭文武廟",url:e("Explore-2")},{title:"寧夏觀光夜市",url:e("Explore-3")},{title:"南投合歡山",url:e("Explore-4")},{title:"北投圖書館",url:e("Explore-5")},{title:"樹林三角埔頂山步道",url:e("Explore-6")}]},{title:"人情小吃:南台灣",place:[{title:"台東金剛大道",url:e("Explore-1")},{title:"南投日月潭文武廟",url:e("Explore-2")},{title:"寧夏觀光夜市",url:e("Explore-3")},{title:"南投合歡山",url:e("Explore-4")},{title:"北投圖書館",url:e("Explore-5")},{title:"樹林三角埔頂山步道",url:e("Explore-6")}]},{title:"自然生態:東台灣",place:[{title:"台東金剛大道",url:e("Explore-1")},{title:"南投日月潭文武廟",url:e("Explore-2")},{title:"寧夏觀光夜市",url:e("Explore-3")},{title:"南投合歡山",url:e("Explore-4")},{title:"北投圖書館",url:e("Explore-5")},{title:"樹林三角埔頂山步道",url:e("Explore-6")}]},{title:"小島風情:離島地區",place:[{title:"台東金剛大道",url:e("Explore-1")},{title:"南投日月潭文武廟",url:e("Explore-2")},{title:"寧夏觀光夜市",url:e("Explore-3")},{title:"南投合歡山",url:e("Explore-4")},{title:"北投圖書館",url:e("Explore-5")},{title:"樹林三角埔頂山步道",url:e("Explore-6")}]}]);return{currentArea:t,area:i}}};const T=(0,E.Z)(S,[["render",O],["__scopeId","data-v-5518a410"]]);var B=T;const W={class:"participate"},Z=(0,r._)("div",{class:"participate-text"},[(0,r._)("h2",null,"Participate"),(0,r._)("small",null,"體驗當地風情人文"),(0,r._)("p",null," 台灣擁有豐富文俗風情，因地貌多變延伸出豐富的主題活動，邀請你體驗文化的精彩。 ")],-1),_={class:"participate-list"},X=["onClick"],J={class:"participate-mobile-activity"},U=["src"],I={class:"participate-mobile-text"};function V(e,t,n,i,s,a){return(0,r.wg)(),(0,r.iD)("div",W,[Z,(0,r._)("div",_,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.activity,((e,t)=>((0,r.wg)(),(0,r.iD)("li",{key:e.title},[(0,r._)("a",{href:"#",onClick:(0,d.iM)((e=>i.currentActivity=t),["prevent"])},(0,o.zw)(e.title),9,X)])))),128))])]),(0,r._)("div",{class:"participate-pic",style:(0,o.j5)({backgroundImage:"url("+i.activity[i.currentActivity].url+")"})},null,4),(0,r._)("div",J,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.activity,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"participate-mobile-pic",key:e.title},[(0,r._)("img",{src:e.url,alt:""},null,8,U),(0,r._)("div",I,[(0,r._)("p",null,(0,o.zw)(e.title),1)])])))),128))])])}var M={setup(){const e=e=>n(9284)(`./${e}.png`),t=(0,v.iH)(0),i=(0,v.iH)([{title:"一年一度精采盛事",url:e("Participate1")},{title:"追逐自由單車旅程",url:e("Participate2")},{title:"親自踏上山海之旅",url:e("Participate3")},{title:"體驗台灣文化慶典",url:e("Participate4")}]);return{activity:i,currentActivity:t}}};const Q=(0,E.Z)(M,[["render",V]]);var G=Q;const K=e=>((0,r.dD)("data-v-0ccad5e6"),e=e(),(0,r.Cn)(),e),R={class:"enjoy"},Y=K((()=>(0,r._)("div",{class:"enjoy-text"},[(0,r._)("h2",null,"Enjoy"),(0,r._)("small",null,"享受在地獨特風味"),(0,r._)("p",null," 充斥在台灣大街小巷的在地美食，融合當地生活與文化特色，發展出各式各樣風味，從銅板小吃到精緻料理，數不清的美味讓你飽餐一頓。 "),(0,r._)("div",{class:"more-food"},[(0,r._)("span",null,"享受更多美味"),(0,r._)("img",{src:L,alt:""})])],-1))),$={class:"enjoy-pic"},ee={class:"enjoy-pic-item-text"},te={class:"enjoy-pic-item-text"};function ne(e,t,n,i,s,a){return(0,r.wg)(),(0,r.iD)("div",R,[Y,(0,r._)("div",$,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.food,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"enjoy-pic-item",key:e.title,style:(0,o.j5)({backgroundImage:"url("+e.url+")"})},[(0,r._)("div",ee,[(0,r._)("h4",null,(0,o.zw)(e.title),1),(0,r._)("p",null,(0,o.zw)(e.describe),1)])],4)))),128)),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.food,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"enjoy-pic-item",key:e.title,style:(0,o.j5)({backgroundImage:"url("+e.url+")"})},[(0,r._)("div",te,[(0,r._)("h4",null,(0,o.zw)(e.title),1),(0,r._)("p",null,(0,o.zw)(e.describe),1)])],4)))),128))])])}var ie={setup(){const e=e=>n(9284)(`./${e}.png`),t=(0,v.iH)([{title:"祥發海產餐廳",url:e("Enjoy1"),describe:"位面對東石舊漁港，堤防外有一長排竹蚵屋，是每日青蚵嫂集體剖蚵的好所在，所以在祥發用餐，不但可以品嚐美味，還可以欣賞當地人文風景及剝蚵的光景。"},{title:"石碇一粒粽",url:e("Enjoy2"),describe:"粽子主打不油膩、吃了不脹氣，且選用最優質的材料，其中又以桂花粽最為特別，將整朵桂花加入粽子做調味，品嘗粽子的同時也能嚐到桂花香。"},{title:"鄭記香腸",url:e("Enjoy3"),describe:"位於小琉球的老街上，最古早的鄭記琉球香腸老店創立於民國43年，已成為小琉球當地的名產之一。"},{title:"兩支北方麵食館",url:e("Enjoy4"),describe:"專營北方麵食點心，從各式蒸餃、牛肉麵、酸辣麵等風味佳餚，堅持道地美味的執著，從醒麵、桿皮、包餡到成品，每一個環節都是對客戶的尊重與責任。"},{title:"阿妃健康廚房",url:e("Enjoy5"),describe:"每顆水餃從肉餡、使用豐富的蔬菜、調味料的比例、水餃皮的手感與功夫，層層步驟讓水餃能兼具口感與高纖維，也讓營養價值更高。"},{title:"鶴岡紅茶舖",url:e("Enjoy6"),describe:"店內販售花蓮瑞穗有機生態農場所種植的有機茶，坐下品嚐一杯香甜回甘的好茶，可以讓人暫時放掉煩惱，享受純淨的片刻。"},{title:"三家村陽春麵",url:e("Enjoy7"),describe:"餐點上桌前，將佐料瑤舀進碗內，再加入一大早熬製的大骨高湯，最後放進麵條，保持麵體彈性口感不軟爛。"}]);return{food:t}}};const re=(0,E.Z)(ie,[["render",ne],["__scopeId","data-v-0ccad5e6"]]);var se=re,ae=n(119);const oe=e=>((0,r.dD)("data-v-506a269e"),e=e(),(0,r.Cn)(),e),le={class:"subscribe"},ce=oe((()=>(0,r._)("div",{class:"subscribe-pic"},null,-1))),ue={class:"subscribe-text"},pe=oe((()=>(0,r._)("h2",null,"Subscribe",-1))),ge=oe((()=>(0,r._)("small",null,"每個月來場放鬆旅行",-1))),Ae=oe((()=>(0,r._)("p",null,"如果你願意收到每月旅遊資訊，一起感受台灣旅行的美好。",-1))),ve={class:"input-bar"},de=oe((()=>(0,r._)("i",{class:"fa-regular fa-paper-plane"},null,-1))),fe=[de],me={class:"subscribe-popup-window"},be=oe((()=>(0,r._)("img",{src:ae,alt:""},null,-1))),xe=oe((()=>(0,r._)("h4",null,"恭喜成功訂閱!",-1))),he=oe((()=>(0,r._)("p",null,"期待每個月提供你新的旅行靈感",-1))),ye=oe((()=>(0,r._)("i",{class:"fa-solid fa-x"},null,-1))),Ee=[ye];function De(e,t,n,i,s,a){return(0,r.wg)(),(0,r.iD)("div",le,[ce,(0,r._)("div",ue,[pe,ge,Ae,(0,r._)("div",ve,[(0,r.wy)((0,r._)("input",{type:"email",placeholder:"youremail@example.com","onUpdate:modelValue":t[0]||(t[0]=e=>i.mail=e),onKeydown:t[1]||(t[1]=(0,d.D2)((0,d.iM)((e=>i.subscribeSuccess=!0),["exact"]),["enter"]))},null,544),[[d.nr,i.mail,void 0,{trim:!0}]]),(0,r._)("button",{onClick:t[2]||(t[2]=e=>i.subscribeSuccess=!0)},fe)])]),(0,r._)("div",{class:(0,o.C_)(["subscribe-popup",{isShow:i.subscribeSuccess}])},[(0,r._)("div",me,[be,xe,he,(0,r._)("button",{class:"subscribe-popup-close",onClick:t[3]||(t[3]=e=>i.subscribeSuccess=!1)},Ee)])],2)])}var Ce={setup(){const e=(0,v.iH)(""),t=(0,v.iH)(!1);return{mail:e,subscribeSuccess:t}}};const we=(0,E.Z)(Ce,[["render",De],["__scopeId","data-v-506a269e"]]);var ke=we,Fe={name:"HomeView",components:{MainBanner:F,ExploreArea:B,ParticipateArea:G,EnjoyArea:se,SubscribeArea:ke}};const Le=(0,E.Z)(Fe,[["render",a]]);var Ne=Le;const Pe=[{path:"/",name:"home",component:Ne},{path:"/search",name:"search",component:()=>n.e(443).then(n.bind(n,5697))},{path:"/info",name:"info",component:()=>n.e(443).then(n.bind(n,8085))}],je=(0,i.p7)({history:(0,i.PO)("/Taiwan-Travel/dist/"),routes:Pe});var He=je},4239:function(e,t,n){"use strict";var i=n(3907),r=n(9911),s=n(9669),a=n.n(s);t["Z"]=(0,i.MT)({state:{countyUrl:"../CityCountyData.json",headers:{headers:""},zipCode:{},cityCounty:[],initData:[],favoriteList:[],currentPage:1,apiError:!1,loadingStatus:!1},getters:{},mutations:{headers(e){const t="FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF",n="FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF",i=(new Date).toGMTString(),s=new r.Z("SHA-1","TEXT");s.setHMACKey(n,"TEXT"),s.update("x-date: "+i);const a=s.getHMAC("B64"),o='hmac username="'+t+'", algorithm="hmac-sha1", headers="x-date", signature="'+a+'"';e.headers.headers={Authorization:o,"X-Date":i}},tdxUrl(e,t){e.tdxUrl=t},cityData(e,t){e.cityCounty=t},tdxData(e,t){for(const r of t){const t=e.zipCode;if(r.ZipCode)t[r.ZipCode.slice(0,3)]&&(r.CountyName=t[r.ZipCode.slice(0,3)].CountyName,r.AreaName=t[r.ZipCode.slice(0,3)].AreaName);else if(r.Address){const e=/([\u4e00-\u9fa5]+[縣市])\d*(\D+?(市區|鎮區|鎮市|[鄉鎮市區]))*/g,t=/([縣市])/;if(r.Address.match(e)){const n=r.Address.match(e)[0].replace(t,"$1 ").split(" ");n[0]&&(r.CountyName=n[0]),n[1]?r.AreaName=n[1].replace(/\d*/,""):r.AreaName=null}else r.CountyName=null,r.AreaName=null}else r.CountyName=null,r.AreaName=null}const n=Object.keys(t[0]).filter((e=>"ScenicSpotID"===e||"RestaurantID"===e||"ActivityID"===e))[0],i={};if(e.favoriteList.forEach((e=>{i[e.id]=!0})),t.forEach((e=>{i[e[n]]?e.favorite=!0:e.favorite=!1})),t[0].ActivityName){const e=new Date,n=864e5;t.forEach((t=>{const i=(Date.parse(t.StartTime.split("T")[0])-Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))/n,r=(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())-Date.parse(t.EndTime.split("T")[0]))/n;t.timeStatus=i>0?i:i<=0&&r<=0?"In progress":"Over"}))}e.initData=t},apiError(e,t){e.apiError=t},loadingToggle(e,t){e.loadingStatus=t},changePage(e,t){e.currentPage=t},favoriteToggle(e,t){const n=e.initData.filter((e=>e[t.kind+"ID"]===t.id))[0];if(n.favorite){for(let i=0;i<e.favoriteList.length;i++)if(e.favoriteList[i].id===t.id){e.favoriteList.splice(i,1);break}}else e.favoriteList.push(t);n.favorite=!n.favorite,localStorage.favorite=JSON.stringify(e.favoriteList)},loadFavorite(e){localStorage.favorite&&(e.favoriteList=JSON.parse(localStorage.favorite))},getZipCode(e,t){const n={};t.forEach((e=>{e.AreaList.forEach((t=>{n[t.ZipCode]={CountyName:e.CityName,AreaName:t.AreaName}}))})),e.zipCode=n}},actions:{async CountyApi({commit:e}){await a().get(this.state.countyUrl).then((t=>{this.state.zipCode.length||e("getZipCode",t.data),e("cityData",t.data)})).catch((e=>console.log(e)))},async TDXApi({commit:e},t){this.state.apiError&&e("apiError",!1),this.state.headers&&e("headers"),await a().get(t,this.state.headers).then((t=>{e("tdxData",t.data)})).catch((t=>{console.log(t),429===t.response.status&&(this.state.initData=[],e("apiError",!0))}))},scrollToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},modules:{}})},1939:function(e,t,n){"use strict";n.d(t,{Z:function(){return G}});var i=n(6252);function r(e,t,n,r,s,a){const o=(0,i.up)("TopNavbar"),l=(0,i.up)("router-view"),c=(0,i.up)("BottomFooter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o,{onRefresh:r.routerRefresh},null,8,["onRefresh"]),r.routerAlive?((0,i.wg)(),(0,i.j4)(l,{key:0})):(0,i.kq)("",!0),(0,i.Wm)(c)],64)}var s=n(3577),a=n(9963),o=n(7772),l=n(4827),c=n(3603);const u={class:"navbar"},p={class:"nav-block"},g={class:"nav-menu-btn"},A=(0,i._)("li",{class:"btn-line"},null,-1),v={class:"input-bar"},d=(0,i._)("img",{class:"search-icon",src:o},null,-1),f={class:"side-nav"},m={class:"side-nav-list"},b=["onClick"],x={class:"other-list"},h=(0,i._)("img",{src:l,alt:"我的收藏"},null,-1),y=(0,i._)("span",null,"喜好清單",-1),E=[h,y],D=(0,i._)("img",{src:c,alt:"常見問題"},null,-1),C=(0,i._)("span",null,"常見問答",-1),w=[D,C],k={class:"nav-list"},F=["onMouseover","onClick"],L={key:0,class:"sub-nav"},N={class:"sub-nav-list"},P=["onClick"],j=["src"],H=(0,i._)("div",{class:"nav-btn"},[(0,i._)("img",{src:l,alt:"我的收藏",title:"我的收藏"}),(0,i._)("img",{src:c,alt:"常見問題",title:"常見問題"})],-1);function z(e,t,n,r,o,l){return(0,i.wg)(),(0,i.iD)("div",u,[(0,i._)("div",p,[(0,i._)("div",g,[(0,i._)("ul",{class:(0,s.C_)(["menu-btn",{isOpen:r.menuOpen}]),onClick:t[5]||(t[5]=e=>r.menuOpen=!r.menuOpen)},[A,(0,i._)("div",{class:"side-menu",onClick:t[4]||(t[4]=(0,a.iM)((()=>{}),["stop"]))},[(0,i._)("div",v,[d,(0,i.wy)((0,i._)("input",{class:"search-input",type:"text",placeholder:"想去哪裡？","onUpdate:modelValue":t[0]||(t[0]=e=>r.wannaGo=e),onKeydown:t[1]||(t[1]=(0,a.D2)((0,a.iM)(((...t)=>e.searchView&&e.searchView(...t)),["exact"]),["enter"]))},null,544),[[a.nr,r.wannaGo,void 0,{trim:!0}]])]),(0,i._)("div",f,[(0,i._)("ul",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.navItem,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e.title,class:"side-nav-item",onClick:t=>{r.goPath(e.en),r.menuOpen=!r.menuOpen}},[(0,i._)("span",null,(0,s.zw)(e.title),1),(0,i._)("span",null,(0,s.zw)(e.en.toUpperCase()),1)],8,b)))),128))])]),(0,i._)("div",x,[(0,i._)("div",{class:"other-list-item",onClick:t[2]||(t[2]=e=>{r.goPath("/search"),r.menuOpen=!r.menuOpen})},E),(0,i._)("div",{class:"other-list-item",onClick:t[3]||(t[3]=e=>{r.goPath("/search"),r.menuOpen=!r.menuOpen})},w)])])],2)]),(0,i._)("h1",{id:"logo",onClick:t[6]||(t[6]=e=>r.router.push("/"))},"Logo"),(0,i._)("ul",k,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.navItem,((e,n)=>((0,i.wg)(),(0,i.iD)("li",{class:(0,s.C_)(["nav-item",{isHover:n===r.hoverIndex}]),key:e.title,onMouseover:e=>r.hoverIndex=n,onMouseleave:t[7]||(t[7]=e=>r.hoverIndex=null),onClick:t=>r.goPath(e.en)},[(0,i._)("span",null,(0,s.zw)(e.title),1),(0,i._)("span",null,(0,s.zw)(e.en.toUpperCase()),1),null!==r.hoverIndex?((0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("ul",N,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.navItem[r.hoverIndex].sub_nav,((t,n)=>((0,i.wg)(),(0,i.iD)("li",{key:t.title,class:"sub-nav-item",onClick:(0,a.iM)((t=>r.goNavPath(e.en,n)),["stop"])},[(0,i._)("img",{src:t.icon,alt:""},null,8,j),(0,i._)("span",null,(0,s.zw)(t.title),1)],8,P)))),128))])])):(0,i.kq)("",!0)],42,F)))),128))]),H])])}var q=n(2262),O=n(6469),S={emit:["refresh"],setup(e,{emit:t}){const i=e=>n(860)(`./${e}.svg`),r=(0,q.iH)(null),s=(0,q.iH)(!1),a=(0,q.iH)([{title:"找景點",en:"Attractions",sub_nav:[{title:"北台灣",icon:i("north")},{title:"中台灣",icon:i("central")},{title:"南台灣",icon:i("south")},{title:"東台灣",icon:i("east")},{title:"離島地區",icon:i("outlying")}]},{title:"找美食",en:"Delicacy",sub_nav:[{title:"飽餐一頓",icon:i("meal")},{title:"清涼消暑",icon:i("drink")},{title:"在地美味",icon:i("snack")},{title:"特色名產",icon:i("souvenir")}]},{title:"找活動",en:"Activity",sub_nav:[{title:"藝文展演",icon:i("show")},{title:"戶外露營",icon:i("camping")},{title:"親近山海",icon:i("outdoor")},{title:"年度慶典",icon:i("celebration")}]},{title:"探索更多",en:"More",sub_nav:[{title:"親子同遊",icon:i("family")},{title:"溫泉之旅",icon:i("spa")},{title:"花花世界",icon:i("flower")},{title:"文化歷史",icon:i("culture")}]}]),o=(0,q.iH)("");function l(e){const n=e;t("refresh"),O.Z.push({name:"search",params:{kind:n}})}function c(e,n){const i=e,r=n;t("refresh"),O.Z.push({name:"search",params:{kind:i,index:r}})}return{router:O.Z,hoverIndex:r,menuOpen:s,navItem:a,wannaGo:o,goPath:l,goNavPath:c}}},T=n(3744);const B=(0,T.Z)(S,[["render",z]]);var W=B;const Z={class:"footer"},_=(0,i.uE)('<div class="follow-us"><span>Follow us</span><span><a href="#"><i class="fa-brands fa-facebook-f"></i></a></span><span><a href="#"><i class="fa-brands fa-instagram"></i></a></span><span><a href="#"><i class="fa-brands fa-youtube"></i></a></span></div><div class="copyright"><p>Copyright ©Mow | Design by Lola_Lin</p></div>',2),X={class:"language"};function J(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",Z,[_,(0,i._)("div",X,[(0,i._)("span",{class:(0,s.C_)({isActive:"CH"===r.currentLanguage}),onClick:t[0]||(t[0]=e=>r.currentLanguage="CH")},"CH",2),(0,i._)("span",{class:(0,s.C_)({isActive:"EN"===r.currentLanguage}),onClick:t[1]||(t[1]=e=>r.currentLanguage="EN")},"EN",2),(0,i._)("span",{class:(0,s.C_)({isActive:"JP"===r.currentLanguage}),onClick:t[2]||(t[2]=e=>r.currentLanguage="JP")},"JP",2)])])}var U={setup(){const e=(0,q.iH)("CH");return{currentLanguage:e}}};const I=(0,T.Z)(U,[["render",J]]);var V=I,M={components:{TopNavbar:W,BottomFooter:V},setup(){const e=(0,q.iH)(!0);function t(){e.value=!1,setTimeout((()=>{e.value=!0}),4)}return{routerAlive:e,routerRefresh:t}}};const Q=(0,T.Z)(M,[["render",r]]);var G=Q},2846:function(e,t,n){var i={"./banner-1.png":9657,"./banner-2.png":1210,"./banner-3.png":8204,"./banner-4.png":4648,"./banner-5.png":5025};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id=2846},860:function(e,t,n){var i={"./annual.svg":6326,"./bycircle.svg":7122,"./camping.svg":3093,"./celebration.svg":4328,"./central.svg":8138,"./close.svg":7410,"./culture.svg":426,"./drink.svg":4134,"./east.svg":7690,"./family.svg":1338,"./faq.svg":7533,"./faq/filled.svg":2470,"./faq/outline.svg":3603,"./flower.svg":4025,"./heart.svg":3346,"./heart/filled.svg":2028,"./heart/outline.svg":4827,"./ice-cream.svg":530,"./logo.svg":101,"./meal.svg":5548,"./north.svg":6123,"./open.svg":3729,"./outdoor.svg":3437,"./outlying.svg":9982,"./show.svg":6834,"./snack.svg":423,"./south.svg":6963,"./souvenir.svg":2643,"./spa.svg":5787};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id=860},9284:function(e,t,n){var i={"./Enjoy1.png":5977,"./Enjoy2.png":8094,"./Enjoy3.png":6657,"./Enjoy4.png":1458,"./Enjoy5.png":5424,"./Enjoy6.png":2091,"./Enjoy7.png":6234,"./Explore-1.png":8601,"./Explore-2.png":6825,"./Explore-3.png":4896,"./Explore-4.png":8785,"./Explore-5.png":8777,"./Explore-6.png":288,"./Explore-7.png":4314,"./Participate1.png":8329,"./Participate2.png":2289,"./Participate3.png":9750,"./Participate4.png":1137,"./subscribe.png":2515};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=s,e.exports=r,r.id=9284},130:function(e,t,n){"use strict";e.exports=n.p+"img/arrow.3651c66a.svg"},7772:function(e,t,n){"use strict";e.exports=n.p+"img/search.36b002aa.svg"},6326:function(e,t,n){"use strict";e.exports=n.p+"img/annual.8207be8c.svg"},7122:function(e,t,n){"use strict";e.exports=n.p+"img/bycircle.6e2ed30b.svg"},3093:function(e,t,n){"use strict";e.exports=n.p+"img/camping.027ac9ee.svg"},4328:function(e,t,n){"use strict";e.exports=n.p+"img/celebration.f45b413f.svg"},8138:function(e,t,n){"use strict";e.exports=n.p+"img/central.c3ed6c01.svg"},7410:function(e,t,n){"use strict";e.exports=n.p+"img/close.685d90d0.svg"},426:function(e,t,n){"use strict";e.exports=n.p+"img/culture.16813a39.svg"},4134:function(e,t,n){"use strict";e.exports=n.p+"img/drink.c1cd1498.svg"},7690:function(e,t,n){"use strict";e.exports=n.p+"img/east.207bb6d5.svg"},1338:function(e,t,n){"use strict";e.exports=n.p+"img/family.d43ea6a9.svg"},7533:function(e,t,n){"use strict";e.exports=n.p+"img/faq.c6756e72.svg"},2470:function(e,t,n){"use strict";e.exports=n.p+"img/filled.71162750.svg"},3603:function(e,t,n){"use strict";e.exports=n.p+"img/outline.c5a743f6.svg"},4025:function(e,t,n){"use strict";e.exports=n.p+"img/flower.eb7fbad8.svg"},3346:function(e,t,n){"use strict";e.exports=n.p+"img/heart.04255ba3.svg"},2028:function(e,t,n){"use strict";e.exports=n.p+"img/filled.b56f7cc5.svg"},4827:function(e,t,n){"use strict";e.exports=n.p+"img/outline.977b5266.svg"},530:function(e,t,n){"use strict";e.exports=n.p+"img/ice-cream.fcc5fe37.svg"},101:function(e,t,n){"use strict";e.exports=n.p+"img/logo.56e4d231.svg"},5548:function(e,t,n){"use strict";e.exports=n.p+"img/meal.a7098b3e.svg"},6123:function(e,t,n){"use strict";e.exports=n.p+"img/north.debd0e0e.svg"},3729:function(e,t,n){"use strict";e.exports=n.p+"img/open.2da1a6c0.svg"},3437:function(e,t,n){"use strict";e.exports=n.p+"img/outdoor.1dab4a8d.svg"},9982:function(e,t,n){"use strict";e.exports=n.p+"img/outlying.51ac2f42.svg"},6834:function(e,t,n){"use strict";e.exports=n.p+"img/show.3d916a83.svg"},423:function(e,t,n){"use strict";e.exports=n.p+"img/snack.ef7496a9.svg"},6963:function(e,t,n){"use strict";e.exports=n.p+"img/south.b25563cf.svg"},2643:function(e,t,n){"use strict";e.exports=n.p+"img/souvenir.7d4ff94b.svg"},5787:function(e,t,n){"use strict";e.exports=n.p+"img/spa.3eaaa51b.svg"},9657:function(e,t,n){"use strict";e.exports=n.p+"img/banner-1.8f04d36d.png"},1210:function(e,t,n){"use strict";e.exports=n.p+"img/banner-2.88242733.png"},8204:function(e,t,n){"use strict";e.exports=n.p+"img/banner-3.4a01f839.png"},4648:function(e,t,n){"use strict";e.exports=n.p+"img/banner-4.4190fe74.png"},5025:function(e,t,n){"use strict";e.exports=n.p+"img/banner-5.adb22dab.png"},119:function(e){"use strict";e.exports="data:image/png;base64,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"},5977:function(e,t,n){"use strict";e.exports=n.p+"img/Enjoy1.b73f632c.png"},8094:function(e,t,n){"use strict";e.exports=n.p+"img/Enjoy2.be0032f3.png"},6657:function(e,t,n){"use strict";e.exports=n.p+"img/Enjoy3.3ec387fa.png"},1458:function(e,t,n){"use strict";e.exports=n.p+"img/Enjoy4.f43365d2.png"},5424:function(e,t,n){"use strict";e.exports=n.p+"img/Enjoy5.4930ff68.png"},2091:function(e,t,n){"use strict";e.exports=n.p+"img/Enjoy6.7bac9772.png"},6234:function(e,t,n){"use strict";e.exports=n.p+"img/Enjoy7.11fd60c4.png"},8601:function(e,t,n){"use strict";e.exports=n.p+"img/Explore-1.207d9008.png"},6825:function(e,t,n){"use strict";e.exports=n.p+"img/Explore-2.cd95eb63.png"},4896:function(e,t,n){"use strict";e.exports=n.p+"img/Explore-3.3235877e.png"},8785:function(e,t,n){"use strict";e.exports=n.p+"img/Explore-4.b6120571.png"},8777:function(e,t,n){"use strict";e.exports=n.p+"img/Explore-5.dab6c72e.png"},288:function(e,t,n){"use strict";e.exports=n.p+"img/Explore-6.47c8aaba.png"},4314:function(e,t,n){"use strict";e.exports=n.p+"img/Explore-7.caa475eb.png"},8329:function(e,t,n){"use strict";e.exports=n.p+"img/Participate1.46572b55.png"},2289:function(e,t,n){"use strict";e.exports=n.p+"img/Participate2.6d819051.png"},9750:function(e,t,n){"use strict";e.exports=n.p+"img/Participate3.611e2663.png"},1137:function(e,t,n){"use strict";e.exports=n.p+"img/Participate4.69d88549.png"},2515:function(e,t,n){"use strict";e.exports=n.p+"img/subscribe.bb8636df.png"}}]);
//# sourceMappingURL=chunk-common.d2639941.js.map
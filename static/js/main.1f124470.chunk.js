(this.webpackJsonpsmart_garden_web=this.webpackJsonpsmart_garden_web||[]).push([[0],{11:function(e,t,n){e.exports={logo:"Nav_logo__1YG7V",navLinks:"Nav_navLinks__32f0V",open:"Nav_open__1aekA"}},15:function(e,t,n){e.exports={burger:"BurgerIcon_burger__10Hd2",toggle:"BurgerIcon_toggle__krKts",line1:"BurgerIcon_line1__2I0Oe",line2:"BurgerIcon_line2__26P_I",line3:"BurgerIcon_line3__11J8v"}},16:function(e,t,n){e.exports={about:"About_about__32NA8",introduction:"About_introduction__3rrRQ",server:"About_server__2TBIp",peripherals:"About_peripherals__319G0",webApp:"About_webApp__2Axfo"}},17:function(e,t,n){e.exports={homepage:"Login_homepage__1UY5l",container:"Login_container__1PmnF","form-login":"Login_form-login__3ULuK","form-input":"Login_form-input__32RYi","form-button":"Login_form-button__2I4iw"}},21:function(e,t,n){e.exports={contact:"Contact_contact__1j8xs",tooltip:"Contact_tooltip__KIXCv",tooltiptext:"Contact_tooltiptext__37BxN",email:"Contact_email__3DW2t"}},23:function(e,t,n){e.exports={"weather-button":"Weather_weather-button__3Ovu5","weather-container":"Weather_weather-container__MS1pH","weather-info":"Weather_weather-info__1chw9"}},43:function(e,t,n){},44:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(37),a=n.n(s),o=(n(43),n(44),n(9)),i=n.n(o),l=n(13),j=n(7),u=n(12),b=n(19),h=n.n(b),d=n(0),p=Object(r.createContext)(),O=h.a.create({baseURL:"https://smartgarden.ddns.net/php-login-registration-api/"});var x=function(e){var t=Object(r.useState)({isAuth:!1,theUser:null}),n=Object(u.a)(t,2),c=n[0],s=n[1],a=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.post("login.php",{user:t.login,pass:t.password});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("loginToken"))){e.next=8;break}return O.defaults.headers.common.Authorization="Bearer "+t,e.next=5,O.get("user-info.php");case 5:n=e.sent,(r=n.data).success&&r.user&&s(Object(j.a)(Object(j.a)({},c),{},{isAuth:!0,theUser:r.user}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b={rootState:c,setState:s,isLoggedIn:o,loginUser:a,logoutUser:function(){localStorage.removeItem("loginToken"),s(Object(j.a)(Object(j.a)({},c),{},{isAuth:!1}))}};return Object(d.jsx)(p.Provider,{value:b,children:e.children})},g=n(10),m=n(2),f=n(11),v=n.n(f),_=n(20),w=n.n(_),k=n(15),N=n.n(k);var y=function(e){var t=e.menuToggle,n=e.setMenuToggle;return Object(d.jsxs)("div",{className:t?w()(N.a.burger,N.a.toggle):N.a.burger,onClick:function(){n(!t)},children:[Object(d.jsx)("div",{className:N.a.line1}),Object(d.jsx)("div",{className:N.a.line2}),Object(d.jsx)("div",{className:N.a.line3})]})};var C=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],s={color:"#ffffff",textDecoration:"none",fontSize:"22px"},a=Object(r.useContext)(p),o=a.rootState,i=a.logoutUser;return o.isAuth?Object(d.jsxs)("nav",{children:[Object(d.jsx)("div",{className:v.a.logo}),Object(d.jsxs)("ul",{className:n?w()(v.a.open,v.a.navLinks):v.a.navLinks,children:[Object(d.jsx)(g.b,{style:s,to:"/weather",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"Pogoda"})}),Object(d.jsx)(g.b,{style:s,to:"/about",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"O stronie"})}),Object(d.jsx)(g.b,{style:s,to:"/contact",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"Kontakt"})}),Object(d.jsx)(g.b,{style:s,to:"/",children:Object(d.jsx)("li",{onClick:function(){i(),c(!n)},children:"Wyloguj"})})]}),Object(d.jsx)(y,{menuToggle:n,setMenuToggle:c})]}):Object(d.jsxs)("nav",{children:[Object(d.jsx)("div",{className:v.a.logo}),Object(d.jsxs)("ul",{className:n?w()(v.a.open,v.a.navLinks):v.a.navLinks,children:[Object(d.jsx)(g.b,{style:s,to:"/about",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"O stronie"})}),Object(d.jsx)(g.b,{style:s,to:"/contact",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"Kontakt"})}),Object(d.jsx)(g.b,{style:s,to:"/login",children:Object(d.jsx)("li",{onClick:function(){return c(!n)},children:"Zaloguj"})})]}),Object(d.jsx)(y,{menuToggle:n,setMenuToggle:c})]})},I=n(16),A=n.n(I),T=n.p+"static/media/system_diagram.3758ff24.png";var L=function(){return Object(d.jsxs)("div",{className:A.a.about,children:[Object(d.jsxs)("div",{className:A.a.introduction,children:[Object(d.jsx)("h1",{children:"General concept"}),Object(d.jsx)("br",{}),Object(d.jsx)("img",{src:T}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"This project is based on Raspberry Pi Zero WH 512\xa0MB RAM - Wi-Fi + BT 4.1. There is a server, website and stm32 handler (weather station, valve controller, led controller). Through the website users can control lighting, garden sprinklers and receive weather information. Connections between Raspberry Pi and STM are established via Bluetooth."})]}),Object(d.jsxs)("div",{className:A.a.server,children:[Object(d.jsx)("h1",{children:"Pilothouse"}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"Pilothouse is the part of the system where requests from the website to the periphery and information from the periphery to the website are processed"})]}),Object(d.jsxs)("div",{className:A.a.peripherals,children:[Object(d.jsx)("h1",{children:"Peripherals"}),Object(d.jsx)("br",{}),Object(d.jsx)("li",{children:"Weather station"}),Object(d.jsx)("li",{children:"Valve controller"}),Object(d.jsx)("li",{children:"Led controller"})]}),Object(d.jsxs)("div",{className:A.a.webApp,children:[Object(d.jsx)("h1",{children:"WebApp"}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"The website ensures safe management of the system - logging in is required. The user can display the weather, turn on the light and control the solenoid valves."})]})]})},S=n(23),M=n.n(S);var W=function(){var e=Object(r.useState)({Temperatura:0,Wilgotnosc:0,Opady:0,Jasnosc:0}),t=Object(u.a)(e,2),n=t[0],c=t[1],s=function(){var e=Object(l.a)(i.a.mark((function e(){var t,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=localStorage.getItem("loginToken"))){e.next=8;break}return h.a.defaults.headers.Authorization="Bearer "+t,e.next=5,h.a.get("https://smartgarden.ddns.net/php-login-registration-api/weather-info.php");case 5:r=e.sent,s=r.data,c(s);case 8:console.log(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:M.a["weather-container"],children:[Object(d.jsx)("br",{}),Object(d.jsx)("h1",{children:"Weather"}),Object(d.jsx)("button",{className:M.a["weather-button"],onClick:s,children:"Pobierz pogod\u0119"}),Object(d.jsxs)("ul",{className:M.a["weather-info"],children:[Object(d.jsxs)("li",{children:["Temperatura: ",n.Temperatura]}),Object(d.jsxs)("li",{children:["Wilgotnosc: ",n.Wilgotnosc]}),Object(d.jsxs)("li",{children:["Opady: ",n.Opady]}),Object(d.jsxs)("li",{children:["Jasnosc: ",n.Jasnosc]})]})]})},B=n(21),P=n.n(B);var R=function(){var e=Object(r.useRef)(null);return Object(d.jsxs)("div",{className:P.a.contact,children:[Object(d.jsx)("br",{}),Object(d.jsx)("h1",{children:"Kontakt"}),Object(d.jsxs)("div",{className:P.a.tooltip,children:[Object(d.jsx)("h1",{className:P.a.email,onClick:function(){return function(e){var t=document.createRange();t.selectNodeContents(e.current),console.log(t);var n=window.getSelection();n.removeAllRanges(),n.addRange(t),document.execCommand("Copy"),n.removeAllRanges()}(e)},ref:e,children:"smart.garden.home@gmail.com"}),Object(d.jsx)("span",{className:P.a.tooltiptext,children:"Click to copy"})]})]})},U=n(22),F=n(17),J=n.n(F);var K=function(){var e=Object(r.useContext)(p),t=e.loginUser,n=e.isLoggedIn,c={userInfo:{login:"",password:""},errorMsg:"",successMsg:""},s=Object(r.useState)(c),a=Object(u.a)(s,2),o=a[0],b=a[1],h=function(e){b(Object(j.a)(Object(j.a)({},o),{},{userInfo:Object(j.a)(Object(j.a)({},o.userInfo),{},Object(U.a)({},e.target.name,e.target.value))}))},O=function(){var e=Object(l.a)(i.a.mark((function e(r){var s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.next=3,t(o.userInfo);case 3:if(!(s=e.sent).success||!s.token){e.next=11;break}return b(Object(j.a)({},c)),localStorage.setItem("loginToken",s.token),e.next=9,n();case 9:e.next=12;break;case 11:b(Object(j.a)(Object(j.a)({},o),{},{successMsg:"",errorMsg:s.message}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:J.a.homepage,children:Object(d.jsxs)("div",{id:"panel",className:J.a["form-login"],children:[Object(d.jsx)("br",{}),Object(d.jsx)("h1",{children:"Logowanie"}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:O,noValidate:!0,children:[Object(d.jsx)("div",{children:Object(d.jsx)("input",{className:J.a["form-input"],id:"username",name:"login",type:"text",required:!0,placeholder:"Wprowad\u017a login",value:o.userInfo.login,onChange:h})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{className:J.a["form-input"],id:"password",name:"password",type:"password",required:!0,placeholder:"Wprowad\u017a has\u0142o",value:o.userInfo.password,onChange:h})}),o.errorMsg&&Object(d.jsx)("div",{children:o.errorMsg}),o.successMsg&&Object(d.jsx)("div",{children:o.successMsg}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:J.a["form-button"],type:"submit",children:"Zaloguj si\u0119"})})]})]})})};var q=function(){var e=Object(r.useContext)(p),t=e.rootState,n=e.isLoggedIn,c=t.isAuth;return Object(r.useEffect)((function(){n()}),[]),console.log(c),c?Object(d.jsx)("div",{children:Object(d.jsx)(g.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(C,{}),Object(d.jsx)("div",{className:"main",children:Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/",exact:!0,component:W}),Object(d.jsx)(m.a,{path:"/weather",component:W}),Object(d.jsx)(m.a,{path:"/about",component:L}),Object(d.jsx)(m.a,{path:"/contact",component:R}),Object(d.jsx)(m.a,{path:"/*",component:W})]})})]})})}):Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(g.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(C,{}),Object(d.jsx)("div",{className:"main",children:Object(d.jsxs)(m.c,{children:[Object(d.jsx)(m.a,{path:"/",exact:!0,component:K}),Object(d.jsx)(m.a,{path:"/about",component:L}),Object(d.jsx)(m.a,{path:"/contact",component:R}),Object(d.jsx)(m.a,{path:"/login",component:K}),Object(d.jsx)(m.a,{path:"/*",component:K})]})})]})})})};var z=function(){return Object(d.jsx)(x,{children:Object(d.jsx)(q,{})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),D()}},[[70,1,2]]]);
//# sourceMappingURL=main.1f124470.chunk.js.map
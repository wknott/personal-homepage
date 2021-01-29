(this["webpackJsonppersonal-homepage"]=this["webpackJsonppersonal-homepage"]||[]).push([[0],{23:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t(3),o=t.n(i),a=t(11),c=t.n(a),u=t(4),p=t(1),x={mobileMax:767,iPad:1023,desktopHD:1366},d={color:{mainBlue:"#0366D6",mainBlueFilter:"invert(24%) sepia(78%) saturate(5471%) hue-rotate(203deg) brightness(95%) contrast(98%)",blueShadow:"#8CC2FF",body:"#FBFBFE",text:"#252525",textFilter:"unset",secondaryText:"#6E7E91",toggleBorder:"#FFFFFF",background:"#6E7E91",white:"#FFFFFF",buttonBackground:"#E5E5E5",sectionBackground:"#FFFFFF",divider:"rgba(209, 213, 218, 0.3)",tileActiveBorder:"rgba(3, 102, 214, 0.2)",projectTitle:"#0366D6",linkUnderline:"rgb(3, 102, 214, 0.2)",linkUnderlineHover:"rgb(3, 102, 214, 0.8)"},breakpoint:x},h={color:{mainBlue:"#2188FF",mainBlueFilter:"invert(47%) sepia(58%) saturate(4738%) hue-rotate(198deg) brightness(102%) contrast(101%)",blueShadow:"#6D93BE",body:"#252525",text:"#FFFFFF",textFilter:"invert(100%) sepia(0%) saturate(0%) hue-rotate(103deg) brightness(106%) contrast(101%)",secondaryText:"#FFFFFF",toggleBorder:"#FFFFFF",background:"#363537",white:"#FFFFFF",buttonBackground:"rgba(54, 54, 54, 0.72)",sectionBackground:"rgba(54, 54, 54, 0.72)",divider:"rgba(209, 213, 218, 0.1)",tileActiveBorder:"rgba(3, 102, 214, 0.5)",projectTitle:"#FFFFFF",linkUnderline:"rgb(33, 136, 255, 0.4)",linkUnderlineHover:"rgb(33, 136, 255, 0.8)"},breakpoint:x},l=t(2);function m(){var n=Object(l.a)(["\n  html {\n    box-sizing: border-box;\n  }\n\n  *, ::after, ::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: 'Inter', sans-serif;\n    letter-spacing: 0.05em;\n  }\n"]);return m=function(){return n},n}var s=Object(p.c)(m()),b=function(){var n=Object(i.useState)(localStorage.getItem("theme")||"light"),e=Object(u.a)(n,2),t=e[0],r=e[1];return[t,function(){var n;n="light"===t?"dark":"light",localStorage.setItem("theme",n),r(n)}]};function f(){var n=Object(l.a)(["\n  grid-area: image;\n  width: 384px;\n  height: 384px;\n  border-radius: 50%;\n  background-color: ",";\n  transition: background-color 0.5s linear; \n  margin-right: 64px;\n\n  @media(max-width: ","px) {\n    width: 256px;\n    height: 256px;\n    margin-right: 48px;\n  };\n\n  @media(max-width: ","px) {\n    width: 128px;\n    height: 128px;\n    margin-bottom: 16px;\n    margin-top: 13px;\n  };\n"]);return f=function(){return n},n}var g=p.e.img(f(),(function(n){return n.theme.color.background}),(function(n){return n.theme.breakpoint.iPad}),(function(n){return n.theme.breakpoint.mobileMax}));function j(){var n=Object(l.a)(["\n  width: 24px;\n  height: auto;\n  margin-right: 16px;\n\n  @media(max-width: ","px) {\n    width: 20px;\n    margin-right: 12px;\n  };\n"]);return j=function(){return n},n}function w(){var n=Object(l.a)(["\n  font-size: 20px;\n  line-height: 1.4;\n  color: ",";\n  margin-top: 0;\n  margin-bottom: 32px;\n\n  @media(max-width: ","px) {\n    font-size: 17px;\n    margin-bottom: 24px;\n  };\n"]);return w=function(){return n},n}function O(){var n=Object(l.a)(["\n  font-weight: 900;\n  font-size: 38px;\n  line-height: 1.21;\n  margin-top: 0;\n  margin-bottom: 36px;\n\n  @media(max-width: ","px) {\n    font-size: 22px;\n    line-height: 1.23;\n    margin-bottom: 16px;\n  };\n"]);return O=function(){return n},n}function v(){var n=Object(l.a)(["\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 1.3;\n  text-transform: uppercase;\n  color: ",";\n  margin-top: 0;\n\n  @media(max-width: ","px) {\n    margin-bottom: 8px;\n  };\n"]);return v=function(){return n},n}function k(){var n=Object(l.a)(["\n  grid-area: info;\n  padding-right: 128px;\n\n  @media(max-width: ","px) {\n    padding-right: 0;\n  };\n"]);return k=function(){return n},n}var F=p.e.div(k(),(function(n){return n.theme.breakpoint.iPad})),y=p.e.p(v(),(function(n){return n.theme.color.secondaryText}),(function(n){return n.theme.breakpoint.mobileMax})),M=p.e.h1(O(),(function(n){return n.theme.breakpoint.mobileMax})),z=p.e.p(w(),(function(n){return n.theme.color.secondaryText}),(function(n){return n.theme.breakpoint.mobileMax})),B=p.e.img(j(),(function(n){return n.theme.breakpoint.mobileMax}));function S(){var n=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 12px 16px;\n  font-weight: 600;\n  font-size: 20.0584px;\n  line-height: 1.2;\n  border: 1px solid rgba(209, 213, 218, 0.3);\n  border-radius: 4px;\n  cursor: pointer; \n  width: max-content;\n  text-decoration: none;\n  transition: 0.3s linear;\n  \n  &:hover{\n    box-shadow: \n    2px -2px 0px ",", \n    -2px 2px 0px",", \n    2px 2px 0px ",", \n    -2px -2px 0px ",";\n  }\n\n  &:focus{\n    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);\n    outline: none;\n  }\n\n  @media(max-width: ","px) {\n    font-size: 18px;\n    line-height: 1.22;\n  };\n"]);return S=function(){return n},n}var T=p.e.a(S(),(function(n){return n.theme.color.mainBlue}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.blueShadow}),(function(n){return n.theme.color.blueShadow}),(function(n){return n.theme.color.blueShadow}),(function(n){return n.theme.color.blueShadow}),(function(n){return n.theme.breakpoint.mobileMax})),E=t.p+"static/media/message.bec00aed.svg",P=t.p+"static/media/Github_black.09abe07d.svg",C=t.p+"static/media/Facebook_black.14f43e9c.svg",I=t.p+"static/media/LinkedIN_black.2c26b104.svg",R="wojciechknott@gmail.com",U=[{id:"github",imgUrl:P,url:"https://github.com/wknott"},{id:"facebook",imgUrl:C,url:"https://www.facebook.com/wojciech.knott"},{id:"linkedin",imgUrl:I,url:"https://www.linkedin.com/in/wojciechknott/"}],D=function(){return Object(r.jsxs)(F,{children:[Object(r.jsx)(y,{children:"This is"}),Object(r.jsx)(M,{children:"Wojciech Knott"}),Object(r.jsx)(z,{children:"\u269b\ufe0f I'm a highly motivated React Frontend Developer, currently looking for new programming experience."}),Object(r.jsxs)(T,{href:"mailto:".concat(R),children:[Object(r.jsx)(B,{src:E,alt:"email icon"}),"Hire Me"]})]})};function L(){var n=Object(l.a)(['\n  display: grid;\n  align-items: center;\n  grid-template-rows: auto 1fr;\n  grid-template-areas: \n    "image button"\n    "image info";\n\n  @media(max-width: ','px) {\n    grid-template-areas: \n      "image button"\n      "info info";\n  };\n']);return L=function(){return n},n}var H=p.e.header(L(),(function(n){return n.theme.breakpoint.mobileMax}));function G(){var n=Object(l.a)(["\n    transform: translateX(25px);\n  "]);return G=function(){return n},n}function _(){var n=Object(l.a)(["\n  transition: all 0.5s linear;\n\n  ","\n"]);return _=function(){return n},n}function A(){var n=Object(l.a)(["\n    transform: translateX(-25px);\n  "]);return A=function(){return n},n}function W(){var n=Object(l.a)(["\n  transition: all 0.5s linear;\n\n  ","\n"]);return W=function(){return n},n}function J(){var n=Object(l.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 14px 14px;\n  background-color: ",";\n"]);return J=function(){return n},n}function N(){var n=Object(l.a)(["\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 1.3;\n  text-transform: uppercase;\n  color: ",";\n  margin-right: 12px;\n  white-space: nowrap;\n\n  @media(max-width: ","px) {\n    display: none;\n  }\n"]);return N=function(){return n},n}function X(){var n=Object(l.a)(["\n  width: 48px;\n  height: 26px;\n  background: ",";\n  border-radius: 13px;\n"]);return X=function(){return n},n}function Y(){var n=Object(l.a)(["\n  width: 48px;\n  height: 26px;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 13px;\n  color: ",";\n  outline: none;\n  padding: 3px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  cursor: pointer;\n"]);return Y=function(){return n},n}function q(){var n=Object(l.a)(["\n  grid-area: button;\n  justify-self: flex-end;\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  @media(max-width: ","px) {\n    align-self: start;\n  }\n"]);return q=function(){return n},n}var K=p.e.div(q(),(function(n){return n.theme.breakpoint.mobileMax})),Q=p.e.button(Y(),(function(n){return n.theme.color.buttonBackground}),(function(n){return n.theme.color.secondaryText}),(function(n){return n.theme.color.text})),V=p.e.div(X(),(function(n){return n.theme.color.white})),Z=p.e.span(N(),(function(n){return n.theme.color.secondaryText}),(function(n){return n.theme.breakpoint.mobileMax})),$=p.e.span(J(),(function(n){return n.url}),(function(n){return n.theme.color.secondaryText})),nn=Object(p.e)($)(W(),(function(n){return!n.isLight&&Object(p.d)(A())})),en=Object(p.e)($)(_(),(function(n){return n.isLight&&Object(p.d)(G())})),tn=t.p+"static/media/light.fc30c484.svg",rn=t.p+"static/media/dark.4de03ecf.svg",on=function(n){var e=n.theme,t=n.toggleTheme;return Object(r.jsxs)(K,{children:[Object(r.jsxs)(Z,{children:["Dark mode ","light"===e?"off":"on"]}),Object(r.jsx)(V,{children:Object(r.jsxs)(Q,{onClick:t,children:[Object(r.jsx)(nn,{url:tn,isLight:"light"===e}),Object(r.jsx)(en,{url:rn,isLight:"light"===e})]})})]})},an=t.p+"static/media/profile-image.27e7c252.png",cn=function(n){var e=n.theme,t=n.toggleTheme;return Object(r.jsxs)(H,{children:[Object(r.jsx)(g,{src:an,alt:"my profile picture"}),Object(r.jsx)(D,{}),Object(r.jsx)(on,{theme:e,toggleTheme:t})]})};function un(){var n=Object(l.a)(["\n  width: 9px;\n  height: 9px;\n  border-radius: 4.5px;\n  background-color: ",";\n  margin-right: 16px;\n\n  @media(max-width: ","px) {\n    width: 6px;\n    height: 6px;\n    border-radius: 3px;\n    margin-right: 8px;\n  }\n"]);return un=function(){return n},n}function pn(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n  font-size: 18px;\n  line-height: 1.4;\n\n  @media(max-width: ","px) {\n    font-size: 14px;\n    line-height: 1.21;\n  }\n"]);return pn=function(){return n},n}function xn(){var n=Object(l.a)(["\n  margin-top: 32px;\n  list-style-type: none;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  justify-content: space-between;\n  grid-row-gap: 8px;\n  margin-bottom: 0;\n  \n  @media(max-width: ","px) {\n    grid-template-columns: 1fr;\n    margin-top: 12px;\n  }\n"]);return xn=function(){return n},n}var dn=p.e.ul(xn(),(function(n){return n.theme.breakpoint.mobileMax})),hn=p.e.li(pn(),(function(n){return n.theme.color.secondaryText}),(function(n){return n.theme.breakpoint.mobileMax})),ln=p.e.div(un(),(function(n){return n.theme.color.mainBlue}),(function(n){return n.theme.breakpoint.mobileMax})),mn=function(n){var e=n.items;return Object(r.jsx)(dn,{children:null===e||void 0===e?void 0:e.map((function(n){return Object(r.jsxs)(hn,{children:[Object(r.jsx)(ln,{}),n]},n)}))})};function sn(){var n=Object(l.a)(["\n  font-weight: 900;\n  font-size: 30px;\n  line-height: 1.2;\n  margin: 0;\n  padding-bottom: 15px;\n  border-bottom: 1px solid ",";\n\n  @media(max-width: ","px) {\n    font-size: 18px;\n    line-height: 1.22;\n    padding-bottom: 12px;\n  }\n"]);return sn=function(){return n},n}function bn(){var n=Object(l.a)(["\n  background: ",";\n  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);\n  border-radius: 4px;\n  padding: 32px;\n  margin-top: 73px;\n\n  @media(max-width: ","px) {\n    padding: 16px;\n    margin-top: 48px;\n  }\n"]);return bn=function(){return n},n}var fn=p.e.section(bn(),(function(n){return n.theme.color.sectionBackground}),(function(n){return n.theme.breakpoint.mobileMax})),gn=p.e.h2(sn(),(function(n){return n.theme.color.divider}),(function(n){return n.theme.breakpoint.mobileMax})),jn=function(n){var e=n.header,t=n.skills;return Object(r.jsxs)(fn,{children:[Object(r.jsx)(gn,{children:e}),Object(r.jsx)(mn,{items:t})]})},wn=["Semantic & accessible HTML","Responsive Web Design","Teamwork","Markdown","Immutbility","CSS BEM convention","CSS Grid","CSS Flexbox","React Router","Redux-Saga","Redux (Toolkit)","React Hooks","Error handling","Working with API (fetch,axios)","JavaScript: ES6+ features","Promises, Async/Await","GitHub Pull Requests & Review","Trello","Scrum","NPM","Yarn","React","React-Bootstrap","Git","Node.js","Express","MongoDB (Mongoose)","JWT","LocalStorage"],On=["Cypress","TypeScript","React Context","React Internationalization","GraphQL"],vn=t.p+"static/media/github.571d1ccb.svg",kn=t(5),Fn=t.n(kn),yn=t(7),Mn="https://api.github.com/users/".concat("wknott","/repos?sort=updated"),zn=function(){var n=Object(yn.a)(Fn.a.mark((function n(){var e;return Fn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(Mn);case 2:if((e=n.sent).ok){n.next=5;break}throw new Error(e.statusText);case 5:return n.next=8,e.json();case 8:return n.abrupt("return",n.sent);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Bn=t.p+"static/media/danger.a713ca87.svg",Sn=t.p+"static/media/danger-dark.7f2e1977.svg";function Tn(){var n=Object(l.a)(["\n  margin: 32px auto 140px;\n\n  @media(max-width: ","px) {\n    margin-bottom: 48px;\n  }\n"]);return Tn=function(){return n},n}function En(){var n=Object(l.a)(["\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 1.21;\n  text-align: center;\n  margin: 16px auto 32px;\n\n  @media(max-width: ","px) {\n    font-size: 16px;\n    line-height: 1.25;\n  }\n"]);return En=function(){return n},n}function Pn(){var n=Object(l.a)(["\n  margin: 0px auto 16px;\n  width: 48px;\n  height: 48px;\n  background: url(",");\n  background-repeat: no-repeat;\n"]);return Pn=function(){return n},n}function Cn(){var n=Object(l.a)(["\n  font-size: 20px;\n  line-height: 1.4;\n  margin: 0;\n\n  @media(max-width: ","px) {\n    font-size: 14px;\n  }\n"]);return Cn=function(){return n},n}function In(){var n=Object(l.a)(["\n  margin-top: 88px;\n  margin: 88px auto 0px;\n  text-align: center;\n  max-width: 426px;\n\n  @media(max-width: ","px) {\n    margin-top: 48px;\n  }\n"]);return In=function(){return n},n}var Rn=p.e.div(In(),(function(n){return n.theme.breakpoint.mobileMax})),Un=p.e.p(Cn(),(function(n){return n.theme.breakpoint.mobileMax})),Dn=p.e.div(Pn(),(function(n){return"#FBFBFE"===n.theme.color.body?Bn:Sn})),Ln=p.e.h3(En(),(function(n){return n.theme.breakpoint.mobileMax})),Hn=Object(p.e)(T)(Tn(),(function(n){return n.theme.breakpoint.mobileMax})),Gn=function(){return Object(r.jsxs)(Rn,{children:[Object(r.jsx)(Dn,{}),Object(r.jsx)(Ln,{children:"Ooops! Something went wrong\u2026"}),Object(r.jsx)(Un,{children:"Sorry, failed to load Github projects."}),Object(r.jsx)(Un,{children:"You can check them directly on Github."}),Object(r.jsx)(Hn,{href:U[0].url,target:"_blank",children:"Go to Github"})]})};function _n(){var n=Object(l.a)(["\n  @keyframes spinner {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  animation: spinner 1s linear infinite;\n  margin: 48px auto 140px;\n  width: 160px;\n  height: 160px;\n\n  @media(max-width: ","px) {\n    margin-bottom: 48px;\n    width: 80px;\n    height: 80px;\n  }\n"]);return _n=function(){return n},n}function An(){var n=Object(l.a)(["\n  font-weight: normal;\n  font-style: normal;\n  font-size: 20px;\n  line-height: 1.4;\n  margin: 8px 0px 0px;\n\n  @media(max-width: ","px) {\n    margin-top: 16px;\n    font-size: 17px;\n  }\n"]);return An=function(){return n},n}function Wn(){var n=Object(l.a)(["\n  margin-top: 88px;\n  text-align: center;\n\n  @media(max-width: ","px) {\n    margin-top: 48px;\n  }\n"]);return Wn=function(){return n},n}var Jn=p.e.div(Wn(),(function(n){return n.theme.breakpoint.mobileMax})),Nn=p.e.h3(An(),(function(n){return n.theme.breakpoint.mobileMax})),Xn=p.e.img(_n(),(function(n){return n.theme.breakpoint.mobileMax})),Yn=t.p+"static/media/spinner.88a075cf.svg",qn=t.p+"static/media/spinner-dark.d1744388.svg",Kn=function(){var n=Object(i.useContext)(p.a);return Object(r.jsxs)(Jn,{children:[Object(r.jsx)(Nn,{children:"Please wait, projects are being loaded\u2026"}),Object(r.jsx)(Xn,{src:"#FBFBFE"===n.color.body?Yn:qn})]})};function Qn(){var n=Object(l.a)(["\n  word-wrap: anywhere;\n  font-size: 18px;\n  line-height: 1.4;\n  color: ",";\n  text-decoration-line: underline;\n  text-underline-offset: 3px;\n  -webkit-text-decoration-color: ",";   \n  text-decoration-color: ",";\n  opacity: 0.8;\n  transition: 0.3s linear;\n  \n  &:hover{\n    opacity: 1;\n    -webkit-text-decoration-color: ",";\n    text-decoration-color: ",";\n  };\n\n  @media(max-width: ","px) {\n    font-size: 14px;\n    line-height: 1.21;\n  };\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(l.a)(["\n  margin: 0 8px 0 0;\n  min-width: 60px;\n\n  @media(max-width: ","px) {\n    min-width: 47px;\n  };\n"]);return Vn=function(){return n},n}function Zn(){var n=Object(l.a)(["\n  display: flex;\n  margin-top: 8px;\n"]);return Zn=function(){return n},n}function $n(){var n=Object(l.a)(["\n  margin: 0 0 24px;\n  font-size: 18px;\n  line-height: 1.4;\n  color: ",";\n\n  @media(max-width: ","px) {\n    font-size: 14px;\n    line-height: 1.21;\n    margin-bottom: 16px;\n  };\n"]);return $n=function(){return n},n}function ne(){var n=Object(l.a)(["\n  margin: 0 0 24px;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 1.21;\n  color: ",";\n\n  @media(max-width: ","px) {\n    font-size: 16px;\n    line-height: 1.19;\n    margin-bottom: 16px;\n  };\n"]);return ne=function(){return n},n}function ee(){var n=Object(l.a)(["\n  list-style-type: none;\n  padding: 56px;\n  background-color: ",";\n  border: 6px solid ",";\n  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03); \n  border-radius: 4px;\n  transition: 0.3s linear;\n\n  &:hover{\n    border: 6px solid ",";\n    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);\n  }\n\n  @media(max-width: ","px) {\n    padding: 24px;\n  };\n"]);return ee=function(){return n},n}var te=p.e.li(ee(),(function(n){return n.theme.color.sectionBackground}),(function(n){return n.theme.color.divider}),(function(n){return n.theme.color.tileActiveBorder}),(function(n){return n.theme.breakpoint.iPad})),re=p.e.h4(ne(),(function(n){return n.theme.color.projectTitle}),(function(n){return n.theme.breakpoint.iPad})),ie=p.e.p($n(),(function(n){return n.theme.color.secondaryText}),(function(n){return n.theme.breakpoint.iPad})),oe=p.e.div(Zn()),ae=Object(p.e)(ie)(Vn(),(function(n){return n.theme.breakpoint.iPad})),ce=p.e.a(Qn(),(function(n){return n.theme.color.mainBlue}),(function(n){return n.theme.color.linkUnderline}),(function(n){return n.theme.color.linkUnderline}),(function(n){return n.theme.color.linkUnderlineHover}),(function(n){return n.theme.color.linkUnderlineHover}),(function(n){return n.theme.breakpoint.iPad})),ue=function(n){var e=n.project;return Object(r.jsxs)(te,{children:[Object(r.jsx)(re,{children:e.name}),Object(r.jsx)(ie,{children:e.description}),e.homepage&&Object(r.jsxs)(oe,{children:[Object(r.jsx)(ae,{children:"Demo:"}),Object(r.jsx)(ce,{href:e.homepage,target:"_blank",children:e.homepage})]}),Object(r.jsxs)(oe,{children:[Object(r.jsx)(ae,{children:"Code:"}),Object(r.jsx)(ce,{href:e.html_url,target:"_blank",children:e.html_url})]})]})};function pe(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 32px;\n  margin-top: 24px;\n  width: 100%;\n  padding: 0;\n  \n  @media(max-width: ","px) {\n    grid-template-columns: 1fr;\n    grid-gap: 16px;\n  };\n"]);return pe=function(){return n},n}var xe=p.e.ul(pe(),(function(n){return n.theme.breakpoint.mobileMax})),de=function(){var n=Object(i.useState)([]),e=Object(u.a)(n,2),t=e[0],o=e[1],a=Object(i.useState)("loading"),c=Object(u.a)(a,2),p=c[0],x=c[1];switch(Object(i.useEffect)((function(){var n=function(){var n=Object(yn.a)(Fn.a.mark((function n(){var e;return Fn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x("loading"),n.next=4,zn();case 4:e=n.sent,x("sucess"),o(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),x("error");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();setTimeout((function(){n()}),500)}),[]),p){case"error":return Object(r.jsx)(Gn,{});case"loading":return Object(r.jsx)(Kn,{});default:return Object(r.jsx)(xe,{children:t.map((function(n){return Object(r.jsx)(ue,{project:n},n.id)}))})}};function he(){var n=Object(l.a)(["\n  font-weight: normal;\n  font-style: normal;\n  font-size: 20px;\n  line-height: 1.4;\n  margin: 8px 0px 0px;\n\n  @media(max-width: ","px) {\n    margin-top: 16px;\n    font-size: 17px;\n  }\n"]);return he=function(){return n},n}function le(){var n=Object(l.a)(["\n  font-weight: 900;\n  font-size: 30px;\n  line-height: 1.2;\n  margin: 12px 0px 0px;\n\n  @media(max-width: ","px) {\n    font-size: 18px;\n    line-height: 1.22;\n  }\n"]);return le=function(){return n},n}function me(){var n=Object(l.a)(["\n  width: 40px;\n  height: 40px;\n\n  @media(max-width: ","px) {\n    width: 32px;\n    height: 32px;\n  }\n"]);return me=function(){return n},n}function se(){var n=Object(l.a)(["\n  text-align: center;\n"]);return se=function(){return n},n}function be(){var n=Object(l.a)(["\n  margin-top: 72px;\n\n  @media(max-width: ","px) {\n    margin-top: 48px;\n  }\n"]);return be=function(){return n},n}var fe=p.e.section(be(),(function(n){return n.theme.breakpoint.mobileMax})),ge=p.e.header(se()),je=p.e.img(me(),(function(n){return n.theme.breakpoint.mobileMax})),we=p.e.h2(le(),(function(n){return n.theme.breakpoint.mobileMax})),Oe=p.e.h3(he(),(function(n){return n.theme.breakpoint.mobileMax})),ve=function(){return Object(r.jsxs)(fe,{children:[Object(r.jsxs)(ge,{children:[Object(r.jsx)(je,{src:vn,alt:"github logo"}),Object(r.jsx)(we,{children:"Portfolio"}),Object(r.jsx)(Oe,{children:"My recent projects"})]}),Object(r.jsx)(de,{})]})};function ke(){var n=Object(l.a)(["\n  font-style: unset;\n"]);return ke=function(){return n},n}function Fe(){var n=Object(l.a)(["\n  width: 48px;\n  height: 48px;\n  filter: ",";\n  transition: 0.2s linear;\n\n  &:hover{\n    filter: ",";\n  }\n\n  @media(max-width: ","px) {\n    width: 32px;\n    height: 32px;\n  };\n"]);return Fe=function(){return n},n}function ye(){var n=Object(l.a)(["\n  margin-right: 24px;\n"]);return ye=function(){return n},n}function Me(){var n=Object(l.a)(["\n  margin-top: 56px;\n  display: flex;\n\n  @media(max-width: ","px) {\n    margin-top: 40px;\n  };\n"]);return Me=function(){return n},n}function ze(){var n=Object(l.a)(["\n  font-size: 18px;\n  line-height: 1.4;\n  margin-top: 24px;\n  margin-bottom: 0;\n\n  @media(max-width: ","px) {\n    font-size: 14px;\n    line-height: 1.21;\n  };\n"]);return ze=function(){return n},n}function Be(){var n=Object(l.a)(["\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1.22;\n  text-decoration: none;\n  color: unset;\n  margin-top: 24px;\n  transition: 0.3s linear;\n\n  &:hover{\n    color: ",";\n  }\n\n  @media(max-width: ","px) {\n    font-size: 18px;\n    line-height: 1.22;\n    margin-bottom: 16px;\n  };\n"]);return Be=function(){return n},n}function Se(){var n=Object(l.a)(["\n  font-weight: bold;\n  font-size: 12px;\n  line-height: 1.3;\n  text-transform: uppercase;\n  color: ",";\n  margin-top: 0;\n  margin-bottom: 24px;\n\n  @media(max-width: ","px) {\n    margin-bottom: 12px;\n  };\n"]);return Se=function(){return n},n}function Te(){var n=Object(l.a)(["\n  margin-top: 120px;\n  width: 55%;\n\n  @media(max-width: ","px) {\n    margin-top: 48px;\n    width: 100%;\n  };\n"]);return Te=function(){return n},n}var Ee=p.e.footer(Te(),(function(n){return n.theme.breakpoint.mobileMax})),Pe=p.e.p(Se(),(function(n){return n.theme.color.secondaryText}),(function(n){return n.theme.breakpoint.mobileMax})),Ce=p.e.a(Be(),(function(n){return n.theme.color.mainBlue}),(function(n){return n.theme.breakpoint.mobileMax})),Ie=p.e.p(ze(),(function(n){return n.theme.breakpoint.mobileMax})),Re=p.e.div(Me(),(function(n){return n.theme.breakpoint.mobileMax})),Ue=p.e.a(ye()),De=p.e.img(Fe(),(function(n){return n.theme.color.textFilter}),(function(n){return n.theme.color.mainBlueFilter}),(function(n){return n.theme.breakpoint.mobileMax})),Le=p.e.address(ke()),He=function(){return Object(r.jsxs)(Ee,{children:[Object(r.jsx)(Pe,{children:"Let's talk!"}),Object(r.jsx)(Le,{children:Object(r.jsx)(Ce,{href:"mailto:".concat(R),children:R})}),Object(r.jsx)(Ie,{children:"I\u2019m always open to new projects. If you have any ideas and need some help with a website or web application, feel free to contact me!"}),Object(r.jsx)(Re,{children:U.map((function(n){return Object(r.jsx)(Ue,{href:n.url,target:"_blank",children:Object(r.jsx)(De,{src:n.imgUrl,alt:"".concat(n.id," icon")})},n.id)}))})]})};function Ge(){var n=Object(l.a)(["\n  margin: auto;\n  max-width: 1216px;\n  padding: 119px 0px 109px;\n\n  @media(max-width: ","px) {\n    width: calc(100% - 2 * 32px);\n  };\n\n  @media(max-width: ","px) {\n    padding: 21px 0px 31px;\n    width: calc(100% - 2 * 16px);\n  };\n"]);return Ge=function(){return n},n}function _e(){var n=Object(l.a)(["\n  background: ",";\n  color: ",";\n  transition: background 0.5s linear, color 0.5s linear;\n"]);return _e=function(){return n},n}var Ae=p.e.div(_e(),(function(n){return n.theme.color.body}),(function(n){return n.theme.color.text})),We=p.e.main(Ge(),(function(n){return n.theme.breakpoint.desktopHD}),(function(n){return n.theme.breakpoint.mobileMax})),Je=function(){var n=b(),e=Object(u.a)(n,2),t=e[0],i=e[1],o="light"===t?d:h;return Object(r.jsx)(p.b,{theme:o,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s,{}),Object(r.jsx)(Ae,{children:Object(r.jsxs)(We,{children:[Object(r.jsx)(cn,{theme:t,toggleTheme:i}),Object(r.jsx)(jn,{header:"My skillset includes \ud83d\udee0\ufe0f",skills:wn}),Object(r.jsx)(jn,{header:"What I want to learn next \ud83d\ude80",skills:On}),Object(r.jsx)(ve,{}),Object(r.jsx)(He,{})]})})]})})},Ne=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),o(n),a(n)}))};c.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Je,{})}),document.getElementById("root")),Ne()}},[[23,1,2]]]);
//# sourceMappingURL=main.aed6155b.chunk.js.map
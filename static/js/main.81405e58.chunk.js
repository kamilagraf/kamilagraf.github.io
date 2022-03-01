(this["webpackJsonpgraf-web-portfolio"]=this["webpackJsonpgraf-web-portfolio"]||[]).push([[0],{36:function(n,e,t){},37:function(n,e,t){"use strict";t.r(e);var i,r,a,o,c,s,l,d,m,h,p,x,g,f,b,u,j,w,O,y,k,v,z,N,I,W,P,F,C,S,R,B,H,M,E,L,_,D=t(0),V=t.n(D),G=t(11),Y=t.n(G),A=t(3),K=t(2),T=K.d.div(i||(i=Object(A.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),X=K.d.main(r||(r=Object(A.a)([""]))),Z=t(5),J=t(42),q=K.d.header(a||(a=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  width: 100%;\n  height: 104px;\n  padding: 0 16px;\n  background-color: ",";\n  z-index: 10;\n\n  @media screen and (min-width: 768px) {\n    position: fixed;\n    width: 736px;\n\n    &.visible {\n      visibility: visible;\n      transition: all 0.3s;\n    }\n\n    &.hidden {\n      visibility: hidden;\n      transition: all 0.3s;\n      transform: translateY(-100%);\n    }\n  }\n\n  @media screen and (min-width: 1356px) {\n    width: 1308px;\n    padding: 0 24px;\n  }\n"])),(function(n){return n.theme.colors.black.zero})),Q=K.d.nav(o||(o=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: relative;\n  width: 100%;\n  color: ",";\n"])),(function(n){return n.theme.colors.white.zero})),U=K.d.div(c||(c=Object(A.a)(["\n  display: flex;\n  align-items: center;\n\n  @media (max-width: 767px) {\n    display: none;\n  }\n\n  ul {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    gap: 80px;\n  }\n\n  a {\n    font-weight: ",";\n    font-size: 18px;\n    line-height: 24px;\n    text-decoration: none;\n    color: ",";\n    transition: all 0.25s ease-in-out;\n\n    &:hover {\n      color: ",";\n    }\n\n    &:active,\n    &:focus {\n      color: ",";\n      transition: none;\n    }\n  }\n"])),(function(n){return n.theme.fontWeight.semiBold}),(function(n){return n.theme.colors.white.zero}),(function(n){return n.theme.colors.white.twenty}),(function(n){return n.theme.colors.limePrimary.zero})),$=t(1),nn=K.d.div(s||(s=Object(A.a)(["\n  font-weight: ",";\n  font-size: 24px;\n  line-height: 24px;\n  color: ",";\n"])),(function(n){return n.theme.fontWeight.semiBold}),(function(n){return n.theme.colors.white.zero})),en=function(){return Object($.jsx)(nn,{children:"Graf."})},tn=[{name:"About me",url:"/#about"},{name:"My work",url:"/#projects"},{name:"Let's talk",url:"/#contact"}],rn=function(){var n=Object(D.useState)(!0),e=Object(Z.a)(n,2),t=e[0],i=e[1],r=Object(D.useState)(0),a=Object(Z.a)(r,2),o=a[0],c=a[1],s=Object(D.useState)(!1),l=Object(Z.a)(s,2),d=l[0],m=l[1];Object(D.useEffect)((function(){m(!0)}),[]);var h=function(){c(document.body.getBoundingClientRect().top),i(document.body.getBoundingClientRect().top>o)};return Object(D.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}})),Object($.jsx)(q,{id:"navbar",className:t?"visible":"hidden",children:Object($.jsx)(J.a,{in:d,classNames:"fadedown",timeout:2e3,children:Object($.jsxs)(Q,{children:[Object($.jsx)(en,{}),Object($.jsx)(U,{children:Object($.jsx)("ul",{children:tn&&tn.map((function(n,e){var t=n.url,i=n.name;return Object($.jsx)("li",{children:Object($.jsx)("a",{href:t,children:i})},e)}))})})]})})})},an=t(7),on=Object(K.e)(l||(l=Object(A.a)(["\n\t0% {\n\t\topacity: 1;\n\t\ttop: 29%;\n\t}\n\t15% {\n\t\topacity: 1;\n\t\ttop: 50%;\n\t}\n\t50% {\n\t\topacity: 0;\n\t\ttop: 50%;\n\t}\n\t100% {\n\t\topacity: 0;\n\t\ttop: 29%;\n\t}\n"]))),cn=K.d.div(d||(d=Object(A.a)(["\n  & > *:hover,\n  & > *:focus,\n  & > *:active,\n  & > *.active {\n    opacity: 0.8;\n    filter: alpha(opacity=80);\n  }\n"]))),sn=K.d.span(m||(m=Object(A.a)(["\n  position: relative;\n  display: block;\n  width: 35px;\n  height: 55px;\n  margin: 0 auto 20px;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 3px solid ",";\n  border-radius: 23px;\n\n  & > * {\n    position: absolute;\n    display: block;\n    top: 29%;\n    left: 50%;\n    width: 8px;\n    height: 8px;\n    margin: -4px 0 0 -4px;\n    background: ",";\n    border-radius: 50%;\n    -webkit-animation: "," 2.5s linear infinite;\n    -moz-animation: "," 2.5s linear infinite;\n    animation: "," 2.5s linear infinite;\n  }\n"])),(function(n){return n.theme.colors.black.thirty}),(function(n){return n.theme.colors.black.thirty}),on,on,on),ln=Object(D.forwardRef)((function(n,e){return Object($.jsx)(cn,Object(an.a)(Object(an.a)({className:"mouse-btn",ref:e},n),{},{children:Object($.jsx)("a",{href:"#",children:Object($.jsx)(sn,{children:Object($.jsx)("span",{})})})}))})),dn=K.d.h1(h||(h=Object(A.a)(["\n  font-weight: ",";\n  font-size: 40px;\n  line-height: 56px;\n  letter-spacing: -0.01em;\n  margin: 0;\n\n  span.green {\n    color: ",";\n    font-style: italic;\n    font-weight: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 68px;\n    line-height: 94px;\n  }\n\n  @media screen and (min-width: 1356px) {\n    font-size: 90px;\n    line-height: 126px;\n  }\n"])),(function(n){return n.theme.fontWeight.semiBold}),(function(n){return n.theme.colors.limePrimary.zero}),(function(n){return n.theme.fontWeight.regular})),mn=(K.d.h2(p||(p=Object(A.a)(["\n  font-weight: ",";\n  font-size: 36px;\n  line-height: 50px;\n  letter-spacing: -0.01em;\n  margin: 0;\n\n  span.green {\n    color: ",";\n    font-style: italic;\n    font-weight: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 60px;\n    line-height: 84px;\n  }\n\n  @media screen and (min-width: 1356px) {\n    font-size: 80px;\n    line-height: 112px;\n  }\n"])),(function(n){return n.theme.fontWeight.semiBold}),(function(n){return n.theme.colors.limePrimary.zero}),(function(n){return n.theme.fontWeight.regular})),K.d.h3(x||(x=Object(A.a)(["\n  font-weight: ",";\n  font-size: 32px;\n  line-height: 44px;\n  letter-spacing: -0.01em;\n  margin: 0;\n\n  span.green {\n    color: ",";\n    font-style: italic;\n    font-weight: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 48px;\n    line-height: 66px;\n  }\n\n  @media screen and (min-width: 1356px) {\n    font-size: 60px;\n    line-height: 84px;\n  }\n"])),(function(n){return n.theme.fontWeight.semiBold}),(function(n){return n.theme.colors.limePrimary.zero}),(function(n){return n.theme.fontWeight.regular}))),hn=K.d.h4(g||(g=Object(A.a)(["\n  font-weight: ",";\n  font-size: 26px;\n  line-height: 36px;\n  letter-spacing: -0.01em;\n  margin: 0;\n\n  span.green {\n    color: ",";\n    font-style: italic;\n    font-weight: ",";\n  }\n\n  span.gray {\n    color: ",";\n    font-style: italic;\n    font-weight: ",";\n  }\n\n  span.white {\n    color: ",";\n    font-style: italic;\n    font-weight: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 38px;\n    line-height: 52px;\n  }\n\n  @media screen and (min-width: 1356px) {\n    font-size: 46px;\n    line-height: 64px;\n  }\n"])),(function(n){return n.theme.fontWeight.semiBold}),(function(n){return n.theme.colors.limePrimary.zero}),(function(n){return n.theme.fontWeight.regular}),(function(n){return n.theme.colors.white.ten}),(function(n){return n.theme.fontWeight.regular}),(function(n){return n.theme.colors.white.zero}),(function(n){return n.theme.fontWeight.regular})),pn=Object(K.e)(f||(f=Object(A.a)(["\n    0% { transform: rotate( 0.0deg) }\n   10% { transform: rotate(14.0deg) }\n   20% { transform: rotate(-8.0deg) }\n   30% { transform: rotate(14.0deg) }\n   40% { transform: rotate(-4.0deg) }\n   50% { transform: rotate(10.0deg) }\n   60% { transform: rotate( 0.0deg) }\n  100% { transform: rotate( 0.0deg) }\n}\n"]))),xn=K.d.section(b||(b=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 100vh;\n  align-items: center;\n\n  h1 {\n    margin: 80px auto;\n  }\n\n  .wave {\n    animation-name: ",";\n    animation-duration: 2.5s;\n    animation-iteration-count: infinite;\n    transform-origin: 70% 70%;\n    display: inline-block;\n  }\n\n  .mouse-btn {\n    display: none;\n\n    @media screen and (min-width: 768px) {\n      display: block;\n    }\n\n    @media screen and (min-width: 1920px) {\n      margin: 70px auto 56px;\n    }\n  }\n"])),pn),gn=function(){var n=Object(D.useState)(!1),e=Object(Z.a)(n,2),t=e[0],i=e[1];return Object(D.useEffect)((function(){i(!0)}),[]),Object($.jsxs)(xn,{id:"hero",children:[Object($.jsx)(J.a,{in:t,classNames:"fadeup",timeout:2e3,children:Object($.jsxs)(dn,{children:["Hey, I'm Kamila ",Object($.jsx)("span",{className:"wave",children:"\ud83d\udc4b"})," ",Object($.jsx)("br",{})," I develop tools that make building products"," ",Object($.jsx)("span",{className:"green",children:"effortless"}),"."]})}),Object($.jsx)(J.a,{in:t,classNames:"fadeup",timeout:2e3,children:Object($.jsx)(ln,{})})]})},fn={origin:"bottom",distance:"20px",duration:500,delay:200,rotate:{x:0,y:0,z:0},opacity:0,scale:1,easing:"cubic-bezier(0.645, 0.045, 0.355, 1)",mobile:!0,reset:!1,useDelay:"always",viewFactor:.25,viewOffset:{top:0,right:0,bottom:0,left:0}},bn=t(21),un="undefined"===typeof window?null:Object(bn.a)(),jn=K.d.div(u||(u=Object(A.a)(["\n  display: none;\n  background-color: ",";\n  border-radius: 30px;\n\n  @media screen and (min-width: 768px) {\n    display: block;\n  }\n"])),(function(n){return n.theme.colors.limePrimary.zero})),wn=K.d.section(j||(j=Object(A.a)(["\n  padding-top: 150px;\n\n  .inner {\n    display: block;\n\n    @media screen and (min-width: 768px) {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      grid-template-rows: 1fr 480px;\n      grid-gap: 16px;\n    }\n\n    @media screen and (min-width: 1356px) {\n      grid-template-columns: repeat(12, 1fr);\n      grid-template-rows: 1fr 628px;\n      grid-gap: 24px;\n    }\n  }\n\n  h4 {\n    margin: 0 0 40px 0;\n\n    @media screen and (min-width: 768px) {\n      margin: 0 0 80px 0;\n    }\n\n    @media screen and (min-width: 1356px) {\n      margin: 0 0 100px 0;\n    }\n  }\n\n  p:not(.caption) {\n    margin: 0 0 40px 0;\n\n    @media screen and (min-width: 768px) {\n      margin: 0 0 64px 0;\n      grid-column: 1 / -1;\n      grid-row: 1;\n    }\n\n    @media screen and (min-width: 1356px) {\n      grid-column: 1 / 7;\n      grid-row: 2;\n      align-self: start;\n    }\n  }\n\n  a {\n    margin: 0 0 44px 0;\n    transition: all 0.25s ease-in-out;\n\n    @media screen and (min-width: 768px) {\n      grid-column: 1 / 3;\n      grid-row: 2;\n      align-self: start;\n      margin: 0 122px 104px 0;\n    }\n\n    @media screen and (min-width: 1356px) {\n      grid-column: 1 / 4;\n      justify-self: start;\n      margin: 172px 0 0 0;\n      align-self: start;\n    }\n  }\n\n  img {\n    width: 100%;\n    margin: 16px 0 0 0;\n    border-radius: 20px;\n\n    &.deskphoto {\n      @media screen and (min-width: 768px) {\n        width: 400px;\n        height: 320px;\n        object-fit: cover;\n        grid-column: 1 / 4;\n        grid-row: 2 / 3;\n        margin: 0;\n        align-self: end;\n      }\n\n      @media screen and (min-width: 1356px) {\n        width: 531px;\n        height: 420px;\n        grid-column: 4 / 9;\n      }\n    }\n\n    &.facephoto {\n      @media screen and (min-width: 768px) {\n        width: 400px;\n        height: 377px;\n        object-fit: cover;\n        grid-column: 3 / -1;\n        grid-row: 2;\n        align-self: start;\n        justify-self: end;\n        margin: 0;\n        z-index: 3;\n      }\n\n      @media screen and (min-width: 1356px) {\n        width: 531px;\n        height: 500px;\n      }\n    }\n  }\n"]))),On=Object(K.d)(jn)(w||(w=Object(A.a)(["\n  @media screen and (min-width: 768px) {\n    width: 240px;\n    height: 120px;\n    grid-column: 2 / 4;\n    grid-row: 2;\n    align-self: end;\n    justify-self: center;\n    margin: 0 0 40px 0;\n  }\n\n  @media screen and (min-width: 1356px) {\n    width: 308px;\n    height: 150px;\n    grid-column: 7 / 10;\n    margin: 0 0 53px 0;\n  }\n"]))),yn=K.d.p(O||(O=Object(A.a)(["\n  font-weight: ",";\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0.25em;\n  text-transform: uppercase;\n  margin: 0 0 24px;\n\n  &.green {\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    margin: 0 0 40px;\n  }\n"])),(function(n){return n.theme.fontWeight.semiBold}),(function(n){return n.theme.colors.limePrimary.zero})),kn=K.d.p(y||(y=Object(A.a)(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  margin: 0;\n\n  span.white {\n    color: ",";\n    font-style: italic;\n    font-weight: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n  }\n\n  @media screen and (min-width: 1356px) {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.isSmall?"18px":"20px"}),(function(n){return n.isSmall?"28px":"30px"}),(function(n){return n.theme.colors.white.zero}),(function(n){return n.theme.fontWeight.regular}),(function(n){return n.isSmall?"20px":"22px"}),(function(n){return n.isSmall?"30px":"34px"}),(function(n){return n.isSmall?"22px":"24px"}),(function(n){return n.isSmall?"34px":"36px"})),vn=t(10),zn=K.d.button(k||(k=Object(A.a)(["\n  background-color: ",";\n  border-radius: 1000px;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  text-decoration: none;\n  padding: 16px 24px;\n  color: ",";\n  font-weight: ",";\n  font-size: 20px;\n  line-height: 24px;\n  margin: 0;\n\n  svg.icon-left {\n    margin-right: 11px;\n  }\n\n  svg.icon-right {\n    margin-left: 11px;\n  }\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:active {\n    background-color: ",";\n  }\n\n  &:disabled {\n    background-color: ",";\n    color: ",";\n\n    svg {\n      path {\n        stroke: ",";\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.limePrimary.zero}),(function(n){return n.theme.colors.black.zero}),(function(n){return n.theme.fontWeight.semiBold}),(function(n){return n.theme.colors.limePrimary.ten}),(function(n){return n.theme.colors.limePrimary.twenty}),(function(n){return n.theme.colors.black.ten}),(function(n){return n.theme.colors.white.twenty}),(function(n){return n.theme.colors.white.twenty})),Nn={colors:{black:{zero:"#050505",ten:"#222524",twenty:"#414442",thirty:"#5F6361"},white:{zero:"#FFFFFF",ten:"#CBCDCC",twenty:"#B1B4B2"},limePrimary:{zero:"#0BDA74",ten:"#0DF281",twenty:"#55F6A7"}},fontWeight:{regular:"400",medium:"500",semiBold:"600"}},In=["children","IconLeft","IconRight"],Wn=function(n){var e=n.children,t=n.IconLeft,i=n.IconRight,r=Object(vn.a)(n,In);return Object($.jsxs)(zn,Object(an.a)(Object(an.a)({},r),{},{children:[t&&Object($.jsx)(t,{className:"icon-left",color:Nn.colors.black.zero,size:24,strokeWidth:2}),e,i&&Object($.jsx)(i,{className:"icon-right",color:Nn.colors.black.zero,size:24,strokeWidth:2})]}))},Pn=t(38),Fn=t.p+"static/media/graf-deskphoto.9c0cf92d.jpg",Cn=t.p+"static/media/graf-facephoto.70c756c5.jpg",Sn=function(){var n=Object(D.useRef)(null);return Object(D.useEffect)((function(){un.reveal(n.current,fn)}),[]),Object($.jsxs)(wn,{id:"about",ref:n,children:[Object($.jsx)(yn,{className:"green caption",children:"About me \ud83d\udc69"}),Object($.jsxs)(hn,{children:["I'm a developer crazy about bringing ",Object($.jsx)("span",{className:"green",children:"something"})," to life from ",Object($.jsx)("span",{className:"gray",children:"nothing"}),". My focus is on constant learning and using that knowledge in practice as soon as possible - theory is cool but working on your own thing is way"," ",Object($.jsx)("span",{className:"white",children:":coooler:"})]}),Object($.jsxs)("div",{className:"inner",children:[Object($.jsx)(kn,{children:"I\u2019m currently available for a stationary developer position somewhere in Krak\xf3w, Poland. If you got something interesting, feel more than encouraged to contact me!"}),Object($.jsx)(Wn,{IconRight:Pn.a,as:"a",href:"https://www.linkedin.com/in/kamilagraf/",rel:"noopener",target:"_blank",children:"Drop me a line"}),Object($.jsx)("img",{className:"deskphoto",src:Fn,alt:"Deskphoto"}),Object($.jsx)(On,{}),Object($.jsx)("img",{className:"facephoto",src:Cn,alt:"Facephoto"})]})]})},Rn=K.d.section(v||(v=Object(A.a)(["\n  padding-top: 150px;\n\n  .wrapper {\n    @media screen and (min-width: 1356px) {\n      display: grid;\n      grid-template-columns: repeat(12, 1fr);\n      grid-gap: 24px;\n    }\n  }\n  a {\n    transition: all 0.25s ease-in-out;\n\n    @media screen and (min-width: 768px) {\n      width: 300px;\n    }\n\n    @media screen and (min-width: 1356px) {\n      grid-column: 8 / 12;\n      align-self: start;\n      justify-self: start;\n    }\n  }\n\n  h4 {\n    margin: 0 0 40px 0;\n\n    @media screen and (min-width: 768px) {\n      margin: 0 0 80px 0;\n    }\n\n    @media screen and (min-width: 1356px) {\n      margin: 0 0 100px 0;\n    }\n  }\n\n  p:not(.caption) {\n    margin: 0 0 40px 0;\n\n    @media screen and (min-width: 768px) {\n      margin: 0 0 64px 0;\n    }\n\n    @media screen and (min-width: 1356px) {\n      grid-column: 1 / 7;\n      margin: 0;\n    }\n  }\n"]))),Bn=function(){var n=Object(D.useRef)(null);return Object(D.useEffect)((function(){un.reveal(n.current,fn)}),[]),Object($.jsxs)(Rn,{id:"projects",ref:n,children:[Object($.jsx)(yn,{className:"green caption",children:"My work \ud83d\udcbb"}),Object($.jsxs)(hn,{children:["I provide value to my work buddies around the globe by helping speed up their workflow and enriching their assets library with new,",Object($.jsx)("span",{className:"green",children:" time-saving alternatives."})]}),Object($.jsxs)("div",{className:"wrapper",children:[Object($.jsxs)(kn,{children:["If you want to deep dive into code ",Object($.jsx)("span",{className:"white",children:"*impatiently*"}),", you can find everything on my GitHub profile."]}),Object($.jsx)(Wn,{IconRight:Pn.a,as:"a",href:"https://github.com/kamilagraf",rel:"noopener",target:"_blank",children:"Visit my GitHub profile"})]})]})},Hn=Object(K.e)(z||(z=Object(A.a)(["\n\t0% {\n\t\ttransform: translateX(0);\n\t}\n  50% {\n\t\ttransform: translateX(8px);\n\t}\n  0% {\n\t\ttransform: translateX(0);\n\t}\n"]))),Mn=K.d.div(N||(N=Object(A.a)([""]))),En=K.d.section(I||(I=Object(A.a)(["\n  @media screen and (min-width: 1356px) {\n    display: flex;\n    justify-content: space-between;\n  }\n"]))),Ln=K.d.div(W||(W=Object(A.a)(["\n  display: flex;\n  flex-direction: column;\n\n  @media screen and (min-width: 1356px) {\n    width: 642px;\n  }\n\n  h3 {\n    margin: 0 0 24px 0;\n  }\n\n  p:nth-last-child(2) {\n    margin: 48px 0 24px 0;\n\n    @media screen and (min-width: 768px) {\n      margin: 58px 0 24px 0;\n    }\n\n    @media screen and (min-width: 1356px) {\n      margin: 108px 0 24px 0;\n    }\n  }\n\n  p:last-child {\n    margin: 0 0 44px 0;\n\n    @media screen and (min-width: 768px) {\n      margin: 0 0 56px 0;\n    }\n\n    @media screen and (min-width: 1356px) {\n      margin: 0;\n    }\n  }\n\n  a.link-btn {\n    margin: 0 0 8px 0;\n    align-self: start;\n    display: inline-block;\n\n    &:hover,\n    &:focus,\n    &:active {\n      &:after {\n        width: 100%;\n      }\n      svg {\n        animation: "," 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);\n      }\n    }\n\n    &:after {\n      content: '';\n      display: block;\n      width: 0;\n      height: 2px;\n      position: relative;\n      bottom: 0.15em;\n      background-color: ",";\n      transition: all 0.4s ease-in-out;\n      opacity: 0.8;\n    }\n\n    @media screen and (min-width: 768px) {\n      margin: 0;\n    }\n  }\n\n  a.link {\n    color: ",";\n    text-decoration: none;\n    display: inline-block;\n\n    &:hover,\n    &:focus,\n    &:active {\n      &:after {\n        width: 100%;\n      }\n    }\n    &:after {\n      content: '';\n      display: block;\n      width: 0;\n      height: 2px;\n      position: relative;\n      bottom: 0.35em;\n      background-color: ",";\n      transition: all 0.4s ease-in-out;\n      opacity: 0.8;\n    }\n  }\n"])),Hn,(function(n){return n.theme.colors.limePrimary.zero}),(function(n){return n.theme.colors.limePrimary.zero}),(function(n){return n.theme.colors.limePrimary.zero})),_n=K.d.div(P||(P=Object(A.a)(["\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n\n  @media screen and (min-width: 1356px) {\n    width: 531px;\n  }\n\n  img {\n    margin: 8px 0;\n    width: 100%;\n    border-radius: 20px;\n    object-fit: cover;\n\n    &.react02 {\n      z-index: 1;\n    }\n\n    &.figma01 {\n      z-index: 3;\n    }\n\n    &.figma02 {\n      z-index: 1;\n    }\n\n    &.browser02 {\n      z-index: 2;\n    }\n\n    @media screen and (min-width: 768px) {\n      margin: 12px 0;\n      border-radius: 40px;\n    }\n\n    @media screen and (min-width: 1356px) {\n      border-radius: 30px;\n    }\n  }\n"]))),Dn=Object(K.d)(jn)(F||(F=Object(A.a)(["\n  @media screen and (min-width: 768px) {\n    position: absolute;\n    align-self: center;\n\n    &.rect01 {\n      width: 308px;\n      height: 150px;\n      left: 80px;\n    }\n\n    &.rect02 {\n      width: 150px;\n      height: 150px;\n      right: 80px;\n      z-index: 2;\n    }\n\n    &.rect03 {\n      width: 200px;\n      height: 150px;\n      right: 80px;\n      z-index: 2;\n    }\n  }\n\n  @media screen and (min-width: 1356px) {\n    &.rect01 {\n      left: -50px;\n    }\n\n    &.rect02 {\n      right: 50px;\n    }\n\n    &.rect03 {\n      width: 150px;\n      align-self: flex-start;\n      left: -50px;\n      top: -50px;\n    }\n  }\n"]))),Vn=K.d.button(C||(C=Object(A.a)(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  text-decoration: none;\n  padding: 16px 0;\n  color: ",";\n  font-weight: ",";\n  font-size: 20px;\n  line-height: 24px;\n  margin: 0;\n\n  svg.icon-left {\n    margin-right: 11px;\n  }\n\n  svg.icon-right {\n    margin-left: 11px;\n  }\n\n  &:hover {\n    color: ",";\n\n    svg {\n      path {\n        stroke: ",";\n      }\n    }\n  }\n\n  &:active {\n    color: ",";\n\n    svg {\n      path {\n        stroke: ",";\n      }\n    }\n  }\n\n  &:disabled {\n    color: ",";\n\n    svg {\n      path {\n        stroke: ",";\n      }\n    }\n  }\n"])),(function(n){return n.theme.colors.white.zero}),(function(n){return n.theme.fontWeight.semiBold}),(function(n){return n.theme.colors.limePrimary.zero}),(function(n){return n.theme.colors.limePrimary.zero}),(function(n){return n.theme.colors.limePrimary.twenty}),(function(n){return n.theme.colors.limePrimary.twenty}),(function(n){return n.theme.colors.black.thirty}),(function(n){return n.theme.colors.black.thirty})),Gn=["children","IconLeft","IconRight"],Yn=function(n){var e=n.children,t=n.IconLeft,i=n.IconRight,r=Object(vn.a)(n,Gn);return Object($.jsxs)(Vn,Object(an.a)(Object(an.a)({},r),{},{children:[t&&Object($.jsx)(t,{className:"icon-left",color:Nn.colors.white.zero,size:24,strokeWidth:2}),e,i&&Object($.jsx)(i,{className:"icon-right",color:Nn.colors.white.zero,size:24,strokeWidth:2})]}))},An=t.p+"static/media/react-icon-pack01.5665a24e.jpg",Kn=t.p+"static/media/react-icon-pack02.c442c486.jpg",Tn=t.p+"static/media/figma-plugin01.cda63f54.jpg",Xn=t.p+"static/media/figma-plugin02.bcc60353.jpg",Zn=t.p+"static/media/icon-browser01.37f20d66.jpg",Jn=t.p+"static/media/icon-browser02.dd9b0f38.jpg",qn=function(){var n=Object(D.useRef)(null),e=Object(D.useRef)(null),t=Object(D.useRef)(null);return Object(D.useEffect)((function(){un.reveal(n.current,fn),un.reveal(e.current,fn),un.reveal(t.current,fn)}),[]),Object($.jsxs)(Mn,{className:"portfolio",children:[Object($.jsxs)(En,{ref:n,children:[Object($.jsxs)(Ln,{children:[Object($.jsx)(mn,{children:"SWM React Icon Pack"}),Object($.jsx)(Yn,{className:"link-btn",IconRight:Pn.a,as:"a",href:"https://www.npmjs.com/package/react-swm-icon-pack",rel:"noopener",target:"_blank",children:"Download from npm"}),Object($.jsx)(Yn,{className:"link-btn",IconRight:Pn.a,as:"a",href:"https://github.com/kamilagraf/react-swm-icon-pack",rel:"noopener",target:"_blank",children:"Learn more on GitHub"}),Object($.jsx)(kn,{children:"Carefully prepared icons to help your projects shine like a diamond. More than 1100 icons divided into 4 styles and several categories are ready as react components."}),Object($.jsxs)(kn,{children:["Icons are designed by"," ",Object($.jsx)("a",{className:"link",href:"https://dribbble.com/wodziczka",rel:"noreferrer",target:"_blank",children:"Daniel Wodziczka"}),"."]})]}),Object($.jsxs)(_n,{children:[Object($.jsx)("img",{className:"react01",src:An,alt:"react01"}),Object($.jsx)(Dn,{className:"rect01"}),Object($.jsx)("img",{className:"react02",src:Kn,alt:"react02"})]})]}),Object($.jsxs)(En,{ref:e,children:[Object($.jsxs)(Ln,{children:[Object($.jsx)(mn,{children:"Icon Pack Figma Plugin"}),Object($.jsx)(Yn,{className:"link-btn",IconRight:Pn.a,as:"a",href:"https://www.figma.com/community/plugin/977277388711779807/SWM-Icon-Pack",rel:"noopener",target:"_blank",children:"Check on Figma Community"}),Object($.jsx)(Yn,{className:"link-btn",IconRight:Pn.a,as:"a",href:"https://github.com/kamilagraf/figma-swm-icon-pack",rel:"noopener",target:"_blank",children:"Learn more on GitHub"}),Object($.jsxs)(kn,{children:["Thanks to Figma plugin, now everyone can browse and use"," ",Object($.jsx)("a",{className:"link",href:"https://www.figma.com/community/file/942053544758339202/SWM-Icon-Pack",rel:"noreferrer",target:"_blank",children:"SWM Icon Pack"})," ","within their Figma files and not waste time on importing it from somewhere else."]}),Object($.jsx)(kn,{children:"Everyone can find suitable icons by selecting proper style, searching by keywords or simply scrolling."})]}),Object($.jsxs)(_n,{children:[Object($.jsx)("img",{className:"figma01",src:Tn,alt:"figma01"}),Object($.jsx)(Dn,{className:"rect02"}),Object($.jsx)("img",{className:"figma02",src:Xn,alt:"figma02"})]})]}),Object($.jsxs)(En,{ref:t,children:[Object($.jsxs)(Ln,{children:[Object($.jsx)(mn,{children:"Icon Pack Web Browser"}),Object($.jsx)(Yn,{className:"link-btn",IconRight:Pn.a,as:"a",href:"https://kamilagraf.github.io/swm-icon-home/",rel:"noopener",target:"_blank",children:"Check live version"}),Object($.jsx)(Yn,{className:"link-btn",IconRight:Pn.a,as:"a",href:"https://github.com/kamilagraf/swm-icon-home",rel:"noopener",target:"_blank",children:"Learn more on GitHub"}),Object($.jsx)(kn,{children:"Web SWM Icon Pack Browser ready to make searching and selecting perfect icons for every situation enjoyable experience."}),Object($.jsx)(kn,{children:"It contains a filtering feature by styles and categories, downloading exact SVGs, and a reminder of how to render icons as react components."})]}),Object($.jsxs)(_n,{children:[Object($.jsx)("img",{className:"browser01",src:Zn,alt:"browser01"}),Object($.jsx)(Dn,{className:"rect03"}),Object($.jsx)("img",{className:"browser02",src:Jn,alt:"browser02"})]})]})]})},Qn=K.d.section(S||(S=Object(A.a)(["\n  position: relative;\n"]))),Un=K.d.div(R||(R=Object(A.a)(["\n  background-color: ",";\n  border-radius: 30px;\n  padding: 30px;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  h3,\n  p.caption {\n    width: 998px;\n  }\n\n  @media screen and (min-width: 768px) {\n    padding: 60px;\n  }\n\n  @media screen and (min-width: 1356px) {\n    padding: 80px;\n    z-index: 2;\n  }\n"])),(function(n){return n.theme.colors.black.ten})),$n=K.d.ul(B||(B=Object(A.a)(["\n  margin: 60px 0 0 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 34px;\n\n  @media screen and (min-width: 768px) {\n    gap: 32px;\n  }\n\n  @media screen and (min-width: 1356px) {\n    margin: 80px 0 0 0;\n    flex-direction: row;\n    gap: 64px;\n    align-self: flex-end;\n  }\n"]))),ne=K.d.li(H||(H=Object(A.a)(["\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: ",";\n    font-weight: ",";\n    font-size: 20px;\n    line-height: 30px;\n    transition: all 0.25s ease-in-out;\n\n    &:hover {\n      color: ",";\n      transform: translateY(-1px);\n\n      svg {\n        path {\n          stroke: ",";\n        }\n      }\n    }\n\n    @media screen and (min-width: 768px) {\n      font-size: 22px;\n      line-height: 34px;\n    }\n\n    @media screen and (min-width: 1356px) {\n      font-size: 24px;\n      line-height: 36px;\n    }\n  }\n\n  svg {\n    margin: 0 16px 0 0;\n  }\n"])),(function(n){return n.theme.colors.white.zero}),(function(n){return n.theme.fontWeight.medium}),(function(n){return n.theme.colors.white.twenty}),(function(n){return n.theme.colors.white.twenty})),ee=K.d.div(M||(M=Object(A.a)(["\n  display: none;\n\n  @media screen and (min-width: 768px) {\n    display: block;\n    width: 150px;\n    height: 150px;\n    position: relative;\n    align-self: flex-end;\n\n    img {\n      border-radius: 50%;\n    }\n  }\n\n  @media screen and (min-width: 1356px) {\n    position: absolute;\n    right: 40px;\n    top: 40px;\n  }\n"]))),te=K.d.div(E||(E=Object(A.a)(["\n  background-color: ",";\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: -10px;\n  right: 0;\n"])),(function(n){return n.theme.colors.limePrimary.zero})),ie=Object(K.d)(jn)(L||(L=Object(A.a)(["\n  @media screen and (min-width: 768px) {\n    width: 120px;\n    height: 80px;\n    position: absolute;\n    right: 0;\n    top: 40px;\n  }\n\n  @media screen and (min-width: 1356px) {\n    width: 196px;\n    height: 100px;\n    top: auto;\n    bottom: 50px;\n    z-index: 1;\n  }\n"]))),re=["title","titleId"];function ae(){return ae=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ae.apply(this,arguments)}function oe(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function ce(n,e){var t=n.title,i=n.titleId,r=oe(n,re);return D.createElement("svg",ae({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},r),t?D.createElement("title",{id:i},t):null,_||(_=D.createElement("path",{d:"M25.8573 25.8578H21.7086V19.3606C21.7086 17.8112 21.6809 15.8168 19.5508 15.8168C17.39 15.8168 17.0594 17.5048 17.0594 19.2478V25.8573H12.9107V12.4964H16.8935V14.3223H16.9492C17.7613 12.9338 19.2714 12.1044 20.8789 12.1641C25.0838 12.1641 25.8591 14.93 25.8591 18.5282L25.8573 25.8578ZM8.22957 10.6701C6.89991 10.6703 5.82182 9.5926 5.82158 8.26291C5.82134 6.93322 6.89905 5.85511 8.2287 5.85487C9.55836 5.85463 10.6365 6.93236 10.6367 8.26204C10.6368 8.90058 10.3833 9.51301 9.93184 9.96461C9.48042 10.4162 8.86809 10.67 8.22957 10.6701ZM10.3039 25.8578H6.15089V12.4964H10.3039V25.8578ZM27.9256 2.00209H4.06615C2.9385 1.98936 2.01376 2.89265 2 4.02031V27.9793C2.01329 29.1075 2.93796 30.0117 4.06615 29.9998H27.9256C29.0561 30.0139 29.9844 29.1097 30 27.9793V4.01858C29.9839 2.8887 29.0555 1.98546 27.9256 2.00018",fill:"white"})))}var se,le,de,me,he=D.forwardRef(ce),pe=(t.p,t.p+"static/media/avatar.67bd3dc6.jpg"),xe=t.p+"static/media/KamilaGraf_CV.1409ce16.pdf",ge=t(39),fe=t(40),be=t(41),ue=function(){var n=Object(D.useRef)(null);return Object(D.useEffect)((function(){un.reveal(n.current,fn)}),[]),Object($.jsxs)(Qn,{id:"contact",ref:n,children:[Object($.jsxs)(Un,{children:[Object($.jsx)(yn,{className:"green caption",children:"let\u2019s talk \ud83d\udcac\ufe0f"}),Object($.jsxs)(mn,{children:["Interested in working with me or got some questions? Hit me up by ",Object($.jsx)("span",{className:"green",children:"email"})," or my"," ",Object($.jsx)("span",{className:"green",children:"social media"}),"."]}),Object($.jsxs)($n,{children:[Object($.jsx)(ne,{children:Object($.jsxs)("a",{href:"https://www.linkedin.com/in/kamilagraf/","aria-label":"linkedin",target:"_blank",rel:"noreferrer",children:[Object($.jsx)(he,{}),"Chat on LinkedIn"]})}),Object($.jsx)(ne,{children:Object($.jsxs)("a",{href:"mailto:kam.graf0@gmail.com","aria-label":"email",target:"_blank",rel:"noreferrer",children:[Object($.jsx)(ge.a,{color:"#FFFFFF",size:"32px",strokeWidth:"2"}),"Send me an email"]})}),Object($.jsx)(ne,{children:Object($.jsxs)("a",{href:xe,download:!0,"aria-label":"cv",target:"_blank",rel:"noreferrer",children:[Object($.jsx)(fe.a,{color:"#FFFFFF",size:"32px",strokeWidth:"2"}),"Download my CV"]})})]}),Object($.jsxs)(ee,{children:[Object($.jsx)("img",{className:"avatarphoto",src:pe,alt:"Avatarphoto"}),Object($.jsx)(te,{children:Object($.jsx)(be.a,{color:"#050505",size:"40px",strokeWidth:"2"})})]})]}),Object($.jsx)(ie,{})]})},je=K.d.footer(se||(se=Object(A.a)(["\n  width: 100%;\n  height: 108px;\n  padding: 42px 0;\n"]))),we=K.d.div(le||(le=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n  }\n"]))),Oe=function(){return Object($.jsx)(je,{children:Object($.jsxs)(we,{children:[Object($.jsx)(en,{}),Object($.jsx)(kn,{isSmall:!0,children:"Have a nice day! \u2764\ufe0f"})]})})},ye=function(){return Object($.jsxs)(T,{children:[Object($.jsx)(rn,{}),Object($.jsxs)(X,{children:[Object($.jsx)(gn,{}),Object($.jsx)(Sn,{}),Object($.jsx)(Bn,{}),Object($.jsx)(qn,{}),Object($.jsx)(ue,{}),Object($.jsx)(Oe,{})]})]})},ke=(t(36),function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),a(n),o(n)}))}),ve=t(22),ze=Object(K.c)(de||(de=Object(A.a)(["\n  .fadeup-enter {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  .fadeup-enter-active {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: all 600ms cubic-bezier(0.645, 0.045, 0.355, 1);\n\n    &.mouse-btn {\n      transition-delay: 0.2s;\n    }\n  }\n\n  .fadedown-enter {\n    opacity: 0;\n    transform: translateY(-30px);\n  }\n  .fadedown-enter-active {\n    opacity: 1;\n    transform: translateY(0px);\n    transition: all 600ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n\n  .fade-enter {\n    opacity: 0;\n  }\n  .fade-enter-active {\n    opacity: 1;\n    transition: opacity 500ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n  .fade-exit {\n    opacity: 1;\n  }\n  .fade-exit-active {\n    opacity: 0;\n    transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n  }\n"]))),Ne=Object(K.b)(me||(me=Object(A.a)(["\n    html {\n        box-sizing: border-box;\n        width: 100%;\n        scroll-behavior: smooth;\n    }\n    *, *::after, *::before {\n        box-sizing: inherit;\n    }\n    body {\n        margin: 0;\n        padding: 0;\n        width: 100%;\n        min-height: 100%;\n        overflow-x: hidden;\n        background-color: ",";\n        color: ",";\n        font-family: 'DM Sans', sans-serif;\n\n    }\n    main {\n        margin: 0 auto;\n        width: 100%;\n        min-height: 100vh;\n        padding: 0 16px;\n\n\n        @media screen and (min-width: 768px) {\n            width: 736px;\n        }\n\n        @media screen and (min-width: 1356px) {\n        width: 1308px;\n        padding: 0 24px;\n        }\n    }\n    section {\n       margin: 0 auto;\n       padding: 60px 0;\n\n        @media screen and (min-width: 768px) {\n        padding: 80px 0;\n        }\n\n        @media screen and (min-width: 1356px) {\n\n        padding: 100px 0;\n        }\n\n    }\n    a, button {\n        font-family: 'DM Sans', sans-serif;\n    }\n\n    ",";\n\n"])),(function(n){return n.theme.colors.black.zero}),(function(n){return n.theme.colors.white.zero}),ze),Ie=function(n){var e=n.children;return Object($.jsx)(ve.a,{children:Object($.jsxs)(K.a,{theme:Nn,children:[Object($.jsx)(Ne,{}),e]})})};Y.a.render(Object($.jsx)(V.a.StrictMode,{children:Object($.jsx)(Ie,{children:Object($.jsx)(ye,{})})}),document.getElementById("root")),ke()}},[[37,1,2]]]);
//# sourceMappingURL=main.81405e58.chunk.js.map
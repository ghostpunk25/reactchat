"use strict";(self.webpackChunkreactchat=self.webpackChunkreactchat||[]).push([[372],{4116:function(n,e,t){t.r(e),t.d(e,{Catalog:function(){return rn}});var i=t(9439),r=t(4554),a=t(9164),o=t(6151),c=t(7569),l=t(2791),u=t(7689),s=t(1087),d=t(2111),f=t(2666),p=t(168),m=t(6934);var g=t.p+"static/media/blockBtn.9d71667d25870b78e854adfb936195f7.svg";var v,x,b=t.p+"static/media/chatBtn.cefc5f7e380bd759f247f3b40857492b.svg",h=(0,m.ZP)(o.Z)(v||(v=(0,p.Z)(["\nbackground-color:  ",";\npadding: 0px 12px 0px 30px;\nfont-weight: ",";\nfont-size: 13px;\nline-height: 16px;\nborder-radius: 100px;\ntext-transform: none;\ncolor:#fff;\nheight: 30px;\nposition: relative;\n&:hover{\n   background-color: #892a5f !important;\n}\n&:before{\n   content: '';\n   background: url(",");\n   width: 14px;\n   height: 13px;\n   position: absolute;\n   top:8px;\n   left:11px;\n}\n"])),(function(n){return n.theme.palette.colors.button}),(function(n){return n.theme.typography.fontWeights.extraBold}),b),w=(0,m.ZP)(o.Z)(x||(x=(0,p.Z)(["\nborder: 2px solid  ",";\npadding: 0px 10px 0px 26px;\n",";\nfont-size: 13px;\nline-height: 16px;\nborder-radius: 100px;\ntext-transform: none;\ncolor: ",";\nheight: 30px;\n&:hover{\n   background-color: #892a5f !important;\n}\n&:before{\n   content: '';\n   background: url(",");\n   width: 11px;\n   height: 11px;\n   position: absolute;\n   top:7px;\n   left:8px;\n}\n"])),(function(n){return n.theme.palette.colors.button}),(function(n){return n.theme.typography.fontWeights.extraBold}),(function(n){return n.theme.palette.colors.button}),g),Z=t(3433),y=t(7462),S=t(3366),k=t(8182),j=t(4419),O=t(1217);var G=t(3457),C=t(7078),_=t(418),E=t(8519),N=t(5080),P=t(4942);function B(n){return n?"Level".concat(n):""}function L(n){return n.unstable_level>0&&n.container}function W(n){return function(e){return"var(--Grid-".concat(e,"Spacing").concat(B(n.unstable_level),")")}}function q(n){return function(e){return 0===n.unstable_level?"var(--Grid-".concat(e,"Spacing)"):"var(--Grid-".concat(e,"Spacing").concat(B(n.unstable_level-1),")")}}function R(n){return 0===n.unstable_level?"var(--Grid-columns)":"var(--Grid-columns".concat(B(n.unstable_level-1),")")}var A=function(n,e,t){var i,r,a=n.keys[0];if(Array.isArray(e))e.forEach((function(e,i){t((function(e,t){i<=n.keys.length-1&&(0===i?Object.assign(e,t):e[n.up(n.keys[i])]=t)}),e)}));else if(e&&"object"===typeof e){(Object.keys(e).length>n.keys.length?n.keys:(i=n.keys,r=Object.keys(e),i.filter((function(n){return r.includes(n)})))).forEach((function(i){if(-1!==n.keys.indexOf(i)){var r=e[i];void 0!==r&&t((function(e,t){a===i?Object.assign(e,t):e[n.up(i)]=t}),r)}}))}else"number"!==typeof e&&"string"!==typeof e||t((function(n,e){Object.assign(n,e)}),e)},D=function(n){var e=n.theme,t=n.ownerState,i=W(t),r={};return A(e.breakpoints,t.gridSize,(function(n,e){var a={};!0===e&&(a={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===e&&(a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"===typeof e&&(a={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(e," / ").concat(R(t)).concat(L(t)?" + ".concat(i("column")):"",")")}),n(r,a)})),r},z=function(n){var e=n.theme,t=n.ownerState,i={};return A(e.breakpoints,t.gridOffset,(function(n,e){var r={};"auto"===e&&(r={marginLeft:"auto"}),"number"===typeof e&&(r={marginLeft:0===e?"0px":"calc(100% * ".concat(e," / ").concat(R(t),")")}),n(i,r)})),i},M=function(n){var e=n.theme,t=n.ownerState;if(!t.container)return{};var i=L(t)?(0,P.Z)({},"--Grid-columns".concat(B(t.unstable_level)),R(t)):{"--Grid-columns":12};return A(e.breakpoints,t.columns,(function(n,e){n(i,(0,P.Z)({},"--Grid-columns".concat(B(t.unstable_level)),e))})),i},T=function(n){var e=n.theme,t=n.ownerState;if(!t.container)return{};var i=q(t),r=L(t)?(0,P.Z)({},"--Grid-rowSpacing".concat(B(t.unstable_level)),i("row")):{};return A(e.breakpoints,t.rowSpacing,(function(n,i){var a;n(r,(0,P.Z)({},"--Grid-rowSpacing".concat(B(t.unstable_level)),"string"===typeof i?i:null==(a=e.spacing)?void 0:a.call(e,i)))})),r},H=function(n){var e=n.theme,t=n.ownerState;if(!t.container)return{};var i=q(t),r=L(t)?(0,P.Z)({},"--Grid-columnSpacing".concat(B(t.unstable_level)),i("column")):{};return A(e.breakpoints,t.columnSpacing,(function(n,i){var a;n(r,(0,P.Z)({},"--Grid-columnSpacing".concat(B(t.unstable_level)),"string"===typeof i?i:null==(a=e.spacing)?void 0:a.call(e,i)))})),r},I=function(n){var e=n.theme,t=n.ownerState;if(!t.container)return{};var i={};return A(e.breakpoints,t.direction,(function(n,e){n(i,{flexDirection:e})})),i},V=function(n){var e=n.ownerState,t=W(e),i=q(e);return(0,y.Z)({minWidth:0,boxSizing:"border-box"},e.container&&(0,y.Z)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:"calc(".concat(t("row")," / -2) calc(").concat(t("column")," / -2)")},e.disableEqualOverflow&&{margin:"calc(".concat(t("row")," * -1) 0px 0px calc(").concat(t("column")," * -1)")}),(!e.container||L(e))&&(0,y.Z)({padding:"calc(".concat(i("row")," / 2) calc(").concat(i("column")," / 2)")},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:"".concat(i("row")," 0px 0px ").concat(i("column"))}))},J=function(n){var e=[];return Object.entries(n).forEach((function(n){var t=(0,i.Z)(n,2),r=t[0],a=t[1];!1!==a&&void 0!==a&&e.push("grid-".concat(r,"-").concat(String(a)))})),e},Q=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xs";function t(n){return void 0!==n&&("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n&&n>0)}if(t(n))return["spacing-".concat(e,"-").concat(String(n))];if("object"===typeof n&&!Array.isArray(n)){var r=[];return Object.entries(n).forEach((function(n){var e=(0,i.Z)(n,2),a=e[0],o=e[1];t(o)&&r.push("spacing-".concat(a,"-").concat(String(o)))})),r}return[]},U=function(n){return void 0===n?[]:"object"===typeof n?Object.entries(n).map((function(n){var e=(0,i.Z)(n,2),t=e[0],r=e[1];return"direction-".concat(t,"-").concat(r)})):["direction-xs-".concat(String(n))]},F=t(184),K=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],X=(0,N.Z)(),Y=(0,G.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){return e.root}});function $(n){return(0,C.Z)({props:n,name:"MuiGrid",defaultTheme:X})}var nn=t(1402),en=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.createStyledComponent,t=void 0===e?Y:e,r=n.useThemeProps,a=void 0===r?$:r,o=n.componentName,c=void 0===o?"MuiGrid":o,u=l.createContext(void 0),s=t(M,H,T,D,I,V,z),d=l.forwardRef((function(n,e){var t,r,o,d,f,p,m,g,v=(0,_.Z)(),x=a(n),b=(0,E.Z)(x),h=l.useContext(u),w=b.className,G=b.children,C=b.columns,N=void 0===C?12:C,P=b.container,B=void 0!==P&&P,L=b.component,W=void 0===L?"div":L,q=b.direction,R=void 0===q?"row":q,A=b.wrap,D=void 0===A?"wrap":A,z=b.spacing,M=void 0===z?0:z,T=b.rowSpacing,H=void 0===T?M:T,I=b.columnSpacing,V=void 0===I?M:I,X=b.disableEqualOverflow,Y=b.unstable_level,$=void 0===Y?0:Y,nn=(0,S.Z)(b,K),en=X;$&&void 0!==X&&(en=n.disableEqualOverflow);var tn={},rn={},an={};Object.entries(nn).forEach((function(n){var e=(0,i.Z)(n,2),t=e[0],r=e[1];void 0!==v.breakpoints.values[t]?tn[t]=r:void 0!==v.breakpoints.values[t.replace("Offset","")]?rn[t.replace("Offset","")]=r:an[t]=r}));var on=null!=(t=n.columns)?t:$?void 0:N,cn=null!=(r=n.spacing)?r:$?void 0:M,ln=null!=(o=null!=(d=n.rowSpacing)?d:n.spacing)?o:$?void 0:H,un=null!=(f=null!=(p=n.columnSpacing)?p:n.spacing)?f:$?void 0:V,sn=(0,y.Z)({},b,{level:$,columns:on,container:B,direction:R,wrap:D,spacing:cn,rowSpacing:ln,columnSpacing:un,gridSize:tn,gridOffset:rn,disableEqualOverflow:null!=(m=null!=(g=en)?g:h)&&m,parentDisableEqualOverflow:h}),dn=function(n,e){var t=n.container,i=n.direction,r=n.spacing,a=n.wrap,o=n.gridSize,l={root:["root",t&&"container","wrap"!==a&&"wrap-xs-".concat(String(a))].concat((0,Z.Z)(U(i)),(0,Z.Z)(J(o)),(0,Z.Z)(t?Q(r,e.breakpoints.keys[0]):[]))};return(0,j.Z)(l,(function(n){return(0,O.Z)(c,n)}),{})}(sn,v),fn=(0,F.jsx)(s,(0,y.Z)({ref:e,as:W,ownerState:sn,className:(0,k.Z)(dn.root,w)},an,{children:l.Children.map(G,(function(n){var e,t,i;return l.isValidElement(n)&&(t=n,i=["Grid"],l.isValidElement(t)&&-1!==i.indexOf(t.type.muiName))?l.cloneElement(n,{unstable_level:null!=(e=n.props.unstable_level)?e:$+1}):n}))}));return void 0!==en&&en!==(null!=h&&h)&&(fn=(0,F.jsx)(u.Provider,{value:en,children:fn})),fn}));return d.muiName="Grid",d}({createStyledComponent:(0,m.ZP)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:function(n,e){return e.root}}),componentName:"MuiGrid2",useThemeProps:function(n){return(0,nn.Z)({props:n,name:"MuiGrid2"})}}),tn=en,rn=function(){var n=(0,l.useState)(!1),e=(0,i.Z)(n,2),t=e[0],p=e[1],m=(0,l.useState)(null),g=(0,i.Z)(m,2),v=g[0],x=g[1],b=(0,l.useContext)(f.D),Z=(0,u.s0)();(0,l.useEffect)((function(){b.getBackLink("/"),0===b.profilesList.length&&(window.localStorage.setItem("user",JSON.stringify(b.user)),(0,d.D)().then(b.getProfilesList))}),[]);return(0,F.jsxs)(r.Z,{sx:{pb:"24px"},children:[(0,F.jsx)(a.Z,{maxWidth:"sm",sx:{px:"18px"},children:(0,F.jsx)(tn,{container:!0,sx:{rowGap:"30px"},children:b.profilesList.map((function(n){var e=n.id,t=n.img,i=n.gender,a=n.name,c=n.online;return(0,F.jsxs)(tn,{xs:6,sx:{display:"flex",flexDirection:"column",alignItems:"center",p:"0px"},children:[(0,F.jsx)(r.Z,{children:(0,F.jsx)(o.Z,{onClick:function(){return n={img:t,id:e,name:a,online:c},void b.getProfileChat(n);var n},children:(0,F.jsx)(s.rU,{to:"".concat(e),children:(0,F.jsx)(r.Z,{component:"img",sx:{borderTopLeftRadius:"20px",borderTopRightRadius:"20px",maxWidth:"100%"},src:t,alt:i})})})}),(0,F.jsxs)(r.Z,{sx:{display:"flex",gap:"10px",width:"150px",justifyContent:"space-between",alignItems:"center","@media (max-width: 350px)":{flexWrap:"wrap-reverse",justifyContent:"center"}},children:[(0,F.jsx)(w,{onClick:function(){return function(n){p(!0),x(n)}(e)},children:"Block"}),(0,F.jsx)(h,{onClick:function(){return n={img:t,id:e,name:a,online:c},b.getProfileChat(n),b.getBackLink("/chatslist"),void Z("/chat");var n},children:"Chat"})]})]},e)}))})}),(0,F.jsx)(c.u,{modalOpen:t,handleClose:function(n){p(n)},profileBlock:function(){b.blockProfilesList(v),p(!1)}})]})}},2111:function(n,e,t){t.d(e,{D:function(){return r},Q:function(){return a}});var i=[{id:1,img:t.p+"static/media/girl-1.369ec5e646bbe091573c.jpg",gender:"famale",online:!0,name:"Hanna"},{id:2,img:t.p+"static/media/girl-2.338cec474ac210834f16.jpg",gender:"famale",online:!0,name:"Candy"},{id:3,img:t.p+"static/media/girl-3.c7b5c0ec04e6e3549aaa.jpg",gender:"famale",online:!1,name:"Angelila_23"},{id:4,img:t.p+"static/media/girl-4.f06b364f2def401cd49d.jpg",gender:"famale",online:!1,name:"Candy"},{id:5,img:t.p+"static/media/girl-5.9d6701737472229b2ce2.jpg",gender:"famale",online:!0,name:"Angelila_23"},{id:6,img:t.p+"static/media/girl-6.faa10fa8269696c99b0d.jpg",gender:"famale",online:!1,name:"Hanna"},{id:7,img:t.p+"static/media/girl-7.de81aeded5aabe263a04.jpg",gender:"famale",online:!1,name:"Candy"},{id:8,img:t.p+"static/media/girl-8.4011c47da5525081ddff.jpg",gender:"famale",online:!1,name:"Angelila_23"},{id:9,img:t.p+"static/media/girl-9.8dc4589c8e28efe79457.jpg",gender:"famale",online:!0,name:"Hanna"},{id:10,img:t.p+"static/media/girl-10.58522f4577ef9aea5140.jpg",gender:"famale",online:!0,name:"Candy"}],r=function(){return Promise.resolve(i)},a=function(n){return Promise.resolve(i.find((function(e){return e.id===n})))}}}]);
//# sourceMappingURL=372.f2b66e57.chunk.js.map
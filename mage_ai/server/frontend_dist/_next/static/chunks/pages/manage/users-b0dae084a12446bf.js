(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1911],{94629:function(e,n,t){"use strict";t.d(n,{Z:function(){return _}});var r=t(82394),i=t(21831),o=t(82684),u=t(50724),c=t(82555),l=t(97618),s=t(70613),a=t(59696),d=t(68899),f=t(28598);function p(e,n){var t=e.children;return(0,f.jsx)(d.HS,{ref:n,children:t})}var h=o.forwardRef(p),m=t(62547),b=t(82571),v=t(35686),g=t(98464),y=t(46684),w=t(70515),j=t(53808),O=t(19183);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var _=function(e){var n,t=e.addProjectBreadcrumbToCustomBreadcrumbs,r=e.after,p=e.afterHidden,S=e.afterWidth,_=e.afterWidthOverride,P=e.before,Z=e.beforeWidth,N=e.breadcrumbs,I=e.children,E=e.errors,C=e.headerMenuItems,k=e.headerOffset,H=e.mainContainerHeader,z=e.navigationItems,A=e.setErrors,M=e.subheaderChildren,R=e.title,D=e.uuid,W=(0,O.i)().width,B="dashboard_after_width_".concat(D),F="dashboard_before_width_".concat(D),T=(0,o.useRef)(null),U=(0,o.useState)(_?S:(0,j.U2)(B,S)),L=U[0],X=U[1],K=(0,o.useState)(!1),G=K[0],Q=K[1],V=(0,o.useState)(P?Math.max((0,j.U2)(F,Z),13*w.iI):null),J=V[0],Y=V[1],q=(0,o.useState)(!1),$=q[0],ee=q[1],ne=(0,o.useState)(null)[1],te=v.ZP.projects.list({},{revalidateOnFocus:!1}).data,re=null===te||void 0===te?void 0:te.projects,ie={label:function(){var e;return null===re||void 0===re||null===(e=re[0])||void 0===e?void 0:e.name},linkProps:{href:"/"}},oe=[];N?(t&&oe.push(ie),oe.push.apply(oe,(0,i.Z)(N))):(null===re||void 0===re?void 0:re.length)>=1&&oe.push.apply(oe,[ie,{bold:!0,label:function(){return R}}]),(0,o.useEffect)((function(){null===T||void 0===T||!T.current||G||$||null===ne||void 0===ne||ne(T.current.getBoundingClientRect().width)}),[G,L,$,J,T,ne,W]),(0,o.useEffect)((function(){G||(0,j.t8)(B,L)}),[p,G,L,B]),(0,o.useEffect)((function(){$||(0,j.t8)(F,J)}),[$,J,F]);var ue=(0,g.Z)(S);return(0,o.useEffect)((function(){_&&ue!==S&&X(S)}),[_,S,ue]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Z,{title:R}),(0,f.jsx)(a.Z,{breadcrumbs:oe,menuItems:C,project:null===re||void 0===re?void 0:re[0],version:null===re||void 0===re||null===(n=re[0])||void 0===n?void 0:n.version}),(0,f.jsxs)(d.Nk,{children:[0!==(null===z||void 0===z?void 0:z.length)&&(0,f.jsx)(d.lm,{showMore:!0,children:(0,f.jsx)(b.Z,{navigationItems:z,showMore:!0})}),(0,f.jsx)(l.Z,{flex:1,flexDirection:"column",children:(0,f.jsxs)(m.Z,{after:r,afterHeightOffset:y.Mz,afterHidden:p,afterMousedownActive:G,afterWidth:L,before:P,beforeHeightOffset:y.Mz,beforeMousedownActive:$,beforeWidth:d.k1+(P?J:0),headerOffset:k,hideAfterCompletely:!0,leftOffset:P?d.k1:null,mainContainerHeader:H,mainContainerRef:T,setAfterMousedownActive:Q,setAfterWidth:X,setBeforeMousedownActive:ee,setBeforeWidth:Y,children:[M&&(0,f.jsx)(h,{children:M}),I]})})]}),E&&(0,f.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===A||void 0===A?void 0:A(null)},children:(0,f.jsx)(c.Z,x(x({},E),{},{onClose:function(){return null===A||void 0===A?void 0:A(null)}}))})]})}},75083:function(e,n,t){"use strict";t.d(n,{HF:function(){return u},L6:function(){return r}});var r,i=t(82359),o=t(72473);function u(e,n,t){var u=e.owner,c=(e.roles,[{Icon:o.Vz,id:r.WORKSPACES,isSelected:function(){return r.WORKSPACES===t},label:function(){return"Workspaces"},linkProps:{href:"/manage"}}]);return u&&c.push({Icon:o.NO,id:r.USERS,isSelected:function(){return r.USERS===t},label:function(){return"Users"},linkProps:{href:"/manage/users"}}),n==i.k.MAIN&&c.push({Icon:o.Zr,id:r.SETTINGS,isSelected:function(){return r.SETTINGS===t},label:function(){return"Settings"},linkProps:{href:"/manage/settings"}}),c}!function(e){e.WORKSPACES="workspaces",e.USERS="users",e.SETTINGS="settings"}(r||(r={}))},59533:function(e,n,t){"use strict";var r=t(82684),i=t(94629),o=t(35686),u=t(70515),c=t(75083),l=t(50178),s=t(28598);n.Z=function(e){var n=e.before,t=e.breadcrumbs,a=void 0===t?[]:t,d=e.children,f=e.errors,p=e.pageName,h=e.subheaderChildren,m=o.ZP.statuses.list().data,b=(0,r.useMemo)((function(){var e,n;return null===m||void 0===m||null===(e=m.statuses)||void 0===e||null===(n=e[0])||void 0===n?void 0:n.project_type}),[m]),v=(0,l.PR)()||{};return(0,s.jsx)(i.Z,{before:n,beforeWidth:n?50*u.iI:0,breadcrumbs:a,errors:f,navigationItems:(0,c.HF)(v,b,p),subheaderChildren:h,title:"Workspaces",uuid:"workspaces/index",children:d})}},82359:function(e,n,t){"use strict";var r,i;t.d(n,{d:function(){return r},k:function(){return i}}),function(e){e.ADD_NEW_BLOCK_V2="add_new_block_v2",e.LOCAL_TIMEZONE="display_local_timezone"}(r||(r={})),function(e){e.MAIN="main",e.STANDALONE="standalone",e.SUB="sub"}(i||(i={}))},85854:function(e,n,t){"use strict";var r,i,o,u,c,l,s,a,d=t(82394),f=t(26304),p=t(26653),h=t(38626),m=t(33591),b=t(44897),v=t(95363),g=t(61896),y=t(30160),w=t(70515),j=t(38276),O=t(28598),S=["children","condensed","inline","level","marketing","spacingBelow"];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){(0,d.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var P=(0,h.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],y.IH,(function(e){return e.color&&"\n    color: ".concat(e.color,"\n  ")}),(function(e){return e.yellow&&"\n    color: ".concat((e.theme.accent||b.Z.accent).yellow,";\n  ")}),(function(e){return e.center&&"\n    text-align: center;\n  "}),(function(e){return!e.monospace&&0===Number(e.weightStyle)&&"\n    font-family: ".concat(v.iI,";\n  ")}),(function(e){return!e.monospace&&1===Number(e.weightStyle)&&"\n    font-family: ".concat(v.LX,";\n  ")}),(function(e){return!e.monospace&&2===Number(e.weightStyle)&&"\n    font-family: ".concat(v.LX,";\n  ")}),(function(e){return!e.monospace&&3===Number(e.weightStyle)&&"\n    font-family: ".concat(v.ry,";\n  ")}),(function(e){return!e.monospace&&4===Number(e.weightStyle)&&"\n    font-family: ".concat(v.YC,";\n  ")}),(function(e){return!e.monospace&&5===Number(e.weightStyle)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(e){return!e.monospace&&(6===Number(e.weightStyle)||e.bold)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(e){return!e.monospace&&7===Number(e.weightStyle)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(e){return!e.monospace&&8===Number(e.weightStyle)&&"\n    font-family: ".concat(v.nF,";\n  ")}),(function(e){return e.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),Z=h.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(e){return"\n    color: ".concat((e.theme.content||b.Z.content).active,";\n  ")})),N=h.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],P,m.media.md(r||(r=(0,p.Z)(["\n    ","\n  "])),g.aQ),m.media.lg(i||(i=(0,p.Z)(["\n    ","\n  "])),g.aQ),m.media.xl(o||(o=(0,p.Z)(["\n    ","\n  "])),g.aQ)),I=h.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],P,g.MJ),E=h.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],P,m.media.xs(u||(u=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),m.media.sm(c||(c=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),m.media.md(l||(l=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),m.media.lg(s||(s=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI),m.media.xl(a||(a=(0,p.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*w.iI,7*w.iI)),C=h.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],P,g.BL),k=h.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],P),H=h.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],P),z=h.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],P),A=h.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],P,(function(e){return 1===e.level&&"\n    ".concat(g.MJ,"\n  ")}),(function(e){return 2===e.level&&"\n    ".concat(g.BL,"\n  ")}),(function(e){return 3===e.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(e){return 4===e.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),M=function(e){var n,t=e.children,r=e.condensed,i=e.inline,o=e.level,u=e.marketing,c=e.spacingBelow,l=(0,f.Z)(e,S);i?n=A:0===Number(o)?n=N:1===Number(o)?n=u?E:I:2===Number(o)?n=C:3===Number(o)?n=k:4===Number(o)?n=H:5===Number(o)&&(n=z);var s=(0,O.jsxs)(n,_(_({},l),{},{level:o,children:[c&&(0,O.jsx)(j.Z,{mb:r?2:3,children:t}),!c&&t]}));return i?s:(0,O.jsx)(Z,{children:s})};M.defaultProps={level:3,weightStyle:6},n.Z=M},12222:function(e,n,t){"use strict";t.r(n);var r=t(77837),i=t(82394),o=t(38860),u=t.n(o),c=t(82684),l=t(34376),s=t(71180),a=t(85854),d=t(93808),f=t(38276),p=t(75499),h=t(30160),m=t(59533),b=t(35686),v=t(98464),g=t(72473),y=t(70515),w=t(75083),j=t(72619),O=t(50178),S=t(42122),x=t(69419),_=t(28598);function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(){var e=(0,l.useRouter)(),n=(0,c.useState)(null),t=n[0],r=n[1],i=((0,O.PR)()||{}).owner,o=(0,c.useState)(null),u=o[0],d=o[1],P=b.ZP.users.list({},{revalidateOnFocus:!1}),N=P.data;P.mutate;(0,c.useEffect)((function(){(0,j.bB)(N,r)}),[N]);var I=(0,c.useMemo)((function(){return(null===N||void 0===N?void 0:N.users)||[]}),[null===N||void 0===N?void 0:N.users]),E=b.ZP.users.detail(null===u||void 0===u?void 0:u.user_id,{},{revalidateOnFocus:!1}),C=E.data;E.mutate;(0,c.useEffect)((function(){(0,j.bB)(C,r)}),[C]);var k=null===C||void 0===C?void 0:C.user,H=(0,x.iV)(),z=(0,v.Z)(H);return(0,c.useEffect)((function(){var e=H.add_new_user,n=H.user_id;if(!(0,S.Xy)(H,z)){var t=Z(Z({},z),H);n?t.user_id=n:delete t.user_id,e?t.add_new_user=e:delete t.add_new_user,d(t)}}),[H,z]),(0,_.jsxs)(m.Z,{breadcrumbs:[{label:function(){return"Workspaces"},linkProps:{as:"/manage",href:"/manage"}},{bold:!0,label:function(){return"Users"}}],errors:t,pageName:w.L6.USERS,children:[i&&(0,_.jsx)(f.Z,{p:y.cd,children:(0,_.jsx)(s.Z,{beforeIcon:(0,_.jsx)(g.mm,{}),onClick:function(){return e.push("/manage/users/new")},primary:!0,children:"Add new user"})}),(0,_.jsx)(f.Z,{p:y.cd,children:(0,_.jsx)(a.Z,{children:"Users"})}),(0,_.jsx)(p.Z,{columnFlex:[1,1,1],columns:[{uuid:"Username"},{uuid:"Email"},{uuid:"Role"}],isSelectedRow:function(e){var n;return(null===(n=I[e])||void 0===n?void 0:n.id)===(null===k||void 0===k?void 0:k.id)},onClickRow:function(n){var t,r=null===(t=I[n])||void 0===t?void 0:t.id;e.push("/manage/users/[user]","/manage/users/".concat(r))},rows:I.map((function(e){var n=e.email,t=e.roles_display,r=e.roles_new,i=e.username;return[(0,_.jsx)(h.ZP,{bold:!0,children:i},"username"),(0,_.jsx)(h.ZP,{default:!0,children:n},"email"),(0,_.jsx)(h.ZP,{default:!0,children:r&&r[0]?r[0].name:t},"roles")]})),uuid:"pipeline-runs"})]})}N.getInitialProps=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,d.Z)(N)},72695:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/users",function(){return t(12222)}])}},function(e){e.O(0,[844,9902,6358,9696,8264,5499,9774,2888,179],(function(){return n=72695,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
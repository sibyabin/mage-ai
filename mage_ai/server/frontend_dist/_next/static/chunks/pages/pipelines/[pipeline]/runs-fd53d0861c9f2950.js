(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[244],{66757:function(e,n,t){"use strict";var i=t(19319),r=t(94178),u=t(67240),o="localStorage"in t.g&&t.g.localStorage?t.g.localStorage:i;function c(e,n){return 1===arguments.length?s(e):l(e,n)}function s(e){const n=o.getItem(e);return r(n)}function l(e,n){try{return o.setItem(e,JSON.stringify(n)),!0}catch(t){return!1}}c.set=l,c.get=s,c.remove=function(e){return o.removeItem(e)},c.clear=function(){return o.clear()},c.backend=function(e){return e&&(o=e),o},c.on=u.on,c.off=u.off,e.exports=c},94178:function(e){"use strict";e.exports=function(e){const n=function(e){try{return JSON.parse(e)}catch(n){return e}}(e);return void 0===n?null:n}},19319:function(e){"use strict";var n={};e.exports={getItem:function(e){return e in n?n[e]:null},setItem:function(e,t){return n[e]=t,!0},removeItem:function(e){return!!(e in n)&&delete n[e]},clear:function(){return n={},!0}}},67240:function(e,n,t){"use strict";var i=t(94178),r={};function u(e){e||(e=t.g.event);var n=r[e.key];n&&n.forEach((function(n){n(i(e.newValue),i(e.oldValue),e.url||e.uri)}))}e.exports={on:function(e,n){r[e]?r[e].push(n):r[e]=[n],t.g.addEventListener?t.g.addEventListener("storage",u,!1):t.g.attachEvent?t.g.attachEvent("onstorage",u):t.g.onstorage=u},off:function(e,n){var t=r[e];t.length>1?t.splice(t.indexOf(n),1):r[e]=[]}}},59739:function(e,n,t){"use strict";var i=t(56669);function r(){}function u(){}u.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,u,o){if(o!==i){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:u,resetWarningCache:r};return t.PropTypes=t,t}},47329:function(e,n,t){e.exports=t(59739)()},56669:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},27125:function(e,n,t){"use strict";var i=t(82684),r=t(12691),u=t.n(r),o=t(34376),c=t.n(o),s=t(46313),l=t(66050),a=t(60328),d=t(16634),p=t(10919),f=t(98781),v=t(86673),h=t(17903),g=t(19711),b=t(10503),m=t(49125),x=t(44162),j=t(24224),y=t(28598);n.Z=function(e){var n=e.blockRuns,t=e.onClickRow,r=e.pipeline,o=e.selectedRun,_=(0,i.useContext)(s.ThemeContext),Z=(r||{}).uuid,O=(0,i.useMemo)((function(){return r.blocks||[]}),[r]),w=(0,i.useMemo)((function(){return(0,j.HK)(O,(function(e){return e.uuid}))}),[O]);return(0,y.jsx)(h.Z,{columnFlex:[null,1,3,2,null,null],columns:[{uuid:"Date"},{uuid:"Status"},{uuid:"Trigger"},{uuid:"Block"},{uuid:"Completed"},{uuid:"Logs"}],isSelectedRow:function(e){return n[e].id===(null===o||void 0===o?void 0:o.id)},onClickRow:t,rows:null===n||void 0===n?void 0:n.map((function(e){var n,t,i=e.block_uuid,o=e.completed_at,s=e.created_at,h=e.id,j=e.pipeline_schedule_id,O=e.pipeline_schedule_name,k=e.status,C=i;if(f.q.INTEGRATION===r.type){var P=C.split(":");C=P[0],t=P[1]}return[(0,y.jsx)(g.ZP,{monospace:!0,default:!0,children:s}),(0,y.jsx)(g.ZP,{danger:l.V.FAILED===k,default:l.V.CANCELLED===k,info:l.V.INITIAL===k,monospace:!0,success:l.V.COMPLETED===k,warning:l.V.RUNNING===k,children:k}),(0,y.jsx)(u(),{as:"/pipelines/".concat(Z,"/triggers/").concat(j),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,y.jsx)(p.Z,{bold:!0,sameColorAsText:!0,children:O})}),(0,y.jsx)(u(),{as:"/pipelines/".concat(Z,"/edit?block_uuid=").concat(C),href:"/pipelines/[pipeline]/edit",passHref:!0,children:(0,y.jsxs)(p.Z,{bold:!0,sameColorAsText:!0,verticalAlignContent:!0,children:[(0,y.jsx)(d.Z,{color:(0,x.qn)(null===(n=w[C])||void 0===n?void 0:n.type,{theme:_}).accent,size:1.5*m.iI,square:!0}),(0,y.jsx)(v.Z,{mr:1}),(0,y.jsxs)(g.ZP,{monospace:!0,children:[C,t&&": ",t&&(0,y.jsx)(g.ZP,{default:!0,inline:!0,monospace:!0,children:t})]})]})}),(0,y.jsx)(g.ZP,{monospace:!0,default:!0,children:o||"-"}),(0,y.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return c().push("/pipelines/".concat(Z,"/logs?block_run_id[]=").concat(h))},children:(0,y.jsx)(b.B4,{default:!0,size:2*m.iI})})]})),uuid:"block-runs"})}},56681:function(e,n,t){"use strict";t.d(n,{G:function(){return j},Z:function(){return y}});var i=t(12757),r=t(82394),u=t(26304),o=t(1583),c=t(22673),s=t(86532),l=t(86673),a=t(19711),d=t(17903),p=t(49125),f=t(19395),v=t(28598),h=["height","heightOffset","pipeline","selectedRun","selectedTab","setSelectedTab"];function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m={uuid:"Run details"},x={uuid:"Dependency tree"},j=[x,m];function y(e){var n=e.height,t=e.heightOffset,r=e.pipeline,g=e.selectedRun,y=e.selectedTab,_=e.setSelectedTab,Z=b({},(0,u.Z)(e,h));g?Z.blockStatus=(0,f.IJ)(null===g||void 0===g?void 0:g.block_runs):Z.noStatus=!0;var O=null===g||void 0===g?void 0:g.variables,w=[];O&&JSON.stringify(O,null,2).split("\n").forEach((function(e){w.push("    ".concat(e))}));var k=g&&[["Run ID",null===g||void 0===g?void 0:g.id],["Variables",(0,v.jsx)(c.Z,{language:"json",small:!0,source:w.join("\n")})]],C=g&&(0,v.jsx)(l.Z,{pb:p.cd,px:p.cd,children:(0,v.jsx)(d.Z,{alignTop:!0,columnFlex:[null,1],columnMaxWidth:function(e){return 1===e?"100px":null},rows:k.map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return[(0,v.jsx)(a.ZP,{monospace:!0,muted:!0,children:t}),(0,v.jsx)(a.ZP,{monospace:!0,textOverflow:!0,children:r})]})),uuid:"LogDetail"})}),P=y&&_;return(0,v.jsxs)(v.Fragment,{children:[P&&(0,v.jsx)(l.Z,{py:p.cd,children:(0,v.jsx)(o.Z,{onClickTab:_,selectedTabUUID:null===y||void 0===y?void 0:y.uuid,tabs:j})}),(!P||x.uuid===(null===y||void 0===y?void 0:y.uuid))&&(0,v.jsx)(s.Z,b(b({},Z),{},{height:n,heightOffset:(t||0)+(P?76:0),pipeline:r})),m.uuid===(null===y||void 0===y?void 0:y.uuid)&&C]})}},22673:function(e,n,t){"use strict";var i=t(82684),r=t(73199),u=t.n(r),o=t(71735),c=t(46313),s=t(65292),l=t(23831),a=t(2005),d=t(49125),p=t(28598);n.Z=function(e){var n=e.language,t=e.maxWidth,r=e.showLineNumbers,f=e.small,v=e.source,h=e.wrapLines,g=(0,i.useContext)(c.ThemeContext);return(0,p.jsx)(u(),{source:v,renderers:{code:function(e){var i=e.value;return(0,p.jsx)(o.Z,{customStyle:{backgroundColor:(g.background||l.Z.background).popup,border:"none",borderRadius:"none",boxShadow:"none",fontFamily:a.Vp,fontSize:f?12:14,marginBottom:0,marginTop:0,paddingBottom:2*d.iI,paddingTop:2*d.iI,maxWidth:t},lineNumberStyle:{color:(g.content||l.Z.content).muted},language:n,showLineNumbers:r,style:s._4,useInlineStyles:!0,wrapLines:h,children:i})}}})}},1583:function(e,n,t){"use strict";var i=t(82684),r=t(60328),u=t(67971),o=t(882),c=t(86673),s=t(99994),l=t(49125),a=t(28598);n.Z=function(e){var n=e.contained,t=e.onClickTab,d=e.selectedTabUUID,p=e.tabs,f=(0,i.useMemo)((function(){var e=p.length,n=[];return p.forEach((function(i,p){var f=i.Icon,v=i.IconSelected,h=i.label,g=i.uuid,b=g===d,m=b&&v||f,x=h?h():g,j=(0,a.jsxs)(u.Z,{alignItems:"center",children:[m&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{default:!b,size:2*l.iI}),(0,a.jsx)(c.Z,{mr:1})]}),x]});p>=1&&e>=2&&n.push((0,a.jsx)("div",{style:{marginLeft:1.5*l.iI}},"spacing-".concat(g))),b?n.push((0,a.jsx)(o.Z,{backgroundGradient:s.yr,backgroundPanel:!0,borderLess:!0,borderWidth:2,onClick:function(){return t(i)},paddingUnitsHorizontal:2,paddingUnitsVertical:1.25,children:j},g)):n.push((0,a.jsx)("div",{style:{padding:4},children:(0,a.jsx)(r.Z,{borderLess:!0,default:!0,onClick:function(){return t(i)},outline:!0,children:j},"button-tab-".concat(g))}))})),n}),[t,d,p]),v=(0,a.jsx)(u.Z,{alignItems:"center",children:f});return n?v:(0,a.jsx)("div",{style:{paddingLeft:l.cd*l.iI,paddingRight:l.cd*l.iI},children:v})}},21135:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return U}});var i=t(77837),r=t(82394),u=t(38860),o=t.n(u),c=t(82684),s=t(34376),l=t(28598);var a=function(e){var n=e.size;return(0,l.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5 8.5H15.5V3.5H20.5V8.5ZM14 9V3C14 2.44772 14.4477 2 15 2H21C21.5523 2 22 2.44772 22 3V9C22 9.55229 21.5523 10 21 10H15C14.4477 10 14 9.55229 14 9ZM2 5V12.5V14V21.5C2 22.0523 2.44772 22.5 3 22.5H10.5H12H19.5C20.0523 22.5 20.5 22.0523 20.5 21.5V13.5C20.5 12.9477 20.0523 12.5 19.5 12.5H12V5C12 4.44772 11.5523 4 11 4H3C2.44772 4 2 4.44772 2 5ZM10.5 14V21H3.5V14H10.5ZM19 14V21H12V14H19ZM10.5 5.5V12.5H3.5V5.5H10.5Z",fill:"url(#paint0_linear_2842_55048)"}),(0,l.jsx)("defs",{children:(0,l.jsxs)("linearGradient",{id:"paint0_linear_2842_55048",x1:"2",y1:"12.25",x2:"22",y2:"12.25",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{offset:"0.28125",stopColor:"#7D55EC"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]})})]})},d=t(27125),p=t(1583),f=t(67971),v=t(46313),h=t(23831),g=v.default.div.withConfig({displayName:"PageSectionHeader",componentId:"sc-1wznrcv-0"})(["left:0;position:sticky;top:0;width:100%;z-index:2;",""],(function(e){return"\n    background-color: ".concat(e.backgroundColor||(e.theme.background||h.Z.background).page,";\n    border-bottom: 1px solid ").concat((e.theme.borders||h.Z.borders).medium,";\n  ")})),b=t(51099),m=t(38965);var x=function(e){var n=e.size;return(0,l.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("g",{"clip-path":"url(#clip0_3007_70027)",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.75 6.6859C1.75 3.95988 3.95988 1.75 6.6859 1.75h.98788c-.23022.41608-.36128.89466-.36128 1.40385s.13106.98777.36128 1.40384h-.71224c-1.32761 0-2.40385 1.07624-2.40385 2.40385 0 1.32761 1.07624 2.40385 2.40385 2.40385H15.609c3.3916 0 6.141 2.74941 6.141 6.14101 0 3.3916-2.7494 6.141-6.141 6.141H9.55584c.23019-.416.36123-.8946.36123-1.4037 0-.5092-.13108-.9879-.36134-1.404H15.609c1.8409 0 3.3333-1.4923 3.3333-3.3333 0-1.8409-1.4924-3.3333-3.3333-3.3333H6.96154C4.08329 12.1731 1.75 9.83979 1.75 6.96154V6.6859zM10.2163.25H6.6859C3.13145.25.25 3.13145.25 6.6859v.27564c0 3.70666 3.00486 6.71156 6.71154 6.71156H15.609c1.0125 0 1.8333.8208 1.8333 1.8333s-.8208 1.8333-1.8333 1.8333H7.01282c-1.60375 0-2.90385 1.3001-2.90385 2.9039 0 1.3248.88713 2.4423 2.09974 2.7911.06039.0173.12158.0328.18352.0463.20007.0436.40785.0665.62099.0665l.02449-.0001H15.609c4.22 0 7.641-3.421 7.641-7.641 0-4.22-3.421-7.64101-7.641-7.64101H6.96154c-.49918 0-.90385-.40467-.90385-.90385 0-.49918.40467-.90385.90385-.90385h3.25636c1.6038 0 2.9039-1.30009 2.9039-2.90384 0-1.60375-1.3001-2.903849-2.9039-2.90385h-.0016zm0 4.30769c-.77528 0-1.4038-.62852-1.4038-1.40384 0-.77505.62808-1.4034 1.403-1.40385h.0017c.7749.00045 1.403.6288 1.403 1.40385 0 .77532-.6285 1.40384-1.4039 1.40384zM7.01282 21.6474c-.10108 0-.19967-.0106-.29469-.0309-.03025-.0065-.06014-.0139-.08963-.0223-.58829-.1673-1.01912-.7086-1.01912-1.3505 0-.7753.62852-1.4039 1.40384-1.4039s1.40385.6286 1.40385 1.4039c0 .7696-.61935 1.3946-1.38683 1.4037h-.01742z",fill:"url(#paint0_linear_3007_70027)"})}),(0,l.jsxs)("defs",{children:[(0,l.jsxs)("linearGradient",{id:"paint0_linear_3007_70027",x1:"11.75",y1:".250001",x2:"11.75",y2:"23.1475",gradientUnits:"userSpaceOnUse",children:[(0,l.jsx)("stop",{offset:".28125",stopColor:"#7D55EC"}),(0,l.jsx)("stop",{offset:"1",stopColor:"#2AB2FE"})]}),(0,l.jsx)("clipPath",{id:"clip0_3007_70027",children:(0,l.jsx)("path",{fill:"#fff",transform:"matrix(0 1 1 0 0 0)",d:"M0 0h24v24H0z"})})]})]})},j=t(47409),y=t(97496),_=t(55378),Z=t(86673),O=t(41374),w=t(56681),k=t(66166),C=t(10503),P=t(59920),I=t(66050),S=t(49125),R=t(33766),T=t(7715),E=t(59e3);function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var M={Icon:C.mR,IconSelected:x,label:function(){return"Pipeline runs"},uuid:"pipeline_runs"},N={Icon:C.Re,IconSelected:a,label:function(){return"Block runs"},uuid:"block_runs"},D=[M,N];function L(e){var n=e.pipeline,t=(0,s.useRouter)(),i=(0,c.useState)(M),r=i[0],u=i[1],o=(0,c.useState)(w.G[0]),a=o[0],v=o[1],h=(0,c.useState)(null),x=h[0],C=h[1],H=n.uuid,L=O.ZP.pipelines.detail(H).data,U=(0,c.useMemo)((function(){return V(V({},null===L||void 0===L?void 0:L.pipeline),{},{uuid:H})}),[L,H]),z=O.ZP.block_runs.list((0,T.gR)(x,["tab"]),{},{pauseFetch:!x}).data,A=(0,c.useMemo)((function(){return(null===z||void 0===z?void 0:z.block_runs)||[]}),[z]),B=(0,c.useState)(),F=B[0],G=B[1],W=(0,E.iV)(),q=(0,k.Z)(W);(0,c.useEffect)((function(){var e=W.pipeline_run_id,n=W.status;if(!(0,T.Xy)(W,q)){var t=V(V({},q),W);e?t.pipeline_run_id=e:t.pipeline_uuid=H,n?t.status=n:delete t.status,C(t)}}),[H,W,q]);var J={_limit:30,_offset:30*(null!==W&&void 0!==W&&W.page?W.page:0),pipeline_uuid:H};null!==W&&void 0!==W&&W.status&&(J.status=W.status);var X=O.ZP.pipeline_runs.list(J),K=X.data,Y=X.mutate,Q=(0,c.useMemo)((function(){return(null===K||void 0===K?void 0:K.pipeline_runs)||[]}),[K]),$=(0,c.useMemo)((function(){return(null===K||void 0===K?void 0:K.total_count)||[]}),[K]),ee=(0,k.Z)(r);(0,c.useEffect)((function(){var e=W.tab;e&&u(D.find((function(n){return n.uuid===e})))}),[W,r,ee]);var ne=(0,c.useMemo)((function(){var e=null!==W&&void 0!==W&&W.page?W.page:0;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.Z,{fetchPipelineRuns:Y,onClickRow:function(e){return G((function(n){var t=Q[e];return(null===n||void 0===n?void 0:n.id)!==t.id?t:null}))},pipelineRuns:Q,selectedRun:F}),(0,l.jsx)(Z.Z,{p:2,children:(0,l.jsx)(b.Z,{maxPages:9,onUpdate:function(e){var n=Number(e),i=V(V({},W),{},{page:n>=0?n:0});t.push("/pipelines/[pipeline]/runs","/pipelines/".concat(H,"/runs?").concat((0,E.uM)(i)))},page:Number(e),totalPages:Math.ceil($/30)})})]})}),[Y,U,Q,W,F,$]),te=(0,c.useMemo)((function(){return(0,l.jsx)(d.Z,{blockRuns:A,pipeline:U})}),[A,U]);return(0,l.jsxs)(m.Z,{afterHidden:M.uuid===(null===r||void 0===r?void 0:r.uuid)&&!F,breadcrumbs:[{label:function(){return"Runs"}}],buildSidekick:M.uuid===(null===r||void 0===r?void 0:r.uuid)?function(e){return(0,w.Z)(V(V({},e),{},{selectedRun:F,selectedTab:a,setSelectedTab:v}))}:function(e){return(0,w.Z)(e)},pageName:P.M.RUNS,pipeline:U,title:function(e){var n=e.name;return"".concat(n," runs")},uuid:"".concat(P.M.RUNS,"_").concat(H),children:[(0,l.jsx)(g,{children:(0,l.jsx)(Z.Z,{py:1,children:(0,l.jsxs)(f.Z,{alignItems:"center",children:[(0,l.jsx)(p.Z,{onClickTab:function(e){var n=e.uuid;C(null),(0,R.u)({tab:n},{replaceParams:!0})},selectedTabUUID:null===r||void 0===r?void 0:r.uuid,tabs:D}),M.uuid===(null===r||void 0===r?void 0:r.uuid)&&(0,l.jsxs)(_.Z,{compact:!0,defaultColor:!0,onChange:function(e){e.preventDefault(),"all"===e.target.value?(C(null),(0,R.u)({tab:M.uuid},{replaceParams:!0})):(0,R.u)({page:0,status:e.target.value})},paddingRight:4*S.iI,placeholder:"Select run status",value:null===x||void 0===x?void 0:x.status,children:[(0,l.jsx)("option",{value:"all",children:"All statuses"},"all_statuses"),Object.values(I.V).map((function(e){return(0,l.jsx)("option",{value:e,children:j.D[e]},e)}))]})]})})}),M.uuid===(null===r||void 0===r?void 0:r.uuid)&&ne,N.uuid===(null===r||void 0===r?void 0:r.uuid)&&te]})}L.getInitialProps=function(){var e=(0,i.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.query.pipeline,e.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();var U=L},66166:function(e,n,t){"use strict";var i=t(82684);n.Z=function(e){var n=(0,i.useRef)();return(0,i.useEffect)((function(){n.current=e}),[e]),n.current}},79897:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/runs",function(){return t(21135)}])}},function(e){e.O(0,[4259,2212,7689,1774,4804,7619,1374,5763,6792,9898,8965,5703,4846,9774,2888,179],(function(){return n=79897,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
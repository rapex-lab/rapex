(self.webpackChunkrapex_studio=self.webpackChunkrapex_studio||[]).push([[137],{64335:function(se,W,s){"use strict";var k=s(67294),X=(0,k.createContext)({});W.Z=X},21349:function(se,W,s){"use strict";var k=s(84305),X=s(88182),E=s(94184),A=s.n(E),w=s(67294),q=s(64335),_=s(53645),ce=s.n(_),Y=function(R){var U=(0,w.useContext)(q.Z),ee=R.children,n=R.contentWidth,D=R.className,V=R.style,J=(0,w.useContext)(X.ZP.ConfigContext),te=J.getPrefixCls,j=R.prefixCls||te("pro"),re=n||U.contentWidth,H="".concat(j,"-grid-content");return w.createElement("div",{className:A()(H,D,{wide:re==="Fixed"}),style:V},w.createElement("div",{className:"".concat(j,"-grid-content-children")},ee))};W.Z=Y},70844:function(se,W,s){"use strict";s.d(W,{ZP:function(){return Mt}});var k=s(38663),X=s(70883),E=s(22122),A=s(96156),w=s(6610),q=s(5991),_=s(10379),ce=s(54070),Y=s(90484),de=s(94184),R=s.n(de),U=s(48717),ee=s(98423),n=s(67294),D=s(53124),V=s(85061),J=s(75164);function te(o){var e,r=function(i){return function(){e=null,o.apply(void 0,(0,V.Z)(i))}},t=function(){if(e==null){for(var i=arguments.length,c=new Array(i),d=0;d<i;d++)c[d]=arguments[d];e=(0,J.Z)(r(c))}};return t.cancel=function(){J.Z.cancel(e),e=null},t}function j(){return function(e,r,t){var a=t.value,i=!1;return{configurable:!0,get:function(){if(i||this===e.prototype||this.hasOwnProperty(r))return a;var d=te(a.bind(this));return i=!0,Object.defineProperty(this,r,{value:d,configurable:!0,writable:!0}),i=!1,d}}}}var re=s(64019);function H(o){return o!==window?o.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function fe(o,e,r){if(r!==void 0&&e.top>o.top-r)return r+e.top}function ue(o,e,r){if(r!==void 0&&e.bottom<o.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var ve=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],I=[];function Gt(){return I}function me(o,e){if(!!o){var r=I.find(function(t){return t.target===o});r?r.affixList.push(e):(r={target:o,affixList:[e],eventHandlers:{}},I.push(r),ve.forEach(function(t){r.eventHandlers[t]=(0,re.Z)(o,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function he(o){var e=I.find(function(r){var t=r.affixList.some(function(a){return a===o});return t&&(r.affixList=r.affixList.filter(function(a){return a!==o})),t});e&&e.affixList.length===0&&(I=I.filter(function(r){return r!==e}),ve.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var ge=function(o,e,r,t){var a=arguments.length,i=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,c;if((typeof Reflect=="undefined"?"undefined":(0,Y.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,r,t);else for(var d=o.length-1;d>=0;d--)(c=o[d])&&(i=(a<3?c(i):a>3?c(e,r,i):c(e,r))||i);return a>3&&i&&Object.defineProperty(e,r,i),i};function Fe(){return typeof window!="undefined"?window:null}var z;(function(o){o[o.None=0]="None",o[o.Prepare=1]="Prepare"})(z||(z={}));var Q=function(o){(0,_.Z)(r,o);var e=(0,ce.Z)(r);function r(){var t;return(0,w.Z)(this,r),t=e.apply(this,arguments),t.state={status:z.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props,i=a.offsetBottom,c=a.offsetTop;return i===void 0&&c===void 0?0:c},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,i=a.status,c=a.lastAffix,d=t.props.onChange,u=t.getTargetFunc();if(!(i!==z.Prepare||!t.fixedNode||!t.placeholderNode||!u)){var v=t.getOffsetTop(),m=t.getOffsetBottom(),h=u();if(!!h){var l={status:z.None},C=H(h),f=H(t.placeholderNode),g=fe(f,C,v),P=ue(f,C,m);f.top===0&&f.left===0&&f.width===0&&f.height===0||(g!==void 0?(l.affixStyle={position:"fixed",top:g,width:f.width,height:f.height},l.placeholderStyle={width:f.width,height:f.height}):P!==void 0&&(l.affixStyle={position:"fixed",bottom:P,width:f.width,height:f.height},l.placeholderStyle={width:f.width,height:f.height}),l.lastAffix=!!l.affixStyle,d&&c!==l.lastAffix&&d(l.lastAffix),t.setState(l))}}},t.prepareMeasure=function(){if(t.setState({status:z.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var a},t}return(0,q.Z)(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,i=this.props.target;return i!==void 0?i:a!=null?a:Fe}},{key:"componentDidMount",value:function(){var a=this,i=this.getTargetFunc();i&&(this.timeout=setTimeout(function(){me(i(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var i=this.state.prevTarget,c=this.getTargetFunc(),d=(c==null?void 0:c())||null;i!==d&&(he(this),d&&(me(d,this),this.updatePosition()),this.setState({prevTarget:d})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),he(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),i=this.state.affixStyle;if(a&&i){var c=this.getOffsetTop(),d=this.getOffsetBottom(),u=a();if(u&&this.placeholderNode){var v=H(u),m=H(this.placeholderNode),h=fe(m,v,c),l=ue(m,v,d);if(h!==void 0&&i.top===h||l!==void 0&&i.bottom===l)return}}this.prepareMeasure()}},{key:"render",value:function(){var a=this,i=this.state,c=i.affixStyle,d=i.placeholderStyle,u=this.props,v=u.affixPrefixCls,m=u.children,h=R()((0,A.Z)({},v,!!c)),l=(0,ee.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls"]);return n.createElement(U.Z,{onResize:function(){a.updatePosition()}},n.createElement("div",(0,E.Z)({},l,{ref:this.savePlaceholderNode}),c&&n.createElement("div",{style:d,"aria-hidden":"true"}),n.createElement("div",{className:h,ref:this.saveFixedNode,style:c},n.createElement(U.Z,{onResize:function(){a.updatePosition()}},m))))}}]),r}(n.Component);Q.contextType=D.E_,ge([j()],Q.prototype,"updatePosition",null),ge([j()],Q.prototype,"lazyUpdatePosition",null);var Le=n.forwardRef(function(o,e){var r=o.prefixCls,t=n.useContext(D.E_),a=t.getPrefixCls,i=a("affix",r),c=(0,E.Z)((0,E.Z)({},o),{affixPrefixCls:i});return n.createElement(Q,(0,E.Z)({},c,{ref:e}))}),we=Le,Xt=s(84305),ae=s(88182),Yt=s(59903),Vt=s(94233),Jt=s(81262),Qt=s(59250),kt=s(30887),qt=s(49111),xe=s(28481),y=s(28991),He={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Ie=He,Ce=s(27029),be=function(e,r){return n.createElement(Ce.Z,(0,y.Z)((0,y.Z)({},e),{},{ref:r,icon:Ie}))};be.displayName="ArrowLeftOutlined";var ze=n.forwardRef(be),$e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},We=$e,Pe=function(e,r){return n.createElement(Ce.Z,(0,y.Z)((0,y.Z)({},e),{},{ref:r,icon:We}))};Pe.displayName="ArrowRightOutlined";var Ue=n.forwardRef(Pe),je=s(30470),Ke=s(51890),Ge=s(50344),Xe=s(28682),Ye=s(96159),Ve=s(57254),Je=s(81555),Qe=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(o);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(o,t[a])&&(r[t[a]]=o[t[a]]);return r},ye=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,i=e.children,c=e.menu,d=e.overlay,u=e.dropdownProps,v=Qe(e,["prefixCls","separator","children","menu","overlay","dropdownProps"]),m=n.useContext(D.E_),h=m.getPrefixCls,l=h("breadcrumb",r),C=function(P){return c||d?n.createElement(Je.Z,(0,E.Z)({menu:c,overlay:d,placement:"bottom"},u),n.createElement("span",{className:"".concat(l,"-overlay-link")},P,n.createElement(Ve.Z,null))):P},f;return"href"in v?f=n.createElement("a",(0,E.Z)({className:"".concat(l,"-link")},v),i):f=n.createElement("span",(0,E.Z)({className:"".concat(l,"-link")},v),i),f=C(f),i!=null?n.createElement("li",null,f,a&&n.createElement("span",{className:"".concat(l,"-separator")},a)):null};ye.__ANT_BREADCRUMB_ITEM=!0;var Ee=ye,pe=function(e){var r=e.children,t=n.useContext(D.E_),a=t.getPrefixCls,i=a("breadcrumb");return n.createElement("span",{className:"".concat(i,"-separator")},r||"/")};pe.__ANT_BREADCRUMB_SEPARATOR=!0;var ke=pe,qe=function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(o);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(o,t[a])&&(r[t[a]]=o[t[a]]);return r};function _e(o,e){if(!o.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=o.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,i){return e[i]||a});return t}function et(o,e,r,t){var a=r.indexOf(o)===r.length-1,i=_e(o,e);return a?n.createElement("span",null,i):n.createElement("a",{href:"#/".concat(t.join("/"))},i)}var Ne=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},tt=function(e,r,t){var a=(0,V.Z)(e),i=Ne(r||"",t);return i&&a.push(i),a},ne=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,i=e.style,c=e.className,d=e.routes,u=e.children,v=e.itemRender,m=v===void 0?et:v,h=e.params,l=h===void 0?{}:h,C=qe(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),f=n.useContext(D.E_),g=f.getPrefixCls,P=f.direction,x,p=g("breadcrumb",r);if(d&&d.length>0){var N=[];x=d.map(function(b){var O=Ne(b.path,l);O&&N.push(O);var T;b.children&&b.children.length&&(T=n.createElement(Xe.Z,{items:b.children.map(function(B){return{key:B.path||B.breadcrumbName,label:m(B,l,d,tt(N,B.path,l))}})}));var M={separator:a};return T&&(M.overlay=T),n.createElement(Ee,(0,E.Z)({},M,{key:O||b.breadcrumbName}),m(b,l,d,N))})}else u&&(x=(0,Ge.Z)(u).map(function(b,O){return b&&(0,Ye.Tm)(b,{separator:a,key:O})}));var S=R()(p,(0,A.Z)({},"".concat(p,"-rtl"),P==="rtl"),c);return n.createElement("nav",(0,E.Z)({className:S,style:i},C),n.createElement("ol",null,x))};ne.Item=Ee,ne.Separator=ke;var rt=ne,at=rt,nt=s(42051),ot=s(19650),it=s(34952),lt=function(e,r,t){return!r||!t?null:n.createElement(nt.Z,{componentName:"PageHeader"},function(a){return n.createElement("div",{className:"".concat(e,"-back")},n.createElement(it.Z,{onClick:function(c){t==null||t(c)},className:"".concat(e,"-back-button"),"aria-label":a.back},r))})},st=function(e){return n.createElement(at,(0,E.Z)({},e))},ct=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?n.createElement(Ue,null):n.createElement(ze,null)},dt=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,i=r.avatar,c=r.subTitle,d=r.tags,u=r.extra,v=r.onBack,m="".concat(e,"-heading"),h=a||c||d||u;if(!h)return null;var l=ct(r,t),C=lt(e,l,v),f=C||i||h;return n.createElement("div",{className:m},f&&n.createElement("div",{className:"".concat(m,"-left")},C,i&&n.createElement(Ke.C,(0,E.Z)({},i)),a&&n.createElement("span",{className:"".concat(m,"-title"),title:typeof a=="string"?a:void 0},a),c&&n.createElement("span",{className:"".concat(m,"-sub-title"),title:typeof c=="string"?c:void 0},c),d&&n.createElement("span",{className:"".concat(m,"-tags")},d)),u&&n.createElement("span",{className:"".concat(m,"-extra")},n.createElement(ot.Z,null,u)))},ft=function(e,r){return r?n.createElement("div",{className:"".concat(e,"-footer")},r):null},ut=function(e,r){return n.createElement("div",{className:"".concat(e,"-content")},r)},vt=function(e){var r=(0,je.Z)(!1),t=(0,xe.Z)(r,2),a=t[0],i=t[1],c=function(u){var v=u.width;i(v<768,!0)};return n.createElement(D.C,null,function(d){var u,v=d.getPrefixCls,m=d.pageHeader,h=d.direction,l,C=e.prefixCls,f=e.style,g=e.footer,P=e.children,x=e.breadcrumb,p=e.breadcrumbRender,N=e.className,S=!0;"ghost"in e?S=e.ghost:m&&"ghost"in m&&(S=m.ghost);var b=v("page-header",C),O=function(){return(x==null?void 0:x.routes)?st(x):null},T=O(),M=x&&"props"in x,B=(l=p==null?void 0:p(e,T))!==null&&l!==void 0?l:T,Z=M?x:B,$=R()(b,N,(u={"has-breadcrumb":!!Z,"has-footer":!!g},(0,A.Z)(u,"".concat(b,"-ghost"),S),(0,A.Z)(u,"".concat(b,"-rtl"),h==="rtl"),(0,A.Z)(u,"".concat(b,"-compact"),a),u));return n.createElement(U.Z,{onResize:c},n.createElement("div",{className:$,style:f},Z,dt(b,e,h),P&&ut(b,P),ft(b,g)))})},mt=vt,oe=s(81253),_t=s(18106),Ze=s(38222),ie=s(64335),ht=s(97435),er=s(56264),gt=["children","className","extra","style","renderContent"],xt=function(e){var r=e.children,t=e.className,a=e.extra,i=e.style,c=e.renderContent,d=(0,oe.Z)(e,gt),u=(0,n.useContext)(ae.ZP.ConfigContext),v=u.getPrefixCls,m=e.prefixCls||v("pro"),h="".concat(m,"-footer-bar"),l=(0,n.useContext)(ie.Z),C=(0,n.useMemo)(function(){var g=l.hasSiderMenu,P=l.isMobile,x=l.siderWidth;if(!!g)return x?P?"100%":"calc(100% - ".concat(x,"px)"):"100%"},[l.collapsed,l.hasSiderMenu,l.isMobile,l.siderWidth]),f=n.createElement(n.Fragment,null,n.createElement("div",{className:"".concat(h,"-left")},a),n.createElement("div",{className:"".concat(h,"-right")},r));return(0,n.useEffect)(function(){return!l||!(l==null?void 0:l.setHasFooterToolbar)?function(){}:(l==null||l.setHasFooterToolbar(!0),function(){var g;l==null||(g=l.setHasFooterToolbar)===null||g===void 0||g.call(l,!1)})},[]),n.createElement("div",(0,E.Z)({className:R()(t,"".concat(h)),style:(0,y.Z)({width:C},i)},(0,ht.Z)(d,["prefixCls"])),c?c((0,y.Z)((0,y.Z)((0,y.Z)({},e),l),{},{leftWidth:C}),f):f)},Ct=xt,bt=s(21349),Pt=s(83832),yt=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},Et=function(e){var r=e.children,t=e.style,a=e.className,i=e.markStyle,c=e.markClassName,d=e.zIndex,u=d===void 0?9:d,v=e.gapX,m=v===void 0?212:v,h=e.gapY,l=h===void 0?222:h,C=e.width,f=C===void 0?120:C,g=e.height,P=g===void 0?64:g,x=e.rotate,p=x===void 0?-22:x,N=e.image,S=e.content,b=e.offsetLeft,O=e.offsetTop,T=e.fontStyle,M=T===void 0?"normal":T,B=e.fontWeight,Z=B===void 0?"normal":B,$=e.fontColor,le=$===void 0?"rgba(0,0,0,.15)":$,Re=e.fontSize,Te=Re===void 0?16:Re,Oe=e.fontFamily,Be=Oe===void 0?"sans-serif":Oe,At=e.prefixCls,Dt=(0,n.useContext)(ae.ZP.ConfigContext),Ft=Dt.getPrefixCls,Se=Ft("pro-layout-watermark",At),Lt=R()("".concat(Se,"-wrapper"),a),wt=R()(Se,c),Ht=(0,n.useState)(""),Me=(0,xe.Z)(Ht,2),It=Me[0],Ae=Me[1];return(0,n.useEffect)(function(){var K=document.createElement("canvas"),F=K.getContext("2d"),L=yt(F),zt="".concat((m+f)*L,"px"),$t="".concat((l+P)*L,"px"),Wt=b||m/2,Ut=O||l/2;if(K.setAttribute("width",zt),K.setAttribute("height",$t),F){F.translate(Wt*L,Ut*L),F.rotate(Math.PI/180*Number(p));var jt=f*L,De=P*L;if(N){var G=new Image;G.crossOrigin="anonymous",G.referrerPolicy="no-referrer",G.src=N,G.onload=function(){F.drawImage(G,0,0,jt,De),Ae(K.toDataURL())}}else if(S){var Kt=Number(Te)*L;F.font="".concat(M," normal ").concat(Z," ").concat(Kt,"px/").concat(De,"px ").concat(Be),F.fillStyle=le,F.fillText(S,0,0),Ae(K.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[m,l,b,O,p,M,Z,f,P,Be,le,N,S,Te]),n.createElement("div",{style:(0,y.Z)({position:"relative"},t),className:Lt},r,n.createElement("div",{className:wt,style:(0,y.Z)({zIndex:u,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(m+f,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(It,"')")},i)}))},pt=Et,tr=s(12395),Nt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Zt=["children","loading","className","style","footer","affixProps","ghost","fixedHeader","breadcrumbRender"];function Rt(o){return(0,Y.Z)(o)==="object"?o:{spinning:o}}var Tt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,i=e.tabBarExtraContent,c=e.tabProps,d=e.prefixedClassName;return Array.isArray(r)||i?n.createElement(Ze.Z,(0,E.Z)({className:"".concat(d,"-tabs"),activeKey:t,onChange:function(v){a&&a(v)},tabBarExtraContent:i},c),r==null?void 0:r.map(function(u,v){return n.createElement(Ze.Z.TabPane,(0,E.Z)({},u,{tab:u.tab,key:u.key||v}))})):null},Ot=function(e,r,t){return!e&&!r?null:n.createElement("div",{className:"".concat(t,"-detail")},n.createElement("div",{className:"".concat(t,"-main")},n.createElement("div",{className:"".concat(t,"-row")},e&&n.createElement("div",{className:"".concat(t,"-content")},e),r&&n.createElement("div",{className:"".concat(t,"-extraContent")},r))))},rr=function(e){var r=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,_extends({},r==null?void 0:r.breadcrumb,r==null?void 0:r.breadcrumbProps,e)))},Bt=function(e){var r,t=(0,n.useContext)(ie.Z),a=e.title,i=e.content,c=e.pageHeaderRender,d=e.header,u=e.prefixedClassName,v=e.extraContent,m=e.style,h=e.prefixCls,l=e.breadcrumbRender,C=(0,oe.Z)(e,Nt),f=(0,n.useMemo)(function(){if(!!l)return l},[l]);if(c===!1)return null;if(c)return n.createElement(n.Fragment,null," ",c((0,y.Z)((0,y.Z)({},e),t)));var g=a;!a&&a!==!1&&(g=t.title);var P=(0,y.Z)((0,y.Z)((0,y.Z)({},t),{},{title:g},C),{},{footer:Tt((0,y.Z)((0,y.Z)({},C),{},{breadcrumbRender:l,prefixedClassName:u}))},d),x=P.breadcrumb,p=(!x||!(x==null?void 0:x.itemRender)&&!(x==null||(r=x.routes)===null||r===void 0?void 0:r.length))&&!l;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(N){return!P[N]})&&p&&!i&&!v?null:n.createElement("div",{className:"".concat(u,"-warp")},n.createElement(mt,(0,E.Z)({},P,{breadcrumb:l===!1?void 0:(0,y.Z)((0,y.Z)({},P.breadcrumb),t.breadcrumbProps),breadcrumbRender:f,prefixCls:h}),(d==null?void 0:d.children)||Ot(i,v,u)))},St=function(e){var r,t,a=e.children,i=e.loading,c=i===void 0?!1:i,d=e.className,u=e.style,v=e.footer,m=e.affixProps,h=e.ghost,l=e.fixedHeader,C=e.breadcrumbRender,f=(0,oe.Z)(e,Zt),g=(0,n.useContext)(ie.Z),P=(0,n.useContext)(ae.ZP.ConfigContext),x=P.getPrefixCls,p=e.prefixCls||x("pro"),N="".concat(p,"-page-container"),S=R()(N,d,(r={},(0,A.Z)(r,"".concat(p,"-page-container-ghost"),h),(0,A.Z)(r,"".concat(p,"-page-container-with-footer"),v),r)),b=(0,n.useMemo)(function(){return a?n.createElement(n.Fragment,null,n.createElement("div",{className:"".concat(N,"-children-content")},a),g.hasFooterToolbar&&n.createElement("div",{style:{height:48,marginTop:24}})):null},[a,N,g.hasFooterToolbar]),O=(0,n.useMemo)(function(){var Z;return C==!1?!1:C||(f==null||(Z=f.header)===null||Z===void 0?void 0:Z.breadcrumbRender)},[C,f==null||(t=f.header)===null||t===void 0?void 0:t.breadcrumbRender]),T=n.createElement(Bt,(0,E.Z)({},f,{breadcrumbRender:O,ghost:h,prefixCls:void 0,prefixedClassName:N})),M=(0,n.useMemo)(function(){if(n.isValidElement(c))return c;if(typeof c=="boolean"&&!c)return null;var Z=Rt(c);return n.createElement(Pt.Z,Z)},[c]),B=(0,n.useMemo)(function(){var Z=M||b;if(e.waterMarkProps||g.waterMarkProps){var $=(0,y.Z)((0,y.Z)({},g.waterMarkProps),e.waterMarkProps);return n.createElement(pt,$,Z)}return Z},[e.waterMarkProps,g.waterMarkProps,M,b]);return n.createElement("div",{style:u,className:S},l&&T?n.createElement(we,(0,E.Z)({offsetTop:g.hasHeader&&g.fixedHeader?g.headerHeight:0},m),T):T,B&&n.createElement(bt.Z,null,B),v&&n.createElement(Ct,{prefixCls:p},v))},Mt=St},56264:function(){},53645:function(){},12395:function(){},70883:function(){},81262:function(){},59903:function(){}}]);

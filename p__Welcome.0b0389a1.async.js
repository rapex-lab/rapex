(self.webpackChunkrapex_studio=self.webpackChunkrapex_studio||[]).push([[185],{98361:function(z,C,e){"use strict";var v=e(13254),m=e(14277),D=e(2824),M=e(43358),A=e(34041),c=e(96486),w=e.n(c),E=e(67294),h=e(85893),i=A.Z.Option,u,d;function s(r,a,o){console.log("makeQueryStr filter: ",o);var g=":select [:*]",n="",O="";if(a){var y=Object.keys(a)[0],R=Object.values(a)[0];y&&R&&(R==="ascend"?n=":order-by [:".concat(y,"]"):n=":order-by [[:".concat(y," :desc]]"))}if(r){for(var j=[],W=0,t=Object.keys(r);W<t.length;W++){var P=t[W];["current","pageSize"].indexOf(P)<0&&r[P].length>0&&j.push("[:like [:upper :".concat(P,'] [:upper "%').concat(r[P],'%"]]'))}j.length==1?O=":where ".concat(j[0]):j.length>1&&(O=":where [:or ".concat(j.join(" "),"]"))}return"{".concat(g," ").concat(n," ").concat(O,"}")}var x=function(a){var o=a.queryGenes,g=a.initialValue,n=(0,E.useState)([]),O=(0,D.Z)(n,2),y=O[0],R=O[1],j=(0,E.useState)([]),W=(0,D.Z)(j,2),t=W[0],P=W[1],F=(0,E.useState)(),B=(0,D.Z)(F,2),L=B[0],T=B[1];(0,E.useEffect)(function(){g&&g!==L&&(T(g),f(g,function(U){P(U),N(g,{})}))},[g]);var f=function(l,k){u&&(clearTimeout(u),u=null),d=l;var S=function(){o({query_str:s({gene_symbol:l,ensembl_id:l,entrez_id:l},{},{})}).then(function(Z){if(d===l){var K=Z.data,Y=K.map(function(b){return{value:b.ensembl_id,text:"".concat(b.gene_symbol," | ").concat(b.entrez_id," | ").concat(b.ensembl_id)}});k(Y),R(K)}}).catch(function(Z){console.log("requestDEGs Error: ",Z),k([])})};u=setTimeout(S,300)},G=function(l){l?f(l,P):P([])},N=function(l,k){if(T(l),console.log("GeneSearcher handleChange: ",l),l&&typeof l=="string"){var S,H=(0,c.filter)(y,function(K){return l.match(/ENS/i)?K.ensembl_id==l:l.match(/[a-zA-Z][a-zA-Z0-9]+/i)?K.gene_symbol==l:l.match(/[0-9]+/i)?K.entrez_id.toString()==l:!1});console.log("handleChange(GeneSearcher): ",H,y),(S=a.onChange)===null||S===void 0||S.call(a,l,H[0])}else{var Z;(Z=a.onChange)===null||Z===void 0||Z.call(a,l,void 0)}},X=t.map(function(U){return(0,h.jsx)(i,{children:U.text},U.value)});return(0,h.jsx)(A.Z,{allowClear:!0,showSearch:!0,value:L,placeholder:a==null?void 0:a.placeholder,style:a.style,defaultActiveFirstOption:!1,showArrow:!0,filterOption:!1,onSearch:G,onChange:N,mode:a!=null&&a.mode?a==null?void 0:a.mode:"single",notFoundContent:(0,h.jsx)(m.Z,{description:"Searching ..."}),children:X})};C.Z=x},23082:function(z,C,e){"use strict";var v=e(13254),m=e(14277),D=e(2824),M=e(67294),A=e(66349),c=e(27360),w=e(63183),E=e.n(w),h=e(11759),i=e(79576),u=e(56592),d=e(10043),s=e.n(d),x=e(29931),r=e(50437),a=e(85893),o=function(n){var O=n.url,y=n.getFile,R=n.enableToc,j=function(T){if(T.match(/^(minio|file):\/\//))return y?y({filelink:T}).then(function(f){return f}).catch(function(f){return f.data.msg?f.data.msg:f.data}):new Promise(function(f,G){f("Please specify getFile function.")});try{return(0,r.Z)(T).then(function(f){return f.status!==200?"No Content.":f.data})}catch(f){return console.log("Cannot fetch ".concat(T,", the reason is ").concat(f)),new Promise(function(G,N){N("No Content.")})}},W=(0,M.useState)(null),t=(0,D.Z)(W,2),P=t[0],F=t[1];(0,M.useEffect)(function(){O&&j(O).then(function(L){return F(L||null)})},[O]),console.log("MarkdownViewer: updated");var B=[];return R?B=[c.Z,i.Z,E(),u.Z,h.Z]:B=[c.Z,i.Z,u.Z,h.Z],P?(0,a.jsx)(A.D,{rehypePlugins:B,className:"markdown-viewer",remarkPlugins:[s(),x.Z],children:P},O):(0,a.jsx)(m.Z,{})};C.Z=(0,M.memo)(o)},53922:function(z,C,e){"use strict";e.r(C);var v=e(57338),m=e(273),D=e(18106),M=e(38222),A=e(13062),c=e(71230),w=e(71153),E=e(60331),h=e(89032),i=e(15746),u=e(2824),d=e(67294),s=e(74310),x=e(96486),r=e.n(x),a=e(51615),o=e(19611),g=e(30143),n=e(88906),O=e(98361),y=e(32266),R=e(10615),j=e(23082),W=e(97193),t=e(85893),P=function(){var B=(0,a.k6)(),L=(0,d.useState)(!1),T=(0,u.Z)(L,2),f=T[0],G=T[1],N=(0,d.useState)(""),X=(0,u.Z)(N,2),U=X[0],l=X[1],k=(0,d.useState)(""),S=(0,u.Z)(k,2),H=S[0],Z=S[1],K=(0,d.useState)("rapex-cookie-consent-form"),Y=(0,u.Z)(K,2),b=Y[0],_e=Y[1],$=(0,d.useState)(void 0),Q=(0,u.Z)($,2),V=Q[0],q=Q[1];(0,d.useEffect)(function(){var p=g.LJ.get(b);q(p==="true"),console.log("Cookie Status: ",p,typeof p,V),p&&J()},[]);var J=function(){var _=document.createElement("script");_.setAttribute("src","//rf.revolvermaps.com/0/0/5.js?i=506fpu66up3&amp;m=0&amp;c=ff0000&amp;cr1=ffffff"),_.setAttribute("async","async");var I=document.getElementsByTagName("body")[0];I.appendChild(_)},ee=[{label:(0,t.jsx)(s._H,{id:"pages.Welcome.single-gene-analysis",defaultMessage:"Search Gene"}),key:"single-gene-analysis",visible:!0},{label:(0,t.jsx)(s._H,{id:"pages.Welcome.multiple-genes-analysis",defaultMessage:"Multiple Genes Analysis"}),key:"multiple-genes-analysis",visible:!1,data:[]},{label:(0,t.jsx)(s._H,{id:"pages.Welcome.custom-data-analysis",defaultMessage:"Custom Data Analysis"}),key:"custom-data-analysis",visible:!1,data:[]},{label:(0,t.jsx)(s._H,{id:"pages.Welcome.knowledge-graph",defaultMessage:"Knowledge Graph"}),key:"knowledge-graph",visible:!1,data:[]},{label:(0,t.jsx)(s._H,{id:"pages.Welcome.datasets",defaultMessage:"Datasets"}),key:"dataset",visible:!1,data:[]}],te=(0,x.filter)(ee,function(p){return p.visible}),ae=[{title:(0,t.jsx)(s._H,{id:"pages.Welcome.multiple-genes-analysis",defaultMessage:"Multiple Genes"}),route:"/expression-analysis/multiple-genes"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.kegg-pathways",defaultMessage:"KEGG Pathway"}),route:"/expression-analysis/kegg-pathways"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.diff-genes",defaultMessage:"Diff Genes"}),route:"/custom-analysis/differential-expression-analysis"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.boxplot",defaultMessage:"Boxplot"}),route:"/custom-analysis/gene-expression-profile?chart=boxplot"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.barplot",defaultMessage:"Barplot"}),route:"/custom-analysis/gene-expression-profile?chart=barplot"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.boxplot-organs",defaultMessage:"Across Organs on Boxplot"}),route:"/custom-analysis/gene-expression-profile?chart=boxplot-organs"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.barplot-organs",defaultMessage:"Across Organs on Barplot"}),route:"/custom-analysis/gene-expression-profile?chart=barplot-organs"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.correlation-analysis",defaultMessage:"Correlation Analysis"}),route:"/custom-analysis/gene-expression-profile?chart=correlation-analysis"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.similar-genes-detection",defaultMessage:"Similar Genes Detection"}),route:"/custom-analysis/similar-genes-detection"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.knowledge-graph",defaultMessage:"Knowledge Graph"}),route:"/knowledge-graph"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.datasets",defaultMessage:"Datasets"}),route:"/datasets"}],se=[{src:"/examples/0.png",title:"Multi-omics Data"},{src:"/examples/1.png",title:"Knowledge Graph & Statistics"},{src:"/examples/2.png",title:"Interactive Charts"}],ne=[{title:(0,t.jsx)(s._H,{id:"pages.Welcome.datasets",defaultMessage:"Datasets"}),key:"datasets",stat:"18"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.organs",defaultMessage:"Organs"}),key:"organs",stat:"11"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.samples",defaultMessage:"Samples"}),key:"samples",stat:"2,494"},{title:(0,t.jsx)(s._H,{id:"pages.Welcome.publications",defaultMessage:"Curated Publications"}),key:"publications",stat:"1,000"}],re=function(_){_&&B.push("/expression-analysis/single-gene?ensemblId=".concat(_))},oe=function(_){var I=_.target.parentNode.parentNode.id||_.target.parentNode.id;console.log("onClickOrgan: ",_,I),["lung","liver","gut","thyroid","brain","testis","heart","kidney"].indexOf(I)>=0&&(G(!0),l(I),Z("/README/".concat(I,".md")))},le="RAPEX is an open-source platform comprising various transcriptome datasets and analyzing tools, as well as a knowledge graph providing a multi-omics network linking vast other factors related to the research questions.";return(0,t.jsxs)(c.Z,{className:"welcome",children:[(0,t.jsxs)(i.Z,{className:"logo-container",children:[(0,t.jsx)("img",{alt:"logo",src:"/logo.png",className:"logo"}),(0,t.jsx)("span",{children:"RAPEX - Response to Air Pollution EXposure"})]}),(0,t.jsx)(i.Z,{className:"search-container",children:(0,t.jsx)(M.Z,{children:te.map(function(p){return(0,t.jsx)(M.Z.TabPane,{tab:p.label,children:p.key==="single-gene-analysis"?(0,t.jsxs)(c.Z,{className:"gene-searcher-box",children:[(0,t.jsxs)(c.Z,{className:"search-box",children:[(0,t.jsx)("span",{className:"title",children:"Enter gene symbol, ensembl id or entrez id"}),(0,t.jsx)(O.Z,{queryGenes:y.VX,placeholder:"e.g Trp53 / ENSMUSG00000059552 / 22059",style:{width:"100%"},onChange:re}),(0,t.jsx)("div",{className:"tag-container",children:ae.map(function(_){return(0,t.jsx)(o.rU,{to:_.route,children:(0,t.jsx)(E.Z,{color:"#108ee9",children:_.title},_.route)},_.route)})})]}),(0,t.jsx)(c.Z,{className:"text-statistics",children:ne.map(function(_){return(0,t.jsxs)(i.Z,{span:6,className:"stat-item",children:[(0,t.jsx)("span",{children:_.stat}),(0,t.jsx)("span",{className:"title",children:_.title})]},_.key)})}),(0,t.jsxs)(c.Z,{className:"statistics",gutter:16,children:[(0,t.jsxs)(i.Z,{className:"data-stat",md:9,sm:24,xs:9,xxl:9,children:[(0,t.jsx)(n.Q,{src:"/mice-organs.svg",onClick:function(I){oe(I)}}),(0,t.jsx)(s._H,{id:"pages.Welcome.description",defaultMessage:le})]}),(0,t.jsx)(i.Z,{className:"image-container",md:15,sm:24,xs:15,xxl:15,children:(0,t.jsx)(R.lr,{autoPlay:!0,dynamicHeight:!0,infiniteLoop:!0,children:se.map(function(_){return(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{src:_.src}),(0,t.jsx)("p",{className:"legend",children:_.title})]},_.title)})})})]})]}):null},p.key)})})}),(0,t.jsx)(m.Z,{width:"50%",visible:f,className:"organ-details",onClose:function(){l(""),G(!1)},closable:!0,maskClosable:!0,children:(0,t.jsx)(j.Z,{getFile:W.n,url:H})}),(0,t.jsx)(g.ZP,{location:"bottom",cookieName:b,style:{background:"#2B373B"},enableDeclineButton:!0,buttonStyle:{color:"#4e503b",fontSize:"13px"},expires:150,onAccept:function(){J()},children:"This website uses an toolbox from revolvermaps.com to count the number of visitors, but we don't gather and track your personal information."})]})};C.default=P},97193:function(z,C,e){"use strict";e.d(C,{n:function(){return A}});var v=e(39428),m=e(8870),D=e(3182),M=e(74310);function A(h,i){return c.apply(this,arguments)}function c(){return c=(0,D.Z)((0,v.Z)().mark(function h(i,u){return(0,v.Z)().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.abrupt("return",(0,M.WY)("/api/v1/download",(0,m.Z)({method:"GET",params:(0,m.Z)({},i)},u||{})));case 1:case"end":return s.stop()}},h)})),c.apply(this,arguments)}function w(h,i,u){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime().mark(function h(i,u,d){var s;return _regeneratorRuntime().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return s=new FormData,u&&s.append("files",u),Object.keys(i).forEach(function(a){var o=i[a];o!=null&&s.append(a,typeof o=="object"&&!(o instanceof File)?JSON.stringify(o):o)}),r.abrupt("return",request("/api/v1/upload",_objectSpread({method:"POST",data:s,requestType:"form"},d||{})));case 4:case"end":return r.stop()}},h)})),E.apply(this,arguments)}},32266:function(z,C,e){"use strict";e.d(C,{zn:function(){return A},VX:function(){return h},dy:function(){return u},Ce:function(){return s}});var v=e(39428),m=e(8870),D=e(3182),M=e(74310);function A(r,a){return c.apply(this,arguments)}function c(){return c=(0,D.Z)((0,v.Z)().mark(function r(a,o){return(0,v.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,M.WY)("/api/v1/degs",(0,m.Z)({method:"GET",params:(0,m.Z)({},a)},o||{})));case 1:case"end":return n.stop()}},r)})),c.apply(this,arguments)}function w(r,a){return E.apply(this,arguments)}function E(){return E=_asyncToGenerator(_regeneratorRuntime().mark(function r(a,o){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",request("/api/v1/gene-expr-data",_objectSpread({method:"GET",params:_objectSpread({},a)},o||{})));case 1:case"end":return n.stop()}},r)})),E.apply(this,arguments)}function h(r,a){return i.apply(this,arguments)}function i(){return i=(0,D.Z)((0,v.Z)().mark(function r(a,o){return(0,v.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,M.WY)("/api/v1/genes",(0,m.Z)({method:"GET",params:(0,m.Z)({},a)},o||{})));case 1:case"end":return n.stop()}},r)})),i.apply(this,arguments)}function u(r,a){return d.apply(this,arguments)}function d(){return d=(0,D.Z)((0,v.Z)().mark(function r(a,o){return(0,v.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,M.WY)("/api/v1/pathways",(0,m.Z)({method:"GET",params:(0,m.Z)({},a)},o||{})));case 1:case"end":return n.stop()}},r)})),d.apply(this,arguments)}function s(r,a){return x.apply(this,arguments)}function x(){return x=(0,D.Z)((0,v.Z)().mark(function r(a,o){return(0,v.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,M.WY)("/api/v1/similar-genes",(0,m.Z)({method:"GET",params:(0,m.Z)({},a)},o||{})));case 1:case"end":return n.stop()}},r)})),x.apply(this,arguments)}}}]);

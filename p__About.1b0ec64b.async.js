(self.webpackChunkrapex_studio=self.webpackChunkrapex_studio||[]).push([[681],{23082:function(T,l,e){"use strict";var P=e(13254),E=e(14277),D=e(2824),u=e(67294),m=e(66349),r=e(27360),c=e(63183),i=e.n(c),t=e(11759),a=e(79576),o=e(56592),O=e(10043),n=e.n(O),C=e(29931),d=e(50437),M=e(85893),s=function(v){var f=v.url,A=v.getFile,L=v.enableToc,W=function(h){if(h.match(/^(minio|file):\/\//))return A?A({filelink:h}).then(function(_){return _}).catch(function(_){return _.data.msg?_.data.msg:_.data}):new Promise(function(_,K){_("Please specify getFile function.")});try{return(0,d.Z)(h).then(function(_){return _.status!==200?"No Content.":_.data})}catch(_){return console.log("Cannot fetch ".concat(h,", the reason is ").concat(_)),new Promise(function(K,y){y("No Content.")})}},B=(0,u.useState)(null),R=(0,D.Z)(B,2),U=R[0],I=R[1];(0,u.useEffect)(function(){f&&W(f).then(function(g){return I(g||null)})},[f]),console.log("MarkdownViewer: updated");var p=[];return L?p=[r.Z,a.Z,i(),o.Z,t.Z]:p=[r.Z,a.Z,o.Z,t.Z],U?(0,M.jsx)(m.D,{rehypePlugins:p,className:"markdown-viewer",remarkPlugins:[n(),C.Z],children:U},f):(0,M.jsx)(E.Z,{})};l.Z=(0,u.memo)(s)},52493:function(T,l,e){"use strict";e.r(l);var P=e(58024),E=e(91894),D=e(67294),u=e(23082),m=e(97193),r=e(85893),c=function(){var t="/README/about.md";return(0,r.jsx)(E.Z,{className:"about",children:(0,r.jsx)(u.Z,{getFile:m.n,url:t})})};l.default=c},97193:function(T,l,e){"use strict";e.d(l,{n:function(){return m}});var P=e(39428),E=e(8870),D=e(3182),u=e(74310);function m(t,a){return r.apply(this,arguments)}function r(){return r=(0,D.Z)((0,P.Z)().mark(function t(a,o){return(0,P.Z)().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,u.WY)("/api/v1/download",(0,E.Z)({method:"GET",params:(0,E.Z)({},a)},o||{})));case 1:case"end":return n.stop()}},t)})),r.apply(this,arguments)}function c(t,a,o){return i.apply(this,arguments)}function i(){return i=_asyncToGenerator(_regeneratorRuntime().mark(function t(a,o,O){var n;return _regeneratorRuntime().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return n=new FormData,o&&n.append("files",o),Object.keys(a).forEach(function(M){var s=a[M];s!=null&&n.append(M,typeof s=="object"&&!(s instanceof File)?JSON.stringify(s):s)}),d.abrupt("return",request("/api/v1/upload",_objectSpread({method:"POST",data:n,requestType:"form"},O||{})));case 4:case"end":return d.stop()}},t)})),i.apply(this,arguments)}}}]);

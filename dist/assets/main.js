!function(t){var e={};function n(r){if(e[r])return e[r].exports;var p=e[r]={i:r,l:!1,exports:{}};return t[r].call(p.exports,p,p.exports,n),p.l=!0,p.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var p in t)n.d(r,p,function(e){return t[e]}.bind(null,p));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){var n,r={tunnels:[{name:"http (http)",uri:"/api/tunnels/http%20%28http%29",public_url:"http://fb79cd49.ngrok.io",proto:"http",config:{addr:"http://0.0.0.0:8080",inspect:!0},metrics:{conns:{count:86,gauge:0,rate1:3.473974133837606e-12,rate5:3860614137841312e-20,rate15:.00026192542439742544,p50:20095158805.5,p90:37301572183,p95:70238013483.04997,p99:132726574923},http:{count:136,rate1:2.489211239018104e-12,rate5:36116324480266527e-21,rate15:.0002564812217432882,p50:103078641,p90:2745438588.5,p95:26300090404.900036,p99:119710117124.33984}}},{name:"http",uri:"/api/tunnels/http",public_url:"https://fb79cd49.ngrok.io",proto:"https",config:{addr:"http://0.0.0.0:8080",inspect:!0},metrics:{conns:{count:0,gauge:0,rate1:0,rate5:0,rate15:0,p50:0,p90:0,p95:0,p99:0},http:{count:0,rate1:0,rate5:0,rate15:0,p50:0,p90:0,p95:0,p99:0}}},{name:"vnc",uri:"/api/tunnels/vnc",public_url:"tcp://0.tcp.ngrok.io:13089",proto:"tcp",config:{addr:"0.0.0.0:5900",inspect:!1},metrics:{conns:{count:173,gauge:0,rate1:.022793485812515498,rate5:.015376779407660272,rate15:.007292640569029698,p50:355245693,p90:397062732.6,p95:400286930.59999996,p99:406037821.15999997},http:{count:0,rate1:0,rate5:0,rate15:0,p50:0,p90:0,p95:0,p99:0}}},{name:"ssh",uri:"/api/tunnels/ssh",public_url:"tcp://0.tcp.ngrok.io:19321",proto:"tcp",config:{addr:"0.0.0.0:22",inspect:!1},metrics:{conns:{count:132,gauge:0,rate1:1.444269327316406e-39,rate5:3.122164040723969e-10,rate15:12431585711753355e-21,p50:394526225.5,p90:400997127.4,p95:404269037.25,p99:20421774630.929626},http:{count:0,rate1:0,rate5:0,rate15:0,p50:0,p90:0,p95:0,p99:0}}}],uri:"/api/tunnels"};(n=new XMLHttpRequest).addEventListener("load",function(){!function(t){var e="",n="",p="";for(var o in r.tunnels){var u=r.tunnels[o];"http"===u.proto&&(e=u.public_url+"/airsonic/"),"vnc"===u.name&&(n=u.public_url),"ssh"===u.name&&(p=u.public_url)}var a=document.getElementById("airsonic-url").firstChild,i=document.getElementById("vnc-url").firstChild,c=document.getElementById("ssh-url").firstChild;a.nodeValue=e,i.nodeValue=n,c.nodeValue=p}(n.responseText)}),n.open("GET","http://192.168.0.125:8080/airsonic/rest/ping.view?u=pimenta&p=brocas&c=myapp&v=1.12.0"),n.send()}]);
"use strict";(self.webpackChunkeasyexcel=self.webpackChunkeasyexcel||[]).push([[597],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=l.createContext({}),d=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,N=u["".concat(p,".").concat(c)]||u[c]||k[c]||a;return n?l.createElement(N,r(r({ref:t},m),{},{components:n})):l.createElement(N,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<a;d++)r[d]=n[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7926:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return k}});var l=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],o={title:"API",sidebar_position:1},p=void 0,d={unversionedId:"api/index",id:"api/index",title:"API",description:"\u5173\u4e8e\u5e38\u89c1\u7c7b\u89e3\u6790",source:"@site/docs/api/index.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/current/api/",draft:!1,editUrl:"https://github.com/alibaba-open-source-website/easyexcel/docs/api/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"API",sidebar_position:1},sidebar:"apiSidebar"},m={},k=[{value:"\u5173\u4e8e\u5e38\u89c1\u7c7b\u89e3\u6790",id:"\u5173\u4e8e\u5e38\u89c1\u7c7b\u89e3\u6790",level:2},{value:"\u8bfb",id:"\u8bfb",level:2},{value:"\u6ce8\u89e3",id:"\u6ce8\u89e3",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u901a\u7528\u53c2\u6570",id:"\u901a\u7528\u53c2\u6570",level:4},{value:"ReadWorkbook\uff08\u7406\u89e3\u6210excel\u5bf9\u8c61\uff09\u53c2\u6570",id:"readworkbook\u7406\u89e3\u6210excel\u5bf9\u8c61\u53c2\u6570",level:4},{value:"ReadSheet\uff08\u5c31\u662fexcel\u7684\u4e00\u4e2aSheet\uff09\u53c2\u6570",id:"readsheet\u5c31\u662fexcel\u7684\u4e00\u4e2asheet\u53c2\u6570",level:4},{value:"\u5199",id:"\u5199",level:2},{value:"\u6ce8\u89e3",id:"\u6ce8\u89e3-1",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:3},{value:"\u901a\u7528\u53c2\u6570",id:"\u901a\u7528\u53c2\u6570-1",level:4},{value:"WriteWorkbook\uff08\u7406\u89e3\u6210excel\u5bf9\u8c61\uff09\u53c2\u6570",id:"writeworkbook\u7406\u89e3\u6210excel\u5bf9\u8c61\u53c2\u6570",level:4},{value:"WriteSheet\uff08\u5c31\u662fexcel\u7684\u4e00\u4e2aSheet\uff09\u53c2\u6570",id:"writesheet\u5c31\u662fexcel\u7684\u4e00\u4e2asheet\u53c2\u6570",level:4},{value:"WriteTable\uff08\u5c31\u628aexcel\u7684\u4e00\u4e2aSheet,\u4e00\u5757\u533a\u57df\u770b\u4e00\u4e2atable\uff09\u53c2\u6570",id:"writetable\u5c31\u628aexcel\u7684\u4e00\u4e2asheet\u4e00\u5757\u533a\u57df\u770b\u4e00\u4e2atable\u53c2\u6570",level:4}],u={toc:k};function c(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5173\u4e8e\u5e38\u89c1\u7c7b\u89e3\u6790"},"\u5173\u4e8e\u5e38\u89c1\u7c7b\u89e3\u6790"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"EasyExcel \u5165\u53e3\u7c7b\uff0c\u7528\u4e8e\u6784\u5efa\u5f00\u59cb\u5404\u79cd\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"ExcelReaderBuilder ExcelWriterBuilder \u6784\u5efa\u51fa\u4e00\u4e2a ReadWorkbook WriteWorkbook\uff0c\u53ef\u4ee5\u7406\u89e3\u6210\u4e00\u4e2aexcel\u5bf9\u8c61\uff0c\u4e00\u4e2aexcel\u53ea\u8981\u6784\u5efa\u4e00\u4e2a"),(0,a.kt)("li",{parentName:"ul"},"ExcelReaderSheetBuilder ExcelWriterSheetBuilder \u6784\u5efa\u51fa\u4e00\u4e2a ReadSheet WriteSheet\u5bf9\u8c61\uff0c\u53ef\u4ee5\u7406\u89e3\u6210excel\u91cc\u9762\u7684\u4e00\u9875,\u6bcf\u4e00\u9875\u90fd\u8981\u6784\u5efa\u4e00\u4e2a"),(0,a.kt)("li",{parentName:"ul"},"ReadListener \u5728\u6bcf\u4e00\u884c\u8bfb\u53d6\u5b8c\u6bd5\u540e\u90fd\u4f1a\u8c03\u7528ReadListener\u6765\u5904\u7406\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"WriteHandler \u5728\u6bcf\u4e00\u4e2a\u64cd\u4f5c\u5305\u62ec\u521b\u5efa\u5355\u5143\u683c\u3001\u521b\u5efa\u8868\u683c\u7b49\u90fd\u4f1a\u8c03\u7528WriteHandler\u6765\u5904\u7406\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u914d\u7f6e\u90fd\u662f\u7ee7\u627f\u7684\uff0cWorkbook\u7684\u914d\u7f6e\u4f1a\u88abSheet\u7ee7\u627f\uff0c\u6240\u4ee5\u5728\u7528EasyExcel\u8bbe\u7f6e\u53c2\u6570\u7684\u65f6\u5019\uff0c\u5728EasyExcel...sheet()\u65b9\u6cd5\u4e4b\u524d\u4f5c\u7528\u57df\u662f\u6574\u4e2asheet,\u4e4b\u540e\u9488\u5bf9\u5355\u4e2asheet")),(0,a.kt)("h2",{id:"\u8bfb"},"\u8bfb"),(0,a.kt)("h3",{id:"\u6ce8\u89e3"},"\u6ce8\u89e3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExcelProperty")," \u6307\u5b9a\u5f53\u524d\u5b57\u6bb5\u5bf9\u5e94excel\u4e2d\u7684\u90a3\u4e00\u5217\u3002\u53ef\u4ee5\u6839\u636e\u540d\u5b57\u6216\u8005Index\u53bb\u5339\u914d\u3002\u5f53\u7136\u4e5f\u53ef\u4ee5\u4e0d\u5199\uff0c\u9ed8\u8ba4\u7b2c\u4e00\u4e2a\u5b57\u6bb5\u5c31\u662findex=0\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\u5343\u4e07\u6ce8\u610f\uff0c\u8981\u4e48\u5168\u90e8\u4e0d\u5199\uff0c\u8981\u4e48\u5168\u90e8\u7528index\uff0c\u8981\u4e48\u5168\u90e8\u7528\u540d\u5b57\u53bb\u5339\u914d\u3002\u5343\u4e07\u522b\u4e09\u4e2a\u6df7\u7740\u7528\uff0c\u9664\u975e\u4f60\u975e\u5e38\u4e86\u89e3\u6e90\u4ee3\u7801\u4e2d\u4e09\u4e2a\u6df7\u7740\u7528\u600e\u4e48\u53bb\u6392\u5e8f\u7684\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExcelIgnore")," \u9ed8\u8ba4\u6240\u6709\u5b57\u6bb5\u90fd\u4f1a\u548cexcel\u53bb\u5339\u914d\uff0c\u52a0\u4e86\u8fd9\u4e2a\u6ce8\u89e3\u4f1a\u5ffd\u7565\u8be5\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DateTimeFormat")," \u65e5\u671f\u8f6c\u6362\uff0c\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"String"),"\u53bb\u63a5\u6536excel\u65e5\u671f\u683c\u5f0f\u7684\u6570\u636e\u4f1a\u8c03\u7528\u8fd9\u4e2a\u6ce8\u89e3\u3002\u91cc\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"\u53c2\u7167",(0,a.kt)("inlineCode",{parentName:"li"},"java.text.SimpleDateFormat")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NumberFormat")," \u6570\u5b57\u8f6c\u6362\uff0c\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"String"),"\u53bb\u63a5\u6536excel\u6570\u5b57\u683c\u5f0f\u7684\u6570\u636e\u4f1a\u8c03\u7528\u8fd9\u4e2a\u6ce8\u89e3\u3002\u91cc\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"\u53c2\u7167",(0,a.kt)("inlineCode",{parentName:"li"},"java.text.DecimalFormat")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExcelIgnoreUnannotated")," \u9ed8\u8ba4\u4e0d\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"ExcelProperty")," \u7684\u6ce8\u89e3\u7684\u90fd\u4f1a\u53c2\u4e0e\u8bfb\u5199\uff0c\u52a0\u4e86\u4e0d\u4f1a\u53c2\u4e0e")),(0,a.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h4",{id:"\u901a\u7528\u53c2\u6570"},"\u901a\u7528\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ReadWorkbook"),",",(0,a.kt)("inlineCode",{parentName:"p"},"ReadSheet")," \u90fd\u4f1a\u6709\u7684\u53c2\u6570\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u9ed8\u8ba4\u4f7f\u7528\u4e0a\u7ea7\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"converter")," \u8f6c\u6362\u5668\uff0c\u9ed8\u8ba4\u52a0\u8f7d\u4e86\u5f88\u591a\u8f6c\u6362\u5668\u3002\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readListener")," \u76d1\u542c\u5668\uff0c\u5728\u8bfb\u53d6\u6570\u636e\u7684\u8fc7\u7a0b\u4e2d\u4f1a\u4e0d\u65ad\u7684\u8c03\u7528\u76d1\u542c\u5668\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"headRowNumber")," \u9700\u8981\u8bfb\u7684\u8868\u683c\u6709\u51e0\u884c\u5934\u6570\u636e\u3002\u9ed8\u8ba4\u6709\u4e00\u884c\u5934\uff0c\u4e5f\u5c31\u662f\u8ba4\u4e3a\u7b2c\u4e8c\u884c\u5f00\u59cb\u8d77\u4e3a\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"head"),"  \u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"clazz"),"\u4e8c\u9009\u4e00\u3002\u8bfb\u53d6\u6587\u4ef6\u5934\u5bf9\u5e94\u7684\u5217\u8868\uff0c\u4f1a\u6839\u636e\u5217\u8868\u5339\u914d\u6570\u636e\uff0c\u5efa\u8bae\u4f7f\u7528class\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clazz")," \u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"head"),"\u4e8c\u9009\u4e00\u3002\u8bfb\u53d6\u6587\u4ef6\u7684\u5934\u5bf9\u5e94\u7684class\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6ce8\u89e3\u3002\u5982\u679c\u4e24\u4e2a\u90fd\u4e0d\u6307\u5b9a\uff0c\u5219\u4f1a\u8bfb\u53d6\u5168\u90e8\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"autoTrim")," \u5b57\u7b26\u4e32\u3001\u8868\u5934\u7b49\u6570\u636e\u81ea\u52a8trim"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password")," \u8bfb\u7684\u65f6\u5019\u662f\u5426\u9700\u8981\u4f7f\u7528\u5bc6\u7801")),(0,a.kt)("h4",{id:"readworkbook\u7406\u89e3\u6210excel\u5bf9\u8c61\u53c2\u6570"},"ReadWorkbook\uff08\u7406\u89e3\u6210excel\u5bf9\u8c61\uff09\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"excelType")," \u5f53\u524dexcel\u7684\u7c7b\u578b \u9ed8\u8ba4\u4f1a\u81ea\u52a8\u5224\u65ad"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"inputStream")," \u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"file"),"\u4e8c\u9009\u4e00\u3002\u8bfb\u53d6\u6587\u4ef6\u7684\u6d41\uff0c\u5982\u679c\u63a5\u6536\u5230\u7684\u662f\u6d41\u5c31\u53ea\u7528\uff0c\u4e0d\u7528\u6d41\u5efa\u8bae\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"file"),"\u53c2\u6570\u3002\u56e0\u4e3a\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"li"},"inputStream")," easyexcel\u4f1a\u5e2e\u5fd9\u521b\u5efa\u4e34\u65f6\u6587\u4ef6\uff0c\u6700\u7ec8\u8fd8\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file")," \u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"inputStream"),"\u4e8c\u9009\u4e00\u3002\u8bfb\u53d6\u6587\u4ef6\u7684\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"autoCloseStream")," \u81ea\u52a8\u5173\u95ed\u6d41\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"readCache")," \u9ed8\u8ba4\u5c0f\u4e8e5M\u7528 \u5185\u5b58\uff0c\u8d85\u8fc75M\u4f1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"EhCache"),",\u8fd9\u91cc\u4e0d\u5efa\u8bae\u4f7f\u7528\u8fd9\u4e2a\u53c2\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useDefaultListener")," ",(0,a.kt)("inlineCode",{parentName:"li"},"@since 2.1.4")," \u9ed8\u8ba4\u4f1a\u52a0\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"ModelBuildEventListener")," \u6765\u5e2e\u5fd9\u8f6c\u6362\u6210\u4f20\u5165",(0,a.kt)("inlineCode",{parentName:"li"},"class"),"\u7684\u5bf9\u8c61\uff0c\u8bbe\u7f6e\u6210",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\u540e\u5c06\u4e0d\u4f1a\u534f\u52a9\u8f6c\u6362\u5bf9\u8c61\uff0c\u81ea\u5b9a\u4e49\u7684\u76d1\u542c\u5668\u4f1a\u63a5\u6536\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"Map<Integer,CellData>"),"\u5bf9\u8c61\uff0c\u5982\u679c\u8fd8\u60f3\u7ee7\u7eed\u63a5\u542c\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"class"),"\u5bf9\u8c61\uff0c\u8bf7\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"readListener"),"\u65b9\u6cd5\uff0c\u52a0\u5165\u81ea\u5b9a\u4e49\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"beforeListener"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"li"},"ModelBuildEventListener"),"\u3001 \u81ea\u5b9a\u4e49\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"afterListener"),"\u5373\u53ef\u3002")),(0,a.kt)("h4",{id:"readsheet\u5c31\u662fexcel\u7684\u4e00\u4e2asheet\u53c2\u6570"},"ReadSheet\uff08\u5c31\u662fexcel\u7684\u4e00\u4e2aSheet\uff09\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sheetNo")," \u9700\u8981\u8bfb\u53d6Sheet\u7684\u7f16\u7801\uff0c\u5efa\u8bae\u4f7f\u7528\u8fd9\u4e2a\u6765\u6307\u5b9a\u8bfb\u53d6\u54ea\u4e2aSheet"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sheetName")," \u6839\u636e\u540d\u5b57\u53bb\u5339\u914dSheet,excel 2003\u4e0d\u652f\u6301\u6839\u636e\u540d\u5b57\u53bb\u5339\u914d")),(0,a.kt)("h2",{id:"\u5199"},"\u5199"),(0,a.kt)("h3",{id:"\u6ce8\u89e3-1"},"\u6ce8\u89e3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExcelProperty")," index \u6307\u5b9a\u5199\u5230\u7b2c\u51e0\u5217\uff0c\u9ed8\u8ba4\u6839\u636e\u6210\u5458\u53d8\u91cf\u6392\u5e8f\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"\u6307\u5b9a\u5199\u5165\u7684\u540d\u79f0\uff0c\u9ed8\u8ba4\u6210\u5458\u53d8\u91cf\u7684\u540d\u5b57\uff0c\u591a\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"\u53ef\u4ee5\u53c2\u7167\u5feb\u901f\u5f00\u59cb\u4e2d\u7684\u590d\u6742\u5934"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExcelIgnore")," \u9ed8\u8ba4\u6240\u6709\u5b57\u6bb5\u90fd\u4f1a\u5199\u5165excel\uff0c\u8fd9\u4e2a\u6ce8\u89e3\u4f1a\u5ffd\u7565\u8fd9\u4e2a\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DateTimeFormat")," \u65e5\u671f\u8f6c\u6362\uff0c\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"Date"),"\u5199\u5230excel\u4f1a\u8c03\u7528\u8fd9\u4e2a\u6ce8\u89e3\u3002\u91cc\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"\u53c2\u7167",(0,a.kt)("inlineCode",{parentName:"li"},"java.text.SimpleDateFormat")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NumberFormat")," \u6570\u5b57\u8f6c\u6362\uff0c\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"Number"),"\u5199excel\u4f1a\u8c03\u7528\u8fd9\u4e2a\u6ce8\u89e3\u3002\u91cc\u9762\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"\u53c2\u7167",(0,a.kt)("inlineCode",{parentName:"li"},"java.text.DecimalFormat")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ExcelIgnoreUnannotated")," \u9ed8\u8ba4\u4e0d\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"ExcelProperty")," \u7684\u6ce8\u89e3\u7684\u90fd\u4f1a\u53c2\u4e0e\u8bfb\u5199\uff0c\u52a0\u4e86\u4e0d\u4f1a\u53c2\u4e0e")),(0,a.kt)("h3",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,a.kt)("h4",{id:"\u901a\u7528\u53c2\u6570-1"},"\u901a\u7528\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WriteWorkbook"),",",(0,a.kt)("inlineCode",{parentName:"p"},"WriteSheet")," ,",(0,a.kt)("inlineCode",{parentName:"p"},"WriteTable"),"\u90fd\u4f1a\u6709\u7684\u53c2\u6570\uff0c\u5982\u679c\u4e3a\u7a7a\uff0c\u9ed8\u8ba4\u4f7f\u7528\u4e0a\u7ea7\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"converter")," \u8f6c\u6362\u5668\uff0c\u9ed8\u8ba4\u52a0\u8f7d\u4e86\u5f88\u591a\u8f6c\u6362\u5668\u3002\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"writeHandler")," \u5199\u7684\u5904\u7406\u5668\u3002\u53ef\u4ee5\u5b9e\u73b0",(0,a.kt)("inlineCode",{parentName:"li"},"WorkbookWriteHandler"),",",(0,a.kt)("inlineCode",{parentName:"li"},"SheetWriteHandler"),",",(0,a.kt)("inlineCode",{parentName:"li"},"RowWriteHandler"),",",(0,a.kt)("inlineCode",{parentName:"li"},"CellWriteHandler"),"\uff0c\u5728\u5199\u5165excel\u7684\u4e0d\u540c\u9636\u6bb5\u4f1a\u8c03\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"relativeHeadRowIndex")," \u8ddd\u79bb\u591a\u5c11\u884c\u540e\u5f00\u59cb\u3002\u4e5f\u5c31\u662f\u5f00\u5934\u7a7a\u51e0\u884c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"needHead")," \u662f\u5426\u5bfc\u51fa\u5934"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"head"),"  \u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"clazz"),"\u4e8c\u9009\u4e00\u3002\u5199\u5165\u6587\u4ef6\u7684\u5934\u5217\u8868\uff0c\u5efa\u8bae\u4f7f\u7528class\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clazz")," \u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"head"),"\u4e8c\u9009\u4e00\u3002\u5199\u5165\u6587\u4ef6\u7684\u5934\u5bf9\u5e94\u7684class\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u6ce8\u89e3\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"autoTrim")," \u5b57\u7b26\u4e32\u3001\u8868\u5934\u7b49\u6570\u636e\u81ea\u52a8trim")),(0,a.kt)("h4",{id:"writeworkbook\u7406\u89e3\u6210excel\u5bf9\u8c61\u53c2\u6570"},"WriteWorkbook\uff08\u7406\u89e3\u6210excel\u5bf9\u8c61\uff09\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"excelType")," \u5f53\u524dexcel\u7684\u7c7b\u578b \u9ed8\u8ba4",(0,a.kt)("inlineCode",{parentName:"li"},"xlsx")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"outputStream")," \u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"file"),"\u4e8c\u9009\u4e00\u3002\u5199\u5165\u6587\u4ef6\u7684\u6d41"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file")," \u4e0e",(0,a.kt)("inlineCode",{parentName:"li"},"outputStream"),"\u4e8c\u9009\u4e00\u3002\u5199\u5165\u7684\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"templateInputStream")," \u6a21\u677f\u7684\u6587\u4ef6\u6d41"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"templateFile")," \u6a21\u677f\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"autoCloseStream")," \u81ea\u52a8\u5173\u95ed\u6d41\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password")," \u5199\u7684\u65f6\u5019\u662f\u5426\u9700\u8981\u4f7f\u7528\u5bc6\u7801"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useDefaultStyle")," \u5199\u7684\u65f6\u5019\u662f\u5426\u662f\u4f7f\u7528\u9ed8\u8ba4\u5934")),(0,a.kt)("h4",{id:"writesheet\u5c31\u662fexcel\u7684\u4e00\u4e2asheet\u53c2\u6570"},"WriteSheet\uff08\u5c31\u662fexcel\u7684\u4e00\u4e2aSheet\uff09\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sheetNo")," \u9700\u8981\u5199\u5165\u7684\u7f16\u7801\u3002\u9ed8\u8ba40"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sheetName")," \u9700\u8981\u4e9b\u7684Sheet\u540d\u79f0\uff0c\u9ed8\u8ba4\u540c",(0,a.kt)("inlineCode",{parentName:"li"},"sheetNo"))),(0,a.kt)("h4",{id:"writetable\u5c31\u628aexcel\u7684\u4e00\u4e2asheet\u4e00\u5757\u533a\u57df\u770b\u4e00\u4e2atable\u53c2\u6570"},"WriteTable\uff08\u5c31\u628aexcel\u7684\u4e00\u4e2aSheet,\u4e00\u5757\u533a\u57df\u770b\u4e00\u4e2atable\uff09\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tableNo")," \u9700\u8981\u5199\u5165\u7684\u7f16\u7801\u3002\u9ed8\u8ba40")))}c.isMDXComponent=!0}}]);
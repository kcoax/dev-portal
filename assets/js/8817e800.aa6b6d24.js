(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[668],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7650:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:1},l={unversionedId:"provider/intro",id:"provider/intro",isDocsHomePage:!1,title:"Overview",description:"A Provider holds Liquid reserves of both a BASE_ASSET-QUOTE_ASSET  in his non-custodial Liquid hot-wallet, running automated market-making strategies, either with or without an oracle. Providers are incentivized to be always on and need to expose a public reachable endpoint either via clearnet or using a Onion hidden service",source:"@site/docs/provider/intro.md",sourceDirName:"provider",slug:"/provider/intro",permalink:"/docs/provider/intro",editUrl:"https://github.com/tdex-network/dev-portal/edit/master/docs/provider/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"JavaScript",permalink:"/docs/trader/SDK/javascript"},next:{title:"Daemon",permalink:"/docs/provider/daemon"}},c=[],p={toc:c};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Provider")," holds Liquid reserves of both a ",(0,a.kt)("em",{parentName:"p"},"BASE_ASSET-QUOTE_ASSET"),"  in his non-custodial Liquid hot-wallet, running automated market-making strategies, either with or without an oracle. Providers are incentivized to be always on and need to expose a public reachable endpoint either via clearnet or using a ",(0,a.kt)("a",{parentName:"p",href:"https://2019.www.torproject.org/docs/tor-onion-service.html"},"Onion hidden service")),(0,a.kt)("p",null,"A small provider's fee can be taken out of each trade and added to the reserves. While the ",(0,a.kt)("em",{parentName:"p"},"BASE_ASSET-QUOTE_ASSET")," reserve ratio is constantly shifting, fees make sure that the total combined reserve size increases with every trade.\nGuaranteed arbitrage opportunities from price fluctuations should push a steady flow of transactions through the system and increase the amount of fee revenue generated."),(0,a.kt)("p",null,"A liquidity provider has full control over the market making strategy to apply needed to calculate the ",(0,a.kt)("strong",{parentName:"p"},"market rate")," at which to accept trades. That being said, there is a possibility to apply an automated market-making relying only on the reserves balances and the amount requested by the trader, without the need to connect to an external price feed. The default strategy of the alpha daemond is the ",(0,a.kt)("em",{parentName:"p"},"constant product market-making"),". In short, this model generates a full order-book based on an initial price for the market. Every transaction that occurs on this market will adjust the prices of the market accordingly. It's a basic supply and demand automated market making system. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Provide liquidity for traders and earn fees:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/provider/daemon"},"Install and run TDEX Daemon on your server")),(0,a.kt)("li",{parentName:"ul"},"Install and run on RaspiBlitz (Coming Soon)"),(0,a.kt)("li",{parentName:"ul"},"One-click deploy on Ocelot.net (Coming Soon)"),(0,a.kt)("li",{parentName:"ul"},"One-click deploy on Amazon Web Services (Coming Soon)")))}d.isMDXComponent=!0}}]);
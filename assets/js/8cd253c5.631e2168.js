"use strict";(self.webpackChunkinterview_guide=self.webpackChunkinterview_guide||[]).push([[596],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>f});var o=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var s=o.createContext({}),d=function(e){var n=o.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(r),f=t,u=m["".concat(s,".").concat(f)]||m[f]||l[f]||a;return r?o.createElement(u,c(c({ref:n},p),{},{components:r})):o.createElement(u,c({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return o.createElement.apply(null,c)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7373:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(7462),t=(r(7294),r(3905));const a={sidebar_position:6},c="Docker Commands",i={unversionedId:"docker/docker-commands-reference",id:"docker/docker-commands-reference",title:"Docker Commands",description:"",source:"@site/docs/docker/docker-commands-reference.mdx",sourceDirName:"docker",slug:"/docker/docker-commands-reference",permalink:"/docker/docker-commands-reference",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"End to End Dockerization",permalink:"/docker/end-to-end-dockerization"},next:{title:"Java Notes",permalink:"/java"}},s={},d=[],p={toc:d};function l(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,o.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"docker-commands"},"Docker Commands"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"# Information about Docker\n> docker info\n\n# For downloading image from Docker hub\n> docker pull alpine:3.11\n\n# To see list of images downloaded\n> docker image ls \n(or)\n> docker images\n\n# To run a image (or) To start a container\n> docker run <img-id>\n\n# To do port mapping from container to host system (MacOS) while starting\n# Leftside - represents Host Port (MacOS port) & right side is container port number\n> docker run -p 8080:8080 <img-id>\n> docker run -p 9001:8080 <img-id>\n\n# To see container information (container id)\n> docker ps \n(or)\n> docker container ls\n\n# To stop a container\n> ctrl + c \n(or)\n> docker container stop <container-id>\n\n# To see list of stopped containers\n> docker container ls -a\n\n# To see list of stopped containers (container Id alone)\n> docker container ls -aq\n\n# To remove stopped container from host system\n> docker container rm -f <container-id>\n\n# To remove all stopped containers from host system\n> docker container rm -f $(docker container ls -aq)\n\n# To remove a Docker image\n> docker image rm -f <img-id>\n\n# Open bash inside Container\n> docker exec -it d541afb504bd bash\n\n# To find IP address of container\n> docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <CONTAINER_ID>\n\n# logs\n> docker logs <CONTAINER_ID>\n")))}l.isMDXComponent=!0}}]);
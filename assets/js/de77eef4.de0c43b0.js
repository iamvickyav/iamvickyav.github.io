"use strict";(self.webpackChunkinterview_guide=self.webpackChunkinterview_guide||[]).push([[638],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||p;return t?o.createElement(k,a(a({ref:n},s),{},{components:t})):o.createElement(k,a({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,a=new Array(p);a[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<p;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1589:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const p={sidebar_position:5},a="End to End Dockerization",i={unversionedId:"docker/end-to-end-dockerization",id:"docker/end-to-end-dockerization",title:"End to End Dockerization",description:"Consider we have a Simple Spring Boot application which exposes REST endpoints to fetch Employee records from MySQL Database",source:"@site/docs/docker/end-to-end-dockerization.mdx",sourceDirName:"docker",slug:"/docker/end-to-end-dockerization",permalink:"/docker/end-to-end-dockerization",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"docker-compose.yaml",permalink:"/docker/docker-compose"},next:{title:"Docker Commands",permalink:"/docker/docker-commands-reference"}},l={},c=[{value:"Stage 1 : Both SpringBoot App &amp; DB Running in local (host system)",id:"stage-1--both-springboot-app--db-running-in-local-host-system",level:3},{value:"Stage 2 : SpringBoot App containerized using Dockerfile &amp; DB Running in local (host system)",id:"stage-2--springboot-app-containerized-using-dockerfile--db-running-in-local-host-system",level:3},{value:"Stage 3 :  SpringBoot App containerized using docker-compose.yaml &amp; DB Running in local (host system)",id:"stage-3---springboot-app-containerized-using-docker-composeyaml--db-running-in-local-host-system",level:3},{value:"Stage 4 :  Both SpringBoot App &amp; MySQL DB containerized using docker-compose.yaml",id:"stage-4---both-springboot-app--mysql-db-containerized-using-docker-composeyaml",level:3}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"end-to-end-dockerization"},"End to End Dockerization"),(0,r.kt)("p",null,"Consider we have a Simple Spring Boot application which exposes REST endpoints to fetch Employee records from MySQL Database"),(0,r.kt)("p",null,"In Below, we explained step by step on how we can Dockerize the entire application"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stage-1--both-springboot-app--db-running-in-local-host-system"},"Stage 1 : Both SpringBoot App & DB Running in local (host system)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DB Connection String")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost:3306/MY_DB")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dockerfile")," "),(0,r.kt)("p",null,"Not applicable (N/A)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Docker-compose.yaml")," "),(0,r.kt)("p",null,"N/A"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stage-2--springboot-app-containerized-using-dockerfile--db-running-in-local-host-system"},"Stage 2 : SpringBoot App containerized using Dockerfile & DB Running in local (host system)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DB Connection String")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jdbc:mysql://host.docker.internal:3306/MY_DB")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dockerfile")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM openjdk:8-jdk-alpine\nCOPY EmpApp.jar EmpApp.jar\nCMD ["java", "-jar", "EmpApp.jar"]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Docker-compose.yaml")),(0,r.kt)("p",null,"N/A"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stage-3---springboot-app-containerized-using-docker-composeyaml--db-running-in-local-host-system"},"Stage 3 :  SpringBoot App containerized using docker-compose.yaml & DB Running in local (host system)"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DB Connection String")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jdbc:mysql://host.docker.internal:3306/MY_DB")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dockerfile")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM openjdk:8-jdk-alpine\nCOPY EmpApp.jar EmpApp.jar\nCMD ["java", "-jar", "EmpApp.jar"]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Docker-compose.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"version : '3'\nservices:\n  web:\n    image : emp-compose-img\n    build : .\n    ports :\n      - \"8080:8080\"\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"stage-4---both-springboot-app--mysql-db-containerized-using-docker-composeyaml"},"Stage 4 :  Both SpringBoot App & MySQL DB containerized using docker-compose.yaml"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DB Connection String")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"jdbc:mysql://db:3306/MY_DB")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dockerfile")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FROM openjdk:8-jdk-alpine\nCOPY EmpApp.jar EmpApp.jar\nCMD ["java", "-jar", "EmpApp.jar"]\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Docker-compose.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"version : '3'\nservices:\n  web:\n    image : emp-compose-img\n    build : .\n    ports :\n      - \"8080:8080\"\n  db:\n    image : mysql:5.7\n    restart : always\n    environment:\n      MYSQL_DATABASE: 'MY_DB'\n      MYSQL_ROOT_PASSWORD: 'rootroot'\n    expose :\n      - \"3306\"\n    volumes:\n      - ./scripts:/docker-entrypoint-initdb.d\n      - ./data:/var/lib/mysql\n")))}d.isMDXComponent=!0}}]);
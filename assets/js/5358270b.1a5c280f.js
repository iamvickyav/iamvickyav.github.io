"use strict";(self.webpackChunkinterview_guide=self.webpackChunkinterview_guide||[]).push([[321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:8},o="Java Generics",c={unversionedId:"java/generics",id:"java/generics",title:"Java Generics",description:"Java Generics enable types to be parameters when defining classes, interfaces and methods.",source:"@site/docs/java/generics.mdx",sourceDirName:"java",slug:"/java/generics",permalink:"/java/generics",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Array",permalink:"/java/array"},next:{title:"Collection & Streams",permalink:"/java/collection"}},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"java-generics"},"Java Generics"),(0,a.kt)("p",null,"Java Generics enable types to be parameters when defining classes, interfaces and methods."),(0,a.kt)("p",null,"It helps achieve & avoid ",(0,a.kt)("strong",{parentName:"p"},"ClassCastException")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Generics Sample"',title:'"Generics','Sample"':!0},'// Example taken from https://docs.oracle.com/javase/tutorial/java/generics/types.html\n\npublic class Box<T> {\n    // T stands for "Type"\n    private T t;\n\n    public void set(T t) { this.t = t; }\n    public T get() { return t; }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'T stands for the "Type"'),(0,a.kt)("li",{parentName:"ul"},"Type can be class/interface"),(0,a.kt)("li",{parentName:"ul"},"Type can't be primitive. E.g. int can't be generic but Integer can"),(0,a.kt)("li",{parentName:"ul"},"T in ",(0,a.kt)("inlineCode",{parentName:"li"},"Foo<T>")," is a type parameter & String in ",(0,a.kt)("inlineCode",{parentName:"li"},"Foo<String>")," f is a type argument"),(0,a.kt)("li",{parentName:"ul"},"Assigning RawType to Parametertised type will give warning")))}u.isMDXComponent=!0}}]);
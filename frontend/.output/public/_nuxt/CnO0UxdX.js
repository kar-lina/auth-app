import{_ as m}from"./gPbABvYE.js";import{_ as p,o as e,c as n,a as t,z as b,b as o,w as s,d as a,n as i,F as g,D as v,t as k,A as $}from"./BTuofGIq.js";import{u as y}from"./Cdxx4xVe.js";const A={},L={width:"36",height:"36",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd",class:"fill-current"},B=t("path",{d:"M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"},null,-1),C=[B];function z(d,l){return e(),n("svg",L,C)}const x=p(A,[["render",z]]),F={class:"navbar fixed shadow-sm bg-base-200 w-full"},N={class:"navbar-start"},S={class:"dropdown"},j=t("div",{tabindex:"0",role:"button",class:"btn btn-ghost lg:hidden"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h8m-8 6h16"})])],-1),D={tabindex:"0",class:"menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"},M={key:0},V={class:"navbar-center hidden lg:flex"},H={class:"menu menu-horizontal px-1"},I={key:0},E={class:"navbar-end"},O={key:0,class:"avatar"},T=t("img",{src:"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"},null,-1),U=b({__name:"Header",setup(d){const{logUserOut:l,authenticated:c}=y();return(f,r)=>{const u=m,_=m,w=x;return e(),n("header",F,[t("div",N,[t("div",S,[j,t("ul",D,[t("li",null,[o(u,{to:"/"},{default:s(()=>[a(" About App ")]),_:1})]),i(c)?(e(),n(g,{key:1},[t("li",null,[t("button",{onClick:r[0]||(r[0]=(...h)=>i(l)&&i(l)(...h))},"Logout")]),t("li",null,[o(_,{to:"/settings"},{default:s(()=>[a(" Settings ")]),_:1})])],64)):(e(),n("li",M,[o(_,{to:"/login"},{default:s(()=>[a(" Login ")]),_:1})]))])]),o(u,{to:"/",class:"btn btn-ghost text-xl"},{default:s(()=>[a(" AuthApp ")]),_:1})]),t("div",V,[t("ul",H,[t("li",null,[o(u,{to:"/"},{default:s(()=>[a(" About App ")]),_:1})]),i(c)?(e(),n(g,{key:1},[t("li",null,[t("button",{onClick:r[1]||(r[1]=(...h)=>i(l)&&i(l)(...h))},"Logout")]),t("li",null,[o(_,{to:"/settings"},{default:s(()=>[a(" Settings ")]),_:1})])],64)):(e(),n("li",I,[o(_,{to:"/login"},{default:s(()=>[a(" Login ")]),_:1})]))])]),t("div",E,[i(c)?(e(),n("div",O,[o(_,{to:"/profile",class:"w-10 overflow-hidden rounded-full"},{default:s(()=>[T]),_:1})])):(e(),v(w,{key:1,class:"w-7 h-7 md:w-auto md:h-auto"}))])])}}}),Y={},q={class:"footer bg-gradient-to-r from-purple-200 to-violet-300 text-neutral items-center p-4 text-[14px] md:text-base"},G={class:"grid-flow-col items-center"};function J(d,l){const c=x;return e(),n("footer",q,[t("aside",G,[o(c),t("p",null,"Copyright © "+k(new Date().getFullYear())+" - All right reserved",1)])])}const K=p(Y,[["render",J]]),P={},Q={class:"flex flex-col justify-between h-[100vh] w-full"},R={class:"xl:container xl:mx-auto p-4 h-full flex-1 pt-[68px]"};function W(d,l){const c=U,f=K;return e(),n("div",Q,[o(c),t("div",R,[$(d.$slots,"default")]),o(f)])}const ot=p(P,[["render",W]]);export{ot as default};

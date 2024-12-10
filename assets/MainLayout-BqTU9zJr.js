import{c as M,g as te,Q as O}from"./vm-C4rDM_6M.js";import{Q as U,a as D,b as N}from"./QTabs-CnOPJXOO.js";import{c as H,i as Y,e as Q,l as G,p as J,a as g,h,b as oe,g as $,w as F,o as ne,d as le,n as re,f as ie,r as x,j as ae,k as L,m as se,q as ce,_ as ue,u as de,s as fe,t as j,v as b,x as R,y as _,z as P,A as m,B as y,F as E,C as K,D as I}from"./index-D_BDBOMl.js";import{h as me,a as ge}from"./render-dChl5Uk-.js";import{F as ve}from"./FooterDefault-BfQAJVZ8.js";const he=H({name:"QPageContainer",setup(e,{slots:n}){const{proxy:{$q:o}}=$(),t=Y(G,Q);if(t===Q)return console.error("QPageContainer needs to be child of QLayout"),Q;J(oe,!0);const i=g(()=>{const r={};return t.header.space===!0&&(r.paddingTop=`${t.header.size}px`),t.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(r.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),r});return()=>h("div",{class:"q-page-container",style:i.value},me(n.default))}}),pe=[Element,String],be=[null,document,document.body,document.scrollingElement,document.documentElement];function ye(e,n){let o=te(n);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return be.includes(o)?window:o}function we(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Se(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let q;function k(){if(q!==void 0)return q;const e=document.createElement("p"),n=document.createElement("div");M(e,{width:"100%",height:"200px"}),M(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const o=e.offsetWidth;n.style.overflow="scroll";let t=e.offsetWidth;return o===t&&(t=n.clientWidth),n.remove(),q=o-t,q}const{passive:X}=ie,xe=["both","horizontal","vertical"],Ce=H({name:"QScrollObserver",props:{axis:{type:String,validator:e=>xe.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:pe},emits:["scroll"],setup(e,{emit:n}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,i,r;F(()=>e.scrollTarget,()=>{s(),p()});function d(){t!==null&&t();const w=Math.max(0,we(i)),S=Se(i),u={top:w-o.position.top,left:S-o.position.left};if(e.axis==="vertical"&&u.top===0||e.axis==="horizontal"&&u.left===0)return;const T=Math.abs(u.top)>=Math.abs(u.left)?u.top<0?"up":"down":u.left<0?"left":"right";o.position={top:w,left:S},o.directionChanged=o.direction!==T,o.delta=u,o.directionChanged===!0&&(o.direction=T,o.inflectionPoint=o.position),n("scroll",{...o})}function p(){i=ye(r,e.scrollTarget),i.addEventListener("scroll",a,X),a(!0)}function s(){i!==void 0&&(i.removeEventListener("scroll",a,X),i=void 0)}function a(w){if(w===!0||e.debounce===0||e.debounce==="0")d();else if(t===null){const[S,u]=e.debounce?[setTimeout(d,e.debounce),clearTimeout]:[requestAnimationFrame(d),cancelAnimationFrame];t=()=>{u(S),t=null}}}const{proxy:C}=$();return F(()=>C.$q.lang.rtl,d),ne(()=>{r=C.$el.parentNode,p()}),le(()=>{t!==null&&t(),s()}),Object.assign(C,{trigger:a,getPosition:()=>o}),re}}),Te=H({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:n,emit:o}){const{proxy:{$q:t}}=$(),i=x(null),r=x(t.screen.height),d=x(e.container===!0?0:t.screen.width),p=x({position:0,direction:"down",inflectionPoint:0}),s=x(0),a=x(ae.value===!0?0:k()),C=g(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=g(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),S=g(()=>a.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),u=g(()=>a.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function T(l){if(e.container===!0||document.qScrollPrevented!==!0){const c={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};p.value=c,e.onScroll!==void 0&&o("scroll",c)}}function Z(l){const{height:c,width:v}=l;let f=!1;r.value!==c&&(f=!0,r.value=c,e.onScrollHeight!==void 0&&o("scrollHeight",c),A()),d.value!==v&&(f=!0,d.value=v),f===!0&&e.onResize!==void 0&&o("resize",l)}function ee({height:l}){s.value!==l&&(s.value=l,A())}function A(){if(e.container===!0){const l=r.value>s.value?k():0;a.value!==l&&(a.value=l)}}let z=null;const V={instances:{},view:g(()=>e.view),isContainer:g(()=>e.container),rootRef:i,height:r,containerHeight:s,scrollbarWidth:a,totalWidth:g(()=>d.value+a.value),rows:g(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:L({size:0,offset:0,space:!1}),right:L({size:300,offset:0,space:!1}),footer:L({size:0,offset:0,space:!1}),left:L({size:300,offset:0,space:!1}),scroll:p,animate(){z!==null?clearTimeout(z):document.body.classList.add("q-body--layout-animate"),z=setTimeout(()=>{z=null,document.body.classList.remove("q-body--layout-animate")},155)},update(l,c,v){V[l][c]=v}};if(J(G,V),k()>0){let l=function(){f=null,B.classList.remove("hide-scrollbar")},c=function(){if(f===null){if(B.scrollHeight>t.screen.height)return;B.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(l,300)},v=function(W){f!==null&&W==="remove"&&(clearTimeout(f),l()),window[`${W}EventListener`]("resize",c)},f=null;const B=document.body;F(()=>e.container!==!0?"add":"remove",v),e.container!==!0&&v("add"),se(()=>{v("remove")})}return()=>{const l=ge(n.default,[h(Ce,{onScroll:T}),h(U,{onResize:Z})]),c=h("div",{class:C.value,style:w.value,ref:e.container===!0?void 0:i,tabindex:-1},l);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:i},[h(U,{onResize:ee}),h("div",{class:"absolute-full",style:S.value},[h("div",{class:"scroll",style:u.value},[c])])]):c}}});function ze(){return Y(ce)}const Le={components:{FooterDefault:ve},data(){return{pages:[{name:"info",label:"О фильме"},{name:"actors",label:"Актёры"},{name:"music",label:"Музыка"}],pagesBurger:[{name:"info",label:"О фильме"},{name:"actors",label:"Актёры"},{name:"music",label:"Музыка"},{name:"film",label:"Фильмы"}],burgerActive:!1,route:de(),router:fe(),$q:ze()}},methods:{redirect(e){this.router.push("/"+e),this.burgerActive=!1},changeBurger(){this.burgerActive=!this.burgerActive}}},_e={class:"layout-container"},Pe={class:"row full-width items-center",id:"layout"},qe={class:"page-container"},Be={key:1,class:"burger-menu"},Qe={class:"row full-width items-center"};function Re(e,n,o,t,i,r){const d=j("router-view"),p=j("FooterDefault");return b(),R(Te,{class:"main-layout",id:"main-layout"},{default:_(()=>[!i.burgerActive||i.$q.screen.width>820?(b(),P(E,{key:0},[m("div",_e,[m("div",Pe,[m("div",{class:"col-6 layoutLogo",onClick:n[0]||(n[0]=s=>r.redirect("film"))},n[4]||(n[4]=[m("div",null,"HP",-1)])),m("div",{class:"col-6 burger-container",onClick:n[1]||(n[1]=(...s)=>r.changeBurger&&r.changeBurger(...s))},[y(O,{class:"burger",name:"menu"})]),y(N,{"model-value":i.route.name,class:"col-6 pageSwapper",align:"right","active-class":"layoutTabs-active","onUpdate:modelValue":r.redirect},{default:_(()=>[(b(!0),P(E,null,K(i.pages,(s,a)=>(b(),R(D,I({key:a,ref_for:!0},s,{class:"q-ma-md layoutTabs"}),null,16))),128))]),_:1},8,["model-value","onUpdate:modelValue"])])]),m("div",qe,[y(he,null,{default:_(()=>[y(d)]),_:1})])],64)):(b(),P("div",Be,[m("div",Qe,[m("div",{class:"col-6 layoutLogo",onClick:n[2]||(n[2]=s=>r.redirect("film"))},n[5]||(n[5]=[m("div",null,"HP",-1)])),m("div",{class:"col-6 burger-container",onClick:n[3]||(n[3]=(...s)=>r.changeBurger&&r.changeBurger(...s))},[y(O,{class:"burger",name:"close"})])]),y(N,{"model-value":i.route.name,vertical:"","active-class":"layoutTabs-active","onUpdate:modelValue":r.redirect},{default:_(()=>[(b(!0),P(E,null,K(i.pagesBurger,(s,a)=>(b(),R(D,I({key:a,ref_for:!0},s,{class:"q-ma-md layoutTabs"}),null,16))),128))]),_:1},8,["model-value","onUpdate:modelValue"]),y(p)]))]),_:1})}const Ae=ue(Le,[["render",Re],["__file","MainLayout.vue"]]);export{Ae as default};

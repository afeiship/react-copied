var g=Object.defineProperty;var l=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var m=(o,e,t)=>e in o?g(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,f=(o,e)=>{for(var t in e||(e={}))u.call(e,t)&&m(o,t,e[t]);if(l)for(var t of l(e))p.call(e,t)&&m(o,t,e[t]);return o};var h=(o,e)=>{var t={};for(var n in o)u.call(o,n)&&e.indexOf(n)<0&&(t[n]=o[n]);if(o!=null&&l)for(var n of l(o))e.indexOf(n)<0&&p.call(o,n)&&(t[n]=o[n]);return t};import{n as y,r as C,d as x,_ as v,R as a,c as E,s as N,a as b}from"./vendor.5e7f65ef.js";const _=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};_();const d="react-copied";class c extends C.exports.Component{constructor(){super(...arguments);this.state={index:0},this.originalClick=()=>{const{onChange:e,interval:t}=this.props;this.setState({index:1}),setTimeout(()=>{this.setState({index:0}),e()},t)},this.handleClick=x(this.originalClick,1e3,!0)}get text(){const{items:e}=this.props;return e[this.state.index]}get disabled(){return Boolean(this.state.index)}render(){const i=this.props,{className:e,items:t,onChange:n}=i,s=h(i,["className","items","onChange"]),r=v(s);return a.createElement("button",f({"data-component":d,className:E(d,e),onClick:this.handleClick,disabled:this.disabled},r),this.text)}}c.displayName=d;c.version="__VERSION__";c.defaultProps={onChange:y,items:["Copy","Copied"],interval:600};const S=N.div`
  width: 80%;
  margin: 30px auto 0;
`;var L=o=>a.createElement(S,null,a.createElement(c,{onChange:e=>console.log("copied.")}));b.render(a.createElement(a.StrictMode,null,a.createElement(L,null)),document.getElementById("root"));

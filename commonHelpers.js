import{a as w,i as v,S as P}from"./assets/vendor-527658dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();async function u(r,e){const t="https://pixabay.com"+"/api/",o={key:"42434197-39cd5bed035ab257afa598fe1",q:encodeURIComponent(r),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};return(await w.get(t,{params:o})).data}function S(r){const{largeImageURL:e,webformatURL:c,tags:i,likes:t,views:o,comments:a,downloads:b}=r;return`<li class='gallery-item'>
  <a class='gallery-link' href='${e}'>
    <img
      class='gallery-image'
      src='${c}'
      alt='${i}'
    />
  </a>
  <ul class="gallery-item-info">
    <li class='gallery-item-info-categories'>likes<span>${t}</span></li>
    <li class='gallery-item-info-categories'>views<span>${o}</span></li> 
    <li class='gallery-item-info-categories'>comments<span>${a}</span></li> 
    <li class='gallery-item-info-categories'>downloads<span>${b}</span></li> 
  </ul>  
</li>`}function E(r){return r.map(S).join("")}const s={searchForm:document.querySelector(".form"),loader:document.querySelector(".loader"),listImages:document.querySelector("ul.gallery"),btnLoadMore:document.querySelector(".btn-load-more")};let l,d,m;s.searchForm.addEventListener("submit",I);s.btnLoadMore.addEventListener("click",M);async function I(r){if(r.preventDefault(),h(),d=s.searchForm.elements.text.value.trim(),!d){n("Empty field");return}l=1,s.listImages.innerHTML="",p();try{const e=await u(d,l);e.hits.length===0&&n("Sorry, there are no images matching your search query. Please try again!"),m=Math.ceil(e.totalHits/15),f(e.hits)}catch(e){n(e)}L.refresh(),y(),g(),s.searchForm.reset()}async function M(){l+=1,p();try{const e=await u(d,l);f(e.hits)}catch(e){n(e)}L.refresh(),y(),g();const r=s.listImages.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"})}function f(r){const e=E(r);s.listImages.insertAdjacentHTML("beforeend",e)}function q(){s.btnLoadMore.classList.remove("hidden")}function h(){s.btnLoadMore.classList.add("hidden")}function g(){l>=m?(h(),n("We're sorry, but you've reached the end of search results.")):q()}function p(){s.loader.classList.remove("hidden")}function y(){s.loader.classList.add("hidden")}function n(r){v.error({messageColor:"white",color:"#EF4040",position:"topRight",message:r})}const L=new P(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map

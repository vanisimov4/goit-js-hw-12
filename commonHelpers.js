import{a as v,i as w,S as P}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();async function m(i,t){const e="https://pixabay.com"+"/api/",o={key:"42434197-39cd5bed035ab257afa598fe1",q:encodeURIComponent(i),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await v.get(e,{params:o})).data}function S(i){const{largeImageURL:t,webformatURL:n,tags:a,likes:e,views:o,comments:r,downloads:b}=i;return`<li class='gallery-item'>
  <a class='gallery-link' href='${t}'>
    <img
      class='gallery-image'
      src='${n}'
      alt='${a}'
    />
  </a>
    <ul class="gallery-item-info">
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-likes'>
                    <h3 class="gallery-item-info-title">Likes</h3>
                <p class="gallery-item-info-text">${e}</p>
                </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-views'>
                    <h3 class="gallery-item-info-title">Views</h3>
                <p class="gallery-item-info-text">${o}</p>
                  </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-comments'>
                    <h3 class="gallery-item-info-title">Comments</h3>
                <p class="gallery-item-info-text">${r}</p>
                 </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-downloads'>
                    <h3 class="gallery-item-info-title">Downloads</h3>
                <p class="gallery-item-info-text">${b}</p>
                 </div>
    </li>
    </ul>  
</li>`}function x(i){return i.map(S).join("")}const s={form:document.querySelector(".form"),loader:document.querySelector(".loader"),listImages:document.querySelector("ul.gallery"),btnLoadMore:document.querySelector(".btn-load-more")};let l,c,f;s.form.addEventListener("submit",E);s.btnLoadMore.addEventListener("click",I);async function E(i){if(i.preventDefault(),g(),c=s.form.elements.text.value.trim(),!c){d("Empty field");return}l=1,s.listImages.innerHTML="",y();try{const t=await m(c,l);t.hits.length===0&&d("Sorry, there are no images matching your search query. Please try again!"),f=Math.ceil(t.totalHits/15),u(t.hits)}catch(t){d(t)}L.refresh(),p(),h(),s.form.reset()}async function I(){l+=1,y();const i=await m(c,l);u(i.hits),L.refresh(),p(),h();const t=s.listImages.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*t,behavior:"smooth"})}function u(i){const t=x(i);s.listImages.insertAdjacentHTML("beforeend",t)}function M(){s.btnLoadMore.classList.remove("hidden")}function g(){s.btnLoadMore.classList.add("hidden")}function h(){l>=f?(g(),d("We're sorry, but you've reached the end of search results.")):M()}function y(){s.loader.classList.remove("hidden")}function p(){s.loader.classList.add("hidden")}function d(i){w.error({messageColor:"white",color:"#EF4040",position:"topRight",message:i})}const L=new P(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map

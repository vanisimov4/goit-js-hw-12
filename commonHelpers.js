import{a as u,S as g}from"./assets/vendor-2bf96c8d.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function m(o,i){const e="https://pixabay.com"+"/api/",t={key:"42434197-39cd5bed035ab257afa598fe1",q:encodeURIComponent(o),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:i};return(await u.get(e,{params:t})).data}function y(o){const{largeImageURL:i,webformatURL:a,tags:r,likes:e,views:t,comments:l,downloads:f}=o;return`<li class='gallery-item'>
  <a class='gallery-link' href='${i}'>
    <img
      class='gallery-image'
      src='${a}'
      alt='${r}'
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
                <p class="gallery-item-info-text">${t}</p>
                  </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-comments'>
                    <h3 class="gallery-item-info-title">Comments</h3>
                <p class="gallery-item-info-text">${l}</p>
                 </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-downloads'>
                    <h3 class="gallery-item-info-title">Downloads</h3>
                <p class="gallery-item-info-text">${f}</p>
                 </div>
    </li>
    </ul>  
</li>`}function p(o){return o.map(y).join("")}const s={form:document.querySelector(".form"),loader:document.querySelector(".loader"),listImages:document.querySelector("ul.gallery"),btnLoadMore:document.querySelector(".btn-load-more")};let c,n;s.form.addEventListener("submit",h);s.btnLoadMore.addEventListener("click",L);async function h(o){if(o.preventDefault(),n=s.form.elements.text.value.trim(),!n){alert("Empty");return}c=1,s.loader.classList.remove("hidden");const i=await m(n,c);s.listImages.innerHTML="",d(i.hits),s.loader.classList.add("hidden"),s.btnLoadMore.classList.remove("hidden"),v.refresh(),s.form.reset()}async function L(){c+=1;const o=await m(n,c);d(o.hits)}function d(o){const i=p(o);s.listImages.insertAdjacentHTML("beforeend",i)}const v=new g(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map

import{a as b,i as v,S as w}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();async function m(i,t){const e="https://pixabay.com"+"/api/",o={key:"42434197-39cd5bed035ab257afa598fe1",q:encodeURIComponent(i),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t};return(await b.get(e,{params:o})).data}function P(i){const{largeImageURL:t,webformatURL:n,tags:a,likes:e,views:o,comments:r,downloads:L}=i;return`<li class='gallery-item'>
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
                <p class="gallery-item-info-text">${L}</p>
                 </div>
    </li>
    </ul>  
</li>`}function S(i){return i.map(P).join("")}const s={form:document.querySelector(".form"),loader:document.querySelector(".loader"),listImages:document.querySelector("ul.gallery"),btnLoadMore:document.querySelector(".btn-load-more")};let l,c,f;s.form.addEventListener("submit",x);s.btnLoadMore.addEventListener("click",E);async function x(i){if(i.preventDefault(),c=s.form.elements.text.value.trim(),!c){d("Empty field");return}l=1,s.listImages.innerHTML="",h();try{const t=await m(c,l);t.hits.length===0&&d("Sorry, there are no images matching your search query. Please try again!"),f=Math.ceil(t.totalHits/15),u(t.hits)}catch(t){d(t)}p.refresh(),y(),g(),s.form.reset()}async function E(){l+=1,h();const i=await m(c,l);u(i.hits),p.refresh(),y(),g()}function u(i){const t=S(i);s.listImages.insertAdjacentHTML("beforeend",t)}function M(){s.btnLoadMore.classList.remove("hidden")}function q(){s.btnLoadMore.classList.add("hidden")}function g(){l>=f?(q(),d("We're sorry, but you've reached the end of search results.")):M()}function h(){s.loader.classList.remove("hidden")}function y(){s.loader.classList.add("hidden")}function d(i){v.error({messageColor:"white",color:"#EF4040",position:"topRight",message:i})}const p=new w(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map

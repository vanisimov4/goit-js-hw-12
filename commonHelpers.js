import{a as m,i as f,S as g}from"./assets/vendor-527658dd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();async function u(e){return(await m.get("https://pixabay.com/api/",{params:{key:"42434197-39cd5bed035ab257afa598fe1",q:encodeURIComponent(`${e}`),image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function d(e){return`<li class='gallery-item'>
  <a class='gallery-link' href='${e.largeImageURL}'>
    <img
      class='gallery-image'
      src='${e.webformatURL}'
      alt='${e.tags}'
    />
  </a>
    <ul class="gallery-item-info">
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-likes'>
                    <h3 class="gallery-item-info-title">Likes</h3>
                <p class="gallery-item-info-text">${e.likes}</p>
                </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-views'>
                    <h3 class="gallery-item-info-title">Views</h3>
                <p class="gallery-item-info-text">${e.views}</p>
                  </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-comments'>
                    <h3 class="gallery-item-info-title">Comments</h3>
                <p class="gallery-item-info-text">${e.comments}</p>
                 </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-downloads'>
                    <h3 class="gallery-item-info-title">Downloads</h3>
                <p class="gallery-item-info-text">${e.downloads}</p>
                 </div>
    </li>
    </ul>  
</li>`}function y(e){return console.log(e),e.map(d).join("")}const o=document.querySelector(".form"),n=document.querySelector(".loader"),c=document.querySelector("ul.gallery");o.addEventListener("submit",p);function p(e){e.preventDefault();const s=o.elements.text.value.trim();s!==""&&(c.innerHTML="",n.classList.add("is-visible"),u(s).then(r=>{r.hits.length===0&&f.error({messageColor:"white",color:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),h(r.hits),n.classList.remove("is-visible"),v.refresh()}).catch(r=>{console.error(r)}),o.reset())}function h(e){const s=y(e);c.insertAdjacentHTML("afterbegin",s)}var v=new g(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map

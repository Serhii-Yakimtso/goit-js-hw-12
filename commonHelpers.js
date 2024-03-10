import{a as O,S as x,i as B}from"./assets/vendor-527658dd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function L(a,s,r){const o="https://pixabay.com/api/",e="42676798-23985956bba61249a12f13dde",t=new URLSearchParams({key:e,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:r}),{data:i}=await O.get(`${o}?${t}`);return i}function w(a,s,r){const o=a.map(({webformatURL:e,largeImageURL:t,tags:i,likes:P,views:M,comments:$,downloads:q})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${t}"
              ><img
                class="gallery-img"
                src="${e}"
                alt="${i}"
                width="360"
                height="152"
            /></a>
            <ul class="data-list">
              <li class="data-item likes">
                <p class="data-name">Likes</p>
                <p class="data-value">${P}</p>
              </li>
              <li class="data-item views">
                <p class="data-name">Views</p>
                <p class="data-value">${M}</p>
              </li>
              <li class="data-item comments">
                <p class="data-name">Comments</p>
                <p class="data-value">${$}</p>
              </li>
              <li class="data-item downloads">
                <p class="data-name">Downloads</p>
                <p class="data-value">${q}</p>
              </li>
            </ul>
          </li>
`).join("");s.insertAdjacentHTML("beforeend",o),r.classList.add("hidden"),s.classList.remove("hidden")}const l="/goit-js-hw-12/assets/error-84d0b865.svg",p=document.querySelector(".form"),u=document.querySelector(".gallery-list"),f=document.querySelector(".loader"),y=document.querySelector(".btn.load-more"),b=new x(".gallery-list a",{captionsData:"alt",captionDelay:250}),h=15;let n,d,g;p.addEventListener("submit",E);async function E(a){if(a.preventDefault(),A(),v(),d=a.target.elements.tag.value.trim(),d===""){c("Sorry, enter the tag","#ef4040",l);return}n=1,S();try{const{hits:r,totalHits:o}=await L(d,n,h);if(r.length===0){m(),c("Sorry, there are no images matching your search query. Please try again!","#ef4040",l),p.reset();return}g=o,w(r,u,f),o>h&&C(),b.refresh()}catch{m(),c("Oops. Something went wrong","#ef4040",l)}p.reset()}y.addEventListener("click",H);async function H(){S(),n+=1;try{const{hits:a,totalHits:s}=await L(d,n,h);g=s,n*h>=g&&(v(),c("We're sorry, but you've reached the end of search results.","#34c6eb")),m(),w(a,u,f),b.refresh(),D()}catch{m(),c("Oops. Something went wrong","#ef4040",l)}}function c(a,s,r=""){B.show({message:a,messageColor:"#fafafb",messageSize:"16px",iconUrl:r,position:"topRight",backgroundColor:s})}function A(){u.innerHTML="",u.classList.add("hidden")}function S(){f.classList.remove("hidden")}function m(){f.classList.add("hidden")}function C(){y.classList.remove("hidden")}function v(){y.classList.add("hidden")}function D(){const{height:a}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map

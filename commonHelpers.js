import{a as O,S as x,i as E}from"./assets/vendor-527658dd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();async function L(t,s,r){const o="https://pixabay.com/api/",e="42676798-23985956bba61249a12f13dde",a=new URLSearchParams({key:e,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:r}),{data:i}=await O.get(`${o}?${a}`);return i}function w(t,s,r){const o=t.map(({webformatURL:e,largeImageURL:a,tags:i,likes:P,views:M,comments:$,downloads:q})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${a}"
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
`).join("");s.insertAdjacentHTML("beforeend",o),r.classList.add("hidden"),s.classList.remove("hidden")}const d="/goit-js-hw-12/assets/error-84d0b865.svg",f=document.querySelector(".form"),l=document.querySelector(".gallery-list"),m=document.querySelector(".loader"),y=document.querySelector(".btn.load-more"),b=new x(".gallery-list a",{captionsData:"alt",captionDelay:250}),p=15;let n,u,g;f.addEventListener("submit",k);async function k(t){if(t.preventDefault(),H(),S(),u=t.target.elements.tag.value.trim(),u===""){c("Sorry, enter the tag","#ef4040",d);return}n=1,v();try{const{hits:r,totalHits:o}=await L(u,n,p);if(r.length===0){h(),c("Sorry, there are no images matching your search query. Please try again!","#ef4040",d),f.reset();return}g=o,w(r,l,m),A(),b.refresh()}catch{h(),c("Oops. Something went wrong","#ef4040",d)}f.reset()}y.addEventListener("click",B);async function B(){v(),n+=1;try{const{hits:t,totalHits:s}=await L(u,n,p);g=s,n*p>=g&&(S(),c("We're sorry, but you've reached the end of search results.","#34c6eb")),h(),w(t,l,m),b.refresh(),D()}catch{h(),c("Oops. Something went wrong","#ef4040",d)}}l.addEventListener("click",C);function C(t){t.target.nodeName}function c(t,s,r=""){E.show({message:t,messageColor:"#fafafb",messageSize:"16px",iconUrl:r,position:"topRight",backgroundColor:s})}function H(){l.innerHTML="",l.classList.add("hidden")}function v(){m.classList.remove("hidden")}function h(){m.classList.add("hidden")}function A(){y.classList.remove("hidden")}function S(){y.classList.add("hidden")}function D(){const{height:t}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map

!function(){var e,n,t,o;e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),o=function(){var t="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)},n.addEventListener("click",o),t.addEventListener("click",o),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(e.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));new Swiper(".gallerySwiper"),new Swiper(".mySwiper",{spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0}})}();
//# sourceMappingURL=index.6ac47f11.js.map
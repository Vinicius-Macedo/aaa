!function(){"use strict";var e=document.getElementById("toggle-icon"),t=document.getElementById("overlay"),n=document.getElementById("menu"),i=document.getElementsByTagName("body")[0],s=document.querySelector("#texto-container"),a=document.querySelector(".overlay-texto"),l=document.getElementById("btn-leia-mais"),c=document.querySelector("#informes-nav"),r=document.querySelector("#ferramentas-nav");function o(){n.classList.remove("active"),t.style.visibility="hidden",i.style.overflow="visible"}c.addEventListener("click",(function(e){c.classList.contains("active")?(c.classList.remove("active"),c.nextElementSibling.style.marginTop="0rem"):(c.classList.add("active"),screen.width<1279&&(c.nextElementSibling.style.marginTop="8.25rem"))})),r.addEventListener("click",(function(e){r.classList.contains("active-ferramentas")?(r.classList.remove("active-ferramentas"),r.nextElementSibling.style.marginTop="0rem"):(r.classList.add("active-ferramentas"),screen.width<1279&&(r.nextElementSibling.style.marginTop="26.5rem"))})),e.addEventListener("click",(function(s){n.classList.contains("active")?o():(t.style.visibility="visible",n.classList.add("active"),i.style.overflow="hidden",s.currentTarget.setAttribute("aria-expanded","true"),e.setAttribute("aria-label","Fechar menu"))})),t.addEventListener("click",(function(e){o()})),l.addEventListener("click",(function(){s.style.height="auto",a.style.display="none",l.style.display="none"})),(s.innerText.length<426||screen.width>=1024)&&(s.style.height="auto",a.style.display="none",l.style.display="none")}();
//# sourceMappingURL=bundle.js.map
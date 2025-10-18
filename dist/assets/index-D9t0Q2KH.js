(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}})();const v="/tasteology/assets/left@2x-DLD6W_SY.jpg",h="/tasteology/assets/right-top@2x-DK9jXROu.jpg",y="/tasteology/assets/right-bottom@2x-CLu9EV1g.jpg",b="/tasteology/assets/left@3x-BoteirHl.jpg",E="/tasteology/assets/right-top@3x-DYyM81mP.jpg",C="/tasteology/assets/right-bottom@3x-D9pQ6vIQ.jpg",I="/tasteology/assets/red@2x-BsivbrU8.jpg",L="/tasteology/assets/green@2x-CewhIevS.jpg",x="/tasteology/assets/white@2x-DR8H16-V.jpg";let u=null;function k(e,{src:s,alt:a,orientation:r}){e.src=s||"https://placehold.co/600x400",e.alt=a||"Default Modal Image";const o=e.closest(".modal-content");o&&(o.classList.remove("portrait"),r==="portrait"&&o.classList.add("portrait"))}function w({backdrop:e,content:s,section:a}){if(!e||!s)return;e.lastFocused=document.activeElement instanceof HTMLElement?document.activeElement:null,e.hidden=!1,document.documentElement.classList.add("no-scroll"),document.body.classList.add("no-scroll"),a.forEach(t=>t.classList.add("blur-background"));const r=s;r.setAttribute("tabindex","-1"),r.focus();const o=()=>Array.from(s.querySelectorAll('a[href], button, textarea, input, select, details,[tabindex]:not([tabindex="-1"])')).filter(t=>!t.hasAttribute("disabled")&&!t.getAttribute("aria-hidden"));u=t=>{if(t.key==="Escape"){t.stopPropagation(),g({backdrop:e,content:s});return}if(t.key==="Tab"){const i=o();if(i.length===0){t.preventDefault(),s.focus();return}const c=i[0],n=i[i.length-1];t.shiftKey&&document.activeElement===c?(t.preventDefault(),n.focus()):!t.shiftKey&&document.activeElement===n&&(t.preventDefault(),c.focus())}},document.addEventListener("keydown",u,!0)}function g({backdrop:e,content:s,section:a}){!e||!s||(e.hidden=!0,document.documentElement.classList.remove("no-scroll"),document.body.classList.remove("no-scroll"),a.forEach(r=>r.classList.remove("blur-background")),u&&(document.removeEventListener("keydown",u,!0),u=null),e.lastFocused&&typeof e.lastFocused.focus=="function"&&e.lastFocused.focus())}function D(e,{id:s,title:a,desc:r,src:o,alt:t,link:i}={}){if(!e)return;const c=document.createElement("div");if(a&&(c.id=`${a.toLowerCase()}Card`),c.classList.add("card-item"),o){const n=document.createElement("div");n.classList.add("card-item-image");const m=document.createElement("img");m.src=o,m.alt=t||`${a} Card Image`;const d=document.createElement("a");d.href=i,d.rel="noopener noreferrer",d.target="_blank",d.appendChild(m),console.log(`<a> tag for image ${s}:`,d),console.log("href:",i),n.appendChild(d),c.appendChild(n)}if(a||r){const n=document.createElement("div");n.classList.add("card-item-content");const m=document.createElement("div");m.classList.add("card-item-title"),m.textContent=a||"";const d=document.createElement("div");d.classList.add("card-item-desc"),d.textContent=r||"",n.appendChild(m),n.appendChild(d),c.appendChild(n)}return e.appendChild(c),c}function H(e,s,a=D){const r=Object.values(s);console.log("cardsValues:",r),r.forEach(o=>{a(e,o)})}document.querySelector("#app").innerHTML=`
  <main>
    <section id="gallerySection" class="gallery-section section">
      <div class="gutter">
        <div class="gallery-holder">
          <div class="gallery" style="grid-area: holder-1">
            <div class="gallery-item" style="grid-area: item-1" data-obj="leftImgHRes">
              <img src="${v}" alt="Gallery Image 1" />
            </div>
            <div class="gallery-item" style="grid-area: item-2" data-obj="rightTopImgHRes">
              <img src="${h}" alt="Gallery Image 2" />
            </div>
            <div class="gallery-item" style="grid-area: item-3" data-obj="rightBottomImgHRes">
              <img src="${y}" alt="Gallery Image 3" />
            </div>
          </div>
          <div class="gallery-content" style="grid-area: holder-2">
            <div class="content-title">WHAT DOES COOKING MEAN?</div>
            <hr class="divider" />
            <p>Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...</p>
            <div class="perfect-egg">THE PERFECT EGG</div>
            <div class="content-footer">Keep water between 67 and 68°C for a flavourful, tender yolk</div>
          </div>
        </div>
      </div>
    </section>
    <section id="cardsSection" class="cards-section section">
      <div class="gutter">
        <div class="section-title">
          <h1 class="relative mx-auto">Taste the Colour</h1>
        </div>
        <div class="cards-holder">

        </div>
      </div>
    </section>
    <div id="modalBackdrop" class="modal-backdrop fixed inset-0" hidden data-backdrop>
      <div class="modal-content main-gutter" role="dialog" tabindex="-1" aria-modal="true">
        <div class="modal-header">
          <div class="modal-close-btn" aria-label="Close Modal">&times;</div>
        </div>
        <div class="modal-image">
          <img src="" alt="Modal Image" />
        </div>
      </div>
    </div>
  </main>
`;const j=document.querySelectorAll(".gallery-item"),l=document.getElementById("modalBackdrop"),R=l.querySelector(".modal-image img"),T=l.querySelector(".modal-close-btn"),f=l.querySelector(".modal-content"),p=document.querySelectorAll("section"),A=document.querySelector(".cards-holder"),M={leftImgHRes:{src:b,alt:"Modal Image 1",orientation:"portrait"},rightTopImgHRes:{src:E,alt:"Modal Image 2",orientation:"landscape"},rightBottomImgHRes:{src:C,alt:"Modal Image 3",orientation:"landscape"}},S={redCard:{id:1,title:"Red",desc:"Red foods remind us of berries and soft fruits, so we anticipate a sweet taste.",src:I,alt:"Red Card Image",link:"#"},greenCard:{id:2,title:"Green",desc:"Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours",src:L,alt:"Green Card Image",link:"#"},whiteCard:{id:3,title:"White",desc:"White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat.",src:x,alt:"White Card Image",link:"#"}};H(A,S);j.forEach(e=>{e.setAttribute("role","button"),e.tabIndex=0;const s=()=>{const a=e.getAttribute("data-obj"),r=M[a];r&&(k(R,r),w({backdrop:l,content:f,section:p}))};e.addEventListener("click",s),e.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),s())})});T.addEventListener("click",()=>{g({backdrop:l,content:f,section:p})});l.addEventListener("click",e=>{e.target===l&&g({backdrop:l,content:f,section:p})});

/* Aurora de Carvalho — JS progressivo (SPEC-0002).
   Sem dependências. O menu funciona sem JS (nav visível); com JS vira
   hambúrguer em telas estreitas. Nada aqui é necessário para o conteúdo. */
(function(){
  "use strict";
  document.documentElement.classList.add("js");
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("primary-nav");
  if(toggle && nav){
    toggle.addEventListener("click", function(){
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function(e){
      if(e.target.closest("a")){
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function(e){
      if(e.key === "Escape" && nav.classList.contains("open")){
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }
  // Marca o link da página atual (reforço; cada página já declara aria-current).
  try{
    var here = (location.pathname.split("/").pop() || "index.html").split("?")[0].split("#")[0];
    if(here === "") here = "index.html";
    var links = nav ? nav.querySelectorAll("a") : [];
    links.forEach(function(a){
      var href = a.getAttribute("href");
      if(href === here && !a.hasAttribute("aria-current")){
        a.setAttribute("aria-current", "page");
      }
    });
  }catch(_e){/* silencioso: realce é cosmético */}
  // Ano dinâmico no rodapé.
  document.querySelectorAll("[data-year]").forEach(function(el){
    el.textContent = String(new Date().getFullYear());
  });
})();

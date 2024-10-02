var e=document.querySelectorAll("li"),t=document.querySelector(".tree");e.forEach(function(e){var t=document.createElement("span");t.textContent=e.firstChild.textContent.trim(),e.replaceChild(t,e.firstChild)}),t.addEventListener("click",function(e){var t=e.target.closest("li").querySelector("ul");t&&t.classList.toggle("hidden")});
//# sourceMappingURL=index.a5eec55b.js.map

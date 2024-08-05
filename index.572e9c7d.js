document.querySelectorAll("input").forEach(function(e){e.placeholder=e.name[0].toUpperCase()+e.name.slice(1).replace(/([a-z])([A-Z])/g,"$1 $2");var l=e.parentElement,a=document.createElement("label");a.innerHTML='<label for="'.concat(e.id,'" class="field-label">').concat(e.name,"</label>"),l.appendChild(a)});
//# sourceMappingURL=index.572e9c7d.js.map

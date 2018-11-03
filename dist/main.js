!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){"use strict";function n(e,t){Array.isArray(t)?t.forEach(function(t){return n(e,t)}):e.push(t)}e.exports=function(e,t){for(var r=[],s=arguments,o=2;o<s.length;o+=1)n(r,s[o]);if("function"==typeof e)return e(t||{},r);var i=document.createElement(e||"div");for(var a in t){var l=t[a];if(null!=l)if("dataset"===a)for(var u in l){var c=l[u];null!=c&&(i.dataset[u]=c)}else if("style"===a)if("string"==typeof l)i.style.cssText=l;else for(var m in l){var d=l[m];null!=d&&(i.style[m]=d)}else a in i||"function"==typeof l?(i[a]=l,!0===l&&i.setAttribute(a.toLowerCase(),"")):i.setAttribute(a,l)}return function e(t,r){r.forEach(function(r){null!=r&&(r.nodeType?t.appendChild(r):"string"==typeof r||"number"==typeof r?t.appendChild(document.createTextNode(r)):Array.isArray(r)&&e(t,r))})}(i,r),i}},function(e,t,r){"use strict";e.exports=function(){var e=Object.create(null),t={on:function(r,n){return e[r]||(e[r]=[]),e[r].push(n),t},off:function(r,n){if(e[r])if(null==n)e[r]=[];else{var s=e[r].indexOf(n);s>=0&&e[r].splice(s,1)}return t},emit:function(r,n){return e[r]&&e[r].forEach(function(e){return e(n)}),t}};return t}},function(e,t,r){"use strict";function n(e){var t=e.tos,r=e.other,n=window.location.hash;if(e.path=n,!n)return e.render=r,e.render(),e.render;var s=n.split("/");if(!s.length)return e.render=r,e.render(),e.render;for(var o=0;o<t.length;o+=1){var i=t[o].path;if(s.length===i.length){for(var a=Object.create(null),l=!0,u=0;u<i.length;u+=1){var c=i[u];if(":"===c[0])a[c.substring(1)]=s[u];else if(c!==s[u]){l=!1;break}}if(l)return e.render=t[o].to(a),e.render(),e.render}}return e.render=r,e.render(),e.render}e.exports=function(){var e={path:null,render:null,tos:[],other:null,route:function(t,r){return t&&r&&("*"===t?e.other=r:e.tos.push({path:t.split("/"),to:r})),e},redirect:function(t){return window.location.hash=t,n(e)},start:function(){return window.addEventListener("hashchange",function(){return n(e)}),n(e)}};return e}},function(e,t,r){"use strict";var n=1;function s(e,t){if(e.nodeType===t.nodeType)if(e.nodeType===n){if(function(e,t){var r=e.getAttribute("data-domsame"),n=t.getAttribute("data-domsame");return r&&n&&r===n||t.isSameNode(e)}(e,t))return;if(function(e,t){var r=Object.create(null),n=e.firstChild;for(;n;){var o=n;n=n.nextSibling;var l=i(o);l&&(r[l]=o)}n=e.firstChild;var u=t.firstChild,c=0;for(;u;){c+=1;var m=u;u=u.nextSibling;var d=i(m),f=d?r[d]:null;if(f)delete r[d],f===n?n=n.nextSibling:e.insertBefore(f,n),s(f,m);else if(n){var p=n;n=n.nextSibling,a(r,p)?e.insertBefore(m,p):s(p,m)}else e.appendChild(m)}for(var v in r)e.removeChild(r[v]);var w=e.childNodes.length-c;for(;--w>=0;)e.removeChild(e.lastChild)}(e,t),e.nodeName===t.nodeName)!function(e,t){for(var r=e.attributes,n=r.length-1;n>=0;n-=1){var s=r[n],i=s.namespaceURI,a=s.localName;t.hasAttributeNS(i,a)||e.removeAttributeNS(i,a)}for(var l=t.attributes,u=l.length-1;u>=0;u-=1){var c=l[u],m=c.namespaceURI,d=c.localName,f=t.getAttributeNS(m,d),p=e.getAttributeNS(m,d);f!==p&&e.setAttributeNS(m,d,f)}var v=e.nodeName;if("INPUT"===v){o(e,t,"checked"),o(e,t,"disabled"),o(e,t,"readOnly");var w=t.value;e.value!==w&&(e.value=w),t.hasAttributeNS(null,"value")||e.removeAttribute("value")}else if("TEXTAREA"===v){o(e,t,"disabled"),o(e,t,"readOnly");var h=t.value;e.value!==h&&(e.value=h)}else"OPTION"===v?(o(e,t,"selected"),o(e,t,"disabled")):"SELECT"===v&&o(e,t,"disabled")}(e,t);else{for(;t.lastChild;)t.removeChild(t.lastChild);for(;e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}}else e.nodeValue!==t.nodeValue&&(e.nodeValue=t.nodeValue);else e.parentNode.replaceChild(t,e)}function o(e,t,r){e[r]!==t[r]&&(e[r]=t[r],e[r]?e.setAttribute(r.toLowerCase(),""):e.removeAttribute(r.toLowerCase()))}function i(e){if(e.nodeType===n)return e.getAttribute("data-domkey")}function a(e,t){for(var r in e)if(e[r]===t)return!0;return!1}e.exports=s},function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),o=r(2),i=r.n(o),a=window.localStorage,l="js-petclinic",u=[{id:"1",name:"Cat"},{id:"2",name:"Dog"},{id:"3",name:"Lizard"},{id:"4",name:"Snake"},{id:"5",name:"Bird"},{id:"6",name:"Hamster"}],c=[{name:"James Carter",specialties:[]},{name:"Helen Leary",specialties:[{id:"1",name:"Radiology"}]},{name:"Linda Douglas",specialties:[{id:"2",name:"Surgery"},{id:"3",name:"Dentistry"}]},{name:"Henry Stevens",specialties:[{id:"2",name:"Surgery"}]},{name:"Sharon Jenkins",specialties:[{id:"1",name:"Radiology"}]}];function m(e,t){for(var r=0;r<e.length;r+=1){var n=e[r];if(n.id===t)return n}return null}var d=function(){var e={messages:[],petTypes:[],vets:[],owners:[],filteredOwners:[],ownersSearchForm:null,owner:null,ownerForm:null,pet:null,petForm:null,visitForm:null,load:function(){e.petTypes=u,e.owners=JSON.parse(a.getItem(l)||"[]")},save:function(){a.setItem(l,JSON.stringify(e.owners))},searchVets:function(){e.vets=c},setOwnersSearchForm:function(t,r){e.ownersSearchForm[t]=r},searchOwners:function(){e.ownersSearchForm&&e.ownersSearchForm.filter?e.filteredOwners=e.owners.filter(function(t){return t.name.startsWith(e.ownersSearchForm.filter)}):e.filteredOwners=e.owners},findOwner:function(t){e.owner=m(e.owners,t)},findPet:function(t,r){e.findOwner(t),e.pet=null==e.owner?null:m(e.owner.pets,r)},initOwnerForm:function(t){e.ownerForm=t?{id:t.id,name:t.name,address:t.address,telephone:t.telephone}:{isNew:!0}},setOwnerForm:function(t,r){e.ownerForm[t]=r},postOwnerForm:function(){if(e.ownerForm.isNew){var t=""+Date.now(),r={id:t,name:e.ownerForm.name,address:e.ownerForm.address,telephone:e.ownerForm.telephone,pets:[]};return e.owners.push(r),e.save(),t}var n=m(e.owners,e.ownerForm.id);if(n)return n.name=e.ownerForm.name,n.address=e.ownerForm.address,n.telephone=e.ownerForm.telephone,e.save(),n.id},initPetForm:function(t){e.petForm=t?{id:t.id,name:t.name,birthDate:t.birthDate,typeId:t.typeId}:{isNew:!0}},setPetForm:function(t,r){e.petForm[t]=r},postPetForm:function(){if(e.owner){var t=m(u,e.petForm.typeId),r=t?t.name:null;if(e.petForm.isNew){var n={id:""+Date.now(),name:e.petForm.name,birthDate:e.petForm.birthDate,typeId:e.petForm.typeId,typeName:r,visits:[]};return e.owner.pets.push(n),e.save(),e.owner.id}var s=m(e.owner.pets,e.petForm.id);if(s)return s.name=e.petForm.name,s.birthDate=e.petForm.birthDate,s.typeId=e.petForm.typeId,s.typeName=r,e.save(),e.owner.id}},initVisitForm:function(){e.visitForm={isNew:!0}},setVisitForm:function(t,r){e.visitForm[t]=r},postVisitForm:function(){if(e.owner&&e.pet&&e.visitForm.isNew){var t={id:""+Date.now(),visitDate:e.visitForm.visitDate,description:e.visitForm.description};return e.pet.visits.push(t),e.save(),e.owner.id}}};return e},f=r(3),p=r.n(f),v=r(0),w=r.n(v);var h=function(e){var t=e.path;return w()("nav",{class:"nav nav-pills nav-justified bg-secondary",role:"navigation"},w()("a",{class:"nav-item nav-link text-white"+("#/home"===t?" active":""),href:"#/home",title:"home page"},"Home"),w()("a",{class:"nav-item nav-link text-white"+(t&&t.startsWith("#/owners")?" active":""),href:"#/owners",title:"find owners"},"Owners"),w()("a",{class:"nav-item nav-link text-white"+("#/vets"===t?" active":""),href:"#/vets",title:"veterinarians"},"Veterinarians"))};var g=function(e,t){var r=e.path;return w()("div",{class:"container-fluid"},w()(h,{path:r}),w()("div",{class:"container mt-3"},t))};var b=function(e){return function(t,r){var n=g({path:r},t),s=e.lastChild;s?p()(s,n):e.appendChild(n)}};function y(e){return w()("div",{class:"alert alert-warning",role:"alert"},e)}var F=function(e){var t=e.messages;return w()("section",null,t&&t.length?t.map(y):null)};var O=function(e){return w()("article",null,w()("section",null,w()(F,{messages:e.messages}),w()("h2",null,"Welcome"),w()("div",{class:"text-center"},w()("img",{class:"img-fluid",src:"doubutsu_byouin.png"}))))};var N=function(e){var t=e.vets;return w()("article",null,w()(F,{messages:e.messages}),w()("section",null,w()("h2",null,"Veterinarians"),t&&t.length?w()("ul",{class:"list-group"},t.map(function(e){return w()("li",{"data-domkey":"vet-"+e.id,class:"list-group-item"},e.name,function(e){return e&&e.length?e.map(function(e){return w()("span",{class:"badge badge-info ml-2"},e.name)}):null}(e.specialties))})):null))};var S=function(e){var t=e.emitter,r=e.ownersSearchForm,n=e.owners;return w()("article",null,w()(F,{messages:e.messages}),w()("section",null,w()("h2",null,"Find Owners"),w()("form",{"data-domkey":"form-find-owners",class:"form-horizontal",onsubmit:function(){return t.emit("searchOwners",{})&&!1}},w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Name"),w()("div",{class:"col"},w()("input",{class:"form-control",type:"text",value:r.filter,onchange:function(e){return t.emit("setOwnersSearchForm",{name:"filter",value:e.target.value})}})),w()("div",{class:"col-sm-2"},w()("button",{class:"btn btn-secondary",type:"submit"},"Find Owners"))))),n&&n.length?w()("section",null,w()("h2",null,n.length," ",1===n.length?"Owner":"Owners"," Found"),w()("table",{class:"table table-striped"},w()("thead",null,w()("tr",null,w()("th",null,"Name"),w()("th",{class:"d-none d-md-table-cell"},"Address"),w()("th",null,"Telephone"),w()("th",{class:"d-none d-sm-table-cell"},"Pets"))),w()("tbody",null,n.map(function(e){return w()("tr",{"data-domkey":"owner-"+e.id},w()("td",null,w()("a",{href:"#/owners/"+e.id},e.name)),w()("td",{class:"d-none d-md-table-cell"},e.address),w()("td",null,e.telephone),w()("td",{class:"d-none d-sm-table-cell"},e.pets.map(function(e){return e.name}).join(", ")))})))):null,w()("section",null,w()("a",{href:"#/owners/new"},w()("button",{class:"btn btn-primary",type:"button"},"Add Owner"))))};var P=function(e){var t=e.owner;return w()("article",null,w()(F,{messages:e.messages}),t?w()("section",{class:"mb-4"},w()("h2",null,"Owner"),w()("div",{class:"card mb-2"},w()("ul",{class:"list-group list-group-flush"},w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Name"),w()("div",{class:"col"},t.name))),w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Address"),w()("div",{class:"col"},t.address))),w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Telephone"),w()("div",{class:"col"},t.telephone))),w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col"},w()("a",{class:"btn btn-primary",href:"#/owners/"+t.id+"/edit"},"Edit Owner")),w()("div",{class:"col"},w()("a",{class:"btn btn-primary",href:"#/owners/"+t.id+"/pets/new"},"Add New Pet"))))))):null,t&&t.pets&&t.pets.length?w()("section",null,w()("h2",null,"Pets and Visits"),t.pets.map(function(e){return w()("div",{"data-domkey":"pet-"+e.id,class:"card mb-2"},w()("ul",{class:"list-group list-group-flush"},w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Name"),w()("div",{class:"col"},e.name),w()("div",{class:"col-sm-2 font-weight-bold"},"Birth Date"),w()("div",{class:"col"},e.birthDate),w()("div",{class:"col-sm-2 font-weight-bold"},"Type"),w()("div",{class:"col"},e.typeName))),e.visits.map(function(e){return w()("li",{"data-domkey":"visit-"+e.id,class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2"},e.visitDate),w()("div",{class:"col",style:"white-space: pre-line"},e.description)))}),w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col"},w()("a",{class:"btn btn-primary",href:"#/owners/"+t.id+"/pets/"+e.id+"/edit"},"Edit Pet")),w()("div",{class:"col"},w()("a",{class:"btn btn-primary",href:"#/owners/"+t.id+"/pets/"+e.id+"/visits/new"},"Add Visit"))))))})):null)};var A=function(e){var t=e.emitter,r=e.ownerForm;return w()("article",null,w()(F,{messages:e.messages}),w()("section",null,w()("h2",null,r.isNew?"Add Owner":"Update Owner"),w()("form",{"data-domkey":"form-owner",class:"form-horizontal",onsubmit:function(){return t.emit("postOwnerForm",{})&&!1}},w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Name"),w()("div",{class:"col"},w()("input",{class:"form-control",type:"text",value:r.name,onchange:function(e){return t.emit("setOwnerForm",{name:"name",value:e.target.value})}}))),w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Address"),w()("div",{class:"col"},w()("input",{class:"form-control",type:"text",value:r.address,onchange:function(e){return t.emit("setOwnerForm",{name:"address",value:e.target.value})}}))),w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Telephone"),w()("div",{class:"col"},w()("input",{class:"form-control",type:"text",value:r.telephone,onchange:function(e){return t.emit("setOwnerForm",{name:"telephone",value:e.target.value})}}))),w()("div",{class:"form-group row"},w()("div",{class:"offset-sm-2 col"},w()("button",{class:"btn btn-primary",type:"submit"},r.isNew?"Add Owner":"Update Owner"))))))};var I=function(e){var t=e.emitter,r=e.petForm,n=e.owner,s=e.petTypes;return w()("article",null,w()(F,{messages:e.messages}),n?w()("section",null,w()("h2",null,r.isNew?"Add Pet":"Update Pet"),w()("div",{class:"card mb-3"},w()("div",{class:"card-header"},"Owner"),w()("ul",{class:"list-group list-group-flush"},w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Name"),w()("div",{class:"col"},n.name))))),w()("form",{"data-domkey":"form-pet",class:"form-horizontal",onsubmit:function(){return t.emit("postPetForm",{})&&!1}},w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Name"),w()("div",{class:" col"},w()("input",{class:"form-control",type:"text",value:r.name,onchange:function(e){return t.emit("setPetForm",{name:"name",value:e.target.value})}}))),w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Birth Date"),w()("div",{class:" col"},w()("input",{class:"form-control",type:"text",value:r.birthDate,onchange:function(e){return t.emit("setPetForm",{name:"birthDate",value:e.target.value})}}))),w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Type"),w()("div",{class:"col"},w()("select",{class:"form-control",value:r.typeId,onchange:function(e){return t.emit("setPetForm",{name:"typeId",value:e.target.value})}},w()("option",{"data-domkey":""}),s.map(function(e){return w()("option",{"data-domkey":e.id,value:e.id,selected:r.typeId===e.id},e.name)})))),w()("div",{class:"form-group row"},w()("div",{class:"offset-sm-2 col"},w()("button",{class:"btn btn-primary",type:"submit"},r.isNew?"Add Pet":"Update Pet"))))):null)};var x=function(e){var t=e.emitter,r=e.visitForm,n=e.owner,s=e.pet;return w()("article",null,w()(F,{messages:e.messages}),s?w()("section",null,w()("h2",null,"Add Visit"),w()("div",{class:"card mb-3"},w()("div",{class:"card-header"},"Pet"),w()("ul",{class:"list-group list-group-flush"},w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Name"),w()("div",{class:"col"},s.name),w()("div",{class:"col-sm-2 font-weight-bold"},"Birth Date"),w()("div",{class:"col"},s.birthDate),w()("div",{class:"col-sm-2 font-weight-bold"},"Type"),w()("div",{class:"col"},s.typeName))),w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Owner"),w()("div",{class:"col"},n.name))))),w()("form",{"data-domkey":"form-visit",class:"form-horizontal",onsubmit:function(){return t.emit("postVisitForm",{})&&!1}},w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Visit Date"),w()("div",{class:"col"},w()("input",{class:"form-control",type:"text",value:r.visitDate,onchange:function(e){return t.emit("setVisitForm",{name:"visitDate",value:e.target.value})}}))),w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Description"),w()("div",{class:"col"},w()("textarea",{class:"form-control",value:r.description,rows:"5",onchange:function(e){return t.emit("setVisitForm",{name:"description",value:e.target.value})}}))),w()("div",{class:"form-group row"},w()("div",{class:"offset-sm-2 col"},w()("button",{class:"btn btn-primary",type:"submit"},"Add Visit"))))):null,s&&s.visits&&s.visits.length?w()("section",null,w()("h2",null,"Previous Visits"),w()("ul",{class:"list-group"},s.visits.map(function(e){return w()("li",{"data-domkey":"visit-"+e.id,class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2"},e.visitDate),w()("div",{class:"col",style:"white-space: pre-line"},e.description)))}))):null)};(function(e,t,r,n){r.on("searchOwners",function(){e.messages=[],e.searchOwners(),n.render()}).on("setOwnersSearchForm",function(t){e.messages=[],e.setOwnersSearchForm(t.name,t.value),n.render()}).on("postOwnerForm",function(){e.messages=[];var t=e.postOwnerForm();if(t)return n.redirect("#/owners/"+t);n.render()}).on("setOwnerForm",function(t){e.messages=[],e.setOwnerForm(t.name,t.value),n.render()}).on("postPetForm",function(){e.messages=[];var t=e.postPetForm();if(t)return n.redirect("#/owners/"+t);n.render()}).on("setPetForm",function(t){e.messages=[],e.setPetForm(t.name,t.value),n.render()}).on("postVisitForm",function(){e.messages=[];var t=e.postVisitForm();if(t)return n.redirect("#/owners/"+t);n.render()}).on("setVisitForm",function(t){e.messages=[],e.setVisitForm(t.name,t.value),n.render()}),n.route("#/home",function(){return e.messages=[],function(){return t(O({messages:e.messages}),n.path)}}).route("#/vets",function(){return e.messages=[],e.searchVets(),function(){return t(N({messages:e.messages,vets:e.vets}),n.path)}}).route("#/owners",function(){return e.messages=[],e.ownersSearchForm={filter:""},e.searchOwners(),function(){return t(S({emitter:r,messages:e.messages,ownersSearchForm:e.ownersSearchForm,owners:e.filteredOwners}),n.path)}}).route("#/owners/new",function(){return e.messages=[],e.initOwnerForm(),function(){return t(A({emitter:r,messages:e.messages,ownerForm:e.ownerForm}),n.path)}}).route("#/owners/:ownerId",function(r){return e.messages=[],e.findOwner(r.ownerId),e.owner||e.messages.push("Owner now found."),function(){return t(P({messages:e.messages,owner:e.owner}),n.path)}}).route("#/owners/:ownerId/edit",function(s){return e.messages=[],e.findOwner(s.ownerId),e.owner||e.messages.push("Owner now found."),e.initOwnerForm(e.owner),function(){return t(A({emitter:r,messages:e.messages,ownerForm:e.ownerForm,owner:e.owner}),n.path)}}).route("#/owners/:ownerId/pets/new",function(s){return e.messages=[],e.findOwner(s.ownerId),e.owner||e.messages.push("Owner now found."),e.initPetForm(),function(){return t(I({emitter:r,messages:e.messages,petForm:e.petForm,owner:e.owner,petTypes:e.petTypes}),n.path)}}).route("#/owners/:ownerId/pets/:petId/edit",function(s){return e.messages=[],e.findPet(s.ownerId,s.petId),e.pet||e.messages.push("Pet now found."),e.initPetForm(e.pet),function(){return t(I({emitter:r,messages:e.messages,petForm:e.petForm,owner:e.owner,pet:e.pet,petTypes:e.petTypes}),n.path)}}).route("#/owners/:ownerId/pets/:petId/visits/new",function(s){return e.messages=[],e.findPet(s.ownerId,s.petId),e.pet||e.messages.push("Pet now found."),e.initVisitForm(),function(){return t(x({emitter:r,messages:e.messages,visitForm:e.visitForm,owner:e.owner,pet:e.pet}),n.path)}}).route("*",function(){return n.redirect("#/home")}),e.load(),n.start()})(d(),b(document.getElementById("app")),s()(),i()())}]);
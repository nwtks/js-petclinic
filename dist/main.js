!function(e){var r={};function t(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var s in e)t.d(n,s,function(r){return e[r]}.bind(null,s));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=4)}([function(e,r,t){"use strict";function n(e,r){Array.isArray(r)?r.forEach(function(r){return n(e,r)}):e.push(r)}e.exports=function(e,r){for(var t=[],s=arguments,o=2;o<s.length;o+=1)n(t,s[o]);if("function"==typeof e)return e(r||{},t);var i=document.createElement(e||"div");for(var a in r){var l=r[a];if(null!=l)if("dataset"===a)for(var u in l){var d=l[u];null!=d&&(i.dataset[u]=d)}else if("style"===a)if("string"==typeof l)i.style.cssText=l;else for(var c in l){var m=l[c];null!=m&&(i.style[c]=m)}else a in i||"function"==typeof l?(i[a]=l,!0===l&&i.setAttribute(a.toLowerCase(),"")):i.setAttribute(a,l)}return function e(r,t){t.forEach(function(t){null!=t&&(t.nodeType?r.appendChild(t):"string"==typeof t||"number"==typeof t?r.appendChild(document.createTextNode(t)):Array.isArray(t)&&e(r,t))})}(i,t),i}},function(e,r,t){"use strict";e.exports=function(){var e=Object.create(null),r={on:function(t,n){return e[t]||(e[t]=[]),e[t].push(n),r},off:function(t,n){if(e[t])if(null==n)e[t]=[];else{var s=e[t].indexOf(n);s>=0&&e[t].splice(s,1)}return r},emit:function(t,n){return e[t]&&e[t].forEach(function(e){return e(n)}),r}};return r}},function(e,r,t){"use strict";function n(e){var r=e.tos,t=e.other,n=window.location.hash;if(e.path=n,!n)return e.render=t,e.render(),e.render;var s=n.split("/");if(!s.length)return e.render=t,e.render(),e.render;for(var o=0;o<r.length;o+=1){var i=r[o].path;if(s.length===i.length){for(var a=Object.create(null),l=!0,u=0;u<i.length;u+=1){var d=i[u];if(":"===d[0])a[d.substring(1)]=s[u];else if(d!==s[u]){l=!1;break}}if(l)return e.render=r[o].to(a),e.render(),e.render}}return e.render=t,e.render(),e.render}e.exports=function(){var e={path:null,render:null,tos:[],other:null,route:function(r,t){return r&&t&&("*"===r?e.other=t:e.tos.push({path:r.split("/"),to:t})),e},redirect:function(r){return window.location.hash=r,n(e)},start:function(){return window.addEventListener("hashchange",function(){return n(e)}),n(e)}};return e}},function(e,r,t){"use strict";var n=1;function s(e,r){if(e.nodeType===r.nodeType)if(e.nodeType===n){if(function(e,r){var t=e.getAttribute("data-domsame"),n=r.getAttribute("data-domsame");return t&&n&&t===n||r.isSameNode(e)}(e,r))return;if(function(e,r){var t=Object.create(null),n=e.firstChild;for(;n;){var o=n;n=n.nextSibling;var l=i(o);l&&(t[l]=o)}n=e.firstChild;var u=r.firstChild,d=0;for(;u;){d+=1;var c=u;u=u.nextSibling;var m=i(c),f=m?t[m]:null;if(f)delete t[m],f===n?n=n.nextSibling:e.insertBefore(f,n),s(f,c);else if(n){var p=n;n=n.nextSibling,a(t,p)?e.insertBefore(c,p):s(p,c)}else e.appendChild(c)}for(var v in t)e.removeChild(t[v]);var w=e.childNodes.length-d;for(;--w>=0;)e.removeChild(e.lastChild)}(e,r),e.nodeName===r.nodeName)!function(e,r){for(var t=e.attributes,n=t.length-1;n>=0;n-=1){var s=t[n],i=s.namespaceURI,a=s.localName;r.hasAttributeNS(i,a)||e.removeAttributeNS(i,a)}for(var l=r.attributes,u=l.length-1;u>=0;u-=1){var d=l[u],c=d.namespaceURI,m=d.localName,f=r.getAttributeNS(c,m),p=e.getAttributeNS(c,m);f!==p&&e.setAttributeNS(c,m,f)}var v=e.nodeName;if("INPUT"===v){o(e,r,"checked"),o(e,r,"disabled"),o(e,r,"readOnly");var w=r.value;e.value!==w&&(e.value=w),r.hasAttributeNS(null,"value")||e.removeAttribute("value")}else if("TEXTAREA"===v){o(e,r,"disabled"),o(e,r,"readOnly");var h=r.value;e.value!==h&&(e.value=h)}else"OPTION"===v?(o(e,r,"selected"),o(e,r,"disabled")):"SELECT"===v&&o(e,r,"disabled")}(e,r);else{for(;r.lastChild;)r.removeChild(r.lastChild);for(;e.firstChild;)r.appendChild(e.firstChild);e.parentNode.replaceChild(r,e)}}else e.nodeValue!==r.nodeValue&&(e.nodeValue=r.nodeValue);else e.parentNode.replaceChild(r,e)}function o(e,r,t){e[t]!==r[t]&&(e[t]=r[t],e[t]?e.setAttribute(t.toLowerCase(),""):e.removeAttribute(t.toLowerCase()))}function i(e){if(e.nodeType===n)return e.getAttribute("data-domkey")}function a(e,r){for(var t in e)if(e[t]===r)return!0;return!1}e.exports=s},function(e,r,t){"use strict";t.r(r);var n=t(1),s=t.n(n),o=t(2),i=t.n(o),a=window.localStorage,l="js-petclinic",u=[{id:"1",name:"Cat"},{id:"2",name:"Dog"},{id:"3",name:"Lizard"},{id:"4",name:"Snake"},{id:"5",name:"Bird"},{id:"6",name:"Hamster"}],d=[{name:"James Carter",specialties:[]},{name:"Helen Leary",specialties:[{id:"1",name:"Radiology"}]},{name:"Linda Douglas",specialties:[{id:"2",name:"Surgery"},{id:"3",name:"Dentistry"}]},{name:"Henry Stevens",specialties:[{id:"2",name:"Surgery"}]},{name:"Sharon Jenkins",specialties:[{id:"1",name:"Radiology"}]}];function c(e,r){for(var t=0;t<e.length;t+=1){var n=e[t];if(n.id===r)return n}return null}var m=function(){var e={messages:[],errors:{},petTypes:[],vets:[],owners:[],filteredOwners:[],ownersSearchForm:null,owner:null,ownerForm:null,pet:null,petForm:null,visitForm:null,load:function(){e.petTypes=u,e.owners=JSON.parse(a.getItem(l)||"[]")},save:function(){a.setItem(l,JSON.stringify(e.owners))},searchVets:function(){e.vets=d},initOwnersSearchForm:function(){e.errors={},e.ownersSearchForm={filter:""}},setOwnersSearchForm:function(r,t){e.ownersSearchForm[r]=t},searchOwners:function(){e.ownersSearchForm&&e.ownersSearchForm.filter?e.filteredOwners=e.owners.filter(function(r){return r.name.startsWith(e.ownersSearchForm.filter)}):e.filteredOwners=e.owners},findOwner:function(r){e.owner=c(e.owners,r)},findPet:function(r,t){e.findOwner(r),e.pet=null==e.owner?null:c(e.owner.pets,t)},initOwnerForm:function(r){e.errors={},e.ownerForm=r?{id:r.id,name:r.name,address:r.address,telephone:r.telephone}:{isNew:!0}},setOwnerForm:function(r,t){e.ownerForm[r]=t},postOwnerForm:function(){if(!function(e){var r=!0;return e.ownerForm.name&&e.ownerForm.name.length?delete e.errors.name:(e.errors.name="Please provide a name.",r=!1),e.ownerForm.address&&e.ownerForm.address.length?delete e.errors.address:(e.errors.address="Please provide a address.",r=!1),e.ownerForm.telephone&&e.ownerForm.telephone.length?/^[0-9]{10,11}$/.test(e.ownerForm.telephone)?delete e.errors.telephone:(e.errors.telephone="Please provide a valid telephone.",r=!1):(e.errors.telephone="Please provide a telephone.",r=!1),r}(e))return null;if(e.ownerForm.isNew){var r=""+Date.now(),t={id:r,name:e.ownerForm.name,address:e.ownerForm.address,telephone:e.ownerForm.telephone,pets:[]};return e.owners.push(t),e.save(),r}var n=c(e.owners,e.ownerForm.id);return n?(n.name=e.ownerForm.name,n.address=e.ownerForm.address,n.telephone=e.ownerForm.telephone,e.save(),n.id):(e.messages.push("Owner now found."),null)},initPetForm:function(r){e.errors={},e.petForm=r?{id:r.id,name:r.name,birthDate:r.birthDate,typeId:r.typeId}:{isNew:!0}},setPetForm:function(r,t){e.petForm[r]=t},postPetForm:function(){if(e.owner){if(!function(e){var r=!0;return e.petForm.name&&e.petForm.name.length?delete e.errors.name:(e.errors.name="Please provide a name.",r=!1),e.petForm.birthDate&&e.petForm.birthDate.length?/^[0-9]{8}$/.test(e.petForm.birthDate)?delete e.errors.birthDate:(e.errors.birthDate="Please provide a valid birth date.",r=!1):delete e.errors.birthDate,e.petForm.typeId&&e.petForm.typeId.length?delete e.errors.typeId:(e.errors.typeId="Please choose a type.",r=!1),r}(e))return null;var r=c(u,e.petForm.typeId),t=r?r.name:null;if(e.petForm.isNew){var n={id:""+Date.now(),name:e.petForm.name,birthDate:e.petForm.birthDate,typeId:e.petForm.typeId,typeName:t,visits:[]};return e.owner.pets.push(n),e.save(),e.owner.id}var s=c(e.owner.pets,e.petForm.id);return s?(s.name=e.petForm.name,s.birthDate=e.petForm.birthDate,s.typeId=e.petForm.typeId,s.typeName=t,e.save(),e.owner.id):(e.messages.push("Pet now found."),null)}return e.messages.push("Owner now found."),null},initVisitForm:function(){e.errors={},e.visitForm={isNew:!0}},setVisitForm:function(r,t){e.visitForm[r]=t},postVisitForm:function(){if(!e.owner||!e.pet)return e.messages.push("Pet now found."),null;if(!function(e){var r=!0;return e.visitForm.visitDate&&e.visitForm.visitDate.length?/^[0-9]{8}$/.test(e.visitForm.visitDate)?delete e.errors.visitDate:(e.errors.visitDate="Please provide a valid visit date.",r=!1):(e.errors.visitDate="Please provide a visit date.",r=!1),delete e.errors.description,r}(e))return null;if(e.visitForm.isNew){var r={id:""+Date.now(),visitDate:e.visitForm.visitDate,description:e.visitForm.description};return e.pet.visits.push(r),e.save(),e.owner.id}}};return e},f=t(3),p=t.n(f),v=t(0),w=t.n(v);var h=function(e){var r=e.path;return w()("nav",{class:"nav nav-pills nav-justified bg-secondary",role:"navigation"},w()("a",{class:"nav-item nav-link text-white"+("#/home"===r?" active":""),href:"#/home",title:"home page"},"Home"),w()("a",{class:"nav-item nav-link text-white"+(r&&r.startsWith("#/owners")?" active":""),href:"#/owners",title:"find owners"},"Owners"),w()("a",{class:"nav-item nav-link text-white"+("#/vets"===r?" active":""),href:"#/vets",title:"veterinarians"},"Veterinarians"))};var g=function(e,r){var t=e.path;return w()("div",{class:"container-fluid"},w()(h,{path:t}),w()("div",{class:"container mt-3"},r))};var b=function(e){return function(r,t){var n=g({path:t},r),s=e.lastChild;s?p()(s,n):e.appendChild(n)}};function F(e){return w()("div",{class:"alert alert-warning",role:"alert"},e)}var y=function(e){var r=e.messages;return w()("section",null,r&&r.length?r.map(F):null)};var O=function(e){return w()("article",null,w()("section",null,w()(y,{messages:e.messages}),w()("h2",null,"Welcome"),w()("div",{class:"text-center"},w()("img",{class:"img-fluid",src:"doubutsu_byouin.png"}))))};var P=function(e){var r=e.vets;return w()("article",null,w()(y,{messages:e.messages}),w()("section",null,w()("h2",null,"Veterinarians"),r&&r.length?w()("ul",{class:"list-group"},r.map(function(e){return w()("li",{"data-domkey":"vet-"+e.id,class:"list-group-item"},e.name,function(e){return e&&e.length?e.map(function(e){return w()("span",{class:"badge badge-info ml-2"},e.name)}):null}(e.specialties))})):null))};var D=function(e){var r=e.emitter,t=e.ownersSearchForm,n=e.owners;return w()("article",null,w()(y,{messages:e.messages}),w()("section",null,w()("h2",null,"Find Owners"),w()("form",{"data-domkey":"form-find-owners",class:"form-horizontal",onsubmit:function(){return r.emit("searchOwners",{})&&!1}},w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Name"),w()("div",{class:"col"},w()("input",{class:"form-control",type:"text",value:t.filter,onchange:function(e){return r.emit("setOwnersSearchForm",{name:"filter",value:e.target.value})}})),w()("div",{class:"col-sm-2"},w()("button",{class:"btn btn-secondary",type:"submit"},"Find Owners"))))),n&&n.length?w()("section",null,w()("h2",null,n.length," ",1===n.length?"Owner":"Owners"," Found"),w()("table",{class:"table table-striped"},w()("thead",null,w()("tr",null,w()("th",null,"Name"),w()("th",{class:"d-none d-md-table-cell"},"Address"),w()("th",null,"Telephone"),w()("th",{class:"d-none d-sm-table-cell"},"Pets"))),w()("tbody",null,n.map(function(e){return w()("tr",{"data-domkey":"owner-"+e.id},w()("td",null,w()("a",{href:"#/owners/"+e.id},e.name)),w()("td",{class:"d-none d-md-table-cell"},e.address),w()("td",null,e.telephone),w()("td",{class:"d-none d-sm-table-cell"},e.pets.map(function(e){return e.name}).join(", ")))})))):null,w()("section",null,w()("a",{href:"#/owners/new"},w()("button",{class:"btn btn-primary",type:"button"},"Add Owner"))))};var N=function(e){var r=e.owner;return w()("article",null,w()(y,{messages:e.messages}),r?w()("section",{class:"mb-4"},w()("h2",null,"Owner"),w()("div",{class:"card mb-2"},w()("ul",{class:"list-group list-group-flush"},w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Name"),w()("div",{class:"col"},r.name))),w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Address"),w()("div",{class:"col"},r.address))),w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Telephone"),w()("div",{class:"col"},r.telephone))),w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col"},w()("a",{class:"btn btn-primary",href:"#/owners/"+r.id+"/edit"},"Edit Owner")),w()("div",{class:"col"},w()("a",{class:"btn btn-primary",href:"#/owners/"+r.id+"/pets/new"},"Add New Pet"))))))):null,r&&r.pets&&r.pets.length?w()("section",null,w()("h2",null,"Pets and Visits"),r.pets.map(function(e){return w()("div",{"data-domkey":"pet-"+e.id,class:"card mb-2"},w()("ul",{class:"list-group list-group-flush"},w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Name"),w()("div",{class:"col"},e.name),w()("div",{class:"col-sm-2 font-weight-bold"},"Birth Date"),w()("div",{class:"col"},e.birthDate),w()("div",{class:"col-sm-2 font-weight-bold"},"Type"),w()("div",{class:"col"},e.typeName))),e.visits.map(function(e){return w()("li",{"data-domkey":"visit-"+e.id,class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2"},e.visitDate),w()("div",{class:"col",style:"white-space: pre-line"},e.description)))}),w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col"},w()("a",{class:"btn btn-primary",href:"#/owners/"+r.id+"/pets/"+e.id+"/edit"},"Edit Pet")),w()("div",{class:"col"},w()("a",{class:"btn btn-primary",href:"#/owners/"+r.id+"/pets/"+e.id+"/visits/new"},"Add Visit"))))))})):null)};var S=function(e){var r=e.emitter,t=e.ownerForm,n=e.errors;return w()("article",null,w()(y,{messages:e.messages}),w()("section",null,w()("h2",null,t.isNew?"Add Owner":"Update Owner"),w()("form",{"data-domkey":"form-owner",class:"form-horizontal",onsubmit:function(){return r.emit("postOwnerForm",{})&&!1}},w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Name"),w()("div",{class:"col"},w()("input",{class:"form-control"+(n.name?" is-invalid":""),type:"text",value:t.name,onchange:function(e){return r.emit("setOwnerForm",{name:"name",value:e.target.value})}}),w()("div",{class:"invalid-feedback"},n.name))),w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Address"),w()("div",{class:"col"},w()("input",{class:"form-control"+(n.address?" is-invalid":""),type:"text",value:t.address,onchange:function(e){return r.emit("setOwnerForm",{name:"address",value:e.target.value})}}),w()("div",{class:"invalid-feedback"},n.address))),w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Telephone"),w()("div",{class:"col"},w()("input",{class:"form-control"+(n.telephone?" is-invalid":""),type:"text",value:t.telephone,onchange:function(e){return r.emit("setOwnerForm",{name:"telephone",value:e.target.value})}}),w()("div",{class:"invalid-feedback"},n.telephone))),w()("div",{class:"form-group row"},w()("div",{class:"offset-sm-2 col"},w()("button",{class:"btn btn-primary",type:"submit"},t.isNew?"Add Owner":"Update Owner"))))))};var I=function(e){var r=e.emitter,t=e.petForm,n=e.errors,s=e.owner,o=e.petTypes;return w()("article",null,w()(y,{messages:e.messages}),s?w()("section",null,w()("h2",null,t.isNew?"Add Pet":"Update Pet"),w()("div",{class:"card mb-3"},w()("div",{class:"card-header"},"Owner"),w()("ul",{class:"list-group list-group-flush"},w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Name"),w()("div",{class:"col"},s.name))))),w()("form",{"data-domkey":"form-pet",class:"form-horizontal",onsubmit:function(){return r.emit("postPetForm",{})&&!1}},w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Name"),w()("div",{class:" col"},w()("input",{class:"form-control"+(n.name?" is-invalid":""),type:"text",value:t.name,onchange:function(e){return r.emit("setPetForm",{name:"name",value:e.target.value})}}),w()("div",{class:"invalid-feedback"},n.name))),w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Birth Date"),w()("div",{class:" col"},w()("input",{class:"form-control"+(n.birthDate?" is-invalid":""),type:"text",value:t.birthDate,onchange:function(e){return r.emit("setPetForm",{name:"birthDate",value:e.target.value})}}),w()("div",{class:"invalid-feedback"},n.birthDate))),w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Type"),w()("div",{class:"col"},w()("select",{class:"form-control"+(n.typeId?" is-invalid":""),value:t.typeId,onchange:function(e){return r.emit("setPetForm",{name:"typeId",value:e.target.value})}},w()("option",{"data-domkey":""}),o.map(function(e){return w()("option",{"data-domkey":e.id,value:e.id,selected:t.typeId===e.id},e.name)})),w()("div",{class:"invalid-feedback"},n.typeId))),w()("div",{class:"form-group row"},w()("div",{class:"offset-sm-2 col"},w()("button",{class:"btn btn-primary",type:"submit"},t.isNew?"Add Pet":"Update Pet"))))):null)};var A=function(e){var r=e.emitter,t=e.visitForm,n=e.errors,s=e.owner,o=e.pet;return w()("article",null,w()(y,{messages:e.messages}),o?w()("section",null,w()("h2",null,"Add Visit"),w()("div",{class:"card mb-3"},w()("div",{class:"card-header"},"Pet"),w()("ul",{class:"list-group list-group-flush"},w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Name"),w()("div",{class:"col"},o.name),w()("div",{class:"col-sm-2 font-weight-bold"},"Birth Date"),w()("div",{class:"col"},o.birthDate),w()("div",{class:"col-sm-2 font-weight-bold"},"Type"),w()("div",{class:"col"},o.typeName))),w()("li",{class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2 font-weight-bold"},"Owner"),w()("div",{class:"col"},s.name))))),w()("form",{"data-domkey":"form-visit",class:"form-horizontal",onsubmit:function(){return r.emit("postVisitForm",{})&&!1}},w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Visit Date"),w()("div",{class:"col"},w()("input",{class:"form-control"+(n.visitDate?" is-invalid":""),type:"text",value:t.visitDate,onchange:function(e){return r.emit("setVisitForm",{name:"visitDate",value:e.target.value})}}),w()("div",{class:"invalid-feedback"},n.visitDate))),w()("div",{class:"form-group row"},w()("label",{class:"col-sm-2 col-form-label"},"Description"),w()("div",{class:"col"},w()("textarea",{class:"form-control"+(n.description?" is-invalid":""),value:t.description,rows:"5",onchange:function(e){return r.emit("setVisitForm",{name:"description",value:e.target.value})}}),w()("div",{class:"invalid-feedback"},n.description))),w()("div",{class:"form-group row"},w()("div",{class:"offset-sm-2 col"},w()("button",{class:"btn btn-primary",type:"submit"},"Add Visit"))))):null,o&&o.visits&&o.visits.length?w()("section",null,w()("h2",null,"Previous Visits"),w()("ul",{class:"list-group"},o.visits.map(function(e){return w()("li",{"data-domkey":"visit-"+e.id,class:"list-group-item"},w()("div",{class:"row"},w()("div",{class:"col-sm-2"},e.visitDate),w()("div",{class:"col",style:"white-space: pre-line"},e.description)))}))):null)};(function(e,r,t,n){t.on("searchOwners",function(){e.messages=[],e.searchOwners(),n.render()}).on("setOwnersSearchForm",function(r){e.messages=[],e.setOwnersSearchForm(r.name,r.value),n.render()}).on("postOwnerForm",function(){e.messages=[];var r=e.postOwnerForm();if(r)return n.redirect("#/owners/"+r);n.render()}).on("setOwnerForm",function(r){e.messages=[],e.setOwnerForm(r.name,r.value),n.render()}).on("postPetForm",function(){e.messages=[];var r=e.postPetForm();if(r)return n.redirect("#/owners/"+r);n.render()}).on("setPetForm",function(r){e.messages=[],e.setPetForm(r.name,r.value),n.render()}).on("postVisitForm",function(){e.messages=[];var r=e.postVisitForm();if(r)return n.redirect("#/owners/"+r);n.render()}).on("setVisitForm",function(r){e.messages=[],e.setVisitForm(r.name,r.value),n.render()}),n.route("#/home",function(){return e.messages=[],function(){return r(O({messages:e.messages}),n.path)}}).route("#/vets",function(){return e.messages=[],e.searchVets(),function(){return r(P({messages:e.messages,vets:e.vets}),n.path)}}).route("#/owners",function(){return e.messages=[],e.initOwnersSearchForm(),e.searchOwners(),function(){return r(D({emitter:t,messages:e.messages,errors:e.errors,ownersSearchForm:e.ownersSearchForm,owners:e.filteredOwners}),n.path)}}).route("#/owners/new",function(){return e.messages=[],e.initOwnerForm(),function(){return r(S({emitter:t,messages:e.messages,errors:e.errors,ownerForm:e.ownerForm}),n.path)}}).route("#/owners/:ownerId",function(t){return e.messages=[],e.findOwner(t.ownerId),e.owner||e.messages.push("Owner now found."),function(){return r(N({messages:e.messages,owner:e.owner}),n.path)}}).route("#/owners/:ownerId/edit",function(s){return e.messages=[],e.findOwner(s.ownerId),e.owner||e.messages.push("Owner now found."),e.initOwnerForm(e.owner),function(){return r(S({emitter:t,messages:e.messages,errors:e.errors,ownerForm:e.ownerForm,owner:e.owner}),n.path)}}).route("#/owners/:ownerId/pets/new",function(s){return e.messages=[],e.findOwner(s.ownerId),e.owner||e.messages.push("Owner now found."),e.initPetForm(),function(){return r(I({emitter:t,messages:e.messages,errors:e.errors,petForm:e.petForm,owner:e.owner,petTypes:e.petTypes}),n.path)}}).route("#/owners/:ownerId/pets/:petId/edit",function(s){return e.messages=[],e.findPet(s.ownerId,s.petId),e.pet||e.messages.push("Pet now found."),e.initPetForm(e.pet),function(){return r(I({emitter:t,messages:e.messages,errors:e.errors,petForm:e.petForm,owner:e.owner,pet:e.pet,petTypes:e.petTypes}),n.path)}}).route("#/owners/:ownerId/pets/:petId/visits/new",function(s){return e.messages=[],e.findPet(s.ownerId,s.petId),e.pet||e.messages.push("Pet now found."),e.initVisitForm(),function(){return r(A({emitter:t,messages:e.messages,errors:e.errors,visitForm:e.visitForm,owner:e.owner,pet:e.pet}),n.path)}}).route("*",function(){return n.redirect("#/home")}),e.load(),n.start()})(m(),b(document.getElementById("app")),s()(),i()())}]);
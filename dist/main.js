!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";function r(e,t){Array.isArray(t)?t.forEach(function(t){return r(e,t)}):e.push(t)}e.exports=function(e,t){for(var n=[],s=arguments,i=2;i<s.length;i+=1)r(n,s[i]);return"function"==typeof e?e(t||{},n):{name:e||"div",attrs:t||{},children:n.filter(function(e){return null!=e})}}},function(e,t,n){"use strict";e.exports=function(){var e=Object.create(null),t={on:function(n,r){return e[n]||(e[n]=[]),e[n].push(r),t},off:function(n,r){if(e[n])if(null==r)e[n]=[];else{var s=e[n].indexOf(r);s>=0&&e[n].splice(s,1)}return t},emit:function(n,r){return e[n]&&e[n].forEach(function(e){return e(r)}),t}};return t}},function(e,t,n){"use strict";var r=window.location;function s(e){var t=e.tos,n=e.other,s=r.hash;if(e.path=s,s){var i=s.split("/");if(i.length)for(var o=0;o<t.length;o+=1){var a=t[o],l=a.path;if(i.length===l.length){for(var u=Object.create(null),c=!0,d=0;d<l.length;d+=1){var m=l[d];if(":"===m[0])u[m.substring(1)]=i[d];else if(m!==i[d]){c=!1;break}}if(c)return void a.to(u,f)}}}function f(t){e.render=t,e.render()}n({},f)}e.exports=function(){var e={path:null,render:null,tos:[],other:null,lstnr:null,route:function(t,n){return t&&n&&("*"===t?e.other=n:e.tos.push({path:t.split("/"),to:n})),e},redirect:function(e){r.hash=e},start:function(){e.lstnr=function(){return s(e)},window.addEventListener("hashchange",e.lstnr),s(e)},stop:function(){window.removeEventListener("hashchange",e.lstnr),e.lstnr=null}};return e}},function(e,t,n){"use strict";e.exports=function(){var e=!1,t=null;return function(n){t=n,e||(e=!0,window.requestAnimationFrame(function(){e=!1,t&&t(),t=null}))}}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=1,i=3,o=Array.isArray;function a(e,t){if("TEXTAREA"!==e.nodeName){var n=function(e,t){var n=[];t.forEach(function(e){e&&e.attrs&&e.attrs.domkey&&n.push(e.attrs.domkey)});for(var r=Object.create(null),s=e.firstChild;s;s=s.nextSibling){var i=f(s);i&&(n.indexOf(i)>=0?r[i]=s:w(e,s))}return r}(e,t),s=e.firstChild;t.forEach(function(t){var o=r(t);"string"===o||"number"===o?s=function(e,t,n){t?t.nodeType===i?(t.nodeValue!==n&&(t.nodeValue=n),t=t.nextSibling):v(e,h(n),t):p(e,h(n));return t}(e,s,""+t):function(e){return e&&e.name&&e.attrs&&e.children}(t)&&(s=function(e,t,n,r){var s=r.attrs.domkey,i=s?n[s]:null;if(i)delete n[s],u(i,r.attrs),a(i,r.children),i===t?t=t.nextSibling:v(e,i,t);else if(t)if(s)v(e,l(r),t);else for(;;){if(!t){p(e,l(r));break}if(!b(n,t)){m(t,r)?(u(t,r.attrs),a(t,r.children),t=t.nextSibling):v(e,l(r),t);break}t=t.nextSibling}else p(e,l(r));return t}(e,s,n,t))}),function(e,t){for(var n in t)w(e,t[n])}(e,n),function(e,t){for(var n=e.childNodes.length-t.length;n>0;--n)w(e,e.lastChild)}(e,t)}}function l(e){var t=document.createElement(e.name);return u(t,e.attrs),a(t,e.children),t}function u(e,t){!function(e,t){for(var n=e.attributes,r=n.length-1;r>=0;--r){var s=n[r],i=s.name;t.hasOwnProperty(i)&&null!=t[i]||g(e,i)}}(e,t),Object.getOwnPropertyNames(t).forEach(function(n){return function(e,t,n){var s=r(n);"style"===t?c(e,t,n):t in e?(y(e,t,n),d(e,t.toLowerCase(),n)):"function"===s||"o"===t[0]&&"n"===t[1]?y(e,t,n):"boolean"===s?d(e,t,n):c(e,t,n)}(e,n,t[n])}),function(e,t){var n=e.nodeName,r=null==t.value?"":""+t.value,s=!!t.checked,i=!!t.selected;"INPUT"===n?(y(e,"checked",s),d(e,"checked",s),y(e,"value",r),c(e,"value",t.value)):"TEXTAREA"===n?y(e,"value",r):"OPTION"===n&&(y(e,"selected",i),d(e,"selected",i))}(e,t)}function c(e,t,n){null==n?g(e,t):n!==e.getAttribute(t)&&e.setAttribute(t,n)}function d(e,t,n){!0===n?c(e,t,""):!1===n&&g(e,t)}function m(e,t){return e.nodeType===s&&e.nodeName.toLowerCase()===t.name.toLowerCase()}function f(e){if(e.nodeType===s)return e.getAttribute("domkey")}function p(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n)}function w(e,t){e.removeChild(t)}function h(e){return document.createTextNode(e)}function g(e,t){e.removeAttribute(t)}function b(e,t){for(var n in e)if(e[n]===t)return!0;return!1}function y(e,t,n){n!==e[t]&&(e[t]=n)}e.exports=function(e,t){o(t)?a(e,t):null!=t?a(e,[t]):function(e){for(var t=e.lastChild;t;t=e.lastChild)w(e,t)}(e)}},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),i=n(2),o=n.n(i),a=n(3),l=n.n(a);function u(e){return e?"":"display:none"}function c(e,t){for(var n=0;n<e.length;n+=1){var r=e[n];if(r.id===t)return r}return null}var d=window.localStorage,m="js-petclinic",f=[{id:"1",name:"Cat"},{id:"2",name:"Dog"},{id:"3",name:"Lizard"},{id:"4",name:"Snake"},{id:"5",name:"Bird"},{id:"6",name:"Hamster"}];function p(e,t){var n=!0;return t&&"name"!==t||(e.ownerForm.name&&e.ownerForm.name.length?delete e.errors.name:(e.errors.name="Please provide a name.",n=!1)),t&&"address"!==t||(e.ownerForm.address&&e.ownerForm.address.length?delete e.errors.address:(e.errors.address="Please provide a address.",n=!1)),t&&"telephone"!==t||(e.ownerForm.telephone&&e.ownerForm.telephone.length?/^[0-9]{10,11}$/.test(e.ownerForm.telephone)?delete e.errors.telephone:(e.errors.telephone="Please provide a valid telephone.",n=!1):(e.errors.telephone="Please provide a telephone.",n=!1)),n}function v(e,t){var n=!0;return t&&"name"!==t||(e.petForm.name&&e.petForm.name.length?delete e.errors.name:(e.errors.name="Please provide a name.",n=!1)),t&&"birthDate"!==t||(e.petForm.birthDate&&e.petForm.birthDate.length?/^[0-9]{8}$/.test(e.petForm.birthDate)?delete e.errors.birthDate:(e.errors.birthDate="Please provide a valid birth date.",n=!1):delete e.errors.birthDate),t&&"typeId"!==t||(e.petForm.typeId&&e.petForm.typeId.length?delete e.errors.typeId:(e.errors.typeId="Please choose a type.",n=!1)),n}function w(e,t){var n=!0;return t&&"visitDate"!==t||(e.visitForm.visitDate&&e.visitForm.visitDate.length?/^[0-9]{8}$/.test(e.visitForm.visitDate)?delete e.errors.visitDate:(e.errors.visitDate="Please provide a valid visit date.",n=!1):(e.errors.visitDate="Please provide a visit date.",n=!1)),t&&"description"!==t||delete e.errors.description,n}var h=function(){var e={messages:[],errors:{},petTypes:[],owners:[],filteredOwners:[],ownersSearchForm:null,owner:null,ownerForm:null,pet:null,petForm:null,visit:null,visitForm:null,load:function(){e.owners=JSON.parse(d.getItem(m)||"[]")},save:function(){d.setItem(m,JSON.stringify(e.owners))},loadPetTypes:function(){e.petTypes=f},initOwnersSearchForm:function(){e.errors={},e.ownersSearchForm={filter:""}},inputOwnersSearchForm:function(t,n){e.ownersSearchForm[t]=n},searchOwners:function(){if(e.ownersSearchForm&&e.ownersSearchForm.filter){var t=e.ownersSearchForm.filter;e.filteredOwners=e.owners.filter(function(e){return e.name.substr(0,t.length)===t})}else e.filteredOwners=e.owners},findOwner:function(t){e.owner=c(e.owners,t),e.owner||e.messages.push("Owner now found.")},findPet:function(t,n){e.findOwner(t),e.owner?(e.pet=c(e.owner.pets,n),e.pet||e.messages.push("Pet not found.")):e.pet=null},findVisit:function(t,n,r){e.findPet(t,n),e.pet?(e.visit=c(e.pet.visits,r),e.visit||e.messages.push("Visit not found.")):e.visit=null},initOwnerForm:function(t){e.errors={},e.ownerForm=t?{id:t.id,name:t.name,address:t.address,telephone:t.telephone}:{isNew:!0}},inputOwnerForm:function(t,n){e.ownerForm[t]=n},setOwnerForm:function(t,n){e.ownerForm[t]=n,p(e,t)},postOwnerForm:function(){if(!p(e))return null;if(e.ownerForm.isNew){var t=""+Date.now(),n={id:t,name:e.ownerForm.name,address:e.ownerForm.address,telephone:e.ownerForm.telephone,pets:[]};return e.owners.push(n),e.save(),t}var r=c(e.owners,e.ownerForm.id);return r?(r.name=e.ownerForm.name,r.address=e.ownerForm.address,r.telephone=e.ownerForm.telephone,e.save(),r.id):(e.messages.push("Owner now found."),null)},initPetForm:function(t,n){e.errors={},e.petForm=n?{id:n.id,name:n.name,birthDate:n.birthDate,typeId:n.type.id,owerId:t}:{isNew:!0,owerId:t}},inputPetForm:function(t,n){e.petForm[t]=n},setPetForm:function(t,n){e.petForm[t]=n,v(e,t)},postPetForm:function(){if(e.owner){if(!v(e))return null;var t=c(f,e.petForm.typeId);if(e.petForm.isNew){var n={id:""+Date.now(),name:e.petForm.name,birthDate:e.petForm.birthDate,type:t,visits:[]};return e.owner.pets.push(n),e.save(),e.owner.id}var r=c(e.owner.pets,e.petForm.id);return r?(r.name=e.petForm.name,r.birthDate=e.petForm.birthDate,r.type=t,e.save(),e.owner.id):(e.messages.push("Pet now found."),null)}return e.messages.push("Owner now found."),null},initVisitForm:function(t,n,r){e.errors={},e.visitForm=r?{id:r.id,visitDate:r.visitDate,description:r.description,owerId:t,petId:n}:{isNew:!0,owerId:t,petId:n}},inputVisitForm:function(t,n){e.visitForm[t]=n},setVisitForm:function(t,n){e.visitForm[t]=n,w(e,t)},postVisitForm:function(){if(e.owner&&e.pet){if(!w(e))return null;if(e.visitForm.isNew){var t={id:""+Date.now(),visitDate:e.visitForm.visitDate,description:e.visitForm.description};return e.pet.visits.push(t),e.save(),e.owner.id}var n=c(e.pet.visits,e.visitForm.id);return n?(n.visitDate=e.visitForm.visitDate,n.description=e.visitForm.description,e.save(),e.owner.id):(e.messages.push("Visit now found."),null)}return e.messages.push("Pet now found."),null}};return e},g=[{name:"James Carter",specialties:[]},{name:"Helen Leary",specialties:[{id:"1",name:"Radiology"}]},{name:"Linda Douglas",specialties:[{id:"2",name:"Surgery"},{id:"3",name:"Dentistry"}]},{name:"Henry Stevens",specialties:[{id:"2",name:"Surgery"}]},{name:"Sharon Jenkins",specialties:[{id:"1",name:"Radiology"}]}];var b=function(){var e={messages:[],vets:[],searchVets:function(){e.vets=g}};return e},y=n(4),F=n.n(y),O=n(0),P=n.n(O);var D=function(e){var t=e.path;return P()("nav",{class:"nav nav-pills nav-justified bg-secondary"},P()("a",{class:"nav-item nav-link text-white"+("#/home"===t?" active":""),href:"#/home",title:"home page"},"Home"),P()("a",{class:"nav-item nav-link text-white"+(t&&/^#\/owners/.test(t)?" active":""),href:"#/owners",title:"find owners"},"Owners"),P()("a",{class:"nav-item nav-link text-white"+("#/vets"===t?" active":""),href:"#/vets",title:"veterinarians"},"Veterinarians"))};var I=function(e,t){var n=e.path;return P()("div",{class:"container-fluid"},P()(D,{path:n}),P()("div",{class:"container mt-3"},t))};var k=function(e,t){return function(n,r){var s=I({path:r},n);t(function(){return F()(e,s)})}};function S(e){var t=e.message;return P()("div",{class:"alert alert-warning",role:"alert"},t)}var V=function(e){var t=e.messages,n=t&&t.length;return P()("section",null,n?t.map(function(e){return P()(S,{message:e})}):null)};var N=function(e){var t=e.messages;return P()("article",null,P()(V,{messages:t}),P()("section",null,P()("h2",null,"Welcome"),P()("div",{class:"text-center"},P()("img",{class:"img-fluid",src:"doubutsu_byouin.png"}))))};function x(e){var t=e.vet,n=t&&t.specialties&&t.specialties.length;return P()("li",{domkey:"vet-"+t.id,class:"list-group-item"},t.name,n?t.specialties.map(function(e){return P()(T,{specialty:e})}):null)}function T(e){var t=e.specialty;return P()("span",{class:"badge badge-info ml-2"},t.name)}var A=function(e){var t=e.messages,n=e.vets,r=n&&n.length;return P()("article",null,P()(V,{messages:t}),P()("section",null,P()("h2",null,"Veterinarians"),P()("ul",{class:"list-group",style:u(r)},r?n.map(function(e){return P()(x,{vet:e})}):null)))};function E(e){var t=e.owner;return P()("tr",{domkey:"owner-"+t.id},P()("td",null,P()("a",{href:"#/owners/"+t.id},t.name)),P()("td",{class:"d-none d-md-table-cell"},t.address),P()("td",null,t.telephone),P()("td",{class:"d-none d-sm-table-cell"},t.pets.map(function(e){return e.name}).join(", ")))}var j=function(e){var t=e.messages,n=e.emit,r=e.form,s=e.owners,i=s&&s.length;return P()("article",null,P()(V,{messages:t}),P()("section",null,P()("h2",null,"Find Owners"),P()("form",{domkey:"form-find-owners",class:"form-horizontal",onsubmit:function(){return n("searchOwners",{})&&!1}},P()("div",{class:"form-group row"},P()("label",{class:"col-sm-2 col-form-label"},"Name"),P()("div",{class:"col"},P()("input",{class:"form-control",type:"text",value:r.filter,oninput:function(e){return n("inputOwnersSearchForm",{name:"filter",value:e.target.value})}})),P()("div",{class:"col-sm-2"},P()("button",{class:"btn btn-secondary",type:"submit"},"Find Owners"))))),P()("section",null,P()("h2",null,i?1===s.length?"1 Owner Found":s.length+" Owners Found":""),P()("table",{class:"table table-striped",style:u(i)},P()("thead",null,P()("tr",null,P()("th",null,"Name"),P()("th",{class:"d-none d-md-table-cell"},"Address"),P()("th",null,"Telephone"),P()("th",{class:"d-none d-sm-table-cell"},"Pets"))),P()("tbody",null,i?s.map(function(e){return P()(E,{owner:e})}):null))),P()("section",null,P()("a",{href:"#/owners/new"},P()("button",{class:"btn btn-primary",type:"button"},"Add Owner"))))};function C(e){var t=e.pet,n=e.owner,r=t&&t.visits&&t.visits.length;return P()("div",{domkey:"pet-"+t.id,class:"card mb-2"},P()("ul",{class:"list-group list-group-flush"},P()("li",{class:"list-group-item"},P()("div",{class:"row"},P()("div",{class:"col-sm-auto font-weight-bold"},"Name"),P()("div",{class:"col"},t.name),P()("div",{class:"col-sm-auto font-weight-bold"},"Birth Date"),P()("div",{class:"col"},t.birthDate),P()("div",{class:"col-sm-auto font-weight-bold"},"Type"),P()("div",{class:"col"},t.type.name))),P()("li",{class:"list-group-item"},P()("div",{class:"row"},P()("div",{class:"col"},P()("a",{class:"btn btn-primary",href:"#/owners/"+n.id+"/pets/"+t.id+"/edit"},"Edit Pet")),P()("div",{class:"col"},P()("a",{class:"btn btn-primary",href:"#/owners/"+n.id+"/pets/"+t.id+"/visits/new"},"Add Visit")))),r?t.visits.map(function(e){return P()(L,{visit:e,pet:t,owner:n})}):null))}function L(e){var t=e.visit,n=e.pet,r=e.owner;return P()("li",{domkey:"visit-"+t.id,class:"list-group-item"},P()("div",{class:"row"},P()("div",{class:"col-sm-2"},t.visitDate),P()("div",{class:"col",style:"white-space: pre-line"},t.description),P()("div",{class:"col-sm-2"},P()("a",{class:"btn btn-primary",href:"#/owners/"+r.id+"/pets/"+n.id+"/visits/"+t.id+"/edit"},"Edit Visit"))))}var U=function(e){var t=e.messages,n=e.owner,r=n&&n.pets&&n.pets.length;return P()("article",null,P()(V,{messages:t}),P()("section",null,P()("h2",{style:u(n)},"Owner"),P()("div",{class:"card mb-4",style:u(n)},n?P()("ul",{class:"list-group list-group-flush"},P()("li",{class:"list-group-item"},P()("div",{class:"row"},P()("div",{class:"col-sm-2 font-weight-bold"},"Name"),P()("div",{class:"col"},n.name))),P()("li",{class:"list-group-item"},P()("div",{class:"row"},P()("div",{class:"col-sm-2 font-weight-bold"},"Address"),P()("div",{class:"col"},n.address))),P()("li",{class:"list-group-item"},P()("div",{class:"row"},P()("div",{class:"col-sm-2 font-weight-bold"},"Telephone"),P()("div",{class:"col"},n.telephone))),P()("li",{class:"list-group-item"},P()("div",{class:"row"},P()("div",{class:"col"},P()("a",{class:"btn btn-primary",href:"#/owners/"+n.id+"/edit"},"Edit Owner")),P()("div",{class:"col"},P()("a",{class:"btn btn-primary",href:"#/owners/"+n.id+"/pets/new"},"Add New Pet"))))):null)),P()("section",null,P()("h2",{style:u(r)},"Pets and Visits"),r?n.pets.map(function(e){return P()(C,{pet:e,owner:n})}):null))};var _=function(e){var t=e.messages,n=e.emit,r=e.form,s=e.errors;return P()("article",null,P()(V,{messages:t}),P()("section",null,P()("h2",null,r.isNew?"Add Owner":"Update Owner"),P()("form",{domkey:"form-owner",class:"form-horizontal",onsubmit:function(){return n("postOwnerForm",{})&&!1}},P()("div",{class:"form-group row"},P()("label",{class:"col-sm-2 col-form-label"},"Name"),P()("div",{class:"col"},P()("input",{class:"form-control"+(s.name?" is-invalid":""),type:"text",value:r.name,onchange:function(e){return n("setOwnerForm",{name:"name",value:e.target.value})},oninput:function(e){return n("inputOwnerForm",{name:"name",value:e.target.value})}}),P()("div",{class:"invalid-feedback d-block",style:"height:1em;"},s.name))),P()("div",{class:"form-group row"},P()("label",{class:"col-sm-2 col-form-label"},"Address"),P()("div",{class:"col"},P()("input",{class:"form-control"+(s.address?" is-invalid":""),type:"text",value:r.address,onchange:function(e){return n("setOwnerForm",{name:"address",value:e.target.value})},oninput:function(e){return n("inputOwnerForm",{name:"address",value:e.target.value})}}),P()("div",{class:"invalid-feedback d-block",style:"height:1em;"},s.address))),P()("div",{class:"form-group row"},P()("label",{class:"col-sm-2 col-form-label"},"Telephone"),P()("div",{class:"col"},P()("input",{class:"form-control"+(s.telephone?" is-invalid":""),type:"text",value:r.telephone,onchange:function(e){return n("setOwnerForm",{name:"telephone",value:e.target.value})},oninput:function(e){return n("inputOwnerForm",{name:"telephone",value:e.target.value})}}),P()("div",{class:"invalid-feedback d-block",style:"height:1em;"},s.telephone))),P()("div",{class:"form-group row"},P()("div",{class:"offset-sm-2 col"},P()("button",{class:"btn btn-primary",type:"submit"},r.isNew?"Add Owner":"Update Owner"))))))};var B=function(e){var t=e.messages,n=e.emit,r=e.form,s=e.errors,i=e.owner,o=e.petTypes;return P()("article",null,P()(V,{messages:t}),P()("section",null,P()("h2",null,r.isNew?"Add Pet":"Update Pet"),P()("div",{class:"card mb-3",style:u(i)},P()("div",{class:"card-header"},"Owner"),P()("ul",{class:"list-group list-group-flush"},i?P()("li",{class:"list-group-item"},P()("div",{class:"row"},P()("div",{class:"col-sm-auto font-weight-bold"},"Name"),P()("div",{class:"col"},i.name))):null)),P()("form",{domkey:"form-pet",class:"form-horizontal",onsubmit:function(){return n("postPetForm",{})&&!1}},P()("div",{class:"form-group row"},P()("label",{class:"col-sm-2 col-form-label"},"Name"),P()("div",{class:" col"},P()("input",{class:"form-control"+(s.name?" is-invalid":""),type:"text",value:r.name,onchange:function(e){return n("setPetForm",{name:"name",value:e.target.value})},oninput:function(e){return n("inputPetForm",{name:"name",value:e.target.value})}}),P()("div",{class:"invalid-feedback d-block",style:"height:1em;"},s.name))),P()("div",{class:"form-group row"},P()("label",{class:"col-sm-2 col-form-label"},"Birth Date"),P()("div",{class:" col"},P()("input",{class:"form-control"+(s.birthDate?" is-invalid":""),type:"text",value:r.birthDate,onchange:function(e){return n("setPetForm",{name:"birthDate",value:e.target.value})},oninput:function(e){return n("inputPetForm",{name:"birthDate",value:e.target.value})}}),P()("div",{class:"invalid-feedback d-block",style:"height:1em;"},s.birthDate))),P()("div",{class:"form-group row"},P()("label",{class:"col-sm-2 col-form-label"},"Type"),P()("div",{class:"col"},P()("select",{class:"form-control"+(s.typeId?" is-invalid":""),value:r.typeId,onchange:function(e){return n("setPetForm",{name:"typeId",value:e.target.value})}},P()("option",null),o.map(function(e){return P()("option",{value:e.id,selected:r.typeId===e.id},e.name)})),P()("div",{class:"invalid-feedback d-block",style:"height:1em;"},s.typeId))),P()("div",{class:"form-group row"},P()("div",{class:"offset-sm-2 col"},P()("button",{class:"btn btn-primary",type:"submit"},r.isNew?"Add Pet":"Update Pet"))))))};function z(e){var t=e.visit;return P()("li",{domkey:"visit-"+t.id,class:"list-group-item"},P()("div",{class:"row"},P()("div",{class:"col-sm-2"},t.visitDate),P()("div",{class:"col",style:"white-space: pre-line"},t.description)))}var H=function(e){var t=e.messages,n=e.emit,r=e.form,s=e.errors,i=e.owner,o=e.pet,a=r.isNew&&o&&o.visits&&o.visits.length;return P()("article",null,P()(V,{messages:t}),P()("section",null,P()("h2",null,r.isNew?"Add Visit":"Update Visit"),P()("div",{class:"card mb-3",style:u(o)},P()("div",{class:"card-header"},"Pet"),P()("ul",{class:"list-group list-group-flush"},o?P()("li",{class:"list-group-item"},P()("div",{class:"row"},P()("div",{class:"col-sm-auto font-weight-bold"},"Name"),P()("div",{class:"col"},o.name),P()("div",{class:"col-sm-auto font-weight-bold"},"Birth Date"),P()("div",{class:"col"},o.birthDate),P()("div",{class:"col-sm-auto font-weight-bold"},"Type"),P()("div",{class:"col"},o.type.name))):null,i?P()("li",{class:"list-group-item"},P()("div",{class:"row"},P()("div",{class:"col-sm-auto font-weight-bold"},"Owner"),P()("div",{class:"col"},i.name))):null)),P()("form",{domkey:"form-visit",class:"form-horizontal",onsubmit:function(){return n("postVisitForm",{})&&!1}},P()("div",{class:"form-group row"},P()("label",{class:"col-sm-2 col-form-label"},"Visit Date"),P()("div",{class:"col"},P()("input",{class:"form-control"+(s.visitDate?" is-invalid":""),type:"text",value:r.visitDate,onchange:function(e){return n("setVisitForm",{name:"visitDate",value:e.target.value})},oninput:function(e){return n("inputVisitForm",{name:"visitDate",value:e.target.value})}}),P()("div",{class:"invalid-feedback d-block",style:"height:1em;"},s.visitDate))),P()("div",{class:"form-group row"},P()("label",{class:"col-sm-2 col-form-label"},"Description"),P()("div",{class:"col"},P()("textarea",{class:"form-control"+(s.description?" is-invalid":""),value:r.description,rows:"5",onchange:function(e){return n("setVisitForm",{name:"description",value:e.target.value})},oninput:function(e){return n("inputVisitForm",{name:"description",value:e.target.value})}}),P()("div",{class:"invalid-feedback d-block",style:"height:1em;"},s.description))),P()("div",{class:"form-group row"},P()("div",{class:"offset-sm-2 col"},P()("button",{class:"btn btn-primary",type:"submit"},r.isNew?"Add Visit":"Update Visit"))))),P()("section",null,P()("h2",{style:u(a)},"Previous Visits"),P()("ul",{class:"list-group",style:u(a)},a?o.visits.map(function(e){return P()(z,{visit:e})}):null)))};(function(e,t,n,r,s){r.on("searchOwners",function(){e.messages=[],e.searchOwners(),s.render()}).on("inputOwnersSearchForm",function(t){e.inputOwnersSearchForm(t.name,t.value)}).on("postOwnerForm",function(){e.messages=[];var t=e.postOwnerForm();t?s.redirect("#/owners/"+t):s.render()}).on("setOwnerForm",function(t){e.setOwnerForm(t.name,t.value),s.render()}).on("inputOwnerForm",function(t){e.inputOwnerForm(t.name,t.value)}).on("postPetForm",function(){e.messages=[];var t=e.postPetForm();t?s.redirect("#/owners/"+t):s.render()}).on("setPetForm",function(t){e.setPetForm(t.name,t.value),s.render()}).on("inputPetForm",function(t){e.inputPetForm(t.name,t.value)}).on("postVisitForm",function(){e.messages=[];var t=e.postVisitForm();t?s.redirect("#/owners/"+t):s.render()}).on("setVisitForm",function(t){e.setVisitForm(t.name,t.value),s.render()}).on("inputVisitForm",function(t){e.inputVisitForm(t.name,t.value)}),s.route("#/home",function(e,t){t(function(){return n(N({messages:[]}),s.path)})}).route("#/vets",function(e,r){t.messages=[],t.searchVets(),r(function(){return n(A({messages:t.messages,vets:t.vets}),s.path)})}).route("#/owners",function(t,i){e.messages=[],e.initOwnersSearchForm(),e.searchOwners(),i(function(){return n(j({emit:r.emit,messages:e.messages,errors:e.errors,form:e.ownersSearchForm,owners:e.filteredOwners}),s.path)})}).route("#/owners/new",function(t,i){e.messages=[],e.initOwnerForm(),i(function(){return n(_({emit:r.emit,messages:e.messages,errors:e.errors,form:e.ownerForm}),s.path)})}).route("#/owners/:ownerId",function(t,r){e.messages=[],e.findOwner(t.ownerId),r(function(){return n(U({messages:e.messages,owner:e.owner}),s.path)})}).route("#/owners/:ownerId/edit",function(t,i){e.messages=[],e.findOwner(t.ownerId),e.initOwnerForm(e.owner),i(function(){return n(_({emit:r.emit,messages:e.messages,errors:e.errors,form:e.ownerForm}),s.path)})}).route("#/owners/:ownerId/pets/new",function(t,i){e.messages=[],e.loadPetTypes(),e.findOwner(t.ownerId),e.initPetForm(t.ownerId),i(function(){return n(B({emit:r.emit,messages:e.messages,errors:e.errors,form:e.petForm,owner:e.owner,petTypes:e.petTypes}),s.path)})}).route("#/owners/:ownerId/pets/:petId/edit",function(t,i){e.messages=[],e.loadPetTypes(),e.findPet(t.ownerId,t.petId),e.initPetForm(t.ownerId,e.pet),i(function(){return n(B({emit:r.emit,messages:e.messages,errors:e.errors,form:e.petForm,owner:e.owner,petTypes:e.petTypes}),s.path)})}).route("#/owners/:ownerId/pets/:petId/visits/new",function(t,i){e.messages=[],e.findPet(t.ownerId,t.petId),e.initVisitForm(t.ownerId,t.petId),i(function(){return n(H({emit:r.emit,messages:e.messages,errors:e.errors,form:e.visitForm,owner:e.owner,pet:e.pet}),s.path)})}).route("#/owners/:ownerId/pets/:petId/visits/:visitId/edit",function(t,i){e.messages=[],e.findVisit(t.ownerId,t.petId,t.visitId),e.initVisitForm(t.ownerId,t.petId,e.visit),i(function(){return n(H({emit:r.emit,messages:e.messages,errors:e.errors,form:e.visitForm,owner:e.owner,pet:e.pet}),s.path)})}).route("*",function(){return s.redirect("#/home")}),e.load(),s.start()})(h(),b(),k(document.getElementById("app"),l()()),s()(),o()())}]);
import"./assets/styles-da9aaaee.js";const e=document.querySelector(".feedback-form"),s=e.elements.email,r=e.elements.message;e.addEventListener("input",m);e.addEventListener("submit",n);const a="feedback-form-state",l=JSON.parse(localStorage.getItem(a));l&&(s.value=l.email??"",r.value=l.message??"");function m(t){let o={email:t.currentTarget.elements.email.value.trim(),message:t.currentTarget.elements.message.value.trim()};localStorage.setItem(a,JSON.stringify(o))}function n(t){t.preventDefault(),s.value!==""&&r.value!==""?(console.log(JSON.parse(localStorage.getItem(a))),localStorage.removeItem(a),e.reset()):alert("Fill both fields!")}
//# sourceMappingURL=commonHelpers2.js.map

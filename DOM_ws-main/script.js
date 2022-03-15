// var b = document.getElementsByClassName("btn-cont");
// var pp = document.getElementsByClassName("plus");
// var m = document.getElementsByClassName("minus");
// // var upp=document.getElementsByClassName('unitPrice')
// var l = document.getElementsByClassName("like");
// var d = document.getElementsByClassName("delete");
// var t = document.getElementById("total");

// function somme(e) {
//   var x = e.target;
//   var ab = x.parentElement;
//   var v = ab.querySelector("p");
//   var p = ab.parentElement;
//   var ac = p.parentElement;
//   var up = ac.querySelector(".unitPrice");
//   var tp = ac.querySelector(".price");
//   var vup = Number(up.innerHTML);
//   var vtp = Number(tp.innerHTML);
//   var vn = Number(v.innerHTML) + 1;
//   v.innerHTML = vn;
//   vtp = vn * vup;
//   tp.innerHTML = vtp;
//   t.innerHTML = Number(t.innerHTML) + vup;
// }
// function decrement(e) {
//   var x = e.target;
//   var ab = x.parentElement;
//   var v = ab.querySelector("p");
//   var p = ab.parentElement;
//   var ac = p.parentElement;
//   var up = ac.querySelector(".unitPrice");
//   var tp = ac.querySelector(".price");
//   var vup = Number(up.innerHTML);
//   var vtp = Number(tp.innerHTML);
//   var vn = 0;
//   if (Number(v.innerHTML) > 0) {
//     var vn = Number(v.innerHTML) - 1;
//     t.innerHTML = Number(t.innerHTML) - vup;
//     v.innerHTML = vn;
//   }
//   vtp = vn * vup;
//   tp.innerHTML = vtp;
// }
// function likes(e) {
//   var c = e.target;

//   if (c.style.color === "red") {
//     c.style.color = "";
//   } else {
//     c.style.color = "red";
//   }
// }
// for (var i = 0; i < pp.length; i++) {
//   pp[i].addEventListener("click", somme);
// }
// for (var i = 0; i < m.length; i++) {
//   m[i].addEventListener("click", decrement);
// }
// for (i = 0; i < l.length; i++) {
//   l[i].addEventListener("click", likes);
// }

var b = document.querySelectorAll("button");
console.log(b);
function cl(e) {
  var x = e.target;
  var a = x.parentElement;
  var aa = a.parentElement;
  var aaa = aa.parentElement;
  var p = aaa.querySelector(".price");
  var pp = document.querySelectorAll(".price");
  var up = aaa.querySelector(".unitPrice");
  var q = aaa.querySelector("p");
  var t = document.getElementById("total");

  switch (x.className) {
    case "plus":
      var qq = Number(q.innerHTML);

      qq += 1;
      q.innerHTML = qq;
      p.innerHTML = qq * Number(up.innerHTML);
      break;
    case "minus":
      var qq = Number(q.innerHTML);
      if (qq > 0) {
        qq -= 1;
        q.innerHTML = qq;
        p.innerHTML = qq * Number(up.innerHTML);
      }
      break;
    case "fas fa-heart":
      if (x.style.color === "red") {
        x.style.color = "";
      } else x.style.color = "red";
      break;
    case "fas fa-trash-alt":
      var xx = x.parentElement;
      var xxx = xx.parentElement;
      var xxxx = xxx.parentElement;
      var xxxxx = xxxx.parentElement;
      var pr = xxxxx.querySelector(".price");
      pr.innerHTML = 0;
      xxxxx.remove();

      break;
  }
  var s = 0;
  for (var i = 0; i < pp.length; i++) {
    console.log(pp);
    s += Number(pp[i].innerHTML);
    t.innerHTML = s;
  }
}

for (var i = 0; i < b.length; i++) {
  b[i].addEventListener("click", cl);
}

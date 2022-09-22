$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  stagePadding: 50,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 7,
      dots: true,
    },
    1024: {
      items: 5,
    },
    1440: {
      items: 7,
    },
  },
});
var a = 0;
function orderadd0() {
  a++;
  document.getElementById("inc0").value = a;
}
var b = 0;
function orderadd1() {
  b++;
  document.getElementById("inc1").value = b;
}
var c = 0;
function orderadd2() {
  c++;
  document.getElementById("inc2").value = c;
}
var d = 0;
function orderadd3() {
  d++;
  document.getElementById("inc3").value = d;
}
var e = 0;
function orderadd4() {
  e++;
  document.getElementById("inc4").value = e;
}
var f = 0;
function orderadd5() {
  f++;
  document.getElementById("inc5").value = f;
}
var g = 0;
function orderadd6() {
  g++;
  document.getElementById("inc6").value = g;
}
var h = 0;
function orderadd7() {
  h++;
  document.getElementById("inc7").value = h;
}
var i = 0;
function orderadd8() {
  i++;
  document.getElementById("inc8").value = i;
}
function gotowhatsapp() {
  var table = document.getElementById("table").value;
  var payment = document.getElementById("payment").value;
  var na1 = document.getElementById("inc0").value;
  var na2 = document.getElementById("inc1").value;
  var na3 = document.getElementById("inc2").value;
  var na4 = document.getElementById("inc3").value;
  var na5 = document.getElementById("inc4").value;
  var na6 = document.getElementById("inc5").value;
  var na7 = document.getElementById("inc6").value;
  var na8 = document.getElementById("inc7").value;
  var na9 = document.getElementById("inc8").value;
  var o1 = "Non-veg chowmin - " + na1 + "%0a";
  var o2 = "Chowmin - " + na2 + "%0a";
  var o3 = "Nachos - " + na3 + "%0a";
  var o4 = "Salad - " + na4 + "%0a";
  var o5 = "Veg chowmin - " + na5 + "%0a";
  var o6 = "Rolls - " + na6 + "%0a";
  var o7 = "Noodles - " + na7 + "%0a";
  var o8 = "Special-food - " + na8 + "%0a";
  var o9 = "Ramen - " + na9;
  if (na1 == 0) {
    o1 = "";
  }
  if (na2 == 0) {
    o2 = "";
  }
  if (na3 == 0) {
    o3 = "";
  }
  if (na4 == 0) {
    o4 = "";
  }
  if (na5 == 0) {
    o5 = "";
  }
  if (na6 == 0) {
    o6 = "";
  }
  if (na7 == 0) {
    o7 = "";
  }
  if (na8 == 0) {
    o8 = "";
  }
  if (na9 == 0) {
    o9 = "";
  }
  if (
    (na1 > 0 ||
      na2 > 0 ||
      na3 > 0 ||
      na4 > 0 ||
      na5 > 0 ||
      na6 > 0 ||
      na7 > 0 ||
      na8 > 0 ||
      na9 > 0) &&
    payment != ""
  ) {
    var url =
      "https://wa.me/917735886881?text=" +
      "Table - " +
      table +
      "%0a" +
      "Payment - " +
      payment +
      "%0a" +
      o1 +
      o2 +
      o3 +
      o4 +
      o5 +
      o6 +
      o7 +
      o8 +
      o9;

    window.open(url, "_blank");
  }
}

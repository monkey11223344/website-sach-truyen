function initPage(){
  fillGrid(document.getElementById("hot"),BOOKS.slice().sort(function(a,b){return b.sold-a.sold}).slice(0,6));
  fillGrid(document.getElementById("newb"),BOOKS.filter(function(b){return b.type=="truyen"}).slice(0,6));
  document.getElementById("rank").innerHTML=rankList(1);
  document.getElementById("news").innerHTML=NEWS.map(function(n){return '<li>'+n.t+'<small>'+n.d+'</small></li>'}).join("");
  bindTabs();
}

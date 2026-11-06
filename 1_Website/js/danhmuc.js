function initPage(){
  var t=param("type"),g=param("genre"),q=(param("q")||"").toLowerCase(),s=param("sort"),sale=param("sale");
  var l=BOOKS.filter(function(b){
    return (!t||b.type==t)&&(!g||b.genre==g)&&(!q||(b.title+" "+b.author).toLowerCase().indexOf(q)>-1)&&(!sale||b.price<b.old);
  });
  var name=g||(t=="sach"?"Sách":t=="truyen"?"Truyện":q?"Kết quả tìm kiếm: "+q:sale?"Khuyến mãi":s=="new"?"Sách mới":s=="best"?"Bán chạy":"Tất cả sản phẩm");
  if(s=="new")l=l.filter(function(b){return b.isNew});
  document.getElementById("ttl").textContent=name;
  var sel=document.getElementById("sort");
  sel.value=(s=="best")?"best":"";
  function draw(){
    var v=sel.value,r=l.slice();
    if(v=="best")r.sort(function(a,b){return b.sold-a.sold});
    if(v=="asc")r.sort(function(a,b){return a.price-b.price});
    if(v=="desc")r.sort(function(a,b){return b.price-a.price});
    document.getElementById("cnt").textContent=r.length+" sản phẩm";
    fillGrid(document.getElementById("list"),r);
  }
  sel.onchange=draw;draw();
}

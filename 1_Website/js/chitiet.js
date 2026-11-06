function qty(){return Math.max(1,+document.getElementById('q').value||1)}
function initPage(){
  var b=findBook(param("id"))||BOOKS[0];
  document.title=b.title+" – SáchViệt";
  document.getElementById("d").innerHTML=
    '<div class="pimg">'+coverHTML(b)+'</div>'+
    '<div><h1>'+b.title+'</h1><div class="meta">'+
    '<div><span>Tác giả:</span>'+b.author+'</div><div><span>Thể loại:</span>'+b.genre+'</div>'+
    '<div><span>Đã bán:</span>'+b.sold+'</div><div><span>Tình trạng:</span>Còn hàng</div></div>'+
    '<div class="price">Giá bán: '+money(b.price)+'<s>'+money(b.old)+'</s></div>'+
    '<div class="qty">Số lượng: <input type="number" id="q" value="1" min="1"></div>'+
    '<div class="row"><button class="buy" onclick="buyNow('+b.id+',qty())">Mua ngay</button>'+
    '<button class="btn ghost" onclick="addToCart('+b.id+',qty())">Thêm vào giỏ</button></div></div>';
  document.getElementById("intro").textContent=b.desc+" Sách được in trên giấy chất lượng cao, giao hàng toàn quốc, đổi trả trong 7 ngày nếu lỗi do nhà sản xuất.";
  fillGrid(document.getElementById("rel"),BOOKS.filter(function(x){return x.id!=b.id&&x.type==b.type}).slice(0,3));
}

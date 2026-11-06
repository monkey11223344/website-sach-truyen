/* Dùng chung: menu, banner, chân trang, giỏ hàng, thẻ sản phẩm */
function getCart(){try{return JSON.parse(localStorage.getItem("cart")||"{}")}catch(e){return {}}}
function saveCart(c){try{localStorage.setItem("cart",JSON.stringify(c))}catch(e){}updateCount()}
function cartQty(){var c=getCart(),n=0;for(var k in c)n+=c[k];return n}
function updateCount(){var e=document.getElementById("cartCount");if(e)e.textContent=cartQty()}
function addToCart(id,q){var c=getCart();c[id]=(c[id]||0)+(q||1);saveCart(c);toast("Đã thêm \""+findBook(id).title+"\" vào giỏ hàng")}
function buyNow(id,q){var c=getCart();c[id]=(c[id]||0)+(q||1);saveCart(c);location.href="giohang.html"}
function toast(m){var t=document.getElementById("toast");t.textContent=m;t.classList.add("show");setTimeout(function(){t.classList.remove("show")},2000)}
function param(k){return new URLSearchParams(location.search).get(k)}
function soon(){toast("Chức năng đang phát triển");return false}

function renderHeader(){
  var q=param("q")||"",page=location.pathname.split("/").pop();
  var on=function(p){return page==p?' class="on"':''};
  document.getElementById("header").innerHTML=
  '<div class="nav" id="nav"><a class="logo" href="index.html">SÁCHVIỆT</a><ul class="m">'+
  '<li><a href="index.html"'+(page==""||page=="index.html"?' class="on"':'')+'>Home</a></li>'+
  '<li><a href="giohang.html"'+on("giohang.html")+'>Đặt hàng<span class="cartb" id="cartCount">0</span></a></li>'+
  '<li><a href="danhmuc.html?type=sach">Sách</a><ul><li><a href="danhmuc.html?genre=Tiểu thuyết">Tiểu thuyết</a></li><li><a href="danhmuc.html?genre=Kỹ năng sống">Kỹ năng sống</a></li><li><a href="danhmuc.html?genre=Lịch sử">Lịch sử</a></li><li><a href="danhmuc.html?genre=Văn học Việt Nam">Văn học Việt Nam</a></li></ul></li>'+
  '<li><a href="danhmuc.html?type=truyen">Truyện</a><ul><li><a href="danhmuc.html?genre=Truyện tranh">Truyện tranh</a></li><li><a href="danhmuc.html?genre=Thiếu nhi">Thiếu nhi</a></li><li><a href="danhmuc.html?genre=Giả tưởng">Giả tưởng</a></li></ul></li>'+
  '<li><a href="danhmuc.html?sale=1">Khuyến mãi</a></li>'+
  '<li><a href="index.html#tintuc">Tin tức</a></li>'+
  '<li><a href="#footer">Liên hệ</a></li></ul>'+
  '<form action="danhmuc.html"><input name="q" placeholder="Tìm sách, tác giả..." value="'+q.replace(/"/g,"&quot;")+'"><button title="Tìm kiếm"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4"><circle cx="10" cy="10" r="6.5"/><path d="M15 15l6 6"/></svg></button></form></div>';
  var nav=document.getElementById("nav");
  function sc(){nav.classList.toggle("solid",window.scrollY>40)}
  window.addEventListener("scroll",sc);sc();
  updateCount();
}

var HAS_IMG=[1,2,3,4,5,6,7,8,11,12];
function renderHero(){
  var h=document.querySelector(".hero");if(!h)return;
  var ids=HAS_IMG.slice(),bg='<div class="bg">';
  ids.forEach(function(i){bg+='<i style="background-image:url(images/'+i+'.jpg)"></i>'});
  h.insertAdjacentHTML("afterbegin",bg+'</div>');
}

function renderFooter(){
  document.getElementById("footer").innerHTML=
  '<div class="container"><div class="brands"><span>NXB KIM ĐỒNG</span><span>NXB TRẺ</span><span>NHÃ NAM</span><span>FIRST NEWS</span><span>THÁI HÀ</span></div></div>'+
  '<div class="footer"><div class="container"><div class="cols">'+
  '<div><h4>SáchViệt</h4><p>Cửa hàng sách, truyện trực tuyến – giao hàng toàn quốc.</p><p>Địa chỉ: Nguyễn Hiền, Hai Bà Trưng, Hà Nội</p><p>Hotline: 0123 456 789</p></div>'+
  '<div><h4>Chính sách</h4><ul><li><a href="#">Đổi trả trong 7 ngày</a></li><li><a href="#">Chính sách vận chuyển</a></li><li><a href="#">Thanh toán khi nhận hàng</a></li><li><a href="#">Bảo mật thông tin</a></li></ul></div>'+
  '<div><h4>Hỗ trợ</h4><ul><li><a href="#">Hướng dẫn mua hàng</a></li><li><a href="#">Câu hỏi thường gặp</a></li><li><a href="#">Liên hệ</a></li></ul></div></div>'+
  '<div class="copy">© 2026 SáchViệt. Bài tập môn Thiết kế web – Phùng Thị Quyên.</div></div></div><div class="toast" id="toast"></div>';
}

function coverHTML(b){
  if(HAS_IMG.indexOf(b.id)>-1)return '<div class="bk" style="background-image:url(images/'+b.id+'.jpg)"></div>';
  return '<div class="bk gr" style="background:linear-gradient(160deg,'+b.c[0]+','+b.c[1]+')"><b>'+b.title+'</b><small>'+b.author+'</small></div>';
}
function cardHTML(b){
  return '<div class="pcard"><a class="pimg" href="chitiet.html?id='+b.id+'">'+(b.isNew?'<span class="tag">Mới</span>':'')+coverHTML(b)+'</a>'+
  '<h3><a href="chitiet.html?id='+b.id+'">'+b.title+'</a></h3><div class="au">'+b.author+'</div>'+
  '<div class="price">Giá bán: '+money(b.price)+'<s>'+money(b.old)+'</s></div><p class="d">'+b.desc+'</p>'+
  '<button class="buy" onclick="buyNow('+b.id+')">Mua ngay</button></div>';
}
function fillGrid(el,list){el.className="grid";el.innerHTML=list.map(cardHTML).join("")||'<p class="empty" style="grid-column:1/-1">Không tìm thấy kết quả.</p>'}

function rankList(k){
  var l=BOOKS.slice().sort(function(a,b){return ((b.sold*k)%977+b.sold)-((a.sold*k)%977+a.sold)}).slice(0,6);
  return l.map(function(b,i){return '<li><i>'+(i+1)+'</i><a href="chitiet.html?id='+b.id+'">'+b.title+'</a></li>'}).join("");
}
function bindTabs(){
  var tabs=document.querySelectorAll(".tabs button");
  tabs.forEach(function(t){t.onclick=function(){tabs.forEach(function(x){x.classList.remove("on")});t.classList.add("on");document.getElementById("rank").innerHTML=rankList(+t.dataset.k)}});
}

document.addEventListener("DOMContentLoaded",function(){renderHeader();renderHero();renderFooter();if(window.initPage)initPage()});

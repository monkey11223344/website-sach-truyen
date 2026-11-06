function initPage(){if(param("demo")){saveCart({2:1,5:2,7:3})}draw()}
function draw(){
  var c=getCart(),ids=Object.keys(c),el=document.getElementById("cartbox");
  if(!ids.length){el.innerHTML='<div class="empty">Giỏ hàng trống. <a href="index.html" style="color:#2b6e96;text-decoration:underline">Tiếp tục mua sắm</a></div>';return}
  var sum=0,rows=ids.map(function(i){
    var b=findBook(i),n=c[i];sum+=b.price*n;
    return '<tr><td>'+b.title+'<br><small>'+b.author+'</small></td><td>'+money(b.price)+'</td>'+
    '<td><input type="number" min="1" value="'+n+'" onchange="setQ('+i+',this.value)"></td><td>'+money(b.price*n)+'</td>'+
    '<td><button class="del" onclick="setQ('+i+',0)" title="Xoá">×</button></td></tr>';
  }).join("");
  el.innerHTML='<table class="cart"><tr><th>Sản phẩm</th><th>Đơn giá</th><th>SL</th><th>Thành tiền</th><th></th></tr>'+rows+'</table>'+
  '<div class="total">Tổng cộng: '+money(sum)+'</div><h2 style="font-size:20px;margin-top:30px">Thông tin giao hàng</h2>'+
  '<form class="form" onsubmit="return order()"><input required placeholder="Họ và tên"><input required placeholder="Số điện thoại">'+
  '<input class="full" required placeholder="Địa chỉ nhận hàng"><textarea class="full" rows="2" placeholder="Ghi chú"></textarea>'+
  '<button class="btn full" style="padding:11px">Đặt hàng (thanh toán khi nhận)</button></form>';
}
function setQ(i,v){var c=getCart();v=+v;if(v<=0)delete c[i];else c[i]=v;saveCart(c);draw()}
function order(){saveCart({});document.getElementById("cartbox").innerHTML='<div class="ok">Đặt hàng thành công! Cảm ơn bạn đã mua sách tại SáchViệt.</div>';return false}

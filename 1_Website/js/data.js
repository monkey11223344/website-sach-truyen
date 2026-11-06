// Dữ liệu mẫu (giá chỉ mang tính minh hoạ)
// type: "sach" | "truyen" ; genre: thể loại
var BOOKS = [
  {id:1, title:"Nhà giả kim", author:"Paulo Coelho", type:"sach", genre:"Tiểu thuyết", price:79000, old:99000, c:["#8B2E2E","#C9A24B"], sold:980, isNew:false,
   desc:"Hành trình của chàng chăn cừu Santiago đi tìm kho báu và khám phá ý nghĩa của việc theo đuổi ước mơ."},
  {id:2, title:"Đắc nhân tâm", author:"Dale Carnegie", type:"sach", genre:"Kỹ năng sống", price:86000, old:108000, c:["#1f4e79","#5b9bd5"], sold:1250, isNew:false,
   desc:"Cuốn sách kinh điển về nghệ thuật giao tiếp, ứng xử và thu phục lòng người."},
  {id:3, title:"Sapiens: Lược sử loài người", author:"Yuval Noah Harari", type:"sach", genre:"Lịch sử", price:189000, old:229000, c:["#3d5a40","#a3b18a"], sold:640, isNew:true,
   desc:"Lịch sử loài người từ thời săn bắt hái lượm đến kỷ nguyên công nghệ, kể bằng góc nhìn mới mẻ."},
  {id:4, title:"Dế Mèn phiêu lưu ký", author:"Tô Hoài", type:"truyen", genre:"Thiếu nhi", price:45000, old:60000, c:["#2f6b3a","#9bd17a"], sold:870, isNew:false,
   desc:"Cuộc phiêu lưu của chú Dế Mèn qua thế giới loài vật, tác phẩm kinh điển của văn học thiếu nhi Việt Nam."},
  {id:5, title:"Mắt biếc", author:"Nguyễn Nhật Ánh", type:"truyen", genre:"Tiểu thuyết", price:85000, old:98000, c:["#5a3d7a","#c3a6e0"], sold:1100, isNew:false,
   desc:"Câu chuyện tình đơn phương của Ngạn dành cho Hà Lan, nhẹ nhàng mà day dứt."},
  {id:6, title:"Cho tôi xin một vé đi tuổi thơ", author:"Nguyễn Nhật Ánh", type:"truyen", genre:"Thiếu nhi", price:70000, old:82000, c:["#d17a22","#ffd166"], sold:760, isNew:false,
   desc:"Những kỷ niệm tuổi thơ trong veo, hồn nhiên của bốn đứa trẻ."},
  {id:7, title:"Doraemon – Tập 1", author:"Fujiko F. Fujio", type:"truyen", genre:"Truyện tranh", price:22000, old:25000, c:["#0077b6","#90e0ef"], sold:1500, isNew:true,
   desc:"Chú mèo máy đến từ tương lai cùng bảo bối thần kỳ giúp đỡ cậu bé Nobita."},
  {id:8, title:"Thám tử lừng danh Conan – Tập 1", author:"Aoyama Gosho", type:"truyen", genre:"Truyện tranh", price:22000, old:25000, c:["#a4161a","#e5383b"], sold:1320, isNew:true,
   desc:"Cậu học sinh trung học Shinichi bị teo nhỏ và tiếp tục phá những vụ án ly kỳ."},
  {id:9, title:"Tắt đèn", author:"Ngô Tất Tố", type:"sach", genre:"Văn học Việt Nam", price:48000, old:60000, c:["#4a4036","#b08968"], sold:430, isNew:false,
   desc:"Bức tranh chân thực về cuộc sống người nông dân Việt Nam trước Cách mạng qua hình ảnh chị Dậu."},
  {id:10, title:"Số đỏ", author:"Vũ Trọng Phụng", type:"sach", genre:"Văn học Việt Nam", price:62000, old:75000, c:["#9d0208","#f48c06"], sold:520, isNew:false,
   desc:"Tiểu thuyết trào phúng nổi tiếng với nhân vật Xuân Tóc Đỏ và xã hội thượng lưu rởm."},
  {id:11, title:"Harry Potter và Hòn đá phù thủy", author:"J.K. Rowling", type:"truyen", genre:"Giả tưởng", price:115000, old:135000, c:["#4a1c1c","#d4a017"], sold:1010, isNew:false,
   desc:"Cậu bé Harry Potter bước vào thế giới phù thủy và khám phá bí mật về thân thế của mình."},
  {id:12, title:"Tuổi thơ dữ dội", author:"Phùng Quán", type:"truyen", genre:"Văn học Việt Nam", price:98000, old:120000, c:["#34495e","#95a5a6"], sold:390, isNew:true,
   desc:"Những thiếu niên trinh sát trong kháng chiến chống Pháp, dũng cảm và đầy xúc động."}
];

var NEWS = [
  {t:"Hội sách mùa thu: giảm đến 40% nhiều đầu sách hay", d:"05/11/2026"},
  {t:"Top truyện tranh được độc giả trẻ yêu thích nhất tháng", d:"01/11/2026"},
  {t:"Gợi ý 10 cuốn sách nên đọc trước tuổi 30", d:"28/10/2026"},
  {t:"Miễn phí vận chuyển cho đơn từ 199.000đ", d:"20/10/2026"}
];

function money(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")+"đ";}
function findBook(id){return BOOKS.filter(function(b){return b.id==id})[0];}

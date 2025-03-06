# js-basic-to-do-list

🔍 Phân tích yêu cầu To-Do List
🎯 Tính năng chính cần có
Thêm công việc 📝

Người dùng nhập công việc vào ô input và bấm nút "Thêm".
Công việc mới sẽ hiển thị trong danh sách.
Xóa công việc ❌

Mỗi công việc có một nút xóa.
Khi bấm vào nút xóa, công việc sẽ bị loại bỏ khỏi danh sách.
Đánh dấu hoàn thành ✅

Khi bấm vào công việc, nó sẽ được gạch ngang để đánh dấu đã hoàn thành.
Lưu dữ liệu vào LocalStorage 💾

Khi tải lại trang, danh sách công việc vẫn giữ nguyên.
🏗 Xây dựng từng bước
1️⃣ Giao diện (HTML + CSS)
HTML cần có:

Một ô input để nhập công việc.
Một nút "Thêm".
Một danh sách (ul) chứa các công việc.
CSS sẽ làm đẹp:

Căn giữa danh sách.
Thiết kế ô input, nút bấm, danh sách.
Hiệu ứng khi hoàn thành công việc.
2️⃣ Xử lý logic (JavaScript)
Bắt sự kiện khi nhấn nút "Thêm"

Lấy giá trị từ input.
Thêm công việc mới vào danh sách.
Bắt sự kiện khi nhấn nút "Xóa"

Xóa công việc khỏi danh sách.
Bắt sự kiện khi nhấn vào công việc

Toggle trạng thái "Hoàn thành".
Lưu & tải dữ liệu từ LocalStorage

Khi có thay đổi, lưu danh sách vào LocalStorage.
Khi tải trang, lấy dữ liệu đã lưu và hiển thị lại.
💡 Bạn có thể bắt đầu từ đâu?
Viết HTML trước.
Thêm CSS để có giao diện đẹp.
Viết từng tính năng nhỏ trong JavaScript:
Thêm công việc.
Xóa công việc.
Đánh dấu hoàn thành.
Lưu và tải dữ liệu từ LocalStorage.

# Phân tích cấu trúc thư mục

📂 Phân tích cấu trúc thư mục
Chúng ta sẽ tổ chức thư mục gọn gàng để dễ quản lý và mở rộng sau này.

plaintext
Sao chép
Chỉnh sửa
📁 todo-list/
│── 📁 assets/ # Chứa file tĩnh (CSS, JS, icons, fonts, ...)
│ ├── 📄 style.css # File CSS để tạo giao diện
│ ├── 📄 script.js # File JavaScript xử lý logic
│── 📄 index.html # File HTML chính
│── 📄 README.md # Ghi chú về dự án (mô tả, hướng dẫn sử dụng)
🛠 Giải thích chi tiết
index.html

Đây là file chính, nơi khai báo cấu trúc giao diện.
Nó sẽ import style.css và script.js để sử dụng giao diện và logic.
📁 assets/ (Thư mục tài nguyên)

Chứa các file tĩnh như CSS, JavaScript, hình ảnh,...
Giúp giữ thư mục gốc (todo-list/) sạch sẽ.
style.css

Chứa toàn bộ giao diện (CSS).
Giúp tách biệt giữa nội dung (HTML) và thiết kế (CSS).
script.js

Chứa logic xử lý của To-Do List (thêm/xóa/hoàn thành công việc, lưu LocalStorage).
Được gọi từ index.html để chạy khi trang web tải lên.
README.md

Không bắt buộc, nhưng hữu ích để ghi lại mô tả dự án và hướng dẫn sử dụng.

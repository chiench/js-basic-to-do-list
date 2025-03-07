// Hàm để tạo và hiển thị toast
export function showToast(message) {
    console.log("Show toast notification!");

    const toastContainer = document.getElementById("toast-container");

    // Tạo một toast mới
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = `${message}`;

    // Thêm toast vào container
    toastContainer.appendChild(toast);

    // Sau 5 giây, ẩn toast
    setTimeout(() => {
        toast.style.animation = "fadeOut 1.5s forwards"; // Làm mờ toast trước khi xóa
    }, 3000); // Đợi 2.5 giây trước khi bắt đầu ẩn

    // Sau khi animation kết thúc, loại bỏ toast khỏi DOM
    setTimeout(() => {
        toast.remove();
    }, 5000); // Xóa toast sau 3 giây
}

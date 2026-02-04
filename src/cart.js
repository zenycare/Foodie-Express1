// cart.js

let cart = [];

// Thêm món vào giỏ hàng
function addToCart(item) {
  cart.push(item);
  console.log(`Đã thêm "${item.name}" vào giỏ hàng`);
}

// Xóa món khỏi giỏ hàng theo id
function removeFromCart(id) {
  const index = cart.findIndex((item) => item.id === id);

  if (index !== -1) {
    console.log(`Đã xóa "${cart[index].name}" khỏi giỏ hàng`);
    cart.splice(index, 1);
  } else {
    console.log("Không tìm thấy món trong giỏ hàng");
  }
}

// Xem giỏ hàng
function viewCart() {
  if (cart.length === 0) {
    console.log("Giỏ hàng đang trống");
    return;
  }

  console.log("GIỎ HÀNG:");
  let total = 0;

  cart.forEach((item) => {
    console.log(`- ${item.name}: ${item.price}k`);
    total += item.price;
  });

  console.log(`Tổng tiền: ${total}k`);
}

// Xóa toàn bộ giỏ hàng
function clearCart() {
  cart = [];
  console.log("Đã xóa toàn bộ giỏ hàng");
}

// Export các hàm
module.exports = {
  addToCart,
  removeFromCart,
  viewCart,
  clearCart,
};

//15. তোকে প্রোডাক্টের জন্য ডিসকাউন্ট হিসাব করতে বলল। একটা ফাংশন লিখ যেখানে প্রোডাক্টের দাম ইনপুট নিলে ১৫% ডিসকাউন্টের পর দাম দেখাবে।
function calculateDiscountedPrice(price) {
  const discount = price * 0.15;
  const discountedPrice = price - discount;
  return `Product price after discount: ${discountedPrice} Taka`;
}

// Example usage:
const originalPrice = 200;
const finalPrice = calculateDiscountedPrice(originalPrice);
console.log(finalPrice);

//ধর তুই একটা কেক বানালি যার 100টা টুকরা আছে। তুই প্রতিদিন 5টা টুকরা করে খাচ্ছিস। একটি while লুপ লিখে দেখ, কত দিন লাগবে পুরো কেক শেষ করতে।

let pieces = 100;
let days = 0;

while (pieces > 0) {
  pieces -= 5;
  days++;
}

console.log("কেক শেষ করতে সময় লাগবে:", days, "দিন");

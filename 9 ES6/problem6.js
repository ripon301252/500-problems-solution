//6. একটা লিস্টের প্রথম আইটেম আলাদা করে আর বাকিগুলো আলাদা করে দেখাস। এখানে `rest` অপারেটর ব্যবহার করবি।
const showItems = (first, ...rest) => {
  console.log("প্রথম:", first, "বাকি:", rest);
};
showItems("লাল", "নীল", "সবুজ");
//4. তোর জন্ম সাল আর বর্তমান সাল জানা আছে। একটা ফাংশন লিখ যেখানে এই দুইটা ইনপুট নিলে তোর বর্তমান বয়স বের করবে।
function calculateAge(currentYear, birthYear) {
  const age = currentYear - birthYear;
  return `Your age is: ${age} years.`;
}

const currentYear = 2024;
const birthYear = 2000;
const age = calculateAge(currentYear, birthYear);
console.log(age);

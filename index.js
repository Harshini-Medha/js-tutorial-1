let brand = [
  "Samsung",
  "Hitachi",
  "Exide",
  "Whirlpool",
  "Phillips",
  "Sony",
  "Oneplus",
  "Redmi",
  "Oppo",
  "vivo",
];

console.log(brand.length);

const find = (a, b) => {
  let key = a.indexOf(b);
  a.splice(key, 1);
  console.log(a, a.length);
  console.log("the deleted element was", b, "from index of", key);
};
find(brand, "Oppo");

const laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "TUF F17",
    brand: "asus",
    price: 1400,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },

  {
    name: "macbook pro m3",
    brand: "apple",
    price: 1999,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },
  {
    name: "helios 300",
    brand: "acer",
    price: 1245,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

//  ? Give discount of 200 rs for each laptop and return new discounted list

// const newLaptopList = laptopList.map((item, index, self) => {
//   let newPrice = item.price - 200;

//   return { ...item, price: newPrice };
// });

// console.log(newLaptopList);
// ? Find all laptops of dell brand

// const dellLaptops = laptopList.filter((item) => item.brand === "dell");
// console.log(dellLaptops);

// ? Increase price of acer laptops by 200
// const newLaptopList = laptopList.map((item, index, self) => {
//   if (item.brand === "acer") {
//     let newPrice = item.price + 200;

//     return { ...item, price: newPrice };
//   }

//   return item;
// });

// console.log(newLaptopList);

// ? Decrease price of laptops whose price is greater than 1000 by 100

const newLaptopList = laptopList.map((item, index, self) => {
  if (item.price > 1000) {
    let newPrice = item.price - 100;

    return { ...item, price: newPrice };
  }

  return { ...item };
});

console.log(newLaptopList);

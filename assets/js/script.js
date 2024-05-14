const wrapper = document.querySelector(".sliderWrapper");

const slides = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 3580,
    colors: [
      {
        code: "black",
        img: "./assets/image/air.png",
      },
      {
        code: "darkblue",
        img: "./assets/image/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 7460,
    colors: [
      {
        code: "lightgray",
        img: "./assets/image/jordan.png",
      },
      {
        code: "green",
        img: "./assets/image/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 3580,
    colors: [
      {
        code: "lightgray",
        img: "./assets/image/blazer.png",
      },
      {
        code: "green",
        img: "./assets/image/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 2648,
    colors: [
      {
        code: "black",
        img: "./assets/image/crater.png",
      },
      {
        code: "lightgray",
        img: "./assets/image/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 4572,
    colors: [
      {
        code: "gray",
        img: "./assets/image/hippie.png",
      },
      {
        code: "black",
        img: "./assets/image/hippie2.png",
      },
    ],
  },
];

let selectedProduct = products[0];

const mahsuleEntekhabiAx = document.querySelector(".productImg");
const mahsuleEntekhabiname = document.querySelector(".productName");
const mahsuleEntekhabiGheymat = document.querySelector(".productGheymat");
const mahsuleEntekhabiRang = document.querySelectorAll(".color");
const mahsuleEntekhabiSizes = document.querySelectorAll(".size");

slides.forEach((slide, index) => {
  slide.addEventListener("click", () => {
    //change selected slide
    wrapper.style.transform = `translateX(${100 * index}vw)`;

    // change the selected product

    selectedProduct = products[index];

    // change content of selected product

    mahsuleEntekhabiname.textContent = selectedProduct.title;
    mahsuleEntekhabiGheymat.textContent = "$" + selectedProduct.price;
    mahsuleEntekhabiAx.src = selectedProduct.colors[0].img;
    // mahsuleEntekhabiRang=selectedProduct.colors[i].code

    // change color of product live//

    mahsuleEntekhabiRang.forEach((color, index) => {
      color.style.backgroundColor = selectedProduct.colors[index].code;
    });
  });
});

// change product color by clicking on each color it has

mahsuleEntekhabiRang.forEach((color, index) => {
  color.addEventListener("click", () => {
    mahsuleEntekhabiAx.src = selectedProduct.colors[index].img;
  });
});

// here we use nested loops becuse if we dont when we click on one size and after clicking on other size 
// both will select and not disable after clicking other one for preventing this we use this kind of
// nested loop
mahsuleEntekhabiSizes.forEach((size , index) => {
  size.addEventListener("click" , () =>{
    mahsuleEntekhabiSizes.forEach((size) => {
    size.style.backgroundColor = "white"
    size.style.color = "black" 
  });
  //here gonna change the previus style that we select
  size.style.backgroundColor = "black"
  size.style.color = "white" 
  });
});

const products = [
  {
    id: 1,
    category: "shirts",
    name: "Fantasy T-shirt",
    rating: 4,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    size: ["34", "36", "40"],
    condition: "new",
    color: "blue",
    price: 12.99,
    keywords: ["t-shirt", "sweatshitrt"],
    discount: 0,
  },
  {
    id: 2,
    category: "shirts",
    name: "Fantasy T-shirt",
    rating: 5,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    size: ["34", "36", "40", "44"],
    condition: "new",
    color: "red",
    price: 12.99,
    discount: 10,
  },
  {
    id: 3,
    category: "shirts",
    name: "Fantasy T-shirt",
    rating: 3,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    size: ["34", "36"],
    condition: "new",
    color: "grey",
    price: 40.99,
    discount: 10,
  },
  {
    id: 4,
    category: "jackets",
    name: "Denim Jacket",
    rating: 5,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    condition: "new",
    color: "grey",
    price: 40.99,
    discount: 10,
  },
  {
    id: 5,
    category: "jeans",
    name: "Ripped jeans",
    rating: 5,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    size: ["34", "36", "38", "40"],
    condition: "renewed",
    color: "blue",
    price: 20.99,
    discount: 5,
  },
  {
    id: 6,
    category: "jeans",
    name: "Boyfriend jeans",
    rating: 4,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/10.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: false,
    size: ["34", "36", "38", "40"],
    condition: "used",
    color: "blue",
    price: 20.99,
    discount: 5,
  },
  {
    id: 7,
    category: "shirts",
    name: "Ripped sweatshirt",
    rating: 4,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    size: ["34", "36", "38", "40"],
    condition: "collectible",
    color: "white",
    price: 29.99,
    discount: 5,
  },
  {
    id: 8,
    category: "shirts",
    name: "Longsleeve",
    rating: 4,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    size: ["40"],
    condition: "collectible",
    color: "black",
    price: 120.99,
    discount: 0,
  },
  {
    id: 8,
    category: "shirts",
    name: "Stripped sweatshirt",
    rating: 4,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/6.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    size: ["40", "38", "36"],
    condition: "new",
    color: "white",
    price: 32.99,
    discount: 10,
  },
  {
    id: 9,
    category: "trousers",
    name: "Red chinos",
    rating: 5,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    size: ["40", "38", "36"],
    condition: "new",
    color: "red",
    price: 62.99,
    discount: 10,
  },
  {
    id: 10,
    category: "coats",
    name: "Camel coat",
    rating: 5,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/4.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    size: ["40", "38", "36"],
    condition: "used",
    color: "brown",
    price: 62.99,
    discount: 10,
  },
  {
    id: 11,
    category: "jeans",
    name: "Blue jeans",
    rating: 5,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    size: ["40", "38", "36"],
    condition: "new",
    color: "blue",
    price: 42.99,
    discount: 0,
  },
  {
    id: 12,
    category: "shirts",
    name: "Orange T-shirt",
    rating: 3,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/3.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    size: ["40", "38", "36"],
    condition: "new",
    color: "orange",
    price: 12.99,
    discount: 0,
  },
  {
    id: 13,
    category: "skirts",
    name: "Ballerina skirt",
    rating: 4,
    image:
      "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim perferendis voluptates laboriosam.",
    available: true,
    size: ["38", "36"],
    condition: "collectible",
    color: "white",
    price: 12.99,
    discount: 0,
  },
];

export default products;
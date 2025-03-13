// Product Array
const products = [
  {
    name: "Burger",
    price: 300,
    image:
      "https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?t=st=1741754555~exp=1741758155~hmac=e412538eca98e3edd087ae365c551215f15d56ed9512d1e82e146406c8c01797&w=826",
  },
  {
    name: "Pizza",
    price: 400,
    image:
      "https://img.freepik.com/free-photo/slice-crispy-pizza-with-meat-cheese_140725-6974.jpg?t=st=1741754591~exp=1741758191~hmac=81888a193f2ded48ddc117de4830ccf2a50015143546d5746e67309023075f5c&w=740",
  },
  {
    name: "Tacos",
    price: 580,
    image:
      "https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14218.jpg?t=st=1741754622~exp=1741758222~hmac=890ef0cbeac0ddcaf2a09851870162a4f5edc4fe61837a0151e44f2bdb87f00c&w=1060",
  },
  {
    name: "Sushi",
    price: 390,
    image:
      "https://img.freepik.com/free-photo/maki-sushi-isolated-white_2829-5653.jpg?t=st=1741754787~exp=1741758387~hmac=7388026f09b8a49e57e8bff13d54b673ab30673c3f88865d0ce08709372718e5&w=740",
  },
  {
    name: "Pasta",
    price: 310,
    image:
      "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?t=st=1741754855~exp=1741758455~hmac=c4f3885f14edf117ff2813abc3d2eab0bbc3d3ea664099ed89e41bde42be297f&w=1060",
  },
  {
    name: "Fried Chicken",
    price: 280,
    image:
      "https://img.freepik.com/premium-photo/fried-chicken-legs-with-lemon-parsley_266870-45.jpg?w=740",
  },
  {
    name: "Fish and chips",
    price: 330,
    image:
      "https://img.freepik.com/free-photo/flat-lay-fish-chips-chopping-board_23-2148776041.jpg?ga=GA1.1.39799843.1733582581&semt=ais_hybrid",
  },
  {
    name: "Chocolate cake",
    price: 310,
    image:
      "https://img.freepik.com/free-photo/front-view-sweet-chocolate-cake-stand_23-2148834057.jpg?t=st=1741880195~exp=1741883795~hmac=8c8d73323c38cac4ac44f72ff7331ec773d23143ad6a587919d018f51cce1687&w=740",
  },
];

const productList = document.getElementById("product-list");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.name}')">Add to Cart</button>
    `;

  productList.appendChild(card);
});

function addToCart(productName) {
  alert(`${productName} added to cart!`);
}

const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 499.99,
  },
  {
    id: 'blueshoe',
    description: 'Blue Shoe',
    price: 399.99,
  },
];

function getAllProducts() {
  return products;
}

module.exports = {
  getAllProducts,
};

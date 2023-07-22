const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 499.99,
    reviews: [],
  },
  {
    id: 'blueshoe',
    description: 'Blue Shoe',
    price: 399.99,
    reviews: [],
  },
];

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function addProduct(id, description, price) {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };

  products.push(newProduct);
  return newProduct;
}

function addReview(productId, rating, comment) {
  const product = products.find((product) => product.id === productId);
  if (!product) throw new Error('Product not found');
  product.reviews.push({
    rating,
    comment,
  });
  return { rating, comment };
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addProduct,
  addReview,
};

const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args.min, args.max);
    },
    product: (_, args) => {
      return productsModel.getProductById(args.id);
    },
  },
  Mutation: {
    addProduct: (_, args) => {
      return productsModel.addProduct(args.id, args.description, args.price);
    },
    addReview: (_, args) => {
      return productsModel.addReview(args.productId, args.rating, args.comment);
    },
  },
};

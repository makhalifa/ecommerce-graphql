const orders = [
  {
    date: '2020-01-01',
    subtotal: 899.98,
    items: [
      {
        product: {
          id: 'redshoe',
          description: 'Red Shoe',
          price: 499.99,
        },
        quantity: 1,
      },
      {
        product: {
          id: 'blueshoe',
          description: 'Blue Shoe',
          price: 399.99,
        },
        quantity: 1,
      },
    ],
  },
];

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};

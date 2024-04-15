// Create collection
db.createCollection("orders");

// Insert many collection
db.orders.insertMany([
  {
    id: 1,
    order_number: "ORD001",
    customer_id: 1,
    products: [
      { product_id: 1, quantity: 2 },
      { product_id: 3, quantity: 1 },
    ],
    total_amount: NumberLong("600000"),
    order_date: ISODate("2024-04-15T10:00:00Z"),
    status: "Pending",
  },
  {
    id: 2,
    order_number: "ORD002",
    customer_id: 2,
    products: [
      { product_id: 2, quantity: 1 },
      { product_id: 5, quantity: 2 },
    ],
    total_amount: NumberLong("2850000"),
    order_date: ISODate("2024-04-15T11:30:00Z"),
    status: "Shipped",
  },
]);

// Join another table
db.orders.aggregate([
  {
    $lookup: {
      from: "products",
      localField: "products.product_id",
      foreignField: "_id",
      as: "ordered_products",
    },
  },
  {
    $unwind: "$ordered_products",
  },
  {
    $group: {
      _id: "$_id",
      order_number: { $first: "$order_number" },
      customer_id: { $first: "$customer_id" },
      total_amount: {
        $sum: {
          $multiply: ["$ordered_products.price", "$ordered_products.quantity"],
        },
      },
      order_date: { $first: "$order_date" },
      status: { $first: "$status" },
    },
  },
]);


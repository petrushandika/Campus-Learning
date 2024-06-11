// Create collection
db.createCollection("payment");

// Insert many collection
db.payment.insertMany([
  {
    id: 1,
    order_id: 1,
    amount: NumberLong("600000"),
    payment_method: "Credit Card",
    payment_date: ISODate("2024-04-15T10:30:00Z"),
  },
  {
    id: 2,
    order_id: 2,
    amount: NumberLong("2850000"),
    payment_method: "Bank Transfer",
    payment_date: ISODate("2024-04-15T12:00:00Z"),
  },
]);


// Create collection
db.createCollection("products");

// Insert many collection
db.products.insertMany([
  {
    id: 1,
    name: "Nike Basketball",
    tags: ["nike", "basketball"],
    description:
      "Elevate your game with our high-quality basketballs designed for optimal grip and durability, ensuring maximum performance on the court.",
    price: NumberLong("300000"),
    size: ["Small", "Medium", "Large"],
    color: "brown",
  },
  {
    id: 2,
    name: "Jordan Shoes",
    tags: ["jordan", "shoes"],
    description:
      "Step out in confidence with our stylish and functional shoes collection. Whether you're hitting the gym, running errands, or heading out for a night on the town, our shoes offer the perfect blend of comfort and fashion-forward design.",
    price: NumberLong("2500000"),
    size: ["6", "7", "8", "8.5", "9", "10"],
  },
  {
    id: 3,
    name: "Golden State Warrior T-Shirt",
    tags: ["shirt", "basketball"],
    description:
      "Experience comfort and style with our versatile range of t-shirts, crafted from premium fabrics and available in a variety of colors and designs to suit every taste.",
    price: NumberLong("150000"),
    size: ["Small", "Medium", "Large"],
  },
  {
    id: 4,
    name: "Converese Socks",
    tags: ["converse", "socks"],
    description:
      "Keep your feet cozy and supported with our range of socks. Designed for comfort and durability, our socks are available in a variety of styles and sizes to cater to your specific needs.",
    price: NumberLong("125000"),
    size: ["Small", "Medium", "Large"],
  },
  {
    id: 5,
    name: "Ballerbro Pants",
    tags: ["ballerbro", "pant"],
    description:
      "Complete your look with our collection of trendy and comfortable pants. From classic denim jeans to sleek joggers, we have the perfect pair to elevate your everyday wardrobe.",
    price: NumberLong("175000"),
    size: ["Small", "Medium", "Large"],
    color: "black",
  },
  {
    id: 6,
    name: "Ardiles Flat Shoes",
    tags: ["ardiles", "shoes"],
    description:
      "Elevate your casual style with Ardiles Flat Shoes, blending comfort and chic design effortlessly. Crafted with quality materials, these shoes offer a perfect balance of fashion and functionality for everyday wear.",
    price: NumberLong("225000"),
    size: ["4.5", "5", "6", "7", "8", "8.5", "9", "9.5"],
    color: ["black", "white", "yellow"],
  },
  {
    id: 7,
    name: "New Balance Basketball Shoes",
    tags: ["newbalance", "shoes"],
    description:
      "Dominate the court with New Balance Basketball Shoes, engineered to enhance your performance with cutting-edge technology and superior traction. Designed for agility and support, these shoes ensure you stay ahead of the game with every move.",
    price: NumberLong("2000000"),
    size: ["6", "7", "8", "8.5", "9", "10"],
  },
  {
    id: 8,
    name: "Volley Ball Mikasa",
    tags: ["volley", "ball", "mikasa"],
    description:
      "Take your volleyball game to new heights with the Mikasa Volleyball, renowned for its durability and precision. Engineered for optimal flight and control, this ball is trusted by professional athletes and enthusiasts alike for its superior quality and performance.",
    price: NumberLong("350000"),
    size: ["Small", "Medium", "Large"],
  },
  {
    id: 9,
    name: "Adidas Socks",
    tags: ["adidas", "socks"],
    description:
      "Step up your comfort game with Adidas Socks, crafted with premium materials for ultimate cushioning and breathability. Whether you're hitting the gym or lounging at home, these socks provide the perfect blend of style and comfort for all-day wear.",
    price: NumberLong("125000"),
    size: ["Small", "Medium", "Large"],
    color: ["black", "white"],
  },
  {
    id: 10,
    name: "Peaks Basketball Shoes",
    tags: ["Peaks", "basketball", "shoes"],
    description:
      "Gear up for the court with Peaks Basketball Shoes, designed for maximum comfort and stability. With a sleek design and advanced cushioning technology, these shoes offer unmatched support and traction, empowering you to unleash your full potential on the hardwood.",
    price: NumberLong("615000"),
    size: ["Small", "Medium", "Large"],
    color: "red",
  },
]);

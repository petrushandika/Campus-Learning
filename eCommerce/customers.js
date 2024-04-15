// Create collection
db.createCollection("customers");

// Insert many collection
db.customers.insertMany([
  {
    id: 1,
    name: "Monica Panjaitan",
    email: "monicapanjaitan@gmail.com",
    address: {
      street: "Jl. Penggangsaan 123",
      city: "Jakarta Selatan",
      state: "DKI Jakarta",
      country: "Indonesia",
      postal_code: "11111",
    },
    phone_number: "081234567891",
  },
  {
    id: 2,
    name: "Isah Veronika",
    email: "isahveronika@gmail.com",
    address: {
      street: "Jl. Merpati Putih 123",
      city: "Medan",
      state: "Sumatera Utara",
      country: "Indonesia",
      postal_code: "11112",
    },
    phone_number: "081234567892",
  },
  {
    id: 3,
    name: "Mutiara Sabrina",
    email: "mutiarasabrina@gmail.com",
    address: {
      street: "Jl. Pahlawan 123",
      city: "Depok",
      state: "Jawa Barat",
      country: "Indonesia",
      postal_code: "11113",
    },
    phone_number: "081234567893",
  },
  {
    id: 4,
    name: "Jennifer Valda",
    email: "jennifervalda@gmail.com",
    address: {
      street: "Jl. Selebritis 123",
      city: "Bogor",
      state: "Jawa Barat",
      country: "Indonesia",
      postal_code: "11114",
    },
    phone_number: "081234567894",
  },
  {
    id: 5,
    name: "Gaby Christien Agatha",
    email: "gabyca@gmail.com",
    address: {
      street: "Jl. Timur 123",
      city: "Bekasi",
      state: "Jawa Barat",
      country: "Indonesia",
      postal_code: "11115",
    },
    phone_number: "081234567895",
  },
]);

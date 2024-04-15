// Create collection
db.createCollection("staffs");

// Insert many collection
db.staffs.insertMany([
  {
    id: 1,
    name: "Petrus Handika",
    email: "petrushandika@gmail.com",
    address: {
      street: "Jl. Merah Putih 123",
      city: "Bogor",
      state: "Jawa Barat",
      country: "Indonesia",
      postal_code: "11121",
    },
    phone_number: "082345678901",
    position: "Manager",
    department: "Technology Information",
    hire_date: ISODate("2020-01-01"),
    salary: NumberLong("10000000"),
    status: "Active",
  },
  {
    id: 2,
    name: "Virel Fauzan",
    email: "virelfauzan@gmail.com",
    address: {
      street: "Jl. Braga 123",
      city: "Bandung",
      state: "Jawa Barat",
      country: "Indonesia",
      postal_code: "11122",
    },
    phone_number: "083456789012",
    position: "Staff Administration",
    department: "Administration",
    hire_date: ISODate("2023-02-15"),
    salary: NumberLong("5000000"),
    status: "Active",
  },
  {
    id: 3,
    name: "Akmal Amrulloh",
    email: "akmalamrulloh@gmail.com",
    address: {
      street: "Jl. Kota 123",
      city: "Surabaya",
      state: "Jawa Timur",
      country: "Indonesia",
      postal_code: "11123",
    },
    phone_number: "084567890123",
    position: "Sales Executive",
    department: "Marketing",
    hire_date: ISODate("2022-03-20"),
    salary: NumberLong("4000000"),
    status: "Active",
  },
]);

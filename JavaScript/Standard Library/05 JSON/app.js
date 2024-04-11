const person = {
    firstName: "Petrus",
    middleName: "Handika",
    lastName: "Sinaga",
    address: {
        country: "Indonesia",
        city: "Jakarta"
    },
    hobbies: [
        "Basketball", "Music", "Running"
    ]
}

const json = JSON.stringify(person);
console.log(json);

const jsonObject = JSON.parse(json);
console.log(jsonObject);
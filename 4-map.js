const myArray = [
    {
        "name": "Usman",
        "Age": 25,
        "Place": "Kasaragod"
    },
    {
        "name": "Jabbar",
        "Age": 35,
        "Place": "Kannur"
    },
    {
        "name": "Fathah",
        "Age": 50,
        "Place": "Kanhangad"
    },
    {
        "name": "Moiducha",
        "Age": 40,
        "Place": "Mangalore"
    }
]

const getAges = (person) => person.Age +1;

const ages = myArray.map(getAges);
console.log(ages)

const newArray = myArray.map((item) =>{
    return {
        personName: item.name,
        personAge: item.Age,
        Home: item.Place.toUpperCase(),

    }
})

console.log(newArray);
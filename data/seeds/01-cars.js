// STRETCH
const cars = [
    {
        vin: "JTHBK262X65020306",
        make: "toyota",
        model:"prius",
        mileage: 215000,
        title: "clean",
        transmission: "manual",
    },
    {
        vin: "1FADP3K25DL345399",
        make: "toyota",
        model:"corolla",
        mileage: 115000,
        title: "clean",
    },
    {
        vin: "5TDKK4CC4AS293335",
        make: "ford",
        model:"focus",
        mileage: 150000,
    },
]

// exports.seed = function(knex) {
//     return knex("cars").truncate().then(() => {
//         return knex(cars).insert(cars)
//     })
// }

exports.seed = async function (knex) {
    return knex("cars")
        .truncate().then(() => {
            return knex("cars").insert(cars)
        })
}
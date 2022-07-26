var rand_array = [];

for (i = 0; i < 5; i++) {
    rand_array.push(Math.random() * 100);
    rand_array[i] = parseInt(rand_array[i]);
    console.log("valor arredondado", rand_array[i]);
}
console.log("o array é", rand_array)


function fizzbuzz() {
    rand_array.forEach((number)  => {
        if (number % 3 == 0 && number % 5 == 0) {
            console.log(number, "fizzbuzz")
            
        }

        else if (number % 3 == 0) {
            console.log(number, "fizz")
        }

        else if (number % 5 == 0) {
            console.log(number, "buzz")
        }
    })
}

fizzbuzz()
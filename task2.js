const we = {
    are: {
        the: {
            best: "Koda"
        }
    }
}

console.log(we.are.the.best)

const hello = {
    world: "Hello World"
}

console.log(hello.world)

const obj = {
    str: [0, 0, 0, [1, [2, 2, {
        man: [{
            tech: {
                academy: "Tech Academy"
            }
        }]
    }]]]
}
console.log(obj.str[3][1][2].man[0].tech.academy)

const my = [{
    favourite: [0, 0, 0, {
        fruit: {
            is: "Apple"
        }
    }]
}]

console.log(my[0].favourite[3].fruit.is)

const num = {
    first: [0, 30],
    second: [0, 0, 2 ]
}

console.log(num.first[1] + num.second[2])
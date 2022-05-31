function fatori(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatori(5))

// 5! = 5 x 4 x 3 x 2 x 1
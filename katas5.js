// implemente aqui as funções de teste

function testReverseString1() {
   let result = reverseString("Kenzie Academy");
   let expected = "ymedacA eizneK";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testReverseString2() {
    let result = reverseString("Oi Galera!");
    let expected = '!arelaG iO';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function reverseString(str) {
    return str.split('').reverse().join('')
}

function testReverseSentence1() {
    let result = reverseSentence("bob likes dogs");
    let expected = 'dogs likes bob';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testReverseSentence2() {
    let result = reverseSentence("Eu gosto da Kenzie!");
    let expected = 'Kenzie! da gosto Eu';
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function reverseSentence(str) {
    return str.split(' ').reverse().join(' ')
}

function testMininumValue1() {
    let result = minimumValue([7, 9, 10, 1, 12])
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMininumValue2() {
    let result = minimumValue([54, 44, 66, 77, 22, 1042, 42])
    let expected = 22
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function minimumValue(arr) {
    arr = arr.sort((a, b) => a - b)
    return arr[0]
}

function testMaximumValue1() {
    let result = maximumValue([7, 9, 10, 1, 12])
    let expected = 12
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testMaximumValue2() {
    let result = maximumValue([54, 44, 66, 77, 22, 24, 42])
    let expected = 77
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function maximumValue(arr) {
    arr = arr.sort((a, b) => a - b)
    return arr[arr.length-1]
}

function testCalculateRemainder1() {
    let result = calculateRemainder(20,13)
    let expected = 7
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCalculateRemainder2() {
    let result = calculateRemainder(100,3)
    let expected = 1
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function calculateRemainder(a, b) {
    let resto = a%b
    return resto
}

function testDistinctValues1() {
    let result = distinctValues('5 6 7 9 7 2 11 34 11 34 11')
    let expected = '2 5 6 7 9 11 34'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testDistinctValues2() {
    let result = distinctValues('5 6 7 5 6 7')
    let expected = '5 6 7'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function distinctValues(str) {
    let arr = []
    str = str.split(' ').sort((a, b) => a - b)

    for (let i = 0; i < str.length; i++){
        if (str[i] !== str[i + 1]) {
            arr.push(str[i])
        }
    }
    return arr.join(' ')
}

function testCountValues1() {
    let result = countValues("1 3 5 3 7 3 1 1 5")
    let expected = "1(3) 3(3) 5(2) 7(1)"
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function testCountValues2(){
    let result = countValues("bob likes likes bob dogs dogs dogs")
    let expected = 'bob(2) likes(2) dogs(3)'
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}

function countValues(str){
    const contador = {}
    let numeros = str.split(" ")
    let resp = []

    for(let i = 0; i < numeros.length; i++) {
        let numero = numeros[i]
        if (contador[numero] === undefined) {
            contador[numero] = 1;
        }else{ 
            contador[numero]++
        }
    }

    for(let number in contador){
        resp.push(`${number}(${contador[number]})`)
    }

    return resp.join(" ")
}
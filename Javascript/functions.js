/**
 *
 * @param {*} text
 * @returns
 */
const extract = (text) => {
    return text ? text.replace(/\D/g, '') : text
}

let test = extract('testando blá blá 9test4test5test89')

console.log(test)
// 94589


/**
 *
 * @param {*} value
 * @param {*} pattern
 * @returns
 */
const mask = (value, pattern) => {
    let i = 0
    const v = value.toString()

    return pattern.replace(/#/g, () => v[i++] || "")
}

const maskedPhone = mask('61999999999', '(##) # ####-####')
const maskedCPF = mask('00000000000', '###.###.###-##')
const maskedCEP = mask('00000000', '#####-###')

console.log(maskedPhone) // (61) 9 9999-9999
console.log(maskedCPF) // 000.000.000-00
console.log(maskedCEP) // 00000-000

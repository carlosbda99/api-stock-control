let allVowels: string[] = ['a', 'e', 'i', 'o', 'u']

function countVowels(text: string, vowels: string[]): string[] {
    let vowelsToCheck: any = {}
    vowels.map(vowel => {
        vowelsToCheck[vowel] = vowel
    })
    let uniqueVowels = []

    for (let vowel in vowelsToCheck) {
        let regexVowel = new RegExp(vowel, 'ig')
        let moreThanOne = (text.match(regexVowel) || []).length == 1

        if (moreThanOne) {
            uniqueVowels.push(vowel)
        }
    }

    console.log(uniqueVowels)
    return uniqueVowels
}


function checkString(vowels: string[], text: string): Function | string {
    if (vowels.length == 0) return 'Nenhuma variável encontrada atendendo os requisitos'

    let regex = new RegExp(`[b-df-hj-np-tv-z][${vowels.join('')}]`, 'i')
    let firstConsonantVogal = text.search(regex)

    if (text.substring(firstConsonantVogal).length < 2) return 'Nenhuma variável encontrada atendendo os requisitos'

    if (text.substring(firstConsonantVogal).length < 3) return text[firstConsonantVogal + 1]
    
    if (validator(firstConsonantVogal, text)) return text[firstConsonantVogal + 1]
    
    let vowelToPop = text[firstConsonantVogal + 1]
    vowels.splice(vowels.indexOf(vowelToPop), 1)
    
    

    
    let restString = text.substring(firstConsonantVogal + 2)
    return checkString(countVowels(restString, vowels), restString)
}

function validator(index: number, text: string) {
    let vowels = ['a', 'e', 'i', 'o', 'u']

    if (vowels.includes(text[index + 2])) return true

    return false
}

function checkVowel(text: string): Function | string {
    return checkString(countVowels(text, allVowels), text)
}

export default checkVowel
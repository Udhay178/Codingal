class Animal {
    constructor(name, age, carnivore) {
        this.name = name
        this.age = age
        this.carnivore = carnivore
    }
    sound() {
        console.log("bau bau")
        console.log("khikhikhikhi")
    }

}

var a1 = new Animal('Dog', '2', true)
var a2 = new Animal('Monkey', '1', false)

console.log(a1.name)
console.log(a2.age)
a1.sound()
a2.sound()

class Human extends Animal {
    constructor(name, age, carnivore, country, language) {
        super(name, age, carnivore)
        this.country = country
        this.language = language
    }
    sound() {
        console.log('Hi, I am a Human, not an Animal!!!')
    }
}

h1 = new Human('Udhay', 13, 'Yes', 'India', 'Punjabi, Hindi and English')
h1.sound()
console.log(h1.name)
console.log(h1.age)
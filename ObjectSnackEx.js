// Code question 1

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Double Cheese Burger
console.log(secondBurger.name ); // Double Cheese Burger

// è stato creato solo un oggetto in memoria durante l'esecuzione di questo codice


// Code question 2

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad

// Sono stati creati due oggetti, che nella struttura contengono lo stesso oggetto(ingredients) che non verrà copiato ma solo modificato


// Code question 3

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

// Attraverso l'utilizzo di structuredClone sono stati creati 3 oggetti, senza contare gli oggetti annidati


// Code question 4

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

// Il metodo migliore per copiare l'oggetto chef è il json, in quanto non essendoci funzioni nell'oggetto annidato non abbiamo bisogno di riportarle nel nuovo oggetto.

// Il metodo migliore per copiare l'oggetto restaurant è 'structuredClone', perchè attraverso questo metodo sarà possibile copiare anche le funzioni al suo interno.
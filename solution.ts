function formatValue(
	value: string | number | boolean
): string | number | boolean {
	if (typeof value === "string") {
		return value.toUpperCase();
	}

	if (typeof value === "number") {
		return value * 10;
	}

	if (typeof value === "boolean") {
		return !value;
	}
	return 0;
}



function getLength(value: string | unknown[]): number {
	if (typeof value === "string") {
		return value.length;
	}

	if (Array.isArray(value)) {
		return value.length;
	}

	return 0;
}



class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	getDetails(): string {
		return `'Name: ${this.name}, Age: ${this.age}'`;
	}
}



type Item = {
	title: string;
	rating: number;
};

function filterByRating(items: Item[]): Item[] {
	return items.filter((item) => item.rating >= 4);
}

const books = [
	{ title: "Book A", rating: 4.5 },
	{ title: "Book B", rating: 3.2 },
	{ title: "Book C", rating: 5.0 },
];







type User = {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
	return users.filter((user) => user.isActive === true);
}











interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
}

function printBookDetails(book: Book): void {
	const bookAvailability = book.isAvailable ? "Yes" : "No";

	console.log(
		`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${bookAvailability}`
	);
}

const myBook: Book = {
	title: "The Great Gatsby",
	author: "F. Scott Fitzgerald",
	publishedYear: 1925,
	isAvailable: true,
};






function getUniqueValues(
	arr1: (string | number)[],
	arr2: (string | number)[]
): (string | number)[] {
    const result : (string | number)[] = [];

    function isExist(arr: (string | number)[], value: string | number ) : boolean {
        for(let i = 0; i<arr.length; i++) {
            if(arr[i] === value) {
                return true;
            }
        }
        return false;
    }


    // adding values of arr1 to result array
    for (let i=0; i<arr1.length; i++) {
        if(!isExist(result, arr1[i])) {
            result[result.length] = arr1[i];
        }
    }

    // adding values of arr2 to result array
    for (let i=0; i<arr2.length; i++) {
        if(!isExist(result, arr2[i])) {
            result[result.length] = arr2[i];
        }
    }


    return result;
}















type Product = {
    name: string;
    price: number; 
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
    if(products.length === 0) {
        return 0;
    }

    const totalPricesArray = products.map((product)=> {
        const subtotal = product.price * product.quantity; 

        if(product.discount !== undefined) {
            const discountedAmount = (subtotal * product.discount) / 100;
            return subtotal - discountedAmount;
        }

        return subtotal;
    });


    let finalTotalPrice = 0;
    for (let i = 0; i<totalPricesArray.length ; i++) {
        finalTotalPrice += totalPricesArray[i];
    }

    return finalTotalPrice;
}


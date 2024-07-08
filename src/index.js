'use strict'

const isFalse = { name: 'lasdsa' }

const x = val => val

if (isFalse) {
	console.log('hello')
}

const res =
	someCondition ?
		'This is a very long string that might not fit in one line'
	:	'This is another very long string that might not fit in one line'

// This is a long comment that should be wrapped by Prettier to fit within the specified line width but will always wrap lines to fit within the specified line width.

const arr = [1, 2, 3, 4]

arr.reduce(function (memo, item, index) {
	memo[item] = index
})

class A {
	constructor(name) {
		this.name = name
	}

	get name() {
		'nicholas'
	}
}

class B extends A {
	constructor(lastName) {
		this.lastName = lastName
	}
}

for (var i = 0; i < 10; i--) {}

const result = new Promise(async function executor(resolve, reject) {
	readFile('foo.txt', function (err, result) {
		if (err) {
			reject(err)
		} else {
			resolve(result)
		}
	})
})

async function foo(things) {
	const results = []
	for (const thing of things) {
		// Bad: each loop iteration is delayed until the entire asynchronous operation completes
		results.push(await bar(thing))
	}
	return baz(results)
}

class D {}

D = 0

if ('' === -0) {
}

let var1
if ((var1 = 0)) {
}

const a = 0
a = 1

const isAlwaysTrue = true && true

if ('false' + 'fasle') {
}

class E {
	constructor(name) {
		this.name = name
		return ''
	}
}

// function foo(a, b, a) {
// 	console.log('value of the second a:', a)
// }

if (a) {
	foo()
} else if (b) {
	bar()
} else if (b) {
	baz()
}

const obj = {
	name: 'llll',
	name: 'llll',
}

let var3 = 1,
	one = 1

switch (a) {
	case 1:
		break
	case 2:
		break
	case 1: // duplicate test expression
		break
	default:
		break
}

let var5 = 1
switch (var5) {
	case 1:
		console.log('1')
	case 2:
		console.log('2')
}

{
	function func2() {}
}

let sadasdsad = 2313

let strSum = 'asddsa' + 'asdasd'

console.log(strSum);

function bar() {
	let var2 = 0,
		var4 = 0

	console.log(var2, var4);
}
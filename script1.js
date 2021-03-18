//  Создать класс SuperMath. Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak. Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. Если - да, сделать математическое действие znak(которое описано в прототипе), иначе - запросить ввод новых данных через метод input() класса SuperMath. Пример обекта: obj = { X:12, Y:3, znak: “/”}, возможные варианты znak=> + - / * %. При вводе znak нужно сделать проверку корректности ввода на возможные математические действия

//  p = new SuperMath(); p.check(obj); // --> no p.input() -> 3 prompt -> считает


const obj = {
	X: 12,
	Y: 3,
	znak: "/",
}

function SuperMath() {
	this.obj = obj;
}

SuperMath.prototype.input = function () {
	const customZnak = prompt("Введите знак");
	switch (customZnak) {
		case '+':
			return obj.X + obj.Y;

		case '-':
			return obj.X - obj.Y;

		case '*':
			return obj.X * obj.Y;

		case '%':
			return obj.X % obj.Y;
	}
}

const p = new SuperMath();

p.check = function () {
	const isZnak = confirm("Произвести действие znak c Х и У?");

	if (isZnak === true) {
		return obj.X / obj.Y;
	} else {
		return p.input();
	}
}

const result = p.check();
console.log(result);
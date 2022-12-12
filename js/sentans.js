
const usdCurr = 28;
const eurCurr = 32;
function convert (ammount, curr) {
//	console.log(curr * ammount);
	return curr * ammount;
}
//convert(500, usdCurr);
//convert(500, eurCurr);
const discont = 0.9;
function promoumtin (result) {
	console.log(result * discont);
}
//promoumtin (convert(500, eurCurr));
const res = convert(500, eurCurr);
promoumtin(res);
//------------------------------
let a;
function calculateVolumeAndArea(a) {
	
	if (typeof(a) !== 'number' || a < 0 || !Number.isInteger(a)) {
		return 'При вычислении произошла ошибка';
	}
	const v = a * a * a,
		   s = a * a * 6;

		return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
}
calculateVolumeAndArea('6');
//--------------------------
function getCoupeNumber(k) {
	if (typeof(k) !== 'number' || k < 0 || !Number.isInteger(k)) {
		return  "Ошибка. Проверьте правильность введенного номера места";
	} else if (k > 36) {
		return  "Таких мест в вагоне не существует";
	}
	else if (k === 0) {
		return  "Таких мест в вагоне не существует";
	}
	return Math.ceil(k / 4);
	}
getCoupeNumber(6);
//---------------------------
function getTimeFromMinutes(min) {
	if (typeof(min) !== 'number' || min < 0 || !Number.isInteger(min)) {
		console.log('error');
		return "Ошибка, проверьте данные";
	}
	const hours = Math.floor(min / 60),
			 minutes = min % 60;
	let hoursStr = '';
	if (hours === 0) {
		hoursStr = 'часов';
	} else if (hours === 1) {
		hoursStr = 'час';
	} else if (2 <= hours <= 4){
		hoursStr = 'часа';
	} else if (hours > 4) {
		hoursStr = 'часов';
	} 
	console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
	return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}
getTimeFromMinutes(70);

//---------------
function findMaxNumber(a, b, c, d) {
	if (typeof(a) !== 'number' ||
		typeof(b) !== 'number' ||
		typeof(c) !== 'number' ||
		typeof(d) !== 'number') {
		return 0;
	}
	console.log(Math.max(a, b, c, d));
	return Math.max(findMaxNumber);
}
findMaxNumber(1, 5, 9, 8)
//2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
//
//Пример:
//
//findMaxNumber(1, 5, 6.6, 11); =>  11
//
//findMaxNumber(1, 5, '6', '10');  =>  0
//-------------------------
function fib(n) {
	if (typeof(n) !== 'number') {
		 console.log('error');
		return '';
	 }
	let a = 0;
	let b = 1;
	let str = '';
	for (let i = 0; i < n; i++) {
		str += `${a} `;
	  let c = a + b;
	  
	  a = b;
	  b = c;
	}
	console.log(str);
	return b;
 }
 fib(5)
 //-----------------

const arr = [1, 2, 5, 6, 8];
arr.pop();
arr.push(10);
console.log(arr);
for (let i = 0; i < arr.length; i++){	
}
for (let j of arr){
	console.log(`${i}: ${item} in ${arr}`);
}
arr[99] = 0;
arr.forEach(function(item, i, arr){
});
const str = prompt("", "");
const product = str.split(", ");
arr.sort();
console.log(product.join('; '));
//--------------------------------
const personalPlanPeter = {
	name: "Peter",
	age: "29",
	skills: {
		 languages: ['ru', 'eng'],
		 programmingLangs: {
			  js: '20%',
			  php: '10%'
		 },
		 exp: '1 month'
	}
};
function showExperience(){
	const {exp} = personalPlanPeter.skills;
	return exp;
}
showExperience()
function showProgrammingLangs(plan){
	let str = '';
	const {ProgrammingLangs} = personalPlanPeter.skills;
	for (let key in ProgrammingLangs){
		str =+ `Язык ${key} изучен на ${ProgrammingLangs[key]}\n`;
		return str;
	}
}
function showExperience(plan) {
const {age} = personalPlanPeter;
const {languages} = personalPlanPeter.languages;
let str = `Мне ${age} и я владею языками: `;
languages.forEach(function(lang){
	str += `${lang.toUpperCasse()}`
})
return str;
}
//3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
//
//Пример:
//
//personalPlanPeter.showAgeAndLangs(personalPlanPeter)
//=> 'Мне 29 и я владею языками: RU ENG'
//
//Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.
////2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.
//
//Пример:
//
//showProgrammingLangs(personalPlanPeter)  =>
//
//"Язык js изучен на 20% Язык php изучен на 10%"
//
//Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.
//
//P.S. Для переноса строки используется \n в конце строки.
//1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
//Пример: showExperience(personalPlanPeter) => '1 month'
//P.S. желательно использовать деструктуризацию, но не обязательно

function showExperience(plan) {

}

function showProgrammingLangs(plan) {

}
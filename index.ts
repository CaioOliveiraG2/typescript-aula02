/*let list: number[] = [1, 2, 3];

let otherList: Array<number> = [1, 2, 3];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1> Array declaration </h1>
<h2>list: ${list}</h2>
<h2>other list: ${otherList}</h2>
`;*/

/*------------------------------------------------------------------*/

/*let me: [string, number];

me = ['Caio', 23];

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Tuple</h1>
<h2>Me Lhamo ${me[0]} e tengo ${me[1]} anos.</h2>
`;*/

/*------------------------------------------------------------------*/

/*enum Color {
  Red,
  Green,
  Blue,
}
let color1: Color = Color.Green;

enum ColorWithRef {
  Red = 10,
  Green = 20,
  Blue = 30,
}
let color2: ColorWithRef = ColorWithRef.Blue;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Enumerated Types</h1>
<h2>Cor 1: ${color1}</h2>
<h2>Cor 2: ${color2}</h2>`;*/

/*------------------------------------------------------------------*/

/*let notSure: any = 4;
notSure = 'Maybe I am a String';
notSure = false; //okay, definitely a boolean

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Any Variable</h1>
<h2>${notSure}</h2>`;*/

/*------------------------------------------------------------------*/

/*function warnUser(): void {
  console.log['This is my warning mensage'];
}

let myFunction: void = warnUser();

let unusable: void = undefined;
unusable = null;

myFunction;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Void</h1>
<h2>unusable: ${unusable}</h2>
<h2>myFunction: ${myFunction}</h2>`; */

/*------------------------------------------------------------------*/

/*declare function create(o: object | null): void;
create({ prop: 0 }); //OK
create(null); //OK
//create(42); //ERRO
//create("string"); //ERRO
//create(false); //ERRO
//create(undefined); //ERRO

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Object</h1>`;*/

/*------------------------------------------------------------------*/

/*let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;

let someValue2: any = 'this is a string!!';
let strLength2: number = (someValue2 as string).length;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Type assertions</h1>
<h2>${strLength}</h2>
<h2>${strLength2}</h2>`;*/

/*------------------------------------------------------------------*/

/*function sum (n1: number, n2: number): number{
  return n1+n2;
}

function fullName (pessoa: {name: string, lastname: string}): string{
  return pessoa.name+" "+pessoa.lastname;
}

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Functions</h1>
<h2>Soma de 2 e 3: ${sum(2,3)}</h2>
<h2>Soma de 6 e 7: ${sum(6,7)}</h2>
<h2>Meu nome completo: ${fullName(
  {lastname: 'Silva', name: 'Caio O.'})}</h2>`;*/

/*------------------------------------------------------------------*/

/*let title: string = 'Olá, mundo';
let paragraph: string = 'Blablabla...';

let counter = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appP: HTMLElement = document.getElementById('app.p');
  appP.innerHTML = 'Contador: ' + counter;
}, 1000);

const btn = document.getElementById('app.btn');
btn?.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando com typescript');
}

// Write TypeScript code!
const appH1: HTMLElement = document.getElementById('app.h1');
appH1.innerHTML = title;*/

/*------------------------------------------------------------------*/

/*class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('Lukinhas');

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Classes</h1>
<h2>${greeter.greet()}!</h2>`;*/

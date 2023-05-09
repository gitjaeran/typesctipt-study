/* Primitives 기본형
- number
- string
- boolean
- null, undefined
*/

// number
let age: number;
age = 12;
//let age: number = 24;

// string
let userName: string;
userName = "cecilia";

// boolean
let isInstructor: boolean;
isInstructor = true;
isInstructor = false;
/*********************************************/

/* More complex types 복잡한 자료형
- arrays
- objects
*/

// arrays
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// objects
let person: {
  name: string;
  age: number;
};

person = {
  name: "Cecilia",
  age: 0,
};

// array of such objects
let people: {
  name: string;
  age: number;
}[];
/*********************************************/

/* Type inference 타입 추론
- Typescript에서 명시적인 타입 표기가 없을 때 자동으로 타입을 추론하여 알맞은 타입을 결정함
*/
let course = "React - The Complete Guide";
/*********************************************/

/* Union Type*/
let union: string | number;
/*********************************************/

/* Type Alias 타입 별칭
- 타입스크립트 코드를 작성하다 보면 동일한 타입을 반복해서 정의하는 일이 많아짐
- 반복해서 타입을 정의하는 대신, 기본base 타입을 만들어서 거기에 복잡한 타입을 정의해두고 그 타입 별칭을 사용함
- 타입스크립트에만 존재하는 기능. 자바스크립트로 컴파일하면 코드에서 사라짐
- 중복된 코드를 줄이고 간결해지며 관리도 수월해짐
- type + 별칭 + 타입내용
*/
type NewTypeAlias = {
  name: string;
  age: number;
};

// 타입 선언
let newObj: NewTypeAlias;

// 배열 형태로 바꿔서 사용 가능
let newArr: NewTypeAlias[];
/*********************************************/

/* Functions & types
- 함수는 매개변수의 타입 뿐만 아니라 반환 값return value의 타입도 생각해야 한다.
*/
// 따라서 아래와 같이 반환 값return value에 대한 타입도 지정해줄 수 있지만, 타입 추론이 되기에 되도록이면 생략한다.
function add(a: number, b: number): number | string {
  return a + b;
}

// void
// 함수에 반환 값return value이 없다는 뜻
function print(value: any) {
  console.log(value);
}
/*********************************************/

/* Generics */
// 함수 타입 안정성과 유연성 - 특정 타입을 사용해 함수를 실행하면 해당 타입으로 고정되어 동작함
// array의 타입과 value의 타입이 일치하다는 것을 알려줌
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updateArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3];
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
// updateArray[0].split("");

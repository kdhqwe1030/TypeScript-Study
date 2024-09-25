// any
// 특정 변수의 타입을 우리가 확실히 모를 때

// let anyVar = 10;
// anyVar = 'hello'; //'string' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)

let anyVar: any = 10;
anyVar = 'hello';
anyVar = true;
// anyVar = {};
// anyVar = () => {};

// anyVar.toUpperCase();
// anyVar.toFixed();

// let num: number = 10;
// num = anyVar;

// //unknown
// let unknownVar:unknown;

// // unknownVar = 'hello';
// // unknownVar = true;
// // unknownVar = 1;
// // unknownVar = () => {};

// let num: number = 10;
// num = unknownVar; // 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.ts(2322)

let unknownVar: unknown;

unknownVar = 1;
unknownVar = () => {};

// unknownVar.toUpperCase();
let num: number = 10;
if (typeof unknownVar === 'number') {
  num = unknownVar;
}

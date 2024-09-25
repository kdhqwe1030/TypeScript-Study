//void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없다는 것을 의미한다.

function fun1(): string {
  return 'hello';
}

function fun2(): undefined {
  console.log('hello');
}

// let a: void;
// a = 1; //'number' 형식은 'void' 형식에 할당할 수 없습니다.ts(2322)
// a = 'hello'; // 'string' 형식은 'void' 형식에 할당할 수 없습니다.ts(2322)
// a = {}; //'{}' 형식은 'void' 형식에 할당할 수 없습니다.ts(2322)
// a = undefined;
// a=null;

//never
//never -> 존재하지 않는, 불가능한 타입

function func3(): never {
  while (true) {}
}

function fun4(): never {
  throw new Error();
}

let anyVar: any;
let a: never;
// a = 1; //'number' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)
// a = 'hello'; //'string' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)
// a = {}; //'{}' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)
// a = undefined; //'undefined' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)
// a = null; //'null' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)
// a= anyVar; //'any' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)

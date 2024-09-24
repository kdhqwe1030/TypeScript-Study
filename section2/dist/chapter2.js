// 배열
let numArr = [1, 2, 3];
let strArr = ['hello', 'im', 'dohyun'];
let boolArr = [true, false, true];
//배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr = [1, 'hello'];
//다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
let tup2 = [1, '2', true];
export {};
//튜플은 사실 별도로 존재하는 자료형이라고 보기는 어렵고 배열이라고 보는 것이 맞다.
//튜플을 tsc로 컴파일 하여 js파일을 확인해보면 결국 일반 배열과 똑같은 것을 확인할 수 있다.

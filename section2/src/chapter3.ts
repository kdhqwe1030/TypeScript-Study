// // // object

// // let user1: object = {
// //   id: 1,
// //   name: '김도현',
// // };

// // // user1.id; //'object'형식에 'id'속성이 없습니다.

// // // object로 타입을 지정해주는 경우, user1이 객체라는 정보밖에 없기 때문에
// // //안에 있는 객체들의 정보는 알 수 없어 점표기법으로 id속성에 접근하게되면 오류가 발생하게 된다.
// // // 그렇다면 어떻게 해결해야할까? 리터럴 방법을 사용해야한다.
// // let user2: {
// //   id: number;
// //   name: string;
// // } = {
// //   id: 1,
// //   name: '김도현',
// // };

// // user2.id; // 정상적으로 인식

// // //위처럼 선언하는 방식을 객체의 각 속성을 리터럴하는 방법과 비슷하다해서
// // //객체 리터럴 타입이라고 부른다.

// // let dog: { name: string; color: string } = {
// //   name: '뭉치',
// //   color: 'brown',
// // };

// let user: {
//   id?: number;
//   name: string;
// } = {
//   id: 1,
//   name: '김도현',
// };

// user = {
//     name:"홍길동"
// }

// //만약 이처럼 Id를 아직모르기 때문에 name부터 입력하는 경우, 오류가 발생하게 된다.
// //Q. Id를 선택적으로 있어도 되고, 없어도 되는 property로 지정하고 싶을 때에는 어떻게 해야할까?

// //A. Id property뒤에 ?를 붙여주면된다.

// // id?:number; 의 경우 "Id가 없어도 되고 있어도 되지만, 있으면 number여야한다."를 의미한다.
// // 이렇게 id와 같이 있어도 되고 없어도 되는 property를 선택적 property 또는 optional property라고 부른다.

let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: '김도현',
};

let config: { readonly apiKey: string } = {
  apiKey: 'My API KEY',
};

// config.apiKey = 'hacked';

// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
//javascript에는 존재하지 않고, typescript에서만 제공하는 특별한 타입이다.

// const user1 = {
//   name: '김도현',
//   role: 0, // 0 <- 관리자
// };
// const user2 = {
//   name: '김묨뮴',
//   role: 1, // 1 <- 일반유저
// };
// const user3 = {
//   name: '김밈뭄',
//   role: 2, // 2 <- 게스트
// };

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
enum Language {
  korean = 'ko',
  english = 'en',
}
const user1 = {
  name: '김도현',
  role: Role.ADMIN, // Role.ADMIN -> 0
  Language: Language.korean,
};
const user2 = {
  name: '김묨뮴',
  role: Role.USER, // Role.USER -> 1
};
const user3 = {
  name: '김밈뭄',
  role: Role.GUEST, // Role.GUEST -> 2
};

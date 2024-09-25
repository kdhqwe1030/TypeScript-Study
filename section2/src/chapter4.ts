// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: '김도현',
  nickname: 'no_dohyun',
  birth: '2000.10.30',
  bio: '안녕하세요',
  location: '부천시',
};

let user2: User = {
  id: 1,
  name: '김도현',
  nickname: 'no_dohyun',
  birth: '2000.10.30',
  bio: '안녕하세요',
  location: '부천시',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

// type CountryNumberCodes = {
//   [key: string]: number;
// };

// let CountryNumberCodes: CountryNumberCodes = {
//   korea: 410,
//   UnitedState: 840,
//   UnitedKingdom: 826,
// };

type CountryNumberCodes = {
  [key: string]: number;
  //   korea: string; //'korea' 형식의 'string' 속성을 'string' 인덱스 유형 'number'에 할당할 수 없습니다.
};

let CountryNumberCodes: CountryNumberCodes = {
  //'{ korea: string; }' 형식은 'CountryNumberCodes' 형식에 할당할 수 없습니다.
  // korea:"ko"
};

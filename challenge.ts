interface User { 
  name: string;
  age?: number;
  birthday?: string;
};
const prettyPrintWilder  = (users: Array<User>) => {
  users.map((user: any) => {
    console.log(`${user.name} is ${user.age} years old`);
  });
};

const wilders : any[] = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: "10/02/1990", age: 32 };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
type Author = {
  name: string;
  age: number;
  email: string;
};

type Awards = {
  [key: string]: AwardDetails;
};

type AwardDetails = {
  name: string;
  date: Date;
};

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
  awards: Awards;
};

let post: Post = {
  title: "This is post title",
  content: "This is content of the post",
  date: new Date(),
  author: {
    name: "John",
    age: 30,
    email: "john@doe.com",
  },
  awards: {
    web: {
      name: "Web Developer of the Year",
      date: new Date(),
    },
    web3: {
      name: "Web3 Innovator",
      date: new Date(),
    },
  },
};

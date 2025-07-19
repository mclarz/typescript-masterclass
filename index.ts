type Author = {
  name: string;
  age: number;
  email: string;
};

type Post = {
  title: string;
  content: string;
  date: Date;
  author: Author;
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
};

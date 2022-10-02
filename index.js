let foo = 0;
const act = () => console.log("act");

// Logical OR assignment
{
  //foo = 1;
  foo ||= 5; // foo || (foo = 5)
  console.log("||=", foo);

  const book = { title: "War and peace", description: "Some text" };
  //if(!book.description) book.description = 'Default';
  book.description ||= "Default";
  //console.log(book);
}

// Logical AND assignment
{
  foo = 0;
  foo &&= 10; // foo && (foo = 10)
  console.log("&&=", foo);
}

// Nullish coalescing
{
  foo = null;
  const count = foo ?? 54;
  console.log("??", count);
}

// Logical nullish assignment
{
  foo = 0;
  foo ??= 200; // foo ?? (foo = 200)
  console.log("??=", foo);

  const book = { title: "Tales of frog Kvakushka" };
  book.description ??= "Default";
  console.log(book);
}

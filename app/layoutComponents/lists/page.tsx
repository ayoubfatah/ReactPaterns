import React from "react";

// Array of books
export const books = [
  {
    name: "To Kill a Mockingbird",
    pages: 281,
    title: "Harper Lee",
    price: 12.99,
  },
  {
    name: "The Catcher in the Rye",
    pages: 224,
    title: "J.D. Salinger",
    price: 9.99,
  },
  {
    name: "The Little Prince",
    pages: 85,

    title: "Antoine de Saint-Exupéry",
    price: 7.99,
  },
];

// Array of authors
type AuthorTypes = {
  name: string;
  nationality: string;
  birthYear: number;
  books: [];
};
export const authors = [
  {
    name: "Harper Lee",
    nationality: "American",
    birthYear: 1926,
    books: ["The Little Prince", "Wind, Sand and Stars"],
  },
  {
    name: "J.D. Salinger",
    nationality: "American",
    birthYear: 1919,
    books: ["The Little Prince", "Wind, Sand and Stars"],
  },
  {
    name: "Antoine de Saint-Exupéry",
    nationality: "French",
    birthYear: 1900,
    books: ["The Little Prince", "Wind, Sand and Stars"],
  },
];

export default function listPage() {
  return (
    <>
      <RegularList
        items={authors}
        sourceName="author"
        ItemComponent={AuthorList}
      />
      <p>----------</p>
      <RegularList items={books} sourceName="book" ItemComponent={BookList} />
    </>
  );
}

const AuthorList = ({ author }: { author: AuthorTypes }) => {
  const { name, nationality, birthYear, books } = author;

  return (
    <>
      <h2>Name :{name}</h2>
      <h3>Nationality :{nationality}</h3>
      <h3>birthYear :{birthYear}</h3>
      <ul>
        books :
        {books.map((book: string) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </>
  );
};

const BookList = ({ book }: { book: (typeof books)[number] }) => {
  const { name, pages, title, price } = book;

  return (
    <>
      <h2>Name: {name}</h2>
      <h3>Pages: {pages}</h3>
      <h3>Title: {title}</h3>
      <h3>Price: ${price.toFixed(2)}</h3>
    </>
  );
};

function RegularList({
  items,
  sourceName,
  ItemComponent,
}: {
  items: any[];
  sourceName: string;
  ItemComponent: React.FC<any>;
}) {
  return (
    <>
      {items.map((item: AuthorTypes, i: number) => (
        <ItemComponent {...{ [sourceName]: item }} />
      ))}
    </>
  );
}

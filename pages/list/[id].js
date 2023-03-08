import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ListDetail() {
  const { query } = useRouter();
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const {
      results: { books },
    } = await (
      await fetch(
        `https://books-api.nomadcoders.workers.dev/list?name=${query.id}`
      )
    ).json();
    setBooks(books);
  };
  useEffect(() => {
    if ("id" in query) {
      getBooks();
    }
  }, [query]);
  return (
    <div>
      <h3>
        {"id" in query
          ? query.id.toString().replaceAll("-", " ")
          : "Loading..."}
      </h3>
      <div className="container">
        {books.length === 0 ? "Loading..." : null}
      </div>
      <div className="row child-borders">
        {books.map((book) => (
          <div
            key={book.rank}
            className="card margin"
            style={{ width: "15rem" }}
          >
            <img src={book.book_image} alt="Card example image" />

            <div className="card-body">
              <h4 className="card-title">{book.title}</h4>
              <h5 className="card-subtitle">{book.author}</h5>
              <p className="card-text">{book.description}</p>
              <a target="_blank" href={book.amazon_product_url}>
                <button>Buy now &rarr;</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        h3 {
          margin-top: 150px;
          text-align: center;
          text-transform: capitalize;
        }
      `}</style>
    </div>
  );
}

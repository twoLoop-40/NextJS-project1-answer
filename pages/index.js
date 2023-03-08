import Link from "next/link";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [results, setResults] = useState([]);
  const getLists = async () => {
    const { results } = await (
      await fetch("https://books-api.nomadcoders.workers.dev/lists")
    ).json();
    setResults(results);
  };
  useEffect(() => {
    getLists();
  }, []);
  return (
    <div className="paper container">
      <h2>The New York Times Best Seller Explorer</h2>
      <div className="row child-borders">
        {results.length === 0 ? "Loading..." : null}
        {results.map((result) => (
          <Link
            href={`/list/${result.list_name_encoded}`}
            className="margin"
            key={result.list_name_encoded}
          >
            <button className="margin">{result.display_name} &rarr;</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { FormEvent, useCallback, useState } from "react";
import { SearchResult } from "@components/SearchResults";

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency', 
  currency: 'BRL',
})

type Product = {
  id: number;
  price: number;
  title: string;
  formattedPrice: string;
};

type Results = {
  totalPrice: number;
  data: Product[];
};

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: [],
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3333/products?q=${search}`);
      const data = await response.json();

      const formattedData = data.map(product => {
        return {
          ...product,
          formattedPrice: formatter.format(product.price),
        }
      })

      const totalPrice = data.reduce((accumulate, product) => {
        return accumulate + product.price;
      }, 0)
  
      setResults({ totalPrice, data: formattedData });
    } catch (err) {
      alert('Falha na busca!');
    }
  }

  const handleAddToWishlist = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <main>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

      <SearchResult 
        totalPrice={results.totalPrice}
        results={results.data} 
        onAddToWishlist={handleAddToWishlist}
      />
    </main>
  )
}

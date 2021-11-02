import { ProductItem } from "./ProductItem"

type SearchResultProps = {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    title: string;
    formattedPrice: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResult({ results, onAddToWishlist, totalPrice }: SearchResultProps) {

  return (
    <div>
      <h2>{totalPrice}</h2>

      {results.map(product => (
        <ProductItem 
          key={product.id} 
          product={product} 
          onAddToWishlist={onAddToWishlist}
        />
      ))}
    </div>
  )
}
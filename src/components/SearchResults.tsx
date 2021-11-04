import { List, ListRowRenderer } from 'react-virtualized';

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
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem 
          product={results[index]} 
          onAddToWishlist={onAddToWishlist}
        />
      </div>
    );
  }

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List 
        height={300}
        width={900}
        rowHeight={30}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  )
}
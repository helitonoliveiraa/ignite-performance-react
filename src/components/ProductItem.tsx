import { memo, useState } from 'react';
import dynamic from 'next/dynamic';

// import { AddProductToWishlist } from './AddProductToWishlist';
import { AddProductToWishlistProps } from './AddProductToWishlist';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
  return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist);
}, {
  loading: () => <span>Carregando...</span>,
  ssr: false,
});



type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
    formattedPrice: string;
  },
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.formattedPrice}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

      {isAddingToWishlist && (
        <AddProductToWishlist 
          onAddToWishlist={() => onAddToWishlist}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent, 
  (prevProps, nextProp) => {
    return Object.is(prevProps.product, nextProp.product);
});
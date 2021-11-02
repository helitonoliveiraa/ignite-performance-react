import { memo } from 'react';

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
  return (
    <div>
      {product.title} - <strong>{product.formattedPrice}</strong>

      <button
        onClick={() => onAddToWishlist(product.id)}
      >Add to wishlist</button>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent, 
  (prevProps, nextProp) => {
    return Object.is(prevProps.product, nextProp.product);
});
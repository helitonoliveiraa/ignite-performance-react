export type AddProductToWishlistProps = {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
};

export function AddProductToWishlist({
  onAddToWishlist,
  onRequestClose
}: AddProductToWishlistProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button type="button" onClick={onAddToWishlist}>Sim</button>
      <button type="button" onClick={onRequestClose}>Não</button>
    </span>
  );
}
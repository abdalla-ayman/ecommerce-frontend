function CartCard({ data }) {
  const { item, quantity } = data;
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.price}</p>
      <img
        src={`http://localhost:5000/${item.imgURL}`}
        alt=""
        className="w-full h-64 object-cover"
      />
      <p>{quantity}</p>
    </div>
  );
}

export default CartCard;

const btnStyles = "border-[1.2px] border-slate-800 px-3 py-1 rounded ";
const SetQuantity = ({
  quantity,
  cardCounter,
  handelQtyIncrease,
  handelQtyDecrease,
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cardCounter ? null : <div className="font-semibold">QUANTITY</div>}
      <div className="flex md:flex-row flex-col gap-4 items-center lg:text-[22px] text-sm">
        <button disabled={quantity <= 1} className={btnStyles} onClick={handelQtyDecrease}>
          -
        </button>
            <div className="text-red-500">{quantity}</div>
        <button onClick={handelQtyIncrease} className={btnStyles}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetQuantity;

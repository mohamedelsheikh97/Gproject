const PriceFormat = (props) => {
  return Intl.NumberFormat("en-AM", {
    style: "currency",
    currency: "EGY",
    maximumFractionDigits: 2,
  }).format(props.price);
};

export default PriceFormat;

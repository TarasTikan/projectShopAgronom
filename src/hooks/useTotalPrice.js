import { useEffect, useState } from 'react';

const useTotalPrice = (productOne, number) => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const calculateTotalPrice = () => {
      const price = Number(productOne?.price) || 0;
      const quantity = Number(number) || 1;
      setTotalPrice(price * quantity);
    };

    calculateTotalPrice();
  }, [productOne, number]);
  return totalPrice;
};
export default useTotalPrice;

import { useContext, createContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext({});

export const AVAILABLE_COUPONS = {
  BURGER10: {
    code: 'BURGER10',
    type: 'percentage',
    value: 10,
    label: '10% de Desconto',
  },
  FRETEGRATIS: {
    code: 'FRETEGRATIS',
    type: 'delivery',
    value: 500,
    label: 'Frete Grátis',
  },
  PRIMEIRACOMPRA: {
    code: 'PRIMEIRACOMPRA',
    type: 'fixed',
    value: 1000,
    label: 'R$ 10,00 OFF',
  },
};

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(() => {
    const clientCartData = localStorage.getItem('devburguer:cartInfo');

    if (clientCartData) {
      return JSON.parse(clientCartData);
    }

    return [];
  });

  const [coupon, setCoupon] = useState(() => {
    const savedCoupon = localStorage.getItem('devburguer:coupon');
    if (savedCoupon) {
      try {
        return JSON.parse(savedCoupon);
      } catch {
        return null;
      }
    }
    return null;
  });

  const putProductInCart = (product) => {
    const qtyToAdd =
      product.quantity && product.quantity > 0 ? product.quantity : 1;
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newProductsInCart = [];

    if (cartIndex >= 0) {
      newProductsInCart = cartProducts.map((prd) =>
        prd.id === product.id
          ? {
              ...prd,
              quantity: prd.quantity + qtyToAdd,
              observation: product.observation !== undefined ? product.observation : (prd.observation || ''),
            }
          : prd,
      );

      setCartProducts(newProductsInCart);
    } else {
      const productWithQtd = {
        ...product,
        quantity: qtyToAdd,
        observation: product.observation || '',
      };
      newProductsInCart = [...cartProducts, productWithQtd];
      setCartProducts(newProductsInCart);
    }

    updateLocalStorage(newProductsInCart);
  };

  const updateProductObservation = (productId, observation) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId ? { ...prd, observation } : prd;
    });

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  const clearCart = () => {
    setCartProducts([]);
    setCoupon(null);
    localStorage.removeItem('devburguer:coupon');
    updateLocalStorage([]);
  };

  const deleteProducts = (productId) => {
    const newCart = cartProducts.filter((prd) => prd.id !== productId);

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  const increaseProducts = (productId) => {
    const newCart = cartProducts.map((prd) => {
      return prd.id === productId
        ? { ...prd, quantity: prd.quantity + 1 }
        : prd;
    });

    setCartProducts(newCart);
    updateLocalStorage(newCart);
  };

  const decreaseProducts = (productId) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === productId);

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((prd) => {
        return prd.id === productId
          ? { ...prd, quantity: prd.quantity - 1 }
          : prd;
      });

      setCartProducts(newCart);
      updateLocalStorage(newCart);
    } else {
      deleteProducts(productId);
    }
  };

  const applyCoupon = (code) => {
    const normalizedCode = (code || '').trim().toUpperCase();

    if (!normalizedCode) {
      toast.warn('Digite o código de um cupom!');
      return false;
    }

    const foundCoupon = AVAILABLE_COUPONS[normalizedCode];

    if (foundCoupon) {
      setCoupon(foundCoupon);
      localStorage.setItem('devburguer:coupon', JSON.stringify(foundCoupon));
      toast.success(`🎉 Cupom "${foundCoupon.code}" aplicado: ${foundCoupon.label}!`);
      return true;
    }

    toast.error('Cupom inválido ou expirado!');
    return false;
  };

  const removeCoupon = () => {
    setCoupon(null);
    localStorage.removeItem('devburguer:coupon');
    toast.info('Cupom removido.');
  };

  const calculateDiscount = (subtotal, deliveryTax = 500) => {
    if (!coupon) return 0;
    if (coupon.type === 'percentage') {
      return Math.round((subtotal * coupon.value) / 100);
    }
    if (coupon.type === 'delivery') {
      return deliveryTax;
    }
    if (coupon.type === 'fixed') {
      return Math.min(coupon.value, subtotal);
    }
    return 0;
  };

  const updateLocalStorage = (products) => {
    localStorage.setItem('devburguer:cartInfo', JSON.stringify(products));
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        updateProductObservation,
        clearCart,
        deleteProducts,
        increaseProducts,
        decreaseProducts,
        coupon,
        applyCoupon,
        removeCoupon,
        calculateDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with a context');
  }

  return context;
};

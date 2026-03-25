import { useContext, createContext, useState } from 'react';

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(() => {
    const clientCartData = localStorage.getItem('devburguer:cartInfo');

    if (clientCartData) {
      return JSON.parse(clientCartData);
    }

    return [];
  });

  const putProductInCart = (product) => {
    const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

    let newProductsInCart = [];

    if (cartIndex >= 0) {
      newProductsInCart = cartProducts.map((prd) =>
        prd.id === product.id ? { ...prd, quantity: prd.quantity + 1 } : prd,
      );

      setCartProducts(newProductsInCart);
    } else {
      product.quantity = 1;
      newProductsInCart = [...cartProducts, product];
      setCartProducts(newProductsInCart);
    }

    updateLocalStorage(newProductsInCart);
  };

  const clearCart = () => {
    setCartProducts([]);

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

  const updateLocalStorage = (products) => {
    localStorage.setItem('devburguer:cartInfo', JSON.stringify(products));
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        clearCart,
        deleteProducts,
        increaseProducts,
        decreaseProducts,
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

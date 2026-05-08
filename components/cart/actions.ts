"use server";

import { TAGS } from "lib/constants";
import {
    addToCart,
    createCart,
    getCart,
    removeFromCart,
    updateCart,
} from "lib/shopify";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addItem(
  prevState: any,
  selectedVariantId: string | undefined,
  quantity: number = 1,
) {
  if (!selectedVariantId) {
    return "Error adding item to cart";
  }

  try {
    const cookieStore = await cookies();
    let cartId = cookieStore.get("cartId")?.value;
    const lineItem = { merchandiseId: selectedVariantId, quantity };

    if (!cartId) {
      // Fast path: create cart with the product in a single request.
      const cart = await createCart([lineItem]);
      cartId = cart.id;
      cookieStore.set("cartId", cartId!);
    } else {
      try {
        await addToCart(cartId, [lineItem]);
      } catch {
        // Retry once with a fresh cart if the previous cart became invalid.
        const freshCart = await createCart([lineItem]);
        cartId = freshCart.id;
        cookieStore.set("cartId", cartId!);
      }
    }

    revalidateTag(TAGS.cart, "max");
  } catch (e) {
    console.error("Error adding item to cart:", e);
    return "Error adding item to cart";
  }
}

export async function removeItem(prevState: any, merchandiseId: string) {
  try {
    const cart = await getCart();

    if (!cart) {
      return "Error fetching cart";
    }

    const lineItem = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId,
    );

    if (lineItem && lineItem.id) {
      await removeFromCart([lineItem.id]);
      revalidateTag(TAGS.cart, "max");
    } else {
      return "Item not found in cart";
    }
  } catch (e) {
    return "Error removing item from cart";
  }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    merchandiseId: string;
    quantity: number;
  },
) {
  const { merchandiseId, quantity } = payload;

  try {
    const cart = await getCart();

    if (!cart) {
      return "Error fetching cart";
    }

    const lineItem = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId,
    );

    if (lineItem && lineItem.id) {
      if (quantity === 0) {
        await removeFromCart([lineItem.id]);
      } else {
        await updateCart([
          {
            id: lineItem.id,
            merchandiseId,
            quantity,
          },
        ]);
      }
    } else if (quantity > 0) {
      // If the item doesn't exist in the cart and quantity > 0, add it
      await addToCart(cart.id!, [{ merchandiseId, quantity }]);
    }

    revalidateTag(TAGS.cart, "max");
  } catch (e) {
    console.error(e);
    return "Error updating item quantity";
  }
}

export async function redirectToCheckout() {
  const cart = await getCart();

  if (!cart?.checkoutUrl) {
    redirect("/");
  }

  redirect(cart.checkoutUrl);
}

export async function createCartAndSetCookie() {
  let cart = await createCart();
  (await cookies()).set("cartId", cart.id!);
}

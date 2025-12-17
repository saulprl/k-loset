# Shopify Store Configuration

This file is meant to be a guide for all the configurations needed to set up a new store that works with this Headless website.

## Metafields

### Collections

- `featured` (boolean) - Used to mark collections as featured so they can be displayed on the homepage.
- `card_overlay` (Metaobject `Card Overlay`) - Used to set a collection's card's overlay.

## Metaobjects

- `Card Overlay`: Used to create custom overlays for collection cards. Contains:

  - `color` (enum: `black`, `brown-red`, `royal-gold`): The color of the overlay.
  - `direction` (enum: `up`, `down`, `left`, `right`): The direction of the gradient overlay.

- `Koren Title`: Used to create custom Korean titles for collection cards. Contains:

  - `value` (string): The Korean text to display.
  - `orientation` (enum: `horizontal`, `vertical`): The orientation of the text.
  - `position`: (enum: `top-right`, `top-left`, `bottom-right`, `bottom-left`): The position of the text on the card.

## Webhooks

Webhooks are used to keep the local store in sync with Shopify. Make sure to check them out and set them up.

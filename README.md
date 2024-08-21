# Google ReCaptcha v3 invisible - Checkout - Text only

## Description
### Short
This module changes the Google Recaptcha v3 (invisible) badge **in the checkout** to a less dominant text/html form.
#### Before
![recaptcha_en_default](https://github.com/user-attachments/assets/58cacfba-c197-404c-b226-ff779f8c2999)
#### After
![recaptch_text_only](https://github.com/user-attachments/assets/a4357212-bdc5-4bd1-a4f8-4fa5a2d4d43b)
### Long
Many store operators are bothered by the dominant appearance of the ReCaptcha box. [According to Google](https://developers.google.com/recaptcha/docs/faq?hl=de#id-like-to-hide-the-recaptcha-badge.-what-is-allowed), it is generally permitted to hide the box and alternatively display a text including the legal links.

### Supportet languages
* (en_US)
* de_DE
* es_ES
* fr_FR
* it_IT

## Configuration

### Backend
STORES > (Settings) Configuration > SECURITY > Google reCAPTCHA Storefront > Storefront > Checkout/Placing Order - Enable text only mode

### Path
recaptcha_frontend/type_for/place_order_text_only 1 || 0
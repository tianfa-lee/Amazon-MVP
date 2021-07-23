# Amazon MVP
![GitHub](https://camo.githubusercontent.com/ee2de4be68db65d60cde7c99761d493c1d2b35dab5d8675a3dcbd0f776022de1/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f6564756172646f7a6f2f77686174736170702d6d65726e3f7374796c653d666c6174)

This build replicates the Amazon web-app UI & UX design. Users can sign up and make purchases using test credit card with the backend powered by the Firebase cloud function.

**Technologies used:**
* Firebase (Firestore (NoSQL Database), Authentication and Cloud Function)
* Express
* React
* Node
* Axios
* Material UI
* Stripe API
* React Router (Single Page Application) and Context API 

**Features**
* Banner Carousel on Home Page
* Back To Top Button on Home Page
* Register and login to Amazon MVP
* Add or remove item(s) from shopping basket
* Purchase item(s) using MasterCard, VISA or AMEX


### Steps 

*** 

* Go to https://clone-94d06.web.app/ and register for an account

* Login into the website

* Add / Remove item(s) to / from shopping basket

* Proceed to checkout

* **Ensure that the user is login as payment will not be processed if user is guest.**

* Type in either of the following test credit card number:

  Date: Any future date | ZIP: Any number 

  * Visa Card Number: 4242 4242 4242 4242 

    CVC: Any 3 digits 

  * Mastercard Card Number: 5555 5555 5555 4444 

    CVC: Any 3 digits 

  * AMEX Card Number: 3782 822463 10005 

    CVC: Any 4 digits 

* The payment is complete when the shopping basket is empty and the page is now at the Orders Page

### Project Directory (excluding node modules)

*** 

```bash
.Amazon MVP
|   .env_sample # rename to .env and add your API configuration
|   .firebaserc
|   .gitignore
|   .firebase.json
|   LICENSE
|   package-lock.json
|   package.json
|   README.md
|
+---functions
|       .env_sample # rename to .env and add your API configuration
|       .eslintrc.js
|       .eslintrc.json
|       .gitignore
|       index.js
|       package-lock.json
|       package.json
|
+---public
|       favicon.ico
|       index.html
|       logo192.png
|       logo512.png
|       manifest.json
|       robots.txt
|
\---src
        App.js
        axios.js
        BackToTop.css
        BackToTop.js
        Banner.css
        Banner.js
        Checkout.css
        Checkout.js
        CheckoutProduct.css
        CheckoutProduct.js
        firebase.js
        Footer.css
        Footer.js
        Header.css
        Header.js
        Home.css
        Home.js
        index.css
        index.js
        Login.css
        Login.js
        Order.css
        Order.js
        Orders.css
        Orders.js
        Payment.css
        Payment.js
        Product.css
        Product.js
        reducer.js
        serviceWorker.js
        StateProvider.js
        Subtotal.css
        Subtotal.js

```

### Screenshots

***

* Home Page

  ![Home Page](https://i.ibb.co/HrzGNDs/Home-Page.png)

* Responsive Home Page

  ![Responsive Home Page](https://i.ibb.co/4smzw9D/Responsive-Home-Page.png)

* Login Page

  ![Login Page](https://i.ibb.co/CsFh2ys/Login-Page.png)

* Checkout Page

  ![Checkout Page](https://i.ibb.co/31pm6P6/Checkout-Page.png)

* Payment Page

  ![Payment Page](https://i.ibb.co/x7K6BZy/Payment-Page.png)

* Order Page

  ![Order Page](https://i.ibb.co/jTGrkXZ/Order-Page.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


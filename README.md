<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://natours-gnf4osccc-burhanusrs-projects.vercel.app">
    <img src="https://natours-gnf4osccc-burhanusrs-projects.vercel.app/img/logo-green-round.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">Natours</h1>

  <p align="center">
    Amazing Tour Booking Web App
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

![image](https://github.com/user-attachments/assets/43eb0425-84c4-4d01-9130-21df43090e07)

## Build With

- [NodeJS](https://nodejs.org/en/) - JS runtime environment
- [Express](http://expressjs.com/) - The web framework used
- [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
- [Pug](https://pugjs.org/api/getting-started.html) - High performance template engine
- [JSON Web Token](https://jwt.io/) - Security token
- [ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
- [Midtrans](https://midtrans.com/) - Online payment API and Making payments on the app.
- [Postman](https://www.getpostman.com/) - API testing
- [Mailtrap](https://mailtrap.io/) & [Brevo](https://app.brevo.com/) - Email delivery platform
- [Vercel](https://vercel.com/) - Cloud platform
- [Leaflet](https://leafletjs.com/) - Displaying the different locations of each tour.

## Local Environment

If you wish to play around with the code base in your local environment, do the following

```
* Set up account with : MONGODB, MAILTRAP, BREVO, MIDTRANS
* In your .env file, set environment variables for the following:

    * NODE_ENV=(set your node environment into development/production)
    * PORT=(define port where your server will run)
    * DATABASE=(mongodb url)
    * DATABASE_PASSWORD=(mongodb password)

    * JWT_SECRET=(json web token secret)
    * JWT_EXPIRES=1d
    * JWT_COOKIE_EXPIRES=1

    * EMAIL_USERNAME=(malitrap username)
    * EMAIL_PASSWORD=(mailtrap password)
    * EMAIL_HOST=smtp.mailtrap.io
    * EMAIL_PORT=2525
    * EMAIL_FROM=(your email address)

    * BREVO_HOST=(your brevo smpt server)
    * BREVO_PORT=(your brevo port)
    * BREVO_LOGIN=(your brevo login)
    * BREVO_PASSWORD=(your brevo smpt master password)

    * MID_PUBLIC_CLIENT=(your midtrans client key)
    * MID_SECRET=(your midtrans server key)

* Start the server.
* Your app should be running just fine.
```

## Acknowledgement

- This project is based on Udemy course by Jonas Schmedtmann. Link to the course: [Node.js, Express, MongoDB & More: The Complete Bootcamp 2019](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
<!-- [![MIT License][license-shield]][license-url] -->
[![LinkedIn][linkedin-shield]][linkedin-url]
</br>

<br />
<div align="center">
  <a href="https://github.com/beckpull/e-commerce-redux">

<h1 align="center">Simple E-Store using Redux & Stripe</h1>

  <p align="center">
An application to view and manage departments, roles, and employees in your company so that you can organize and plan your business
    <br />
    <a href="https://github.com/beckpull/e-commerce-redux"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://e-commerce-redux-r7za.onrender.com">Go to website</a>
    ·
    <a href="https://github.com/beckpull/e-commerce-redux/issues">Report Bug</a>
    ·
    <a href="https://github.com/beckpull/e-commerce-redux/issues">Request Feature</a>
  </p>
</div>

</br>
</br>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
     <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

</br>
</br>

<!-- ABOUT THE PROJECT -->

### About the Project

Welcome to the E-Commerce Store, a full-featured online shopping platform built with the MERN stack. This application leverages MongoDB for data storage, Express and Node.js for the backend server, React for the frontend, Redux for state management, and Stripe for payment processing.

## Features

- **User Authentication:** Secure user registration and login using JWT (JSON Web Tokens).
- **Product Management:** Browse, search, and filter products by category.
- **Shopping Cart:** Add and remove products from the shopping cart.
- **Order Management:** Place orders and view order history.
- **Payment Processing:** Secure payment processing with Stripe.

## Technologies Used

- **Frontend:**

  - React
  - Redux
  - React Router
  - Axios
  - Bootstrap

- **Backend:**

  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT for authentication
  - Stripe for payment processing

- **Other:**
  - dotenv for environment variables
  - bcryptjs for password hashing

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

<!-- * ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) -->
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Apollo-GraphQL](https://img.shields.io/badge/Apollo%20GraphQL-311C87?&style=for-the-badge&logo=Apollo%20GraphQL&logoColor=white)
- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- ![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
- ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
- ![Express.js](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![NodeJS]
- ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)
- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

<p align="center"><i><strong>✨ Everything you need to know ✨</strong></i></p>

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn
- MongoDB

### Installation

_To get a local copy up and running follow these simple example steps:_

1. Clone the repo
   ```sh
   HTTP: git clone https://github.com/beckpull/e-commerce-redux.git
   SSH: git clone git@github.com:beckpull/e-commerce-redux.git
   ```
2. Install all necessary NPM packages
   ```sh
   npm i
   ```
3. Run app
   ```js
   npm run develop
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<!-- Link to deployed site -->

- **Click [here](https://e-commerce-redux-r7za.onrender.com) or scan the below QR code to watch a demo video on how to use this application.**
</br></br>
<div align="center">
 <a href="">
    <img src="./readme-imgs/qr.png" alt="QR code to deployed site" width="200">
  </a> 
  <!-- <a href="https://github.com/beckpull/e-commerce-redux">
   <p>This is what users can expect upon installing/running my app:</p>
    <img src="./assets/pic1.png" alt="Welcome screen labeled 'Employee Manager'" width="700">
  </a>
  <p>The following are the example outputs:</p>
  <a href="https://github.com/beckpull/e-commerce-redux">
    <p>View All Employees:</p>
    <img src="./assets/viewAllEmps.png" alt="" width="700">
  </a>
    <a href="https://github.com/beckpull/e-commerce-redux">
    <p>View All Roles:</p>
    <img src="./assets/viewAllRoles.png" alt="" width="600">
  </a>
    <a href="https://github.com/beckpull/e-commerce-redux">
    <p>View All Departments:</p>
    <img src="./assets/viewDept.png" alt="" width="600">
  </a>
  <a href="https://github.com/beckpull/e-commerce-redux">
    <p>View Employees by Department (from my 'Research and Development' department)</p>
    <img src="./assets/viewEmpByDept.png" alt="" width="600">
  </a>
    <a href="https://github.com/beckpull/e-commerce-redux">
    <p>View Utilized Budget by Department (from my 'Research and Development' department)</p>
    <img src="./assets/deptBudget.png" alt="" width="700">
  </a>
  <p align="right"><i>#</i></p>

</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
<!-- ## Roadmap

<img src="./assets/schema-roadmap.png">
<div align="right">
  <p><i>This was how I chose to set up my schema for this project - including one <strong>departments</strong> table, one <strong>roles</strong> table (with foreign key dept_id which references departments.id) and one <strong>employees</strong> table (with foreign keys role_id which references role.id and manager_id which self-references their manager's employee id, or in other words, employees.id)</i></p>
</div>
</br></br></br>
<img src="./assets/js-roadmap.png">
<div align="right">
  <p><i>This was my roadmap to completing all of the acceptance criteria</i></p>
</div> -->

<!-- AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem -->

<!-- GIVEN an e-commerce platform that uses Redux to manage global state
WHEN I review the app’s store
THEN I find that the app uses a Redux store instead of the Context API
WHEN I review the way the React front end accesses the store
THEN I find that the app uses a Redux provider
WHEN I review the way the app determines changes to its global state
THEN I find that the app passes reducers to a Redux store instead of using the Context API
WHEN I review the way the app extracts state data from the store
THEN I find that the app uses Redux instead of the Context API
WHEN I review the way the app dispatches actions
THEN I find that the app uses Redux instead of the Context APIe  -->

<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**!

_If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!_

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Added ______ , NewFeature'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

See the [open issues](https://github.com/beckpull/e-commerce-redux/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

<p align='center'>Distributed under the MIT License. See `LICENSE.txt` for more information.</p>
<p align='center'>© Beck Feltman · All rights reserved.</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

**Rebecca Feltman** - [Email me](mailto:beckpull@icloud.com) - or check me out on [GitHub!](https://github.com/beckpull)

> Repository Link: [https://github.com/beckpull/e-commerce-redux](https://github.com/beckpull/e-commerce-redux)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- This README file template was created by [@othneildrew](https://github.com/othneildrew) - the original can be found [here](https://github.com/othneildrew/Best-README-Template)
- Huge thank you to my tutor, [Juan Delgado](https://www.linkedin.com/in/jj-delgado/) for all of your help throughout this project ✨

#### Disclaimer:

> I utilized several articles from sources such as (but not limited to) Stack Overflow, W3Schools, and MDN Web Docs **as references** for the javascript code attached.
>
> **All of the utilized information has been altered in order to fit this project. This repository contains _solely_ my own work.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/beckpull/e-commerce-redux.svg?style=for-the-badge
[contributors-url]: https://github.com/beckpull/e-commerce-redux/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/beckpull/e-commerce-redux.svg?style=for-the-badge
[forks-url]: https://github.com/beckpull/e-commerce-redux/network/members
[stars-shield]: https://img.shields.io/github/stars/beckpull/e-commerce-redux.svg?style=for-the-badge
[stars-url]: https://github.com/beckpull/e-commerce-redux/stargazers
[issues-shield]: https://img.shields.io/github/issues/beckpull/e-commerce-redux.svg?style=for-the-badge
[issues-url]: https://github.com/beckpull/e-commerce-redux/issues
[license-shield]: https://img.shields.io/github/license/beckpull/e-commerce-redux.svg?style=for-the-badge
[license-url]: https://github.com/beckpull/e-commerce-redux/blob/main/LICENSE
[product-screenshot]: images/screenshot.png
[NodeJS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[Bulma]: https://img.shields.io/badge/bulma-00D0B1?style=for-the-badge&logo=bulma&logoColor=white
[linkedin-shield]: https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/beckpull/
[stackoverflow-shield]: https://img.shields.io/badge/-Stackoverflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white
[jest-shield]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white

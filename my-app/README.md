<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="MFA"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">UI for MFA(pincode, biometric authentication, otp authentication) with react, express</h3>

  <p align="center">
    This is repository for the Digital Assets Safe MVP with MFA
    <br />
    <a href="https://github.com/Chocothin/mfa"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Chocothin/mfa">View Demo</a>
    ·
    <a href="https://github.com/Chocothin/mfa/issues">Report Bug</a>
    ·
    <a href="https://github.com/Chocothin/mfa/issues">Request Feature</a>
  </p>
</div>



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
    <li><a href="#directory-structure">Directory structure</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This is repository for the Digital Assets Safe MVP with MFA



<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Node-js][Node.js]][Node-js-url]
* [![Express.js][Express.js]][Express-js-url]
* [![Corbado][Corbado]][Corbado-url]
* [![Okta][Okta]][Okta-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

Make sure that your local environment has the latest React, Nodejs


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Chocothin/mfa.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. get your Google App Password

     Go to https://myaccount.google.com/security

      And then go to the security tab and go into 2-step  verification

      Go to App passwords and create your App password

4. Enter your Email adress & App Password in `.env`
   ```js
    YOUR_EMAIL="Your Google email"
    YOUR_APP_PASSWORD="Your app password"
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📂 Directory structure
```
📦My-app
┣ 📂node_modules    //npm module
┣ 📂public          //safe directory & logo images
┃ ┣ 📂firstSafe
┃ ┣ 📂secondSafe
┃ ┗ 📂thirdSafe
┣ 📂src
┃ ┣ 📂Main          //Main page components
┃ ┣ 📂securityLayer //authentication components
┃ ┣ 📂server        //express code
┃ ┣ 📜App.js
┃ ┣ 📜index.js
┗ 📜.env
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

- Corbado webAuth

In Corbado private project page, define application url and redirect url to add demo that let your app access your local biometric authentication system such as Touch ID
```js
import React from 'react';
import '@corbado/webcomponent'
import '@corbado/webcomponent/pkg/auth_cui.css'

const CORBADO_PROJECT_ID = "pro-5890664499307067638";
//생체 인증 모듈 - 데모 버전
function BioAuth() {
    return (
        <div className="App">
            <corbado-auth project-id={CORBADO_PROJECT_ID} conditional="yes">
                <input name="username" id="corbado-username"
                       required autoComplete="webauthn"/>
            </corbado-auth>
        </div>
    );
}

export default BioAuth;
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTACT -->
## Contact

이재서 - [1wotj@naver.com]

Project Link: [https://github.com/Chocothin/mfa](https://github.com/Chocothin/mfa)

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: /public/screen_shot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-js-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-js-url]: https://expressjs.com
[Okta]: https://img.shields.io/badge/Okta-007DCC?style=for-the-badge&logo=okta&logoColor=white
[Okta-url]: https://www.okta.com/
[Corbado]: https://assets-global.website-files.com/626a572dd59ab59d107b26c6/6285290cdc476312ea882af9_Corbado%20Wort-Bildmarke.svg
[Corbado-url]:https://www.corbado.com/
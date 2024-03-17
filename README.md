# Northcoders News

## Table of Contents

- [Project Summary](#project-summary)
- [Install](#install)
- [Usage](#usage)
    - [Running a Local Version](#running-a-local-version)
    - [Deploying a Production Version](#deploying-a-production-version)
- [Deployed Version](#deployed-version)

## Project Summary

This project uses the React library to create a website called Northcoders News, which connects to the API built [previously](https://github.com/crdavidson1/backend-project). It has articles which are divided into topics, and each article has user-curated ratings from upvotes and downvotes using the API. Users can also add comments about an article.

## Install

To run this project, the repo must be cloned in your local directory.

This project relies on [node](http://nodejs.org) and [npm](https://npmjs.com). Node.js version 18 is the minimum version required for this project.

Using npm, the following dependencies must be installed: 
- [react](https://react.dev/)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-router-dom](https://reactrouter.com/en/main/start/tutorial)
- [axios](https://axios-http.com/docs/intro)
- [mui](https://mui.com/)


## Usage

### Running a Local Version

To run a local version of the site, use the following command to generate a local link which can be viewed in a browser.

```sh
$ npm run dev
```

### Deploying a Production Version

Netlify can be used to deploy a static version of the site, which has a free tier available. To do this, first sign up to Netlify. Then run the following command in the terminal.

```sh
$ npm run build
```

Install Netlify's command line interface, which can then be used to deploy the site through the terminal.

```sh
$ npm install netlify-cli -g
$ netlify deploy
```

A list of options will then appear in the terminal. Select 'Create & configure a new site'. Provide a site name and select your personal account. Finally, provide a deploy path. This should point to your build directory which should be './dist' going from the root of the react app.

You should then have the URL at which the site has been deployed.

## Deployed Version

A deployed version of this project can be found [here](https://enchanting-gaufre-777b8e.netlify.app/).

A hosted version of the API built alongside this site can be found [here](https://backend-project-cr4a.onrender.com).

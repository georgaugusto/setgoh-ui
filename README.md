<h2 align="center">
  SetGoh UI
</h2>

<p align="center">
  <a href="#About">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Preview">Preview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#How-to-run-locally">How to run locally</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## About
This repository contains SetGoh UI, my own Design System inspired by Uber's [Base Gallery](https://www.figma.com/community/file/805195278314519508), already including support for light and dark modes. I used the monorepo concept with [turbo](https://turbo.build/), to organize development into separate packages, including:

- Doc: Contains the Design System documentation, developed with Storybook.
- React: Package with components in ReactJS.
- Tokens: Stores all application tokens.
- ESLint and Configs: Settings to maintain code consistency and quality.

Additionally, I am using [Changesets/CLI](https://github.com/changesets/changesets/tree/main) to organize version control and package publication on npm.

## Preview
To access the Design System documentation, click here: [SetGoh-UI](https://georgaugusto.github.io/setgoh-ui)
</br>
</br>
</br>
To test the [React components](https://www.npmjs.com/package/@setgoh-ui/react) in your project, you can install them using the following command:
```bash
$ npm install --save @setgoh-ui/react
```

## Technologies

- [ReactJS](https://nextjs.org/);
- [TypeScript](https://www.typescriptlang.org/);
- [vanilla-extract](https://vanilla-extract.style/)
- [Radix-ui](https://vitejs.dev/);
- [Storybook](https://storybook.js.org/)
- [Vite](https://www.radix-ui.com/);
- [Phosphor Icons](https://phosphoricons.com/)
- [Polished](https://polished.js.org/)

**Code Standardization:**
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)


## How to run locally

To run the project locally you need to follow the steps below!

**Clone the project and access the folder**


```bash
$ git clone https://github.com/georgaugusto/setgoh-ui.git && cd setgoh-ui
```

**Follow the steps below to install the dependencies and run the project**

```bash
# Install dependencies
$ npm i

# Finally, start the client
$ npm run dev
```

Made with 💜 &nbsp;by Georg Augusto Schlegel 👋 &nbsp;[Send a Hello](https://www.linkedin.com/in/georgaugusto/)

## Sample NextJS + MUI + Typescript application

First, install dependencies: **yarn**.

Second, touch .env.local file in base directory.

Then run the development server: **yarn dev**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Set Up & Developing Rules

---

#### Set up

- **src**:

  - components
  - pages
  - stores: state management - zustand files
  - styles: font + global.css, enums for theme, colors,...
  - utilities: custom hooks, functions or enums
  - public: images, icon,...
  - types: define interface, class,...

- **\_app.tsx**: config theme, color, global rules for MUI, provider,...
- **\_document.tsx**: update the \<html\> and \<body\> tags used to render a page. This file is only rendered on the server.
- **endpoint.ts**: External link (endpoints api)
- **pageUrls.ts**: Internal link (for routing page to page)
- **useAxios.ts**: Custom Axios hooks

#### Developing Rules

- **debug**:
  - check eslint (remove unused,...)
  - check logs on browser

- **naming**:
  - files and folders -> camel case
  - files in pages (routing) -> kebab case
  - custom hooks, modules: [...].ts
  - pages + components: [...].tsx

- **format**: prettier [Format Code in VSCode](https://www.digitalocean.com/community/tutorials/code-formatting-with-prettier-in-visual-studio-code)
- **styling**: sx props [MUI - The sx prop](https://mui.com/system/getting-started/the-sx-prop/)
- **env**: dotenv ([Nextjs - Environment Variables](https://nextjs.org/docs/api-reference/next.config.js/environment-variables))

#### Library

- **Component UI**: [MUI](https://mui.com/)
- **State management**: [Zustand](https://github.com/pmndrs/zustand)
- **HTTP Client**: [Axios](https://github.com/axios/axios) (utilities/hooks/useAxios.ts - Axios hooks)

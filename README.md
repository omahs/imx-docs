<p align="center">
  <a href="https://www.immutable.com">
    <img src="https://cdn.dribbble.com/users/1299339/screenshots/7133657/media/837237d447d36581ebd59ec36d30daea.gif" width="280"/>
  </a>

  <h2 align="center">Immutable X Docs</h3>

  <p align="center">
    Immutable X's documentation portal, built with Docusaurus.
    <br />
    <a href="https://docs.x.immutable.com"><strong>Explore the docs »</strong></a>
    <br />
  </p>
</p>

- [Introduction](#introduction)
  - [Tech Stack](#tech-stack)
- [Running Locally](#running-locally)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Writing Documentation](#writing-documentation)
  - [Add or edit page](#add-or-edit-page)
  - [Add a new Sidebar Section](#add-a-new-sidebar-section)
  - [Add a code block](#add-a-code-block)
  - [Add a table](#add-a-table)
  - [Add an admonition](#add-an-admonition)
- [Document Instance Versioning](#document-instance-versioning)
- [Hosted SDK API References](#hosted-sdk-api-references)
- [Contributing](#contributing)
- [Community Support](#community-support)
- [License](#license)

## Introduction

The [Immutable X documentation website](https://docs.x.immutable.com) is built using [Docusaurus](https://docusaurus.io/). Docusaurus is a static-site generator built with [React](https://reactjs.org/) and [MDX](https://mdxjs.com). It builds a single-page application (SPA) that's SEO friendly. But you don't need to learn React to be able to write documentation or contribute to it! All docs are written in [Markdown](https://docusaurus.io/docs/markdown-features).

### Tech Stack

- [Docusaurus](https://docusaurus.io/)
- [React](https://reactjs.org/)
- [MDX](https://mdxjs.com/)

## Running Locally

### Requirements

- [node](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/) or [npm](https://npmjs.com)

### Installation

1. Clone the repo

```sh
git clone https://github.com/immutable/imx-docs/
```

2. Install dependencies

```sh
yarn install
```

3. Run the app

```sh
yarn run start
```

## Writing Documentation

Read the [Contributors Guide](CONTRIBUTING.md) for more details

### Add or edit page
Adding a new page is simple! Identify the section under which your new page goes inside the `docs` folder, and then create a markdown file in that folder. For example, if you want to add a new page to the `Link SDK` guide, you'd create a new page under `docs/guides/link-sdk`. Ensure that the new page has a section at the top of the page like below, where you can specify the name of the article, the slug by which you can navigate to it, an excerpt and the page's position in the sidebar.

```
---
title: 'Link.buy'
slug: '/link-buy2'
excerpt: "Link can now be used to kick off buy flows containing multiple order ID's"
sidebar_position: 4
---
```

Refer to the [Docusaurus Documentation on creating a page](https://docusaurus.io/docs/creating-pages)

Editing is even easier:
1. Open up the page you want to edit on your browser
2. Scroll to the bottom of the page 
3. Click on `Edit this page`, and it'll take you to the file that you need to edit on GitHub. 
4. Apply your edits, and send a pull request (PR)


### Add a new Sidebar Section
If you want to add a new top level sidebar section:
1. Create a new folder under `docs`. 
2. Create a file named `_category_.json` inside the newly created folder
```json
{
    "label": "New section label",
    "position": 3
}
```
3. Create a file called `index.md` which will serve as the default page that renders when you navigate to the newly created section.
4. Add more pages to the section using the guide above.

Refer to the [Docusaurus Documentation on Sidebars](https://docusaurus.io/docs/sidebar/items)

### Add a code block

The [Docusaurus Documentation on Code Blocks](https://docusaurus.io/docs/markdown-features/code-blocks) is excellent!

### Add a table

We use mdx to enable adding HTML based tables to our docs. In order to enable mdx on a page, ensure that it's extension is `.mdx`. Now, that page can render any react component or valid HTML. See an example of a table [here](./docs/guides/asset-management/asset-metadata.mdx)

Read more about using [MDX and React in Docusaurus](https://docusaurus.io/docs/markdown-features/react)

### Add an admonition

Admonitions allow us to make our docs prettier and provide our users with tips, useful information, and cautions. 

You can add an admonition using the following format:

```
:::note

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::
```

Read more about using [Admonitions in Docusaurus](https://docusaurus.io/docs/markdown-features/admonitions)

## Document Instance Versioning

Each SDK has been configured as a docusaurus document instance. Each document instance `id`, which can be found in the `docusaurus.config.js` file.

```js
// example docusaurus.config.js

plugins: [
  ...,
  [
    '@docusaurus/plugin-content-docs',
    {
      path: 'docs/sdk-docs/core-sdk-ts/',     // path to the markdown files
      routeBasePath: '/sdk-docs/core-sdk-ts', // URL path to rewrite in the browser
      id: 'sdks-core-sdk-ts',                 // doc instance id
      sidebarPath: require.resolve('./sidebars/sidebars-core-sdk-ts.js'),
      ...pageOptions
    },
  ],
  ...
]
```

Once you have the document instance `id`, the document instances can be versioned using the docusaurus CLI:

```sh
# versioning a specific doc instance
yarn run docusaurus docs:version:<doc_instance_id> <version>
```

This will copy the existing set of docs into a `<doc_instance_id>_versioned_docs/version-<version>` folder in the root of the project folder (this appears to be unconfigurable).

Check out the [docusaurus docs on versioning](https://docusaurus.io/docs/versioning) for more info about how it works.

## Hosted SDK API References

SDK API reference documentation can be hosted as static assets.

Put the generated docs in the `api-docs/sdk-references` folder in the appropriate SDK folder. Rename the API reference folder to be the version number, replacing `.` with `-` in the folder name.

```shell
api-docs/
  sdk-references/
    <core-sdk-lang>
      <x-x-x>
        index.html # docs entry point
```

The SDK API references should be available at `<docsBaseUrl>/sdk-references/<core-sdk-lang>/<x-x-x>/`

## Contributing

We're excited to enable you to contribute! Before you start contributing, please read the [Contributors Guide](./CONTRIBUTING.md) and the [code of conduct](./CODE_OF_CONDUCT.md).

## Community Support

Need help with something that's not covered in the docs? Ask questions on the [Immutable X Discord server](https://discord.gg/6GjgPkp464) or the [Immutable Forum](https://forum.immutable.com/).

## License

Distributed under the Apache License, Version 2.0. See [`LICENSE`](./LICENSE) for more information.
# Introduction

The primary purpose of the Viola framework is designing direction-agnostic layouts inherently. 
Moreover, it is fully customizable and extensible so that you can set all your preferred design
parameters in the config file to create your desired CSS classes.

You don't need to create separate CSS classes to support RTL layouts.
All of the classes of Viola adapt themselves with the direction of the context.
Viola is a mobile-first css framework so that you add more class on top of the essential 
classes to style larger screens.

You don't need to remember all abbreviated class names. 
Viola class names are self-expressive enough.

# Getting Started

Navigate to the root of your project and run the following command.

__Yarn:__
```bash
yarn dlx @violacss/viola 
```

__NPM:__
```bash
npx @violacss/viola 
```

This command will:
- Add `@violacss/viola` as a dependency on the `packages.json` file.
- Create the `viola.config.js` file at the root of the project, and fill it with default schema.
- Create template `SASS` files in your project.


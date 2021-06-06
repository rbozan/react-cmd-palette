# react-cmd-palette
![GitHub branch checks state](https://img.shields.io/github/checks-status/rbozan/react-cmd-palette/master?style=flat-square)
![GitHub](https://img.shields.io/github/license/rbozan/react-cmd-palette?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-cmd-palette?style=flat-square)

A command palette made for React, like Visual Studio Code's <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> but then for your React application.


## Common use cases
- Search through a list of {pages, users, calendar appointments, emails, whatever} and {navigate to, remove, link, archive, whatever} it.
- Add actions of your table like sorting, selecting, removing to the command palette so they can be accessed easier.


## Installation
```bash
# Using npm
npm install react-cmd-palette
```

```bash
# Using yarn
yarn add react-cmd-palette
```


## Documentation (using Storybook)
You can visit the online documentation on https://rbozan.github.io/react-cmd-palette .

## Theming support
For theming support you could wrap the  `<CommandPalette>` with `styled-components`, however you might just as well add a class to the input or modify the trailing or leading components based on your use case.

## Why is this component designed to have an `addAction` and `removeAction` and not just pass an array as property?
The reason is that components within your application could have several dynamic actions, where organizing these actions is also important.

Let's say you want to add a sorting action when you are seeing a specific table, the action would then be registered and unregistered within that specific component. It is also immediately clear that the sorting action belongs to the table, as that sorting action is registered right in that component.

But had we used a property, you would have had to somehow pass that new action up the component tree so you can add it as a property.

## License
MIT License, see [LICENSE.md](./LICENSE.md)

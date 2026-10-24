# @x12i/graphenix-authoring-analysis usage example

Authoring project envelope validation, graph purity checks, and model-config merge-on-save for Graphs Studio.

This consuming application demonstrates **validate a reference graph-project envelope** using the published npm package, pinned to `2.17.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Check an authoring project envelope before saving it.
- Merge supported model configuration without discarding sibling graph fields.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/graphenix-authoring-analysis)
- [Implementation monorepo](https://github.com/x12i/graphenix-format)
- [Reviewed package source](https://github.com/x12i/graphenix-format/tree/28599719bd064429c220df35e297d299f81bbb40/packages/authoring-analysis)

The current source snapshot has a different manifest version from the pinned npm dependency. This example is validated against the installed npm release.

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

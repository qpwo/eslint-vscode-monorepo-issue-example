## Vscode Eslint Excessive restart demo

Video demonstration:

https://github.com/qpwo/eslint-vscode-monorepo-issue-example/assets/10591373/4bea3b36-9e29-49c9-8fef-935d9ee69601

## Related links

- https://typescript-eslint.io/linting/typed-linting/monorepos
- https://typescript-eslint.io/linting/typed-linting
- https://www.typescriptlang.org/docs/handbook/project-references.html
- https://docs.npmjs.com/cli/v9/using-npm/workspaces
- https://github.com/microsoft/vscode-eslint

## NPM workspace instructions

```sh
# Add new package to root workspace:
npm init -w ./package-a
# Install `package-a` on `package-b`:
npm install package-a --workspace package-b
```

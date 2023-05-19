## Vscode Eslint Excessive restart demo

## Related links

- https://typescript-eslint.io/linting/typed-linting/monorepos
- https://typescript-eslint.io/linting/typed-linting
- https://www.typescriptlang.org/docs/handbook/project-references.html
- https://docs.npmjs.com/cli/v9/using-npm/workspaces

## NPM workspace instructions

```sh
# Add new package to root workspace:
npm init -w ./package-a
# Install `package-a` on `package-b`:
npm install package-a --workspace package-b
```

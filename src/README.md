# Instructions

## Preparations

1. Clone this repository
2. Run `npm install`

## Instructions

### Check compiler

3. Look at the code in all the `.ts` files in the `src/` directory.
4. Run `npm run tsc` in the project run in the console
5. Observe that `.ts` files in `src/` have been compiled into `.js` files (also in `src/`)
6. Compare `.ts` files to `.js` files - try to find out the differences.

### Try out different tsconfig settings.

7. Change values in `tscofig.json` file and re-run `npm run tsc`. 
8. How are the output files different?

Try different combinations of following values:
- `"target": "es6"`
- `"target": "es5"`
- `"module": "es6"`
- `"module": "commonjs"`
- `"module": "amd"`
- `"module": "system"`
- `"module": "none"`
- `"module": "umd"`

### What's next?

Learn more about compiler options at https://www.typescriptlang.org/tsconfig#compilerOptions

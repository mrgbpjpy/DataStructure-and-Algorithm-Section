# Data Structure and Algorithm Section (70 Problems)

Live Demo: https://70-javascript-challanges-dsa.vercel.app/

This repo is a personal practice set of 70 data structure + algorithm problems.

New problems (with solutions) will be added over time as I work through the set.

The UI is built with React + TypeScript so each problem can be implemented as a small, testable component.

## Tech Stack

- React + TypeScript
- Vite
- Vitest + Testing Library (`@testing-library/react`, `@testing-library/jest-dom`)
- ESLint

## Getting Started

Install deps:

```bash
npm install
```

Run the app:

```bash
npm run dev
```

Build:

```bash
npm run build
```

## Testing

Run tests in watch mode:

```bash
npm test
```

Run tests once:

```bash
npm run test:run
```

Run a single test file (from repo root):

```bash
npx vitest run src/components/Problem_1/Problem1.test.tsx
```

Note: an empty `*.test.tsx` file will fail with "No test suite found". If you want placeholders, use `test.todo(...)`.

## Project Structure

Problem components live under `src/components/`.

Example:

```
src/components/
  Problem_1/
    Problem1.tsx
    Problem1.test.tsx
  Problem_2/
    Problem2.tsx
    Problem2.test.tsx
```

## Adding a New Problem

1. Create a folder: `src/components/Problem_<n>/`
2. Add the component: `Problem<n>.tsx`
3. Add the test file: `Problem<n>.test.tsx`
4. Start with a placeholder test, then replace with real assertions as you implement.

## License

Personal learning project. Add a license if you plan to open it up for reuse.

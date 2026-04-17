# Stack Sandbox: React.js, Typescript, Tailwind.css

## Student

Tuoc Ky Thai

## Stack tested

React.js, TypeScript, Tailwind CSS (with Vite + shadcn/ui)

## Goal

The goal was to explore how React, TypeScript, Tailwind CSS, and shadcn/ui components work together in a Vite project. Specifically how to manage state, style components, and integrate a pre-built UI component library.

## What the app does

- Changing random colors by clicking the button.
- A switch to toggle dark or light mode for the background.

## Setup instructions

1. Clone the repository
2. Checkout this branch: git checkout sandbox-Ky-Typescript-HTML-CSS
3. Switch to the app directory: cd my-react-app
4. Install dependencies: npm i.
5. Start the app: npm run dev

## Environment / tools used

- Node version: v24.7.0
- Package manager: npm
- Any other requirements: None

## Notes about setup

Tailwind.css setup and applying Shadcn library is a little bit confusing but I managed to fix it with the help of AI.

## What I learned

- **What was easy:** Creating components and managing state with React hooks (useState) was straightforward once the project was set up.

- **What was difficult:** Setting up Tailwind CSS v4 and integrating shadcn/ui components was unexpectedly complex and time-consuming for a small project.

- **What felt different from other stacks:** React's component-based structure and JSX syntax feels very different from plain HTML/CSS. TypeScript also adds extra steps like typing state and props that plain JavaScript doesn't require.

- **Whether this stack seems suitable for small or large projects:** This stack feels overkill for small or simple projects. The setup complexity of Tailwind and shadcn/ui is hard to justify for a tiny app. It would be better suited for medium to large projects where the component reusability and type safety of TypeScript actually pay off.

## Verdict

I wouldn't recommend this stack for small student projects. The setup alone, especially getting Tailwind v4 and shadcn/ui working together, took way more time than it should for something this simple. It felt like I was spending more time configuring tools than actually building the app. That said, if you're serious about front-end development, it's probably worth learning eventually since it's widely used in the industry. Just don't start with it on a small project.

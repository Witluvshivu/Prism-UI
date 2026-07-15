# Prism UI

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg?token=6a550ed75af1ff2ea8808938-nvuysimzpm)](https://6a550ed75af1ff2ea8808938-nvuysimzpm.chromatic.com/)

A 20-component React design system, built end-to-end by describing components in plain English to Claude Code, and browsed live in Storybook.

> Built at a React + Storybook workshop as an exercise in AI-enabled design: no manual coding, just component specs written the way a designer thinks about them (variants, states, sizes) — translated into working, typed, styled React code by AI.

---

## What this is

A component library organized into three tiers, following the atomic design methodology (Brad Frost):

- **Primitives (10)** — the smallest reusable building blocks: Button, Input, Badge, Avatar, Checkbox, Radio, Switch, Spinner, Tooltip, Divider.
- **Molecules (5)** — primitives combined into small functional units: SearchBar, FormField, Card, Alert, Tag.
- **Compound components (5)** — components with coordinated subparts (e.g. `Modal.Header`, `Modal.Body`, `Modal.Footer`): Modal, Tabs, Accordion, Dropdown, DataTable.

Every component is documented in Storybook with all of its variants, sizes, and states as individually browsable, interactive stories.

## Tech stack

- **Vite + React + TypeScript** — project scaffold and dev server
- **Tailwind CSS** — utility-first styling
- **Storybook** — isolated component browser and living documentation
- **Claude Code** — AI pair-programmer that wrote every component from natural-language descriptions

## Why it's built this way

Design systems are normally built in two disconnected places: a Figma file (what it should look like) and a codebase (what actually ships). Storybook closes that gap — it's a real, running instance of your actual production components, organized like a component library, but it's the same code your app imports. When a designer changes a variant here, it's not a mockup; it's the real button.

The primitives → molecules → compound structure mirrors how design systems are usually reasoned about: small indivisible pieces first, then combinations, then complex interactive patterns. Building in that order also made each Claude Code prompt scoped and reviewable — one component, fully specified (variants, sizes, states), one prompt at a time.

## What is Storybook, and why designers use it

Storybook is an open-source tool for developing and showcasing UI components in isolation, outside of a full application. Instead of navigating through screens to find the one place a component's "error" state shows up, you open its story directly and see every state at once.

Design and front-end teams (Shopify's Polaris, Atlassian, GitHub's Primer, Airbnb) use it as:

- **A living style guide** — always in sync with real code, unlike a static Figma file that can drift.
- **A QA and handoff tool** — designers can check every variant, spacing, and state without asking an engineer to wire up a test page.
- **A collaboration surface** — the Controls panel lets anyone toggle props (variant, size, disabled, etc.) live in the browser, no code required.
- **A regression safety net** — teams snapshot stories to catch unintended visual changes (this project has the accessibility and interaction test panels enabled for that same reason).

## Running it locally

```
npm install
npm run storybook
```

Then open `http://localhost:6006`.

To produce a static, deployable build:

```
npm run build-storybook
```

This outputs a `storybook-static/` folder that can be hosted anywhere static files are served (GitHub Pages, Netlify, Vercel).

## Publishing a live demo (optional, recommended for a portfolio)

Code alone in a repo is easy to skim past — a clickable, live Storybook is not. To publish one via GitHub Pages:

1. Run `npm run build-storybook` to generate `storybook-static/`.
2. Push that folder's contents to a `gh-pages` branch (or use the `peaceiris/actions-gh-pages` GitHub Action to automate this on every push to `main`).
3. Enable GitHub Pages in the repo settings, pointing at the `gh-pages` branch.
4. Link the live URL at the top of this README and in your portfolio.

## About this project

This was built as part of an AI-enabled design workshop — an exploration of what becomes possible when designers work directly with Claude Code rather than handing specs to engineers. Every component here started as a plain-English description of variants and states; Claude Code wrote the actual TypeScript, JSX, and Tailwind.

---

*Built with [Claude Code](https://claude.com/claude-code) and [Storybook](https://storybook.js.org).*

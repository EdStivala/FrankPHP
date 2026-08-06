---
title: "Meet FrankPHP"
description: "...Built by a founder, for founders. Stop fighting modern tech debt and start shipping products."
sidebarTitle: "Meet FrankPHP"
icon: "hand"
iconType: "duotone"
---

## FrankPHP: A Micro SaaS Business Framework

### What is FrankPHP?
FrankPHP is a lightweight, multi-tenant PHP MVC framework built specifically for SaaS businesses — not a general-purpose toolkit. It's built to be easy to set up, and able to run on cheap shared hosting with a MySQL database. And because it's new, it's AI-native from the ground up.

### Why it exists
FrankPHP wasn’t designed in a vacuum. It was born out of a specific frustration: I wanted to build **Revisio** (a business forecasting app) as a bootstrap project, but the "modern" tools were in the way. I refused to pay the "DevOps Tax" of expensive cloud hosting, and I didn't want the technical debt of a low-code platform or a bloated, "magic" framework.

I needed a simple, explicit scaffold that handled the heavy lifting of multi-tenancy and multi-user SaaS logic without the infrastructure nightmare. So I built my own MVC framework that didn't have years of complexity baked into it, and I didn't need a complicated cloud-based or containerised host environment.

FrankPHP was so effective that I rebuilt my fitness SaaS, **BitFitter**, on it. I then used it to launch **HallHive**, a two-way marketplace for community venues. Three very different products, but these let you see just how versatile FrankPHP is.

Now, I’m productising the engine that powers them. And making it available to you free of charge.

---

## The AI Advantage: Built-in Context
Small teams and solo founders can't waste days on documentation. FrankPHP is built specifically to be "read" by LLMs.

The framework includes an architectural map (`framework/codebase.md`) designed to be pasted directly into Claude, ChatGPT, or any LLM.
*   **Zero Hallucination:** The AI immediately understands Frank's routing, middleware, and hydration patterns because the code is explicit, not "clever."
*   **10x Dev Speed:** By giving the AI a perfect map, you can rapidly prototype features that are perfectly aligned with Frank's architecture.

---

## Why Bootstrap on FrankPHP?

- **A Framework/Application Split:** `framework/` is the reusable core, safely replaceable on every update. `app/` is entirely yours — your controllers, models, views, business logic. An update never touches it.
- **Full Code Ownership:** No low-code lock-in. No 200MB `vendor/` folder. Just clean, hand-rolled PHP 8.5+.
- **£5/mo Infrastructure:** Designed to run on standard shared hosting. If you can FTP a file, you can deploy. No Docker, no build pipelines, no complexity.
- **SaaS-Ready:** Multi-tenancy and user scoping are baked into the middleware pipeline from Day 1.
- **Zero Dependencies:** A framework that stays stable for years because it doesn't rely on a house of cards of third-party updates.

---

## Proven in Production
FrankPHP is the battle-tested workhorse behind three distinct business models:
*   **Revisio:** Complex business forecasting and workflows.
*   **BitFitter:** Data-driven fitness and health tracking.
*   **HallHive:** Two-way marketplace for resource management.

---

## Get Started
The core framework will remain **FREE**. I am building out a plugin and template ecosystem, as well as training and support options that will be available commercially. The core framework delivers value in it's own right and will give you a robust SaaS scaffold to build from, for **FREE**.

[Download the Latest Release](https://github.com/EdStivala/frankphp-framework/releases)

*Grab the Source code zip (or `git clone` the repo) for a complete `framework/` + `app/` starting point — includes the full framework source, a MySQL-tested SQL schema, and the `codebase.md` AI context file.*

---

#### ⚖️ License
**MIT License.** Your business, your code, your IP. Build commercial products with total freedom.

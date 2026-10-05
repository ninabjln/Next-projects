# Next.js Authentication Pages

A simple authentication UI project built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

This project is mainly for practicing the Next.js App Router and understanding how pages and route groups work.

## Features

* Login page
* Sign up page
* Navigation between Login and Sign up pages
* Responsive layout
* Styled with Tailwind CSS

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS

## Project Structure

```text
app/
├── (auth)/
│   ├── login/
│   │   └── page.tsx
│   └── signup/
│       └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

The `(auth)` folder is a **route group** in Next.js.
The parentheses mean that this folder is used for organizing related routes and does not become part of the URL.

For example:

```text
app/(auth)/login/page.tsx
```

creates this route:

```text
/login
```

not:

```text
/auth/login
```

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open the project in your browser:

```text
http://localhost:3000
```

## Current Status

This project currently focuses on the **UI and routing** of authentication pages.

There is no real authentication or backend functionality yet.
The login and sign-up forms are currently static and do not submit user data.

## Purpose

This project is part of my practice with Next.js and the App Router, with a focus on learning:

* File-based routing
* Route groups
* Layouts
* Pages
* TypeScript with React
* Tailwind CSS

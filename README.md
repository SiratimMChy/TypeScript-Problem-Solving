# TypeScript Problem Solving & OOP Assignment

This repository contains solutions to 8 core TypeScript problems along with two technical blog posts. The code covers TypeScript fundamentals such as type narrowing, readonly tuples, generics, OOP classes, and asynchronous Promises using strict types.

## Project Structure

```
├── solutions.ts             # All problem solutions
├── type-vs-interface.md     # Blog 1: Type Aliases vs Interfaces
├── access-modifiers-oop.md  # Blog 2: Access Modifiers in OOP
└── README.md
```

## What's Inside

All coding problems are solved inside [`solutions.ts`](./solutions.ts) using strict typing (no `any` used):

- **Basic Types & Functions**: Working with optional parameters and default fallbacks while handling numeric edge cases like `0`.
- **Type Narrowing**: Handling union types (`string | number | boolean`) safely using `typeof` guards.
- **Tuples & Immutability**: Formatting coordinate records with `readonly` tuples to prevent accidental array mutation.
- **Generics**: Merging arbitrary arrays with rest parameters and safely plucking object keys using `keyof` constraints.
- **Interfaces**: Structuring course models and filtering published items without mutating the source data.
- **OOP Encapsulation**: Implementing `Employee` and `Manager` classes using `private` and `protected` access modifiers.
- **Asynchronous TypeScript**: Creating typed `Promise<string>` flows with timed resolution and custom error rejection.

## Blog Posts

Here are direct links to the two technical write-ups included in this repository:

1. **[Type Aliases vs Interfaces in TypeScript](./type-vs-interface.md)**  
   A practical breakdown comparing `type` and `interface`, focusing on declaration merging, unions, and when to pick one over the other.

2. **[How Access Modifiers Work in TypeScript OOP](./access-modifiers-oop.md)**  
   An explanation of `public`, `private`, `protected`, and `readonly` in TypeScript classes, paired with practical examples.

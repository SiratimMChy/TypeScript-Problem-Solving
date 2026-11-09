# TypeScript Problem Solving & OOP Assignment

This repository contains solutions to 8 core TypeScript problems along with two technical blog posts. The code covers TypeScript fundamentals such as type narrowing, readonly tuples, generics, OOP classes, and asynchronous Promises.

## Project Structure

```
├── solutions.ts             
├── type-vs-interface.md     
├── access-modifiers-oop.md 
└── README.md
```

## What's Inside

All solutions are implemented in [`solutions.ts`](./solutions.ts):

- `multiplyValue`: Calculates multiplied values with default fallback, properly handling `0`.
- `processInput`: Formats strings, numbers, or booleans using `typeof` type narrowing.
- `formatCoordinate`: Returns a formatted location string using a `readonly` tuple to prevent mutation.
- `concatenateArrays`: Combines multiple arrays into one using generics and rest parameters.
- `getPopularCourses`: Filters published courses by minimum student count without mutating the original array.
- `pluckValues`: Extracts specific property values from an array of objects using `keyof`.
- `Employee` & `Manager`: Implements class inheritance and encapsulation with `protected` and `private` members.
- `validateAgeAsync`: Async age validation returning a Promise that resolves after 1 second or rejects with an Error.

## Blog Posts

Here are direct links to the two technical write-ups included in this repository:

1. **[Type Aliases vs Interfaces in TypeScript](./type-vs-interface.md)**  
   A practical breakdown comparing `type` and `interface`, focusing on declaration merging, unions, and when to pick one over the other.

2. **[How Access Modifiers Work in TypeScript OOP](./access-modifiers-oop.md)**  
   An explanation of `public`, `private`, `protected`, and `readonly` in TypeScript classes, paired with practical examples.

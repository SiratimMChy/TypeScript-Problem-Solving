# Type Aliases vs Interfaces in TypeScript

When learning TypeScript, `type` and `interface` often seem interchangeable. You can use either to type an object, but a few key differences decide which one makes more sense.

### 1. Beyond Objects: Primitives and Unions

Type aliases can represent primitives, unions, and tuples directly. Interfaces, however, can only describe object shapes.

```typescript
type ID = number;
type Role = "admin" | "member";

// Error: interface cannot define a union directly
// interface Role = "admin" | "member";

interface User {
  name: string;
  id: ID;
  role: Role;
}
```

### 2. Declaration Merging

Interfaces support declaration merging. If you declare an interface with the same name twice, TypeScript merges both into one contract. A `type` alias throws a duplicate identifier error instead.

```typescript
interface IEmployee {
  name: string;
}
interface IEmployee {
  id: number;
}
// Merged into { name: string; id: number; }

// type TEmployee = { name: string; };
// type TEmployee = { id: number; }; // Error: Duplicate identifier
```

### 3. Extending vs Intersection

Interfaces extend other interfaces with `extends`, while types combine structures using the intersection operator (`&`).

```typescript
interface Animal {
  species: string;
}
interface Cat extends Animal {
  breed: string;
}

type Vehicle = { brand: string };
type Car = Vehicle & { model: string };
```

### Conclusion

I stick to a simple rule: use `interface` for object models and class blueprints where extension is useful, and use `type` for unions, primitives, and tuples. This separation keeps the codebase clean and predictable.

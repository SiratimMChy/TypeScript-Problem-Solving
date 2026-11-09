# How Access Modifiers Work in TypeScript OOP

In TypeScript OOP, access modifiers control property and method visibility, enforcing encapsulation by defining where class members can be accessed.

### The Four Types of Access Modifiers

TypeScript provides four main access modifiers:

1. **`public` (Default):** Accessible from anywhere inside the class, child classes, and on external instances.
2. **`private`:** Accessible strictly inside the declaring class. Subclasses and external objects cannot read or modify them directly.
3. **`protected`:** Accessible inside the declaring class and its child classes, but hidden from external instances.
4. **`readonly`:** Prevents reassignment after initialization. A property can only be set during declaration or inside the constructor.

### Real Code Example (Employee & Manager)

```typescript
class Employee {
  constructor(
    public readonly id: number,
    protected name: string,
    private _baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this._baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(id, name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager(101, "Alice", 50000, "Engineering");
// manager.id = 102; // Error: Cannot assign to 'id' because it is readonly.
// manager.name;     // Error: Property 'name' is protected.
```

### Understanding the Code

This code clearly shows how access boundaries work:

- `public readonly id`: Anyone can read `manager.id`, but `readonly` prevents reassigning it after creation.
- `protected name`: Defined in `Employee`, allowing `Manager` to use `this.name` inside `getRoleInfo()`, while blocking direct outside access.
- `private _baseSalary`: Confined strictly to `Employee`. Even `Manager` cannot read it directly, protecting sensitive salary data.

### Conclusion

Think of it like working in a real office: your employee ID badge is permanent (`readonly`), and your name is visible to everyone (`public`). But your salary envelope is strictly `private` between you and HR. Access modifiers simply bring these natural real-life workplace boundaries straight into our code.


# JSON-to-TypeScript Converter

Convert JSON to TypeScript interfaces effortlessly.  
An open-source tool for developers to generate TypeScript types from JSON objects quickly and securely.

---

## 🚀 Features

- **Fast Conversion**: Generate TypeScript interfaces from JSON in seconds.
- **Nested Objects Support**: Handles deeply nested structures with ease.
- **Array Depth Detection**: Automatically detects array depth and types.
- **ISO Date Recognition**: Converts valid ISO date strings to `Date` type.
- **Secure Offline Use**: No need to paste your data online—works locally.
- **Customizable Future Enhancements**: Support for advanced type handling and customizable options in future updates.

---

## 📦 Installation

You can install the package globally using any of these package managers:

**Using NPM:**
```bash
npm install -g @typeweaver/json2ts
```

**Using Yarn:**
```bash
yarn global add @typeweaver/json2ts
```

**Using PNPM:**
```bash
pnpm add -g @typeweaver/json2ts
```

---

## 🛠️ Usage

### Programmatic API

Import and use the package in your Node.js or TypeScript project:

```typescript
import { convertJsonToTs } from '@typeweaver/json2ts';

const json = { name: "John", age: 30 };
const tsInterface = convertJsonToTs(json);

console.log(tsInterface);
// Output:
// interface Root {
//   name: string;
//   age: number;
// }
```

---

## ✨ Example

### Input JSON:
```json
{
  "name": "John",
  "age": 30,
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}
```

### Generated TypeScript Interface:
```typescript
interface Root {
  name: string;
  age: number;
  address: {
    city: string;
    zip: string;
  };
}
```

---

## 📚 Documentation

For more details, advanced examples, and troubleshooting, check the [project wiki](https://github.com/glincker/json-to-typescript/wiki).

---

## 🤝 Contributing

We welcome contributions!  
If you want to enhance this project, please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌟 Acknowledgments

- Developed by [Glincker](https://github.com/glincker).  
- Part of the **GLINR** ecosystem.

---

## 📬 Feedback

We’d love to hear from you!  
Submit your ideas or suggestions via issues in the repository or join the discussion on the [GLINR Community](https://community.glinr.dev).

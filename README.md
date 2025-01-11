
# JSON-to-TypeScript Converter

Convert JSON to TypeScript interfaces effortlessly.  
An open-source tool for developers to generate TypeScript types from JSON objects quickly and securely.

---

## 🚀 Features

- **Fast Conversion**: Generate TypeScript interfaces from JSON in seconds.
- **Nested Objects Support**: Handles deeply nested structures with ease.
- **Secure Offline Use**: No need to paste your data online—works locally.
- **Customizable**: Future support for advanced type handling and customizations.

---

## 📦 Installation

Install the package via NPM:

```bash
npm install -g @typeweaver/json2ts
```

---

## 🛠️ Usage

### CLI
Convert a JSON file to a TypeScript interface:

```bash
json2ts convert input.json output.ts
```

Or use JSON from the clipboard:

```bash
json2ts --clipboard
```

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

Input JSON:
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

Generated TypeScript Interface:
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

For detailed documentation and examples, visit the [project wiki](https://github.com/glincker/json-to-typescript/wiki).

---

## 🤝 Contributing

We welcome contributions!  
Please see the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌟 Acknowledgments

- Developed by [Glincker](https://github.com/glincker).  
- Part of the **TypeWeaver** ecosystem.

---

## 📬 Feedback

Have ideas or suggestions? Create an issue in the repository or join the discussion on [GLINR Community](https://community.glinr.dev).

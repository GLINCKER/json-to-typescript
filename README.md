
# JSON-to-TypeScript Converter
## @typeweaver/json2ts

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


## License

This software is also available under the GLINR | GLINCKER LLC proprietary license. The proprietary license allows for use, modification, and distribution of the software with certain restrictions and conditions as set forth by GLINCKER LLC.

You are free to use this software for reference and educational purposes. However, any commercial use, distribution, or modification outside the terms of the MIT License requires explicit permission from GLINCKER LLC. 

By using the software in any form, you agree to adhere to the terms of both the MIT License and the GLINCKER LLC proprietary license, where applicable. If there is any conflict between the terms of the MIT License and the GLINCKER LLC proprietary license, the terms of the GLINCKER LLC proprietary license shall prevail.

### MIT License

@typewraper/json2ts is [MIT licensed](./LICENSE).
---

## 🌟 Acknowledgments

- Developed by [Glincker](https://github.com/glincker).  
- Part of the **GLINR** ecosystem.
- Managed by [TypeWeaver](https://typeweaver.com)

---

## 📬 Feedback

We’d love to hear from you!  
Submit your ideas or suggestions via issues in the repository or join the discussion on the [GLINR Community](https://glincker.com).

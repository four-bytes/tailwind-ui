# Installation

## Package Manager

::: code-group

```bash [npm]
npm install @four-bytes/four-tailwind-ui
```

```bash [pnpm]
pnpm add @four-bytes/four-tailwind-ui
```

```bash [yarn]
yarn add @four-bytes/four-tailwind-ui
```

:::

## Setup

### 1. Import Styles

Add the CSS import to your main entry file:

```ts
// main.ts
import '@four-bytes/four-tailwind-ui/style.css'
```

### 2. Configure Tailwind

Extend your `tailwind.config.js` to include the library's content paths:

```js
import tailwindConfig from '@four-bytes/four-tailwind-ui/tailwind.config'

export default {
  presets: [tailwindConfig],
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@four-bytes/four-tailwind-ui/**/*.{vue,js,ts}',
  ],
}
```

### 3. Setup Providers (Optional)

For theme switching and sidebar state management, wrap your app with providers:

```vue
<script setup>
import { ThemeProvider, SidebarProvider } from '@four-bytes/four-tailwind-ui'
</script>

<template>
  <ThemeProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </ThemeProvider>
</template>
```

## TypeScript

The library includes TypeScript definitions. No additional setup required.

```ts
import type { SelectOption } from '@four-bytes/four-tailwind-ui'

const options: SelectOption[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
]
```

# Modal

A base modal component with backdrop, ESC close, and body scroll lock.

## Import

```ts
import { Modal } from '@four-bytes/four-tailwind-ui'
```

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import { Modal, Button } from '@four-bytes/four-tailwind-ui'

const isOpen = ref(false)
</script>

<template>
  <Button @click="isOpen = true">Open Modal</Button>
  
  <Modal v-if="isOpen" @close="isOpen = false">
    <template #body>
      <div class="p-6 bg-white dark:bg-gray-900 rounded-lg">
        <h2 class="text-xl font-semibold">Modal Title</h2>
        <p class="mt-2 text-gray-600">Modal content goes here.</p>
        <Button class="mt-4" @click="isOpen = false">Close</Button>
      </div>
    </template>
  </Modal>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `fullScreenBackdrop` | `boolean` | `true` | Show full screen backdrop |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `close` | - | Emitted when modal should close (ESC key or backdrop click) |

## Slots

| Slot | Description |
|------|-------------|
| `body` | Modal content |

## Features

- **ESC to close** - Press Escape key to close
- **Click outside** - Click backdrop to close
- **Body scroll lock** - Prevents background scrolling
- **Focus trap** - Keeps focus within modal

## See Also

- [FormDialog](/components/form-dialog) - Modal with form layout
- [ConfirmDialog](/components/confirm-dialog) - Confirmation modal

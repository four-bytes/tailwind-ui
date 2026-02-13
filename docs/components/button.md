# Button

A versatile button component with multiple variants and states.

## Import

```ts
import { Button } from '@four-bytes/four-tailwind-ui'
```

## Variants

### Primary

```vue
<Button variant="primary">Primary Button</Button>
```

### Outline

```vue
<Button variant="outline">Outline Button</Button>
```

### Ghost

```vue
<Button variant="ghost">Ghost Button</Button>
```

### Danger

```vue
<Button variant="danger">Danger Button</Button>
```

## Sizes

```vue
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

## Loading State

```vue
<Button :loading="true">Saving...</Button>
```

## With Icon

```vue
<script setup>
import { Button, CheckIcon } from '@four-bytes/four-tailwind-ui'
</script>

<template>
  <Button variant="primary">
    <CheckIcon class="w-4 h-4" />
    Save
  </Button>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Button style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `loading` | `boolean` | `false` | Show loading spinner |
| `disabled` | `boolean` | `false` | Disable button |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Button type |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `click` | `MouseEvent` | Emitted when button is clicked |

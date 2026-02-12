import type { Directive, DirectiveBinding } from 'vue'

interface ClickOutsideElement extends HTMLElement {
  __clickOutsideHandler__?: (event: MouseEvent) => void
}

/**
 * Directive to detect clicks outside of an element
 *
 * @example
 * ```vue
 * <template>
 *   <div v-click-outside="handleClickOutside">
 *     Dropdown content
 *   </div>
 * </template>
 *
 * <script setup>
 * const handleClickOutside = () => {
 *   isOpen.value = false
 * }
 * </script>
 * ```
 */
export const vClickOutside: Directive = {
  mounted(el: ClickOutsideElement, binding: DirectiveBinding) {
    el.__clickOutsideHandler__ = (event: MouseEvent) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el.__clickOutsideHandler__)
  },
  unmounted(el: ClickOutsideElement) {
    if (el.__clickOutsideHandler__) {
      document.removeEventListener('click', el.__clickOutsideHandler__)
      delete el.__clickOutsideHandler__
    }
  },
}

export default vClickOutside

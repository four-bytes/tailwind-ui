<template>
  <div>
    <label
      v-if="label"
      :for="inputId"
      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
      :class="{ 'text-gray-300 dark:text-white/15': disabled }"
    >
      {{ label }}
      <span v-if="required" class="text-error-500">*</span>
    </label>
    <input
      :id="inputId"
      type="file"
      :accept="accept"
      :multiple="multiple"
      :disabled="disabled"
      :required="required"
      @change="handleChange"
      class="h-11 w-full overflow-hidden rounded-lg border border-gray-300 bg-transparent text-sm text-gray-500 shadow-theme-xs transition-colors file:mr-5 file:border-collapse file:cursor-pointer file:rounded-l-lg file:border-0 file:border-r file:border-solid file:border-gray-200 file:bg-gray-50 file:py-3 file:pl-3.5 file:pr-3 file:text-sm file:text-gray-700 placeholder:text-gray-400 hover:file:bg-gray-100 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:file:border-gray-800 dark:file:bg-white/[0.03] dark:file:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
      :class="error ? 'border-error-300 dark:border-error-700' : ''"
    />
    <p v-if="error" class="mt-1.5 text-xs text-error-500">{{ error }}</p>
    <p v-else-if="hint" class="mt-1.5 text-xs text-gray-500">{{ hint }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label?: string
  accept?: string
  multiple?: boolean
  disabled?: boolean
  required?: boolean
  error?: string
  hint?: string
}>()

const emit = defineEmits<{
  change: [files: FileList | null]
}>()

const inputId = computed(() => `file-${Math.random().toString(36).substr(2, 9)}`)

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('change', target.files)
}
</script>

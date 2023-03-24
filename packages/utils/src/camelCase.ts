export function camelCase(input: string) {
  return input.replace(/[._-](\w)/g, (_, c) => (c ? c.toUpperCase() : ''))
}

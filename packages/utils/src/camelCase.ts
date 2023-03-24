export const camelCase = (input: string) =>
  input.replace(/[._-](\w)/g, (_, c) => (c ? c.toUpperCase() : ''))

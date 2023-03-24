import { describe, expect, it } from 'vitest'
import { camelCase, capitalize, kekabCase } from '../src'

const fixture = {
  lowerCase: 'foobarbaz',
  camelCase: 'fooBarBaz',
  pascalCase: 'FooBarBaz',
  kekabCase: 'foo-bar-baz',
  pointCase: 'foo.bar.baz',
  snakeCase: 'foo_bar_baz',
  screamingSnakeCase: 'FOO_BAR_BAZ',
}

describe('camelCase', () => {
  it('should match', () => {
    expect(camelCase('')).toMatchInlineSnapshot('""')

    expect(camelCase(fixture.camelCase)).toBe(fixture.camelCase)
    expect(camelCase(fixture.kekabCase)).toBe(fixture.camelCase)
    expect(camelCase(fixture.snakeCase)).toBe(fixture.camelCase)
    expect(camelCase(fixture.pointCase)).toBe(fixture.camelCase)

    expect(camelCase(fixture.lowerCase)).toBe(fixture.lowerCase)
    expect(camelCase(fixture.pascalCase)).toBe(fixture.pascalCase)
    expect(camelCase(fixture.screamingSnakeCase)).toMatchInlineSnapshot('"FOOBARBAZ"')
  })
})

describe('capitalize', () => {
  it('should match', () => {
    expect(capitalize('')).toMatchInlineSnapshot('""')

    expect(capitalize(fixture.camelCase)).toBe(fixture.pascalCase)
    expect(capitalize(fixture.pascalCase)).toBe(fixture.pascalCase)

    expect(capitalize(fixture.snakeCase)).toMatchInlineSnapshot('"Foo_bar_baz"')
    expect(capitalize(fixture.kekabCase)).toMatchInlineSnapshot('"Foo-bar-baz"')
    expect(capitalize(fixture.pointCase)).toMatchInlineSnapshot('"Foo.bar.baz"')
    expect(capitalize(fixture.lowerCase)).toMatchInlineSnapshot('"Foobarbaz"')
    expect(capitalize(fixture.screamingSnakeCase)).toMatchInlineSnapshot('"FOO_BAR_BAZ"')
  })
})

describe('kekabCase', () => {
  it('should match', () => {
    expect(kekabCase('')).toMatchInlineSnapshot('""')

    expect(kekabCase(fixture.kekabCase)).toBe(fixture.kekabCase)
    expect(kekabCase(fixture.camelCase)).toBe(fixture.kekabCase)
    expect(kekabCase(fixture.pascalCase)).toBe(fixture.kekabCase)
    expect(kekabCase(fixture.snakeCase)).toBe(fixture.kekabCase)
    expect(kekabCase(fixture.screamingSnakeCase)).toBe(fixture.kekabCase)

    expect(kekabCase(fixture.pointCase)).toBe(fixture.pointCase)
    expect(kekabCase(fixture.lowerCase)).toBe(fixture.lowerCase)
  })
})

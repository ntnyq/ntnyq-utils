import { assertType, describe, expectTypeOf, it } from 'vitest'
import { camelCase, capitalize, kekabCase } from '../src'

describe('typecheck', () => {
  it('should return type match', () => {
    expectTypeOf(camelCase).returns.toBeString()
    expectTypeOf(capitalize).returns.toBeString()
    expectTypeOf(kekabCase).returns.toBeString()
  })

  it('should params type match', () => {
    assertType<(input: string) => string>(camelCase)
    assertType<(input: string) => string>(capitalize)
    assertType<(input: string) => string>(kekabCase)
  })
})

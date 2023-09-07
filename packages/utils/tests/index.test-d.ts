import { assertType, describe, expectTypeOf, it } from 'vitest'
import { camelCase, capitalize, kekabCase, waitFor } from '../src'

describe('typecheck', () => {
  it('should return type match', () => {
    expectTypeOf(camelCase).returns.toBeString()
    expectTypeOf(capitalize).returns.toBeString()
    expectTypeOf(kekabCase).returns.toBeString()

    expectTypeOf(waitFor).parameter(0).toBeNumber()
  })

  it('should params type match', () => {
    assertType<(input: string) => string>(camelCase)
    assertType<(input: string) => string>(capitalize)
    assertType<(input: string) => string>(kekabCase)

    assertType<(ms: number) => Promise<unknown>>(waitFor)
  })
})

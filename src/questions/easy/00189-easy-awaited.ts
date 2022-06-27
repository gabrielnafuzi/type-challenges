export type MyAwaited<P> = P extends Promise<infer T>
  ? T extends Promise<infer _>
    ? MyAwaited<T>
    : T
  : never

/* _______________ Test Cases _______________ */
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>
]

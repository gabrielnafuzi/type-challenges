import type { U } from '@/utils'

export type GreaterThan<N1 extends number, N2 extends number> = N1 extends N2
  ? false
  : [U.Sub<N2, N1>] extends [never]
  ? true
  : false

/* _______________ Test Cases _______________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>
]

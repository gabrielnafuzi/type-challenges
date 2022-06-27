export type TupleToNestedObject<T extends unknown[], U, R = U> = T extends [
  ...infer Rest,
  infer Tail
]
  ? TupleToNestedObject<Rest, U, Record<Tail & string, R>>
  : R

/* _______________ Test Cases _______________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<
    Equal<
      TupleToNestedObject<['a', 'b', 'c'], boolean>,
      { a: { b: { c: boolean } } }
    >
  >,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>
]

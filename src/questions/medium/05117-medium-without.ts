import type { U } from '@/utils'

type GetNumber<T> = T extends number[] ? T[number] : T

export type Without<
  T extends number[],
  U,
  _Counter extends number = 0,
  _Res extends number[] = []
> = _Counter extends U.Length<T>
  ? _Res
  : Without<
      T,
      U,
      U.Num<U.Add<_Counter, 1>>,
      T[_Counter] extends GetNumber<U> ? _Res : U.Push<_Res, T[_Counter]>
    >

/* _______________ Test Cases _______________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]

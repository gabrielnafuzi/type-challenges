export namespace U {
  export type Num<T> = Extract<T, number>

  export type Push<T extends any[], Val> = [...T, Val]

  export type Length<T extends any[]> = T['length']

  export type NTuple<N, A extends any[] = []> = Length<A> extends N
    ? A
    : NTuple<N, Push<A, any>>

  export type Add<A extends number, B extends number> = Length<
    [...NTuple<A>, ...NTuple<B>]
  >

  export type Sub<A extends number, B extends number> = NTuple<A> extends [
    ...infer U,
    ...NTuple<B>
  ]
    ? Length<U>
    : never

  export type Comparator<N1 extends number, N2 extends number> = N1 extends N2
    ? false
    : [Sub<N2, N1>] extends [never]
    ? true
    : false

  export type IsNever<T> = [T] extends [never] ? true : false
}

import { is } from '@magic/test'
import * as P from '../src/index.mjs'

export default [
  {
    fn: () => P.View,
    expect: is.function,
    info: 'P.View is not a function',
  },
  {
    fn: () => P.style,
    expect: t => t.margin === '0 0 0.5em',
  },
  {
    fn: () => P.propTypes,
    expect: t => is.array(t.P),
  },
]

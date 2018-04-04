import { map, filter } from 'lodash-es'

export const a = () => filter(['a'], Boolean)
export const b = () => map(['b'], b => b)

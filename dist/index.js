import { filter } from 'lodash-es';

const a = () => filter(['a'], Boolean);

console.log(a());

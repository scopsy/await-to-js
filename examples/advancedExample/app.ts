import {init} from '../../dist';
const to = init((err, data) => {
  console.log('i am logging');
});

import advanced from './advancedExample';

advanced(to);

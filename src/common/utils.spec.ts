import { expect } from 'chai';

import { testFoo } from './utils';

describe('common/utils', () => {
  it('testFoo: should repeat string 2 times', () => {
    expect(testFoo('qw')).to.equal('qwqw');
    expect(testFoo('aa')).to.equal('aaaa');
    expect(testFoo('aa23')).to.equal('aa23aa23');
    expect(testFoo('bad')).to.equal('badbad');
    expect(testFoo('anyany')).to.equal('anyanyanyany');
  });
});

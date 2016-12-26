import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Hello from 'components/Hello';

describe('<Hello />', () => {
  it('renders heading', () => {
    const component = TestUtils.renderIntoDocument(<Hello />);

    expect(component.heading.innerHTML).toEqual('Hello World');
  });
});

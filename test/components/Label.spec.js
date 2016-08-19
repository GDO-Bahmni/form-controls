import React from 'react';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chai, { expect } from 'chai';
import { Label } from 'components/Label.jsx';

chai.use(chaiEnzyme());

describe('Label', () => {
  before(() => {
    window.componentStore.registerComponent('label', Label);
  });

  after(() => {
    window.componentStore.deRegisterComponent('label');
  });

  it('should render the value of label', () => {
    const metadata = {
      value: 'History Notes',
    };

    const wrapper = shallow(<Label metadata={metadata} />);
    expect(wrapper.find('span').text()).to.eql('History Notes');
  });
});

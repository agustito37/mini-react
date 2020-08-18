import htm from 'htm';
import { h } from 'snabbdom/build/package/h';

const createElement = (type, props = {}, ...children) => {
  if (typeof (type) == 'function') {
    const instance = new type(props);
    const elements = instance.render();
    instance.__old_element = elements;
    return instance.__old_element;
  }

  const element = h(type, { props }, children);
  console.log(element);
  return element;
 };

class Component {
  constructor(props) {
    this.props = props;
  }

  setState(partialState) { 
    this.state = {
      ...this.state,
      ...partialState
    };

    MiniReact.__updater(this);
  }

  render() { }
}

const MiniReact = {
  createElement: htm.bind(createElement),
  Component,
};

export default MiniReact;

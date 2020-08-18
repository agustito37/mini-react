import { init } from 'snabbdom/build/package/init';
import { propsModule } from 'snabbdom/build/package/modules/props';
import MiniReact from './minireact';

const reconcile = init([propsModule]);

MiniReact.__updater = (componentInstance) => {
  const oldElement = componentInstance.__old_element;
  const newElement = componentInstance.render();

  componentInstance.__old_element = reconcile(oldElement, newElement);
};

const initRender = (el, rootDomElement) => {
  reconcile(rootDomElement, el);
};

const MiniReactDOM =  { 
  initRender
};

export default MiniReactDOM;
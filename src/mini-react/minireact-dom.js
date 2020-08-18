import { init } from 'snabbdom/build/package/init';
import { propsModule } from 'snabbdom/build/package/modules/props';
import MiniReact from './minireact';

const reconcile = init([propsModule]);

MiniReact.__updater = (componentInstance) => {
  const oldElements = componentInstance.__old_elements;
  const newElements = componentInstance.render();

  componentInstance.__old_elements = reconcile(oldElements, newElements);
};

const initRender = (elements, rootDomElement) => {
  reconcile(rootDomElement, elements);
};

const MiniReactDOM =  { 
  initRender
};

export default MiniReactDOM;
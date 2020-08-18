import MiniReact from './minireact';
import MiniReactDOM from './minireact-dom';

class Counter extends MiniReact.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return MiniReact.createElement`
      <div>
        <p>Count: ${this.state.count}</p>
        <button onclick=${() => this.setState({
          count: this.state.count + 1
        })}>Increment</button>
      </div>
    `;
  }
}

const App = MiniReact.createElement`
  <div>
    <${Counter} />
  </div>
`;

MiniReactDOM.initRender(App, document.getElementById("root"));
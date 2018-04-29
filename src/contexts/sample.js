import React, { Component, createContext } from 'react';

const Context = createContext(); // context를 만든다.
const { Provider, Consumer: SampleConsumer } = Context;

class SampleProvider extends Component {
  state = {
    value: '기본값'
  }

  actions = {
    setValue: (value) => {
      this.setState({
        value
      });
    }
  }

  render() {
    const { state, actions } = this;
    const value = { state, actions };
    console.log(value, '#value test');
    return (
      <Provider value={value}>
        {this.props.children}
      </Provider>
    );
  }
}

function useSample(WrappedComponent) {
  return function UseSample(props) {
    return (
      <SampleConsumer>
        {
          ({state, actions}) => (
            <WrappedComponent
              value={state.value}
              setValue={actions.setValue}
            />
          )
        }
      </SampleConsumer>
    );
  }
}

export {
  SampleProvider,
  SampleConsumer,
  useSample
};
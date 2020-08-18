import React, { Component } from "react";
import PropTypes from "prop-types";

// 用于预先 将业务组件，进行数据的封装，便于我们 方便获取数据
// 反向继承
const connect = (key) => (Com) => {
  class connectComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        [key]: store[key],
      };
    }

    componentDidMount() {
      // window.com = this; // 把组件暴露到console，方便调试
      let that = this;
      window.store = new Proxy(store, {
        // 通过Proxy代理拦截和监听改变
        get: function (target, key, receiver) {
          return Reflect.get(target, key, receiver);
        },
        set: function (target, key, value, receiver) {
          that.setState({
            [key]: value,
          });
          return Reflect.set(target, key, value, receiver);
        },
      });
    }

    render() {
      return <Com {...this.state} />;
    }
  }
  return connectComponent;
};

let store = {
  name: "ryan",
  age: 10,
};

@connect("age") //  这里相当于 User = connect('age')(User)
class User extends Component {
  render() {
    return <div>{this.props.age}</div>;
  }
}
// User = connect('age')(User)
console.log("User:", User);
class App extends Component {
  render() {
    return <User />;
  }
}

export default App;

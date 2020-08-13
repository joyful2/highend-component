import React, { Component } from "react";
import PropTypes from 'prop-types'
import reactDom from "react-dom";

// 用于预先 将业务组件，进行数据的封装，便于我们 方便获取数据
// 反向继承 交互的封装，




class User extends Component {

	componentDidUpdate() {
		console.log('componentDidUpdate');
	}

	shouldComponentUpdate() {
		return false
		// return true
	}

	render() {
		console.log('一旦父组件更新，子组件都会重渲染-------');

		return <div>user</div>
	}


}

class App extends Component {
	constructor() {
		super()
		this.state = {
			test: ''
		}
	}


	render() {
		console.log('parent');

		return <div> <button onClick={() => {
			this.setState({ test: 'new' })
		}} >更新父组件状态</button>  <User /> </div>
	}
}


export default App


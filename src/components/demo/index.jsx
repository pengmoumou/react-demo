import React, { Component } from 'react';
import './index.scss';

//Component as a class 
class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            count: 0,
            value: '',
            checkVal: true,
            selectVal: 0
        }
        this.changeInputVal = this.changeInputVal.bind(this);
    }
    refresh() {
        this.setState({ date: new Date() })
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.refresh();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    addCount(count) {
        this.setState({ count: count + 1 });
    }
    minusCount(count) {
        this.setState({ count: count - 1 });
    }
    changeInputVal(e) {
        const name = e.target.name;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [name]: value })
    }
    render() {
        if (this.props.disable) {
            return null;
        }
        return (<div>
            {true && <p>Always start component names with a capital letter.</p>}
            <p>{this.props.value}</p>
            <p>{this.state.date.toLocaleTimeString()}</p>
            <p>{this.state.count < 5 ? (
                <button onClick={this.addCount.bind(this, this.state.count)}>add</button>) : (
                    <button onClick={this.minusCount.bind(this, this.state.count)}>minus</button>)}
                {this.state.count}</p>
            <p><input type='text' name='value' value={this.state.value} onChange={this.changeInputVal}></input>{this.state.value}</p>
            <p><input type='checkbox' name='checkVal' checked={this.state.checkVal} onChange={this.changeInputVal}></input>{this.state.checkVal}</p>
            <select value={this.state.selectVal} name='selectVal' onChange={this.changeInputVal}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>{this.state.selectVal}
        </div>)
    }
}
//Component as a function
function FuncComponent(props) {
    return <p>{props.text ? props.text : 'no text'}</p>;
}

class Demo extends Component {
    render() {
        const numbers = [1, 2, 3, 4];
        const listItems = numbers.map((number, index) =>
            <li key={index}>{number}</li>
        )
        return (<div>
            <p className="red-color">this is my first component</p>
            <ul>{listItems}</ul>
            <ClassComponent value="this is my first props" disable={false}></ClassComponent>
            <FuncComponent text="All React components must act like pure functions with respect to their props."></FuncComponent>
        </div>)
    }
}



export default Demo;

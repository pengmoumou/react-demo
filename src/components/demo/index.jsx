import React, { Component } from 'react';

//Component as a class 
class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            count: 0
        }
    }
    refresh () {
        this.setState({ date: new Date() })
    }
    componentDidMount () {
        this.timer = setInterval(() => {
            this.refresh();
        }, 1000);
    }
    componentWillUnmount () {
        clearInterval(this.timer);
    }
    addCount (count) {
        this.setState({ count: count + 1 });
    }
    minusCount (count) {
        this.setState({ count: count - 1 });
    }
    render () {
        if (this.props.disable) {
            return null;
        }
        return (<div>
            {true && <p>Always start component names with a capital letter.</p>}
            <p>{this.props.value}</p>
            <p>{this.state.date.toLocaleTimeString()}</p>
            <p>{this.state.count < 5 ? (<button onClick={this.addCount.bind(this, this.state.count)}>add</button>) : (<button onClick={this.minusCount.bind(this, this.state.count)}>minus</button>)}{this.state.count}</p>
        </div>)
    }
}
//Component as a function 
function FuncComponent (props) {
    return <p>{props.text ? props.text : 'no text'}</p>;
}

class Demo extends Component {
    render () {
        const numbers = [1, 2, 3, 4];
        const listItems = numbers.map((number, index) =>
            <li key={index}>{number}</li>
        )
        return (<div>
            <p>this is my first component</p>
            <ul>{listItems}</ul>
            <ClassComponent value="this is my first props" disable={false}></ClassComponent>
            <FuncComponent text="All React components must act like pure functions with respect to their props."></FuncComponent>
        </div>)
    }
}



export default Demo;

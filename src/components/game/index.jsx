import React, { Component } from 'react';
import './index.css';

// class Square extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null
//         }
//     }
//     render() {
//         return (<button className="square" onClick={() => this.props.onClick()}>{this.props.value}</button>)
//     }
// }
//如果你想写的组件只包含一个 render 方法，并且不包含 state，那么使用函数组件就会更简单。我们不需要定义一个继承于 React.Component 的类，我们可以定义一个函数，这个函数接收 props 作为参数，然后返回需要渲染的元素。函数组件写起来并不像 class 组件那么繁琐，很多组件都可以使用函数组件来写。
function Square(props) {
    //当我们把 Square 修改成函数组件时，我们同时也把 onClick={() => this.props.onClick()} 改成了更短的 onClick={props.onClick}（注意两侧都没有括号）
    return (<button className="square" onClick={props.onClick}>{props.value}</button>)
}

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }
    handelClick(i) {
        //调用了 .slice() 方法创建了 squares 数组的一个副本，而不是直接在现有的数组上进行修改。
        //如果直接修改数据，那么就很难跟踪到数据的改变。
        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        })
    }
    renderSquare(i) {
        return (<Square value={this.state.squares[i]} onClick={() => this.handelClick(i)} />)
    }
    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    render() {
        // const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="board">
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends Component {
    render() {
        return (<div className="game-box">
            <Board />
        </div>)
    }
}



export default Game;

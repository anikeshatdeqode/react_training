import React, { Component } from 'react'
import Button from '../components/Button';
import Input from '../components/Input';
import Text from '../components/Text';

export default class Day1 extends Component {
    state = {
        input: '',
        message: 'This is just a message'
    }

    setNewMessage = () => {
        this.setState(prevState => ({
            input: '',
            message: prevState.input
        }))
    }

    render() {
        return (
            <div>
                <Text message={this.state.message}/>
                <Input value={this.state.input} placeholder='Type new message' onChange={(e) => {
                    this.setState({
                        input: e.target.value
                    })
                }} />
                <Button onClick={this.setNewMessage}>Set new message</Button>
            </div>
        )
    }
}

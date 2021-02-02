import React, { Component } from 'react'

export default class Day3 extends Component {
    
    state = {
        name: '',
        email: '',
        date: '',
        gender: 'male',
        img: '',
        education: '',
        password: '',
        confirmPassword: '',
        error: '',
        isValid: false
    }

    handleFormSubmit = e => {
        e.preventDefault()
        console.log(this.state);
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        }, this.validate)
    }

    validate = () => {
        const isValid = this.state.name && this.state.email && this.state.date && this.state.img && this.state.gender && this.state.education && this.state.password.length >= 6 && this.state.password === this.state.confirmPassword
        let error = ''
        
        if (this.state.confirmPassword && this.state.password !== this.state.confirmPassword) {
            error = 'Password didn\'t match'
        }

        if (!isValid) {
            this.setState({
                isValid,
                error
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>

                    <input type='text' required value={this.state.name} placeholder='Name' name='name' onChange={this.handleInput}/> <br/>
                    <input type='email' value={this.state.email} placeholder='Email' name='email' onChange={this.handleInput}/> <br/>
                    <input type='date' required value={this.state.date} placeholder='Date' name='date' onChange={this.handleInput}/> <br/>
                    <input type="radio" checked={this.state.gender === 'male'} id='male' name="gender" value="male"  onChange={this.handleInput}/>
                    <label htmlFor="male">Male</label> <br />
                    <input type="radio" checked={this.state.gender === 'female'} id='female' name="gender" value="female" onChange={this.handleInput} />
                    <label htmlFor="female">Female</label> <br/>
                    <label htmlFor="img">Profile pic: </label>
                    <input type="file" required value={this.state.img} id="img" name="img" accept="image/*" onChange={this.handleInput}/> <br />

                    <select name='education' onChange={this.handleInput} value={this.state.education}>
                        <option value=''>Select education level</option>
                        <option value='12th'>12th</option>
                        <option value='graduate'>Graduate</option>
                        <option value='master'>Master</option>
                    </select> <br/>

                    <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleInput}/> <br />
                    <input type='password' name='confirmPassword' placeholder='Confirm Password' value={this.state.confirmPassword} onChange={this.handleInput}/> <br />

                    {this.state.error !== '' && <label>
                        Invalid: {this.state.error}
                    </label>} <br />

                    <input disabled={!this.state.isValid} type='submit' />

                </form>
            </div>
        )
    }
}

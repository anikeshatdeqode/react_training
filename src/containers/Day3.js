import React, { Component } from 'react'
import Row from './Day4'
import { connect } from 'react-redux'
import { addItem } from '../store/actions'
import store from '../store'

class Day3 extends Component {

    
    state = {
        name: '',
        email: '',
        date: '',
        gender: '',
        education: '',
        img: '',
        password: '',
        confirmPassword: '',
        error: '',
        isValid: false,
    }

    componentDidUpdate = () => {
        console.log(this.props);
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addItem({...this.state, error: undefined, isValid: undefined, data: undefined})
        this.setState({
            name: '',
            email: '',
            date: '',
            gender: 'male',
            education: '',
            img: '',
            password: '',
            confirmPassword: ''}, this.validate)
    }

    handleInput = e => {
        if (e.target.name === 'img') {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(e.target.files[0])
            fileReader.onload = e => {
                this.setState({
                    img: e.target.result
                }, this.validate)
            }
        } else {
            this.setState({
                [e.target.name]: e.target.value
            }, this.validate)
        }
    }

    validate = () => {
        const isValid = this.state.name && this.state.email && this.state.date && this.state.img && this.state.gender && this.state.education && this.state.password.length >= 6 && this.state.password === this.state.confirmPassword
        let error = ''
        
        if (this.state.password && this.state.password.length < 6) {
            error = 'Password should be atleast 6 characters or more'
        } else if (this.state.confirmPassword && this.state.password !== this.state.confirmPassword) {
            error = 'Password didn\'t match'
        }

        this.setState({
            isValid,
            error
        })
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleFormSubmit}>

                    <input type='text' required value={this.state.name} placeholder='Name' name='name' onChange={this.handleInput}/> <br/>
                    <input type='email' value={this.state.email} placeholder='Email' name='email' onChange={this.handleInput}/> <br/>
                    <input type='date' required value={this.state.date} placeholder='Date' name='date' onChange={this.handleInput}/> <br/>
                    <div>
                        <label htmlFor="img">Profile pic: </label>
                        <input type="file" required id="img" name="img" accept="image/*" onChange={this.handleInput}/> <br />
                    </div>
                    <div>
                        <input type="radio" checked={this.state.gender === 'male'} id='male' name="gender" value="male"  onChange={this.handleInput}/>
                        <label htmlFor="male">Male</label> <br />
                        <input type="radio" checked={this.state.gender === 'female'} id='female' name="gender" value="female" onChange={this.handleInput} />
                        <label htmlFor="female">Female</label> <br/>
                    </div>
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


                <table>
                    <caption>Form Data</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Gender</th>
                            <th>Education</th>
                            <th>Profile Pic</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.data.map((formData, i) => <Row data={{...formData}} key={i} index={i}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({data: state.rows})

const mapDispatchToProps = dispatch => ({
    addItem: payload => dispatch(addItem(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Day3)

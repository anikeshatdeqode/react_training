import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux'
import { removeItem, updateItem } from '../store/actions';

const Row = (props) => {
    const EDIT_MODE = 'edit'
    const DISPLAY_MODE = 'display'
    const [mode, setMode] = useState(DISPLAY_MODE)
    const [data, setData] = useState({
        name: props.data.name,
        email: props.data.email,
        gender: props.data.gender,
        education: props.data.education,
        date: props.data.date,
        img: props.data.img
    })

    useEffect(() => {
        resetData()
    }, [props.data])

    const toggleMode = () => {
        if (mode === EDIT_MODE) {
            resetData()
        }
        setMode(mode === DISPLAY_MODE ? EDIT_MODE : DISPLAY_MODE)
    }

    const handleInput = e => {
        if (e.target.name === 'img') {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(e.target.files[0])
            fileReader.onload = e => {
                setData({...data, img: e.target.result})
            }
        } else {
            setData({...data, [e.target.name]: e.target.value})
        }
    }

    const saveData = () => {
        const newData = {
            ...props.data,
            name: data.name,
            email: data.email,
            date: data.date,
            gender: data.gender,
            education: data.education,
            img: data.img
        }
        setData(newData)
        toggleMode()
        console.log(data);
        props.updateItem(props.index, newData)
    }

    const resetData = () => {
        setData({
            name: props.data.name,
            email: props.data.email,
            gender: props.data.gender,
            education: props.data.education,
            date: props.data.date,
            img: props.data.img
        })
    }

    return (
        <tr>
            {mode === EDIT_MODE ? 
                <input type='text' required value={data.name} placeholder='Name' name='name' onChange={handleInput}/> : <td>{data.name}</td>}
            {mode === EDIT_MODE ? 
            <input type='email' value={data.email} placeholder='Email' name='email' onChange={handleInput}/> : <td>{data.email}</td>}
                        
            {mode === EDIT_MODE ? 
            <input type='date' required value={data.date.split('/').reverse().join('-')} placeholder='Date' name='date' onChange={handleInput}/> : <td>{data.date}</td>}

            {mode === EDIT_MODE ? 
            <div>
                <input type="radio" checked={data.gender === 'male'} id='male_edit' name="gender" value="male"  onChange={handleInput}/>
                <label htmlFor="male_edit">Male</label> <br />
                <input type="radio" checked={data.gender === 'female'} id='female_edit' name="gender" value="female" onChange={handleInput} />
                <label htmlFor="female_edit">Female</label> <br/>
            </div> : <td>{data.gender}</td>}

            {mode === EDIT_MODE ? 
            <select name='education' onChange={handleInput} value={data.education}>
                <option value=''>Select education level</option>
                <option value='12th'>12th</option>
                <option value='graduate'>Graduate</option>
                <option value='master'>Master</option>
            </select> : <td>{data.education}</td>}

            {mode === EDIT_MODE ? 
            <input type="file" required id="img" name="img" accept="image/*" onChange={handleInput}/> : <td className='img_container'>
                <img src={data.img}/>
            </td>}

            <td>

                {mode === EDIT_MODE && <Button onClick={saveData} color="primary">Save</Button>}

                <IconButton aria-label="delete" color='primary' onClick={toggleMode}> 
                    { mode === EDIT_MODE ? <CloseIcon size='large'/> : <EditIcon size="large"/> }
                </IconButton>

                <IconButton aria-label="delete" style={{color: 'red'}} onClick={() => props.removeItem(props.index)}> 
                    <DeleteIcon size="large"/>
                </IconButton>
            </td>
        </tr>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem: index => dispatch(removeItem(index)),
    updateItem: (index, data) => dispatch(updateItem(index, data))
})

export default connect(null, mapDispatchToProps)(Row)

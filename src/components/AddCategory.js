import React, {useState} from 'react'
import PropTypes  from 'prop-types'

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState("")
    const handleInputChenge = (e) => {
        setInputValue(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats])
            setInputValue("");
        }

    }
    return (
        <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
            <input type="text" placeholder="Write It" value={inputValue} onChange={handleInputChenge}/>
            <div className="line"></div>
        </form>
    )
}
export default AddCategory

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
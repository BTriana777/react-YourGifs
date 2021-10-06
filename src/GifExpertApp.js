import React, {useState} from 'react'
import AddCategory from './components/AddCategory'
import { CreatedBy } from './components/CreatedBy';
import GirfGrid from './components/GirfGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["Hello Word!"]);
    return (
        <>
            <div className="header animate__animated animate__slideInDown">
                <h2>Your Gifs</h2>
            </div>
            <AddCategory setCategories={setCategories}/>


            <div className="containerGridCards">
                {
                    categories.map(category => (
                        <GirfGrid key={category} category={ category } />
                    ))
                }
            </div>
            <CreatedBy /> 
        </>
    )
}

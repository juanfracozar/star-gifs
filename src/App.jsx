import { useState } from 'react';
import { InputSearch, GifGrid } from './components';

export const App = () => {
    
    const [ categories, setCategories ] = useState([ '' ]);
    
    const onAddCategory = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>

            <h1>Star Gifs App</h1>

    
            <InputSearch 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }

            <p className='credits'>Powered by GIPHY</p>




        </>
    )
}
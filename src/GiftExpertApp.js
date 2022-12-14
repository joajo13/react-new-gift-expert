import React, { useState } from 'react';
import { AddCategory, GiftGrid } from './components';

export const GiftExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch'])

    return (
        <>
            <h2> GiftExpertApp </h2>
            <AddCategory setCategories = {setCategories} />
            <hr />



            <ol>
                {
                    categories.map(category => 
                        <GiftGrid 
                        key = {category}
                        category={category}/>
                    )
                }
            </ol>
        </>
    )


}

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   
    const [categories, setCategories] = useState(['Naruto']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    //el key no puede ser el indice, es mala practica
                    categories.map((category) =>
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )

                }
            </ol>
        </>
    )
};



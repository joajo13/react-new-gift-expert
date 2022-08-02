import React, { useEffect, useState } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({category}) => {
    
  const {images, isLoading } = useFetchGifs(category);

  //console.log({images, isLoading})

  


    return (
      <>
        <h3> {category} </h3>
        {
          isLoading && (<h3>Cargando...</h3>)
        }
        <div className='card-grid'>

            {
                images.map(img => (
                    <GiftGridItem 
                    key = {img.id}
                    {...img}
                    />
                    ))
                }
        
        </div>
    </>

  )
}

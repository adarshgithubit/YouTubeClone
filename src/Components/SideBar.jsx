import React from 'react'

import { Stack } from '@mui/material'
import { categories } from '../Utils/Constant'

const SideBar = () => {
  return (
    <>
    <Stack direction="row"
    sx={{
        overflow:"auto",
        height:{sx:"auto", md: "95%"},
        flexDirection:{md:"column"},
    }}
    >
    {
        categories.map((cat)=>{
            return(
                <button className='category-btn' key={cat.name}>
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                </button>
            )
        })
    }


    </Stack>
    
    </>
  )
}

export default SideBar
import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-24 items-center justify-center text-center'> 
            <h1 className='text-2xl md:text-4xl'>
                We're delighted to have you{" "} <span className='text-pink-500'>here! :)</span> 
            </h1>
            <p className='mt-12'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium magni saepe harum quos quam error sint temporibus iusto vel quibusdam quidem soluta, est ut amet itaque reprehenderit dolores quaerat quis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id repudiandae, minima debitis asperiores doloribus tempore laboriosam totam tempora, voluptate dicta minus, explicabo neque aut. Fugiat cum cupiditate enim nostrum.
            </p>
            <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default Course

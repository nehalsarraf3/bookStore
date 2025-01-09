import React from 'react';
import { useForm } from "react-hook-form";

function Contactus() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <form 
          onSubmit={handleSubmit(onSubmit)} 
          method="dialog" 
          className='w-[400px] border-4 border-black p-3 rounded-md dark:border-white'
        >
          <h3 className="font-bold text-xl">Contact Us</h3>
          <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br/>
            <input 
              type="text" 
              placeholder='Enter your name'
              className='w-80 px-3 py-1 rounded-md' 
              {...register("name", { required: true })}
            />
            <br/>
            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br/>
            <input 
              type="email" 
              placeholder='Enter your email'
              className='w-80 px-3 py-1 rounded-md' 
              {...register("email", { required: true })}
            />
            <br/>
            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          {/* Message */}
          <div className='mt-4 space-y-2'>
            <span>Message</span>
            <br/>
            <textarea
              placeholder='Enter your message'
              rows={3} // Adjust the number of visible lines
              className='w-80 px-3 py-1 rounded-md focus:ring-2 focus:ring-blue-500'
              {...register("message", { required: true })}
            />
            <br/>
            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
          </div>

          {/* Submit Button */}
          <div className='flex justify-around mt-4'>
            <button className='bg-blue-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactus;

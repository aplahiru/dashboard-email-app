import React from 'react';

function Profile() {
  return (
    <div className='flex-col justify-center w-full'>
        <img className='rounded-full mx-auto border border-[#204fff] p-1 w-28 h-28' src="https://randomuser.me/api/portraits/women/81.jpg" alt="" />
        <h3 className='capitalize text-center font-bold'>Mike Tylor</h3>
        <h6 className='capitalize text-center text-sm font-semibold text-slate-400'>new york, NY</h6>
        <p className='text-xs pl-10 mt-8 text-slate-700'><i className='far fa-envelope'></i> Mike123@gmail.com</p>
    </div>
);
}

export default Profile;

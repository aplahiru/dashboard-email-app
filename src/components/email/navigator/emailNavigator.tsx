import React from 'react';
import Profile from '../profile/profile';

function EmailNavigator() {
  return (
        <div className='h-full grid grid-rows-[300px_minmax(200px,_1fr)_200px]'>
            {/* profile */}
            <div className='flex-nowrap pt-10 pb-10 border-b-2 border-b-slate-100'>
                <Profile/>
            </div>
            <div className='grid grid-rows-[repeat(7, minmax(80px,_1fr))]'>
                
                <div className='flex pl-5 pb-3 text-sm items-center text-slate-600'>Messages</div>
                {/* inbox */}
                <div className='flex group pl-5 pr-3 justify-between items-center cursor-pointer hover:text-[#420099] text-[#4f1796] hover:border-l-2 border-l-2 hover:border-[#0032e8] border-[#204fff] hover:bg-slate-200 bg-slate-200'>
                    <div className='capitalize text-sm'>
                        <i className='fas fa-download text-[#204fff] group-hover:text-[#0032e8] pr-2'/> <span>inbox</span>
                    </div>
                    <div className=''>
                        <span className='h-3 w-3 bg-[#204fff] text-white px-1 py-0.5 text-xs rounded-sm'>4</span>
                    </div>
                </div>
                {/* draft */}
                <div className='flex group pl-5 pr-3 justify-between items-center text-slate-500 cursor-pointer hover:text-[#420099] hover:border-l-2 hover:border-[#0032e8] hover:bg-slate-200'>
                    <div className='capitalize text-sm'>
                        <i className='fas fa-layer-group group-hover:text-[#0032e8] pr-2'/> <span>draft</span>
                    </div>
                    <div className=''>
                        {/* <span className='h-3 w-3 bg-[#204fff] text-white px-1 py-0.5 text-xs rounded-sm'></span> */}
                    </div>
                </div>
                {/* sent */}
                <div className='flex group pl-5 pr-3 justify-between items-center text-slate-500 cursor-pointer hover:text-[#420099] hover:border-l-2 hover:border-[#0032e8] hover:bg-slate-200'>
                    <div className='capitalize text-sm'>
                        <i className='fas fa-paper-plane group-hover:text-[#0032e8] pr-2'/> <span>sent</span>
                    </div>
                    <div className=''>
                        {/* <span className='h-3 w-3 bg-[#204fff] text-white px-1 py-0.5 text-xs rounded-sm'></span> */}
                    </div>
                </div>
                {/* spam */}
                <div className='flex group pl-5 pr-3 justify-between items-center text-slate-500 cursor-pointer hover:text-[#420099] hover:border-l-2 hover:border-[#0032e8] hover:bg-slate-200'>
                    <div className='capitalize text-sm'>
                        <i className='fas fa-times-circle group-hover:text-[#0032e8] pr-2'/> <span>spam</span>
                    </div>
                    <div className=''>
                        {/* <span className='h-3 w-3 bg-[#204fff] text-white px-1 py-0.5 text-xs rounded-sm'></span> */}
                    </div>
                </div>
                {/* deleted */}
                <div className='flex group pl-5 pr-3 justify-between items-center text-slate-500 cursor-pointer hover:text-[#420099] hover:border-l-2 hover:border-[#0032e8] hover:bg-slate-200'>
                    <div className='capitalize text-sm'>
                        <i className='fas fa-trash-alt group-hover:text-[#0032e8] pr-2'/> <span>deleted</span>
                    </div>
                    <div className=''>
                        {/* <span className='h-3 w-3 bg-[#204fff] text-white px-1 py-0.5 text-xs rounded-sm'></span> */}
                    </div>
                </div>
                {/* other */}
                <div className='flex group pl-5 pr-3 justify-between items-center text-slate-500 cursor-pointer hover:text-[#420099] hover:border-l-2 hover:border-[#0032e8] hover:bg-slate-200'>
                    <div className='capitalize text-sm'>
                        <i className='fas fa-star group-hover:text-[#0032e8] pr-2'/> <span>other</span>
                    </div>
                    <div className=''>
                        {/* <span className='h-3 w-3 bg-[#204fff] text-white px-1 py-0.5 text-xs rounded-sm'></span> */}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default EmailNavigator;

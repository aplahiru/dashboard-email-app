import React, { useEffect, useState } from 'react';
import { mailsPrototype } from '../../../types/types';

// props defined for component
type mailMessageProps = {
    mail: mailsPrototype,
    selectedMail?: mailsPrototype | null,
    mailClickHandler: (mail:mailsPrototype)=>void
}


function MailMessage(props:mailMessageProps) {
    // state hooks
    const {mail, mailClickHandler, selectedMail} = props;
    const [selectedStyle, setSelectedStyle] = useState("");

    // call useEffect to capture prop changes
    useEffect(()=>{
        setSelectedStyle((mail.id === selectedMail?.id ? "border-l-2 border-l-[#204fff] bg-white" : "bg-gray-100" ));
    },[selectedMail, mail])
    
  return (
        <div>
            <div onClick={()=>mailClickHandler(mail)} className={selectedStyle + ' w-full group h-40 grid grid-cols-6 border-2 border-slate-100 hover:border-l-2 hover:border-l-[#0032e8]'}>
                <div className='row-span-6 p-2'>
                    <img className='rounded-full mx-auto  p-0.5 w-10 h-10' src={mail.profile} alt="" />
                </div>
                <div className='flex mt-2 justify-between items-end pr-2 truncate col-span-5 row-span-1 text-xs text-slate-500'>
                    <span className='w-1/2 truncate'>{mail.sender}</span>
                    <span className='w-1/2 truncate text-right'>{mail.time}</span>
                </div>
                <div className='flex items-center pr-2 capitalize col-span-5 row-span-1 font-semibold'>
                    <span className={selectedStyle !== "bg-gray-100" ? "text-[#0032e8] group-hover:text-[#0032e8] truncate" : "group-hover:text-[#0032e8] truncate" }>{mail.header}</span>
                    {
                        mail.readStatus === "unread" && <i className="fas fa-circle text-xs pl-2 text-[#204fff]"/>
                    }
                    {
                        mail.attachments.length >  0 && <i className="fas fa-paperclip text-slate-400 pl-2"></i>
                    }
                </div>
                <div className='h-20 row-span-4 col-span-5 p-1 text-gray-700 mt-1'>
                    <p className='h-5/6 overflow-hidden text-ellipsis whitespace-pre-line break-words text-xs'>{mail.body}</p>
                </div>
            </div>
        </div>
    );
}

export default MailMessage;

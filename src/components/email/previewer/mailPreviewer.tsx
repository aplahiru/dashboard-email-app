import React, { useEffect, useState } from 'react';
import '../../../App.css';
import { mailsPrototype } from '../../../types/types';

type mailPreviwerProps = {
    selectedMail?: mailsPrototype | null
}
// enum for file types there is no every types accepted by mail
enum FILE_TYPES {
    ZIP = 'zip',
    DOC = 'doc',
    DOCX = 'docx',
    TEXT = 'txt'
}

function MailPreviewer(props:mailPreviwerProps) {
    // state hooks
    const [attachmentList, setAttachmentList] = useState<React.ReactNode | []>([]);
    // destructuring props
    const {selectedMail} = props;

    // calling use Effect when prop updating for setting attchment list
    useEffect(()=>{
        // map relavant icon for each file type in attachment list
        let attachments = selectedMail !== null && selectedMail?.attachments.length !== 0 ? 
                selectedMail?.attachments.map((attach, index)=>{
                    let icon = attach.split('.').pop();
                    let iconClass = "";
                    switch(icon){
                        case FILE_TYPES.DOC:
                            iconClass = "far fa-file-word";
                            break;
                        case FILE_TYPES.DOCX:
                            iconClass = "far fa-file-alt";
                            break;
                        case FILE_TYPES.TEXT:
                            iconClass = "far fa-file-alt";
                            break;
                        case FILE_TYPES.ZIP:
                            iconClass = "far fa-file-archive";
                            break;
                        default:
                            iconClass = "far fa-file";
                    }
                    return(
                        <div key={index+attach} className='mr-10 cursor-pointer'><i className={ iconClass+" pr-2 text-[#4f1796]"}/> <span className='text-sm'> {attach}</span></div>
                    )
                }) 
                :
                (<div className='text-sm text-slate-500'>No Attachments...</div>);
            // end of the map function

        // set attachments to the state
        setAttachmentList(attachments);

    },[selectedMail]);


  return (
        <div className='h-full w-full grid grid-rows-[repeat(10,_minmax(50px,_1fr))] whitespace-pre-line'>
            {/* top of the header with username and dp with mail options */}
            <div className='bg-white flex justify-between border-y-2 border-y-slate-100 px-8'>
                <div className='flex items-center p-2'>
                    <img className='rounded-full mr-2 mx-auto p-1 w-10 h-10' src={selectedMail?.profile} alt="" />
                    <span className='truncate'>{selectedMail?.name}</span>
                </div>
                <div className='flex justify-end items-center'>
                    <i className="fas fa-reply mr-3 text-slate-300 text-lg cursor-pointer hover:text-slate-400"></i>
                    <i className="fas fa-reply-all mr-3 text-slate-300 text-lg cursor-pointer hover:text-slate-400"></i>
                    <i className="fas fa-arrow-circle-right mr-3 text-slate-300 text-lg cursor-pointer hover:text-slate-400"></i>
                    <i className="fas fa-ellipsis-h mr-3 text-slate-300 text-lg cursor-pointer hover:text-slate-400"></i>
                </div>
            </div>
            {/* mail header */}
            {/* mail body */}
            {/* mail attachment */}
            {/* a mail section below the attachment */}
            <div className='bg-white row-[span_8_/_span_10] px-10 overflow-y-scroll scrollbar-hidden text-sm text-slate-500'>

                <div className='bg-white pt-7 pb-4 mb-4'>
                    <p className='font-medium text-base text-slate-900 pb-2'>Re: {selectedMail?.header}</p>
                    <div className='text-slate-500 text-sm'>
                        <i className="far fa-clock mr-2"></i>
                        <span>Today {selectedMail?.time}</span>
                    </div>
                </div>

                {/* mail body content display */}
                
                    {selectedMail?.body}

                    <hr className=' mt-14'/>
                    <div className='flex justify-between my-3 pr-2'>
                        {/* render attachment list */}
                        <div className='grid grid-cols-3 py-5'>
                            {
                                attachmentList
                            }
                        </div>
                        <div className='flex items-center'>
                            <i className="fas fa-arrow-down cursor-pointer hover:text-[#420099] hover:scale-125"/>
                        </div>
                    </div>
                    <hr />
                    <div className='mt-4 pt-4 text-xs text-slate-300'>
                        {selectedMail?.footer}
                    </div>
                
            </div>
            {/* reply textarea and attachment with send button */}
            <div className='bg-gray-50 row-span-1 w-full flex justify-start items-end'>
                <textarea className='w-4/6 h-full px-9 py-6 border-t-2 bg-gray-50 border-t-slate-100 resize-none focus:outline-none focus:border-2 focus:rounded-sm focus:border-[#204fff] text-[14] text-slate-600' placeholder='Type  to  answer...' name="message"/>
                <label className='h-full w-1/6 flex flex-col justify-center items-center cursor-pointer'>
                    <i className="fas fa-paperclip text-gray-300  text-3xl"/>
                    <input className='hidden' type="file" name="attachment" />
                </label>
                <button type='button' className='w-1/6 h-full text-3xl bg-[#204fff]'>
                    <i className="far fa-paper-plane text-white"></i>
                </button>
            </div>
        </div>
    );
}

export default MailPreviewer;

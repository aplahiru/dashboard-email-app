import React, { useEffect, useState } from 'react';
import EmailNavigator from './navigator/emailNavigator';
import MailPreviewer from './previewer/mailPreviewer';
import '../../App.css';
import { mails, mailsPrototype } from '../../types/types';
import MailListContainer from './listContainer/mailListContainer';


function EmailContainer() {
  // state hooks
  const [mailList, setMailList] = useState<mailsPrototype[] | []>([]);
  const [availableMailList, setAvailableMailList] = useState<mailsPrototype[] | []>([]);
  const [selectedMail, setSelectedMail] = useState<mailsPrototype | null>(null);

  // effect hook calls
  useEffect(()=>{
    setMailList(mails);
    setAvailableMailList(mails);
  },[]);

  // search function that searched from sender, header, body, footer properties
  const searchHandler= (event:React.ChangeEvent<HTMLInputElement>)=>{
    let resultSet = [];
    if(mailList.length !== 0){
      resultSet =  mailList.filter((mail)=> 
        mail.header.toLowerCase().match(new RegExp(event.target.value, 'g')) ||
        mail.sender.toLowerCase().match(new RegExp(event.target.value, 'g')) ||
        mail.body.toLowerCase().match(new RegExp(event.target.value, 'g')) ||
        mail.footer.toLowerCase().match(new RegExp(event.target.value, 'g'))
        );
      setAvailableMailList(resultSet);
    }
    else{
      setAvailableMailList(mailList);
    }
  }

  // store selected method in the state
  const mailClickHandler= (mail:mailsPrototype)=>{
    setSelectedMail(mail);
  }

  return (
    <React.Fragment>

      <div className='w-screen grid grid-cols-6 grid-rows-[repeat(10,_minmax(50px,_1fr))] gap-0'>

        {/* profile with mail boxes */}
        <div className='bg-white row-[span_10_/_span_10]'>
          <EmailNavigator/>
        </div>

        {/* search bar */}
        <div className='bg-white flex justify-start items-center col-span-5 row-[span_1_/_span_10]'>
            <span className="z-10 text-slate-400 leading-snug font-normal text-center absolute bg-transparent rounded text-xl items-center justify-center w-10 pl-8 py-3">
              <i className="fas fa-search"></i>
            </span>
            <input type="search" className='h-full w-2/3 px-16 py-2 focus:outline-none focus:border-[#204fff] text-base text-slate-500' placeholder='Search for messages' onChange={searchHandler}/>
            <div className='bg-white h-full w-1/3 flex justify-end items-center pr-8'><button type='button' className='bg-[#204fff] px-2 py-1.5 rounded-3xl text-sm text-white hover:scale-105 transition delay-75'>+ new message</button></div>
        </div> 

        {/* mail list viewer */}
        <div className='bg-white col-span-2 row-[span_9_/_span_10] overflow-y-scroll scrollbar-hidden'>
          <MailListContainer mailList={availableMailList} mailClickHandler={mailClickHandler} selectedMail={selectedMail}/>
        </div>

        {/* mail open viewer */}
        <div className='bg-slate-600 col-span-3 row-[span_9_/_span_10] overflow-y-scroll scrollbar-hidden'>
          {
            selectedMail !== null ? 
              <MailPreviewer selectedMail={selectedMail}/> 
              : 
              <div className='flex justify-center items-center h-full text-sm text-slate-500 bg-white border-2 border-slate-200'>Please select a mail for view it...</div>
          }
        </div>

      </div>      
    </React.Fragment>
  );
}

export default EmailContainer;
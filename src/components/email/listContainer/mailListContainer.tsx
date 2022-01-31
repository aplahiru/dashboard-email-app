import React from 'react';
import MailMessage from '../message/mailMessage';
import { mailsPrototype } from "../../../types/types";

// props types defined
type mailListProps = {
    selectedMail?: mailsPrototype | null,
    mailList: mailsPrototype[],
    mailClickHandler: (mail:mailsPrototype)=> void
}
function MailListContainer(props:mailListProps) {
  return (
    <div className='h-full'>
        {
            props.mailList.length === 0 ? 
            <div className='text-sm text-slate-500 flex items-center h-full justify-center w-full'>Mails Not Available</div>
            :
            props.mailList.map((mail)=>(<MailMessage key={mail.id} mail={mail} selectedMail={props.selectedMail} mailClickHandler={props.mailClickHandler}/>))
        }
    </div>
  );
}

export default MailListContainer;

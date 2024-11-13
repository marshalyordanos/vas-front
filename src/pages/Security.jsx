import React from 'react'
import TopNav from '../components/setting/topNav'
import { useState } from 'react'


function Security() {
    const [show, setShow] = useState(false)
  return (
    <div>
        <div className={`relative min-h-screen flex items-center justify-center bg-slate-200 ${show ? '' : 'hidden'}`} onClick={()=>setShow(false)}>
            <div className="absolute  bg-[#0C4651] z-10 rounded-[10px] px-[7px] py-[5px] gap-[4px] min-w-[264px] min-h-[157px]">
                jkjk
            </div>
        </div>

      <TopNav title={"Security"}/>
    <div className='flex flex-row  gap-5 justify-between px-[10px] py-[10px]'>
        <div className='flex flex-row gap-5 items-center'>
            <div>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className='min-w-[36px] min-h-[40px]'>
                    <rect width="36" height="36" rx="8" fill="#0C4651"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.944 7.25H18.056C19.894 7.25 21.35 7.25 22.489 7.403C23.661 7.561 24.61 7.893 25.359 8.641C26.107 9.39 26.439 10.339 26.597 11.511C26.75 12.651 26.75 14.106 26.75 15.944V20.056C26.75 21.894 26.75 23.35 26.597 24.489C26.439 25.661 26.107 26.61 25.359 27.359C24.61 28.107 23.661 28.439 22.489 28.597C21.349 28.75 19.894 28.75 18.056 28.75H17.944C16.106 28.75 14.65 28.75 13.511 28.597C12.339 28.439 11.39 28.107 10.641 27.359C9.893 26.61 9.561 25.661 9.403 24.489C9.25 23.349 9.25 21.894 9.25 20.056V15.944C9.25 14.106 9.25 12.65 9.403 11.511C9.561 10.339 9.893 9.39 10.641 8.641C11.39 7.893 12.339 7.561 13.511 7.403C14.651 7.25 16.106 7.25 17.944 7.25ZM12.814 9.073C12.325 9.219 11.98 9.424 11.702 9.702C11.279 10.125 11.025 10.705 10.89 11.711C10.752 12.739 10.75 14.093 10.75 16V20C10.75 21.907 10.752 23.262 10.89 24.29C11.025 25.295 11.279 25.875 11.702 26.298C12.125 26.721 12.705 26.975 13.711 27.11C14.739 27.248 16.093 27.25 18 27.25C19.907 27.25 21.262 27.248 22.29 27.11C23.295 26.975 23.875 26.721 24.298 26.298C24.721 25.875 24.975 25.295 25.11 24.289C25.248 23.262 25.25 21.907 25.25 20V16C25.25 14.093 25.248 12.739 25.11 11.71C24.975 10.705 24.721 10.125 24.298 9.702C24.02 9.424 23.675 9.219 23.186 9.073C22.524 10.067 22.062 10.758 21.374 11.185C21.236 11.2703 21.0937 11.3467 20.947 11.414C20.205 11.751 19.367 11.751 18.16 11.75H17.84C16.633 11.75 15.795 11.751 15.053 11.414C14.9062 11.3464 14.7636 11.2699 14.626 11.185C13.938 10.758 13.476 10.067 12.814 9.073ZM14.451 8.816C14.895 9.46 15.128 9.731 15.418 9.911C15.5 9.96233 15.5853 10.008 15.674 10.048C16.084 10.234 16.568 10.25 18 10.25C19.432 10.25 19.917 10.234 20.326 10.048C20.414 10.008 20.4993 9.96233 20.582 9.911C20.872 9.731 21.105 9.46 21.549 8.816C20.629 8.751 19.481 8.75 18 8.75C16.519 8.75 15.372 8.751 14.451 8.816ZM14.25 25C14.25 24.8011 14.329 24.6103 14.4697 24.4697C14.6103 24.329 14.8011 24.25 15 24.25H21C21.1989 24.25 21.3897 24.329 21.5303 24.4697C21.671 24.6103 21.75 24.8011 21.75 25C21.75 25.1989 21.671 25.3897 21.5303 25.5303C21.3897 25.671 21.1989 25.75 21 25.75H15C14.8011 25.75 14.6103 25.671 14.4697 25.5303C14.329 25.3897 14.25 25.1989 14.25 25Z" fill="#EDEDED"/>
                </svg>
            </div>
            <div className='flex flex-col'>
                <div className='text-base font-bold text-black'>Android 15</div>
                <div className='text-sm text-gray-400'>August 23, 2024 at 5:02</div>
            </div>
        </div>
        <button className='flex flex-row gap-2 items-center bg-[#EDEDED66] p-2 rounded-[10px]' onClick={()=>setShow(true)} >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84285 16.1566 4 14.1217 4 12" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round"/>
                <path d="M12 14V4M12 4L9 7M12 4L15 7" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h1 className='text-base font-bold text-black'>Remove</h1>
        </button>
    </div>
      
    </div>
  )
}

export default Security

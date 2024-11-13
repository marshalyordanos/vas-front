import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleS1, toggleS2, toggleS3, toggleN1, toggleN2, toggleN3 } from '../redux/notificationSlice';
import TopNav from '../components/setting/topNav';

function Notification() {
  // const dispatch = useDispatch();
  const { s1, s2, s3, n1, n2, n3 } = useSelector((state) => state.notification);
  return (
    
    <div className="flex flex-col min-h-screen">

      <div className='px-[10px] flex-grow'>
        <TopNav title={"Account Settings"} />
        <div className='px-[12px]'>
          <h1 className='text-[#141414] text-base font-bold  px-[10px] py-[10px] '> Sounds</h1>
          <div className='grid grid-row gap-[2px] text-black'>
            <ToggleButton title="Sound Effects" isActive={s1} toggleAction={toggleS1} />
            <ToggleButton title="Speaking exercises" isActive={s2} toggleAction={toggleS2} />
            <ToggleButton title="Listening exercises" isActive={s3} toggleAction={toggleS3} />
          </div>
        </div>
        <div className='px-[12px]'>
          <h1 className='text-[#141414] leading-5 font-bold font-[19px] px-[10px] py-[10px] '> Notifications</h1>
          <div className='grid grid-row gap-[2px] text-black'>
            <ToggleButton title="Lorem ipsum dolor sit amet." isActive={n1} toggleAction={toggleN1} />
            <ToggleButton title="Lorem ipsum dolor sit amet consectetur. Eget ac egestas at." isActive={n2} toggleAction={toggleN2} />
            <ToggleButton title="Lorem ipsum dolor sit amet." isActive={n3} toggleAction={toggleN3} />
          </div>
        </div>
      </div>
      <div className='p-4 text-left mb-24 flex flex-col justify-start gap-y-[5px]'>
        <h2 className='text-[#141414] text-base font-bold  px-[10px] py-[1px] '>Dangerous Area</h2>
        <button className='flex flex-row items-center gap-x-[0px] px-[20px]  hover:border-[2px] w-40' >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.375 4.5H2.625M14.1248 6.375L13.7797 11.55C13.647 13.5405 13.581 14.5358 12.9323 15.1425C12.2835 15.7493 11.2853 15.75 9.29025 15.75H8.70975C6.71475 15.75 5.7165 15.75 5.06775 15.1425C4.419 14.5358 4.35225 13.5405 4.22025 11.55L3.87525 6.375" stroke="#FF1717" stroke-width="1.125" stroke-linecap="round"/>
            <path d="M4.875 4.5H4.9575C5.25933 4.49229 5.55182 4.39367 5.79669 4.21703C6.04157 4.0404 6.22744 3.79398 6.33 3.51L6.3555 3.43275L6.42825 3.2145C6.4905 3.02775 6.522 2.93475 6.56325 2.85525C6.64441 2.69954 6.76088 2.56499 6.90336 2.46237C7.04583 2.35974 7.21035 2.2919 7.38375 2.26425C7.4715 2.25 7.56975 2.25 7.76625 2.25H10.2338C10.4303 2.25 10.5285 2.25 10.6162 2.26425C10.7896 2.2919 10.9542 2.35974 11.0966 2.46237C11.2391 2.56499 11.3556 2.69954 11.4367 2.85525C11.478 2.93475 11.5095 3.02775 11.5717 3.2145L11.6445 3.43275C11.7395 3.7487 11.9361 4.02451 12.2038 4.21745C12.4714 4.41039 12.7952 4.5097 13.125 4.5" stroke="#FF1717" stroke-width="1.125"/>
          </svg>
          <div className='text-[#FF1717] text-xs font-medium  px-[10px] py-[5px] '> Danger Zone</div>
        </button>
      </div>
      
    </div>
  );
}

const ToggleButton = ({ title, isActive, toggleAction }) => {
  const dispatch = useDispatch();

  return (
    <button className='flex flex-row justify-between px-[10px]  gap-x-2' onClick={() => dispatch(toggleAction())}>
      <div className='text-[#141414] text-sm font-normal  text-left py-[5px]'>{title}</div>
      <div>
        <svg className={` rotate-180 ${isActive ? '' : 'hidden'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.75 5.25H17.25C20.9719 5.25 24 8.27812 24 12C24 15.7219 20.9719 18.75 17.25 18.75H6.75C3.02813 18.75 0 15.7219 0 12C0 8.27812 3.02813 5.25 6.75 5.25ZM6.75 17.25C7.78835 17.25 8.80339 16.9421 9.66674 16.3652C10.5301 15.7883 11.203 14.9684 11.6004 14.0091C11.9977 13.0498 12.1017 11.9942 11.8991 10.9758C11.6966 9.95738 11.1965 9.02192 10.4623 8.28769C9.72808 7.55346 8.79263 7.05345 7.77423 6.85088C6.75583 6.64831 5.70022 6.75227 4.74091 7.14963C3.7816 7.54699 2.96166 8.2199 2.38478 9.08326C1.80791 9.94661 1.5 10.9616 1.5 12C1.50149 13.3919 2.05509 14.7264 3.03933 15.7107C4.02358 16.6949 5.35807 17.2485 6.75 17.25Z" fill="#0C4651"/>
        </svg>
        <svg className={` rotate-180 ${isActive ? 'hidden' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.25 5.25H6.75C3.02812 5.25 0 8.27812 0 12C0 15.7219 3.02812 18.75 6.75 18.75H17.25C20.9719 18.75 24 15.7219 24 12C24 8.27812 20.9719 5.25 17.25 5.25ZM17.25 17.25C16.2116 17.25 15.1966 16.9421 14.3333 16.3652C13.4699 15.7883 12.797 14.9684 12.3996 14.0091C12.0023 13.0498 11.8983 11.9942 12.1009 10.9758C12.3034 9.95738 12.8035 9.02192 13.5377 8.28769C14.2719 7.55346 15.2074 7.05345 16.2258 6.85088C17.2442 6.64831 18.2998 6.75227 19.2591 7.14963C20.2184 7.54699 21.0383 8.2199 21.6152 9.08326C22.1921 9.94661 22.5 10.9616 22.5 12C22.4985 13.3919 21.9449 14.7264 20.9607 15.7107C19.9764 16.6949 18.6419 17.2485 17.25 17.25Z" fill="#D9D9D9"/>
        </svg>
      </div>
    </button>
  );
};
export default Notification;

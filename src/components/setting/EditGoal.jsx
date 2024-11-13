import React, { useState } from 'react';
import styled from 'styled-components';
import TopNav from './topNav';

function EditGoal() {
    const [active, setActive] = useState("three");

    return (
        <Container className='border -4 mt-10'>
            <div className="max-w-[343px]">
                <div
                    className={` border-[1.3px] border-gray-500 bg-white  pb-4  rounded-lg z-10 ${active === "one" ? "active mt-[-10px]" : "mt-[-10px] max-h-[60px]"}`}
                    onClick={() => setActive("one")}
                >
                    <div className={`flex flex-row justify-between items-center  ${active === "one" ? "py-[20px] px-[14px]" : "pt-[5px] px-[14px]"}`}>
                        <div className={`font-medium text-[#141414] text-xs ${active === "one" ? "text-white" : "text-[#141414]"}`}>Basic</div>
                        <div className='flex flex-row  gap-x-2 items-center '>
                            <p className={`text-black font-bold text-xs ${active === "one" ? "text-[#E2F20F]" : "text-[#141414]"}`}>1MP</p>
                            <p className={`text-[#8F8F8F] font-bold text-xs ${active === "one" ? "text-[#E2F20F]" : "text-[#8F8F8F]"}`}>Per day</p>
                            <div className={`${active ==="one" ? "" : "hidden"}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.03 10.0302C16.1037 9.96149 16.1628 9.87869 16.2037 9.78669C16.2447 9.69469 16.2668 9.59538 16.2686 9.49468C16.2703 9.39397 16.2518 9.29394 16.2141 9.20056C16.1764 9.10717 16.1202 9.02233 16.049 8.95112C15.9778 8.8799 15.893 8.82375 15.7996 8.78603C15.7062 8.74831 15.6061 8.72979 15.5054 8.73156C15.4047 8.73334 15.3054 8.75538 15.2134 8.79637C15.1214 8.83736 15.0386 8.89647 14.97 8.97015L10.5 13.4402L9.02997 11.9702C8.88779 11.8377 8.69975 11.7656 8.50545 11.769C8.31115 11.7724 8.12576 11.8511 7.98835 11.9885C7.85093 12.1259 7.77222 12.3113 7.76879 12.5056C7.76537 12.6999 7.83749 12.888 7.96997 13.0302L9.96997 15.0302C10.1106 15.1706 10.3012 15.2495 10.5 15.2495C10.6987 15.2495 10.8893 15.1706 11.03 15.0302L16.03 10.0302Z" fill="#E2F20F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12C1.25 17.937 6.063 22.75 12 22.75C17.937 22.75 22.75 17.937 22.75 12C22.75 6.063 17.937 1.25 12 1.25ZM2.75 12C2.75 9.54675 3.72455 7.19397 5.45926 5.45926C7.19397 3.72455 9.54675 2.75 12 2.75C14.4533 2.75 16.806 3.72455 18.5407 5.45926C20.2754 7.19397 21.25 9.54675 21.25 12C21.25 14.4533 20.2754 16.806 18.5407 18.5407C16.806 20.2754 14.4533 21.25 12 21.25C9.54675 21.25 7.19397 20.2754 5.45926 18.5407C3.72455 16.806 2.75 14.4533 2.75 12Z" fill="#E2F20F"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={` border-[1.3px] border-gray-500 bg-white  pb-4   rounded-lg z-20 ${active === "two" ? "active mt-[-10px]" : "mt-[-10px] max-h-[60px]"}`}
                    onClick={() => setActive("two")}
                >
                    <div className={`flex flex-row justify-between items-center  ${active === "two" ? "py-[20px] px-[14px]" : "pt-[5px] px-[14px]"}`}>
                        <div className={`font-medium text-[#141414] text-xs ${active === "two" ? "text-white" : "text-[#141414]"}`}>Basic</div>
                        <div className='flex flex-row  gap-x-2 items-center '>
                            <p className={`text-black font-bold text-xs ${active === "two" ? "text-[#E2F20F]" : "text-[#141414]"}`}>1MP</p>
                            <p className={`text-[#8F8F8F] font-bold text-xs ${active === "two" ? "text-[#E2F20F]" : "text-[#8F8F8F]"}`}>Per day</p>
                            <div className={`${active ==="two" ? "" : "hidden"}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.03 10.0302C16.1037 9.96149 16.1628 9.87869 16.2037 9.78669C16.2447 9.69469 16.2668 9.59538 16.2686 9.49468C16.2703 9.39397 16.2518 9.29394 16.2141 9.20056C16.1764 9.10717 16.1202 9.02233 16.049 8.95112C15.9778 8.8799 15.893 8.82375 15.7996 8.78603C15.7062 8.74831 15.6061 8.72979 15.5054 8.73156C15.4047 8.73334 15.3054 8.75538 15.2134 8.79637C15.1214 8.83736 15.0386 8.89647 14.97 8.97015L10.5 13.4402L9.02997 11.9702C8.88779 11.8377 8.69975 11.7656 8.50545 11.769C8.31115 11.7724 8.12576 11.8511 7.98835 11.9885C7.85093 12.1259 7.77222 12.3113 7.76879 12.5056C7.76537 12.6999 7.83749 12.888 7.96997 13.0302L9.96997 15.0302C10.1106 15.1706 10.3012 15.2495 10.5 15.2495C10.6987 15.2495 10.8893 15.1706 11.03 15.0302L16.03 10.0302Z" fill="#E2F20F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12C1.25 17.937 6.063 22.75 12 22.75C17.937 22.75 22.75 17.937 22.75 12C22.75 6.063 17.937 1.25 12 1.25ZM2.75 12C2.75 9.54675 3.72455 7.19397 5.45926 5.45926C7.19397 3.72455 9.54675 2.75 12 2.75C14.4533 2.75 16.806 3.72455 18.5407 5.45926C20.2754 7.19397 21.25 9.54675 21.25 12C21.25 14.4533 20.2754 16.806 18.5407 18.5407C16.806 20.2754 14.4533 21.25 12 21.25C9.54675 21.25 7.19397 20.2754 5.45926 18.5407C3.72455 16.806 2.75 14.4533 2.75 12Z" fill="#E2F20F"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>       
                <div
                    className={` border-[1.3px] border-gray-500 bg-white  pb-4   rounded-lg z-30 ${active === "three" ? "active mt-[-10px]" : "mt-[-10px] max-h-[60px]"}`}
                    onClick={() => setActive("three")}
                >
                    <div className={`flex flex-row justify-between items-center  ${active === "three" ? "py-[20px] px-[14px]" : "pt-[5px] px-[14px]"}`}>
                        <div className={`font-medium text-[#141414] text-xs ${active === "three" ? "text-white" : "text-[#141414]"}`}>Basic</div>
                        <div className='flex flex-row  gap-x-2 items-center '>
                            <p className={`text-black font-bold text-xs ${active === "three" ? "text-[#E2F20F]" : "text-[#141414]"}`}>1MP</p>
                            <p className={`text-[#8F8F8F] font-bold text-xs ${active === "three" ? "text-[#E2F20F]" : "text-[#8F8F8F]"}`}>Per day</p>
                            <div className={`${active ==="three" ? "" : "hidden"}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.03 10.0302C16.1037 9.96149 16.1628 9.87869 16.2037 9.78669C16.2447 9.69469 16.2668 9.59538 16.2686 9.49468C16.2703 9.39397 16.2518 9.29394 16.2141 9.20056C16.1764 9.10717 16.1202 9.02233 16.049 8.95112C15.9778 8.8799 15.893 8.82375 15.7996 8.78603C15.7062 8.74831 15.6061 8.72979 15.5054 8.73156C15.4047 8.73334 15.3054 8.75538 15.2134 8.79637C15.1214 8.83736 15.0386 8.89647 14.97 8.97015L10.5 13.4402L9.02997 11.9702C8.88779 11.8377 8.69975 11.7656 8.50545 11.769C8.31115 11.7724 8.12576 11.8511 7.98835 11.9885C7.85093 12.1259 7.77222 12.3113 7.76879 12.5056C7.76537 12.6999 7.83749 12.888 7.96997 13.0302L9.96997 15.0302C10.1106 15.1706 10.3012 15.2495 10.5 15.2495C10.6987 15.2495 10.8893 15.1706 11.03 15.0302L16.03 10.0302Z" fill="#E2F20F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12C1.25 17.937 6.063 22.75 12 22.75C17.937 22.75 22.75 17.937 22.75 12C22.75 6.063 17.937 1.25 12 1.25ZM2.75 12C2.75 9.54675 3.72455 7.19397 5.45926 5.45926C7.19397 3.72455 9.54675 2.75 12 2.75C14.4533 2.75 16.806 3.72455 18.5407 5.45926C20.2754 7.19397 21.25 9.54675 21.25 12C21.25 14.4533 20.2754 16.806 18.5407 18.5407C16.806 20.2754 14.4533 21.25 12 21.25C9.54675 21.25 7.19397 20.2754 5.45926 18.5407C3.72455 16.806 2.75 14.4533 2.75 12Z" fill="#E2F20F"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={` border-[1.3px] border-gray-500 bg-white  pb-4  rounded-lg z-40 ${active === "four" ? "active mt-[-10px]" : "mt-[-10px] max-h-[60px]"}`}
                    onClick={() => setActive("four")}
                >
                    <div className={`flex flex-row justify-between items-center  ${active === "four" ? "py-[20px] px-[14px]" : "pt-[5px] px-[14px]"}`}>
                        <div className={`font-medium text-[#141414] text-xs ${active === "four" ? "text-white" : "text-[#141414]"}`}>Basic</div>
                        <div className='flex flex-row  gap-x-2 items-center '>
                            <p className={`text-black font-bold text-xs ${active === "four" ? "text-[#E2F20F]" : "text-[#141414]"}`}>1MP</p>
                            <p className={`text-[#8F8F8F] font-bold text-xs ${active === "four" ? "text-[#E2F20F]" : "text-[#8F8F8F]"}`}>Per day</p>
                            <div className={`${active ==="four" ? "" : "hidden"}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.03 10.0302C16.1037 9.96149 16.1628 9.87869 16.2037 9.78669C16.2447 9.69469 16.2668 9.59538 16.2686 9.49468C16.2703 9.39397 16.2518 9.29394 16.2141 9.20056C16.1764 9.10717 16.1202 9.02233 16.049 8.95112C15.9778 8.8799 15.893 8.82375 15.7996 8.78603C15.7062 8.74831 15.6061 8.72979 15.5054 8.73156C15.4047 8.73334 15.3054 8.75538 15.2134 8.79637C15.1214 8.83736 15.0386 8.89647 14.97 8.97015L10.5 13.4402L9.02997 11.9702C8.88779 11.8377 8.69975 11.7656 8.50545 11.769C8.31115 11.7724 8.12576 11.8511 7.98835 11.9885C7.85093 12.1259 7.77222 12.3113 7.76879 12.5056C7.76537 12.6999 7.83749 12.888 7.96997 13.0302L9.96997 15.0302C10.1106 15.1706 10.3012 15.2495 10.5 15.2495C10.6987 15.2495 10.8893 15.1706 11.03 15.0302L16.03 10.0302Z" fill="#E2F20F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12C1.25 17.937 6.063 22.75 12 22.75C17.937 22.75 22.75 17.937 22.75 12C22.75 6.063 17.937 1.25 12 1.25ZM2.75 12C2.75 9.54675 3.72455 7.19397 5.45926 5.45926C7.19397 3.72455 9.54675 2.75 12 2.75C14.4533 2.75 16.806 3.72455 18.5407 5.45926C20.2754 7.19397 21.25 9.54675 21.25 12C21.25 14.4533 20.2754 16.806 18.5407 18.5407C16.806 20.2754 14.4533 21.25 12 21.25C9.54675 21.25 7.19397 20.2754 5.45926 18.5407C3.72455 16.806 2.75 14.4533 2.75 12Z" fill="#E2F20F"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={` border-[1.3px] border-gray-500 bg-white  pb-2   rounded-lg z-50 ${active === "five" ? "active mt-[-10px]" : "mt-[-10px] max-h-[60px]"}`}
                    onClick={() => setActive("five")}
                >
                    <div className={`flex flex-row justify-between items-center  ${active === "five" ? "py-[20px] px-[14px]" : "pt-[12px] px-[14px]"}`}>
                        <div className={`font-medium text-[#141414] text-xs ${active === "five" ? "text-white" : "text-[#141414]"}`}>Basic</div>
                        <div className='flex flex-row  gap-x-2 items-center '>
                            <p className={`text-black font-bold text-xs ${active === "five" ? "text-[#E2F20F]" : "text-[#141414]"}`}>1MP</p>
                            <p className={`text-[#8F8F8F] font-bold text-xs ${active === "five" ? "text-[#E2F20F]" : "text-[#8F8F8F]"}`}>Per day</p>
                            <div className={`${active ==="five" ? "" : "hidden"}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.03 10.0302C16.1037 9.96149 16.1628 9.87869 16.2037 9.78669C16.2447 9.69469 16.2668 9.59538 16.2686 9.49468C16.2703 9.39397 16.2518 9.29394 16.2141 9.20056C16.1764 9.10717 16.1202 9.02233 16.049 8.95112C15.9778 8.8799 15.893 8.82375 15.7996 8.78603C15.7062 8.74831 15.6061 8.72979 15.5054 8.73156C15.4047 8.73334 15.3054 8.75538 15.2134 8.79637C15.1214 8.83736 15.0386 8.89647 14.97 8.97015L10.5 13.4402L9.02997 11.9702C8.88779 11.8377 8.69975 11.7656 8.50545 11.769C8.31115 11.7724 8.12576 11.8511 7.98835 11.9885C7.85093 12.1259 7.77222 12.3113 7.76879 12.5056C7.76537 12.6999 7.83749 12.888 7.96997 13.0302L9.96997 15.0302C10.1106 15.1706 10.3012 15.2495 10.5 15.2495C10.6987 15.2495 10.8893 15.1706 11.03 15.0302L16.03 10.0302Z" fill="#E2F20F"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12C1.25 17.937 6.063 22.75 12 22.75C17.937 22.75 22.75 17.937 22.75 12C22.75 6.063 17.937 1.25 12 1.25ZM2.75 12C2.75 9.54675 3.72455 7.19397 5.45926 5.45926C7.19397 3.72455 9.54675 2.75 12 2.75C14.4533 2.75 16.806 3.72455 18.5407 5.45926C20.2754 7.19397 21.25 9.54675 21.25 12C21.25 14.4533 20.2754 16.806 18.5407 18.5407C16.806 20.2754 14.4533 21.25 12 21.25C9.54675 21.25 7.19397 20.2754 5.45926 18.5407C3.72455 16.806 2.75 14.4533 2.75 12Z" fill="#E2F20F"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
  .active {

    height: 60px;
    background-color: #0C4651;


  }
`;

export default EditGoal;

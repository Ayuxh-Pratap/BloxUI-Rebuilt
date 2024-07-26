import React from 'react'
 
export default function Hero2() {

    const googleDriveImage = 'https://drive.google.com/uc?export=view&id=1tWYeYW7LkZiX4bBE7rFANWKFSZcg7d0C';

    return (
        <div>
            <nav className='flex items-center justify-between w-full h-[10vh] px-[5vw] py-[0vw]'>
                <div className='flex items-center gap-[2vw]'>
                    <i class="ri-menu-2-line"></i>
                    <a href="#" className='no-underline text-[#333]'>Home</a>
                    <a href="#" className='no-underline text-[#333]'>Buy</a>
                    <a href="#" className='no-underline text-[#333]'>Sell and Rent</a>
                    <a href="#" className='no-underline text-[#333]'>Our Project</a>
                </div>
                <div className='text-[1.5vw] font-semibold'>
                    BloxUI.
                </div>
                <div className='flex items-center gap-[2vw]'>
                    <a href="#" className='no-underline text-[#333]'>Join with Us</a>
                    <a href="#" className='no-underline text-[#333]'>Contact</a>
                    <a href="#" className='no-underline text-[#333]'>About</a>
                    <button className='px-[1.8vw] py-[0.8vw] bg-none border-[1px] border-[solid] border-[#3FAD6B] rounded-[50px] text-[0.8vw] [transition:all_cubic-bezier(0.19,_1,_0.22,_1)0.5s]'>Login</button>
                </div>
            </nav>
            <div className='flex justify-center w-full h-[90vh] bg-[url({googleDriveImage})]'>
                <div className='flex items-center justify-center flex-col gap-[5vh] w-[95%] h-full rounded-[50px]'>
                    <h1 className='text-[5vw] text-[#fff] text-center'>Buy and Sell, Rent,<br />Cooperate, Property</h1>
                    <p className='text-[1vw] text-[#fff]'>Made by BloxUI under Free to Use Section Tag-herofu1 </p>
                    <div className='w-[35vw] h-[25vh] bg-gray-100/40 backdrop-blur-lg rounded-[10px] flex items-center justify-center flex-col gap-[5vh]'>
                        <div className='flex items-center justify-center gap-[3vw] w-full'>
                            <a href="#" className='flex items-center justify-center gap-[0.5vw] no-underline text-[#333] text-[1vw] px-[0vw] py-[0.5vw]'>
                                <i class="ri-home-heart-fill"></i>
                                <h5>House</h5>
                            </a>
                            <a href="#" className='border-b-[1px_solid_#333] text-[#000] flex items-center gap-2'>
                                <i class="ri-building-line"></i>
                                <div className='h-2 w-2 rounded-full bg-green-400'></div>
                                <h5>Apartament</h5>
                            </a>
                            <a href="#">
                                <i class="ri-community-line"></i>
                                <h5>Office</h5>
                            </a>
                            <a href="#">
                                <i class="ri-building-4-line"></i>
                                <h5>ShopHouse</h5>
                            </a>
                        </div>
                        <div className='flex justify-center gap-[2vw] text-[1vw] outline-[none]'>
                            <div className='flex flex-col'>
                                <label for="city">City</label>
                                <select name="city" id="city" className='mt-[1vh] w-[10vw] h-[5vh] px-[1vw] py-[0vw] rounded-[50px] border-[1px] border-[solid] border-[#3FAD6B] bg-[#ffffff]'>
                                    <option value="Bhopal">Bhopal</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Ara">Ara</option>
                                    <option value="Banglore">Banglore</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Jabalpur">Jabalpur</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <label for="type">Type</label>
                                <select name="type" id="type" className='mt-[1vh] w-[10vw] h-[5vh] px-[1vw] py-[0vw] rounded-[50px] border-[1px] border-[solid] border-[#3FAD6B] bg-[#ffffff]'>
                                    <option value="Vintage">Vintage</option>
                                    <option value="Couple">Couple</option>
                                    <option value="Ara">Ara</option>
                                    <option value="Banglore">Banglore</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Jabalpur">Jabalpur</option>
                                </select>
                            </div>
                            <div className='flex flex-col'>
                                <div className='h-full'></div>
                                <button className='px-[2.5vw] py-[0.4vw]  rounded-[50px] h-[5vh] border-[none] bg-[#3FAD6B] text-[#fff] text-[0.8vw]'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
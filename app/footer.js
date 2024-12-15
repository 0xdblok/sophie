import React from 'react'
import x from "./x.png";
import telegram from "./telegram.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer class="flex  font-mono relative flex-col justify-center p-2.5 w-full bg-slate-700 max-md:max-w-full" role="contentinfo">
    <div class="flex absolute inset-0 z-0 w-full min-h-[354px] max-md:max-w-full"></div>
    
    <div class="flex z-0 flex-col justify-center px-36 pt-32 pb-2.5 w-full border-cyan-200 bg-white bg-opacity-0 border-t-[5px] min-h-[334px] rounded-[100px_100px_0px_0px] shadow-[0px_-8px_0px_rgba(30,166,254,1)] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div class="flex flex-col items-center p-2.5 w-full min-h-[197px] max-md:max-w-full">
        <div class="px-2.5 pt-2.5 pb-4 w-full max-w-[1140px] max-md:max-w-full">
          <div class="flex gap-5 max-md:flex-col">
            <div class="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col grow max-md:mt-8">
               
              </div>
            </div>
            
            <div class="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
              <div class="flex flex-col self-stretch my-auto w-full whitespace-nowrap max-md:mt-10 max-md:max-w-full">
                <div class="flex gap-3 self-end text-3xl leading-none text-center text-slate-800">
                  <a href="https://x.com/sophiebyclanker" class="self-stretch px-5 bg-sky-300 border-white border-solid border-[3px] h-[61px] rounded-[40px] w-[61px] hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500" aria-label="Twitter">
                    <Image 
                       className=" pt-4 flex justify-center items-center"
                    width={801}
                    height={801}
                    src={x}
                    alt="ffd" />
                    <span class="sr-only">Twitter</span>
                  </a>
                  <a href="" class="self-stretch px-4 bg-sky-300 border-white border-solid border-[3px] h-[62px] rounded-[40px] w-[62px] hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500" aria-label="Telegram">
                    
                    <Image 
                    className="pt-4 flex justify-center items-center"
                    width={802}
                    height={802}
                    src={telegram}
                    alt="ffd" />
                    <span class="sr-only">Telegram</span>
                  </a>
                </div>
                
                <div class="flex items-center mt-5 text-right text-white">
                  <address class="flex flex-wrap flex-1 shrink gap-1.5 items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full not-italic">
                    <a href="mailto:contact@baseprinter.com" class="text-lg font-bold hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300">
                      contact@sophie.com
                    </a>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p class="text-sm leading-none text-center text-white">
          sophie © All Rights Reserved
        </p>
      </div>
    </div>
  </footer>
  )
}

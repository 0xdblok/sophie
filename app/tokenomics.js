import React from 'react'

export default function Tokenomics() {
  return (
    <section class="flex relative flex-col items-center px-40 py-24 w-full bg-sky-300 max-md:px-5 max-md:max-w-full" aria-labelledby="tokenomics-title">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/638eff12d3d8e801c2fa99da8ae543005bb6a2c73d338a5c973ee06c99704110?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain absolute inset-0 z-0 self-start w-full aspect-[1.93] max-md:max-w-full" alt="Tokenomics Background" />
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e162bdb695c08610f9e936d822ef9bcf41a9e4dbd4d7ecaf1457c385e5999463?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain z-0 max-w-full aspect-[6.58] w-[560px]" alt="Tokenomics Title" />
    <h2 id="tokenomics-title" class="z-0 mt-5 text-3xl font-bold leading-loose text-center text-white">Total Supply: 1,000,000,000</h2>
    
    <div class="z-0 px-px pb-20 mt-5 w-full max-w-[1140px] max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col grow justify-center items-center py-9 pr-24 pl-28 w-full font-bold text-center whitespace-nowrap bg-sky-200 rounded-3xl border-white border-solid border-[3px] min-h-[155px] shadow-[0px_8px_0px_rgba(13,21,28,1)] max-md:px-5 max-md:mt-10">
            <h3 class="text-4xl leading-none uppercase border border-black border-solid text-neutral-900">Symbol</h3>
            <p class="mt-5 text-xl text-white">$SOPHIE</p>
          </div>
        </div>
        
        <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-wrap grow justify-center items-center py-8 pr-5 pl-9 w-full text-xl font-bold leading-8 text-center text-white bg-sky-200 rounded-3xl border-white border-solid border-[3px] min-h-[155px] shadow-[0px_8px_0px_rgba(13,21,28,1)] max-md:pl-5 max-md:mt-10">
            <p class="flex-1 shrink self-stretch px-10 my-auto w-full min-w-[240px] max-md:px-5">
              5% is taxes for USDC reflections
            </p>
          </div>
        </div>
        
        <div class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div class="flex-wrap grow self-stretch py-16 pr-14 pl-16 w-full text-xl font-bold text-center text-white bg-sky-200 rounded-3xl border-white border-solid border-[3px] min-h-[155px] shadow-[0px_8px_0px_rgba(13,21,28,1)] max-md:px-5 max-md:mt-10">
            Presale from GEMPAD
          </div>
        </div>
      </div>
    </div>
  
    <div class="flex z-0 flex-wrap justify-center items-center self-stretch px-5 py-9 mt-5 w-full text-center bg-sky-200 rounded-3xl border-white border-solid border-[3px] min-h-[144px] shadow-[0px_8px_0px_rgba(13,21,28,1)] max-md:max-w-full">
      <div class="flex flex-wrap flex-1 shrink gap-10 items-center self-stretch py-2.5 pr-44 pl-11 my-auto w-full basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
        <h3 class="self-stretch my-auto text-4xl font-bold leading-none uppercase border border-black border-solid text-neutral-900">Token Address</h3>
        <div class="flex flex-col grow shrink justify-center self-stretch p-2 my-auto text-sm text-white border-2 border-white border-solid bg-slate-700 min-w-[240px] rounded-[30px] shadow-[0px_0px_10px_rgba(0,0,0,0.5)] w-[344px]">
          <div class="flex justify-center items-center px-2.5 py-2.5 w-full min-w-[100px]">
            <p class="self-stretch my-auto font-bold select-all">tba</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

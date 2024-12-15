import React from 'react'

export default function About() {
  return (
    <section 
    class="flex relative flex-col justify-center px-40 py-24 w-full text-xl font-bold leading-10 text-center text-white bg-sky-300 max-md:px-5 max-md:max-w-full"
    aria-labelledby="about-title"
  >
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f6397bbc6064dc6fb34436416f3919e061f0370679bdaa54e87d0d511fc4ebc?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
      class="object-contain absolute inset-0 z-0 w-full aspect-[2.82] max-md:max-w-full"
      alt="About Section Background"
    />
    
    <div
      class="flex z-0 flex-col justify-center px-5 py-12 w-full bg-sky-200 rounded-3xl border-white border-solid border-[3px] min-h-[330px] shadow-[0px_8px_0px_rgba(13,21,28,1)] max-md:max-w-full"
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a21e01eb86a62652dbcf8d9009949e4865fb7af6bda6151c8eb3e097e30a0f07?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
        class="object-contain self-center max-w-full aspect-[3.69] w-[325px]"
        alt="About Section Logo"
        id="about-title"
      />
      
      <div 
        class="pr-0.5 pl-px mt-5 w-full max-md:max-w-full"
        role="contentinfo"
      >
        <p class="text-center font-mono">
         Sophie is the meme coin on the Base chain that rewards holders
          with USDC reflections. Enjoy fast, low-cost transactions while earning passive income in a stablecoin. No
          staking required—just hold and profit. Fun meets real value!
        </p>
      </div>
    </div>
  </section>
  )
}

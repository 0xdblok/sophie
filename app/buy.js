import React from 'react'
import Image from "next/image";
import logo from "./logo.jpg";
export default function Buy() {
  return (
<section class="flex flex-col w-full bg-sky-300 max-md:max-w-full" aria-labelledby="how-to-buy-title">
  <div class="flex font-mono relative flex-col justify-center items-center px-20 py-24 w-full min-h-[1444px] max-md:px-5 max-md:max-w-full">
    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7089c1c8fa60b310f0281b45d5c039c1c63b8e938e19a339242975b0e812f40?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-cover absolute inset-0 size-full" alt="How to Buy Background" />
    
    <div class="flex relative flex-col w-full max-w-[1120px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd59d621fc3b6d6faaaae71e5575a9269ca9729d740eac0fd81988e050f30d98?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain self-center max-w-full aspect-[6.85] w-[560px]" alt="How to Buy Title" id="how-to-buy-title" />

      <div class="flex flex-wrap justify-center items-center px-5 py-9 mt-16 bg-sky-200 rounded-3xl border-white border-solid border-[3px] min-h-[235px] shadow-[0px_8px_0px_rgba(13,21,28,1)] max-md:mt-10" role="article">
        <div class="flex gap-5 max-md:flex-col w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/174f918dc9caab7ffde25390bf0d5d951305fd6e2cdcfca6b3617a4d96e7a0a1?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain w-[142px] aspect-[1.01] rounded-[200px]" alt="Create Wallet Icon" />
          <div class="flex flex-col grow">
            <h3 class="text-4xl leading-none uppercase  text-neutral-900">Create a metamask wallet</h3>
            <p class="mt-5 text-xl leading-8 text-white">
              Download MetaMask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to their site.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center items-center px-5 py-9 mt-12 bg-blue-300 rounded-3xl border-white border-solid border-[3px] min-h-[235px] shadow-[0px_8px_0px_rgba(13,21,28,1)] max-md:mt-10" role="article">
        <div class="flex gap-5 max-md:flex-col w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/59ebae100706d6625d27dced7269970f53656cdd9a3c05fbf1dfa8baeb6a5f89?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain w-[142px] aspect-[1.01] rounded-[200px]" alt="Get Base ETH Icon" />
          <div class="flex flex-col grow">
            <h3 class="text-4xl leading-none uppercase text-neutral-900">Get Some Base ETH</h3>
            <p class="mt-5 text-xl leading-8 text-white">
              Have Base ETH in your wallet and swap it in $baseprinter. If you don't have any base, you can buy base from an exchange or cross chain swap and send it to your wallet.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center items-center px-5 py-9 mt-12 bg-sky-200 rounded-3xl border-white border-solid border-[3px] min-h-[265px] shadow-[0px_8px_0px_rgba(13,21,28,1)] max-md:mt-10" role="article">
        <div class="flex gap-5 max-md:flex-col w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0365fa87aaca93d0eeb876d23af326f675f282e70433ccd27264bdee6fcf753?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" class="object-contain w-[142px] aspect-[1.01] rounded-[200px]" alt="Uniswap Icon" />
          <div class="flex flex-col grow">
            <h3 class="text-4xl leading-none uppercase  text-neutral-900">Go to Uniswap</h3>
            <p class="mt-5 text-xl leading-8 text-white">
              Connect to Uniswap. Go Uniswap.net in google chrome or on the browser inside your base Wallet. Connect your wallet. Paste the $baseprinter token address into Uniswap swap and confirm the swap. When base Wallet prompts you for a wallet signature, sign.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center items-center px-5 py-9 mt-12 bg-blue-300 rounded-3xl border-white border-solid border-[3px] min-h-[235px] shadow-[0px_8px_0px_rgba(13,21,28,1)] max-md:mt-10" role="article">
        <div class="flex gap-5 max-md:flex-col w-full">
         
         <Image 
            width={215}
            height={215}
            src={logo}
            alt="ffd" />

          <div class="flex flex-col grow">
            <h3 class="text-4xl leading-none uppercase border border-black border-solid text-neutral-900">Swap base for baseprinter</h3>
            <p class="mt-5 text-xl leading-8 text-white">
              Switch base for $SOPHIE. We have a certain amount of taxes so you need to recheck buying with a specific slippage, although you may need to use slippage during times of market volatility.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

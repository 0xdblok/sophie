import Image from "next/image";
import logo from "./logo.jpg";
import logoc from "./logoc.png";
import sophie from "./sophie.png";
import Footer from './footer';
import Buy from './buy';
import About from './about';
import Tokenomics from './tokenomics';
export default function Home() {
  return (
    <div class="flex flex-col bg-white">
    <nav class="flex bg-[#0149B0] relative flex-col pt-2.5 pr-36 pb-20 pl-36 w-full bg-slate-700 max-md:px-5 max-md:max-w-full" aria-label="Main navigation">
      <div class="flex absolute inset-0 z-0 w-full min-h-[658px] max-md:max-w-full"></div>
      <div class="flex z-0 flex-wrap gap-5 items-center py-2.5 pl-2.5 w-full max-w-[1140px] max-md:max-w-full">
        <div class="flex grow shrink gap-5 self-stretch p-2.5 my-auto max-w-[1140px] min-w-[240px] w-[242px]">
      <Image 
            width={104}
            height={104}
            src={logoc}
            alt="ffd" />
         < Image 
            width={144}
            height={28}
            src={sophie}
            alt="ffd" />
        </div>
        <div class="flex flex-col grow shrink justify-center self-stretch my-auto text-2xl font-bold text-white whitespace-nowrap bg-white bg-opacity-0 min-h-[35px] min-w-[240px] w-[611px] max-md:max-w-full">
          <div class="flex flex-wrap flex-1 gap-8 justify-center px-7 size-full max-md:px-5 max-md:max-w-full">
            <a href="" class="flex flex-col grow shrink justify-center w-[75px] hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300 rounded-md" tabindex="0">
              <div class="flex-1 self-stretch px-4 py-px rounded-md size-full">Home</div>
            </a>
            <a href="" class="flex flex-col grow shrink justify-center w-[75px] hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300 rounded-md" tabindex="0">
              <div class="flex-1 self-stretch px-4 py-px rounded-md size-full">About</div>
            </a>
            <a href="" class="flex flex-col grow shrink justify-center w-[140px] hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300 rounded-md" tabindex="0">
              <div class="flex-1 self-stretch px-4 py-px rounded-md size-full">Tokenomics</div>
            </a>
            <a href="community" class="flex flex-col grow shrink justify-center w-[138px] hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300 rounded-md" tabindex="0">
              <div class="flex-1 self-stretch px-4 py-px rounded-md size-full">Community</div>
            </a>
          </div>
        </div>
        <a href="" class="grow shrink self-stretch py-3.5 pr-10 pl-10 my-auto text-2xl font-bold leading-none text-center bg-white rounded-xl border-solid border-[3px] border-zinc-900 shadow-[0px_4px_0px_rgba(39,64,85,1)] text-zinc-900 w-[136px] max-md:px-5 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300" aria-label="Buy Now">
          Buy Now
        </a>
      </div>
      <div class="z-0 px-2.5 pt-4 pb-1.5 mt-12 max-w-full w-[1140px] max-md:mt-10">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col items-start self-stretch my-auto w-full font-bold leading-none text-white max-md:mt-10 max-md:max-w-full">
              <h1 class="ml-4 text-4xl max-md:ml-2.5">Welcome To</h1>
             <p className=" text-6xl font-mono font-medium text-blue-400  "> Sophie World</p> 


              <p class="mt-5 ml-4 text-2xl max-md:ml-2.5">Print like crazy, only on base</p>
              <div class="flex flex-wrap gap-10 items-start self-stretch mt-9 w-full text-2xl text-center text-zinc-900 max-md:max-w-full">
                <a href="" class="grow shrink self-stretch py-3.5 pr-10 pl-10 bg-white rounded-xl border-solid border-[3px] border-zinc-900 shadow-[0px_4px_0px_rgba(39,64,85,1)] w-[136px] max-md:px-5 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300" aria-label="Buy Now">
                  Buy Now
                </a>
                <a href=""class="grow shrink self-stretch py-3.5 pr-12 pl-12 whitespace-nowrap bg-white rounded-xl border-solid border-[3px] border-zinc-900 shadow-[0px_4px_0px_rgba(39,64,85,1)] w-[136px] max-md:px-5 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300" aria-label="View Charts">
                  Charts
                </a>
              </div>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
            <Image 
            width={1000}
            height={1000} 
            src={logo}
            alt="ffd" />
          </div>
        </div>
      </div>
    </nav>
  <About />

   <Tokenomics /> 
   <Buy />
   
     <Footer />
  </div>
  );
}
 /*<div className="flex justify-center items-center min-h-screen bg-blue-900">
   
      <div className="flex flex-col md:flex-row items-center justify-center p-4">
    
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <Image
            src={logo} 
            alt="Sophie"
            className="rounded-lg shadow-lg max-w-xs"
            width={200}
            height={200}
          />
        </div>

 
        <div className="text-white max-w-lg">
          <h1 className="text-4xl font-semibold mb-4">SOPHIE</h1>
          <p className="text-lg leading-relaxed mb-6">
            It’s not here yet, but we’ll let you in on a secret. It’s coming
            really, really soon. So sit tight and check back in on <b>July 31</b>. You
            just might see something that will blow your socks off!
          </p>
          <p className="text-sm">
            Really excited to get in touch with us? <br />
            Send us an email at{" "}
            <a href="mailto:hello@reallygreatsite.com" className="underline">
              hello@reallygreatsite.com
            </a>
            . Or follow us at{" "}
            <a
              href="https://facebook.com/reallygreatsite"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              @reallygreatsite
            </a>{" "}
            on Facebook and Instagram for updates and news.
          </p>
        </div>
      </div>
    </div>*/
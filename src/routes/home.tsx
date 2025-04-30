import { Sparkles } from "lucide-react";
import Marquee from "react-fast-marquee";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";
import headers1 from "../assets/headers1.jpg";
import headers2 from "../assets/headers2.jpg";
import headers3 from "../assets/headers3.jpg";
import backgroundImage  from "../assets/backgroundImage.avif"
const HomePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
  
<div className="flex lg:flex-row flex-col">
    <div className="lg:w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-4 xl:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block xl:text-6xl">
                Mother hearth host your travel
            </span>
        </h2>
        <p className="text-md mt-4 text-gray-400">
            The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as three of the most magnificient &amp; awe inspiring.
            The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as three of the most magnificient &amp; awe inspiring.
            The state of Utah in the united states is home to lots of beautiful National parks, Bryce national canion park ranks as three of the most magnificient &amp; awe inspiring.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
                <Button type="button" className="bg-gradient-to-r from-gray-500 to-gray-200 text-transparent text-black rounded-lg font-bold text-xl">
                    Get started
                </Button>
            </div>
        </div>
    </div>
    <div className="flex items-center lg:w-1/2 gap-4 p-8 lg:p-10 xl:p-20">
        <img src={headers1} className="w-1/2 border-gray-600 border h-[60vh] rounded-lg" alt="Tree"/>
        <div>
            <img src={headers2} className="mb-8 border border-gray-600 h-[27vh] w-full rounded-lg" alt="Tree"/>
            <img src={headers3} className="rounded-lg border h-[27vh] w-full border-gray-600" alt="Tree"/>
        </div>
    </div>
</div>

 
<section className="px-5 py-10 text-gary-200">
	<div className="lg:container  lg:grid flex sm:flex-row flex-col gap-5 justify-between lg:grid-cols-12 mx-auto gap-y-6 lg:gap-10">
		<div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
			<div className="flex flex-col text-white space-y-8 md:space-y-12">
				<div className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 text-white">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href="#" className="font-serif  hover:underline">Donec sed elit quis odio mollis dignissim eget et nulla.</a>
					<p className="text-xs text-white">47 minutes ago by
						<a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Leroy Jenkins</a>
					</p>
				</div>
				<div className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 text-white">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Ut fermentum nunc quis ipsum laoreet condimentum.</a>
					<p className="text-xs text-white">2 hours ago by
						<a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Leroy Jenkins</a>
					</p>
				</div>
				<div className="flex flex-col space-y-2">
					<h3 className="flex items-center space-x-2 text-white">
						<span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-violet-600"></span>
						<span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
					</h3>
					<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nunc nec ipsum lobortis, pulvinar neque sed.</a>
					<p className="text-xs text-white">4 hours ago by
						<a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Leroy Jenkins</a>
					</p>
				</div>
			</div>
			<div className="flex flex-col w-full text-white space-y-2">
				<div className="flex w-full h-1 bg-opacity-10 bg-violet-600">
					<div className="w-1/2 h-full bg-violet-600"></div>
				</div>
				<a rel="noopener noreferrer" href="#" className="flex items-center justify-between w-full">
					<span className="text-xs font-bold tracking-wider uppercase">See more exclusives</span>
					<svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 strokeCurrent text-violet-600">
						<line x1="5" y1="12" x2="19" y2="12"></line>
						<polyline points="12 5 19 12 12 19"></polyline>
					</svg>
				</a>
			</div>
		</div>
 
    <div
      className="relative hidden lg:flex xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full h-full bg-black/40 flex flex-col items-center justify-end p-6 text-center sm:p-8">
        
        {/* Location Tag */}
        <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 text-gray-200 border-violet-600">
          Paris, France
        </span>

        {/* Live Indicator */}
        <span className="flex items-center mb-4 space-x-2 text-violet-600">
          <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-600">
            <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-600"></span>
          </span>
          <span className="text-sm font-bold">Live</span>
        </span>

        {/* Title */}
        <h1 className="font-serif text-2xl font-semibold group-hover:underline text-gray-200">
          Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec venenatis?
        </h1>
      </div>
    </div>

		<div className=" py-2 xl:col-span-3 lg:col-span-4 text-white block">
			<div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-violet-600">
				<button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 border-violet-600">Latest</button>
				<button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 border- text-white">Popular</button>
			</div>
			<div className="flex flex-col divide-y divide-gray-300">
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src={headers1} />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</a>
						<p className="mt-auto text-xs text-white">5 minutes ago
							<a rel="noopener noreferrer" href="#" className="block text-blue-600 lg:ml-2 lg:inline hover:underline">Politics</a>
						</p>
					</div>
				</div>
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src={headers2} />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Nulla consectetur efficitur.</a>
						<p className="mt-auto text-xs text-white">14 minutes ago
							<a rel="noopener noreferrer" href="#" className="block text-blue-600 lg:ml-2 lg:inline hover:underline">Sports</a>
						</p>
					</div>
				</div>
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src={headers3} />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Vitae semper augue purus tincidunt libero.</a>
						<p className="mt-auto text-xs text-white">22 minutes ago
							<a rel="noopener noreferrer" href="#" className="block text-blue-600 lg:ml-2 lg:inline hover:underline">World</a>
						</p>
					</div>
				</div>
				<div className="flex px-1 py-4">
					<img alt="" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-gray-500" src={backgroundImage} />
					<div className="flex flex-col flex-grow">
						<a rel="noopener noreferrer" href="#" className="font-serif hover:underline">Suspendisse potenti.</a>
						<p className="mt-auto text-xs text-white">37 minutes ago
							<a rel="noopener noreferrer" href="#" className="block text-blue-600 lg:ml-2 lg:inline hover:underline">Business</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>



      </Container>

      {/* marquee section */}
      <div className=" w-full my-12">
        <Marquee pauseOnHover>
  
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <Container className="">
      <div >
         
         <div className="container flex justify-center mx-auto pt-16">
             <div>
                 <p className="text-white font-bold text-5xl text-center underline underline-offset-4  mb-5 lg:mb-10 ">OUR TEAM</p>
                 <h1 className="xl:text-3xl text-2xl  text-center text-gray-200 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
             </div>
         </div>
         <div className="w-full className= px-10 pt-10">
             <div className="container mx-auto">
                 <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                     <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                         <div className="rounded overflow-hidden shadow-md bg-gradient-to-r from-gray-500 to-gray-200">
                             <div className="absolute -mt-20 w-full flex justify-center">
                                 <div className="h-32 w-32">
                                     <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                 </div>
                             </div>
                             <div className="px-6 mt-16">
                                 <h1 className="font-bold text-3xl text-center mb-1">Andres Berlin</h1>
                                 <p className="text-gary-200 text-sm text-center">Chief Executive Officer</p>
                                 <p className="text-center text-white text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                                 <div className="w-full flex justify-center pt-5 pb-5">
                                     <a href="javascript:void(0)" className="mx-5">
                                         <div aria-label="Github" role="img">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                                 <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                             </svg>
                                         </div>
                                     </a>
                                     <a href="javascript:void(0)" className="mx-5">
                                         <div aria-label="Twitter" role="img">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                                                 <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                             </svg>
                                         </div>
                                     </a>
                                     <a href="javascript:void(0)" className="mx-5">
                                         <div aria-label="Instagram" role="img">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                             </svg>
                                         </div>
                                     </a>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                         <div className="rounded overflow-hidden shadow-md bg-gradient-to-r from-gray-500 to-gray-200">
                             <div className="absolute -mt-20 w-full flex justify-center">
                                 <div className="h-32 w-32">
                                     <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt="Display Picture of Silene Tokyo" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                 </div>
                             </div>
                             <div className="px-6 mt-16">
                                 <h1 className="font-bold text-3xl text-center mb-1">Silene Tokyo</h1>
                                 <p className="text-gary-200 text-sm text-center">Product Design Head</p>
                                 <p className="text-center text-white text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                                 <div className="w-full flex justify-center pt-5 pb-5">
                                     <a href="javascript:void(0)" className="mx-5">
                                         <div aria-label="Github" role="img">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                                 <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                             </svg>
                                         </div>
                                     </a>
                                     <a href="javascript:void(0)" className="mx-5">
                                         <div aria-label="Twitter" role="img">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                                                 <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                             </svg>
                                         </div>
                                     </a>
                                     <a href="javascript:void(0)" className="mx-5">
                                         <div aria-label="Instagram" role="img">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                             </svg>
                                         </div>
                                     </a>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                         <div className="rounded overflow-hidden shadow-md bg-gradient-to-r from-gray-500 to-gray-200">
                             <div className="absolute -mt-20 w-full flex justify-center">
                                 <div className="h-32 w-32">
                                     <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt="Display Picture of Johnson Stone" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                 </div>
                             </div>
                             <div className="px-6 mt-16">
                                 <h1 className="font-bold text-3xl text-center mb-1">Johnson Stone</h1>
                                 <p className="text-gary-200 text-sm text-center">Manager Development</p>
                                 <p className="text-center text-white text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                                 <div className="w-full flex justify-center pt-5 pb-5">
                                     <a href="javascript:void(0)" className="mx-5">
                                         <div aria-label="Github" role="img">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github">
                                                 <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                             </svg>
                                         </div>
                                     </a>
                                     <a href="javascript:void(0)" className="mx-5">
                                         <div aria-label="Twitter" role="img">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-twitter">
                                                 <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                             </svg>
                                         </div>
                                     </a>
                                     <a href="javascript:void(0)" className="mx-5">
                                         <div aria-label="Instagram" role="img">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram">
                                                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                             </svg>
                                         </div>
                                     </a>
                                 </div>
                             </div>
                         </div>
                     </div>
               
                 </div>
             </div>
         </div>

 </div>
      </Container>
    </div>
  );
};

export default HomePage;

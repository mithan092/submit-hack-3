import Link from "next/link"
export default function Footer(){
  return (
            <div className=" w-[1440px] h-[50px] px-full ">
                <footer className="flex bg-[#2A254B] text-white body-font bg-[#000000] h-[230px] w-[1340px]  gap-2">
                    <div className="  font-small text-[#FAFAFA] tracking-widest text-sm mb-3 flex"> </div>
                   <div className="lg:w-1/6 md:w-1/2 w-[1240px] h-[50px] px-4 flex">
                     
                         <ol className=" font-small text-white list-none py-4 px-2 mb-14 h-[20px] w-[123px]">
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Menu</a> </li>
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">New arrivals </a></li>
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Best sellers</a> </li>
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Recently viewed</a></li>
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Popular this week</a> </li>
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">All products</a> </li>
                        </ol>
                    </div>
                     <div className="lg:w-1/6 md:w-1/2 w-full px-4">
           
                        <ol className=" font-small text-white list-none py-4 px-2 mb-14 h-[20px] w-[123px]">
                          <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Categories </a></li>
                          <li> <a href="#" className="hover:text-gray-400 font-[Clash Display]">Crockery</a></li>
                          <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">fancy styles Furniture</a> </li>
                          <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Homeware</a></li>
                          <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Plant pots</a> </li>
                          <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">New Styles Chairs</a> </li>
                        </ol>
                     </div>
                    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <div className="list-none mb-10">
                             <ol className=" font-small text-white list-none py-4 px-2 mb-14 h-[20px] w-[123px]">
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Our Company</a> </li>
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">About us </a></li>
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Vacancies</a> </li>
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Contact us</a></li>
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Privacy</a> </li>
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Garainty</a> </li>
                         <li><a href="#" className="hover:text-gray-400 font-[Clash Display]">Returns policy</a> </li>
                        </ol>
                   </div>
                     </div>
  
                           
                              <div className="container mx-auto py-4 px-5 flex-col sm:flex-row  gap-6 items-center justify-center">
                              <p className="text-[#2A254B] text-sm justify-center ">. </p>
                              <p className="text-[#2A254B] text-sm justify-right ">. </p>
                              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Join our Mailing list 
                                 </h2>
                             
                                 <input type="email" placeholder="Inter Your email@"
                                  className=" items-[center] w-[500px] h-[50px] bg-gray-100 bg-opacity-20 rounded border border-grey py-2 px-4 text-gray-700 outline-none focus:bg-transparent focus:ring-2 focus:ring-indigo-300"/>          
                <button className="bg-white text-[#2A254B] font-medium h-[50px] py-2 px-4 rounded hover:bg-indigo-700 hover:text-white transition">
                Sign Up</button>
                     </div>                     </footer>
                         <div className="bg-[#4E4D93] w-full h-[1px]"></div>


                           <div className=" w-[1340px] h-[56px]">
                             <footer  >
                             <div className=" flex bg-[#2A254B]">
        <div className="container py-5  px-5 mx-auto flex flex-col sm:flex-row items-center">
          <p className="text-sm text-white text-center sm:text-left">
            Copyright 2022 Avion LTD-<a href="mk.png" className="hover:text-gray-400"> Develop by Mithan kumar</a>
          </p></div>
                                    <div className=" flex flex gap-3 mt-4 sm:mt-0 sm:ml-auto flex justify between text-white bg-[#2A254B] items-right  px-6 items-center ">
                                      <div><a href="#" className="hover:text-gray-400"><i className="bi bi-linkedin"></i></a></div> 
                                      <div><a href="#" className="hover:text-gray-400"><i className="bi bi-facebook"></i></a></div>
                                      <div><a href="#" className="hover:text-gray-400"><i className="bi bi-instagram"></i></a></div>
                                      <div><a href="#" className="hover:text-gray-400"><i className="bi bi-skype"></i></a></div>
                                      <div><a href="#" className="hover:text-gray-400"><i className="bi bi-twitter"></i></a></div>
                                      <div><a href="#" className="hover:text-gray-400"><i className="bi bi-pinterest"></i></a></div>

                                   </div>
                                   </div>

                                  </footer>
                           </div>
                           </div>
  )
}
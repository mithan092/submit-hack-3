

export default function Header() {
    return (
      <div>
            <div className="flex bg-white justify-between px-[2%] py-[4px] items-[center]  w-[1340px] h-[50px]">
              <div className= "flex items-center" >  
                  <div><a href="#" className="hover:text-gray-400"><i className="bi bi-search"></i></a></div>
             </div>

            <div className=" flex font-bold items-center ">
               <p>Avion</p>
            </div>

           <div className="flex gap-2  px-[2%] py-[4px] h-[10px] w-[8px]">
                <div><a href="#" className="hover:text-gray-400"><i className="bi bi-cart3"></i></a></div>
                <div><a href="#" className="hover:text-gray-400"><i className="bi bi-person-circle"></i></a></div>
                
            </div>
            </div>
            <div className="bg-[#4E4D93] w-full h-[1px]"></div>
                 
            <div className="flex bg-white flex justify-between px-[20%] py-[1%]  w-[1340px] h-[50px] ">
            <p><a href="#" className="hover:text-gray-400 font-[Clash Display]">Plants pots</a></p>
            <p><a href="#" className="hover:text-gray-400 font-[Clash Display]">Ceramics</a></p>
            <p><a href="#" className="hover:text-gray-400 font-[Clash Display]">Tables</a></p>
            <p><a href="#" className="hover:text-gray-400 font-[Clash Display]">Chairs</a></p>
            <p><a href="#" className="hover:text-gray-400 font-[Clash Display]">Crockery</a></p>
            <p><a href="#" className="hover:text-gray-400 font-[Clash Display]">Tablewere</a></p>
            <p><a href="#" className="hover:text-gray-400 font-[Clash Display]">Cultery</a></p>
            </div>
         
      </div>
       
      );
  }
  
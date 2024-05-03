import React,{useEffect, useState} from 'react';
import axios from "axios";

export default function  () {



    //states for the form fields

    const[date,setDate]=useState(null);
    const[sourceCurrency,setSourceCurrency]=useState("");
    const[targetCurrency,setTargetCurrency]=useState("");
    const[amountInSourceCurrency,setamountInSourceCurrency]=useState(0);
    const[amoutInTargetCurrency,setamoutInTargetCurrency]=useState(0);
    const[currncyNames,setCurrencyNames]=useState([]);


    //hSubmit method

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log(date,sourceCurrency,targetCurrency,amountInSourceCurrency);
    }


    //get all currency names

    useEffect(()=>{

      const getCurrencyNames=async() =>{


        try{
          const response =await axios.get("http://localhost:5000/getAllCurrencies");

          setCurrencyNames(response.data);

        }catch(err){
          console.error(err);

        }



      }


      getCurrencyNames();

    },[])







  return (
    <div className="mt-5 ">
        <h1 className ="lg:mx-34      text-5xl font-bold text-green-500">Covert Your Currencies Today </h1>
        <p className ="lg:mx-34 opacity-30 py-6"  >Instantly convert between 150+ currencies with real-time rates. Easy-to-use interface for quick conversions on the fly. Save your favorite conversions for future reference.
             Perfect for travelers, online shoppers, and anyone dealing with multiple currencies.</p>






        <div className="mb-5 flex items-center justify-center flex-col ">
            <section className="w-full lg:w-1/2">

          <form onSubmit={handleSubmit}>
             <div className="mb-4">
              <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                <input

                onChange={(e)=>setDate(e.target.value)}
                
                
                type="date" id={date}  name={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name@flowbite.com" required />
             </div>




          <div className="mb-4">
             <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>

                <select
                
                onChange={(e)=>setSourceCurrency(e.target.value)}
                
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  id={sourceCurrency}  name={sourceCurrency} value={sourceCurrency}>


                   <option>Select the Source Currency</option>

        
                </select> 
          </div>




         <div className="mb-4">
          <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">target Currency</label>

             <select 
              onChange={(e)=>setTargetCurrency(e.target.value)}
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"  id={targetCurrency}  name={targetCurrency} value={targetCurrency}>


               <option>Select the Target Currency</option>

        
           </select> 
        </div> 



        <div className="mb-4">
          <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Source Currency</label>
              <input 
                  onChange={(e)=>setamountInSourceCurrency(e.target.value)}
              type="number" id={amountInSourceCurrency} name={amountInSourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="enter amount" required />
         </div>



          <button className= "bg-green-700   hover:bg-green-800 text-white font-medium rounded-md
           py-2 px-4 ">Get The Target Currency
           </button>



         </form>
         </section>
        </div>
        </div>
  )
}

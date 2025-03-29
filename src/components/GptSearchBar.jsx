import React from 'react'
import lang from "../utils/languageConstants";
import { useSelector } from 'react-redux';
import { useRef } from 'react';


const GptSearchBar = () => {

    const langKey=useSelector((store)=>store.config.lang)
    const searchText=useRef(null);


    const handleGptSearchClick =async()=>{
        console.log( searchText.current.value);
        

        const gptResults = await gptResults.chat.completions.create({
            model: 'gpt-4o',
            messages: [
              { role: 'developer', content: 'Talk like a pirate.' },
              { role: 'user', content: 'Are semicolons optional in JavaScript?' },
            ],
        });
        
    }


  return (
    <div className='pt-[10%] flex justify-center'>
      <form className= "w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input type='text'
        className='p-4 m-4 bg-white col-span-9'
        placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className='py-2 px-4 bg-red-700 text-white col-span-3 m-4 rounded-lg' 
          onClick={handleGptSearchClick}>
            {lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;

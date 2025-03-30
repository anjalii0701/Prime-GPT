import React from 'react'
import lang from "../utils/languageConstants";
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import openai from "../utils/openai"

const GptSearchBar = () => {

    const langKey=useSelector((store)=>store.config.lang)
    const searchText=useRef(null);


    const handleGptSearchClick =async()=>{
        console.log( searchText.current.value);
        
        const gptQuery ="Act as a Movie Recommendation system and suggest some movie for the query :" + searchText.current.value + ". only give me names of 5 movies , comma seperated like the example result given ahead.Example Result :Gadar , Sholay ,Don ,Koi Mil Gaya ,Kabhi Khushi Khabhi Gam"


        const gptResults = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
              { role: 'user', content: gptQuery}
            ],
        });
       
        console.log(gptResults.choices[0]?.message.content);

        const gptMovies =gptResults.choices?.[0]?.message?.content.split(",");
        
        
    }


  return (
    <div className='pt-[10%] flex justify-center'>
      <form className= "w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input type='text'
        ref={searchText}
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

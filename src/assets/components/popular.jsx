import React from "react"
import { useState , useEffect , useRef } from "react"
import arrowRight from "../../assets/arrow-right.svg"

const Popular = () =>{

    const [popularAnime,setPopularAnime] = useState([])
    function Populate(){

    }
    async function getPopular(){
        try{
            const response = await fetch('https://api.jikan.moe/v4/top/anime')
            response.json().then(responseJson => {
              setPopularAnime(responseJson.data)
              console.log(popularAnime);
            });
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
      getPopular()
    },[])
  const sectionRef = useRef(null);

  const handleButtonClick = () => {
    sectionRef.current.scrollLeft += 280;
  };

    return (
        <div>
          <p className="text-left text-2xl font-bold mb-3">Popular Animes</p>
          <section ref={sectionRef} className="scroll-smooth relative flex flex-row gap-1 overflow-x-scroll overflow-y-hidden">
            <button className=" cursor-pointer h-[320px] rounded-r-lg fixed bg-slate-400 w-12 z-10 right-0 text-xl" onClick={handleButtonClick} alt="">
              <img className="scale-[.6]" src={arrowRight} alt="" />
            </button>
            {
              popularAnime.map(anime =>{
                return(
                  <article className=" relative min-w-[255px] max-w-[260px] min-h-[318px] max-h-[320px] ">
                    <span className="w-10 h-10 bg-black text-white absolute top-0 left-0 rounded-l-lg">{anime.rank}</span>
                      <img className="rounded-lg" src= {anime.images.jpg.image_url} alt="" />
                  </article>
                )
              })
            }
          </section>
        </div>
        
        
    )
}


export default Popular
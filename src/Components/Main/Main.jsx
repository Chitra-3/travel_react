import React,{useEffect} from 'react'
import './Main.scss'
import img from '../../Assets/img(1).jpeg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img2 from '../../Assets/img(2).jpeg'
import img3 from '../../Assets/img(3).jpeg'
import img4 from '../../Assets/img(4).jpeg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpeg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpeg'
import img9 from '../../Assets/img(9).jpeg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[{
  id:1,
  imgSrc:img,
  desTitle:'Bora Bora',
  location:'New Zealand',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'The epitome of romance,Bora Bora is one of the best travel destinations in the World.This place is known for its luxurious stays and adventurous activities.'
},
{
  id:2,
  imgSrc:img2,
  desTitle:'Machu Picchu',
  location:'Peru',
  grade:'CULTURAL RELAX',
  fees:'$600',
  description:'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called last city of Incas.This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
},
{
  id:3,
  imgSrc:img3,
  desTitle:'Great Barrier Reef',
  location:'Australia',
  grade:'CULTURAL RELAX',
  fees:'$700',
  description:'One of the most remarkable Australian natural gifts is the Great Barrier Reef.The hallmark of this place is "Lavish" and "beauty".Always interesting to be in this place.'
},
{
  id:4,
  imgSrc:img4,
  desTitle:'Cappadocia',
  location:'Turkey',
  grade:'CULTURAL RELAX',
  fees:'$800',
  description:'According to the World Tourists Ranking,45 Million people visit Turkey each year,and from that about 2 Million come to visit  Cappadocia.This place is known for its luxurious stays and adventurous activities.'
},
{
  id:5,
  imgSrc:img5,
  desTitle:'Guanajuato',
  location:'Mexico',
  grade:'CULTURAL RELAX',
  fees:'$1100',
  description:'A city in central Mexico,Guanajuato is known for its history of silver mining and colonial architecture.The houses in the city are very attractively painted with the most bright colors available.Always welcome.'
},
{
  id:6,
  imgSrc:img6,
  desTitle:'Cinque Terre',
  location:'Italy',
  grade:'CULTURAL RELAX',
  fees:'$840',
  description:'The vibrant house of the houses are its benchmark and explain the beauty of this place.Also,if you are a foodie and love seafood,you will be exhilarated with the choice you are about to get here.Happy exploring great food!'
},
{
  id:7,
  imgSrc:img7,
  desTitle:'Angkor Wat',
  location:'Cambodia',
  grade:'CULTURAL RELAX',
  fees:'$790',
  description:'Angkor Wat represents the entire range of Khmer art from the 9th to 15th century.This temple is considered the heart and soul of Cambodia.This place is known for its luxurious stays and adventurous activities.'
},
{
  id:8,
  imgSrc:img8,
  desTitle:'Taj Mahal',
  location:'India',
  grade:'CULTURAL RELAX',
  fees:'$900',
  description:'An immense mausaleum of white marble,built-in Agra by Mughal emperor Shah Jahan in memory of his wife Muntaz,the monument is breathtakingly beautiful.This place is known for its luxurious stays and adventurous activities'
},
{
  id:9,
  imgSrc:img9,
  desTitle:'Bali Island',
  location:'Indonesia',
  grade:'CULTURAL RELAX',
  fees:'$500',
  description:'Bali is an Indonesian Island and one of the best holiday destination in the Indonesian archipelago.Bali is known for its volcanic mountains,history,art&culture,food,temples and beautiful sandy beaches.'
}
]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
},[])
  return (
    <section className='main container section'>


        <div className="secTitle">
          <h3 data-aos='fade-right' className="title">
            Most visited destinations
          </h3>
        </div>

        <div className="secContent grid">
            {
              Data.map(({id,imgSrc,desTitle,location,grade,fees,description})=>{
                return(
                  <div key={id} data-aos='fade-up' className="singleDestination">
                      <div className="imageDiv">
                        <img src={imgSrc} alt={desTitle} />
                      </div>

                      <div className="cardInfo">
                        <h4 className="desTitle">{desTitle}</h4>
                        <span className="continent flex">
                          <HiOutlineLocationMarker className='icon'/>
                          <span className='name'>{location}</span>
                        </span>

                        <div className="fees flex">
                          <div className="grade">
                            <span>{grade}<small>+1</small></span>
                          </div>
                          <div className="price">
                            <h5>{fees}</h5>
                          </div>
                        </div>

                        <div className="desc">
                          <p>{description}</p>
                        </div>

                        <button className='btn flex'>
                          DETAILS <HiOutlineClipboardCheck className='icon'/>
                        </button>
                      </div>

                  </div>
                )
            })
          }
        </div>

    </section>
  )
}

export default Main
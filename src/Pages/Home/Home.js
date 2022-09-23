import './Home.scss'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import Posters from '../../Assets/Movie-Posters/Posters'
import ShaunPoster from '../../Assets/Movie-Posters/Shaun of the dead poster.jpg'
import HotPoster from '../../Assets/Movie-Posters/Hot Fuzz poster.jpg'
import EndPoster from '../../Assets/Movie-Posters/Worlds end poster.jpg'
import BabyPoster from '../../Assets/Movie-Posters/Baby-Driver-Poster.jpg'

function Home() {
    const[width, setWidth] = useState()

    const caroesel = useRef()

    useEffect(() =>{
        console.log(caroesel.current.scrollWidth, caroesel.current.offsetWidth)
        setWidth(caroesel.current.scrollWidth - caroesel.current.offsetWidth)
      }, [])
  return (
    <div className="home">
      {/* <iframe src="https://giphy.com/embed/H62QNi23QLLlF8Ly9i" width="280" height="280" frameBorder="" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/workingtitlefilms-simon-pegg-shaun-of-the-dead-nick-frost-H62QNi23QLLlF8Ly9i"></a></p> */}
      <motion.div 
                ref={caroesel} 
                whileTap={{cursor: "grabbing"}}
                className="carousel">
                    <motion.div
                    drag='x'
                    dragConstraints={{right: 0, left: -width}}
                    className="carousel__inner">
                      <motion.div className='carousel__poster'>
                        <Link to='/shaun'>
                          <img src={ShaunPoster} />
                          <h2 className='arousel_title'>Shaun of the Dead</h2>
                        </Link>
                        </motion.div>
                      <motion.div className='carousel__poster'>
                        <Link to='/hotfuzz'>
                          <img src={HotPoster} />
                          <h2 className='carousel_title'>Hot Fuzz</h2>
                        </Link>
                        </motion.div>
                      <motion.div className='carousel__poster'>
                        <Link to='/worldsend'>
                          <img src={EndPoster} />
                          <h2 className='arousel_title'>The Worlds End</h2>
                        </Link>
                        </motion.div>
                      <motion.div className='carousel__poster'>
                        <Link to='/worldsend'>
                          <img src={BabyPoster} />
                          <h2 className='arousel_title'>Baby Driver</h2>
                        </Link>
                        </motion.div>
                    </motion.div>
            </motion.div>
      <div className='button-div'>
        <Link to='/about'>
        <button className='button-div__btn'>About</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
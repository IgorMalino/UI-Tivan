import React, { useEffect, useState } from 'react';
import useWindowDimensions from '../../utils/windowDimensions';
import BigSize from '../../assets/img/bigSize.png'
import BigSizeClose from '../../assets/img/bigSizeClose.png'
import BigSizeLoading from '../../assets/img/bigSizeLoading.png'
import SmallSize from '../../assets/img/smallSize.png'
import SmallSizeClose from '../../assets/img/smallSizeClose.png'
import SmallSizeLoading from '../../assets/img/smallSizeLoading.png'
import {Link} from 'react-router-dom'
import i18n from 'i18next'
import {useLocation} from 'react-router-dom'
import {ConnectWalletContent} from '../connectWallet/ConnectWallet'
import { db } from '../../initializeFirebase';
import ReactHtmlParser from 'react-html-parser';
import card3 from '../../assets/img/card_3.png'
import card4 from '../../assets/img/card_4.png'
import archibox from "../../assets/img/archibox.png"
import bank from "../../assets/img/bank.png"
import './contentWindow.css'
import 'animate.css';
import News from '../news/News';

const ContentWindow = (props) => {

    const fetchBlogs= async (current) =>{
        const response= await db.collection('documentContent').doc(current).get();
        setData(response.data())
    }

    const [selected, setSelected] = useState("")
    const [data, setData] = useState()
    const {width, height} = useWindowDimensions()
    const location = useLocation()
    


    useEffect(() => {
        const path = location.pathname.split(`/${i18n.language}/`)[1]
        setSelected(path)
        fetchBlogs(path[0].toUpperCase() + path.slice(1))
        // setData(resData)
    }, [])

    const renderContentWindowContent = (selected) => {
        console.log(selected, "asd")
        switch (selected) {
            case 'connectWallet':
            return <ConnectWalletContent />
            break;
            case 'gallery':
            return ''
            break;
            case 'arena':
            return ''
            break;
            case 'bank':
            return ''
            break;
            case 'market':
            return ''
            break;
            case 'base':
            return ''
            break;
            case 'labs':
            return ''
            break;
            case 'wiki':
            return ''
            break;
            case 'news':
            return <News />
            break;
            default:
            console.log('Sorry, we are out of ' + selected + '.');  
          }
    }

    return (
        <>
        
        <div
        className='mainContent'
        >   
            {width > 800 ? <>
                        <img className='bigSizeImg' src={BigSize} />
                        <Link to={`/${i18n.language}`}>
                            <img className='bigSizeImgClose' src={BigSizeClose} />
                        </Link>
                        <img className='bigSizeImgLoading' src={BigSizeLoading} />
                    </> : <>
                        <img className='smallSizeImg' src={SmallSize} />
                        <Link to={`/${i18n.language}`}>
                            <img className='smallSizeImgClose' src={SmallSizeClose} />
                        </Link>
                        <img className='smallSizeImgLoading' src={SmallSizeLoading} />
                    </>
            }
            
            <div style={{width: width < 800 && "70%"}} className="content">
                {selected && renderContentWindowContent(selected)}
                {data && <div className={`${selected === "about" && "contentWindow_content"} animate__animated animate__fadeInUp`}>{ReactHtmlParser(data[i18n.language])}</div>}
                {console.log(data?.en)}

            </div>

        </div>
        </>
    )
}

export default ContentWindow
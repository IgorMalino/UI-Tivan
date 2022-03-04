import React from 'react';
import minimapBackground from '../../assets/img/mapDetails.png'
import './minimapMenu.css'

const content_item_cont = {
    communication: "communication",
    gallery: "gallery",
    arena: "arena",
    bank: "bank",
    market: "market"
}

const MinimapMenu = () => {
    return (
        <>
        <div className='minimapBackground'>
          <img src={minimapBackground} />
        </div>
        
        <div className='minimap-block'>
                <div className='minimap-menu'>
                                <div className='minimap-left'>
                                <div className='minimap-left-header'>
                                        <p>Game</p>
                                </div>
                                <div className='minimap-left-links'>
                                        <a>GALLERY</a>
                                        <a>ARENA</a>
                                        <a>BANK</a>
                                        <a>MARKET</a>
                                </div>
                                </div>          
                                <div id="minimap">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px"
                                y="0px" viewBox="0 0 500 250" enableBackground="new 0 0 500 250"
                                >
                                <path fill="#00CCFF" className="animate_stroke" d="M500,60c-2.2,0-4.3,0-5.7,0c-2.8,1.2-5,2.1-7.3,3c-2.6-3.2-5.5,1.4-8.4-0.2c-0.9,1-1.7,1.8-2.5,2.7
                                        c2.2,1.9,0.1,3.6-0.5,5.4c-0.6,0-1.3,0-1.7,0c-1.4,0.3-0.4,2.3-2.4,2.2c-0.8-0.1-1.6,1.5-2.5,2.3c-0.8,0.7-1.7,1.2-3,1.2
                                        c0.7-0.8,1.3-1.6,1.6-1.9c-0.3-2.7-0.6-5.1-0.9-7.4c3.9-2,7.5-3.9,11.1-5.8c0-0.4-0.1-0.8-0.1-1.5c-1.5,0.7-2.8,1.4-4.2,2.1
                                        c-2.2-1-4.4-2-6.6-0.2c-0.7,0.6-1.3,1.5-2.1,1.9c-0.8,0.4-1.7,0.5-3,0.9c-4-1.8-8.7-0.3-12.9-0.9c-3.7,1.6-6.2,4.8-10.1,5.5
                                        c0.1,0.5,0.1,1,0.3,1.8c1-0.4,1.8-0.8,2.7-1.2c1.8,0.7,3.6,1.4,5.5,2.1c0.5-0.4,0.8-0.7,1.5-1.4c0.8,2.4,1.5,4.6,2.2,6.9
                                        c-0.7,0.2-1.3,0.4-2.2,0.8c0.2,1.1,0.4,2.2,0.7,3.5c-0.2,0-0.6,0.1-1.5,0.3c0-2.4,0-4.6,0-6.9c-0.8-0.1-1.2-0.2-1.9-0.3
                                        c0,1.2,0,2.3,0,3.1c-3.1,3.1-5.9,5.9-9.1,9c-1.3,0-3.1,0-5,0c-0.6,1-1,2.1-1.7,2.9c-0.7,0.7-1.7,1.2-2.9,1.9
                                        c1.3,1.4,2.3,2.6,3.6,3.9c-1.2,2.6-3.4,3.2-6.5,3.1c0.6-1.2,1-2.1,1.3-2.8c-0.9-1.7-1.7-3.3-2.7-5.2c-1.2,0.6-2.5,1.2-4,2
                                        c-0.1-0.9-0.3-1.8-0.4-2.8c-1,0.5-1.9,0.9-2.8,1.4c0,0.8,0,1.4,0,2.4c1.6,0,3.2,0,5.5,0c-0.8,1.1-1,1.8-1.5,2c-0.9,0.5-2,0.7-3.1,1
                                        c1.2,1.2,2.3,2,3,3.1c0.6,1,0.7,2.4,1.2,3.9c-1.8,3.3-3.7,7-7,9.2c-3,2-6.7,3-10,4.5c0.2,0.3,0.6,0.6,1,1.1c-0.7,2-1.9,2.8-4.5,1.9
                                        c1-1.1,1.8-2,2.9-3.2c-1.2-0.2-1.9-0.3-2.8-0.5c-1.1,1.3-3,2-2.8,3.9c1.5,1.4,2.8,2.7,4.1,3.9c-0.1,0.1-0.3,0.3-0.4,0.4
                                        c0.4,1.3,0.9,2.6,1.5,4.4c-2.1,1.7-4.4,3.5-6.9,5.5c-0.1-0.6-0.2-1.1-0.2-1.6c0-0.3,0-0.7,0-0.5c-2.2-1.9-4.1-3.5-6.5-5.6
                                        c-0.4,2.1-0.8,3.6-1.2,5.5c1.5,1.9,3.3,4.1,5.2,6.4c0.7,1.8,1.5,3.6,2.4,5.7c-0.3,0.5-0.7,1.3-1.2,2.4c1.1,0.7,2.2,1.4,3.2,2.1
                                        c0,0.5,0,1,0,1.5c-2.1,0.2-0.2,2.4-1.5,3c-0.5,0-1,0-1.5,0c-2.2-1.7-4.3-3.3-5.1-6.3c-0.3-1.3-1.4-2.5-2.3-3.5
                                        c-1.4-1.6-3-3.1-4.6-4.7c1.2-0.9,2.2-0.7,3.4,0.3c1.3,1.1,2.8,2,4.6,3.4c-0.9-3.2-1.2-6.2-3.9-8.5c-0.5-3,0.7-6.4-1.7-9.6
                                        c-0.5,0-1.5,0.2-2.4-0.1c-0.7-0.2-1.3-0.8-2-1.3c0.4-0.6,0.7-1.1,1.1-1.6c-1.1-1.6-2.2-3.2-3.3-4.9c-2.1,0-4.2,0-6.5,0
                                        c-3.1,2.5-6.5,5.3-10.1,8.2c0,1.8,0,3.9,0,5.2c-1.8,1.7-3.1,2.9-4.4,4.1c-2.2-2.8-6.1-11.8-7-16.4c-4.9,0.1-4.9-5.6-8.7-7.3
                                        c-1.6,0.3-3.8-0.6-5.8,0.8c-1.9-0.4-3.9-0.7-6.1-1.1c-0.1-0.3-0.3-0.9-0.7-1.9c-0.6,0.5-1.1,0.8-1.3,1.2c-4.4,0.2-6.4-3.5-9.9-5.5
                                        c-0.2,1.3-0.3,2.1-0.4,3.1c1.3,1,2.6,1.9,4,3c0.1,0.5,0.1,1.3,0.3,2.2c1.2,0,2.3,0,3.5,0c0.7-0.7,1.6-1.5,2.6-2.8
                                        c0.6,1,1.4,2.1,2.4,3c0.9,0.8,2.1,1.4,3.2,2.1c-1.1,1.7-2,3.3-3.2,4.6c-0.8,0.9-1.9,1.6-3,2.2c-2.3,1.3-4.8,2.2-6.9,3.8
                                        c-2.6,1.8-5.8,2-8.6,3.3c-0.4,0.2-0.8,0.4-1.5,0.7c0.6,0.8,1.1,1.4,1.4,1.9c3.3-0.5,6.5-0.9,10-1.4c0,0.6,0.3,1.4,0,1.8
                                        c-2.8,4.2-4.1,9.7-9.5,12c-2.6,3.2-5.2,6.4-8,9.7c1.9,2.4,1.3,5.1,2.1,7.5c0.7,2.3,0.4,4.9,0.5,7.3c-2.7,2.2-6.3,2.9-8,6
                                        c0.4,1.6,0.7,3.3,1.1,4.9c-1.6,1.1-2.9,1.9-4.2,2.8c0,1.1,0,2.1,0,2.8c-1.5,2-2.7,4-4.3,5.5c-1.4,1.4-3.4,2.2-5.1,3.2
                                        c-2.8,0.6-5.9-0.8-9.2,1.6c-0.4-1.2-0.9-2.5-1.4-3.8c-0.3,0.3-0.6,0.6-0.9,0.9c0.3-0.5,0.7-1,1-1.5c-1.7-2.5-3.3-5-5.1-7.6
                                        c0-1.9,0-3.9,0-5.8c-5-5.9-5.4-10.4-1.1-15.2c-0.8-3.5-1.9-6.8-3.9-11c-0.3-0.3-1.5-1.5-3.1-3.1c0.4-2.1,0.8-4.5,1.3-7.2
                                        c-1.7,0-3.1,0-4.5,0c-1-1.1-1.9-2.1-2.7-3c-3.3-0.7-6,0.4-8.9,1.9c-3.1-3-6.3,1.1-9.4-0.2c-2.1-1.5-4.2-2.9-6.5-4.5
                                        c0.6-3.3-2.8-3.7-4.8-5.5c-1.4-3.9,1.5-7.6,0.6-11.1c-0.5-1-0.8-1.7-1.1-2.2c1.9-5.4,5.7-9,10.1-11.7c0.1-1.4,0.1-2.5,0.2-3.5
                                        c1.8-1.4,3.4-2.6,4.8-3.6c0-1.1,0-1.7,0-2.5c-1.2,0-2.3,0-3.3,0c-0.6-1.1-1.1-2.1-1.4-2.6c0.4-2.4,0.8-4.4,1.1-6.5
                                        c3.1,0,6.2,0,9.7,0c0.4-1.2,0.8-2.3,1.3-3.7c-2-1-3.6-1.9-5.7-3c5.7-0.7,10.4-2.5,14.2-7.3c0.8,0,2.3,0,3.9,0c0-1.6,0-3.1,0-4.4
                                        c1-0.5,1.8-0.9,2.7-1.4c0.1,0.1,0.4,0.2,0.5,0.4c0.3,1.7,1.2,2.6,3,2.4c-0.3,0.5-0.6,1-1.1,1.9c3,0,5.8,0.7,8.4-1
                                        c0.6,0.4,1.1,0.8,1.5,1.1c1.1-0.5,2.1-1,2.6-1.2c1-2.2,1.8-4,2.6-6c2.8,0,5.4,0,8,0c-0.1-0.8-0.2-1.2-0.3-2.1
                                        c-3.6,1.3-7.2,1.4-11.2,1c2.1-1.5,1.1-3.3,1.1-4.8c2.3,0.2,4-0.5,5.9-2.6c-1.5-0.2-2.3-0.4-2.1-0.3c-1.7,1.2-2.8,2-3.8,2.9
                                        c-0.6,0-1.4,0-2.4,0c-0.8,1-1.8,2.1-2.6,3.2c0.9,1,1.6,1.7,2.3,2.5c-1.1,0.7-2.1,1.4-3,2c-0.1,0.8-0.1,1.6-0.2,2.2
                                        c-2.2,0.4-4,0.8-5.9,1.1c0.3-2.3-1.7-2.8-2.6-4.1c-2.2,0.5-4,0.9-6.2,1.4c-0.9-2-1.8-3.8-2.6-5.6c9.4-4.4,13-6.8,15.6-10.4
                                        c3.2-0.8,6.4-1.7,9.6-2.1c4.1-0.5,8.4-0.9,12.6,0.7c2.6,1,5.4,1.4,8.1,2.1c1.8,0.4,3.6,0.8,5.4,1.2c0.1,0.6,0.2,1.1,0.4,1.6
                                        c1.2,0,2.3,0,3.8,0c-0.3-0.5-0.4-0.8-0.9-1.6c0.5-0.2,1.3-0.4,2-0.6c-0.2-0.2-0.4-0.4-0.7-0.6c0.8,0,1.6,0,2.4,0
                                        c-0.4,0.9-0.7,1.7-0.9,2.4c2.2,1.4,2.3-1.1,3.4-1.3c2.3-0.4,4.7-0.9,7-1.1c2.5-0.2,4.9,0,7.4,0c0.2-1.1,0.3-2.1,0.5-2.9
                                        c3.5,0.8,6.9,1.5,10.6,2.3c0.1-1.3,0.1-2,0.2-2.9c1.9-1.2,3.9-2.4,5.8-3.6c1.5,0.5,2.6,1.7,4.5,0.5c1.7-1.1,4-0.8,5.7,0.7
                                        c0.7-0.4,1.2-0.7,1.7-1c0.2,0.6,0.4,1.2,0.7,1.9c0.5,0,1-0.1,1.6-0.1c-0.3-0.6-0.6-1.1-0.9-1.7c1.5,0,3,0,3.9,0
                                        c1.8-1.2,3.1-2.1,4.8-3.3c1.2,0.2,2.7,0.6,4.3,0.6c1.3,0,2.6-0.3,3.7-0.8c2.2-1.1,4.3-2.6,6.9-0.8c0.1,0.1,0.7-0.6,1.1-1
                                        c0.7,0.4,1.4,0.8,2,1.1c1.4-0.4,2.7-0.9,4.9-1.6c-6-1-11.2-1.8-16.6-2.7c4.3-3.4,8.5-0.8,12.7-0.4c0.1,0.5,0.2,0.9,0.4,1.4
                                        c2-1.3,4.3-0.5,6.5-0.8c0.1,0.6,0.4,1.1,0.2,1.5c-0.1,0.4-0.6,0.7-0.9,1.1c4.1,1.4,8.4,1.9,13.3,1.3c-0.4,1.1-0.6,1.6-0.7,2.2
                                        c-0.2,0.5-0.4,1.1-0.8,2c2.4,0,4.4-0.1,6.3,0c1.1,0,2.2-0.3,3.3,0.6c0.6,0.5,2.1,0.6,2.8,0.3c3.8-1.9,7.7-0.4,11.4-1
                                        c0.6,0.6,1.1,1.1,1.9,1.9c-0.9,0.5-1.7,1-2.7,1.5c2.5,1.4,2.7-1.2,4.4-1.5c0.3,0.2,0.8,0.5,1.3,0.8c2.3-0.3,4.6-0.7,7.5-1.1
                                        c0.2-0.3,0.8-1,1.7-2.1c-2.8-1.2-5-0.7-7.7,1c0.3-1.9,0.5-3,0.7-4.5c-0.9,0.2-2.2,0.4-3.4,0.6c0-0.4,0-0.9-0.1-1.7c1,0,2,0.1,2.9,0
                                        c0.7-0.1,1.4-0.7,2.1-1c3,2.4,6.9,2.8,10.3,2.9c4.6,0.1,8.9,2.1,13.8,1.8c-0.6,0.2-1.2,0.4-1.8,0.6c0.2,0.3,0.3,0.6,0.5,0.8
                                        c-1.9,0-3.8,0-5.7,0c0,0.1,0,0.3,0,0.4c2.1,0.7,4.3,1.4,6.4,2c5.4,0.1,10.7,1,15.7,3.2c1.8,0.8,3.4,0.1,5.4-0.9c0.4,0.7,1,1.6,1.8,3
                                        c0.4-1.3,0.6-1.8,0.8-2.4c4.3-1.5,8.5,0.7,12.8,0.6C500,53.3,500,56.7,500,60z M275,90c-1.3,0-0.8,1.1-1,1.7c-0.2,0.5-0.6,0.8-1,1.3
                                        c0-0.5,0-1,0-1.3c-3.4-2.2-6.6-4.3-10.1-6.6c-1.1,0.6-2.5,1.3-3.8,2c-1.3-0.6-2.4-1.8-3.9-0.6c-0.1,0.8-0.2,1.6-0.2,1.7
                                        c-2,1.2-3.5,2.2-5.1,3.2c0.5,0.5,0.8,0.8,1.2,1.2c-1.1,1.1-2.2,2.2-3.3,3.3c-0.1,0.1-0.2,0-0.3,0c-0.2-0.2-0.5-0.5-0.7-0.7
                                        c-0.9,0.5-1.7,1-3.5,2c3.4-0.3,5.6,0.1,8-1c1.9-0.9,4.3-0.8,6.5-1.1c2.3-0.3,4.8,0.7,6.9-0.8c2.8,1.5,0.8,3.6,0.2,5.7
                                        c2.4,0.5,4.6,1,6.3,1.3c2.3,1.1,4.2,2,6.2,3c0.8-1.2,1.5-2.2,2.2-3.4c6.1,1,12,3,18.2,2c2.3-3.1,2.3-3.1,1.9-6.6
                                        c-1.9-0.3-3.8-0.6-6-0.9c-1.5,1.1-3.5,0.7-5.5,0.6c-0.5-2.1-1-3.9-1.5-5.9c-1.5-0.2-2.8,0-3.5,1.4c0.7,1.6,3,2.1,2.8,4.9
                                        c-1.1-1.1-1.8-1.7-2.5-2.5c-0.4,1-0.7,1.6-1,2.3c-4.1-1.9-4.1-6.2-6.7-9.1c-3,0-5.2-1.9-7.5-4c-0.1,0.7-0.1,1.3,0.2,1.8
                                        C269.9,87.5,273.1,88,275,90z M288.9,86.8c0.4,0.6,0.9,1.4,1.5,2.3c1.7-0.6,3.3,0.1,5.1-0.9c1.4-0.8,3.7-0.6,5.6,0.3
                                        c2.2,1,4.6,0.6,7.1,0.1c-3-3.8-7-5.1-10.5-3.6c-1.3-1.1-2.6-2.2-4-3.3C292.1,83.5,290.6,85,288.9,86.8z M302,119.3
                                        c1.4,1.6,2.5,3.4,4,4.7c1.6,1.3,1.8,4.2,4.6,4c-0.2-1.3-0.2-2.7-0.6-3.9c-0.4-1.2-1-2.3-1.7-3.2c-0.9-1.2-2.1-2.1-3.1-3.2
                                        c0.1-4.1-3.7-6-5.3-9.2c-0.2-0.3-1-0.3-1.7-0.5c1.1,4.2,2.3,6.8,3.9,8.6C302,117.5,302,118.4,302,119.3z M317,84.3
                                        c0,1.2,0,2.2,0,3.8c0.7,0.7,1.8,1.6,2.8,2.6c-1.1,2.6-1,3.1,0.5,4.1c1.8,0,3.2,0,4.8,0c-0.4-3.9-1.7-7.1-4.4-9.8
                                        c0.9-1,1.6-1.8,2.6-2.9C320.6,81.7,318.9,82.9,317,84.3z M305.9,55.3c-2.3,0.4-4-2-6.3-1.2c-0.2,0.1-0.4,0.5-0.8,1
                                        c0.5,0.6,1.1,1.3,1.7,2.1C301.9,54.9,304.2,56.7,305.9,55.3z M298.9,146.8c-2.7-1.4-3.3,0-3.9,1.2c-0.1,0.2,0.2,0.5,0.5,1.3
                                        C296.5,148.6,297.4,147.9,298.9,146.8z M296,61.3c-1,0-2,0-3.1,0c0.1,0.7,0.2,1.2,0.4,1.8c1-0.1,1.9-0.2,2.8-0.2
                                        C296,62.2,296,61.8,296,61.3z M454.2,43.2c0,0.3,0.1,0.6,0.1,0.9c0.5-0.1,1.1-0.3,1.6-0.4c0-0.2-0.1-0.3-0.1-0.5
                                        C455.3,43.2,454.7,43.2,454.2,43.2z M283.8,66.8c0-0.3,0-0.6-0.1-0.9c-0.6,0.1-1.1,0.2-1.7,0.4c0,0.2,0,0.3,0.1,0.5
                                        C282.7,66.8,283.3,66.8,283.8,66.8z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M157,34c-2.8,0.8-5.7,1.6-9,2.5c-0.2,0.2-0.8,0.8-1.4,1.4c-0.9,0-1.9,0-3.1,0c-1.3,1.5-2.6,3-4.3,4.9
                                        c-3.7,0-8,0-12.7,0c-0.4,0.6-0.9,1.5-1.1,1.8c-2.1,0.6-4.1-0.4-5,1.6c1.4,1.1,2.8,2.2,4.6,3.6c0.6,0,1.7,0,2.9,0
                                        c0.2,1.1,0.3,2,0.5,3.1c2.1-0.4,3-1.8,4.1-3.5c-2.7-0.6-5.1-1.2-8-1.9c1.2-1.5,2.1-2.6,3-3.6c5.5,0,10.8,0,15.9,0
                                        c3.5,3.1,7.9,3,12.5,4.4c0.8,0.8,2,2.2,2.8,3.1c2.6,0.7,4.5,1.3,6.4,1.8c0.2,2.3-2,2-2.9,2.5c-0.9,0.4-2.5-0.5-4-0.3
                                        c1.2,0.8,2.5,1.7,3.9,2.7c-0.4,0.9-0.9,1.8-1.3,2.7c-2.7-0.4-5.3-0.8-8.4-1.3c-0.6-1.5-2.6-1.3-4.2-2.1c-1.7-0.9-3.2-0.6-4.7,0.3
                                        c-0.4-0.4-0.8-0.8-1.2-1.2c0.1-0.2,0.1-0.6,0.3-0.7c0.7-0.4,1.4-1,2.1-1c2.2,0,3.9-1.1,5.7-2.8c-1.6,0-2.8-0.1-4,0
                                        c-1,0.1-2,0.6-3.3,1c0.5-1.3,0.8-2.1,1.2-3c-0.8-0.1-1.3-0.2-1.7-0.3c-0.4,0.7-0.7,1.4-1.2,2.5c-0.8-1-1.4-1.7-2.2-2.7
                                        c-0.6,0.5-1.2,0.9-1.9,1.5c0.3,0.8,0.6,1.6,0.9,2.4c-1.3,0.3-2.2,0.6-4.3,1.1c2.3,1.3,3.7,2.1,5.2,2.9c-2.5,0.4-5,0.8-7.8,1.2
                                        c-0.2-0.2-0.7-0.6-1.1-1.1c0.3-0.8,0.6-1.5,1.1-2.6c-0.7,0.2-1,0.2-1.2,0.3c-2.2,2.9-6.2,3.2-8.7,5.5c-0.7,0.6-1.6,0.9-2.4,1.2
                                        c0,0.9,0,1.6,0,2.5c0.9,0.2,1.8,0.3,2.7,0.5c0.2,0.6,0.4,1.2,0.6,1.8c2.7,0.2,5.5-0.4,7.9,1.6c1,0.8,2.8,0.4,4.5,0.6
                                        c1.6,1.7,2.4,4.6,5.7,4.8c1.9-1.3-0.7-2.1-0.3-3.6c1-0.8,3.5,0.1,3.9-2.6c-1-0.7-2.2-1.6-2.7-1.9c0.4-2.9,0.6-4.7,0.9-6.5
                                        c1.7,0.5,3.4,1.6,5.1-0.1c3.1,1.1,6.4,2.1,7.6,5.7c1.2,0,2.2,0,3.6,0c0.5-0.5,1.4-1.2,2.1-1.9c2.3,2.5,4.5,5,6.7,7.4
                                        c0.3-0.3,0.6-0.6,0.9-1c1.2,0.7,2.6,1.1,3.6,2c0.9,0.8,1.4,2,2.1,3c-0.4,0.7-0.7,1.3-1.3,2.4c1.2,0.1,2,0.2,3.1,0.3
                                        c0.5,1.4,1.1,2.9,1.7,4.7c-3.5-0.8-6.4-1.5-9.8-2.3c1.3-1.2,2.4-2.2,3.5-3.3c-0.1-0.4-0.3-0.8-0.7-1.7c-1.9,2.6-4.9,2.2-6.8,3.2
                                        c-2.3-0.3-4.3-0.6-6.3-0.9c0,0.3-0.1,0.5-0.1,0.8c1.2,0.2,2.4,0.4,3.7,0.6c0.1,0.8,0.2,1.6,0.3,2.6c1,0.6,2.1,1.3,3.4,2.1
                                        c0.6-0.6,1.3-1.3,2.6-2.6c-0.8,5.3-6,2.8-7.1,7.2c-0.9-2.1-1.2-2.7-1.6-3.7c-2,1.6-6.2,0.2-5.6,4.6c-1.8,0.7-3.6,1.1-4.8,2.1
                                        c-1.4,1.2-2.3,2.9-3.3,4.3c0.6,1,1,1.6,1.6,2.8c-3.6,0.4-6.3,2-8.4,5.2c0.4,2.6,0.8,5.7,1.3,9.2c-3.4-2.7-3.8-3.4-4.4-6.8
                                        c-2.5-0.5-5.1-0.9-7.6-1.4c-0.2,0.9-0.4,1.4-0.5,2.1c-2.1,0.1-4.4,0.8-6.1-1.5c-2.2,1.6-4,2.8-5.9,4.2c0.4,0.7,0.7,1.2,1.1,1.9
                                        c-2,5.2-0.8,8.1,4.9,10.6c1.3-1.1,4-0.7,4.3-3.5c1.5-0.6,2.7-2.2,5-1.3c-0.8,2.4-1.5,4.8-2.4,7.5c2.3,0,4.1,0,5.7,0
                                        c0.6,0.6,1.1,1.1,1.9,1.9c-0.2,1.6-0.5,3.5-0.8,5.4c0.8,0.7,1.9,1.6,3.3,2.8c0.6-0.2,2-0.6,3.5-1.1c0.8,0.7,1.7,1.4,2.5,2.1
                                        c2.5-3.3,2.5-3.3,8-5.9c0.8,0.9-0.5,0.9-0.7,1.9c1.3-0.4,2.3-0.7,3.6-1c0.4,0.6,1,1.2,1.7,2.1c1.6-0.6,3.2,0.5,5.1-0.7
                                        c0.9-0.6,2.7,0,4.1,0.1c1.8,2,3.8,4.2,5.4,6c2.6,0.6,4.6,0.9,6.5,1.6c1.5,0.5,5.8,5.8,6.9,7.8c0.7,0,1.5,0,2.1,0
                                        c1.1,1.1,2,2.1,3,3.1c2,0,3.9,0,6.1,0c0.9,1.1,1.9,2.2,2.8,3.4c0.1-0.2,0.3-0.4,0.4-0.6c1.1,0.5,2.3,0.9,3.3,1.3
                                        c0.1,5.5,0.1,5.5-4.8,10.4c0,4-1.5,7.5-3,11.2c-0.7,1.6-1.5,1.9-2.9,2.6c-2.8,1.3-6.2,1.5-8.1,4.5c0,0.8,0,1.6,0,2.7
                                        c-2.4,3.1-4.9,6.4-7.5,9.7c-1,0-2,0-3.3,0c0,1.8-0.4,3.5-2.1,4.4c-1.5,0.8-3.1,1.4-4.6,2c-0.7,0.9-1.4,1.9-2.1,2.8
                                        c-1.1-0.6-2-1-3.1-1.5c-0.1,0.9-0.2,1.4-0.3,2.1c0.7,0.1,1.1,0.2,1.6,0.4c0.5,0.5-1.9,3.3-4.6,5.3c0.7,0.8,1.4,1.6,2.3,2.6
                                        c-1.5,1.3-2.9,2.4-4.4,3.7c0.4,2.4,0.9,4.9,4,5.7c-1.1,2.4-3.3,1.4-5.5,1.7c-2.4-1.6-5-3.4-7.4-5.1c0-2.1,0-3.8,0-5.4
                                        c2.5-0.8-0.4-2.5,0.7-3.9c0.8-1.1,0.5-3.1,0.9-4.6c0.4-1.5,1-2.9,1.5-4.4c-0.4-0.5-0.7-1-1.3-1.7c2.5-3.3,3.7-7,3.3-11.2
                                        c-0.2-1.8,1.2-3.6,1-5.6c-0.2-1.7-0.1-3.4,0.8-5.1c0.6-1.2,0.1-2.9,0.1-4.8c-1.2-0.8-2.5-2.1-4.1-2.7c-2.9-1.2-4.5-3.5-5.9-6
                                        c-1.7-3.1-2.4-6.8-5.3-9.2c0.5-1.2,0.8-2,1.2-3.2c-0.3-0.8-0.7-2-1.1-3.1c1.7-2.2,3.2-4.2,5-6.5c0-1.1,0-2.6,0-4
                                        c-0.6-1-1.3-2.1-2.1-3.5c-0.9,0.7-1.7,1.4-2.6,2.2c-2.1-1.2-4.3-2.4-7-3.9c0-0.1,0-1.1-0.4-1.9c-0.5-0.8-1.4-1.4-2.3-2.4
                                        c-3.4,0.6-5.8-1.5-8.1-4.2c-1.3,0.4-2.6,0.8-4.1,1.3c-3.1-1.4-6.3-2.9-10.5-4.8c-0.1-0.1-0.9-0.9-1.7-1.8c0-0.9,0-1.9,0-3.2
                                        c-3.3-3-6.6-6.2-10-9.4c0.1-1.8-0.8-2.8-2.4-2.9c0.8,0.9,1.6,1.9,2.4,2.9c0.3,1.1,2.4,5,3.2,5.8c0.6,0.7,1.3,1.4,1.9,1.9
                                        c-0.4,1.8-1.8,1.8-2,0.9c-0.3-1.4-0.9-1.5-2.1-1.5c-0.1-0.9-0.1-1.7-0.2-2.5c-1.2-0.6-2.5-1.1-3.8-1.7c0.3-0.5,0.6-1,1-1.7
                                        c-0.9-0.7-2.1-1.2-2.7-2.1c-0.7-0.9-0.8-2.4-1.5-3.3c-1.1-1.3-2.2-3-4.1-2.5c-1.8-2.6-3.6-5-5.7-7.9c0-3.1,0-6.7,0-10
                                        c-0.9-3.2-5.9-2.6-5.2-6.1c-1.7-1.7-3.1-3.1-4.9-4.9c-0.1,0-1.1,0-2.2,0c-2.1-1.7-4-3.9-6.3-5c-2.3-1.1-4.8-2.3-7.6-2.2
                                        c-1.7,0.1-3.6,0.6-5.4-0.7c-2.3,0.6-4.6,3.4-7.6,0.4c-1,1.2-1.9,2.3-2.8,3.4c-0.5,0-1.2-0.2-1.5,0c-2.9,3.3-7.1,3.7-11,4.9
                                        c-0.4,0.1-0.9-0.1-1.8-0.2c2.8-3.3,7.9-1.8,10.3-5.6c-1.9,0-3.7,0-5.4,0c-0.7-0.8-1.2-1.4-1.9-2.1c-1.1-0.1-2.2-0.1-3.3-0.2
                                        c-0.5-0.5-0.9-0.9-1.4-1.4c0-0.7,0-1.3,0-2c0.5-0.5,0.9-0.9,1.6-1.6c1.6,0,3.4,0,5.3,0c-0.9-1.7-2.3-0.8-3.4-0.9
                                        c-1.3-0.1-2.7,0-4.1,0c-0.4-0.4-0.8-0.9-1.3-1.4c1.8-3.3,4.3-0.9,6.5-0.5c0.2-0.5,0.3-0.8,0.5-1.5c-1.6-0.7-3.3-1.3-5.3-2.1
                                        c2-0.3,3.4-1.6,4.9-2.2c2.9-1.2,6-1.7,9.1-2c1.6-0.2,3.4,0.6,5.1,0.9c1.7,0.4,3.6-0.8,5.2,0.7c0.2,0.2,0.6,0.3,0.9,0.3
                                        c4.2-0.3,8.4,0.7,12.6,0.9c4.5,0.2,9-1.4,13.6-1c0.6,0.1,1.3-0.7,2.1-1.2c0.7,0.9,1.3,1.7,1.9,2.5c0.6-0.5,0.9-0.9,1.5-1.4
                                        c0.6,0.4,1.3,0.8,2.1,1.3c2.7-3.5,5.9,1.7,8.4-0.3c-0.9-0.9-2-2-3.3-3.3c-0.8,0.3-2.3,0.8-4,1.4c-1.1-0.4-2.5-0.8-4.1-1.3
                                        c0.4-1.1,0.9-2.2,1.5-3.6c5,0.2,10-0.4,15.1,1.7c2.1,0.9,5.1,0.8,7.2-0.1c1.9-0.8,3.5,0,5-0.7c0.5,1.6,0.9,2.7,1.3,4.1
                                        c1.8,0,3.4,0,5.6,0c-0.7,1.3-1.2,2.1-1.6,2.8c-1.4,0.1-2.6,0.3-3.9,0.4c0,0.2,0,0.4,0,0.5c2.1,0,4.2,0,6.5,0
                                        c0.4-0.6,0.9-1.6,1.7-2.3c0.5-0.6,1.4-0.9,2.8-1.8c-3.6-0.7-6.3-1.3-9.8-2c2.5-0.9,4.2-1.6,5.9-2.2c0-0.4,0-0.7-0.1-1.4
                                        c-2.2,0-4.5,0-6.8,0c0-0.8-0.1-1.3-0.1-2.1c3,0,5.9,0,9.3,0c-0.5-1.1-0.8-1.8-1.2-2.8c1.5-0.2,3.2-0.3,4.8-0.5c0-0.2,0-0.3,0-0.5
                                        c-0.9-0.1-1.8-0.3-3.4-0.6c1.7-1.2,3-2,4.2-2.8c2.5,0.9,4.6,2.5,7.7,1.8c-1.1-0.5-1.8-0.8-2.5-1.2c0.5-0.5,1-1,1.5-1.5
                                        c2.4,0,5,0.5,7.4-0.1c8-1.8,16.1-0.4,24.1-0.9c0.2,2.1,2.4,0.2,3,1.5C160,34,157.7,31.7,157,34z M117.8,45c-0.3,0-0.6,0-0.9,0
                                        c0.1,0.7,0.3,1.3,0.4,2c0.2,0,0.4-0.1,0.6-0.1c-0.1-0.6-0.1-1.3-1.5-1.5c0.8-1,1.1-1.5,1.7-2.2c-0.9-0.5-1.8-0.9-2.7-1.4
                                        c-0.2,0.2-0.4,0.4-0.5,0.6C115.3,43.3,115.8,44.2,117.8,45z M133.2,80.9c-3.4-3.1-6.3-1.4-9.3-0.4c0.1,0.4,0.1,0.9,0.2,1.5
                                        c1.3-0.4,2.5-1,3.6-0.9c1.1,0.1,2.1,0.9,3.2,1.4c-0.7,0.7-1.3,1.3-2.1,2.1c0.1,1.1,0.2,2.3,0.3,3.6c0.8-0.2,1.3-0.4,2-0.6
                                        c-0.4-0.8-0.8-1.5-1-2C131.2,84.1,132.2,82.5,133.2,80.9z M139.2,83c-1.2,0-2,0.1-2.7,0c-0.8-0.1-1.6-0.4-2.5-0.7
                                        c-0.2,2.1,1.7,2.5,2.2,3.4C137.3,84.8,138.1,84.1,139.2,83z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M500,45c-0.8,0-1.7-0.2-2.4,0.1c-1.1,0.5-2,1.6-3.2,1.9c-1.2,0.3-3.2-0.4-3.8,0.2c-1.3,1.5-1.9-0.3-2.8-0.2
                                        c-1.2,0.2-2.5,0-4.4,0c0.8-1.4,1.3-2.1,1.8-2.9c1.5,0,3-0.7,4.1,0.7c2.1-1.2,4.3-2.4,6.7-3.8c1,0,2.5,0,4,0
                                        C500,42.3,500,43.7,500,45z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M0,51c2.5,0.3,5.3,0.1,7.4,1.2c1.8,1,3.5,0.4,5.2,0.9c0.4,0.4,0.8,0.8,1.3,1.3c-1.1,0.8-2.3,1.5-3.8,2.5
                                        c-2.6,0.5-5.4-0.7-8.2-2c-0.6,0.3-1.3,0.7-2,1C0,54.3,0,52.7,0,51z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M440,195c-0.5,0-1,0-1.6,0c-0.5-3.6-3.8-3.7-6.2-5c-3.5,1.3-7.7,0.3-10.6,4.1c-3.6-1.3-7.4,2.7-11.2,0.1
                                        c0.3-1.7,0.9-3.2,0.6-4.3c-0.9-2.6-2.3-5.1-3.5-7.7c1.4-1.1,0.1-3.1,0.7-4.8c2.9-1.4,5.8-2.8,9-3.4c0.7-0.1,1.6-0.8,1.8-1.5
                                        c1.3-3.2,4.9-3.9,6.7-6.8c1.3,0.5,2.5,0.9,3.9,1.4c0.7-1.1,1.5-2.3,2.3-3.4c-0.2-0.4-0.5-0.9-1.2-2.2c2.1,1.4,4.1,0.3,5,1
                                        c1.8,1.2,3.6,0.1,5.3,0.8c-0.7,1.4-1.4,2.7-2.1,4.1c2.1,1.3,4.1,2.6,6.3,4c0.6-0.5,1.1-1.1,1.5-1.4c0.4-3,0.7-5.8,1.1-8.7
                                        c0.3,0,0.6-0.1,0.8-0.1c0.6,1.4,1.2,2.8,1.8,4.5c3.5,0.8,2.5,4.6,4.1,7.3c2.6-0.3,2.5,3.3,4.8,4.1c0.7,2.6,3.4,3.8,4.2,6.7
                                        c0.9,3.1-0.1,5.3-1.3,7.5c-1.3,2.5-3,4.7-3.4,7.7c-1.1,0.1-2.2,0.1-3.3,0.2c-0.6,0.6-1.2,1.2-1.8,1.8c-2.2-1.8-4.7-0.3-7.5-1.2
                                        c-0.7-1-1.7-2.4-2.7-3.8c-1.1,0.5-2.1,0.9-3.3,1.4C440.1,196.3,440,195.6,440,195c0.2,0.2,0.4,0.3,0.5,0.5c0.5-0.7,0.9-1.4,1.5-2.4
                                        c-0.7,0-1.2-0.1-1.9-0.1C440.1,193.8,440,194.4,440,195z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M171,32c2.8,0.5,5.9-1.1,8.6,0.9c1.4-2.2,4.3,0.3,5.8-1.7c0.1-0.2,0.6-0.2,0.9-0.2c7.9,0.3,15.7-1.8,23.5-1
                                        c2.5,0.3,5,0.9,8.2,1.4c0.1,0.2,0.7,0.9,1.4,1.7c4.3,0,8.4,0,12.5,0c-2.9,0.7-5.4,1.9-7.8,3.3c0.3,0.3,0.6,0.7,0.9,1
                                        c-0.3,0.3-0.5,0.5-0.8,0.8c0.7,1.3,1.3,2.6,2,4c-2.2,1.1-4.2,2.2-6.4,3.3c0.4,0.9,0.9,1.7,1.4,2.8c-5,2.3-10.1,3.3-15.6,3.7
                                        c-1.3,0.9-2.7,1.8-4.1,2.8c-1.7,0-3.3,0-5.3,0c-1.7,2.4-3.5,5-5.3,7.6c-2.1,1.4-3.9-0.9-5.9-0.6c-2.3,0.3-3.3-1.8-4.9-2.7
                                        c-1.7-0.9-2.6-3.1-4-4.8c0-1,0-2.1,0-3.3c1-0.2,1.9-0.3,2.9-0.5c0-0.2,0-0.4,0-0.5c-1.5-0.1-3.1-0.2-4.8-0.4c0.3-0.7,0.6-1.3,1-2.1
                                        c-3.5-0.9-3.6-5.1-7-6.7c-4.5,0-9.4,0-14.3,0c-1.4-1.1-2.7-2.1-4.3-3.2c1.6-1.4,3.1-0.6,4.4-0.9c1.9,0,3.8,0,5.8,0
                                        c0.2-1.2,0.3-2.1,0.4-2.9c3.6-0.5,7-0.9,10.4-1.3C170.8,32.8,170.9,32.3,171,32z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M446,159.5c-0.2-0.2-0.7-0.7-1.3-1.3c-0.9-0.2-1.8-0.3-2.8-0.5c0.5-0.5,0.8-0.9,1.4-1.5
                                        c-0.9-1.1-1.8-2.1-2.7-3.2c-4.3,0.1-6.6-2.4-8.6-5.8c1.2,0,2.3,0,3.7,0c0.7,1,1.5,2.3,2.7,4.1c0.5-1,1-1.8,1.4-2.7
                                        c3.9,0.9,7.2,1.7,10.7,2.6c0.7,0.8,1.7,1.7,2.6,2.7c2,0,3.9,0,6.4,0c0.8-0.2,1.2-2.4,2.7-1.9c-0.8,0.8-1.6,1.6-3,3
                                        c-0.3,0-1.6,0-2.9,0c-0.5,0.5-1,1-1.6,1.6c1.6,1.4,3.3,2.7,5.1,4.2c-1.2,0-2.4,0-4.3,0c-0.9-0.9-2.3-2.3-3.9-4
                                        c-0.6,0.6-1.3,1.5-2.3,2.1C448.7,159.4,447.7,159.3,446,159.5z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M416.5,146c-1,0-1.5,0-2,0c-0.6,0.9-1.3,1.8-1.8,2.8c-0.5,1-0.7,2-1.2,3.2c-2.4-0.4-4.8-0.8-7.4-1.3
                                        c-2.1-2.9-2.1-2.9-2.1-6.3c0.1-0.1,0.2-0.3,0.4-0.3c0.7,0,1.3,0,2,0c0.3-0.7,0.6-1.4,1-2c0.7,0,1.4,0,2.1,0c1.6-1.6,3.3-3.3,5.1-5.1
                                        c1.1,0.5,2.3,1.1,3.8,1.8c-0.9,1.2-1.7,2.1-2.5,3.1C414.8,143.2,415.6,144.5,416.5,146z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M319.4,161.8c0.6,2.8,0.9,4.3,1.2,6c-2.6,4.1-1.6,10.4-6.5,14.4c-1-0.4-2-0.8-3.3-1.3
                                        c0.5-3.9,0.9-7.7,1.4-11.6c0.3-0.3,0.8-0.8,1.3-1.3c0.6,0,1.3,0,2.3,0C316.7,166.4,317.8,164.6,319.4,161.8z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M240.2,66.3c0.4-0.4,0.7-0.7,1-1c0.6,0.1,1.2,0.2,1.8,0.2c0.9,0,1.8-0.3,2.7-0.2c0.7,0.1,1.4,0.7,2.1,1.1
                                        c-0.3,0.6-0.6,1.2-0.8,1.7c2.1,1.9,4.1,3.6,6.3,5.6c-0.6,0.9-1.2,1.6-1.4,2c-3.2,0.5-5.9,0.9-8.7,1.3c0.2-1.2,0.2-2.2,0.5-3.1
                                        c0.3-1.2,1-2.2,2.3-2.4c-0.8-0.4-1.6-0.8-2.8-1.5c-0.5,1.1-1,2.4-1.7,4c-1.4,0.4-3.1,0.8-5.6,1.5c0.6-1.3,0.9-1.9,1.3-2.7
                                        c-0.3-0.4-0.7-0.9-1.2-1.6c2-0.6,3.9-1.1,6.3-1.8C241.5,68.4,240.9,67.4,240.2,66.3z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M454.4,85c-2.2,2.7-5.2,2.3-7.6,3.7c0.3,0.5,0.7,1,0.9,1.6c0.2,0.6,0.3,1.2,0.5,2.3
                                        c-0.7,0.4-1.6,0.9-2.2,1.2c0,1.6,0,2.8,0,4c-1.6,0-3.1,0-4.3,0c-0.8,0.8-1.4,1.4-2.2,2.2c-2.9-0.5-5.3,0.9-7.5,3.6
                                        c-0.8-1.3-1.3-2.1-2-3.2c1.4-1,2.9-2.1,4.7-3.3c1,0,2.3,0,3.6,0c1.5-2.6,5.4-1.6,6.6-5.1c0-1.4,0-3.4,0-5.6c0.5-0.2,1.1-0.4,1.8-0.6
                                        c0.1-0.9,0.3-1.8,0.5-3.4c0.7,1.2,1.1,1.9,1.5,2.6C450.7,85,452.3,85,454.4,85z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M422.2,135.7c-0.8,0.6-1.3,0.9-2.5,1.6c0.5-1.4,0.8-2.1,1.2-3.4c-1.2-2.8-2.7-6-4.2-9.4
                                        c0.6-1.2,1.2-2.4,1.9-4c0.9,0.8,1.6,1.3,2.5,2c-0.4,0.9-0.8,1.7-1.3,2.6c1,0.7,2.7,1.3,2.8,2.2c0.3,1.5,1.7,1.3,2.1,2.1
                                        c0.6,1,0.8,2.3,1.1,3.5c0.3,1,0.6,2.1,1,3.1c-0.8,0.8-1.7,1.7-2.7,2.8C423.7,138,423.1,137,422.2,135.7z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M80.1,40.6c2.3-0.5,4.2-1.8,6.7-1.7c1.6,0.1,3.2-0.9,5.7-1.7c1.4,0,3.9,0,6.3,0c0.1,0.2,0.2,0.3,0.4,0.5
                                        c-0.6,0.2-1.2,0.4-1.8,0.6c0.2,0.3,0.3,0.5,0.5,0.8c-1.6,0-3.2,0-5.5,0c1.2,1,1.8,1.5,2.4,2c4.6-1,4.6-1,10.4,1
                                        c-2.3,0-3.5-0.3-4.4,0.1c-0.9,0.4-1.6,1-2.6,0.9c-2.7-0.3-5.3,0.2-8.1-0.9C86.8,41,83.3,41.1,80.1,40.6z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M494.7,202.8c-1.4-0.7-2.1-1-3-1.4c0.5-0.7,0.9-1.4,1.4-2.2c-0.6-1.2-1.3-2.5-2.2-4.3c2.8,0.3,3.6,2.1,4.4,4
                                        c0.9,0.1,1.8,0.3,2.9,0.4c-0.3,0.8-0.4,1.3-0.7,1.6c-3.6,3.3-7.3,6.5-11.3,10c-0.7,0.2-1.8,0.5-3,0.8c-0.4-0.3-0.9-0.7-1.4-1.2
                                        c0.4-1.8,1.6-3.2,3.2-3.3c2.7-0.2,3.4-2.1,4.3-4C490.9,203,492.5,202.9,494.7,202.8z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M266.7,38.2c-0.6-0.6-1.1-1.1-1.6-1.7c0.4-0.4,0.8-0.9,1.6-1.7c1.6,0.2,3.4,0.5,5.6,0.8
                                        c4.5-1.5,9.5-0.2,14.6,0c-0.9,0.1-1.8,0.3-2.7,0.3c-1,0.1-1.9,0-3.9,0c1.7,1.2,2.7,1.9,3.6,2.6c-2.5,1.8-4.9-1.6-7.6-0.4
                                        c-0.5,0.5-1.1,1.1-1.7,1.7c-0.9,0-1.9,0-3.2,0c-0.3-0.5-0.8-1.1-1.3-1.8C268.7,38.2,267.6,38.2,266.7,38.2z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M321.5,46.8c1.3-0.8,2.2-1.1,2.8-1.7c2.4-2.6,5.6-3.3,8.8-4.1c4.1-1.1,8.4-1.1,12.6-2.2
                                        c0.1,0.9,0.1,1.4,0.2,1.9c-6.2,1.1-12.6,1.2-18.2,5.1c0.7,0.9,1.4,1.9,2.3,3.2c-0.9,0-1.5,0.1-2.1,0C326,48.4,323.9,47.6,321.5,46.8
                                        z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M220.5,57.9c-1.2-1-2.5-2-4-3.3c0.9-0.3,1.4-0.6,1.8-0.5c2.9,0.8,5.7,0.4,8.6,0c2-0.3,2-0.1,5.1,1.7
                                        c0,0.3,0,0.9-0.2,0.9C228.1,57.7,224.4,58.5,220.5,57.9z"/>
                                <path fill="#00CCFF" className="animate_stroke"
                                        d="M451,203.2c2.2-0.6,4.1,0.6,5.6-1.2c1.5,1.9-0.7,3.2-0.8,4.8C452.4,208,452.3,204.9,451,203.2z"/>
                                <path fill="#00CCFF" className="animate_stroke"
                                        d="M112.8,37.8c-2.4,0-4.8,0-6.8,0c-0.9-0.5-1.5-0.8-2.5-1.3C107.2,35.3,110,36.4,112.8,37.8z"/>
                                <path fill="#00CCFF" className="animate_stroke"
                                        d="M362.6,132.7c0.9,1.5,1.6,2.7,2.3,3.8c-0.5,0.5-0.9,1-1.4,1.4C360.3,136.3,360.2,136.2,362.6,132.7z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M147.6,118.9c-1.8,0-2.8,0-4,0c-2.3-1.5-4.5-4.3-8.1-2.1c-0.7-0.3-1.5-0.7-2.9-1.4c0.8-0.2,1.4-0.4,2-0.6
                                        c2.4-1.9,5,0.1,7.8,0.2C143.3,117.1,146.1,116.4,147.6,118.9z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M154.5,119c0.7,0.7,1,1,1.5,1.5c-1.5,0.4-3.2,1.6-4.2,1.1c-1.7-0.7-2.8-0.7-4,0.8c-0.4-0.8-0.6-1.1-0.8-1.5
                                        C149.9,119,149.9,119,154.5,119z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M395,154c0.5,0,1,0,1.5,0c1.4-0.6-0.6-2.8,1.5-3c0.1,0.9,0,2,0.4,2.8c0.4,0.9,1.3,1.3,2.4,1.3
                                        c0.7,0,1.4,0.6,2.3,1c0.4-0.3,0.9-0.7,1.6-1.2c1.9,0.8,4.2,1.4,6.1,2.6c1.7,1.1,2.7,0.3,4.1-0.7c2.7,3.5,6.4-1.2,9.7,1
                                        c0.6-0.3,1.3-2.1,2.5,0.3c-1.4,1-2.8,2-4.5,3.3c-0.3-0.8-0.6-1.3-1-2.3c-0.9,0-2.1-0.1-3.3-0.2c-0.3,0.8-0.5,1.4-0.8,2.3
                                        c-0.6-0.9-1-1.5-1.6-2.4c-6.1,1-11.6-1.7-17.5-2.1C397.3,155.9,396.2,155,395,154z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M416,146.3c1-0.8,1.8-1.6,2.9-2.5c1.7,1.8,3.7,1.8,5.8-0.8c0.1,0.5,0.3,1.1,0.4,1.6
                                        c-0.7,0.2-1.5,0.5-2.2,0.7c0.2,0.3,0.4,0.5,0.6,0.8c-1.8,0-3.6,0-5.4,0c0,0.6-0.1,1.1-0.1,1.5c1.2-0.3,2.3-0.6,3.5-0.9
                                        c0.2,0.6,0.4,1,0.6,1.7c-0.6,0.2-1.2,0.4-1.9,0.7c0.6,1.3,1.3,2.8,2,4.4c-2.8,0.9-2.8-1.5-4-3c-0.2,1.5-0.3,2.7-0.5,4.7
                                        c-0.8-1-1.4-1.6-1.7-2.3c-0.4-0.8-0.5-1.8-0.7-2.8C416.7,149.3,415.7,147.5,416,146.3z"/>
                                <path fill="#00CCFF" className="animate_stroke"
                                        d="M426,152c0-0.9,0-1.2,0-1.8c2.2,1,5.1-2.1,7.1,1.6C430.6,152.1,428.3,151.9,426,152z"/>
                                <path fill="#00CCFF" className="animate_stroke"
                                        d="M428.8,143c0,2.1,0,3.9,0,5.9c-0.6,0-1.1,0-1.9,0C427.4,146.9,425.9,144.5,428.8,143z"/>
                                <path fill="#00CCFF" className="animate_stroke" d="M420,111.4c-0.4,1.5-0.9,2.9-1.5,4.9c-0.5-0.9-0.8-1.6-1.4-2.7c0.5-0.6,1.4-1.6,2.3-2.7
                                        C419.6,111.1,419.8,111.3,420,111.4z"/>
                                </svg>
                                </div>
                                <div className='minimap-right'>
                                <div className='minimap-right-header'>
                                        <p>Game</p>
                                </div>
                                <div className='minimap-right-links'>
                                        <a>GALLERY</a>
                                        <a>ARENA</a>
                                        <a>BANK</a>
                                        <a>MARKET</a>
                                </div>
                                </div>   
                </div>
                <div className='sound-part'>
                        <a href="#"  id="soundButton" className="on noSelect">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                        </a>
                        <div className="sound-part-dots">
                                <div className='dot'></div>
                                <div className='dot'></div>
                                <div className='dot'></div>
                                <div className='dot'></div>
                                <div className='dot'></div>
                        </div>
                        <div className='zoom-out'><p>Zoom out</p></div>
                </div>
        </div>
      </>
    )
}

export default MinimapMenu
import React,{useState} from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import tv from '../../../../assets/images/tv.svg';
import remote from '../../../../assets/images/remote.png';
import power from '../../../../assets/images/power.svg';
import settings from '../../../../assets/images/settings.svg';
import wifi from '../../../../assets/images/wifi.svg';
import ok from '../../../../assets/images/ok.svg';
import nav from '../../../../assets/images/nav.svg';
import tvSettings from '../../../../assets/images/tv-settings.svg';
import settingsNav from '../../../../assets/images/settingsNav.svg';
import wifiNav from '../../../../assets/images/wifiNav.svg';
import updownwifi from '../../../../assets/images/updownwifi.svg';
import downwifi from '../../../../assets/images/downwifi.svg';
import updates from '../../../../assets/images/updates.svg';
import updateLatest from '../../../../assets/images/updateLatest.svg';
import navigate from '../../../../assets/images/navigate.svg';
import navigateSettings from '../../../../assets/images/navigateSettings.svg';
import addAccount from '../../../../assets/images/addAccount.svg';

import './SetupWifi.css';


// const 

const SoftwareUpdates = () => {

    const pageVariants = {
        in: {
          opacity: 1,
          x:"0%"
        },
        out:{
          opacity: 0,
          x:"30%"
        }
      }

      const pageTransition = {
          duration:0.5,
          type:"tween",
          ease:'easeIn'
        };

    const icons = [power,settings,navigate,navigate,'',ok,''];

    const images = [tv,tvSettings,settingsNav,navigateSettings, addAccount,updates,updateLatest];

    const commands = [ 'click here to power ON',
                        'click here on remote to open settings',
                        'navigate here to update the software',
                        'click OK to view more options',
                        'click ok to add account',
                        'click OK to continue',
                        'Updated to latest'
                    ];
    
    const btns = ['power-btn','settings-btn','right-btn','ok-btn','ok-btn','ok-btn','ok-btn'];
    
    const [index, setindex] = useState(0);
    const handleChange = () => {
        // if(index!==6)
        return index<6?setindex(index+1):setindex(0);
        
    };
    const Img = ({index}) => {
        if(index===0)
        return <></>
        else if(index===1)
        return <motion.img className='t2' src={images[index]} alt="" 
        initial="out"
        animate="in"
        exit = "out"
        variants={pageVariants}
        transition={pageTransition} />
        if(index>1)
        return <>
                <img className='t2' src={images[1]} alt="" />
                <motion.img className='t2' src={images[index]} alt="" 
                    initial="out"
                    animate="in"
                    exit = "out"
                    variants={pageVariants}
                    transition={pageTransition} />
                </>
    }
    const Icons = ({icons,index}) => {
        if(icons[index]==='')
            return <></>
        else
        return <img className='icon' src={icons[index]} alt="" />

    }

      const changePage = () => {
        if(index!==0)
        setindex(index-1);
    }
    const Button = () => {
        if(index!==0)
        return <button className="btn-nav-left" onClick={changePage} > <i className="fas fa-chevron-left"></i> </button>
        else
        return <Link to='/func-nav'>
            <button className="btn-nav-left" onClick={changePage} > <i className="fas fa-chevron-left"></i> </button>
        </Link>

    }
    return (
        <motion.div className='setupWifi'
        initial="out"
        animate="in"
        exit = "out"
        variants={pageTransition}>
            <Button />

            <div style={{position:'relative',top:'0',left:'0'}} >
                <img className='tv-wifi' src={images[0]} alt="" />
                <Img index={index} />

            </div>
            <div>
                <div className="card mb-2" >
                        <Icons icons={icons} index={index} />
                        {commands[index]}
                </div>
            </div>
            {index===6
            ?  <Link to='/func-nav'>
                <button className={btns[index]} onClick={handleChange}></ button>
            </Link>
            :                 <button className={btns[index]} onClick={handleChange}></ button>
            }
                {/* <button className='settings-btn'></button> */}
                {/* <button className='down-btn'></button> */}
                {/* <button className='ok-btn'></button> */}

            <div className="remote-wifi-box">
                <div>
                <img className='remote-wifi' src={remote} alt="" />
                </div>
            </div>
        </motion.div>
    )
}

export default SoftwareUpdates;

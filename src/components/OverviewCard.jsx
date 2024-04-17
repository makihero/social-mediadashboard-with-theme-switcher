import facebookLogo from '../assets/images/icon-facebook.svg'
import twitterLogo from '../assets/images/icon-twitter.svg'
import instagramLogo from '../assets/images/icon-instagram.svg'
import youtubeLogo from '../assets/images/icon-youtube.svg'

import iconUp from '../assets/images/icon-up.svg'
import iconDown from '../assets/images/icon-down.svg'

const getLogo = {
    facebook: facebookLogo,
    twitter: twitterLogo,
    instagram: instagramLogo,
    youtube: youtubeLogo
}

const getColor = {
    facebook: 'facebook',
    twitter: 'twitter',
    instagram: 'instagram',
    youtube: 'youtube'
}


export const OverviewCard = ({ network, user, audiencyType, audiency, today, isUp }) => {
    return (
        <article className="bg-light-grayish-blue-card dark:bg-dark-desaturated-blue-card w-[326px] mx-auto pt-9 pb-6 rounded-lg text-center overflow-hidden relative hover:cursor-pointer hover:brightness-95 dark:hover:brightness-150">

            <div className={`w-full h-1 bg-${getColor[network]} absolute top-0`}></div>
            <div className="flex items-center justify-center gap-2 mb-6">
                <img src={getLogo[network]} alt={`logo of ${network}`} />
                <p className='text-dark-grayish-blue-text dark:text-desatured-blue-text font-bold text-sm'>{user}</p>
            </div>
            <p className='text-very-dark-blue-text dark:text-white font-bold text-6xl'>{audiency}</p> 
            <p className='text-dark-grayish-blue-text dark:text-desatured-blue-text text-xs uppercase tracking-[0.5em] mb-6'>{audiencyType}</p>
            <div className='flex items-center justify-center gap-1'>
                <img src={isUp ? iconUp : iconDown} alt="" />
                <p className={`${isUp ? 'text-lime-green' : 'text-bright-red'} font-bold text-sm`}>{today} Today</p>
            </div>

        </article>
    )
}


export const OverviewTodayCard = ( {network, statsType, stats, porcent, isUp} ) => {
    return (
        <article className='bg-light-grayish-blue-card dark:bg-dark-desaturated-blue-card w-[326px] mx-auto flex flex-col gap-8 rounded-lg p-6 hover:cursor-pointer hover:brightness-95 dark:hover:brightness-150 '>
            
            <div className='flex justify-between'>
                <p className='text-dark-grayish-blue-text dark:text-desatured-blue-text text-sm font-bold'>{statsType}</p>
                <img className='w-5 h-5' src={getLogo[network]} alt="" />
                
            </div>
            <div className='flex justify-between'>
            <p className='text-very-dark-blue-text dark:text-white font-bold text-4xl'>{stats}</p>
                <div className='flex items-center gap-1'>
                    <img src={isUp ? iconUp : iconDown} alt="" />
                    <p className={`${isUp ? 'text-lime-green' : 'text-bright-red'} font-bold text-sm`}>{porcent}%</p>
                </div>
            </div>

        </article>
    )
}
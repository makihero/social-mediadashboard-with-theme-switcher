
import data from '../data/data.json'
import { OverviewCard, OverviewTodayCard } from './OverviewCard'


const numberToK = (number) => {
    if (number >= 10000) {
        return (number / 1000) + 'k'
    } else {
        return number
    }
}

export const OverviewContainer = () => {
    return (
        <section className='flex flex-wrap max-w-[1440px] gap-6 mx-auto mt-[-40px] pb-10 '>
            
            {data.overview.map((item) => {
                return (
                    <OverviewCard
                        key={item.id}
                        network={item.network}
                        user={item.user}
                        audiency={numberToK(item.audiency)}
                        audiencyType={item.audiencyType}
                        today={item.today}
                        isUp={item.isUp}
                    />
                )
            })}

        </section>
    )
}


export const OverviewTodayContanier = () => {

    return (
        <section >
            <h1 className='text-dark-grayish-blue-text dark:text-desatured-blue-text font-bold text-2xl w-[326px] px-6 mb-6'>Overview - Today</h1>
            <div className='flex flex-wrap max-w-[1440px] gap-6 mb-10 mx-auto'>

            {data.overviewToday.map((item) => {
                return (
                    <OverviewTodayCard
                        key={item.id}
                        network={item.network}
                        statsType={item.statsType}
                        stats={numberToK(item.stats)}
                        porcent={item.porcent}
                        isUp={item.isUp}
                    />
                )
            })}

            </div>

        </section>
    )
}
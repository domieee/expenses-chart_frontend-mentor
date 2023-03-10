import { useState } from 'react';
import Data from '../../data/data.json'
import './Chart.scss'

/* 
*/

const Chart = () => {

    const [view, setView] = useState({})

    function toggleFunction(id) {
        setView({
            ...view,
            [id]: !view[id],
        });
    }

    return (
        <main className='main'>
            <h1>Spending - Last 7 Days</h1>
            <section className='chart'>

                {Data.map((data, index) => {
                    return (
                        <article className='chartColumn'>
                                <div
                                    key={index + 1}
                                    className='amountView'
                                    style={{
                                        display: view[index + 1]
                                            ? 'block'
                                            : 'none'
                                    }} >
                                    <p
                                        className='amount'>
                                        {`$${data.amount}`}
                                    </p>
                                </div>
                            <div
                                style={{ 
                                    maxHeight: `${data.amount}%`,
                                    backgroundColor: view[index + 1]
                                        ? 'hsl(186, 34%, 60%)'
                                        : 'hsl(10, 79%, 65%)'
                                }}
                                id={index + 1}
                                className={`chartItem`}     
                                onMouseEnter={() => toggleFunction(index + 1)}
                                onMouseLeave={() => toggleFunction(index + 1)} >
                            </div>
                            <p>{data.day}</p>
                        </article>
                    )
                })}
            </section>

            <section className='footer'>
                <article className='footerLeft'>
                    <p className='subtextFooter'>Total this month</p>
                    <p className='totalSum'>$478.33</p>
                </article>
                <article className='footerRight'>
                    <p className='percentageLastMonth'>+2,4%</p>
                    <p className='subtextFooter'>from last month</p>
                </article>

            </section>
        </main>
    );
}

export default Chart;
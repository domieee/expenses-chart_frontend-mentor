import { useState } from 'react';
import Data from '../../data/data.json'
import './Chart.scss'

/* 
    TODOS:
        TODO: write a function that detects the highest value in the chart and sets it's style to indicate that it's higher
        TODO: write a state for the chartItems, by clicking, it toggles a view to show the actual amount paid on that specific day
*/

const Chart = () => {

    return (
        <main className='main'>
            <h1>Spending - Last 7 Days</h1>
            <section className='chart'>
                {Data.map(data => {
                    return (
                        <article className='chartColumn'>
                            <div className='amountView'>
                                <p className='amount'>{`$${data.amount}`}</p>
                            </div>
                            <div
                                style={{ height: `${data.amount}%` }}
                                className='chartItem'>
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
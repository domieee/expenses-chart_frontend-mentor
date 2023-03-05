import { useState } from 'react';
import Data from '../../data/data.json'
import './Chart.scss'

const Chart = () => {

    return (
        <main className='main'>
            <h1>Spending - Last 7 Days</h1>
            <section className='chart'>
                {Data.map(data => {
                    return (
                        <article className='chartColumn'>
                            <div
                                style={{ height: `${data.amount}%` }}
                                className='chartItem'></div>
                            <p>{data.day}</p>
                        </article>
                    )
                })}
            </section>

            <section className='footer'>
                <article className='footerLeft'>
                    <p className='totalHeader'>Total this month</p>
                    <p className='totalSum'>478.33</p>
                </article>
                <article className='footerRight'>
                    <p className='percentageLastMonth'>+2,4%</p>
                    <p className='subtextLastMonth'>from last month</p>
                </article>

            </section>
        </main>
    );
}

export default Chart;
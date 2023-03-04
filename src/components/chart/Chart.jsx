import Data from '../../data/data.json'
import './Chart.scss'

const Chart = () => {

    const numCopy = [...Data]
    console.log(numCopy);

    function largest(arr) {
        let i;

        let max = numCopy[0];

        // Traverse array elements  
        // from second and compare 
        // every element with current max  
        for (i = 1; i < numCopy.length; i++) {
            if (numCopy[i] > max)
                max = numCopy[i];
        }
        return max;
    }

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
                <p className='total-header'>Total this month</p>
                {Data.map(data => {

                })}
                <p>{}</p>
            </section>
        </main>
    );
}

export default Chart;
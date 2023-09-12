import logo from '../images/menulogo.png';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement, Title, ArcElement, Tooltip, Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import { Sidebar } from '../component/Sidebar';

ChartJS.register(CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend);

export const Main = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December'];
    const data1 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [10, 40, 20, 40, 23, 12, 50,23,12,],
                backgroundColor: '#C27914',
            }
        ],
    };
    var data = {
        labels: ["Red", "Blue"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 40],
                backgroundColor: [
                    "#C2791499",
                    "#C27914"
                ],
                borderColor: [
                    "#C2791499",
                    "#C27914"
                ],
                borderWidth: 0
            }
        ],
    }
    return (
        <div className="bg d-flex">
            <Sidebar />
            <div className='w-100'>
                <div className='fs-4 fw-medium font-poppins bg-putihdikit p-2 ps-3'>
                    Beranda
                </div>
                <div className='row m-2'>
                    <div className='col-12 col-md-6 p-3'>
                        <div className='bg-putihdikit rounded-2 p-3'>
                            <h5>Kumulatif Tunjangan Kinerja</h5>
                            <Bar data={data1} />
                        </div>
                    </div>
                    <div className='col-12 col-md-3 p-3'>
                        <div className='bg-putihdikit rounded-2 p-3'>
                            <h5>DSPP Pusinfolahta TNI</h5>
                            <Doughnut data={data} />
                        </div>
                    </div>
                    <div className='col-12 col-md-3 p-3'>
                        <div className='bg-putihdikit rounded-2 p-3'>
                            <h5>DSPP Mabes TNI</h5>
                            <Doughnut data={data} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
import React from 'react';
import {UserMatchesMultiplayer} from "../service/Http";
import {Bar} from "react-chartjs-2";

class BarGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: [],
            ekia: [],
            assists:[]
        }

    }

    async componentWillMount() {
        const {data} = await UserMatchesMultiplayer('formingSpoon801', 'xbl');
        const {matches} = await data;
        console.log(matches);
        this.setState({
            ekia:await matches.map(x => x.playerStats.ekia),
            dates:await this.normalizeDate(matches.map(x => x['utcEndSeconds'])),
            assists:await matches.map(x => x.playerStats.assists)
        })

    }

    normalizeDate = (timeList) => {
        return timeList.map(x => (`${new Date(x * 1000).toLocaleDateString('en-US')} ${new Date(x * 1000).getHours()}:${new Date(x * 1000).getMinutes()}`))
    };

    createDataForGraph = (name, data, dates, type) => {
        return {
            labels: dates,
            datasets: [
                {
                    type: 'line',
                    fill: false,
                    label: `Average`,
                    backgroundColor: 'rgba(255, 255, 255,0.5)',
                    borderColor: 'rgba(255, 255, 255,0.5)',
                    data: [],
                    steppedLine: false,
                    lineTension: 0.6,
                    pointRadius: 0,
                    pointHitRadius: 10,
                    borderDash: [6],
                },
                {
                    type: type,
                    fill: false,
                    borderDash: [],
                    label: 'EKIA',
                    backgroundColor: 'rgba(255,140,0)',// orange
                    borderColor: 'rgb(255,140,0)',
                    data: data,
                    lineTension: 0.1,
                    pointRadius: (type === 'line' ? 3 : 1),
                    pointHitRadius: 10,

                },
                {

                    type: type,
                    fill: false,
                    borderDash: [],
                    label: 'Asisits',
                    backgroundColor: 'rgba(242, 38, 19, 1)',// orange
                    borderColor: 'rgba(242, 38, 19, 1)',
                    data: this.state.assists,
                    lineTension: 0.1,
                    pointRadius: (type === 'line' ? 3 : 1),
                    pointHitRadius: 10,

                },
            ],
        };
    };

    render() {
        return (
            <div style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
                {
                    this.state.dates.length !== 0 ?
                        <Bar
                            width={500}
                            height={400}
                            data={this.createDataForGraph('Ekia', this.state.ekia, this.state.dates, 'line')}
                            redraw={false}
                            options={{
                                animation: {
                                    duration: 5000
                                },
                                responsive: false,
                                maintainAspectRatio: false
                            }}
                        />
                        :
                        <div>Loadiing</div>}
            </div>
        );
    }
}

export default BarGraph;
import React from 'react';
import {UserMatchesMultiplayer} from "../service/Http";
import {Bar} from "react-chartjs-2";

class BarGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: [],
            ekia: [],
            assists: [],
            result: [],
        }
    }

    async componentWillMount() {
        this.refreshData()

    }

    refreshData = async () => {
        const {data} = await UserMatchesMultiplayer(this.props.match.params.id, this.props.match.params.platform);
        const {matches} = await data;
        const temp = await matches.filter(x => x.mode === this.props.multiplayerMode);
        this.setState({
            ekia: await temp.map(x => x.playerStats.ekia),
            dates: await this.normalizeDate(temp.map(x => x['utcEndSeconds'])),
            assists: await temp.map(x => x.playerStats.assists),
            result: await temp.map(x => x.result)
        })
    };

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
                    borderDash: [1],
                    label: 'Asisits',
                    backgroundColor: 'rgb(242, 38, 19)',// orange
                    borderColor: 'rgb(242, 38, 19)',
                    data: this.state.assists,
                    lineTension: 0.1,
                    pointRadius: (type === 'line' ? 3 : 1),
                    pointHitRadius: 10,

                },
                {
                    type: 'line',
                    fill: false,
                    borderDash: [],
                    label: `EKIA`,
                    backgroundColor: `rgb(255,140,0)`,// orange
                    borderColor: 'rgb(255,140,0)',
                    data: data,
                    lineTension: 0.1,
                    pointRadius: (type === 'line' ? 3 : 1),
                    pointHitRadius: 10,

                },
            ],
        };

    };

    async componentDidUpdate(prevProps) {
        if (this.props.multiplayerMode !== prevProps.multiplayerMode) {
            this.refreshData()
        }

    }

    render() {
        return (
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                {this.state.mode}
                {
                    this.props.multiplayerMode !== '' ?

                        <Bar
                            width={this.props.width}
                            height={this.props.height}
                            data={this.createDataForGraph('Ekia', this.state.ekia, this.state.dates, 'line')}
                            redraw={true}
                            options={
                                {
                                    tooltips: {
                                        mode: 'nearest'
                                    },
                                    animation: {
                                        duration: 5000
                                    },
                                    responsive: false,
                                    maintainAspectRatio: false
                                }}

                        />
                        :
                        <div>Chose mode</div>}
            </div>
        );
    }
}

export default BarGraph;
import { technologies } from '@/data/technologies'
import React, { Component } from 'react'

interface Skills2State {
    isPaused: boolean
    itemsPerScreen: number
    totalItemsNeeded: number
}

class Skills3 extends Component<{}, Skills2State> {
    constructor(props: {}) {
        super(props)
        this.state = {
            isPaused: false,
            itemsPerScreen: 0,
            totalItemsNeeded: 0,
        }
    }

    componentDidMount() {
        this.updateItemsPerScreen()
        window.addEventListener('resize', this.updateItemsPerScreen)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateItemsPerScreen)
    }

    updateItemsPerScreen = () => {
        const itemsPerScreen = Math.ceil(window.innerWidth / 150)
        const totalItemsNeeded = itemsPerScreen * 3
        this.setState({
            itemsPerScreen,
            totalItemsNeeded,
        })
    }

    toggleAnimation = () => {
        this.setState((prevState) => ({
            isPaused: !prevState.isPaused,
        }))
    }

    render() {
        const { isPaused, itemsPerScreen } = this.state

        const repeatedTechnologies = Array.from(
            { length: this.state.totalItemsNeeded },
            (_, index) => technologies[index % technologies.length]
        )

        return (
            <div
                className="logos"
                onMouseEnter={this.toggleAnimation}
                onMouseLeave={this.toggleAnimation}
            >
                <div className={`logos-slide ${isPaused ? 'paused' : ''}`}>
                    {repeatedTechnologies.map((tech, index) => (
                        <div key={index} className="logo-item">
                            <img
                                className="w-20 h-20"
                                src={`tecs/${tech}`}
                                alt="logo da tecnologia"
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Skills3

'use client'
import React, { Component } from 'react'

const technologies: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next',
    'Styled Components',
    'Tailwind',
    'Node.js',
    'Nest',
    'MySql',
    'PostgreSQL',
]

interface Skills2State {
    isPaused: boolean
    itemsPerScreen: number
    totalItemsNeeded: number
}

class Skills1 extends Component<{}, Skills2State> {
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
        if (typeof window !== 'undefined') {
            const itemsPerScreen = Math.ceil(window.innerWidth / 150)
            const totalItemsNeeded = itemsPerScreen * 3
            this.setState({
                itemsPerScreen,
                totalItemsNeeded,
            })
        }
    }

    toggleAnimation = () => {
        this.setState((prevState) => ({
            isPaused: !prevState.isPaused,
        }))
    }

    render() {
        const { isPaused, totalItemsNeeded } = this.state

        const repeatedTechnologies = Array.from(
            { length: totalItemsNeeded },
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
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Skills1

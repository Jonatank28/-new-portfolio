import React, { Component } from 'react'

const technologies = [
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

class Skills2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPaused: false,
        }
    }

    toggleAnimation = () => {
        this.setState((prevState) => ({
            isPaused: !prevState.isPaused,
        }))
    }

    render() {
        const { isPaused } = this.state

        const itemsPerScreen = Math.ceil(window.innerWidth / 150) // Adjust 150 based on your design

        const totalItemsNeeded = itemsPerScreen * 3 // Adjust as needed

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

export default Skills2

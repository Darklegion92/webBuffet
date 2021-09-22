import Carousel from '@/components/carousel'
import MissionVission from '@/components/missionVission'
import React from 'react'
import { useStyles } from './styles'


const Home = () => {
    const classes = useStyles()
    return (
        <>
            <Carousel />
            <div className={classes.container} />
            <MissionVission />
        </>
    )
}

export default Home

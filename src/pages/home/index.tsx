import Carousel from '@/components/carousel'
import MissionVision from '@/components/missionVision'
import { useStyles } from './styles'


const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            {<Carousel />}
            <div className={classes.carousel} />
            <MissionVision />
        </div>
    )
}

export default Home

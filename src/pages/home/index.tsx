import Carousel from '@/components/carousel'
import MissionVision from '@/components/missionVision'
import StoriesSection from '@/components/storiesSection'
import Company from '@/components/company'
import { useStyles } from './styles'


const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.carousel} />
            <MissionVision />
            <Company />
            <StoriesSection />
        </div>
    )
}

export default Home

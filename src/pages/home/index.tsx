import CardLawyer from '@/components/cardLawyer'
import CardServices from '@/components/cardServices'
import Carousel from '@/components/carousel'
import MissionVission from '@/components/missionVission'
import { useStyles } from './styles'


const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Carousel />
            <div className={classes.carousel} />
            <MissionVission />
            <CardServices />
            <CardLawyer />
        </div>
    )
}

export default Home

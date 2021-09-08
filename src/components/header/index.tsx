import { BottomNavigation } from '@material-ui/core'
import { useStyles } from './styles'
import React from 'react'

const Header = () => {
    const classes = useStyles()
    return (
        <BottomNavigation
            className={classes.root}
        >
        </BottomNavigation>
    )
}

export default Header

import{ AppBar, Toolbar,  makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header:{
        background:'#3f51b5'
    },
    tabs: {
        // background:'#FFFFFF',
        color:'white',
        textDecoration:'none',
        margin:20,
        fontSize: 20
        
        
    }
})
const NavBar =() =>{
    const classes = useStyle();
return(
    <AppBar className={classes.header}position="static" >
        <Toolbar>
            <NavLink className={classes.tabs} to="./home" exact >Home</NavLink>
            <NavLink className={classes.tabs} to="./userid" exact >User Details</NavLink>
            <NavLink className={classes.tabs} to="./attendance" exact >Attendance</NavLink>
            <NavLink className={classes.tabs} to="./feepayment" exact >Fees payment</NavLink>
            <NavLink className={classes.tabs} to="./classdetails" exact >Class Details</NavLink>
            <NavLink className={classes.tabs} to="./logout" exact >Logout</NavLink>

        </Toolbar>
    </AppBar>
)
}
export default NavBar;
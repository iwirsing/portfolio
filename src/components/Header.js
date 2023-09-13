import './Header.module.css';
import logo from '../assets/readme images/webdevivy.png'

function Header(props)
{

return <div className='title' style={{ height: "25vh", marginBottom:'1rem', width: 'fit-content'}}>
    {/* <h1 style={{fontSize:"11rem", fontWeight: "900px", paddingTop:'1rem', textShadow:"3px -3px 0 white, 3px -3px 0 white, -3px 3px 0 white, 3px 3px 0 white"}}>
        {props.title}
    </h1> */}
    <img className='logo' src={logo} ></img>
</div>;
}

export default Header;
import './Header.module.css';

function Header(props)
{

return <div className='title' alt='IW' style={{ height: "25vh", marginBottom:'1rem'}}>
    <h1 style={{fontSize:"11rem", fontWeight: "900px", paddingTop:'1rem', textShadow:"3px -3px 0 white, 3px -3px 0 white, -3px 3px 0 white, 3px 3px 0 white"}}>
        {props.title}
    </h1>
</div>;
}

export default Header;
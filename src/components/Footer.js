function Footer(props)
{
    return <div id='Footer' className="text-center" style={{color: 'white', fontSize: '1rem', backgroundColor:'black' }}>
        <i>{props.footer}</i>
        </div>;
}

export default Footer;
function Footer(props)
{
    return <div id='Footer' className="text-center" style={{color: 'white', fontSize: '1rem', backgroundColor:'black' }}>
        <p>{props.footer}</p>
        </div>;
}

export default Footer;
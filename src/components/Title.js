import './Title.module.css';

function Title(props)
{

return <div className='title' alt='IW' style={{ height: "25vh"}}>
    <h1>
        {props.title}
    </h1>
</div>;
}

export default Title;
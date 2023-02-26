import './Title.module.css';

function Title(props)
{

return <div className='title' alt='IW' style={{ height: "30vh"}}>
    <h1>
        {props.title}
    </h1>
</div>;
}

export default Title;
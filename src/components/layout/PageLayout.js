import './Layout.module.css';


function PageLayout(props) {
    return <div className='page col-12 container bg-light shadow-lg p-3 bg-white mt-4 mb-3' style={{ height: "75vh", borderWidth:'20px',borderRadius:'20px', margin:'auto', minHeight:"450px"}}>
        {/* <main className='main' style={{overflowX:'hidden', overflowY:'scroll'}}> */}
        <main className='main'>
            {props.children}
        </main>
    </div>
}

export default PageLayout;
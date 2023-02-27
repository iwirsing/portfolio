import './Layout.module.css';


function PageLayout(props) {
    return <div className='page col-12 container progress bg-light shadow-lg p-3 bg-white mt-3 mb-3' style={{ height: "80vh", borderWidth:'20px',borderRadius:'20px', margin:'auto', minHeight:"400px"}}>
        <main className='main' style={{overflowX:'hidden'}}>
            {props.children}
        </main>
    </div>
}

export default PageLayout;
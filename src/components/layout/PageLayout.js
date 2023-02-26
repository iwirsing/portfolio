import './Layout.module.css';


function PageLayout(props) {
    return <div className='page col-10 col-md-8 col-sm-10 order-2 order-sm-1 container progress bg-light  shadow-lg p-3 mb-5 bg-white ' style={{ height: "55vh", borderWidth:'20px',borderRadius:'20px', margin:'2rem' }}>
        <main className='main' style={{overflowX:'hidden'}}>
            {props.children}
        </main>
    </div>
}

export default PageLayout;
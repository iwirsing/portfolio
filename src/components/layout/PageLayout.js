import './Layout.module.css';


function PageLayout(props) {
    return <div className='page col-8 col-md-8 col-sm-10 order-2 order-sm-1 container progress bg-light  shadow-lg p-3 mb-5 bg-white rounded' style={{ height: "55vh", borderWidth:1,borderRadius:100, margin:'3rem' }}>
        <main className='main' style={{overflowX:'hidden'}}>
            {props.children}
        </main>
    </div>
}

export default PageLayout;
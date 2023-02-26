import classes from './Layout.module.css';


function Layout(props) {
    return <div className={classes.bg}>
        <main className={classes} >
            {props.children}
        </main>
    </div>
}


export default Layout;

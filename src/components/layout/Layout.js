import classes from './Layout.module.css';


function Layout(props) {
    return <div className={classes.bg}>
        <main>
            {props.children}
        </main>
    </div>
}


export default Layout;

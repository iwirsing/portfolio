import myProjects from "../projects/MyProjects";
import Project from '../projects/Project';


function ProjectsPage() {

    return (
        <main className='projectContainer container text-center '>

            <div>My Apps</div>
            <div >
            <div className='apps row justify-content-around'>

                {/* {myProjects.map((proj) =>
                    <div key={proj.key}>
                        <div className='image'>
                            <img src={proj.image} alt={proj.title} />
                        </div>
                        <div className='content'>
                            <a href={proj.link}> <h3>{proj.title}</h3> </a>
                            <p>{proj.description}</p>
                        </div>
                    </div>
                )} */}

                {myProjects.map((proj) =>
                    <Project key={proj.key}
                        image={proj.image}
                        title={proj.title}
                        link={proj.link}
                        description={proj.description} className='col-md'/>
                )}
            </div>
            </div>
        </main>
    );
}

export default ProjectsPage;
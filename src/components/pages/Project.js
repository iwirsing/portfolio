import myProjects from "../projects/MyProjects";
import Project from '../projects/Project';


function ProjectsPage() {

    return (
        <div className='projectContainer container text-center progress ' style={{height: '100%', backgroundColor:'white'}}>


            <div style={{ overflowX: "hidden" }} >
                <div>
                    <div className='apps row justify-content-around'>


                        {myProjects.map((proj) =>
                            <Project key={proj.key}
                                image={proj.image}
                                title={proj.title}
                                repository={proj.repository}
                                link={proj.link}
                                description={proj.description} className='col-md' />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
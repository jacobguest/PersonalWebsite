import './Project.css';

const Project = (props) => {
    return (
        <div className="project-card">
            <div className="project-thumb">box</div>
            <div className="project-title">{props.project.title}</div>
        </div>
    );
};

export default Project;
import React from 'react';
import BackgroundWrapper from "../../hoc/background_wrapper/BackgroundWrapper";
//style components goes here
import classes from './Projects.module.scss';

const Projects = () => {
    return (
        <BackgroundWrapper background_style = {{ backgroundColor: "rgb(150,150,150)" }}>
            <div className={classes.Projects}>

            </div>
        </BackgroundWrapper>
    )
}

export default Projects

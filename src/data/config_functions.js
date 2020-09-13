import data from './config';

export const intro_data = () => {
    const output_intro = {...data.intro}
    return output_intro;
};

export const project_data = () => {
    const output_projectData = [...data.projects.dataArray];
    return output_projectData;
}


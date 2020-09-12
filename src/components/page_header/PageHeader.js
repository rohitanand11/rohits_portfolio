import React from 'react';
import Classes from './PageHeader.module.scss';

const PageHeader = ({pageTitle}) => {
    return (
        <div className={Classes.PageHeader}>
           <p> ━ {pageTitle} </p>
        </div>
    )
}

export default PageHeader

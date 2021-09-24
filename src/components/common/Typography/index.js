import React from 'react';

import './styles.css';

const MainTitle = ({ children }) => (
    <h1 className="MainTitle">
        {children}
    </h1>
);

const MainDescription = ({ children }) => (
    <h2 className="MainDescription">
        {children}
    </h2>
);

const DefaultTitle = ({ children }) => (
    <h2 className="DefaultTitle">
        {children}
    </h2>
);

const DefaultParagraph = ({ children }) => (
    <p className="DefaultParagraph">
        {children}
    </p>
);

const DefaultLink = ({ children }) => (
    <a className="DefaultLink">
        {children}
    </a>
);

const DefaultBold = ({ children }) => (
    <h2 className="DefaultBold">
        {children}
    </h2>
);


export {
    MainTitle, 
    MainDescription, 
    DefaultTitle,
    DefaultParagraph,
    DefaultLink, 
    DefaultBold
};
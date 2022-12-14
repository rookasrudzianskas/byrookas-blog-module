import React from 'react';
import {previewData} from "next/headers";
import groq from "groq";

const query = groq`
    *[_type=='post']{
    ...,
    author->,
    categories[]->,
    } | order(_createdAt desc)
`;

const HomePage = ({}) => {

    if(previewData()) {
        return <div>Preview mode</div>
    }

    return (
        <div>
            <h1>Not in preview mode</h1>
        </div>
    );
};

export default HomePage;
// by Rokas with ❤️

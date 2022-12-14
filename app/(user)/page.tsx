import React from 'react';
import {previewData} from "next/headers";
import groq from "groq";
import { client } from '../../lib/sanity.client';

const query = groq`
    *[_type=='post']{
    ...,
    author->,
    categories[]->,
    } | order(_createdAt desc)
`;

const HomePage = async ({}) => {

    if (previewData()) {
        return <div>Preview mode</div>
    }

    const posts = await client.fetch(query);
    // console.log(posts);

    return (
        <div>
            <h1>Not in preview mode</h1>
        </div>
    );
};

export default HomePage;
// by Rokas with ❤️

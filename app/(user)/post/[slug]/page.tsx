import { groq } from 'next-sanity';
import React from 'react';
import {client} from "../../../../lib/sanity.client";

type Props = {
    params: {
        slug: string;
    };
};

const Post = async ({params: {slug}}: Props) => {
    const query = groq`
        *[_type=='post' && slug.current == $slug][0]
        {
            ...,
            author->,
            categories[]->,
        }
    `;

    const post: Post = await client.fetch(query, {slug});

    return (
        <div>
            Ppost: {slug}
        </div>
    );
};

export default Post;
// by Rokas with ❤️

import React from 'react';
import Image from 'next/image';

type Props = {
    posts: Post[];
};

const BlogList = ({posts}: Props) => {
    // console.log(posts.length)
    return (
        <div>
            <hr className="border-[#F7AB0A] mb-10"/>

            <div>
                {posts.map((post: Post) => (
                    <div key={post._id}>
                        <div>
                            <Image src={urlFor(post.mainImage).url()} className="object-cover object-left lg:object-center" alt={post.author.name} fill />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
// by Rokas with ❤️

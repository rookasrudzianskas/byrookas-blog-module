import React from 'react';
import Image from 'next/image';
import urlFor from '../lib/urlFor';

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
                    <div key={post._id} className="group cursor-pointer flex flex-col">
                        <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                            <Image src={urlFor(post.mainImage).url()} className="object-cover object-left lg:object-center" alt={post.author.name} fill />
                            <div>
                                <div>
                                    <p className="font-bold">{post.title}</p>
                                    <p>
                                        {new Date(post._createdAt).toLocaleDateString("en-US", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
// by Rokas with ❤️

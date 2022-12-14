import React from 'react';
import Image from 'next/image';
import urlFor from '../lib/urlFor';

type Props = {
    posts: Post[];
};

const BlogList = ({posts}: Props) => {
    console.log(posts[0].categories);
    return (
        <div>
            <hr className="border-[#F7AB0A] mb-10"/>

            <div>
                {posts.map((post: Post) => (
                    <div key={post._id} className="group cursor-pointer flex flex-col">
                        <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                            <Image src={urlFor(post.mainImage).url()} className="object-cover object-left lg:object-center" alt={post.author.name} fill />
                            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
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

                                <div>
                                    {post.categories.map((categoryData: Category, index) => {
                                        return (
                                            <div key={index}>
                                                {categoryData !== null && (
                                                    <div className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                                                        <p>{categoryData.title}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
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

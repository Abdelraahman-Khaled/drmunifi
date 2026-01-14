import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const BlogContent = ({ image, title, description, slug }) => {
    return (
        <div className="single-blog-post">
            <div className="post-image">
                <Link href={`/blogs/${slug}`}><Image src={image} alt="image" width={416} height={189} /></Link>
            </div>

            <div className="post-content">
                <h3><Link href={`/blogs/${slug}`}>{title}</Link></h3>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default BlogContent
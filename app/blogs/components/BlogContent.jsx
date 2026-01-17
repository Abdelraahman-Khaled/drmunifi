import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const BlogContent = ({ image, title, description, slug }) => {
    const { language } = useLanguage();

    return (
        <div className='post-item single-blog-post'>
            <div className="post-featured-image">
                <div className="post-image">
                    <Link href={`blogs/${slug}`} data-cursor-text={language === 'ar' ? 'قراءة المقال' : 'Read Article'}>
                        <Image src={image} alt="image" width={416} height={189} />
                    </Link>
                </div>

                <div className="post-content">
                    <h3>
                        <Link href={`blogs/${slug}`}>{title}</Link>
                    </h3>
                    <p className="line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogContent
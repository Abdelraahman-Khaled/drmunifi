import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '../../../../context/LanguageContext'
import { formatDate, toISODate } from '../../../utils/formatDate'

const BlogContent = ({ image, alt, title, description, slug, createdAt }) => {
    const { language } = useLanguage();
    const publishedDate = formatDate(createdAt, language);

    return (
        <div className='post-item single-blog-post'>
            <div className="post-featured-image">
                <div className="post-image">
                    <Link href={`/${language}/blogs/${slug}`} data-cursor-text={language === 'ar' ? 'قراءة المقال' : 'Read Article'}>
                        <Image src={image} alt={alt} width={416} height={189} />
                    </Link>
                </div>

                <div className="post-content">

                    <h3>
                        <Link href={`/${language}/blogs/${slug}`}>{title}</Link>
                    </h3>
                    <p className="line-clamp-2">
                        {description}
                    </p>
                    {publishedDate && (
                        <time className="post-date" dateTime={toISODate(createdAt)}>
                            <i className="far fa-calendar-alt"></i> {publishedDate}
                        </time>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BlogContent
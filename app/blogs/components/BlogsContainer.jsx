import React from 'react'
import BlogContent from './BlogContent'
import { useLanguage } from '@/context/LanguageContext'
import { blogsData } from '../../data/blogsData'

const BlogsContainer = () => {
    const { language } = useLanguage();
    const filteredBlogs = blogsData.filter(blog => blog.language === language);

    return (
        <section className="blog-area ptb-100">
            <div className="container">
                <div className="row">
                    {filteredBlogs.map((blog, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <BlogContent
                                image={blog.image}
                                title={blog.title}
                                description={blog.description}
                                slug={blog.slug}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogsContainer
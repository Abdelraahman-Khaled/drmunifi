import React from 'react'
import Image from 'next/image'
import { blogsData } from '@/app/data/blogsData'
import HeroSection from '@/app/components/HeroSection'
import ScrollTicker from '@/app/components/ScrollTicker';

export async function generateStaticParams() {
    return blogsData.map((blog) => ({
        slug: blog.slug,
    }));
}

const BlogDetailsPage = async ({ params }) => {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === decodeURIComponent(slug));

    if (!blog) {
        return (
            <div className="ptb-100 text-center">
                <h2>Blog post not found</h2>
            </div>
        );
    }

    return (
        <>
            <HeroSection title={blog.title} subTitle={"المدونة"} subTitleLink="/blogs" number={2} />
            <ScrollTicker />
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <Image
                                        className=' rounded-5'
                                        src={blog.image}
                                        alt={blog.title}
                                        width={1200}
                                        height={600}
                                    />
                                </div>

                                <div className="article-content">
                                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />

                                    <h3 className="mt-5">{blog.language === 'ar' ? 'المصادر العلمية:' : 'Scientific Sources:'}</h3>
                                    <ul className='features-list'>
                                        <li>
                                            <a href="https://www.heart.org/" target="_blank">
                                                <i class="flaticon-check-mark"></i> American Heart Association (AHA) - www.heart.org
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.nih.gov/" target="_blank">
                                                <i class="flaticon-check-mark"></i> National Institutes of Health (NIH) - www.nih.gov
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.who.int" target="_blank">
                                                <i class="flaticon-check-mark"></i> World Health Organization (WHO) - www.who.int
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.mayoclinic.org/" target="_blank">
                                                <i class="flaticon-check-mark"></i> Mayo Clinic - www.mayoclinic.org
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetailsPage;

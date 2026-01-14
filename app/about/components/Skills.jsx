import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'
import FeaturesSection from '@/app/components/FeaturesSection'
const Skills = () => {
    const { language } = useLanguage();
    const t = translations.about[language].hero;
    return (
        <div className="skill-education-desc">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <FeaturesSection
                        title={t.skillsTitle}
                        subTitle={t.skillsSub}
                        desc={t.skillsDesc}
                        list={t.skillsList}
                        className="skill-desc"
                    />
                </div>

                <div className="col-lg-6 col-md-12">
                    <FeaturesSection
                        title={t.eduTitle}
                        subTitle={t.eduSub}
                        desc={t.eduDesc}
                        cards={t.eduList}
                        className="education-desc"
                    />
                </div>
            </div>
        </div>)
}

export default Skills
import { useLanguage } from "@/context/LanguageContext";
import { useState } from "react";


const FAQ = ({ items }) => {
    const { language } = useLanguage()
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
        } else {
            setActiveIndex(index);
        }
    };


    console.log(items);

    return (
        <div className="faq-accordion p-0">
            <ul className="accordion ">
                {items.map((item, index) => (
                    <li className="accordion-item" key={index}>
                        <a
                            className={`accordion-title ${activeIndex === index ? 'active' : ''}`}
                            href="javascript:void(0)"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleAccordion(index);
                            }}
                        >
                            <i className="fas fa-plus"></i>
                            {language === 'ar' ? item.question_ar : item.question_en}
                        </a>

                        <div
                            className="accordion-content"
                            style={{
                                display: 'block',
                                maxHeight: activeIndex === index ? '500px' : '0',
                                overflow: 'hidden',
                                transition: 'max-height 0.4s ease-out, padding 0.4s ease',
                                paddingTop: activeIndex === index ? '15px' : '0',
                                paddingBottom: activeIndex === index ? '15px' : '0',
                                opacity: activeIndex === index ? 1 : 0,
                                transitionProperty: 'max-height, padding, opacity'
                            }}
                        >
                            <div className="mb-0 px-1" dangerouslySetInnerHTML={{ __html: language === 'ar' ? item.answer_ar : item.answer_en }} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default FAQ
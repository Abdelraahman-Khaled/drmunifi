const FeaturesSection = ({ title, subTitle, desc, list, cards, className }) => {
    return (
        <div className={className || ""}>
            {title && <span className="sub-title">{title}</span>}
            {subTitle && <h2>{subTitle}</h2>}
            {desc && <p>{desc}</p>}

            <ul>
                {list &&
                    list.map((skill, index) => (
                        <li key={index}>
                            <span>
                                <i className="flaticon-check-mark"></i>
                                {skill}
                            </span>
                        </li>
                    ))}
                {cards &&
                    cards.map((item, index) => (
                        <li key={index}>
                            <div className="icon">
                                <i className={item.icon || "flaticon-doctor"}></i>
                            </div>
                            <span>{item.title}</span>
                            {item.sub}
                        </li>
                    ))

                }
            </ul>
        </div>
    )
}

export default FeaturesSection;
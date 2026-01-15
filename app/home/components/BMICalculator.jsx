"use client"
import React, { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/context/translation'

const BMICalculator = () => {
    const { language } = useLanguage();
    const t = translations.home[language].bmiCalculator;

    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [result, setResult] = useState(null);

    const calculateBMI = (e) => {
        e.preventDefault();
        if (!height || !weight || height <= 0 || weight <= 0) {
            alert(language === 'ar' ? 'الرجاء إدخال قيم صحيحة للطول والوزن.' : 'Please enter valid values for height and weight.');
            return;
        }

        const hMeters = height / 100;
        const bmi = (weight / (hMeters * hMeters)).toFixed(2);

        let categoryKey = '';
        let percentage = 0;

        // Logic from indexx.html script
        if (bmi < 18.5) {
            categoryKey = 'underweight';
            percentage = (bmi / 18.5) * 25;
        } else if (bmi < 25) {
            categoryKey = 'healthy';
            percentage = 25 + ((bmi - 18.5) / 6.4) * 25; // 6.4 derived from indexx script
        } else if (bmi < 30) {
            categoryKey = 'overweight';
            percentage = 50 + ((bmi - 25) / 5) * 25;
        } else if (bmi < 35) {
            categoryKey = 'obese';
            percentage = 75 + ((bmi - 30) / 5) * 25;
        } else {
            categoryKey = 'obese';
            percentage = 100;
        }

        percentage = Math.min(Math.max(percentage, 0), 100);

        setResult({
            bmi,
            category: t.statusLabel[categoryKey],
            percentage,
            categoryKey // Store for potential color logic if needed, though classes should handle it
        });
    };

    const resetLayout = () => {
        setResult(null);
    };

    return (
        <div className="hc-appointment-wrapper hc-sections ptb-100 bg-f4f9fd" id="calc">
            <div className="container">
                <div className="hc-appointment-row">
                    <div className="hc-appointmnet-text">
                        <div className="hc-about-top">
                            <span className="sub-title">{t.title}</span>
                            <h2 className="hc-about-head">{t.subTitle}</h2>
                            <p className="hc-paragraph">{t.desc}</p>
                            <form className="form" onSubmit={calculateBMI} id="bmiForm">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder={t.heightLabel}
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    required
                                />
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder={t.weightLabel}
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    required
                                />
                                <button type="submit" className="form-control">{t.btn}</button>
                            </form>
                        </div>
                    </div>

                    <div className="bmi-table">
                        <div className="bmi-head">
                            <i className="fas fa-tachometer-alt"></i> {t.tableTitle}
                        </div>
                        <ul className="mk-list bmi-list">
                            {t.categories.map((cat, index) => (
                                <React.Fragment key={index}>
                                    <li>{cat.range}</li>
                                    <li>{cat.label}</li>
                                </React.Fragment>
                            ))}
                        </ul>
                        <p className="text-center">{t.note}</p>
                    </div>

                    {result && (
                        <div className="layout" style={{ display: 'block' }}>
                            <div className="result">
                                <i className="fa-solid fa-xmark" onClick={resetLayout}></i>
                                <div className="result-text">
                                    {t.resultTitle}
                                </div>
                                <span className="status" style={{
                                    backgroundColor: result.categoryKey === 'underweight' ? 'lightblue' :
                                        result.categoryKey === 'healthy' ? 'lightgreen' :
                                            result.categoryKey === 'overweight' ? 'yellow' :
                                                'orange'
                                }}>
                                    {t.yourBmi} {result.bmi} - {result.category}
                                </span>
                                <div className="calc_info_line">
                                    <div
                                        className="calc_info_line_result_wrapper"
                                        style={{ [language === 'ar' ? 'right' : 'left']: `${result.percentage}%` }}
                                    >
                                        <div className="calc_info_line_result">
                                            {language === 'ar' ? 'أنت' : 'YOU'}
                                        </div>
                                    </div>
                                    <div className="calc_info_line_underweight calc">
                                        {t.statusLabel.underweight}
                                    </div>
                                    <div className="calc_info_line_healthy calc">
                                        {t.statusLabel.healthy}
                                    </div>
                                    <div className="calc_info_line_overweight calc">
                                        {t.statusLabel.overweight}
                                    </div>
                                    <div className="calc_info_line_obese calc">
                                        {t.statusLabel.obese}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                 /* Fallback styles in case global CSS is missing/broken for these specific elements 
                    We still use the class names from index.html
                 */
                 .layout {
                     display: none; /* Default hidden */
                     position: fixed; /* Or absolute depending on design, matching assumed behavior */
                     top: 0; left: 0; right: 0; bottom: 0;
                     background: rgba(0,0,0,0.5);
                     z-index: 999;
                     display: flex;
                     align-items: center;
                     justify-content: center;
                 }
                 /* Override display block via inline style when active */
            `}</style>
        </div>
    )
}

export default BMICalculator;

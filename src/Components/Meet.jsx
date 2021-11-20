import React from 'react';
import DrWu from '../Assets/drwuacu.jpg'
import EricWu from '../Assets/Eric-Di-Wu.jpeg'

const Meet = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                <img className="profilepic" src={DrWu} alt="drwu"></img>
                </div>
                <div className="col-sm">
                <img className="profilepic2" src={EricWu} alt="ericwu"></img>
                </div>
                <div className="row">
                <div className="col-sm">
                <h3 className="drwuname">
                    Dr. Baolin Wu OMD., L.Ac
                </h3>
                <p>
                Dr. Baolin Wu graduated and worked at Guang An Men Hospital in 
                Beijing China before he decided to come to the United States. 
                During his time at the hospital, he worked both as an internal 
                medicine doctor and a TCM doctor. Even though he had the unique and 
                privileged opportunity to earn a dual degree in both western and eastern 
                medicine, Dr. Baolin Wu focuses his medical career mostly on his practices 
                of TCM and Acupuncture. Since coming to the U.S. Dr. Wu established Beijing 
                Chinese Medical Center (BCMC) and started his practice in Santa Monica, California.
                </p>
                <p>
                With his 26 years of practice in Santa Monica and his over 40 years of 
                accumulated experience in the field of TCM and Acupuncture, Dr. Baolin Wu 
                is in a unique position to help his patients. With his vast amount of 
                knowledge and understanding in medical science and TCM, Dr. Wu has effectively 
                treated a broad spectrum of diseases and illnesses over the years.
                </p>
                <ul>
                    <li>Seventh Generation Family Lineage Practitioner of Traditional Chinese Medicine/Acupuncture</li>
                    <li>Guang An Men Hospital of Beijing China (1972-1985)</li>
                    <li>Traditional Chinese Medicine / Acupuncture Doctor</li>
                    <li>Practiced TCM/Acupuncture in Santa Monica, California. (1990’s – Present)</li>
                    <li>Currently holding LA.c and OMD degree in TCM</li>
                    <li>American Academy of Traditional Chinese Medicine (AATCM): President</li>
                    <li>California Alliance of Acupuncture Medicine (CAAM): Chairman</li>
                </ul>
                </div>
                <div className="col-sm">
                <h3 className="ericwuname">
                    Dr. Eric Wu
                </h3>
                <p>
                Dr. Eric Wu began his career in health care with Southern California University 
                of Health Sciences. During his time there he earned the “Doctor of Chiropractic 
                Degree”. He then furthered his education in Medicine by attending Shantou University 
                School of Medicine in China and earning his MBBS degree. 
                </p>
                <ul>
                    <li>University of California, Irvine (Bachelors Degree)</li>
                    <li>Southern University of Health Sciences (Doctor of Chiropractic, DC Degree)</li>
                    <li>Shantou University Medical College (MBBS Degree)</li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    )
}


export default Meet;
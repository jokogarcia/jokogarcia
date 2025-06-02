
import { mockCV, type CV } from './cv'
import React from 'react';

function App() {
    const [printableMode, setPrintableMode] = React.useState(false);
    const [language, setLanguage] = React.useState('en');
    const [cv, setCv] = React.useState(mockCV);

    if (printableMode) {
        document.body.classList.add('printable');
    }
    let orderedSkills = cv.skills.sort((a, b) => a.localeCompare(b));
    React.useEffect(() => {
        orderedSkills = cv.skills.sort((a, b) => a.localeCompare(b));
        document.title = `${cv.name} - CV`;
        
    }, [cv]);
    React.useEffect(() => {
        if (printableMode) {
            document.body.classList.add('printable');
            document.body.onkeyup = (e) => {
                if (e.key === 'Escape') {
                    setPrintableMode(false);
                }
            }
        }
    else{
            document.body.classList.remove('printable');
            document.body.onkeyup = null;
        }
    }, [printableMode]);
    
    React.useEffect(()=>{
        document.documentElement.lang = language;
        if (language !== 'en') {
             translateCv(cv, language).then(translatedCv => {
            setCv(translatedCv);
             }).catch(error => {
            console.error('Error translating CV:', error);
        });
        }

    }, [language]);
    return (
        <>
            {!printableMode &&
                <div className="actionsBar">
                    <button onClick={() => setPrintableMode(!printableMode)}>
                        {printableMode ? 'Exit Printable Mode' : 'Enter Printable Mode'}
                    </button>
                    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                    </select>
                </div>
            }
            <div className={printableMode ? 'container printable' : 'container'}>
                <aside className="left-panel">
                    <div className="profile-photo">
                        <img src={cv.profilePictureUrl} alt="Foto de Perfil"></img>
                    </div>
                    <section className="section">
                        <h2>{cv.summaryTitle}</h2>
                        <p>
                            {cv.summary}
                        </p>
                    </section>
                    <section className="section">
                        <h2>{cv.skillsTitle}</h2>
                            {orderedSkills.map((skill, index) => (
                                <div key={index} className="skill">{skill}</div>
                            ))}
                        
                    </section>
                    <section className="section">
                        <h2>{cv.educationTitle}</h2>
                        {cv.education.map((edu, index) => (
                            <div key={index}>
                                <h3>{edu.degree}</h3>
                                <p>{edu.institution}</p>
                                <p>{edu.startDate} - {edu.endDate}</p>
                                <p>{edu.location}</p>
                                {edu.description && <p>{edu.description}</p>}
                            </div>
                        ))}

                    </section>
                    <section className="section">
                        <h2>{cv.languageSkillsTitle}</h2>
                        <ul>
                            {cv.languageSkills.map((lang, index) => (
                                <li key={index}>
                                    <strong>{lang.language}</strong>: {lang.level}
                                </li>
                            ))}
                        </ul>
                    </section>
                </aside>
                <main className="right-panel">
                    <header className="header">
                        <h1>{cv.name}</h1>
                        <p className="job-title">{cv.title}</p>
                        <p>Date of Birth: {new Date(cv.contactInfo.dateOfBirth).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.')}</p>
                        <p>Address: {cv.contactInfo.address}</p>
                        <p>Contact Number: <a href={'tel:' + cv.contactInfo.phone}>{cv.contactInfo.phone}</a></p>
                        <p>Email Address: <a href={'mailto:' + cv.contactInfo.email}>{cv.contactInfo.email}</a></p>
                        <p>LinkedIn: <a href={cv.contactInfo.linkedin}>{cv.contactInfo.linkedin}</a></p>
                        <p>GitHub: <a href={cv.contactInfo.github}>{cv.contactInfo.github}</a></p>
                    </header>

                    <section className="section">
                        <h2>{cv.workExperienceTitle}</h2>
                        {cv.workExperience.map((work, index) => (
                            <div key={index}>
                                <h3>{work.company}</h3>
                                <p>{work.position}</p>
                                <p>{work.startDate} - {work.endDate}</p>
                                <ul>
                                    {work.achievements.map((achievement, idx) => (
                                        <li key={idx}>{achievement}</li>
                                    ))}
                                </ul>
                                {work.description && <p>{work.description}</p>}
                            </div>
                        ))}

                    </section>

                    {/* <section className="section">
                <h2>PERSONAL SKILLS</h2>
                <ol>
                    <li>Good at finding fast and effective solutions to various problems</li>
                    <li>Very organized and disciplined.</li>
                    <li>Respectful, well-mannered, and punctual.</li>
                    <li>Willing to learn and is flexible in any source of electrical matters.</li>
                </ol>
            </section> */}
                </main>
            </div>
        </>
    )
}

export default App
async function translateCv(cv:CV, language:string): Promise<CV> {
    // This function should implement the translation logic.
    // For now, it just returns the original CV.
    // In a real application, you would use a translation API or library here.
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cv);
            console.log(JSON.stringify(cv, null, 2));
        }, 1000);
    });
}
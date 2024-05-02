import React from 'react';
import { Element } from 'react-scroll';
import './skillContainer.css';
import reactLogo from "../../assets/reactsvg.svg"
import mongoLogo from "../../assets/Mongodb.png" 
function SkillContainer() {
  return (
    <Element name="skills" className='skillContainer'>
       <div className='skillContent'>
       <h1 id='skills_text'>Skills</h1>
       </div>
      <div id="skillContentHolder">
        <div className='webDev'>
          <div >
          <div className='SkillTextHolder'>Web Devlopment</div>
          <div className='skillsHolder'>
            <div className='skillContentContainer'>
              <img src={"https://www.w3.org/html/logo/badge/html5-badge-h-solo.png"} className='skillLogo' alt='' />
              HTML
            </div>
            <div className='skillContentContainer'>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png"} className='skillLogo' alt='' />
              CSS
            </div>
            <div className='skillContentContainer'>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"} className='skillLogo' alt='' />
              JavaScript
            </div>
            <div className='skillContentContainer'>
              <img src={reactLogo} className='skillLogo' alt='' />
              React js
            </div>
            <div className='skillContentContainer'>
              <img src={mongoLogo} className='skillLogo' alt='' />
              MongoDB
            </div>
          </div>
          </div>
        </div>
        {/* programing languages */}
        <div className='webDev'>
          <div >
          <div className='SkillTextHolder'>programing languages</div>
          <div className='skillsHolder'>
            <div className='skillContentContainer'>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/100px-The_C_Programming_Language_logo.svg.png"} className='skillLogo' alt='' />
              c(programing language)
            </div>
            <div className='skillContentContainer'>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/120px-ISO_C%2B%2B_Logo.svg.png"} className='skillLogo' alt='' />
              C++
            </div>
            <div className='skillContentContainer'>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"} className='skillLogo' alt='' />
              JavaScript
            </div>
            <div className='skillContentContainer'>
              <img src={"https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/121px-Java_programming_language_logo.svg.png"} className='skillLogo' alt='' />
              Java
            </div>
            <div className='skillContentContainer'>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/128px-C_Sharp_Logo_2023.svg.png"} className='skillLogo' alt='' />
              c#
            </div>
          </div>
          </div>
        </div>
        {/* other skills */}
        <div className='webDev'>
          <div >
          <div className='SkillTextHolder'>Others</div>
          <div className='skillsHolder'>
            <div className='skillContentContainer'>
              <img src={"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"} className='skillLogo' alt='' />
              git
            </div>
            <div className='skillContentContainer'>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/200px-GitHub_Invertocat_Logo.svg.png"} className='skillLogo' alt='' />
              GitHub
            </div>
            <div className='skillContentContainer'>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/150px-Tux.svg.png"} className='skillLogo' alt='' />
              Linux
            </div>
            <div className='skillContentContainer'>
              <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Visual_Studio_Code_1.35_icon.png/64px-Visual_Studio_Code_1.35_icon.png"} className='skillLogo' alt='' />
             vs Code
            </div>
            
          </div>
          </div>
        </div>
      </div>
    </Element> 
  )
}

export default SkillContainer

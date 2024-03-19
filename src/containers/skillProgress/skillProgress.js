import React from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import Build from "../../assets/lottie/build";
import { Fade } from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Technologies and DevOps tools</h1>
       
            {techStack.experience.map((exp, i) => (
              <div key={i}>
                  <h3>{exp.header}</h3>

              </div>
          ))}




          </div>
          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img alt="Skills" src={require("../../assets/images/skill.svg")} />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}











// import React from "react";
// import "./Progress.scss";
// import { illustration, techStack } from "../../portfolio";
// import Build from "../../assets/lottie/build";
// import { Fade } from "react-reveal";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";

// export default function StackProgress() {
//   if (techStack.viewSkillBars) {
//     return (
//       <Fade bottom duration={1000} distance="20px">
//         <div className="skills-container">
//           <div className="skills-bar">
//             <h1 className="skills-heading">Technologies and DevOps tools</h1>
//             {techStack.experience.map((exp, i) => (
//               <div key={i}>
//                   <h3>{exp.header}</h3>
//               </div>
//             ))}
//           </div>
//           <div className="skills-image">
//             {illustration.animated ? (
//               <DisplayLottie animationData={Build} />
//             ) : (
//               <img alt="Skills" src={require("../../assets/images/skill.svg")} />
//             )}
//           </div>
//         </div>
//       </Fade>
//     );
//   }
//   return null;
// }







// import React from "react";
// import "./Progress.scss";
// import {illustration, techStack} from "../../portfolio";
// import {Fade} from "react-reveal";
// import Build from "../../assets/lottie/build";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";

// export default function StackProgress() {
//   if (techStack.viewSkillBars) {
//     return (
//       <Fade bottom duration={1000} distance="20px">
//         <div className="skills-container">
//           <div className="skills-bar">
//             <h1 className="skills-heading">Technologies and DevOps tools</h1>
//               <h3>DevOps Tools</h3>
//               <h3>CI/CD</h3>
//               <h3>Monitoring Tools</h3>
//               <h3>Programming And Scripting Languages</h3>
//               {techStack.experience.map((exp, i) => {
//                 const progressStyle = {
//                   width: exp.progressPercentage
//                 };
//               return (
//                 <div key={i} className="skill">
//                   <p>{exp.Stack}</p>
//                   {/* <div className="meter"> */}
//                     <span style={progressStyle}></span>
//                   </div>
//                 // </div>
//               );
//             })}
//           </div>

//           <div className="skills-image">
//             {illustration.animated ? (
//               <DisplayLottie animationData={Build} />
//             ) : (
//               <img
//                 alt="Skills"
//                 src={require("../../assets/images/skill.svg")}
//               />
//             )}
//           </div>
//         </div>
//       </Fade>
//     );
//   }
//   return null;
// }

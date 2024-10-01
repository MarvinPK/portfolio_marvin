import SectionContainer from "../hoc/SectionContainer";
import "./technologies.scss"
import { getSchoolWording, getStacksWording } from "../../data/wording_data.js";

const Technologies = ({isUkLangage}) => {

const colors = {
  maif : "red",
  school: "green",
  personnel :"#F4BE4C",
  canope :"#006167"
 }

const getStacks = () => {
  return [
    {
      name:"ReactJS",
      svgUrl:["assets/icons/react.svg", "assets/icons/webpack.svg"],
      where:[
        {name:"MAIF", color:colors.maif},
        {name:"PERSONNEL", color:colors.personnel}
      ],
      level:4,
      comment: ""
    }, 
    {
      name:"Spring Boot",
      svgUrl:["assets/icons/spring.svg"],
      where:[
        {name:"MAIF", color:colors.maif},
        {name:"PERSONNEL", color:colors.personnel},
        {name:getSchoolWording(isUkLangage).toUpperCase(), color:colors.school}
      ],
      level:4,
      xp: "4 years"
    },
    {
      name:"Java",
      svgUrl:["assets/icons/java.svg"],
      where:[
        {name:"MAIF", color:colors.maif},
        {name:"PERSONNEL", color:colors.personnel},
        {name:getSchoolWording(isUkLangage).toUpperCase(), color:colors.school}
      ],
      level:4,
      comment: ""
    },
    {
      name:"CI/CD",
      svgUrl:["assets/icons/jenkins.svg", "assets/icons/github.svg"], //github, jenkins
      where:[
        {name:"MAIF", color:colors.maif},
        {name:"PERSONNEL", color:colors.personnel},
        {name:getSchoolWording(isUkLangage).toUpperCase(), color:colors.school}
      ],
      level:3,
      comment: ""
    },
    {
      name:"Mobile",
      svgUrl:["assets/icons/react-native.svg"],
      where:[
        {name:"PERSONNEL", color:colors.personnel}
      ],
      level:1,
      comment: "Learning in progress"
    }, 
    {
      name:"Symfony 3",
      svgUrl:["assets/icons/php.svg","assets/icons/symfony.svg"],
      where:[
        {name :"CANOPE", color:colors.canope}
      ],
      level:2,
      comment: ""
    }
  ]

} 
   const crownGenerate = (level) => {
      let res = []
      for (let i = 0; i < level; i++) {
        res.push(<img src="assets/icons/crown-gold.svg"/>)
      }
      for (let i = 0; i < 5-level; i++) {
        res.push(<img src="assets/icons/crown-black.svg"/>)
      }
      return res
    }

    return (
      <SectionContainer sectionId="stacks" title={getStacksWording(isUkLangage)} bgColor="black">
        <div className="cardContainer">
        {
          getStacks().map((techno) => {
            return(
              <div class="card">
              <div className="header">
                <div class="svgList">
                  {techno.svgUrl?.map((svgPath) => {
                    return (
                      <img src={svgPath}/>
                    )
                  })}
                </div>
                <div className="card-title">{techno?.name}</div>
              </div>
              <div className="level">{crownGenerate(techno?.level)}</div>
              {techno?.comment && <div className="diagonal-text">{techno?.comment}</div>}              
              <div className="where">{techno?.where?.map((lieu)=>{
                return (
                  <div className="whereElement" style={{color:lieu.color}}>{lieu.name}</div>
                )
              })}</div>
            </div>
            )

          })
        }
        </div>
      </SectionContainer>
    );
}

export default Technologies
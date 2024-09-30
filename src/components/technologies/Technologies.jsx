import SectionContainer from "../hoc/SectionContainer";
import "./technologies.scss"
import {TECHNOLOGIES} from "./data.js"

const Technologies = () => {

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
      <SectionContainer sectionId="technologies" title="Technologies" bgColor="black">
        <div className="cardContainer">
        {
          TECHNOLOGIES.map((techno) => {
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
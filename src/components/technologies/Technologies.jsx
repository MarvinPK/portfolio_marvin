import SectionContainer from "../hoc/SectionContainer";
import "./technologies.scss"
import {TECHNOLOGIES} from "./data.js"

const Technologies = () => {

   const crownGenerate = (level) => {
    //PIERRE
    for (let i = 0; i < level; i++) {
      <img src="assets/icons/crown-gold.svg"/>
    }
    for (let i = 0; i < 5-level; i++) {
      <img src="assets/icons/crown-black.svg"/>
    }

    //MOI
    /*  if(level == 1){
        return (
          <>
            <img src="assets/icons/crown-gold.svg"/>
            <img src="assets/icons/crown-black.svg"/>
            <img src="assets/icons/crown-black.svg"/>
            <img src="assets/icons/crown-black.svg"/>
            <img src="assets/icons/crown-black.svg"/>
          </>
        )
      }   
      if(level == 2){
          return (
            <>
              <img src="assets/icons/crown-gold.svg"/>
              <img src="assets/icons/crown-gold.svg"/>
              <img src="assets/icons/crown-black.svg"/>
              <img src="assets/icons/crown-black.svg"/>
              <img src="assets/icons/crown-black.svg"/>
            </>
          )           
      }
      if(level == 3){
        return (
          <>
            <img src="assets/icons/crown-gold.svg"/>
            <img src="assets/icons/crown-gold.svg"/>
            <img src="assets/icons/crown-gold.svg"/>
            <img src="assets/icons/crown-black.svg"/>
            <img src="assets/icons/crown-black.svg"/>
          </>
        )           
      }
      if(level == 4){
        return (
          <>
            <img src="assets/icons/crown-gold.svg"/>
            <img src="assets/icons/crown-gold.svg"/>
            <img src="assets/icons/crown-gold.svg"/>
            <img src="assets/icons/crown-gold.svg"/>
            <img src="assets/icons/crown-black.svg"/>
          </>
        )           
      }
      if(level == 5){
        return (
          <>
            <img src="assets/icons/crown-gold.svg"/>
            <img src="assets/icons/crown-gold.svg"/>
            <img src="assets/icons/crown-gold.svg"/>
            <img src="assets/icons/crown-gold.svg"/>
            <img src="assets/icons/crown-gold.svg"/>
          </>
        )           
      }*/
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
              <div className="comment">{techno?.comment && techno?.comment}</div>
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
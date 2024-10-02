import { getExperiencesWording } from "../../data/wording_data";
import SectionContainer from "../hoc/SectionContainer";
import "./experiences.scss"

const Experiences = ({isUkLangage}) => {
    return (
      <SectionContainer sectionId="experiences" title={getExperiencesWording(isUkLangage)} bgColor="black">
        <div class="experienceContainer">
          <div class="line"></div>
          <div class="circle-container">
              <div class="circle-card-wrapper">
                  <div class="circle"></div>
                  <div class="card">Carte 1</div>
              </div>
              <div class="circle-card-wrapper">
                  <div class="circle"></div>
                  <div class="card">Carte 2</div>
              </div>
              <div class="circle-card-wrapper">
                  <div class="circle"></div>
                  <div class="card">Carte 3</div>
              </div>
              <div class="circle-card-wrapper">
                  <div class="circle"></div>
                  <div class="card">Carte 4</div>
              </div>
              <div class="circle-card-wrapper">
                  <div class="circle"></div>
                  <div class="card">Carte 5</div>
              </div>
          </div>
        </div>
      </SectionContainer>
    );
}

export default Experiences

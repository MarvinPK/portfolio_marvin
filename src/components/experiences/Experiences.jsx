import { getExperiencesWording } from "../../data/wording_data";
import SectionContainer from "../hoc/SectionContainer";
import "./experiences.scss"

const Experiences = ({isUkLangage}) => {

  const locationSvg = () => {
    return (
      <svg fill="#000000" version="1.1" id="Capa_1" width="15px" height="15px" viewBox="0 0 395.71 395.71">
        <g>
          <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
            c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
            C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
            c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"/>
        </g>
      </svg>
    )
  }

    return (
      <SectionContainer sectionId="experiences" title={getExperiencesWording(isUkLangage)} bgColor="black">
        <div class="experienceContainer">
          <div class="line"></div>
          <div class="circle-container">
              <div class="circle-card-wrapper">
                  <div class="circle"></div>
                  <div class="card">
                    <div className="corner">
                    <img src="assets/icons/MAIF.svg" alt="MAIF"/>
                    </div>
                    <div className="when">SEPT 2022 - </div>
                    <div className="title">FullStack developer • MAIF</div>
                    <div className="where">{locationSvg()} France, Niort</div>
                  </div>
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

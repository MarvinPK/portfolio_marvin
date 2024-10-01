import { getExperiencesWording } from "../../data/wording_data";
import SectionContainer from "../hoc/SectionContainer";

const Experiences = ({isUkLangage}) => {
    return (
      <SectionContainer sectionId="experiences" title={getExperiencesWording(isUkLangage)} bgColor="black">
        <p>content</p>
      </SectionContainer>

    );
}

export default Experiences

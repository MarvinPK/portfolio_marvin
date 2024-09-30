import "./sectionContainer.scss"

const SectionContainer = ({title, sectionId, bgColor, classNameSection, classNameContainer, fullScreen=true, children}) => {
    const sectionStyle = () => {
        return {
            height: fullScreen && "100vh",
            display: "flex",
            padding: "0 20px",
            backgroundColor: bgColor,
            alignItems: "flex-start",
            color: bgColor == "white" ? "black" : "white"
        }
    }

    const containerStyle = () => {
        return {
            marginLeft: "10%"
        }
    }
       
    return (
        <section id={sectionId} className= {`section ${classNameSection}`} style={sectionStyle()}>
            <div className={`container ${classNameContainer}`} style={containerStyle()}>
                { 
                    title && 
                        <div className="title"><h1 style={{fontWeight:"normal", marginBottom:"5%", width: "fitContent"}}>{title}</h1></div>
                }
                {children}
            </div>
        </section>
    )
}

export default SectionContainer
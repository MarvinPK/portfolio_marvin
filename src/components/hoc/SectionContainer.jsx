import "./sectionContainer.scss"

const  SectionContainer = ({title, sectionId, bgColor, classNameSection, classNameContainer, fullScreen=true, children}) => {
    const sectionStyle = () => {
        return {
            minHeight: fullScreen && "100vh",
            maxHeight: "auto",
            backgroundColor: bgColor,
            color: bgColor === "white" ? "black" : "white",
        }
    }

    const containerStyle = () => {
        return {
            marginLeft: "10%",
            marginRight: "10%",
            padding: "1% 0%"
        }
    }
       
    return (
        <section id={sectionId} className= {`section ${classNameSection}`} style={sectionStyle()}>
            <div className={`container ${classNameContainer}`} style={containerStyle()}>
                { 
                    title && 
                        <div className="title-container" style={{width: "fit-content"}}>
                            <h1 style={{fontWeight:"normal", marginBottom :"5px"}}
                            >
                                {title}
                            </h1>
                        </div>
                }
                {children}
            </div>
        </section>
    )
}

export default SectionContainer
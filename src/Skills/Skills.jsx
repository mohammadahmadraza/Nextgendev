import { techIcons } from "../Assetspath";

function Skills() {
    const skillCardStyling = {
        width: '150px',
        height: '150px'
    }
    return (
        <div className="container pt-4">
            <h2> Technologies I Work On</h2>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {
                    techIcons.map(({ icon_name, path }, index) => {
                        return (
                            <div key={index} className="m-4 bg bg-success-subtle rounded shadow-lg p-2" style={skillCardStyling}>
                                <h5>{icon_name}</h5>
                                <img src={path} alt={icon_name} width='90' height='90' />
                            </div>
                        )
                    }

                    )
                }
            </div>
        </div>
    )
}

export default Skills;
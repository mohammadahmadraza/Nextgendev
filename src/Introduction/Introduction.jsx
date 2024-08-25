import { officalIcons } from "../Assetspath.js";

function Introduction() {


    const introductionStyling = {
        marginTop: '20px',
        padding: '20px'
    }
    const iconsStyling = {
        width: '35px',
        height: '35px',
        margin: '6px 0px 0px 0px'
    }
    const iconsBgStyling = {
        backgroundColor: '#FFB996',
        width: '45px',
        height: '45px',
        borderRadius: '100%',
        margin: '8px 0px 0px 0px'
    }
    const DownloadCV = () => {
        const CV_URL = 'http://localhost:5173/assets/Muhammad Ahmad Raza - CV.pdf';
        const link = document.createElement('a');
        link.href = CV_URL;
        link.setAttribute('download', 'Muhammad Ahmad Raza - CV.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();

    }

    return (
        <div className="container " style={introductionStyling}>
            <div className="row"><h4>Happy 😍 to see you here. </h4></div>
            <div className="row">
                <div className="col-md-1 d-none d-md-flex flex-column ">
                    {
                        officalIcons.map(({ icon_name, path }, index) => {
                            return (
                                <div style={iconsBgStyling} key={index}>
                                    <img src={path} alt={icon_name} style={iconsStyling} />
                                </div>
                            )
                        })
                    }

                </div>
                <div className=" col-sm-12  col-md-5 d-flex flex-column align-items-start pt-2 pb-2">
                    <h2> Hi! I am Ahmad. </h2>
                    <h3 className="text-start">I am a web developer, having 1 year of experience in developing amazing websites.</h3>
                    <div className="mt-auto"><button onClick={() => { DownloadCV() }}>Download CV</button></div>
                </div>
                <div className=" col-sm-12 col-md-6 pt-2 pb-2">
                    <img src="assets\p1.jpg" alt="logo" width="150" height="150" />
                </div>
            </div>
        </div>
    )
}

export default Introduction;
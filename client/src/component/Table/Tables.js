import { Link } from 'react-router-dom';
import './tables.css'
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Tables = () => {
    return (
        <>
            <section className="container bothtable">
                <div className="Firsttable">
                    <table class="table borderless">
                        <thead class="thead"><tr><th scope="col"><span>AIIMS NEET Cut-Off</span></th></tr></thead> <br />
                        <tbody >
                            <tr><td><Link to="/college-details/aiimsdelhi"><span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Delhi</Link></td></tr>
                            <tr><td><Link to="/college-details/aiimsrishikesh"><span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span>  AIIMS Rishikesh</Link></td> </tr>
                            <tr><td><Link to="/college-details/aiimskalyani"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Kalyani</Link></td> </tr>
                            <tr><td><Link to="/college-details/aiimsmadurai"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Madurai</Link></td></tr>
                            <tr><td><Link to="/college-details/aiimsgorakpur"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Gorakhpur </Link></td></tr>
                            <tr><td><Link to="/college-details/aiimspatna"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Patna</Link></td> </tr>
                            <tr> <td><Link to="/college-details/aiimsraebrali"><span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span>  AIIMS Raebareli</Link></td></tr>
                            <tr><td><Link to="/college-details/aiimsjammu"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Jammu </Link></td></tr>
                            <tr> <td><Link to="/college-details/aiimsdeoghar"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Deoghar</Link></td></tr>
                            <tr> <td><Link to="/college-details/aiimsbibinagar"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Bibinagar</Link></td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="secondtable">
                    <table class="table borderless ">
                        <thead class="thead"> <tr><th scope="col">AIIMS NEET Cut-Off</th></tr></thead> <br />
                        <tbody>
                            <tr><td><Link to="/college-details/aiimsbhatinda"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS batinda</Link></td></tr>
                            <tr><td><Link to="/college-details/aiimsraipur"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Raipur</Link></td> </tr>
                            <tr><td><Link to="/college-details/aiimsbhopal"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Bhopal</Link></td></tr>
                            <tr><td><Link to="/college-details/aiimsjodhpur"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Jodhapur</Link></td></tr>
                            <tr><td><Link to="/college-details/aiimsbhubaneswar"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Bhubaneswar</Link></td></tr>
                            <tr><td><Link to="/college-details/aiimsguwahati"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Guwahati</Link></td> </tr>
                            <tr><td><Link to="/college-details/aiimsnagpur"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Nagpur</Link></td> </tr>
                            <tr><td><Link to="/college-details/aiimsbilaspur"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Bilaspur</Link></td> </tr>
                            <tr><td><Link to="/college-details/aiimsrajkot">  <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Rajkot</Link></td> </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Tables

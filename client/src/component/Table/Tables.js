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
                            <tr> <td><a href=" #"><span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span>  AIIMS Raebareli</a></td></tr>
                            <tr><td><a href=" #"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Jammu </a></td></tr>
                            <tr> <td><a href=" #"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Deoghar</a></td></tr>
                            <tr> <td><a href=" #"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Bibinagar</a></td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="secondtable">
                    <table class="table borderless ">
                        <thead class="thead"> <tr><th scope="col">AIIMS NEET Cut-Off</th></tr></thead> <br />
                        <tbody>
                            <tr><td><a href=" #"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS batinda</a></td></tr>
                            <tr><td><Link to="/college-details/aiimsraipur"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Raipur</Link></td> </tr>
                            <tr><td><Link to="/college-details/aiimsbhopal"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Bhopal</Link></td></tr>
                            <tr><td><Link to="/college-details/aiimsjodhpur"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Jodhapur</Link></td></tr>
                            <tr><td><Link to="/college-details/aiimsbhubaneswar"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Bhubaneswar</Link></td></tr>
                            <tr><td><a href=" #"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Guwahati</a></td> </tr>
                            <tr><td><a href=" #"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Nagpur</a></td> </tr>
                            <tr><td><a href=" #"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Bilaspur</a></td> </tr>
                            <tr><td><a href=" #"> <span style={{ fontSize: ".8rem", color: "#232354" }} ><BsFillCheckCircleFill /></span> AIIMS Rajkot</a></td> </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Tables

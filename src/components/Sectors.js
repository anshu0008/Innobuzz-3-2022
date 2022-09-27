import React from "react";
import "./sector.css";
import logo1 from './images/health.png';
import logo2 from './images/web3.jpg';
import logo3 from './images/agriculture.png'
import logo4 from './images/inno.png'
export default function Sectors() {
  return (
    <div className="sector">
      <div className="sector1">
        <div className="sectordetails">
          <div className="sectorContent">
            <h1>Health Care</h1>

            <br></br>
            <p>
              <i>
              Health care or healthcare is the improvement of health via the prevention, diagnosis, treatment, amelioration, or cure of disease, illness, injury, and other physical and mental impairments in people. 
              </i>
            </p>
          </div>
          <img src={logo1} className="web3" />
        </div>
        <div className="sectordetails">
          <div className="sectorContent">
            <h1>open</h1>
            <h1>Innovation</h1>
            <br></br>
            <p>
              <i>
                Open innovation is “the use of purposive inflows and outflows of
                knowledge to accelerate internal innovation."
              </i>
            </p>
          </div>
          <img src={logo4} className="web3" />
        </div>
      </div>
      <div className="sector2">
        <div className="sectordetails">
          <div className="sectorContent">
            <h1>WEB3</h1>

            <br></br>
            <p>
              <i>
                Web3 has become a catch-all term for the vision of a new, better
                internet.Some commentators argue that Web3 will provide increased data security, scalability, and privacy for users and combat the influence of large technology companies. 
              </i>
            </p>
          </div>
          <img
            src={logo2}
            className="web3"
          />
        </div>
        <div className="sectordetails">
          <div className="sectorContent">
            <h1>Agriculture</h1>

            <br></br>
            <p>
              <i>
              Agriculture or farming is the practice of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities.
              </i>
            </p>
          </div>
          <img
            src={logo3}
            className="web3"
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { FaMapMarkerAlt, FaUser, FaBed, FaBath, FaRulerCombined, FaWifi, FaCocktail, FaUmbrellaBeach, FaTv, FaShieldAlt, FaWindowClose } from "react-icons/fa";
import "./SuiteCard.css";

const SuiteCard = () => {
  return (
    <div className="suite-card">
      <div className="suite-image">
        <img src="https://th.bing.com/th/id/OIP.rB7rrxaK9pVrw8gHDXr2TAHaE7?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img>
        <button className="tour-button">Take a 360° tour of the suite.<HiArrowSmRight />
        <div className="icons">.<HiArrowSmRight /></div>
        </button>
      </div>

      <div className="suite-content">
        <div className="suite-header">
          <h2 className="suite-title">Suite</h2>
          <span className="price">$160 <small>High season</small></span>
        </div>
        
        <p className="location">
          <FaMapMarkerAlt /> Viana do Castelo, Portugal
        </p>

        <div className="suite-details">
          <span><FaUser /> 3</span>
          <span><FaBed /> 2+2</span>
          <span><FaBath /> 1</span>
          <span><FaRulerCombined /> 53.75 sqm</span>
        </div>

        <div className="accommodations">
          <div className="accommodation-item"><FaWifi /> Wi-Fi</div>
          <div className="accommodation-item"><FaBed /> King size bed 2+2</div>
          <div className="accommodation-item"><FaCocktail /> Minibar</div>
          <div className="accommodation-item"><FaUmbrellaBeach /> Sea side balcony</div>
          <div className="accommodation-item"><FaTv /> Digital safe</div>
          <div className="accommodation-item"><FaWindowClose /> Soundproof windows</div>
        </div>

        <p className="suite-description">
          Sophisticated and cozy, these suites were designed to envelop your senses, enabling you to free your mind, relax, and enjoy a complete experience.
        </p>

        <button className="book-button">Book the room</button>
      </div>
    </div>
  );
};

export default SuiteCard;
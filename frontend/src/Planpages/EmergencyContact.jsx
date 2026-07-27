import emergencyContacts from "../data/emergencyContacts";

import {
  FaPhoneVolume,
} from "react-icons/fa6";

import "./EmergencyContact.css";

function EmergencyContact() {

  return (

    <div className="helpline-page" style={{ paddingTop: "95px" }}>

      <div className="container py-5">

        {/* HEADING */}

        <div className="text-center mb-5">

          <p className="helpline-subheading mb-2">
            SAFETY & SUPPORT
          </p>

          <h1 className="fw-bold helpline-title">
            Emergency Contacts
          </h1>

          <p className="helpline-text">
            Quick access to important helpline numbers during your journey
          </p>

        </div>

        {/* GRID */}

        <div className="row g-4">

          {emergencyContacts.map((item) => (

            <div
              className="col-lg-3 col-md-6"
              key={item.id}
            >

              <div className="helpline-card h-100 p-4 text-center">

                {/* ICON */}

                <div
                  className="helpline-icon mx-auto mb-4"
                  style={{
                    color: item.color,
                  }}
                >
                  <i className={item.icon}></i>
                </div>

                {/* TITLE */}

                <h4 className="fw-bold helpline-card-title">
                  {item.name}
                </h4>

                {/* NUMBER */}

                <p className="helpline-number">
                  {item.number}
                </p>

                {/* BUTTON */}

                <a
                  href={`tel:${item.number}`}
                  className="btn helpline-btn"
                >
                  <FaPhoneVolume className="me-2" />
                  Call Now
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default EmergencyContact;
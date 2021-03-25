import React from "react";
import "./styles.css";
const servicesNames = {
  services: [
    {
      serviceId: 1,
      name: "ABC LTD",
      rating: 4.5,
      job: 56,
      rate: 3500,
      imgURL: require("./1.jpg")
    },
    {
      serviceId: 2,
      name: "DEF LTD",
      rating: 3,
      job: 23,
      rate: 2500,
      imgURL: require("./2.jpg")
    },
    {
      serviceId: 3,
      name: "GHI LTD",
      rating: 4,
      job: 21,
      rate: 2100,
      imgURL: require("./3.jpg")
    }
  ]
};

class Services extends React.Component {
  render() {
    const servicesList = this.props.services.map((service) => {
      return (
        <div key={service.serviceId}>
          <div className="left">
            <img src={service.imgURL} alt={service.name} />
          </div>
          <div className="left center">
            <p>{service.name}</p>
            <p>Rating &nbsp;&nbsp;Job &nbsp;&nbsp;Rate</p>
            <p>
              &nbsp;&nbsp;{service.rating}{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{service.job}{" "}
              &nbsp;&nbsp;&nbsp;{service.rate}
            </p>
          </div>
        </div>
      );
    });
    return <div>{servicesList}</div>;
  }
}
export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="brandName">Wash Car</div>
      </div>
      <Services services={servicesNames.services} />
    </div>
  );
}

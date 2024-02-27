import React from "react";
import "./Main.css";
import Card from "../Card/Card";
import Card2 from "../Card/Card2";
import Card3 from "../Card3/Card3";
import SignUp from "../SignUp/SignUp";
import Footer from "../Footer/Footer";
import Header from "../haedar/Header";
import Header2 from "../Header2/Header2";

const Main = () => {
  // Counter to keep track of card numbers
  let cardCounter = 1;

  return (
    <div>
      <div className="container">
        <h1>Best Website builders in the US</h1>
      </div>
      <div>
        <Header/>
        <Header2/>
      </div>
      {/* Using Array.map to iterate over card data */}
      {[{
        title: "Main highlights",
        value: 9.8,
        ratingtext: "Exceptional",
        heading: "WixPro 72-Inch Responsive Website Builder-",
        text: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        text2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
      }, {
        title: "Main highlights",
        value: 9.5,
        ratingtext: "Excellent",
        heading: "SiteCraft 68-Inch Ultimate Web Design Studio-",
        text: "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
        text2: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
      }, {
        title: "Main highlights",
        value: 9.3,
        ratingtext: "Exceptional",
        heading: "WixPro 72-Inch Responsive Website Builder-",
        text: "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
        text2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
      }].map(cardData => (
        <Card
          key={cardCounter++} // Incrementing the counter for each card
          number={cardCounter} // Passing the card number as a prop
          {...cardData} // Spread cardData to pass as props
        />
      ))}
      {/* Adding Card2 */}
      <Card2
        title={"Main highlights"}
        value={9.3}
        ratingtext={"Exceptional"}
        heading={"WixPro 72-Inch Responsive Website Builder-"}
        text={"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"}
      />
      {/* Display Card3 components in a single line centered horizontally */}
      <div className="head">
        <h2>Related deals you might like for</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" ,marginLeft:"60px",gap:"30px"}}>
        
        <Card3 />
        <Card3 />
        <Card3 />
      </div>
      <div>
       <SignUp/>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;

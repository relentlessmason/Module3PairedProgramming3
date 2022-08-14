import React from "react";
import { NavLink } from "react-router-dom";

class ContactUs extends React.Component {
    render() {
        return (
<main>
<section class="top-section-wrapper">
    <div class="logo-title-wrapper">
        <img id="logo" src="images/te-pops.png" />
        <h1 id="title">Tech Elevator Popsicles</h1>
    </div>
    <div class="button-wrapper">
        <button type="button" id="button-home"><NavLink to="/index">HOME</NavLink></button>
        <button type="button" id="button-store">STORE</button>
        <button type="button" id="button-contact"><NavLink to="/contact-us">CONTACT US</NavLink></button>
    </div>
</section>

<section class="form-section-wrapper" />
    <h2 id="contact-us-header">Contact Us</h2>
    <form />
        <label for="name">Name:</label><br />
        <input type="text" id="name-field" name="name" size="50" />
        <br />
        
        <label for="referral">How did you hear of us?</label><br />
        <select id="referral-field" name="referral">
            <option value="pm">Popsicle Monthly</option>
            <option value="te">Tech Elevator</option>
        </select>
        <br />

        <label for="faveecolor">What color is your favorite popsicle?</label>
        <br />
        <input type="color" id="fave-color" name="favecolor" value="#00afef" />
        <br />

        <label for="comments">Please let us know any comments you have:</label>
        <br />

        <textarea id="comment-area" name="comments" rows="8" cols="50"></textarea>
        <br />

        <input type="submit" id="submit-button" value="Submit" />
        </main>
    
            );

        }
}

export default ContactUs;
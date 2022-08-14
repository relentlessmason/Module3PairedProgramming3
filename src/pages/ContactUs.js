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
    <button type="button" id="button-home"><NavLink to="/">HOME</NavLink></button>
            <button type="button" id="button-store">STORE</button>
            <button type="button" id="button-contact"><NavLink to="/ContactUs">CONTACT US</NavLink></button>
    </div>
</section>

        <br />
<section class="form-section-wrapper">

<h2 id="contact-us-header">Contact Us</h2>
<section class="section-2">
    <form>
        <label for="name">Name:</label><br />
        <input type="text" id="name-field" name="name" size="50" placeholder="Popsicle-Jones"/>
        <br /><br />
        
        <label for="referral">How did you hear of us?</label><br />
        <select id="referral-field" name="referral">
            <option value="pm">Popsicle Monthly</option>
            <option value="te">Tech Elevator</option>
        </select>
        <br /><br />

        <label for="faveecolor">What color is your favorite popsicle?</label>
        <br />
        <input type="color" id="fave-color" name="favecolor" value="#00afef" />
        <br />
        <br />

        <label for="comments">Please let us know any comments you have:</label>
        <br />
        <br />

        <textarea id="comment-area" name="comments" rows="8" cols="50" placeholder="We need more ice-cream trucks!"></textarea>
        <br />
        <br />

        <input type="submit" id="submit-button" value="Submit" /></form>
        
        </section></section>
        </main>
    
            );

        }
}

export default ContactUs;
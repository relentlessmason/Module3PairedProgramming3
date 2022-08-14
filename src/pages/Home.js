import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
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
            <button type="button" id="button-store"><NavLink to="/">Store</NavLink></button>
            <button type="button" id="button-contact"><NavLink to="/ContactUs">CONTACT US</NavLink></button>
        </div>
    </section>

    <section class="section-1">
        <img id="hero-image" src="images/popsicle-rainbow.jpg" />
        <div class="list-wrapper">
            <h2 id="list-header">Did You Know?</h2>
            <ul id="main-list">
                <li>The earliest known popsicles date as far back as 1872. Back then, a popsicle was called a <em>Hokey-Pokey</em></li>
                <li>Popsicles are also known as freezer pops, ice lollies and ice pops.</li>
                <li>The world's largest popsicle was made in 1997 and was 21 feet tall.</li>
                <li>Popsicles have become so popular that a popular arts and craft item is called a popsicle stick.</li>
            </ul>
        </div>
    </section>

    <section class="s2-left-wrapper">
        <img id="blue-pop" src="images/blue-pop.png" />
        <div class="p-race-wrapper">
            <h2 class="s2h2">Popsicle Race</h2>
            <p>Don't forget to sign up for the race! Each attendee will receive their own box of popsicles when they reach the end.</p>
        </div>
    </section>  
      
    <section class="section-2">
    <section class="s2-right-wrapper">
        <h2 class="s2h2">Get refreshed this Summer!</h2>
        <p>Mark this very special occasion of the launch of Tech Elevator Popsicles by buying a gift from our stunning array of items, shipped directly from Cleveland.</p>
        <button type="button" id="button-store"><NavLink to="/">Store</NavLink></button>
    </section></section>

</main>
        );
    }
}

export default Home;
import React from 'react'
import './intro.css'
import { Link } from "react-router-dom";

const Intro = () => {
    return ( 
     <>   
    <div className="intro">
        <p>
        Strava is the social network for the athletes.
        Record an activity and it goes to your Strava feed,
        where your friends and followers can share their own
        races and workouts, give kudos to great performances
        and leave comments on each other's activities.
        </p>
        
        <b>
            Climb Categorization
        </b>

        <p>
            The Strava climb categorization is similar
            to how the UCI categorizes climbs but with some modifications.
            When a climb is categorized, for the Tour de France for example,
            there is a subjective component to the categorization.
            If a climb is at the end of the stage it could get a tougher category
            than if it was earlier in the stage.
            Strava's method is objective, so if a climb is a category 1 climb
            it will always be a category 1.
        </p>


        <p><b>Determining Climb Categories</b></p>
        A segment can be categorized as a climb on Strava if it meets the following criteria:

            <ul>
                <li>The average gradient is at least 3.0% </li>

                <li>The segment distance is at least 300 meters. </li>

                <li>The length of the climb (in meters) multiplied by the grade of the climb is greater than 8,000.</li>
                

                    You will see that a segment is categorized by the number on both the segment page and at the list of
                    segments
                    on your activity page. The categories are broken down as follows:
                    </ul>
                    <ul>
                        <li>Cat 4 <div>{">"} greater than </div> 8000</li>
                        <li>Cat 3 <div>{">"} greater than </div> 16000</li>
                        <li>Cat 2 <div>{">"} greater than </div>  32000</li>
                        <li>Cat 1 <div>{">"} greater than </div>  64000</li>
                        <li>HC (Hors Categorie) <div>{">"} greater than </div>  80000</li>
                    </ul>

                    <img src="https://support.strava.com/hc/article_attachments/360016064251/Climb_Categorization_1_-_Eng.png"
              alt="Hawk Hill image example" class="exBig" style="display: block;"></img>
    </div>

    </>
    );   
};


            export default Intro;
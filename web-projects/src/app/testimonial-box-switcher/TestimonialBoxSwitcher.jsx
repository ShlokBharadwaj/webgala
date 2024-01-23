import React from "react";
import styles from "./TestimonialBoxSwitcher.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialBoxSwitcher = () => {
    return (
        <div className={`${styles.container} box-border flex flex-col items-center justify-center min-h-screen overflow-hidden p-3 bg-[#f1faee] text-white`}>
            <div className="testimonialContainer bg-[#457b9d] rounded-lg m-5 p-12 max-w-3xl relative">
                <div className={`${styles.progressBar} bg-white h-1 w-full m-3`}></div>
                <FontAwesomeIcon icon={faQuoteRight} className="text-white text-3xl absolute top-5 left-10"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faQuoteLeft} className="text-white text-3xl absolute bottom-5 right-10"></FontAwesomeIcon>
                <p className="testimonial leading-7 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsam recusandae neque, id dicta facilis repellendus quod, quis alias ullam vero repudiandae, repellat dolor dolore!</p>
                <div className="user flex items-center justify-center pt-4">
                    <img src="https://source.unsplash.com/random/?portrait" alt="Random user portrait from unsplash.com" className="userImage rounded-[50%] h-20 w-20 object-cover hover:animate-pulse" />
                    <div className="user-details m-3">
                        <h4 className="username m-0 font-bold">Sebastian West</h4>
                        <p className="role font-normal">Senior HR</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialBoxSwitcher;
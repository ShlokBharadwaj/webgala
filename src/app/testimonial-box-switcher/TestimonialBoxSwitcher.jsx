import React, { useState, useEffect } from "react";
import styles from "./TestimonialBoxSwitcher.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const TestimonialBoxSwitcher = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await import("./testimonials.json");
                setTestimonials(response.default);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching testimonials:", error);
                setLoading(false);
            }
        };

        fetchTestimonials();

        const intervalId = setInterval(() => {
            setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 7000);

        return () => {
            clearInterval(intervalId);
        };
    }, [testimonials.length]);

    const { name, position, photo, text } = testimonials[testimonialIndex] || {};

    return (
        <div className={`${styles.container} box-border flex flex-col items-center justify-center min-h-screen overflow-hidden p-3 bg-[#f1faee] text-white`}>
            <div className={`bg-[#457b9d] rounded-lg m-5 p-12 max-w-3xl relative`}>
                {loading && <p>Loading...</p>}
                {!loading && (
                    <>

                        <div className={`${styles.progressBar} bg-white h-1 w-full m-3`}></div>
                        <FontAwesomeIcon icon={faQuoteRight} className="text-white text-3xl absolute top-5 left-10"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-white text-3xl absolute bottom-5 right-10"></FontAwesomeIcon>
                        <p className="leading-7 text-justify">{text}</p>
                        <div className="flex items-center justify-center pt-4">
                            <img src={photo} alt={`Portrait of ${name}`} className="rounded-[50%] h-20 w-20 object-cover hover:animate-pulse" />
                            <div className="m-3">
                                <h4 className="m-0 font-bold">{name}</h4>
                                <p className="font-normal">{position}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default TestimonialBoxSwitcher;

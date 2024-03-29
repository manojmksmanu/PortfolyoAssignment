import { motion } from "framer-motion";
import React from "react";

const LoadingDot = {
    display: "block",
    width: "2rem",
    height: "2rem",
    backgroundColor: "#56e2a4",
    borderRadius: "50%",


};

const LoadingContainer = {
    width: "10rem",
    height: "5rem",
    display: "flex",
    justifyContent: "space-around"
};

const ContainerVariants = {
    initial: {
        transition: {
            staggerChildren: 0.2
        }
    },
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const DotVariants = {
    initial: {
        y: "0%"
    },
    animate: {
        y: ["0%", "100%", "0%"],
        transition: {
            duration: 0.5,
            repeat: Infinity, // Repeat the animation infinitely
            repeatType: "reverse", // Reverse the animation when repeating
            ease: "easeInOut"
        }
    }
};

// const DotTransition = {
//     duration: 0.5,
//     yoyo: "Infinity",
//     ease: "easeInOut"
// };

const PageLoad = () => {
    return (
        <div
            style={{
                paddingTop: "5rem",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <motion.div
                style={LoadingContainer}
                variants={ContainerVariants}
                initial="initial"
                animate="animate"
            >
                <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                />
                <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                />
                <motion.span
                    style={LoadingDot}
                    variants={DotVariants}
                />
            </motion.div>
        </div>
    );
}
export default PageLoad
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero=()=>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Aliz </h1>
            <p className={styles.description}>I am a junior full-stack Software Developer with a strong passion for coding and a commitment to continuous learning.Reach out if you would like to learn more!  </p>
            <a href="#contact" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/portfolio-picture.png")} className={styles.heroImg} alt="picture of me"></img>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
    </section>
}
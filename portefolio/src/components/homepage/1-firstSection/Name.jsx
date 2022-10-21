import React from "react";
import Button from "./Button";
import Mypicture from "../../assets/img/Mypicture";

let styles = {
  rond: "bg-[#472E65] rounded-full w-10 h-10",
  rondP: "bg-[#6649A4] rounded-full w-10 h-10",
  triangle:
    "w-0 h-0  border-l-[40px] border-l-transparent border-b-[40px] border-b-[#6649A4] border-r-[40px] border-r-transparent rotate-12",
  tr1: "w-0 h-0 border-t-[40px] border-t-[#8D7DAF] border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent",
  tr2: "w-0 h-0 border-b-[40px] border-b-[#8D7DAF] border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent",
  h2: "text-white text-3xl font-bold text-center",
  wFull: "w-full",
  mtN16: "-mt-16",
  pt6: "pt-6",
  pl4: "pl-4",
  pr4: "pr-4",
  pt12: "pt-12",
  pt16: "pt-16",
  flex: "flex flex-row justify-between",
  p4: "px-4",
  border: "border-t-4 border-red-500 w-3/5",
  flexCenter: "flex justify-center",
  h1: "capitalize text-red-500 text-3xl font-extrabold text-center w-11/12 leading-10",
  button:
    "text-white capitalize text-2xl bg-[#3848F1] px-4 py-2 rounded-full font-bold",
};

const Name = () => {
  return (
    <section className={`${styles.wFull} ${styles.pt12}`}>
      <div className={`${styles.wFull} ${styles.flex} ${styles.p4}`}>
        <div className={styles.rond}></div>
        <div className={styles.triangle}></div>
      </div>
      <h2 className={`${styles.h2} ${styles.pt16}`}>Hatim NAJOUA</h2>
      <div className={`${styles.flexCenter}`}>
        <hr className={`${styles.border}`}></hr>
      </div>
      <div className={`${styles.flexCenter} ${styles.pt6}`}>
        <h1 className={`${styles.h1}`}>développeur créatif React / Node</h1>
      </div>
      <div className={`${styles.pt12} ${styles.flexCenter}`}>
        <span className={styles.button}>
          {" "}
          <Button />{" "}
        </span>
      </div>
      <div className={`${styles.p4} ${styles.flex}`}>
        <div>
          <div className={styles.tr2}></div>
          <div className={styles.tr1}></div>
        </div>
        <div className={`${styles.rondP}`}></div>
      </div>
      <div className={styles.mtN16}>
        <Mypicture />
      </div>
    </section>
  );
};

export default Name;
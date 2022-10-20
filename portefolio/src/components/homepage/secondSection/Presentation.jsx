import styles from "./styles";

export const Present = () => {
  return (
    <>
      <h2 className={`${styles.h2}`}>présentation</h2>
      <div className={`${styles.flexCenter} ${styles.pt8}`}>
        <hr className={`${styles.border} `}></hr>
          </div>
          <div className={styles.mx2}>
          <p className={styles.paragraphe}>
              Je suis diplomé de développement web et web mobile
              chez ACS school, passionné depuis toujours par les nouvelles
              technologies et de l'univer dev. Que vous soyez une entreprise,
              une agence web ou un particulier, je serai content de répondre 
              à vos besoin.
          </p>
          </div>
    </>
  );
};

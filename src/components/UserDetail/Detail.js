import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

function Detail({ userData }) {
  return (
    <>
      <section className={styles.card}>
        <Link
          href="/"
          style={{
            textAlign: "left",
          }}
        >
          <button className={styles.button}>Geri</button>
        </Link>
        <div className={styles.sol}>
          <div>
            <Image
              src={userData.image}
              className={styles.image}
              alt={userData.name}
              height="60"
              width="60"
              quality={100}
            ></Image>
          </div>
          <div className={styles.contact}>
            <p>
              <b>İsim Soyisim:</b> {userData.name} {userData.lastName}
            </p>
            <p>
              <b>Posiyon:</b> {userData.title}
            </p>
            <p>
              <b>Mail:</b> {userData.email}
            </p>
            <p>
              <b>Telefon:</b> {userData.phone}
            </p>
          </div>
        </div>
        <div className={styles.sag}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam,
            vitae facilis eos alias magnam maiores impedit delectus neque
            mollitia? Eveniet in rerum repellendus sed id, repudiandae nam
            expedita quis veritatis. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Ipsam, vitae facilis eos alias magnam maiores
            impedit delectus neque mollitia? Eveniet in rerum repellendus sed
            id, repudiandae nam expedita quis veritatis. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Ipsam, vitae facilis eos alias
            magnam maiores impedit delectus neque mollitia? Eveniet in rerum
            repellendus sed id, repudiandae nam expedita quis veritatis. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, vitae
            facilis eos alias magnam maiores impedit delectus neque mollitia?
            Eveniet in rerum repellendus sed id, repudiandae nam expedita quis
            veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ipsam, vitae facilis eos alias magnam maiores impedit delectus neque
            mollitia? Eveniet in rerum repellendus sed id, repudiandae nam
            expedita quis veritatis.
          </p>
        </div>
      </section>
    </>
  );
}

export default Detail;

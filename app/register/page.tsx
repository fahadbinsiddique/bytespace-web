import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { RegisterForm } from "@/components/auth/RegisterForm";

import styles from "./register.module.css";

export const metadata: Metadata = {
  title: "Create an account | ByteSpace",
  description: "Create a ByteSpace account and start learning from expert creators.",
};

const courseAvatars = [
  "card-avatar-01.png",
  "card-avatar-02.png",
  "card-avatar-03.png",
  "card-avatar-04.png",
] as const;

const studentAvatars = [
  "crowd-avatar-01.png",
  "crowd-avatar-02.png",
  "crowd-avatar-03.png",
  "crowd-avatar-04.png",
  "crowd-avatar-05.png",
  "crowd-avatar-06.png",
  "crowd-avatar-07.png",
] as const;

function CourseAvatars() {
  return (
    <div className={styles.courseAvatars} aria-label="More than 26 course students">
      {courseAvatars.map((avatar) => (
        <Image
          alt=""
          unoptimized
          className={styles.courseAvatar}
          height={32}
          key={avatar}
          src={`/figma/register/${avatar}`}
          width={32}
        />
      ))}
      <span className={styles.courseAvatarCount}>
        <Image
          alt=""
          height={32}
          src="/figma/register/icon-card-count.svg"
          unoptimized
          width={32}
        />
        <span>26+</span>
      </span>
    </div>
  );
}

function CourseCard({
  className,
  image,
  title,
}: {
  className: string;
  image: string;
  title: string;
}) {
  return (
    <article className={`${styles.courseCard} ${className}`}>
      <div className={styles.courseImage}>
        <Image
          alt=""
          className={styles.coverImage}
          fill
          sizes="341px"
          src={image}
          unoptimized
        />
        <div className={styles.courseTags} aria-label="Course details">
          <span>17 Lessons</span>
          <span>2 hours 16 mins</span>
          <span>59 Comments</span>
        </div>
      </div>
      <div className={styles.courseDetails}>
        <div className={styles.courseHeading}>
          <div>
            <h3>{title}</h3>
            <p>
              by <span>purepearl studio</span>
            </p>
          </div>
          <span className={styles.rating} aria-label="Rated 4.5 out of 5">
            4.5
            <Image
              alt=""
              height={24}
              src="/figma/register/icon-rating-star.svg"
              unoptimized
              width={24}
            />
          </span>
        </div>
        <div className={styles.courseMeta}>
          <span className={styles.level}>
            <Image
              alt=""
              height={20}
              src="/figma/register/icon-signal.svg"
              unoptimized
              width={20}
            />
            Beginner
          </span>
          <CourseAvatars />
        </div>
        <p className={styles.price}>
          $25 <span>/lifetime</span>
        </p>
      </div>
    </article>
  );
}

function Ornament({
  className,
  image,
  mask,
  tint,
}: {
  className: string;
  image: string;
  mask: string;
  tint: "lime" | "white";
}) {
  return (
    <div className={`${styles.ornament} ${className}`} aria-hidden="true">
      <Image
        alt=""
        className={styles.ornamentImage}
        fill
        sizes="250px"
        src={image}
        unoptimized
      />
      <span
        className={`${styles.ornamentTint} ${tint === "lime" ? styles.limeTint : styles.whiteTint}`}
        style={{ maskImage: `url(${mask})` }}
      />
    </div>
  );
}

function HappyStudents() {
  return (
    <aside className={styles.happyStudents} aria-label="Rated 4.5 by 240 students">
      <div>
        <p className={styles.studentsTitle}>Happy Students</p>
        <p className={styles.studentsRating}>
          <strong>4.5</strong> (240)
          <Image alt="" height={16} src="/figma/register/icon-student-star.svg" width={16} />
        </p>
      </div>
      <div className={styles.studentAvatars}>
        {studentAvatars.map((avatar) => (
          <Image
            alt=""
            className={styles.studentAvatar}
            height={43}
            key={avatar}
            src={`/figma/register/${avatar}`}
            unoptimized
            width={43}
          />
        ))}
        <span className={styles.studentCount}>
          <Image
            alt=""
            height={43}
            src="/figma/register/icon-student-count.svg"
            unoptimized
            width={43}
          />
          <span>2K+</span>
        </span>
      </div>
    </aside>
  );
}

export default function RegisterPage() {
  return (
    <main className={styles.page}>
      <div className={styles.grid} aria-hidden="true" />
      <section className={styles.promo} aria-labelledby="promo-heading">
        <header className={styles.brand}>
          <Link aria-label="ByteSpace home" href="/">
            <Image alt="" height={32} priority src="/hero/logo-mark.svg" width={29} />
          </Link>
        </header>

        <div className={styles.pitch}>
          <h2 id="promo-heading">Sign up and come in</h2>
          <p>
            The registration process is straightforward, uncomplicated, and efficient, allowing
            users to sign up quickly, easily, and at no cost
          </p>
        </div>

        <CourseCard
          className={styles.digitalAssetsCard}
          image="/figma/register/cover-build-digital.png"
          title="Build Digital Asset"
        />
        <CourseCard
          className={styles.bigDataCard}
          image="/figma/register/cover-big-data.png"
          title="the Power of Big Data"
        />

        <Ornament
          className={styles.limeRing}
          image="/figma/register/decor-lime-ring.png"
          mask="/figma/register/decor-lime-ring-mask.png"
          tint="lime"
        />
        <Ornament
          className={styles.whiteSwoosh}
          image="/figma/register/decor-white-swoosh.png"
          mask="/figma/register/decor-white-swoosh-mask.png"
          tint="white"
        />
        <Ornament
          className={styles.limeTriangle}
          image="/figma/register/decor-lime-triangle.png"
          mask="/figma/register/decor-lime-triangle-mask.png"
          tint="lime"
        />
        <HappyStudents />
      </section>

      <section className={styles.formPanel} aria-labelledby="register-heading">
        <div className={styles.panelContent}>
          <div>
            <div className={styles.formHeading}>
              <p>Create an Account</p>
              <h1 id="register-heading">
                Welcome to
                <br />
                ByteSpace
              </h1>
            </div>
            <RegisterForm />
          </div>
          <p className={styles.loginPrompt}>
            Already have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </section>
    </main>
  );
}

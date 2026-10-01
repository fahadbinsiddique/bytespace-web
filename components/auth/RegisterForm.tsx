"use client";

import { useState, type FormEvent } from "react";

import styles from "@/app/register/register.module.css";

export function RegisterForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Account creation is not connected yet.");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Full Name</span>
        <input autoComplete="name" name="name" placeholder="Jamie Davis" required />
      </label>
      <label className={styles.field}>
        <span>Email</span>
        <input
          autoComplete="email"
          name="email"
          placeholder="designer@example.com"
          required
          type="email"
        />
      </label>
      <label className={styles.field}>
        <span>Password</span>
        <input
          autoComplete="new-password"
          name="password"
          placeholder="********"
          required
          type="password"
        />
      </label>
      <button className={styles.submitButton} type="submit">
        Continue
      </button>
      <p className={styles.formStatus} role="status">
        {status}
      </p>
    </form>
  );
}

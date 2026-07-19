"use client";

import { useState } from "react";
import { FaMap } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import {
  FORM_OPTIONS,
  ENGINE_OPTIONS,
  TRANSMISSION_OPTIONS,
} from "@/constants/filters";
import type { CamperFilters } from "@/types/filters";
import styles from "./CatalogFilters.module.css";

interface CatalogFiltersProps {
  value: CamperFilters;
  onChange: (filters: CamperFilters) => void;
}

// форма фільтрів у сайдбарі: локація текстом + радіо-групи на кузов/двигун/трансмісію
export default function CatalogFilters({
  value,
  onChange,
}: CatalogFiltersProps) {
  const [location, setLocation] = useState(value.location ?? "");
  const [form, setForm] = useState(value.form ?? "");
  const [engine, setEngine] = useState(value.engine ?? "");
  const [transmission, setTransmission] = useState(value.transmission ?? "");

  // застосовує вибрані фільтри — після цього каталог перезапитується заново
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onChange({
      location: location || undefined,
      form: (form || undefined) as CamperFilters["form"],
      engine: (engine || undefined) as CamperFilters["engine"],
      transmission: (transmission ||
        undefined) as CamperFilters["transmission"],
    });
  };

  // скидає всі поля форми і прибирає активні фільтри
  const handleClear = () => {
    setLocation("");
    setForm("");
    setEngine("");
    setTransmission("");
    onChange({});
  };

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span className={styles.label}>Location</span>
        <span className={styles.inputWrapper}>
          <FaMap className={styles.inputIcon} />
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="City"
            className={styles.input}
          />
        </span>
      </label>

      <h2 className={styles.heading}>Filters</h2>

      <fieldset className={styles.fieldset}>
        <legend className={styles.label}>Camper form</legend>
        {FORM_OPTIONS.map((option) => (
          <label key={option.value} className={styles.option}>
            <input
              type="radio"
              name="form"
              value={option.value}
              checked={form === option.value}
              onChange={(event) => setForm(event.target.value as typeof form)}
            />
            {option.label}
          </label>
        ))}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.label}>Engine</legend>
        {ENGINE_OPTIONS.map((option) => (
          <label key={option.value} className={styles.option}>
            <input
              type="radio"
              name="engine"
              value={option.value}
              checked={engine === option.value}
              onChange={(event) =>
                setEngine(event.target.value as typeof engine)
              }
            />
            {option.label}
          </label>
        ))}
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.label}>Transmission</legend>
        {TRANSMISSION_OPTIONS.map((option) => (
          <label key={option.value} className={styles.option}>
            <input
              type="radio"
              name="transmission"
              value={option.value}
              checked={transmission === option.value}
              onChange={(event) =>
                setTransmission(event.target.value as typeof transmission)
              }
            />
            {option.label}
          </label>
        ))}
      </fieldset>

      <button type="submit" className="btn btn-solid btn-block">
        Search
      </button>
      <button
        type="button"
        className="btn btn-outline btn-block"
        onClick={handleClear}
      >
        <FaXmark /> Clear filters
      </button>
    </form>
  );
}

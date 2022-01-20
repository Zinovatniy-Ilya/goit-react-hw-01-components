import React from "react";
import s from "./Statistics.module.css";

function cellColor() {
  return `#${(Math.random().toString(16) + "00000").slice(2, 8)}`;
}

const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>Upload stats</h2>}
        <ul className={s.statList}>
          {stats.map((el) => {
            const { id, label, percentage } = el;
            return (
              <li
                className={s.item}
                key={id}
                style={{ background: cellColor() }}
              >
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Statistics;
import React from "react";
import calendar from "../assets/icons/calendar.svg";

export const Plans = ({ data = dataPlans }: { data?: planType[] }) => {
  return (
    <section className="plans" id="plans">
      <div className="wrapper plans_wrapper">
        <div className="plans_cards">
          {data.map((p) => (
            <Card plan={p} />
          ))}
        </div>
        <button className="button plans_button">Get a free trial</button>
      </div>
    </section>
  );
};

export const Card = ({ plan }: { plan: planType }) => {
  return (
    <div className="card">
      <img src={calendar} alt="" />
      <h4>{plan.name}</h4>
      <p>{plan.description}</p>
      <h3>{plan.price}$/mo</h3>
    </div>
  );
};

type planType = {
  name: string;
  description: string;
  price: string;
};
const dataPlans: planType[] = [
  {
    name: "Starter Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring",
    price: "12",
  },
  {
    name: "Standart Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring",
    price: "17",
  },
  {
    name: "Premium Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. uisque ullamcorper porttitor blandit. Praesent lorem magna, fring",
    price: "12",
  },
];

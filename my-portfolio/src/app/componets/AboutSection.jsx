import React from "react";
import styled from "styled-components";
import _default from "../themes/default";
import { Bio } from "../data/constans";
import { experiences, education, achievements } from "../data/constans";

export default function AboutSection() {
  return (
    <section
      className="text-white grid grid-cols-1 md:grid-cols-2 relative"
      id="about"
    >
      <div className="py-4 px-6 md:py-16 md:px-12">
        <h1 className="mb-8 text-3xl sm:text-4xl lg:text-5xl font-semibold">
          About Me
        </h1>
        <p className="text-base lg:text-lg">
          Software Engineer focused on scalable backend and full-stack
          applications with hands-on experience in .NET, SQL Server, React,
          RabbitMQ, Redis, Node.js, and MongoDB. I have worked on ERP and
          financial workflows supporting 10,000+ users and high-value monthly
          transactions, with a strong emphasis on performance, reliability, and
          clean delivery.
        </p>
      </div>

      <section className="text-white grid grid-cols-1">
        <div className="py-3 px-6 md:py-16 md:px-12">
          <h1 className="mb-7 text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Education
          </h1>
          {education.map((item) => (
            <p key={item.id}>
              {item.degree} <br />
              {item.school} <br />
              {item.date}
            </p>
          ))}
        </div>
      </section>

      <section className="text-white grid grid-cols-1 md:col-span-2">
        <div className="py-3 px-6 md:py-10 md:px-12">
          <h1 className="mb-7 text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Experience
          </h1>
          <div className="space-y-6">
            {experiences.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h2 className="text-xl font-semibold">{item.role}</h2>
                <p className="text-sm uppercase tracking-wide text-white/60">
                  {item.company} | {item.date}
                </p>
                <p className="mt-3 text-base leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-white grid grid-cols-1 md:col-span-2">
        <div className="py-3 px-6 md:py-10 md:px-12">
          <h1 className="mb-7 text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Achievements
          </h1>
          <div className="space-y-4">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="mt-2 text-base leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

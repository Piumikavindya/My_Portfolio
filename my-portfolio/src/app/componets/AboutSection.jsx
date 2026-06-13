import React from "react";
import styled from "styled-components";
import _default from "../themes/default";
import { Bio } from "../data/constans";
import { experiences, education, achievements } from "../data/constans";
import {
  EmojiEventsRounded,
  OpenInNewRounded,
  LinkRounded,
} from "@mui/icons-material";

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
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1 hover:border-amber-300/40"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 text-amber-300 ring-1 ring-amber-400/20">
                    <EmojiEventsRounded fontSize="small" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold text-white">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-base leading-7 text-white/80">
                      {item.desc}
                    </p>

                    {item.link && item.link !== "#" ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200 transition-colors hover:bg-amber-400/20"
                      >
                        <LinkRounded fontSize="small" />
                        View Link
                        <OpenInNewRounded fontSize="small" />
                      </a>
                    ) : (
                      <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/55">
                        <LinkRounded fontSize="small" />
                        Link unavailable
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

"use client";

import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "lorem ipsum od",
    time: "12:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis sunt sed nihil modi quia ex a perferendis sapiente earum soluta, minima doloribus, sequi, accusantium ipsa ipsam quam at quo",
  },
  {
    id: 2,
    title: "lorem ipsum od",
    time: "12:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis sunt sed nihil modi quia ex a perferendis sapiente earum soluta, minima doloribus, sequi, accusantium ipsa ipsam quam at quo",
  },
  {
    id: 3,
    title: "lorem ipsum od",
    time: "12:00 PM - 2:00 PM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis sunt sed nihil modi quia ex a perferendis sapiente earum soluta, minima doloribus, sequi, accusantium ipsa ipsam quam at quo",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Event</h1>
        <Image src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamasKyPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;

'use client'
import MeetingTypeList from "@/components/MeetingTypeList";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";

const Home = () => {
  
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] rounded py-2 px-2 text-base font-bold">
            Keep connecting...

          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl "><ReactDatePicker
              selected={values.dateTime}           
              onChange={(date) => setValues({ ...values, dateTime: date! })}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="w-full rounded-[10px] glassmorphism p-1 focus:outline-none "
            /></h1>
            
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;

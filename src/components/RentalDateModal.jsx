import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import { CalendarDays, X } from "lucide-react";
import { FaInfo, FaInfoCircle } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { differenceInCalendarDays, format } from "date-fns";

import "react-day-picker/style.css";
import DateIconDark from "../assets/icons/DateIconDark";

const RentalDateModal = ({ isOpen, onClose }) => {
  const [range, setRange] = useState({
    from: undefined,
    to: undefined,
  });

  const deliveryDate = range.from;
  const pickupDate = range.to;

  const rentalDays =
    deliveryDate && pickupDate
      ? differenceInCalendarDays(pickupDate, deliveryDate) - 1
      : 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-200 bg-black/30 backdrop-blur-[2px]">
      <div className="min-h-screen w-full overflow-y-auto p-3">
        <div className="relative max-h-screen w-full max-w-8xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-8 top-8 z-20 text-black transition hover:scale-110"
          >
            <X size={22} strokeWidth={2} />
          </button>

          {/* Heading */}
          <h2 className="mb-2 text-3xl font-semibold text-[#030D31]">
            Select your Dates
          </h2>

          <div className="flex flex-col-reverse gap-6 p-6 pt-4 lg:flex-row">
            {/* LEFT */}
            <div className="flex flex-1 flex-col">
              {/* Date inputs */}
              <div className="grid grid-cols-2 gap-2">
                <DateInput label="Delivery Date" date={deliveryDate} />

                <DateInput label="Pickup Date" date={pickupDate} />
              </div>

              {/* Information */}
              <div className="mt-2 flex gap-2 rounded-3xl bg-[#e8edff] p-2 text-[#12368c]">
                <FaInfoCircle
                  className="mt-0.5 shrink-0"
                  size={14}
                  fill="currentColor"
                />

                <p className="text-[12px] font-medium leading-5">
                  <strong>Same-day delivery between 5PM and 11PM</strong> For
                  future dates, you can select a specific time slot available at
                  checkout. We pickup between 9AM to 1PM.
                </p>
              </div>

              {/* Rental period */}
              <div className="mt-2">
                <h3 className="mb-3 text-sm font-semibold text-[#030D31]">
                  Your Rental Period:
                </h3>

                <div className="flex items-center gap-2 rounded-3xl border-2 border-[#e1e4e8] bg-white px-2">
                  <div className="flex items-end gap-2">
                    <span className="text-[16px] font-bold text-[#202127]">
                      {rentalDays > 0 ? rentalDays : 0}
                    </span>

                    <span className="text-[12px] text-[#687083]">Days</span>
                  </div>

                  <div className="h-14 w-px bg-gray-200" />

                  <div>
                    <p className="text-[14px] font-medium text-[#030D31]">
                      Chargeable Period:
                    </p>

                    {deliveryDate && pickupDate ? (
                      <p className="mt-2 flex items-center gap-2 text-base font-bold">
                        <DateIconDark />
                        {format(deliveryDate, "dd MMM")} -{" "}
                        {format(
                          new Date(pickupDate.getTime() - 86400000),
                          "dd MMM",
                        )}
                      </p>
                    ) : (
                      <p className="mt-2 text-[14px] text-gray-400">
                        Select your dates
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Savings */}
              <div className="relative mt-2 rounded-3xl bg-[#030D31] px-4 py-2 text-white overflow-hidden">
                <span className="absolute -top-2 -left-1.5  hover:scale-105">
                  <RiDiscountPercentLine color="#e2f952" size={40} />
                </span>
                <h3 className="text-lg font-bold italic text-[#e2f952] pl-4">
                  Save more with us!
                </h3>

                <p className="max-w-xl text-[14px] font-semibold leading-5">
                  Longer rental periods mean bigger savings—enjoy discounts of
                  up to 12%. We don’t charge you for delivery and pickup days!
                </p>
              </div>

              {/* Continue */}
              <button
                type="button"
                disabled={!deliveryDate || !pickupDate}
                className="mt-2  rounded-full bg-[#2449e8] text-lg font-semibold text-white transition hover:bg-[#173bd1] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Continue
              </button>
            </div>

            <div className="rounded-[34px] bg-white p-2 md:p-3">
              <DayPicker
                mode="range"
                selected={range}
                onSelect={setRange}
                numberOfMonths={2}
                pagedNavigation
                showOutsideDays
                className="rental-calendar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DateInput = ({ label, date }) => {
  return (
    <div>
      <label className="mb-2 block text-[12px] font-semibold text-[#030D31]">
        {label} <span className="text-red-500">*</span>
      </label>

      <div className="flex h-8 items-center gap-3 rounded-2xl border-2 border-[#e1e4e8] bg-white px-4">
        <DateIconDark />

        <span className="font-semibold text-[#030D31] text-[12px]">
          {date ? format(date, "MMM dd, yyyy") : "Select date"}
        </span>
      </div>
    </div>
  );
};

export default RentalDateModal;

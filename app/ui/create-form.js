"use client";
import Link from "next/link";
import { useState } from "react";
import countries from "world-countries";

import { inscription } from "@/app/lib/actions";

export default function Form() {
    const [selectedCountry, setSelectedCountry] = useState(
        countries[76].name.common
      );
      const [callingCode, setCallingCode] = useState(
        countries[76].idd.root + "" + countries[76].idd.suffixes[0]
      );
      function handleCountryChange(country) {
        setSelectedCountry(country);
        const countryData = countries.find((c) => c.name.common == country);
        setCallingCode(
          countryData ? countryData.idd.root + "" + countryData.idd.suffixes[0] : ""
        );
      }
  return (
    <form action={inscription} className="flex flex-col items-center">
      <div className="rounded-md bg-gray-50 p-4 mb-1 md:p-6">
      <div className="mb-4">
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium bold"
          >
            Service
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            >
              <option value="" disabled>
                Service
              </option>
            
                <option value="web design">
                  Web design
                </option>

                <option value="web design">
                   Development
                </option>
                
                <option value="web design">
                  Website redesign
                </option>
            </select>
          </div>
        </div>
        {/* Invoice Amount */}
        <div className="mb-4">
          <label
            htmlFor="first-name"
            className="mb-2 block text-sm font-medium"
          >
            First name*
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="first-name"
                name="first-name"
                type="text"
                step="0.01"
                placeholder="Enter your First name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="last-name" className="mb-2 block text-sm font-medium">
            Last name*
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                required
                id="last-name"
                name="last-name"
                type="text"
                step="0.01"
                placeholder="Your last name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="mb-2 block text-sm font-medium bold"
          >
            Country
          </label>
          <div className="relative">
            <select
              id="country"
              name="country"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={selectedCountry}
              onChange={(e) => {
                handleCountryChange(e.target.value);
              }}
              required
            >
              <option value="" disabled>
                Country
              </option>
              {countries.map((country) => (
                <option key={country.ccn3} value={country.name.common}>
                  {country.name.common}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone*
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="calling-code"
                name="calling-code"
                type="text"
                value={callingCode}
                readOnly
                className="peer w-20 rounded-md border items-start border-gray-200 py-2 pl-10 pr-0 text-sm outline-2 placeholder:text-gray-500"
              />
              <input
                required
                id="phone"
                name="phone"
                type="number"
                step="0.01"
                placeholder="your phone number"
                className="peer w-80 rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email*
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                required
                id="email"
                name="email"
                type="email"
                step="0.01"
                placeholder="your email address"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div> 
         <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
        
            </div>
          </div>
          <div className="flex items-start space-x-2 mt-2">
  <input
    type="checkbox"
    id="dpaConsent"
    className="mt-1"
    required
  />
  <label htmlFor="dpaConsent" className="text-sm text-gray-600">
    I agree to the{' '}
    <Link href="/dpa" target="_blank" className="text-blue-600 underline">
      Data Processing Agreement
    </Link>{' '}
    and consent to the collection and use of my personal data.
  </label>
</div>
        <div className="mt-6 flex items-center justify-items-center mt-4">
        <button type="submit" className='flex h-10 items-center rounded-lg bg-gray-700 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'>Order</button>
      </div>
      </div>
    </form>
  );
}

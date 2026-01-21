"use client";

import React, { createContext, useContext } from "react";
import servicesData from "../services.json";
import whatWeDidData from "../WhatWeDid.json";
import latestworkData from "../latestwork.json";

/* =======================
   TYPES
======================= */

export type Section = {
  title: string;
  content: string;
};

export type NGOItem = {
  title: string;
  tagline: string;
  des: string;
  image: string;
  sections: Section[];
};

export type DataMap = {
  [slug: string]: NGOItem;
};

type ServicesContextType = {
  services: DataMap;
  whatWeDid: DataMap;
  latestWork: DataMap;
  getServiceBySlug: (slug: string) => NGOItem | undefined;
  getWhatWeDidBySlug: (slug: string) => NGOItem | undefined;
  getLatestWorkBySlug: (slug: string) => NGOItem | undefined;
};

/* =======================
   CONTEXT
======================= */

const ServicesContext = createContext<ServicesContextType | null>(null);

/* =======================
   PROVIDER
======================= */

export function ServicesProvider({ children }: { children: React.ReactNode }) {
  const services = servicesData as DataMap;
  const whatWeDid = whatWeDidData as DataMap;
  const latestWork = latestworkData as DataMap;

  const getServiceBySlug = (slug: string) => services[slug];
  const getWhatWeDidBySlug = (slug: string) => whatWeDid[slug];
  const getLatestWorkBySlug = (slug: string) => latestWork[slug];

  return (
    <ServicesContext.Provider
      value={{
        services,
        whatWeDid,
        latestWork,
        getServiceBySlug,
        getWhatWeDidBySlug,
        getLatestWorkBySlug,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
}

/* =======================
   HOOK
======================= */

export function useServices() {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error("useServices must be used inside a ServicesProvider");
  }
  return context;
}

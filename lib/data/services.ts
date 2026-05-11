export const coreServices = [
  {
    id: 1,
    title: "Drilling & Workover",
    description:
      "Expert drilling and workover operations designed for maximum efficiency and safety across all well conditions.",
    image: "/images/service-drilling.jpg",
  },
  {
    id: 2,
    title: "Water Well",
    description:
      "Expert water well drilling services for industrial and agricultural applications in arid environments.",
    image: "/images/service-waterwell.jpg",
  },
  {
    id: 3,
    title: "Tubular Running Services",
    description:
      "Professional tubular running and handling services with certified experienced personnel.",
    image: "/images/service-tubular.jpg",
  },
  {
    id: 4,
    title: "Manpower",
    description:
      "Highly qualified drilling and oilfield personnel supplied on a contract basis to meet your operational demands.",
    image: "/images/service-manpower.jpg",
  },
  {
    id: 5,
    title: "BHA Rental",
    description:
      "Complete bottom hole assembly equipment rental including stabilizers, drill collars, and drilling jars.",
    image: "/images/service-bha.jpg",
  },
  {
    id: 6,
    title: "Trainings",
    description:
      "Comprehensive technical and safety training programs for drilling personnel, aligned with international standards.",
    image: "/images/service-trainings.jpg",
  },
];

export const integratedServices = [
  {
    id: 7,
    title: "Drilling & Measurements",
    description:
      "Precision MWD/LWD services with real-time data transmission for optimised well placement and formation evaluation.",
    image: "/images/service-measurements.jpg",
  },
  {
    id: 8,
    title: "Fishing & Remedial Services",
    description:
      "Specialised fishing operations for stuck pipe recovery and comprehensive wellbore remediation solutions.",
    image: "/images/service-fishing.jpg",
  },
  {
    id: 9,
    title: "Cementing Services",
    description:
      "Primary and remedial cementing operations ensuring wellbore integrity and zone isolation across all depths.",
    image: "/images/service-cementing.jpg",
  },
  {
    id: 10,
    title: "Drilling Fluids Services",
    description:
      "Engineering and supply of high-performance drilling fluid systems tailored to subsurface conditions.",
    image: "/images/service-fluids.jpg",
  },
];

// kept for legacy compatibility
export const services = [...coreServices, ...integratedServices];

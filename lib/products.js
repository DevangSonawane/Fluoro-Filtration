export const products = [
  {
    slug: "fx-pp-series",
    name: "FX-PP Series",
    series: "Pleated polypropylene cartridge",
    category: "Pharmaceutical Process Filtration",
    media: "Polypropylene",
    description:
      "A general-purpose pleated cartridge for process liquids where the goal is to hold solids back without changing the fluid more than necessary. It is a practical first choice for clarification, prefiltration, and stable day-to-day service.",
    micronRatings: ["0.45 µm", "1 µm", "5 µm", "10 µm"],
    maxTemperature: "80°C",
    maxDifferentialPressure: "4.0 bar",
    applications: ["Clarification", "Pre-filter", "Process liquid"],
    conditions: {
      process: "pharmaceutical",
      micron: "standard"
    }
  },
  {
    slug: "fx-pes-series",
    name: "FX-PES Series",
    series: "Polyethersulfone membrane cartridge",
    category: "Pharmaceutical Process Filtration",
    media: "Polyethersulfone",
    description:
      "Built for process streams that need a tighter membrane grade and a low-binding surface. This family suits final filtration duties where consistent flow, clean release, and aqueous compatibility matter.",
    micronRatings: ["0.1 µm", "0.2 µm", "0.45 µm"],
    maxTemperature: "85°C",
    maxDifferentialPressure: "3.5 bar",
    applications: ["Final filtration", "Aqueous process liquid", "Bioburden reduction"],
    conditions: {
      process: "pharmaceutical",
      micron: "fine",
      autoclavable: true
    }
  },
  {
    slug: "fx-pt-series",
    name: "FX-PT Series",
    series: "PTFE membrane cartridge",
    category: "Chemical & Solvent Filtration",
    media: "PTFE",
    description:
      "A chemically resistant cartridge for streams that are harder on standard media. Use it when the process includes aggressive solvents, strong acids or alkalis, or when the filter has to cope with thermal sterilization.",
    micronRatings: ["0.1 µm", "0.2 µm", "0.45 µm", "1 µm"],
    maxTemperature: "121°C",
    maxDifferentialPressure: "4.5 bar",
    applications: ["Solvent filtration", "Venting support", "Aggressive process media"],
    conditions: {
      process: "chemical",
      micron: "fine",
      highTemp: true,
      solvent: true,
      autoclavable: true
    }
  },
  {
    slug: "fx-ny-series",
    name: "FX-NY Series",
    series: "Nylon 6 pleated cartridge",
    category: "Chemical & Solvent Filtration",
    media: "Nylon 6",
    description:
      "A pleated cartridge for low- to medium-viscosity liquids where a balanced mix of strength, cleanliness, and wettability is useful. It fits prefiltration and polishing steps in controlled process environments.",
    micronRatings: ["0.2 µm", "0.45 µm", "1 µm", "5 µm"],
    maxTemperature: "75°C",
    maxDifferentialPressure: "3.0 bar",
    applications: ["Polishing", "Pre-filtration", "Aqueous and mixed streams"],
    conditions: {
      process: "chemical",
      micron: "standard"
    }
  },
  {
    slug: "fx-pv-series",
    name: "FX-PV Series",
    series: "PVDF membrane cartridge",
    category: "Chemical & Solvent Filtration",
    media: "PVDF",
    description:
      "Designed for liquid service where chemical tolerance and stable wetting behavior are both important. The series offers a useful middle ground between fine membrane retention and process flexibility.",
    micronRatings: ["0.1 µm", "0.2 µm", "0.45 µm"],
    maxTemperature: "90°C",
    maxDifferentialPressure: "4.0 bar",
    applications: ["Process liquid", "Mixed solvent service", "Final polish"],
    conditions: {
      process: "chemical",
      micron: "fine",
      solvent: true
    }
  },
  {
    slug: "fx-hf-series",
    name: "FX-HF Series",
    series: "High-flow industrial cartridge",
    category: "High-Flow Industrial Filtration",
    media: "Pleated depth structure",
    description:
      "A high-area cartridge for larger-volume services where fewer changeouts and a lower housing count can simplify operation. It is suited to water and industrial prefiltration duties before downstream polishing or process use.",
    micronRatings: ["1 µm", "5 µm", "10 µm", "25 µm"],
    maxTemperature: "70°C",
    maxDifferentialPressure: "3.0 bar",
    applications: ["Large-volume prefilter", "Process water", "Bulk liquid clarification"],
    conditions: {
      process: "water",
      micron: "coarse"
    }
  }
];

export const productCategories = [
  "Pharmaceutical Process Filtration",
  "Chemical & Solvent Filtration",
  "High-Flow Industrial Filtration"
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

export function productsByCategory(category) {
  return products.filter((product) => product.category === category);
}

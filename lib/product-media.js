function image(basePath, alt, caption) {
  return {
    basePath,
    alt,
    caption: caption || alt
  };
}

// TODO: The original "interface diagram.jpg" was excluded because it is a technical drawing, not product photography.
export const homepageCategoryMedia = {
  "Filter Media": null,
  "Liquid Filter Bags": image(
    "/images/products/bags/bag-mesh-01",
    "Industrial mesh filter bag with circular neck ring",
    "Mesh bag"
  ),
  "Filter Cartridges": image(
    "/images/products/cartridges/cartridge-pleated-01",
    "Pleated filter cartridge with red end seal",
    "Pleated cartridge"
  ),
  "High Flow Cartridges": image(
    "/images/products/cartridges/cartridge-pleated-02",
    "Pleated cartridge end cap close-up",
    "High flow cartridge"
  ),
  "Pleated Membrane Cartridges": image(
    "/images/products/cartridges/cartridge-pleated-03",
    "Pleated filter cartridge shown at an angle",
    "Membrane cartridge"
  ),
  "Melt Blown Cartridges": image(
    "/images/products/cartridges/cartridge-pleated-04",
    "Pleated cartridge side view on a clean background",
    "Melt blown cartridge"
  ),
  "Oil & Carbon Cartridges": image(
    "/images/products/cartridges/cartridge-pleated-05",
    "Pleated cartridge close-up with visible end seal",
    "Oil and carbon cartridge"
  ),
  "String Wound - Extended Line": image(
    "/images/products/cartridges/cartridge-pleated-06",
    "Pleated cartridge side profile with end cap detail",
    "String wound cartridge"
  ),
  "Filter Housings": image(
    "/images/products/housings/housing-multibag-01",
    "Stainless steel multibag filter housing with pressure gauge",
    "Filter housing"
  )
};

export const productMediaBySlug = {
  "fx-pp-series": [
    image("/images/products/cartridges/cartridge-pleated-01", "Pleated polypropylene filter cartridge, front view", "Front view"),
    image("/images/products/cartridges/cartridge-pleated-02", "Pleated polypropylene filter cartridge, end cap close-up", "End cap"),
    image("/images/products/cartridges/cartridge-pleated-03", "Pleated polypropylene filter cartridge, angled view", "Angled view"),
    image("/images/products/cartridges/cartridge-pleated-04", "Pleated polypropylene filter cartridge, side profile", "Side profile")
  ],
  "fx-pes-series": [
    image("/images/products/cartridges/cartridge-pleated-05", "PES membrane cartridge, front view", "Front view"),
    image("/images/products/cartridges/cartridge-pleated-06", "PES membrane cartridge, end cap close-up", "End cap"),
    image("/images/products/cartridges/cartridge-pleated-07", "PES membrane cartridge, angled view", "Angled view"),
    image("/images/products/cartridges/cartridge-pleated-08", "PES membrane cartridge, side profile", "Side profile")
  ],
  "fx-pt-series": [
    image("/images/products/cartridges/cartridge-pleated-09", "PTFE membrane cartridge, front view", "Front view"),
    image("/images/products/cartridges/cartridge-pleated-10", "PTFE membrane cartridge, end cap close-up", "End cap"),
    image("/images/products/cartridges/cartridge-pleated-11", "PTFE membrane cartridge, angled view", "Angled view"),
    image("/images/products/cartridges/cartridge-pleated-12", "PTFE membrane cartridge, side profile", "Side profile")
  ],
  "fx-ny-series": [
    image("/images/products/cartridges/cartridge-pleated-13", "Nylon 6 pleated cartridge, front view", "Front view"),
    image("/images/products/cartridges/cartridge-pleated-14", "Nylon 6 pleated cartridge, end cap close-up", "End cap"),
    image("/images/products/cartridges/cartridge-pleated-15", "Nylon 6 pleated cartridge, angled view", "Angled view"),
    image("/images/products/cartridges/cartridge-pleated-16", "Nylon 6 pleated cartridge, side profile", "Side profile")
  ],
  "fx-pv-series": [
    image("/images/products/cartridges/cartridge-pleated-17", "PVDF membrane cartridge, front view", "Front view"),
    image("/images/products/cartridges/cartridge-pleated-18", "PVDF membrane cartridge, end cap close-up", "End cap"),
    image("/images/products/cartridges/cartridge-pleated-19", "PVDF membrane cartridge, angled view", "Angled view"),
    image("/images/products/cartridges/cartridge-pleated-20", "PVDF membrane cartridge, side profile", "Side profile")
  ],
  "fx-hf-series": [
    image("/images/products/cartridges/cartridge-pleated-07", "High-flow cartridge, front view", "Front view"),
    image("/images/products/cartridges/cartridge-pleated-08", "High-flow cartridge, end cap close-up", "End cap"),
    image("/images/products/cartridges/cartridge-pleated-19", "High-flow cartridge, angled view", "Angled view"),
    image("/images/products/cartridges/cartridge-pleated-20", "High-flow cartridge, side profile", "Side profile")
  ]
};

export const workshopGallery = [
  image(
    "/images/company/workshop/workshop-production-01",
    "Filter media production line with sewing and assembly stations",
    "Filter media production line"
  ),
  image(
    "/images/company/workshop/workshop-bag-assembly-01",
    "Bag assembly and quality control area with production equipment",
    "Bag assembly and quality control"
  )
];

export const detailPageUnavailableNotice =
  "Interface diagram intentionally excluded from product photography because it is a technical drawing, not a product photo.";

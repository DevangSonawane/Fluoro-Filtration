import { products } from "./products";

export const initialFinderState = {
  process: "pharmaceutical",
  micron: "standard",
  highTemp: false,
  solvent: false,
  autoclavable: false
};

export function getFinderResults(state) {
  const scored = products
    .map((product) => {
      let score = 0;

      if (product.conditions.process === state.process) score += 3;
      if (product.conditions.micron === state.micron) score += 3;
      if (state.highTemp && product.conditions.highTemp) score += 2;
      if (state.solvent && product.conditions.solvent) score += 2;
      if (state.autoclavable && product.conditions.autoclavable) score += 2;

      if (state.process === "water" && product.category === "High-Flow Industrial Filtration") {
        score += 2;
      }

      if (state.process === "pharmaceutical" && product.slug === "fx-pes-series") {
        score += 1;
      }

      if (state.process === "chemical" && product.slug === "fx-pt-series") {
        score += 1;
      }

      return { product, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return scored.map(({ product }) => ({
    product,
    reason: buildReason(product, state)
  }));
}

function buildReason(product, state) {
  const reasons = [];

  if (product.conditions.process === state.process) {
    reasons.push(
      state.process === "pharmaceutical"
        ? "matches process-liquid service"
        : state.process === "chemical"
          ? "fits chemical or solvent duty"
          : "fits water-service prefiltration"
    );
  }

  if (product.conditions.micron === state.micron) {
    reasons.push(
      state.micron === "fine"
        ? "covers fine or sterile-grade retention"
        : state.micron === "standard"
          ? "lands in the standard retention range"
          : "covers coarse prefiltration"
    );
  }

  if (state.highTemp && product.conditions.highTemp) {
    reasons.push("handles elevated temperature");
  }

  if (state.solvent && product.conditions.solvent) {
    reasons.push("tolerates aggressive solvent exposure");
  }

  if (state.autoclavable && product.conditions.autoclavable) {
    reasons.push("supports autoclave cycles");
  }

  if (!reasons.length) {
    return "closest available match for the selected process";
  }

  return reasons.slice(0, 2).join(", ");
}

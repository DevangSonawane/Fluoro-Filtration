import { PleatMotif } from "@/components/PleatMotif";

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center"
      }}
    >
      <div style={{ width: 160 }}>
        <PleatMotif variant="divider" />
      </div>
    </div>
  );
}

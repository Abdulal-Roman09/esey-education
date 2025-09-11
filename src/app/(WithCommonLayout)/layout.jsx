import Navber from "@/components/Navber";

export default function WithCommonLayout({ children }) {
  return (
    <div>
      <Navber />
      {children}
    </div>
  );
}

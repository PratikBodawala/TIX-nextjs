import Image from "next/future/image";
import LocationPin from "/public/images/location.svg";
const Dropdown = () => (
  <div className="flex">
    <Image src={LocationPin} alt={"Location pin icon"} />
    <select className="bg-white text-2xl">
      <option value="1">JAKARTA</option>
      <option value="2">BANDUNG</option>
      <option value="3">BEKASI</option>
      <option value="4">BOGOR</option>
      <option value="5">DEPOK</option>
    </select>
  </div>
);
export default Dropdown;

import SectionTitle from "../../../atoms/SectionTitle";
import AddressElement from "../atoms/AddressElement";
import InfoElement from "../atoms/InfoElement";

const InformationSection = ({ restaurant }) => {
  return (
    <div className={"information-section flex flex-col gap-2"}>
        <p className={"text-lg text-gray-500"}>{restaurant.description}</p>
        <SectionTitle title={"Information"} />
        <div
        className={
          "information-card grid gap-2 rounded-lg px-4 py-2 md:grid-cols-2"
        }
      >
        <AddressElement title={"Address"} value={restaurant.address} />
        <AddressElement title={"Contact"} value={restaurant.contactInfo} />
        <InfoElement title={"Operating Hours"} value={restaurant.open} />
        <InfoElement title={"Break Time"} value={restaurant.breakTime} />
      </div>

    </div>
  );
};

export default InformationSection;

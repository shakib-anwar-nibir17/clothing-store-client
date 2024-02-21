import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount2, TbTruckDelivery } from "react-icons/tb";
import ServiceCard from "./ServiceCard";
const data = [
  {
    icon: <TbTruckDelivery className="text-4xl" />,
    title: "Free Delivery",
    desc: "Orders from all items",
  },
  {
    icon: <RiRefund2Fill className="text-4xl" />,
    title: "Return & Refund",
    desc: "Money back guarantee",
  },
  {
    icon: <TbDiscount2 className="text-4xl" />,
    title: "Member Discount",
    desc: "On order over $99",
  },
  {
    icon: <MdSupportAgent className="text-4xl" />,
    title: "Support 24/7",
    desc: "Contact us 24 hours a day",
  },
];
const Services = () => {
  return (
    <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto">
      {data.map((item) => (
        <ServiceCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          description={item.desc}
        />
      ))}
    </div>
  );
};

export default Services;

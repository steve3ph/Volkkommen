import clsx from "clsx";

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Offices = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="KERALA" invert={invert}>
        VOLKKOMMEN INDUSTRIES LLP
          <br />
          No. 6/858-M, 2nd Floor,
          Valamkottil Towers, Judgemukku,
          Kakkanad, Kochi - 682021
        </Office>
      </li>
      <li>
        <Office name="CONTACTS" invert={invert}>
        Email:support@volkkommen.com
          <br />
          Phone: +91 484-2388444 <br/>
          Phone: +91 91883 39981 <br />
          Phone: +91 89431 47861 <br />
        </Office>
      </li>
    </ul>
  );
};

export default Offices;

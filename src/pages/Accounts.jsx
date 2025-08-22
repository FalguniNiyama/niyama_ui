import { FaCheck, FaTimes } from "react-icons/fa";

const data = [
  {
    name: "Verve Human Care Laboratories",
    lifetime: "26 March, 2025 05:30",
    active: true,
    deleted: false,
    createdDate: "26 March, 2025 05:30",
    modifiedDate: "26 March, 2025 23:04",
  },
  {
    name: "Sun Pharma",
    lifetime: "27 March, 2025 06:30",
    active: true,
    deleted: true,
    createdDate: "27 March, 2025 06:30",
    modifiedDate: "27 March, 2025 22:00",
  },
  {
    name: "Cadila HealthCare",
    lifetime: "27 March, 2025 03:20",
    active: true,
    deleted: false,
    createdDate: "27 March, 2025 03:20",
    modifiedDate: "27 March, 2025 20:40",
  }
];

export default function Accounts() {
  return (
    <div className="p-4">
      <table className="min-w-full border border-secondary300">
        <thead>
          <tr className="bg-white">
            <th className="p-2 border-b accent-backgroundcolor"> 
              <input type="checkbox" />
            </th>
            <th className="p-2 border-b text-left">Name</th>
            <th className="p-2 border-b text-left">Lifetime</th>
            <th className="p-2 border-b text-left">Active</th>
            <th className="p-2 border-b text-left">Deleted</th>
            <th className="p-2 border-b text-left">Created Date</th>
            <th className="p-2 border-b text-left">Modified Date</th>
          </tr>
          <tr>
            <td></td>
            <td colSpan={6} className="p-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full border p-2 text-blackcolor"
              />
            </td>
          </tr>
        </thead>
        <tbody>       
          {data.map((item, index) => (
            <tr key={index} className="bg-secondary300">
              <td className="p-2 border-t accent-backgroundcolor">
                <input type="checkbox" />
              </td>
              <td className="p-2 border-t">{item.name}</td>
              <td className="p-2 border-t">{item.lifetime}</td>
              <td className="p-2 border-t">
                {item.active ? <FaCheck className="text-greencolor" /> : null}
              </td>
              <td className="p-2 border-t">
                {item.deleted ? <FaCheck className="text-greencolor"/> : <FaTimes className="text-redcolor" />}
              </td>
              <td className="p-2 border-t">{item.createdDate}</td>
              <td className="p-2 border-t">{item.modifiedDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* eslint-disable no-unused-vars */
export default function Card({ title, value, onClick }) {
    return (
        <div
            className="bg-primary shadow-md shadow-backgroundcolor rounded-2xl p-4 border transition-all w-1/6"
            onClick={onClick}
        >
            <h3 className="text-lg font-semibold mb-2 text-blackcolor">{title}</h3>
            <div>{value}</div>
        </div>
    );
}
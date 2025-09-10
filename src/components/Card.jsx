/* eslint-disable no-unused-vars */
export default function Card({ title, value, onClick }) {
    return (
        <div
            className="bg-backgroundcolor shadow-md shadow-secondary rounded-2xl p-4 border transition-all w-1/6"
            onClick={onClick}
        >
            <h3 className="text-lg font-semibold mb-2 text-whitecolor">{title}</h3>
            <div className="text-whitecolor">{value}</div>
        </div>
    );
}
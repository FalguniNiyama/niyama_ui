import React, { createContext, useState, useEffect, useContext } from "react";
import { emsData } from "../pages/Emspanel"; // import EMSPanel data

const LivechartContext = createContext();

export const LivechartProvider = ({ children }) => {
  // by default, load first EMSPanel element
  const [initialValues, setInitialValues] = useState({
    Pressure: emsData[0]?.pressure || setInitialValues.Pressure,
    Temperature: emsData[0]?.temp || setInitialValues.Temperature,
    Humidity: emsData[0]?.humidity || setInitialValues.Humidity,
    Room: emsData[0]?.roomName || setInitialValues.Room,
    Description: emsData[0]?.description || setInitialValues.Description,
    ParentArea: emsData[0]?.parentArea || setInitialValues.ParentArea,
    DeviceID: emsData[0]?.deviceId || setInitialValues.DeviceID,
    DoorStatus: emsData[0]?.doorStatus || setInitialValues.DoorStatus,
  });

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        Pressure: (Math.random() * 100).toFixed(2),
        Temperature: (Math.random() * 50).toFixed(2),
        Humidity: (Math.random() * 10).toFixed(2),
      };

      setInitialValues((prev) => ({ ...prev, ...newData }));

      setHistory((prev) => [
        ...prev.slice(-20), // keep last 20
        { time: new Date().toLocaleTimeString(), ...newData },
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LivechartContext.Provider
      value={{ data: initialValues, setInitialValues, history }}
    >
      {children}
    </LivechartContext.Provider>
  );
};

export default function useLivechartData() {
  return useContext(LivechartContext);
}

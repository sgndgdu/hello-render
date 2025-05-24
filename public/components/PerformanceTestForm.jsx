
import React, { useState } from "react";

const PerformanceTestForm = () => {
  const [e, setE] = useState(0);
  const [E0, setE0] = useState(0);
  const [hasExtendedDisplay, setHasExtendedDisplay] = useState(false);

  const [measurements, setMeasurements] = useState([
    { I: 0, L: 0, deltaL: 0 },
    { I: 0, L: 0, deltaL: 0 },
    { I: 0, L: 0, deltaL: 0 },
  ]);

  const handleChange = (index, field, value) => {
    const newMeasurements = [...measurements];
    newMeasurements[index][field] = parseFloat(value);
    setMeasurements(newMeasurements);
  };

  const calculateE = ({ I, L, deltaL }) =>
    hasExtendedDisplay ? I - L : I + 0.5 * e - deltaL - L;

  const EValues = measurements.map(calculateE);
  const EcValues = EValues.map(E => E - E0);
  const MIH = 1.0 * e; // örnek değer
  const uygun = EcValues.every(Ec => Math.abs(Ec) <= MIH);

  return (
    <div className="bg-white p-4 rounded shadow-md mt-8">
      <h2 className="text-lg font-semibold mb-4">2.4 - Tartım Performansı Testi</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Muayene Sabiti (e)</label>
          <input type="number" value={e} onChange={(e) => setE(parseFloat(e.target.value))} className="border p-2 rounded w-full" />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Sıfırdaki Hata (E0)</label>
          <input type="number" value={E0} onChange={(e) => setE0(parseFloat(e.target.value))} className="border p-2 rounded w-full" />
        </div>
        <div className="col-span-2 flex items-center mt-2">
          <input
            type="checkbox"
            checked={hasExtendedDisplay}
            onChange={(e) => setHasExtendedDisplay(e.target.checked)}
            className="mr-2"
          />
          <label>Genişletilmiş Gösterge Tertibatı Var</label>
        </div>
      </div>

      {measurements.map((m, idx) => (
        <div key={idx} className="grid grid-cols-3 gap-4 mb-3">
          <div>
            <label className="block text-sm">Gösterge Değeri (I{idx + 1})</label>
            <input type="number" value={m.I} onChange={(e) => handleChange(idx, "I", e.target.value)} className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm">Yük (L{idx + 1})</label>
            <input type="number" value={m.L} onChange={(e) => handleChange(idx, "L", e.target.value)} className="border p-2 rounded w-full" />
          </div>
          <div>
            <label className="block text-sm">İlave Yük (ΔL{idx + 1})</label>
            <input type="number" value={m.deltaL} onChange={(e) => handleChange(idx, "deltaL", e.target.value)} className="border p-2 rounded w-full" />
          </div>
        </div>
      ))}

      <div className="mt-4 p-3 bg-gray-100 rounded">
        <p><strong>Düzeltilmiş Hatalar (Ec):</strong> {EcValues.map((v, i) => `Ec${i + 1}: ${v.toFixed(3)} kg`).join(" | ")}</p>
        <p><strong>MIH:</strong> {MIH.toFixed(3)} kg</p>
        <p><strong>Sonuç:</strong> {uygun ? "UYGUN" : "UYGUN DEĞİL"}</p>
      </div>
    </div>
  );
};

export default PerformanceTestForm;

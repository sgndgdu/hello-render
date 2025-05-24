import React, { useState } from "react";

const ZeroTestForm = () => {
  const [e, setE] = useState(0);
  const [L0, setL0] = useState(0);
  const [I0, setI0] = useState(0);
  const [deltaL0, setDeltaL0] = useState(0);
  const [hasExtendedDisplay, setHasExtendedDisplay] = useState(false);

  const E0 = hasExtendedDisplay ? (I0 - L0) : (I0 + 0.5 * e - deltaL0 - L0);
  const MIH = 0.25 * e;
  const uygun = Math.abs(E0) <= MIH;

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">2.1 - Sıfır Kontrol Testi</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Muayene Sabiti (e)</label>
          <input type="number" value={e} onChange={(e) => setE(parseFloat(e.target.value))} className="border p-2 rounded w-full" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">İlk Yük (L0)</label>
          <input type="number" value={L0} onChange={(e) => setL0(parseFloat(e.target.value))} className="border p-2 rounded w-full" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Gösterge Değeri (I0)</label>
          <input type="number" value={I0} onChange={(e) => setI0(parseFloat(e.target.value))} className="border p-2 rounded w-full" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">İlave Yük (ΔL0)</label>
          <input type="number" value={deltaL0} onChange={(e) => setDeltaL0(parseFloat(e.target.value))} className="border p-2 rounded w-full" />
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

      <div className="mt-4 p-3 bg-gray-100 rounded">
        <p><strong>Hesaplanan Hata (E0):</strong> {E0.toFixed(3)} kg</p>
        <p><strong>MIH (0.25*e):</strong> {MIH.toFixed(3)} kg</p>
        <p><strong>Sonuç:</strong> {uygun ? "UYGUN" : "UYGUN DEĞİL"}</p>
      </div>
    </div>
  );
};

export default ZeroTestForm;

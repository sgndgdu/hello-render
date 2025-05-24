import React, { useState } from "react";

const CornerLoadTestForm = () => {
  const [e, setE] = useState(0);
  const [L, setL] = useState(0);
  const [I, setI] = useState(0);
  const [deltaL, setDeltaL] = useState(0);
  const [E0, setE0] = useState(0);
  const [hasExtendedDisplay, setHasExtendedDisplay] = useState(false);

  const E = hasExtendedDisplay ? (I - L) : (I + 0.5 * e - deltaL - L);
  const Ec = E - E0;
  const MIH = 1.0 * e; // örnek değer
  const uygun = Math.abs(Ec) <= MIH;

  return (
    <div className="bg-white p-4 rounded shadow-md mt-8">
      <h2 className="text-lg font-semibold mb-4">2.2 - Köşe Yükü Testi</h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Muayene Sabiti (e)</label>
          <input type="number" value={e} onChange={(e) => setE(parseFloat(e.target.value))} className="border p-2 rounded w-full" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Uygulanan Yük (L)</label>
          <input type="number" value={L} onChange={(e) => setL(parseFloat(e.target.value))} className="border p-2 rounded w-full" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Gösterge Değeri (I)</label>
          <input type="number" value={I} onChange={(e) => setI(parseFloat(e.target.value))} className="border p-2 rounded w-full" />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">İlave Yük (ΔL)</label>
          <input type="number" value={deltaL} onChange={(e) => setDeltaL(parseFloat(e.target.value))} className="border p-2 rounded w-full" />
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

      <div className="mt-4 p-3 bg-gray-100 rounded">
        <p><strong>Hata (E):</strong> {E.toFixed(3)} kg</p>
        <p><strong>Düzeltilmiş Hata (Ec):</strong> {Ec.toFixed(3)} kg</p>
        <p><strong>MIH:</strong> {MIH.toFixed(3)} kg</p>
        <p><strong>Sonuç:</strong> {uygun ? "UYGUN" : "UYGUN DEĞİL"}</p>
      </div>
    </div>
  );
};

export default CornerLoadTestForm;

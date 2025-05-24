// components/TestSelector.jsx
const TestSelector = ({ selectedTest, setSelectedTest }) => (
  <div className="mb-4">
    <label className="block mb-1 text-sm font-medium">Test Türünü Seçin</label>
    <select
      value={selectedTest}
      onChange={(e) => setSelectedTest(e.target.value)}
      className="border p-2 rounded w-full"
    >
      <option value="zero">Sıfır Kontrol Testi</option>
      <option value="corner">Köşe Yükü Testi</option>
      <option value="repeat">Tekrarlanabilirlik Testi</option>
      <option value="performance">Tartım Performansı Testi</option>
    </select>
  </div>
);

export default TestSelector;

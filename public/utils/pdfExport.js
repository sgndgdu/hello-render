// utils/pdfExport.js
import html2pdf from "html2pdf.js";

export const exportToPDF = (elementId, filename = "muayene_formu.pdf") => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const opt = {
    margin: 0.5,
    filename: filename,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  html2pdf().from(element).set(opt).save();
};

import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { flyAtom } from "./atoms";
import { jsPDF } from "jspdf";

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [{ front: "book-cover", back: pictures[0] }];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

// Function to generate PDF with all book pages
const generatePDF = async () => {
  try {
    // Create a new PDF document
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    
    // Set PDF metadata
    pdf.setProperties({
      title: "My Book",
      subject: "Book Pages Collection",
      creator: "Book PDF Generator",
    });
    
    let isFirstPage = true;
    
    // Add cover page
    await addImageToPDF(pdf, "book-cover", isFirstPage);
    isFirstPage = false;
    
    // Add all pages in order
    for (let i = 0; i < pictures.length; i++) {
      await addImageToPDF(pdf, pictures[i], isFirstPage);
      isFirstPage = false;
    }
    
    // Add back cover
    await addImageToPDF(pdf, "book-back", isFirstPage);
    
    // Save the PDF
    pdf.save("my-book.pdf");
    console.log("PDF generated successfully!");
  } catch (error) {
    console.error("Error generating PDF:", error);
  }
};

// Helper function to add an image to the PDF that fills the entire page
const addImageToPDF = (pdf, imageName, isFirstPage) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = `/textures/${imageName}.jpg`;
    
    img.onload = () => {
      try {
        if (!isFirstPage) {
          pdf.addPage();
        }
        
        // Get page dimensions
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        
        // Calculate dimensions to cover the entire page
        const imgRatio = img.height / img.width;
        const pageRatio = pageHeight / pageWidth;
        
        let imgWidth, imgHeight, x, y;
        
        if (imgRatio > pageRatio) {
          // Image is taller than the page ratio, so fit to width
          imgWidth = pageWidth;
          imgHeight = imgWidth * imgRatio;
          x = 0;
          y = (pageHeight - imgHeight) / 2; // Center vertically
        } else {
          // Image is wider than the page ratio, so fit to height
          imgHeight = pageHeight;
          imgWidth = imgHeight / imgRatio;
          x = (pageWidth - imgWidth) / 2; // Center horizontally
          y = 0;
        }
        
        // Add image to fill the page (with bleed if necessary)
        pdf.addImage(img, 'JPEG', x, y, imgWidth, imgHeight);
        resolve();
      } catch (error) {
        reject(error);
      }
    };
    
    img.onerror = (error) => {
      console.error(`Error loading image ${imageName}:`, error);
      reject(error);
    };
  });
};

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);
  const [fly, setFly] = useAtom(flyAtom); // Use the shared fly state

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
      <div className="w-full overflow-auto pointer-events-auto flex justify-center">
        <div className="overflow-x-scroll no-scrollbar w-full flex items-center gap-4 max-w-full p-10">
          {[...pages].map((_, index) => (
            <button
              key={index}
              className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
                index === page
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(index)}
            >
              {index === 0 ? "Cover" : `Page ${index}`}
            </button>
          ))}
          <button
            className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
              page === pages.length
                ? "bg-white/90 text-black"
                : "bg-black/30 text-white"
            }`}
            onClick={() => setPage(pages.length)}
          >
            Back Cover
          </button>
          <button
            className={`border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border ${
              fly ? "bg-white/90 text-black" : "bg-black/30 text-white"
            }`}
            onClick={() => setFly(!fly)} // Toggle the fly state
          >
            Fly
          </button>
          <button
            className="border-transparent hover:border-white transition-all duration-300 px-4 py-3 rounded-full text-lg uppercase shrink-0 border bg-black/30 text-white"
            onClick={generatePDF}
          >
            Generate PDF
          </button>
        </div>
      </div>
    </main>
  );
};

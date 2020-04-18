// 1. Create a new Presentation
let pres = new PptxGenJS();

// 2. Add a Slide
let slide = pres.addSlide();

// 3. Add one or more objects (Tables, Shapes, Images, Text and Media) to the Slide
let textboxText = "Hello World from PptxGenJS!";
let textboxOpts = { x: 1, y: 1, color: "363636", fill: "f1f1f1", align: "center" };
slide.addText([{text: textboxText, options: textboxOpts}]);

// 4. Save the Presentation
pres.writeFile("Sample Presentation.pptx");
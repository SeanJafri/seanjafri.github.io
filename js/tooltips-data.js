/* Tooltip / popover data for abbreviations and equipment references */
window.TOOLTIP_DATA = {

  // ============ ABBREVIATIONS (text-only) ============
  "gdt": {
    term: "GD&T",
    expansion: "Geometric Dimensioning and Tolerancing",
    def: "Engineering drawing language that specifies allowable variation in part geometry — form, orientation, location, and runout. Governed by ASME Y14.5."
  },
  "dfm": {
    term: "DFM",
    expansion: "Design for Manufacturing",
    def: "Designing parts so they can be manufactured efficiently and reliably — choosing geometries, tolerances, and materials that suit the chosen production process."
  },
  "dfa": {
    term: "DFA",
    expansion: "Design for Assembly",
    def: "Designing parts and assemblies to be easy to put together — minimizing part count, reducing orientation ambiguity, and simplifying fastener access."
  },
  "bom": {
    term: "BOM",
    expansion: "Bill of Materials",
    def: "A structured list of every part, component, and fastener that goes into an assembly, with quantities and source information for purchasing."
  },
  "odm": {
    term: "ODM",
    expansion: "Original Design Manufacturer",
    def: "Manufacturing partners that build OEM products (laptops, docks, etc.) for HP and similar companies — typically based in Taiwan or China."
  },
  "uut": {
    term: "UUT",
    expansion: "Unit Under Test",
    def: "The specific physical product or sub-assembly that a test fixture is currently exercising — for example, a laptop being validated."
  },
  "bios": {
    term: "BIOS",
    expansion: "Basic Input/Output System",
    def: "The low-level firmware that runs on a PC's motherboard at power-on, before the operating system loads."
  },
  "pcb": {
    term: "PCB",
    expansion: "Printed Circuit Board",
    def: "The fiberglass-and-copper board that holds and electrically connects electronic components in a finished product."
  },
  "vv": {
    term: "V&V",
    expansion: "Verification & Validation",
    def: "The discipline of confirming a product both meets its engineering requirements (verification) and actually solves the customer's problem (validation)."
  },
  "asme": {
    term: "ASME",
    expansion: "American Society of Mechanical Engineers",
    def: "The professional organization that publishes engineering standards including ASME Y14.5, the standard for GD&T."
  },
  "cad": {
    term: "CAD",
    expansion: "Computer-Aided Design",
    def: "Software used to create precise 2D and 3D models of mechanical parts and assemblies. The primary deliverable engineers hand to manufacturing."
  },
  "cnc": {
    term: "CNC",
    expansion: "Computer Numerical Control",
    def: "Machining where a computer drives the cutting tool path. Used for precision metal and plastic parts that 3D printing can't produce."
  },
  "usbc": {
    term: "USB-C",
    expansion: "Universal Serial Bus, Type-C",
    def: "The current-generation USB connector — reversible, supports power delivery up to 240 W, and carries video and high-speed data."
  },

  // ============ 3D PRINTING TECHNOLOGIES (with images) ============
  "mjf": {
    term: "MJF",
    expansion: "Multi Jet Fusion",
    def: "HP's proprietary powder-bed 3D-printing process. Fuses nylon powder layer-by-layer using infrared lamps and detail-defining inks. Produces strong, isotropic, production-grade parts.",
    img: "https://www.hp.com/content/dam/sites/worldwide/3d-printing/hp-3d-printing-solutions/multi-jet-fusion-technology/Why_Jet_Fusion_5200_3D_printing_solution.jpg",
    imgAlt: "HP Multi Jet Fusion technology"
  },
  "mjf-4200": {
    term: "HP Multi Jet Fusion 4200",
    expansion: "Industrial 3D printer (HP)",
    def: "HP's flagship MJF printer for functional prototyping and short-run production. Build volume 380 × 284 × 380 mm. I operate one in-house at HP's Spring, TX lab to print fixture parts on demand.",
    img: "https://www.hp.com/content/dam/sites/worldwide/3d-printing/hp-3d-printing-solutions/multi-jet-fusion-4200/multi-jet-fusion-4200-printing-solution.png.rendition.768.768.png",
    imgAlt: "HP Multi Jet Fusion 4200 3D printer"
  },
  "fdm": {
    term: "FDM",
    expansion: "Fused Deposition Modeling",
    def: "The most common consumer 3D-printing technology — extrudes molten plastic layer by layer through a heated nozzle. Cheap, fast for prototypes, but layer-direction-dependent strength.",
    img: "https://www.3dnatives.com/en/wp-content/uploads/sites/2/2017/12/fdm-3d-printing-1.jpg",
    imgAlt: "FDM 3D printer in operation"
  },
  "sla": {
    term: "SLA",
    expansion: "Stereolithography",
    def: "Liquid-resin 3D printing where a UV laser or projector cures resin layer by layer. Produces very high-detail parts, but with limited material toughness compared to MJF.",
    img: "https://formlabs-media.formlabs.com/filer_public_thumbnails/filer_public/24/03/240316ce-7e15-4b8f-a9e9-58a432c8c83a/form-4-hero.jpg__1184x666_q85_crop-smart_subsampling-2_upscale.jpg",
    imgAlt: "Formlabs SLA 3D printer"
  },

  // ============ EQUIPMENT (with images) ============
  "arduino-mega": {
    term: "Arduino Mega 2560",
    expansion: "8-bit microcontroller board",
    def: "An open-source microcontroller board widely used for hobbyist and small-production embedded control. Used as the brain of my custom Mega II Controller after a custom shield is layered on top.",
    img: "https://store.arduino.cc/cdn/shop/files/A000067_03.front_804x603.jpg",
    imgAlt: "Arduino Mega 2560 board"
  },
  "eagle": {
    term: "Eagle",
    expansion: "Autodesk EAGLE (PCB design)",
    def: "PCB layout software used to design printed circuit boards — schematic capture and board routing. I designed every custom shield and PCB on this site in Eagle.",
    img: "https://damassets.autodesk.net/content/dam/autodesk/www/products/eagle/feat/eagle-feature-pcb-routing-large-1152x648.jpg",
    imgAlt: "Autodesk EAGLE PCB layout software"
  },
  "solidworks": {
    term: "SolidWorks",
    expansion: "3D parametric CAD",
    def: "Dassault Systèmes' 3D mechanical CAD software — the industry standard for parts and assemblies in product development. My daily tool for the past 8+ years.",
    img: "https://blogs.solidworks.com/solidworksblog/wp-content/uploads/sites/2/2023/10/SOLIDWORKS-2024-Interface.png",
    imgAlt: "SolidWorks 3D CAD interface"
  },
  "extrusion": {
    term: "80/20 extrusion",
    expansion: "T-slot aluminum framing",
    def: "Modular aluminum profiles (e.g. 20×20 mm cross-section with T-slots on every face) that bolt together with corner brackets to make robust, reconfigurable frames. Replaces welded steel framing in light/medium fixtures.",
    img: "https://8020.net/media/wysiwyg/2020-LIST.jpg",
    imgAlt: "80/20 T-slot aluminum extrusion"
  },
  "linear-actuator": {
    term: "Linear actuator",
    expansion: "Electric extend/retract mechanism",
    def: "An electric motor that drives a screw shaft in and out — converts rotation into linear push/pull motion. I use small Actuonix actuators throughout my fixtures to drive plug-insertion arms and lid-open mechanisms.",
    img: "https://www.actuonix.com/cdn/shop/products/L12-IPbothfeatures_1024x.jpg",
    imgAlt: "Actuonix L12 miniature linear actuator"
  },
  "solenoid": {
    term: "Solenoid",
    expansion: "Electromagnetic linear actuator",
    def: "An electromagnetic coil that pulls or pushes a steel plunger when energized. Cheap, fast, and binary (on/off). The Keyboard Bot uses 120+ of these to press individual keys.",
    img: "https://m.media-amazon.com/images/I/61z6IPVQ7XL._AC_SL1000_.jpg",
    imgAlt: "Push-pull solenoid"
  }

};

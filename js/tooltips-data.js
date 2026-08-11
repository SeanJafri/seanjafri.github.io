/* Tooltip / popover data for abbreviations and equipment references.
 *
 * Entry shape:
 *   term       — display name (shown bold at top of popover)
 *   expansion  — short subtitle (orange mono, e.g. "Geometric Dimensioning and Tolerancing")
 *   def        — 1–3 sentence definition (main body text)
 *   img        — (optional) path to local reference image
 *   imgAlt     — (optional) alt text for the image
 *   source     — (optional) URL or array of URLs/objects giving credit for the image
 *                — string: "https://example.com/page"
 *                — object: { url: "...", label: "Custom display label" }
 *                — array of either of the above for multiple sources
 */
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
    source: "https://www.researchgate.net/figure/Simplified-functional-principle-of-the-MJF-process_fig2_349959347"
  },
  "mjf-4200": {
    term: "HP Multi Jet Fusion 4200",
    expansion: "Industrial 3D printer (HP)",
    def: "HP's flagship MJF printer for functional prototyping and short-run production. Build volume 380 × 284 × 380 mm. I operate and maintain one in-house at HP's Spring, TX lab to print fixture parts on demand.",
    img: "img/tooltip/HP-MJF-4200-system.jpg",
    imgAlt: "HP Multi Jet Fusion 4200 3D printer system",
    source: "https://h3d.sk/wp-content/uploads/2023/04/HP-MJF-4200-system.jpg"
  },
  "fdm": {
    term: "FDM",
    expansion: "Fused Deposition Modeling",
    def: "The most common consumer 3D-printing technology — extrudes molten plastic layer by layer through a heated nozzle. Cheap, fast for prototypes, but layer-direction-dependent strength.",
    img: "img/tooltip/tooltip-fdm.jpg",
    imgAlt: "Markforged Mark Two FDM 3D printer",
    source: "https://markforged.com/3d-printers/mark-two"
  },
  "sla": {
    term: "SLA",
    expansion: "Stereolithography",
    def: "Liquid-resin 3D printing where a UV laser or projector cures resin layer by layer. Produces very high-detail parts, but with limited material toughness compared to MJF. Not used in my current HP lab."
    // No image — we don't operate an SLA printer at the Spring lab.
  },

  // ============ EQUIPMENT (with images) ============
  "arduino-mega": {
    term: "Arduino Mega 2560",
    expansion: "8-bit microcontroller board",
    def: "An open-source microcontroller board widely used for hobbyist and small-production embedded control. Used as the brain of my custom Mega II Controller after a custom shield is layered on top.",
    img: "img/tooltip/tooltip-arduino-mega.jpg",
    imgAlt: "Arduino Mega 2560 Rev3 board",
    source: "https://store.arduino.cc/products/arduino-mega-2560-rev3"
  },
  "eagle": {
    term: "Eagle",
    expansion: "Autodesk EAGLE (PCB design)",
    def: "PCB layout software used to design printed circuit boards — schematic capture and board routing. The Mega II, Deep Purple, and Varda boards shown on this site are shields I designed in Eagle. Autodesk retired EAGLE in June 2026, folding its workflows into Fusion 360 Electronics — I’m migrating my board library there.",
    img: "img/tooltip/tooltip-eagle.jpg",
    imgAlt: "Autodesk EAGLE PCB layout software interface",
    source: [
      { url: "https://www.autodesk.com/products/fusion-360", label: "autodesk.com (program)" },
      { url: "https://learn.sparkfun.com/tutorials/how-to-install-and-setup-eagle/all", label: "sparkfun.com (image)" }
    ]
  },
  "solidworks": {
    term: "SolidWorks",
    expansion: "3D parametric CAD",
    def: "Dassault Systèmes' 3D mechanical CAD software — the industry standard for parts and assemblies in product development. My daily tool for the past 8+ years.",
    img: "img/portfolio/Deep-Purple-SI1-Assembly.png",
    imgAlt: "SolidWorks assembly of the Deep Purple SI1 dock test fixture",
    source: [
      { url: "https://www.solidworks.com/", label: "solidworks.com (program)" }
    ]
  },
  "extrusion": {
    term: "80/20 extrusion",
    expansion: "T-slot aluminum framing",
    def: "Modular aluminum profiles (e.g. 20×20 mm cross-section with T-slots on every face) that bolt together with corner brackets to make robust, reconfigurable frames. Replaces welded steel framing in light/medium fixtures.",
    img: "img/tooltip/tooltip-extrusion.jpg",
    imgAlt: "80/20 1010 T-slot aluminum extrusion",
    source: "https://8020.net/1010.html"
  },
  "linear-actuator": {
    term: "Linear actuator",
    expansion: "Electric extend/retract mechanism",
    def: "An electric motor that drives a screw shaft in and out — converts rotation into linear push/pull motion. I use small Actuonix actuators throughout my fixtures to drive plug-insertion arms and lid-open mechanisms.",
    img: "img/tooltip/tooltip-actuator.jpg",
    imgAlt: "Actuonix L12 miniature linear actuator",
    source: "https://www.actuonix.com/l12-30-210-12-p"
  },
  "solenoid": {
    term: "Solenoid",
    expansion: "Electromagnetic linear actuator",
    def: "An electromagnetic coil that pulls or pushes a steel plunger when energized. Cheap, fast, and binary (on/off). The Keyboard Bot uses 120+ of these to press individual keys.",
    img: "img/tooltip/tooltip-solenoid.jpg",
    imgAlt: "Delta Electronics push-pull solenoid",
    source: "https://www.digikey.com/en/products/detail/delta-electronics/DSOS-0416-12D/6599947"
  }

};

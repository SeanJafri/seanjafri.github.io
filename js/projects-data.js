/* Project data — populated into modal on card click. */
window.PROJECT_DATA = {

  "ram-fixture": {
    number: "P · 01",
    tags: "SolidWorks · MJF · Vendor CNC · Mechanism design · 8-year evolution",
    title: "Robotic Test Fixture",
    sub: "Four generations of design refinement over eight years — from $3,500 bespoke aluminum prototype to $450 production fixture, deployed across HP Inc.'s commercial validation lab.",
    stats: [
      { num: "~87%", label: "Cost reduction per unit" },
      { num: "5×",   label: "Faster lab setup (10 min → 2 min)" },
      { num: "2×",   label: "Deployment density per bench" }
    ],
    description: [
      "The Robotic Test Fixture is the workhorse of HP Inc.'s commercial validation lab. Each fixture holds a laptop steady and provides a stable platform for the actuator-driven sub-bots — keyboard typers, USB-C plug-in arms, lid-open mechanisms — that exercise the unit under test for thousands of cycles per night. I've designed four generations of the fixture over eight years, with each generation cutting cost and improving deployability.",
      "<strong>Generation 4 (current, ~$450/unit).</strong> Moved away from a custom frame entirely. Uses an off-the-shelf lightweight plastic laptop holder modified with MJF-printed brackets that adapt it for our automation rigs. Setup time dropped to under two minutes, deployment density doubled, and the bill of materials hit its lowest point yet.",
      "<strong>Generation 3 (~$900/unit).</strong> The 80/20-extruded aluminum Frame Fixture. Replaced the optical-breadboard mounting with a standardized extrusion frame. First generation any technician could rebuild from a printed BOM without machinist support.",
      "<strong>Generation 2 (~$1,400/unit).</strong> Introduced the <strong>$25 set of MJF-printed universal corner brackets</strong>, replacing the $350 model-specific cradle. Same optical breadboard base as Gen 1, but no more bespoke cradle per laptop model.",
      "<strong>Generation 1 (~$3,500/unit).</strong> The original. Vendor-machined aluminum bolted to an optical breadboard, with per-model 3D-printed laptop cradles. Each fixture required ten minutes of careful bolt-down setup per laptop swap. This generation taught me everything that needed to change."
    ],
    media: [
      { type: "image", src: "img/portfolio/ram_fixture_uut1.jpg",                    caption: "Gen 4 (current) — off-the-shelf plastic holder with MJF brackets" },
      { type: "image", src: "img/portfolio/ram_fixture_uut2.jpg",                    caption: "Gen 4 — loaded with USB-C, keyboard, and lid actuators" },
      { type: "image", src: "img/portfolio/ram_fixture_mega.jpg",                    caption: "Gen 4 — Mega II touchscreen controller integration" },
      { type: "image", src: "img/portfolio/ram_fixture_brackets.jpg",                caption: "Gen 4 — MJF-printed bracket detail" },
      { type: "image", src: "img/portfolio/RAM-Fixture-Assembly.png",                caption: "Gen 4 — SolidWorks assembly render" },
      { type: "video", src: "videos/ram_fixture_demo.mp4",                           caption: "Demo: full plug-in / type / cycle sequence (Gen 4)" },
      { type: "image", src: "img/portfolio/Frame-Fixture-Assembly.png",              caption: "Gen 3 — SolidWorks assembly render" },
      { type: "image", src: "img/portfolio/frame_fixture_1.jpg",                     caption: "Gen 3 — 80/20 aluminum Frame Fixture" },
      { type: "image", src: "img/portfolio/frame_fixture_2.jpg",                     caption: "Gen 3 — production-deployed configuration" },
      { type: "image", src: "img/portfolio/frame_fixture_3.jpg",                     caption: "Gen 3 — with lid-open and USB-C actuators" },
      { type: "image", src: "img/portfolio/frame_fixture_4.jpg",                     caption: "Gen 3 — variant with universal corner-bracket cradle" },
      { type: "image", src: "img/portfolio/original_fixture_universal.jpg",          caption: "Gen 2 — optical breadboard + universal corner-bracket cradle ($25 MJF set replacing $350 cradle)" },
      { type: "image", src: "img/portfolio/optical_breadboard_cradle.jpg",           caption: "Gen 2 — universal cradle close-up" },
      { type: "image", src: "img/portfolio/original_fixture_lab.jpg",                caption: "Gen 1 (original) — vendor-machined aluminum + per-model 3D-printed cradle" },
      { type: "image", src: "img/portfolio/original_fixture_cradle_with_laptop.jpg", caption: "Gen 1 — with Brando-variant custom cradle" },
      { type: "image", src: "img/portfolio/original_fixture_cradle_print.jpg",       caption: "Gen 1 — 3D-printed custom cradle (FDM)" }
    ]
  },

  "mega-ii": {
    number: "P · 02",
    tags: "Arduino Mega · Custom Eagle PCB · 12-bot controller · $300 → $100",
    title: "Mega II Robotic Test Controller",
    sub: "$100 robot controller replacing a $300 4-bot unit. Drives twelve actuators per controller with on-board touchscreen UI.",
    description: [
      "The Mega II replaced an older 4-actuator controller that cost $300 per fixture. By designing a custom Eagle-routed shield over an Arduino Mega 2560 — adding twelve solid-state driver channels, current sense, and an inexpensive 2.4\" touchscreen running custom firmware — I brought controller cost down to roughly $100 while tripling channel count.",
      "The touchscreen UI gives the technician on the lab floor direct control over each actuator: engage / disengage individually, flip plug orientation (USB-C is reversible, USB-A isn't), run full cycle profiles, and dock-swap mid-test. The firmware speaks a simple serial protocol so the same controller works with our automated test harness."
    ],
    media: [
      { type: "image", src: "img/portfolio/mega_ii.jpg",                  caption: "Mega II controller with touchscreen and Arduino Mega shield" },
      { type: "image", src: "img/portfolio/Mega-II-Assembly.png",         caption: "SolidWorks assembly — Mega II enclosure + touchscreen + shield" },
      { type: "image", src: "img/portfolio/mega_comparison.jpg",          caption: "Original Mega (L) vs Mega II (R)" }
    ]
  },

  "deep-purple": {
    number: "P · 03",
    tags: "12 actuators · USB-C · USB-A · HDMI · DisplayPort · Eagle PCB",
    title: "Deep Purple Dock Test Fixture",
    sub: "Twelve-actuator robotic dock-cycler. Plugs and unplugs every port on an HP docking station — reconfigurable for 8, 9, or 12-port variants.",
    description: [
      "Deep Purple is a 12-actuator robotic fixture that exercises every port on an HP docking station through automated plug/unplug cycles. The mechanism uses linear actuators driving custom 3D-printed plug carriers along precision rails, with port-specific compliance built in to avoid scraping connectors during repeated cycles.",
      "The control PCB — a custom Eagle-designed shield over an Arduino Mega — drives twelve independent actuators with current-sensed homing and per-port error detection. The fixture went through several iterations: early prototypes used a DB0 board mounted on an optical breadboard, validating the mechanism before I redesigned the chassis into the dock-form-factor production fixture shown here. Reconfigurable plug-carrier modules let the same chassis test 8-, 9-, or 12-port dock variants without re-tooling."
    ],
    media: [
      { type: "image", src: "img/portfolio/deep_purple_front.jpg",          caption: "Final version — front view, 12 actuators in indexed pairs" },
      { type: "image", src: "img/portfolio/deep_purple_back.jpg",           caption: "Final version — back view, cable routing & frame" },
      { type: "image", src: "img/portfolio/Deep-Purple-SI1-Assembly.png",   caption: "Final version (SI1) — SolidWorks assembly render" },
      { type: "image", src: "img/portfolio/deep_purple_pcb.jpg",            caption: "DB1 Shield Board v3 — Eagle PCB layout" },
      { type: "image", src: "img/portfolio/Deep-Purple-DB0-Assembly.png",   caption: "DB0 prototype — SolidWorks assembly render" },
      { type: "image", src: "img/portfolio/deep_purple_monitors.jpg",       caption: "Early DB0 prototype — optical-breadboard mounted with triple-monitor bench" },
      { type: "image", src: "img/portfolio/deep_purple_db0_open.jpg",       caption: "DB0 prototype — internal view, twelve Actuonix actuators" },
      { type: "image", src: "img/portfolio/deep_purple_db0_pcb.jpg",        caption: "DB0 PCB close-up" },
      { type: "video", src: "videos/deep_purple_insertion.mp4",             caption: "Plug insertion cycle — single port detail" }
    ]
  },

  "keyboard-bot": {
    number: "P · 04",
    tags: "120+ solenoids · Custom PCB · Drop-in laptop UUT",
    title: "Keyboard Bot",
    sub: "A 120-solenoid actuator array that presses every key on a laptop keyboard — for typing-fatigue validation, key-rollover testing, and BIOS hotkey verification.",
    description: [
      "Keyboard Bot solves a deceptively hard problem: pressing every key on a laptop, individually and reliably, at machine speed. The fixture uses 120+ small push-pull solenoids arranged in a precision grid above the keyboard, each one driven by a custom-routed PCB and aligned by an MJF-printed chassis with per-key compliance.",
      "Key challenges I worked through: solenoid stroke had to match laptop key travel exactly (too short = misfire, too long = stuck key); the chassis had to register on the laptop without scratching the palmrest; and the mechanical structure had to be light enough to mount on any keyboard layout without re-tooling the frame."
    ],
    media: [
      { type: "image", src: "img/portfolio/keyboard_bot.jpg",        caption: "Keyboard Bot — three-quarter view" },
      { type: "image", src: "img/portfolio/keyboard_bot_view_a.jpg", caption: "Side view showing solenoid array" },
      { type: "image", src: "img/portfolio/keyboard_bot_view_b.jpg", caption: "Top-down — 120-solenoid array" },
      { type: "image", src: "img/portfolio/keyboard_bot_uut.jpg",    caption: "Installed on laptop with custom PCB visible" },
      { type: "image", src: "img/portfolio/keyboard_bot_cad.jpg",    caption: "SolidWorks render" },
      { type: "video", src: "videos/keyboard_bot_1.mp4",             caption: "Prototype in operation — typing every key" },
      { type: "video", src: "videos/keyboard_bot_2.mp4",             caption: "Alternate-angle typing demo" },
      { type: "video", src: "videos/keyboard_bot_3.mp4",             caption: "Key-rollover cycle" },
      { type: "video", src: "videos/keyboard_bot_4.mp4",             caption: "Typing-fatigue test sequence" }
    ]
  },

  "usbc-flip": {
    number: "P · 05",
    tags: "Geared mechanism · USB-C reversibility · Compliance design",
    title: "USB-C Flip Bot",
    sub: "Single-actuator plug-flipping mechanism that handles USB-C's two valid orientations during automated plug-cycle testing.",
    description: [
      "USB-C is reversible — the plug works in either of two rotations. To validate plug insertion at production scale, the fixture has to test both orientations, which means the bot needs to <em>flip</em> the plug between cycles without losing alignment with the dock port.",
      "The Flip Bot solves this with a single linear actuator driving a precision-printed planetary gear set: the actuator pushes the plug forward to insert, retracts to disengage, and a half-rotation gear at the back of the carriage rotates the plug 180° on retreat. The whole assembly mounts on the Deep Purple frame with a quick-release boss."
    ],
    media: [
      { type: "image", src: "img/portfolio/usbc_flip_bot.jpg", caption: "Geared mechanism with USB-C plug carrier" },
      { type: "video", src: "videos/usbc_flip_bot_a.mp4",      caption: "Flip Bot in operation — insert, retract, rotate 180°" },
      { type: "video", src: "videos/usbc_flip_bot_b.mp4",      caption: "Flip cycle — alternate angle" },
      { type: "video", src: "videos/usbc_flip_bot_view.mp4",   caption: "Mechanism detail — close-up view" }
    ]
  },

  "varda": {
    number: "P · 06",
    tags: "Custom enclosure · USB controller · Eagle PCB",
    title: "Varda Reviver",
    sub: "A small device that revives bricked or unresponsive laptops over USB. Custom enclosure, Eagle-designed PCB, miniature TFT display.",
    description: [
      "The Varda Reviver is a small USB-attached device that revives soft-bricked laptops during validation. I designed the custom MJF-printed enclosure, laid out the Eagle PCB integrating an Adafruit 0.96\" TFT for status, and worked with our firmware engineer on the host-side protocol so the Reviver could be deployed across the lab."
    ],
    media: [
      { type: "image", src: "img/portfolio/varda_reviver.jpg",       caption: "Final assembly with TFT display showing status" },
      { type: "image", src: "img/portfolio/Varda-Assembly.png",      caption: "SolidWorks assembly — MJF enclosure + PCB + TFT" },
      { type: "image", src: "img/portfolio/varda_rev_c.jpg",         caption: "Rev C with PCB exposed" }
    ]
  },

  "multiport": {
    number: "P · 07",
    tags: "Mechanism · Three-port array · Compliance design",
    title: "Multiport Bot",
    sub: "Three-port USB-A actuator array on a shared rail. Drives three plugs into a dock simultaneously with independent insertion timing.",
    description: [
      "The Multiport Bot was a one-off fixture for stress-testing the three USB-A ports on the side of a docking station. Three plugs on a shared linear rail, each on its own Actuonix actuator, with compliance built into each carrier head so any port misalignment doesn't propagate force into the dock."
    ],
    media: [
      { type: "image", src: "img/portfolio/multiport_close.jpg", caption: "Close-up of the three-plug carrier on shared rail" },
      { type: "image", src: "img/portfolio/multiport_bot.jpg",   caption: "Full assembly with USB-C reference plug" },
      { type: "image", src: "img/portfolio/multiport_cad.jpg",   caption: "SolidWorks render" }
    ]
  },

  "low-power-switch": {
    number: "P · 08",
    tags: "Electronics · Modular chassis · Four-channel",
    title: "Low Power Switch V4",
    sub: "Four-channel swappable USB enable/disable module. Modular print-on-demand chassis with per-channel green/blue indicator LEDs.",
    description: [
      "The Low Power Switch is a small device that sits between the test PC and the unit under test, switching USB power on and off per channel. V4 was the modular generation — four independent channels per chassis, with the housing printed on demand and the PCB assemblies snap-fit so the technician can swap them without tools."
    ],
    media: [
      { type: "image", src: "img/portfolio/low_power_switch.jpg", caption: "V4 with all four channels active" }
    ]
  },

  "lab": {
    number: "P · 09",
    tags: "Context · HP Commercial Systems Validation",
    title: "The Automation Lab",
    sub: "HP Commercial Systems automation lab. The room these fixtures live in — running validation cycles 24/7.",
    description: [
      "Wide view of the room where the fixtures get deployed. Two long benches stacked with laptops under test, each running automated validation against the fixtures and sub-bots I've designed over the past eight years."
    ],
    media: [
      { type: "image", src: "img/portfolio/automation_lab.jpg", caption: "HP Commercial Systems automation lab" }
    ]
  },

  // ============================================================
  // UNIVERSITY WORK (UT Arlington · 2013–2017)
  // ============================================================

  "mars-rover": {
    number: "U · 01",
    tags: "Team leadership · Mechanical design · Mechatronic integration · 2014–2017",
    title: "Texas Mars Rover Team — University Rover Challenge",
    sub: "Led a 40+ member university team designing a planetary rover for The Mars Society's University Rover Challenge.",
    description: [
      "As President, Vice President, and Team Lead at different points across 2014–2017, I led the University of Texas at Arlington's Mars Rover team — an interdisciplinary group of mechanical, electrical, software, and aerospace students designing and competing with a planetary rover at The Mars Society's <strong>University Rover Challenge</strong> in Utah's desert. The team competed in 2014, 2015, and 2017.",
      "Beyond hands-on mechanical design — drivetrain, suspension, sample-collection arm — I owned team operations: project planning, sponsorship fundraising (<strong>$19,000+</strong> raised from corporate and academic sponsors), recruiting, and competition logistics. This was the project that taught me everything about leading a hardware team toward a deadline."
    ],
    media: [
      { type: "image", src: "legacy/img/portfolio/Rover_Sean_URC2017.png",              caption: "URC 2017 — Mars Desert Research Station, Utah" },
      { type: "image", src: "legacy/img/portfolio/2017.gif",                            caption: "2017 rover — final URC competition design (animated)" },
      { type: "image", src: "legacy/img/portfolio/Rover_Team_URC_Competition_2017.png", caption: "Team at URC 2017" },
      { type: "image", src: "legacy/img/portfolio/2015.gif",                            caption: "2015 rover — six-wheel platform (animated)" },
      { type: "image", src: "legacy/img/portfolio/Rover_Team_URC_Competition_2015.png", caption: "Team at URC 2015" },
      { type: "image", src: "legacy/img/portfolio/2016.gif",                            caption: "2016 — chassis iteration platform (animated)" },
      { type: "image", src: "legacy/img/portfolio/Rover_Prototype.png",                 caption: "Rover prototype — mechanical assembly detail" }
    ]
  },

  "sundog": {
    number: "U · 02",
    tags: "Two-axis positioning · Arduino · Linear actuator · Photocells · 2016–2017",
    title: "Sundog Engineering — Active Sun Tracking Device",
    sub: "Two-axis sun-tracking positioning system for solar-powered streetlights, built for UTARI under Dr. Kenneth Reifsnider.",
    description: [
      "My senior capstone project at UT Arlington. Working as a four-person <em>Sundog Engineering</em> team, we were tasked by <strong>Dr. Kenneth Reifsnider at the UT Arlington Research Institute (UTARI)</strong> to design and build a sun-tracking device for solar-powered streetlights — a real research deliverable, not just a class project.",
      "Our team built a two-axis positioning system for the solar panel, outfitted with an array of photocells to accurately find the center position of the sun throughout the day. The system orients itself using a <span class=\"tip\" data-tip=\"linear-actuator\">linear actuator</span> and a chain drive, controlled by a low-power Arduino microcontroller, and is built to withstand normal outdoor environmental conditions.",
      "End-of-project result: the device fully charges the streetlight battery, keeps the light on through the night (11+ hours), and rotates overnight to face the next sunrise. The project gave me a first taste of designing hardware for sustained real-world operation, not just for a one-time demo."
    ],
    media: [
      { type: "image", src: "legacy/img/portfolio/SD_Final_Design.png",   caption: "Final design — full sun-tracking assembly" },
      { type: "image", src: "legacy/img/portfolio/SD_Final_Design2.png",  caption: "Alternate view of final assembly" },
      { type: "image", src: "legacy/img/portfolio/sundog.gif",            caption: "Sensor housing close-up — animated" },
      { type: "image", src: "legacy/img/portfolio/SD_Sensor_Housing.png", caption: "Photocell sensor housing detail" },
      { type: "image", src: "legacy/img/portfolio/SD_Analysis.png",       caption: "Structural analysis of the positioning frame" },
      { type: "image", src: "legacy/img/portfolio/SD_Electrical_Layout.png", caption: "Electrical layout — Arduino, photocell array, actuator drive" },
      { type: "image", src: "legacy/img/portfolio/SD_Logo.png",           caption: "Sundog Engineering team logo" }
    ]
  },

  "uvs": {
    number: "U · 03",
    tags: "Robotics · Tracked ground robot · Sensor integration · Wireless telemetry",
    title: "UVS — Unmanned Vehicle Systems",
    sub: "Designed and prototyped UT Arlington's first remotely-piloted unmanned ground vehicle.",
    description: [
      "A team-of-six student project where we designed and built UT Arlington's first remotely-piloted Unmanned Vehicle System — a tracked ground robot with onboard sensor suite and wireless telemetry. I owned the mechanical design and chassis: tracked drivetrain, sensor mast, hatch and access mechanisms, and the housing for the electronics package.",
      "The project was both a technical exercise and a teaching moment — most of the team hadn't built anything tracked before, and getting the drivetrain to reliably navigate uneven terrain pushed everyone past the comfortable bench-prototype phase."
    ],
    media: [
      { type: "image", src: "legacy/img/portfolio/UVS_Final_Design.png", caption: "Final UVS design — SolidWorks render" },
      { type: "image", src: "legacy/img/portfolio/uvs2.gif",             caption: "UVS rotating view — animated" },
      { type: "image", src: "legacy/img/portfolio/UVS_Team_6.png",       caption: "UVS team — six engineers across mechanical, electrical, and software" }
    ]
  }

};

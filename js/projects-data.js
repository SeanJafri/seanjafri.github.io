/* Project data — populated into modal on card click. */
window.PROJECT_DATA = {

  "ram-fixture": {
    number: "P · 01",
    tags: "SolidWorks · MJF · Vendor CNC · Mechanism design",
    title: "Robotic Laptop Test Fixture",
    sub: "Four generations of design refinement — from $3,500 prototype to $450 production fixture, deployed across HP's commercial validation lab.",
    stats: [
      { num: "~87%", label: "Cost reduction per unit" },
      { num: "5×",   label: "Faster lab setup (10 min → 2 min)" },
      { num: "2×",   label: "Deployment density per bench" }
    ],
    description: [
      "The Robotic Laptop Test Fixture is the workhorse of HP's commercial systems validation lab. Each fixture cradles a laptop, holds it steady, and provides a stable platform for the actuator-driven sub-bots — keyboard typers, USB-C plug-in arms, lid-open mechanisms — that exercise the unit under test for thousands of cycles per night.",
      "The original generation used vendor-machined aluminum, custom-printed corner cradles for each laptop model, and required ten minutes of bolt-down setup per unit. By Gen 4, I'd migrated the cradle to a <strong>set of MJF-printed universal corner brackets</strong> ($25 in print cost vs $350 model-specific cradle), simplified the mounting frame to 80/20 extrusion + MJF brackets, and integrated a quick-release mechanism that drops a laptop into the fixture in under two minutes. Total per-fixture material cost: $450, all-in."
    ],
    media: [
      { type: "image", src: "img/portfolio/ram_fixture_uut1.jpg",    caption: "Gen 4 fixture with universal-cradle mounting" },
      { type: "image", src: "img/portfolio/ram_fixture_uut2.jpg",    caption: "Fixture loaded with USB-C, keyboard, and lid actuators" },
      { type: "image", src: "img/portfolio/ram_fixture_brackets.jpg",caption: "Universal corner-bracket cradle (MJF, $25/set)" },
      { type: "image", src: "img/portfolio/ram_fixture_mega.jpg",    caption: "Mega II touchscreen controller integration" },
      { type: "video", src: "videos/ram_fixture_demo.mp4",           caption: "Demo: full plug-in / type / cycle sequence" }
    ]
  },

  "deep-purple": {
    number: "P · 02",
    tags: "12 actuators · USB-C · USB-A · HDMI · DisplayPort · Eagle PCB",
    title: "Deep Purple Dock Test Fixture",
    sub: "Twelve-actuator robotic dock-cycler. Plugs and unplugs every port on an HP docking station — reconfigurable for 8, 9, or 12-port variants.",
    description: [
      "Deep Purple is a 12-actuator robotic fixture that mounts above an HP docking station and exercises every port through automated plug/unplug cycles. The mechanism uses linear actuators driving custom 3D-printed plug carriers along precision rails, with port-specific compliance built in to avoid scraping connectors during repeated cycles.",
      "The control PCB — a custom Eagle-designed shield over an Arduino Mega — drives twelve independent actuators with current-sensed homing and per-port error detection. The fixture is reconfigurable: by swapping plug-carrier modules, the same chassis tests 8-port, 9-port, or 12-port dock variants without re-tooling."
    ],
    media: [
      { type: "image", src: "img/portfolio/deep_purple_monitors.jpg",   caption: "Triple-monitor bench running validation cycles" },
      { type: "image", src: "img/portfolio/deep_purple_front.jpg",     caption: "Front view — 12 actuators in indexed pairs" },
      { type: "image", src: "img/portfolio/deep_purple_back.jpg",      caption: "Back view — cable routing & frame" },
      { type: "image", src: "img/portfolio/deep_purple_pcb.jpg",       caption: "DB1 Shield Board v3 — Eagle PCB layout" },
      { type: "image", src: "img/portfolio/deep_purple_db0_open.jpg",  caption: "Internal view — twelve Actuonix linear actuators" },
      { type: "image", src: "img/portfolio/deep_purple_db0_pcb.jpg",   caption: "DB0 port-carrier sub-assembly" },
      { type: "video", src: "videos/deep_purple_insertion.mp4",        caption: "Plug insertion cycle — single port detail" }
    ]
  },

  "keyboard-bot": {
    number: "P · 03",
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
      { type: "video", src: "videos/keyboard_bot_3.mp4",             caption: "Key-rollover cycle" },
      { type: "video", src: "videos/keyboard_bot_4.mp4",             caption: "Typing-fatigue test sequence" }
    ]
  },

  "frame-fixture": {
    number: "P · 04",
    tags: "80/20 extrusion · Modular mounts · Production-deployed",
    title: "Frame Fixture",
    sub: "The intermediate-generation laptop fixture: 80/20-extruded frame with modular MJF-printed cradles. Bridge between bespoke aluminum and the universal-bracket Gen 4.",
    description: [
      "The Frame Fixture was the intermediate generation — a deliberate teardown of the original aluminum-machined fixture, rebuilt around 80/20 extrusion and snap-in MJF cradles. It was the first generation that any technician could re-build from a printed BOM, without machinist support."
    ],
    media: [
      { type: "image", src: "img/portfolio/frame_fixture_1.jpg", caption: "Frame Fixture with sub-bot actuators" },
      { type: "image", src: "img/portfolio/frame_fixture_2.jpg", caption: "Production-deployed configuration" },
      { type: "image", src: "img/portfolio/frame_fixture_3.jpg", caption: "Lid-open + USB-C plug-in actuators" },
      { type: "image", src: "img/portfolio/frame_fixture_4.jpg", caption: "With universal corner-bracket cradle" }
    ]
  },

  "mega-ii": {
    number: "P · 05",
    tags: "Arduino Mega · Custom shield · 12-bot controller · $300 → $100",
    title: "Mega II Robotic Test Controller",
    sub: "$100 robot controller replacing a $300 4-bot unit. Drives twelve actuators per controller with on-board touchscreen UI.",
    description: [
      "The Mega II replaced an older 4-actuator controller that cost $300 per fixture. By designing a custom Eagle-routed shield over an Arduino Mega 2560 — adding twelve solid-state driver channels, current sense, and an inexpensive 2.4\" touchscreen running custom firmware — I brought controller cost down to roughly $100 while tripling channel count.",
      "The touchscreen UI gives the technician on the lab floor direct control over each actuator: engage / disengage individually, flip plug orientation (USB-C is reversible, USB-A isn't), run full cycle profiles, and dock-swap mid-test. The firmware speaks a simple serial protocol so the same controller works with our automated test harness."
    ],
    media: [
      { type: "image", src: "img/portfolio/mega_ii.jpg",         caption: "Mega II controller with touchscreen and Arduino Mega shield" },
      { type: "image", src: "img/portfolio/mega_comparison.jpg", caption: "Original Mega (L) vs Mega II (R)" }
    ]
  },

  "usbc-flip": {
    number: "P · 06",
    tags: "Geared mechanism · USB-C reversibility · Compliance design",
    title: "USB-C Flip Bot",
    sub: "Single-actuator plug-flipping mechanism that handles USB-C's two valid orientations during automated plug-cycle testing.",
    description: [
      "USB-C is reversible — the plug works in either of two rotations. To validate plug insertion at production scale, the fixture has to test both orientations, which means the bot needs to <em>flip</em> the plug between cycles without losing alignment with the dock port.",
      "The Flip Bot solves this with a single linear actuator driving a precision-printed planetary gear set: the actuator pushes the plug forward to insert, retracts to disengage, and a half-rotation gear at the back of the carriage rotates the plug 180° on retreat. The whole assembly mounts on the Deep Purple frame with a quick-release boss."
    ],
    media: [
      { type: "image", src: "img/portfolio/usbc_flip_bot.jpg", caption: "Geared mechanism with USB-C plug carrier" },
      { type: "video", src: "videos/usbc_flip_bot_a.mp4",      caption: "Flip Bot mechanism — insert / retract / rotate" },
      { type: "video", src: "videos/usbc_flip_bot_b.mp4",      caption: "Detail view — gear engagement" },
      { type: "video", src: "videos/usbc_flip_bot_view.mp4",   caption: "Top-down view of full sequence" }
    ]
  },

  "varda": {
    number: "P · 07",
    tags: "Custom enclosure · USB controller · Eagle PCB",
    title: "Varda Reviver",
    sub: "A small device that revives bricked or unresponsive laptops over USB. Custom enclosure, Eagle-designed PCB, miniature TFT display.",
    description: [
      "The Varda Reviver is a small USB-attached device that revives soft-bricked laptops during validation. I designed the custom MJF-printed enclosure, laid out the Eagle PCB integrating an Adafruit 0.96\" TFT for status, and worked with our firmware engineer on the host-side protocol so the Reviver could be deployed across the lab."
    ],
    media: [
      { type: "image", src: "img/portfolio/varda_reviver.jpg", caption: "Final assembly with TFT display showing status" },
      { type: "image", src: "img/portfolio/varda_rev_c.jpg",   caption: "Rev C with PCB exposed" }
    ]
  },

  "original-fixture": {
    number: "P · 08",
    tags: "First-generation · Machined aluminum · Optical breadboard mount",
    title: "Original Robotic Test Fixture",
    sub: "Generation 1 of the laptop fixture line — bespoke machined aluminum on an optical breadboard. The baseline against which every later generation was measured.",
    description: [
      "The original fixture used vendor-machined aluminum bolted to an optical breadboard, with per-model 3D-printed laptop cradles. Each fixture cost roughly $3,500 in materials and required ten minutes of careful bolt-down setup per laptop swap.",
      "This generation taught me everything that needed to change: cradle modularity, frame standardization, controller cost, and most importantly, that the technician on the floor — not the design engineer — is the customer."
    ],
    media: [
      { type: "image", src: "img/portfolio/original_fixture_lab.jpg",                caption: "Deployed in lab with full bot array" },
      { type: "image", src: "img/portfolio/original_fixture_universal.jpg",          caption: "Retrofitted with universal cradle" },
      { type: "image", src: "img/portfolio/original_fixture_cradle_with_laptop.jpg", caption: "Custom per-model cradle (Brando variant)" },
      { type: "image", src: "img/portfolio/optical_breadboard_cradle.jpg",           caption: "On optical breadboard with universal cradle" },
      { type: "image", src: "img/portfolio/original_fixture_cradle_print.jpg",       caption: "3D-printed custom cradle (FDM)" }
    ]
  },

  "multiport": {
    number: "P · 09",
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
    number: "P · 10",
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
    number: "P · 11",
    tags: "Context · HP Commercial Systems Validation",
    title: "The Automation Lab",
    sub: "HP Commercial Systems automation lab. The room these fixtures live in — running validation cycles 24/7.",
    description: [
      "Wide view of the room where the fixtures get deployed. Two long benches stacked with laptops under test, each running automated validation against the fixtures and sub-bots I've designed over the past eight years."
    ],
    media: [
      { type: "image", src: "img/portfolio/automation_lab.jpg", caption: "HP Commercial Systems automation lab" }
    ]
  }

};

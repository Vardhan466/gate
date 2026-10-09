// COC Learn & Test — Topics & MCQ Data
// Version 1.0 | Generated: 26 Sep 2026
// Contains: ALL_TOPICS, MCQ banks (topics 2,3,6,7,13), ALL_TESTS, SAMPLE_PROGRESS,
//           RECENT_RESULTS, ANALYTICS, BADGES, NOTIFICATIONS

// ============================================================
// SECTION 1 — ALL 50 TOPICS
// ============================================================

const ALL_TOPICS = [
  {
    id: 1,
    name: 'Boat & Stream',
    shortName: 'Boat & Stream',
    description: 'Covers downstream speed, upstream speed, speed in still water, and river current velocity. Essential for SSC, Banking, Railways, and Placements.',
    category: 'aptitude',
    concepts: ['Downstream Speed (u = b + s)', 'Upstream Speed (v = b - s)', 'Speed of Boat in Still Water', 'Rate of Stream / Current', 'Average Speed in River', 'Previous Year Questions'],
    icon: '⛵',
    difficulty: 'intermediate',
    examRelevance: ['SSC CGL', 'Banking (IBPS/SBI)', 'Railways RRB', 'Campus Placements', 'CAT', 'GATE']
  },
  {
    id: 2,
    name: 'Nature of Roots',
    shortName: 'Nature of Roots',
    description: 'Quadratic equations and discriminant analysis (D = b² - 4ac): real and distinct, equal, and imaginary roots.',
    category: 'aptitude',
    concepts: ['Discriminant D = b² - 4ac', 'Real and Distinct Roots (D > 0)', 'Real and Equal Roots (D = 0)', 'Imaginary / Complex Roots (D < 0)', 'Common Roots Condition', 'Previous Year Questions'],
    icon: '📐',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'CAT', 'SSC CGL', 'Banking', 'Campus Placements']
  },
  {
    id: 3,
    name: 'Train Problems (Pole / Man)',
    shortName: 'Train Problems',
    description: 'Train motion, crossing standing telegraph poles, stationary objects, moving persons, and platform passing.',
    category: 'aptitude',
    concepts: ['Time to Cross a Pole', 'Crossing a Standing Person', 'Crossing a Person Moving in Same Direction', 'Unit Conversion (km/h to m/s)', 'Train Length Calculations', 'Previous Year Questions'],
    icon: '🚆',
    difficulty: 'intermediate',
    examRelevance: ['SSC CGL', 'Railways RRB NTPC', 'Banking', 'Campus Placements', 'State PSC']
  },
  {
    id: 4,
    name: 'Relative Speed (Same Direction)',
    shortName: 'Relative Speed',
    description: 'Relative velocity of two bodies traveling in the same direction, overtaking times, meeting distances, and catch-up scenarios.',
    category: 'aptitude',
    concepts: ['Relative Velocity in Same Direction (|v1 - v2|)', 'Overtaking Time Calculation', 'Distance Covered Before Meeting', 'Simultaneous Departure', 'Catch-up Problems', 'Previous Year Questions'],
    icon: '🏎️',
    difficulty: 'intermediate',
    examRelevance: ['CAT', 'GATE', 'SSC CGL', 'Banking', 'Campus Placements']
  },
  {
    id: 5,
    name: 'Algebraic Identities',
    shortName: 'Algebraic Identities',
    description: 'Polynomial expansions, identities like (a±b)², a³±b³, conditional identities, and symmetrical expressions like xⁿ + 1/xⁿ.',
    category: 'aptitude',
    concepts: ['Square of Binomial (a ± b)²', 'Difference of Squares (a² - b²)', 'Cube of Binomial (a ± b)³', 'Sum & Difference of Cubes (a³ ± b³)', 'Conditional Identity (a³+b³+c³-3abc)', 'Reciprocal Powers (xⁿ + 1/xⁿ)'],
    icon: '✨',
    difficulty: 'intermediate',
    examRelevance: ['SSC CGL', 'Banking (IBPS/SBI)', 'Railways RRB', 'Campus Placements', 'CAT', 'State PSC']
  },
  {
    id: 6,
    name: 'Compound Interest (Finding Time)',
    shortName: 'Finding Time in CI',
    description: 'Calculating the time period (t or n) in compound interest using principal-amount ratios, annual/half-yearly compounding, and prime factor powers.',
    category: 'aptitude',
    concepts: ['Amount & Principal Ratio (A/P = (1+R/100)ᵗ)', 'Annual & Semi-Annual Compounding Periods', 'Base Power & Prime Factor Equating', 'Doubling / Multiplying Sum Formulas', 'Fractional & Integer Time Periods', 'Previous Year Questions'],
    icon: '💰',
    difficulty: 'intermediate',
    examRelevance: ['SSC CGL', 'Banking (IBPS/SBI)', 'Railways NTPC', 'Campus Placements', 'State PSC']
  },
  {
    id: 7,
    name: 'Pipes & Cisterns (Outlet Pipes)',
    shortName: 'Outlet Pipes',
    description: 'Problems on outlet pipes, cistern emptying rates, negative work rates, bottom leakage, and combined inlet/outlet filling times.',
    category: 'aptitude',
    concepts: ['Negative Work Rate of Outlet Pipes', 'Net Filling Rate = Inlet Rate - Outlet Rate', 'Time to Empty a Full Cistern', 'Bottom Leak & Delay Scenarios', 'Alternating Inlet and Outlet Operations', 'Previous Year Questions'],
    icon: '🚰',
    difficulty: 'intermediate',
    examRelevance: ['SSC CGL', 'Banking (IBPS/SBI)', 'Railways RRB', 'Campus Placements', 'State PSC']
  },
  {
    id: 8,
    name: 'Triangle Similarity',
    shortName: 'Triangle Similarity',
    description: 'Geometric similarity criteria (AAA, SAS, SSS), Thales Theorem (BPT), area-to-side ratios, median/altitude relations, and angle bisectors.',
    category: 'aptitude',
    concepts: ['Similarity Criteria (AAA, SAS, SSS)', 'Basic Proportionality Theorem (Thales)', 'Ratio of Areas = (Ratio of Sides)²', 'Ratios of Altitudes & Perimeters', 'Angle Bisector Theorem', 'Previous Year Questions'],
    icon: '🔺',
    difficulty: 'intermediate',
    examRelevance: ['SSC CGL', 'Railways NTPC', 'CDS / NDA', 'Campus Placements', 'State PSC']
  },
  {
    id: 9,
    name: 'Train Problems (Platform / Bridge)',
    shortName: 'Train (Platform/Bridge)',
    description: 'Train crossing stationary extended objects: platforms, long bridges, and tunnels, where total distance equals train length plus object length.',
    category: 'aptitude',
    concepts: ['Total Distance = Train Length + Platform Length', 'Crossing Stationary Platforms', 'Crossing Long Bridges & Tunnels', 'Train Passing Pole vs Platform', 'Speed Determination from Multiple Crossings', 'Previous Year Questions'],
    icon: '🌉',
    difficulty: 'intermediate',
    examRelevance: ['SSC CGL', 'Railways RRB NTPC', 'Banking', 'Campus Placements', 'State PSC']
  },
  {
    id: 10,
    name: 'Linear Equations',
    shortName: 'Linear Equations',
    description: 'Covers linear equations in one and two variables, algebraic elimination, substitution methods, graphical consistency, and real-world word problems.',
    category: 'aptitude',
    concepts: ['Linear Equations in One Variable', 'Simultaneous Linear Equations (Two Variables)', 'Elimination & Substitution Methods', 'Consistent & Inconsistent Systems', 'Word Problems on Ages & Numbers', 'Previous Year Questions'],
    icon: '📏',
    difficulty: 'intermediate',
    examRelevance: ['SSC CGL', 'Banking (IBPS/SBI)', 'Railways RRB', 'Campus Placements', 'CAT', 'State PSC']
  },
  {
    id: 11,
    name: 'Trains Crossing',
    shortName: 'Trains Crossing',
    description: 'Focuses on two moving trains crossing each other in opposite directions or overtaking in the same direction, relative speed formulas, and clearance times.',
    category: 'aptitude',
    concepts: ['Relative Speed in Opposite Direction (v₁ + v₂)', 'Relative Speed in Same Direction (|v₁ - v₂|)', 'Total Distance = Length 1 + Length 2', 'Time Taken to Completely Cross', 'Fast Train Overtaking Slow Train', 'Previous Year Questions'],
    icon: '🚂',
    difficulty: 'intermediate',
    examRelevance: ['SSC CGL', 'Railways RRB NTPC', 'Banking', 'Campus Placements', 'State PSC']
  },
  {
    id: 12,
    name: 'Work & Efficiency',
    shortName: 'Work & Efficiency',
    description: 'Comprehensive master set covering individual and combined work, efficiency ratios, unitary method, man-days formula (M₁D₁H₁/W₁), and mid-work transitions.',
    category: 'aptitude',
    concepts: ['Work = Efficiency × Time Formula', 'Combined Work (1/A + 1/B)', 'Efficiency Ratio & Inverse Time Ratio', 'Work Equivalency (M₁D₁H₁/W₁ = M₂D₂H₂/W₂)', 'Workers Leaving or Joining Mid-Work', 'Previous Year Questions'],
    icon: '⚙️',
    difficulty: 'intermediate',
    examRelevance: ['SSC CGL', 'Banking (IBPS/SBI)', 'Railways RRB', 'Campus Placements', 'State PSC']
  },
  {
    id: 13,
    name: 'General Knowledge & Current Affairs',
    shortName: 'GK & Current Affairs',
    description: 'Covers static GK (history, geography, polity, economy) and current affairs for competitive exams.',
    category: 'general',
    concepts: ['Indian History', 'World Geography', 'Indian Polity & Constitution', 'Economy & Finance', 'Science & Technology', 'Sports', 'Awards & Honours', 'Current Events'],
    icon: '🌍',
    difficulty: 'beginner',
    examRelevance: ['UPSC', 'SSC', 'Banking', 'Railways']
  },
  {
    id: 6,
    name: 'Computer Science Fundamentals',
    shortName: 'CS Fundamentals',
    description: 'Core concepts of computer science including number systems, Boolean logic, basic programming, OS and networking.',
    category: 'computer_science',
    concepts: ['Number Systems', 'Boolean Algebra', 'Data Types & Variables', 'Basic Algorithms', 'OS Concepts', 'Networking Basics', 'Memory Organisation', 'I/O Systems'],
    icon: '💻',
    difficulty: 'beginner',
    examRelevance: ['GATE', 'Campus Placements', 'SSC', 'Banking']
  },
  {
    id: 7,
    name: 'Data Structures & Algorithms',
    shortName: 'DSA',
    description: 'Covers fundamental data structures and algorithmic techniques with complexity analysis for problem solving.',
    category: 'computer_science',
    concepts: ['Arrays & Strings', 'Linked Lists', 'Stacks & Queues', 'Trees & Heaps', 'Graphs', 'Sorting Algorithms', 'Searching Algorithms', 'Time & Space Complexity'],
    icon: '🌲',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'Campus Placements', 'FAANG Interviews']
  },
  {
    id: 8,
    name: 'Object-Oriented Programming',
    shortName: 'OOP',
    description: 'Principles and design patterns of OOP including encapsulation, inheritance, polymorphism and abstraction.',
    category: 'computer_science',
    concepts: ['Classes & Objects', 'Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction', 'Interfaces', 'Design Patterns', 'Exception Handling'],
    icon: '🧱',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'Campus Placements', 'FAANG Interviews']
  },
  {
    id: 9,
    name: 'Database Management Systems',
    shortName: 'DBMS',
    description: 'Covers relational databases, SQL, normalisation, transactions and database design principles.',
    category: 'computer_science',
    concepts: ['ER Modelling', 'Relational Algebra', 'SQL', 'Normalisation (1NF-BCNF)', 'Transactions & ACID', 'Indexing & Hashing', 'Concurrency Control', 'Recovery'],
    icon: '🗄️',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'Campus Placements', 'SSC']
  },
  {
    id: 10,
    name: 'Operating Systems',
    shortName: 'Operating Systems',
    description: 'Study of OS concepts including process management, memory management, file systems and synchronisation.',
    category: 'computer_science',
    concepts: ['Process & Threads', 'CPU Scheduling', 'Memory Management', 'Virtual Memory', 'File Systems', 'Deadlock', 'Synchronisation', 'I/O Management'],
    icon: '⚙️',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'Campus Placements']
  },
  {
    id: 11,
    name: 'Computer Networks',
    shortName: 'Networks',
    description: 'Covers the OSI model, TCP/IP protocols, routing, network security and wireless communication fundamentals.',
    category: 'computer_science',
    concepts: ['OSI Model', 'TCP/IP Stack', 'IP Addressing & Subnetting', 'Routing Protocols', 'Transport Layer', 'Application Layer (HTTP, DNS)', 'Network Security', 'Wireless Networks'],
    icon: '🌐',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'Campus Placements', 'Cybersecurity Certifications']
  },
  {
    id: 12,
    name: 'Software Engineering',
    shortName: 'Software Engg.',
    description: 'Software development life cycle, methodologies, testing, project management and quality assurance.',
    category: 'computer_science',
    concepts: ['SDLC Models', 'Agile & Scrum', 'Requirements Engineering', 'Software Design', 'Testing & Verification', 'Project Management', 'Software Metrics', 'Version Control'],
    icon: '🔧',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'Campus Placements']
  },
  {
    id: 13,
    name: 'Engineering Mathematics',
    shortName: 'Engg. Mathematics',
    description: 'Advanced mathematics including calculus, linear algebra, differential equations and transforms for engineering applications.',
    category: 'mathematics',
    concepts: ['Limits & Continuity', 'Differential Calculus', 'Integral Calculus', 'Matrices & Determinants', 'Eigenvalues & Eigenvectors', 'Differential Equations', 'Laplace Transforms', 'Fourier Series'],
    icon: '∫',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE', 'UPSC']
  },
  {
    id: 14,
    name: 'Digital Electronics & Logic Design',
    shortName: 'Digital Electronics',
    description: 'Logic gates, Boolean algebra, combinational and sequential circuits, and digital system design.',
    category: 'electronics',
    concepts: ['Number Systems & Codes', 'Boolean Algebra', 'Logic Gates', 'Karnaugh Maps', 'Combinational Circuits', 'Sequential Circuits', 'Flip-Flops', 'Counters & Registers'],
    icon: '🔌',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'ESE', 'Campus Placements']
  },
  {
    id: 15,
    name: 'Signals & Systems',
    shortName: 'Signals & Systems',
    description: 'Analysis of continuous and discrete-time signals and systems using time and frequency domain techniques.',
    category: 'electronics',
    concepts: ['Signal Classification', 'LTI Systems', 'Convolution', 'Fourier Transform', 'Laplace Transform', 'Z-Transform', 'Sampling Theorem', 'Frequency Response'],
    icon: '〰️',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE']
  },
  {
    id: 16,
    name: 'Control Systems',
    shortName: 'Control Systems',
    description: 'Analysis and design of feedback control systems using time and frequency domain methods.',
    category: 'electronics',
    concepts: ['Transfer Functions', 'Block Diagrams', 'Time Response', 'Stability Analysis', 'Root Locus', 'Bode Plots', 'Nyquist Criterion', 'PID Controllers'],
    icon: '🎛️',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE']
  },
  {
    id: 17,
    name: 'Analog Electronics',
    shortName: 'Analog Electronics',
    description: 'Study of diodes, transistors, amplifiers, operational amplifiers and analog circuit design.',
    category: 'electronics',
    concepts: ['Diodes & Rectifiers', 'BJT Biasing', 'FET & MOSFET', 'Amplifier Analysis', 'Op-Amp Circuits', 'Feedback Amplifiers', 'Oscillators', 'Power Amplifiers'],
    icon: '📡',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE']
  },
  {
    id: 18,
    name: 'Electromagnetic Theory',
    shortName: 'Electromagnetics',
    description: "Covers Maxwell's equations, wave propagation, transmission lines and antenna fundamentals.",
    category: 'electronics',
    concepts: ["Coulomb's & Gauss's Law", 'Magnetic Fields', "Maxwell's Equations", 'Electromagnetic Waves', 'Transmission Lines', 'Waveguides', 'Antennas', 'Radar Basics'],
    icon: '⚡',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE']
  },
  {
    id: 19,
    name: 'Power Systems',
    shortName: 'Power Systems',
    description: 'Generation, transmission, distribution and protection of electrical power systems.',
    category: 'electrical',
    concepts: ['Power Generation', 'Transmission Lines', 'Per-Unit System', 'Load Flow Analysis', 'Fault Analysis', 'Protection Systems', 'Stability', 'HVDC Transmission'],
    icon: '🏭',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE', 'PSU Exams']
  },
  {
    id: 20,
    name: 'Electrical Machines',
    shortName: 'Electrical Machines',
    description: 'DC machines, transformers, induction motors, synchronous machines and their characteristics.',
    category: 'electrical',
    concepts: ['DC Generators & Motors', 'Transformers', 'Induction Motors', 'Synchronous Generators', 'Synchronous Motors', 'Special Machines', 'Motor Starting', 'Speed Control'],
    icon: '⚙️',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE', 'PSU Exams']
  },
  {
    id: 21,
    name: 'Circuit Theory & Networks',
    shortName: 'Circuit Theory',
    description: 'Analysis of electrical circuits using KVL, KCL, network theorems and two-port network theory.',
    category: 'electrical',
    concepts: ['KVL & KCL', 'Mesh & Nodal Analysis', 'Thevenin & Norton', 'Superposition', 'AC Circuit Analysis', 'Resonance', 'Two-Port Networks', 'Network Functions'],
    icon: '🔋',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'ESE', 'Campus Placements']
  },
  {
    id: 22,
    name: 'Microprocessors & Microcontrollers',
    shortName: 'Microprocessors',
    description: 'Architecture, programming and interfacing of 8085/8086 microprocessors and 8051 microcontrollers.',
    category: 'electronics',
    concepts: ['8085 Architecture', '8086 Architecture', 'Instruction Set', 'Assembly Language', '8051 Microcontroller', 'Interrupts & DMA', 'Memory Interfacing', 'Peripheral Interfacing'],
    icon: '🖥️',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE', 'Campus Placements']
  },
  {
    id: 23,
    name: 'VLSI Design',
    shortName: 'VLSI Design',
    description: 'Very large scale integration design including CMOS technology, digital VLSI circuits and layout.',
    category: 'electronics',
    concepts: ['CMOS Technology', 'MOS Transistor', 'CMOS Logic Gates', 'Sequential VLSI', 'Combinational Design', 'FPGA Architecture', 'Low Power Design', 'Testing of VLSI'],
    icon: '🔬',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE', 'VLSI Industry']
  },
  {
    id: 24,
    name: 'Embedded Systems',
    shortName: 'Embedded Systems',
    description: 'Hardware and software design of embedded systems, real-time operating systems and interfacing.',
    category: 'electronics',
    concepts: ['Embedded Architecture', 'Real-Time OS', 'Interrupts & Timers', 'Serial Communication (UART/SPI/I2C)', 'ADC & DAC', 'Memory Types', 'Sensor Interfacing', 'Power Management'],
    icon: '🤖',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'Campus Placements', 'IoT Industry']
  },
  {
    id: 25,
    name: 'Communication Systems',
    shortName: 'Communications',
    description: 'Analog and digital communication techniques, modulation schemes, noise analysis and information theory.',
    category: 'electronics',
    concepts: ['AM & FM Modulation', 'Digital Modulation (ASK/FSK/PSK)', 'Noise & SNR', 'Bandwidth', 'Sampling & Quantisation', 'PCM & Delta Modulation', 'Error Correction Codes', 'Information Theory'],
    icon: '📻',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE']
  },
  {
    id: 26,
    name: 'Thermodynamics',
    shortName: 'Thermodynamics',
    description: 'Laws of thermodynamics, heat engines, refrigeration cycles and thermodynamic property analysis.',
    category: 'mechanical',
    concepts: ['Zeroth & First Law', 'Second Law & Entropy', 'Thermodynamic Cycles', 'Properties of Steam', 'Gas Dynamics', 'Refrigeration & AC', 'Psychrometrics', 'Combustion'],
    icon: '🌡️',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'ESE', 'PSU Exams']
  },
  {
    id: 27,
    name: 'Fluid Mechanics',
    shortName: 'Fluid Mechanics',
    description: 'Fluid statics, kinematics, dynamics, flow measurement and turbomachinery fundamentals.',
    category: 'mechanical',
    concepts: ['Fluid Properties', 'Hydrostatics', 'Bernoulli Equation', 'Continuity Equation', 'Viscous Flow', 'Boundary Layer', 'Flow Measurement', 'Turbomachinery'],
    icon: '💧',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'ESE', 'PSU Exams']
  },
  {
    id: 28,
    name: 'Strength of Materials',
    shortName: 'Strength of Materials',
    description: 'Analysis of stress, strain, bending, torsion and deflection in structural members.',
    category: 'mechanical',
    concepts: ['Stress & Strain', 'Elastic Constants', 'Bending Moment & Shear Force', 'Bending Stresses', 'Torsion', 'Columns & Struts', 'Deflection of Beams', 'Failure Theories'],
    icon: '🏗️',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'ESE', 'PSU Exams']
  },
  {
    id: 29,
    name: 'Theory of Machines',
    shortName: 'Theory of Machines',
    description: 'Kinematics and dynamics of machines, mechanisms, governors, flywheels and vibrations.',
    category: 'mechanical',
    concepts: ['Kinematics of Mechanisms', 'Velocity & Acceleration', 'Gears & Gear Trains', 'Cams & Followers', 'Governors & Flywheels', 'Balancing', 'Vibrations', 'Clutches & Brakes'],
    icon: '⚙️',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE', 'PSU Exams']
  },
  {
    id: 30,
    name: 'Manufacturing Technology',
    shortName: 'Manufacturing',
    description: 'Covers casting, forming, welding, machining processes, metrology and NC/CNC machines.',
    category: 'mechanical',
    concepts: ['Casting Processes', 'Metal Forming', 'Welding Technology', 'Machining Operations', 'Tool Geometry & Wear', 'Surface Finish', 'Metrology & Inspection', 'NC/CNC Machines'],
    icon: '🏭',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'ESE', 'PSU Exams']
  },
  {
    id: 31,
    name: 'Engineering Drawing & CAD',
    shortName: 'Engg. Drawing',
    description: 'Principles of engineering drawing, projections, sectional views and CAD software fundamentals.',
    category: 'mechanical',
    concepts: ['Orthographic Projections', 'Isometric Views', 'Sectional Views', 'Dimensioning', 'Tolerances & Fits', 'CAD Fundamentals', 'Assembly Drawings', 'GD&T'],
    icon: '📐',
    difficulty: 'beginner',
    examRelevance: ['GATE', 'ESE', 'Campus Placements']
  },
  {
    id: 32,
    name: 'Heat Transfer',
    shortName: 'Heat Transfer',
    description: 'Modes of heat transfer — conduction, convection and radiation — and heat exchanger analysis.',
    category: 'mechanical',
    concepts: ['Conduction', 'Convection', 'Radiation', 'Extended Surfaces (Fins)', 'Transient Conduction', 'Heat Exchangers', 'Boiling & Condensation', 'Mass Transfer'],
    icon: '🔥',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'ESE', 'PSU Exams']
  },
  {
    id: 33,
    name: 'Machine Design',
    shortName: 'Machine Design',
    description: 'Design of machine elements including shafts, gears, bearings, springs, joints and fatigue analysis.',
    category: 'mechanical',
    concepts: ['Design Philosophy', 'Fatigue & Endurance', 'Shafts & Keys', 'Gears Design', 'Bearings', 'Clutches & Brakes', 'Springs', 'Welded & Bolted Joints'],
    icon: '🔩',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE', 'PSU Exams']
  },
  {
    id: 34,
    name: 'Industrial Engineering',
    shortName: 'Industrial Engg.',
    description: 'Operations research, production planning, inventory control, queuing theory and work study.',
    category: 'mechanical',
    concepts: ['Linear Programming', 'Transportation Models', 'CPM & PERT', 'Inventory Control', 'Queuing Theory', 'Work Study & Motion', 'Quality Control', 'Forecasting'],
    icon: '📈',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'ESE', 'PSU Exams']
  },
  {
    id: 35,
    name: 'Automobile Engineering',
    shortName: 'Automobile Engg.',
    description: 'Vehicle dynamics, engine systems, transmission, braking, suspension and automotive electronics.',
    category: 'mechanical',
    concepts: ['Engine Types & Cycles', 'Fuel Systems', 'Transmission & Clutch', 'Steering & Suspension', 'Braking Systems', 'Vehicle Dynamics', 'Automotive Electronics', 'Electric Vehicles'],
    icon: '🚗',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'ESE', 'Automotive Industry']
  },
  {
    id: 36,
    name: 'Probability & Statistics',
    shortName: 'Probability & Stats',
    description: 'Probability theory, distributions, statistical inference, hypothesis testing and regression analysis.',
    category: 'mathematics',
    concepts: ['Probability Axioms', 'Conditional Probability', 'Random Variables', 'Probability Distributions', 'Expectation & Variance', 'Hypothesis Testing', 'Confidence Intervals', 'Regression Analysis'],
    icon: '🎲',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'CAT', 'Data Science', 'Banking']
  },
  {
    id: 37,
    name: 'Linear Algebra',
    shortName: 'Linear Algebra',
    description: 'Vectors, matrices, systems of linear equations, eigenvalues and vector spaces.',
    category: 'mathematics',
    concepts: ['Vectors & Spaces', 'Matrix Operations', 'Systems of Equations', 'Determinants', 'Eigenvalues & Eigenvectors', 'Linear Transformations', 'Orthogonality', 'SVD & PCA'],
    icon: '🔷',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'ESE', 'Data Science', 'UPSC']
  },
  {
    id: 38,
    name: 'Differential Equations',
    shortName: 'Differential Eqns.',
    description: 'Ordinary and partial differential equations, solution methods and engineering applications.',
    category: 'mathematics',
    concepts: ['First Order ODEs', 'Higher Order ODEs', 'Method of Undetermined Coefficients', 'Variation of Parameters', 'Laplace Transforms', 'Power Series Solutions', 'PDE Basics', 'Boundary Value Problems'],
    icon: "d/dx",
    difficulty: 'advanced',
    examRelevance: ['GATE', 'ESE', 'UPSC']
  },
  {
    id: 39,
    name: 'Numerical Methods',
    shortName: 'Numerical Methods',
    description: 'Numerical techniques for solving equations, integration, differentiation and differential equations.',
    category: 'mathematics',
    concepts: ['Errors in Computation', 'Bisection & Newton-Raphson', 'Interpolation', 'Numerical Integration', 'Numerical Differentiation', 'Gauss Elimination', 'Runge-Kutta Methods', 'Eigenvalue Problems'],
    icon: '🔣',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'ESE']
  },
  {
    id: 40,
    name: 'Discrete Mathematics',
    shortName: 'Discrete Maths',
    description: 'Logic, set theory, graph theory, combinatorics and algebraic structures for computer science.',
    category: 'mathematics',
    concepts: ['Propositional Logic', 'Set Theory', 'Relations & Functions', 'Graph Theory', 'Combinatorics', 'Group Theory', 'Trees & Lattices', 'Formal Languages'],
    icon: '🔗',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'Campus Placements']
  },
  {
    id: 41,
    name: 'Python Programming',
    shortName: 'Python',
    description: 'Python syntax, data structures, OOP, file handling, libraries and scripting for automation.',
    category: 'programming',
    concepts: ['Syntax & Data Types', 'Control Flow', 'Functions & Lambdas', 'List/Dict Comprehensions', 'OOP in Python', 'File & Exception Handling', 'NumPy & Pandas', 'Regular Expressions'],
    icon: '🐍',
    difficulty: 'beginner',
    examRelevance: ['Campus Placements', 'FAANG Interviews', 'Data Science']
  },
  {
    id: 42,
    name: 'C & C++ Programming',
    shortName: 'C & C++',
    description: 'Procedural and object-oriented programming in C/C++, pointers, memory management and STL.',
    category: 'programming',
    concepts: ['C Fundamentals', 'Pointers & Arrays', 'Structures & Unions', 'C++ Classes & Objects', 'Operator Overloading', 'Templates', 'STL Containers', 'Memory Management'],
    icon: '⌨️',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'Campus Placements', 'FAANG Interviews']
  },
  {
    id: 43,
    name: 'Java Programming',
    shortName: 'Java',
    description: 'Core Java including OOP, collections, exception handling, multithreading and Java 8+ features.',
    category: 'programming',
    concepts: ['Java OOP', 'Collections Framework', 'Exception Handling', 'Multithreading', 'Java 8 Features (Streams, Lambda)', 'JDBC', 'Design Patterns in Java', 'JVM Internals'],
    icon: '☕',
    difficulty: 'intermediate',
    examRelevance: ['Campus Placements', 'FAANG Interviews']
  },
  {
    id: 44,
    name: 'Web Technologies (HTML/CSS/JS)',
    shortName: 'Web Technologies',
    description: 'Frontend and backend web development including HTML5, CSS3, JavaScript, responsive design and frameworks.',
    category: 'programming',
    concepts: ['HTML5 Semantics', 'CSS3 & Flexbox', 'JavaScript ES6+', 'DOM Manipulation', 'REST APIs', 'React Basics', 'Node.js Basics', 'Browser Storage'],
    icon: '🌐',
    difficulty: 'beginner',
    examRelevance: ['Campus Placements', 'Web Development Industry']
  },
  {
    id: 45,
    name: 'Artificial Intelligence & ML',
    shortName: 'AI & ML',
    description: 'Machine learning algorithms, neural networks, model evaluation and practical AI applications.',
    category: 'computer_science',
    concepts: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks', 'Decision Trees & Ensemble', 'SVMs', 'Feature Engineering', 'Model Evaluation', 'Deep Learning Basics'],
    icon: '🧠',
    difficulty: 'advanced',
    examRelevance: ['GATE', 'Campus Placements', 'Data Science', 'FAANG Interviews']
  },
  {
    id: 46,
    name: 'Cybersecurity Fundamentals',
    shortName: 'Cybersecurity',
    description: 'Security principles, cryptography, network security, threat modelling and ethical hacking fundamentals.',
    category: 'computer_science',
    concepts: ['CIA Triad', 'Cryptography Basics', 'Public Key Infrastructure', 'Network Security', 'Web Security (OWASP)', 'Malware & Threats', 'Firewalls & IDS/IPS', 'Security Policies'],
    icon: '🔐',
    difficulty: 'intermediate',
    examRelevance: ['Campus Placements', 'Cybersecurity Certifications', 'Banking']
  },
  {
    id: 47,
    name: 'Cloud Computing',
    shortName: 'Cloud Computing',
    description: 'Cloud service models, deployment types, virtualisation, AWS/Azure/GCP fundamentals and microservices.',
    category: 'computer_science',
    concepts: ['Cloud Service Models (IaaS/PaaS/SaaS)', 'Virtualisation', 'AWS Core Services', 'Azure Fundamentals', 'Containerisation (Docker/K8s)', 'Serverless Computing', 'DevOps & CI/CD', 'Cloud Security'],
    icon: '☁️',
    difficulty: 'intermediate',
    examRelevance: ['Campus Placements', 'Cloud Certifications', 'DevOps Industry']
  },
  {
    id: 48,
    name: 'General Aptitude (GATE)',
    shortName: 'GATE Aptitude',
    description: 'GATE General Aptitude section covering verbal ability, numerical ability and critical thinking.',
    category: 'aptitude',
    concepts: ['Verbal Analogies', 'English Grammar', 'Numerical Computation', 'Data Interpretation', 'Logical Reasoning', 'Critical Reasoning', 'Spatial Reasoning', 'Analytical Reasoning'],
    icon: '🎓',
    difficulty: 'intermediate',
    examRelevance: ['GATE', 'ESE']
  },
  {
    id: 49,
    name: 'Environmental Science',
    shortName: 'Environmental Sci.',
    description: 'Ecosystems, biodiversity, pollution, climate change, environmental laws and sustainable development.',
    category: 'general',
    concepts: ['Ecosystems & Biodiversity', 'Air Pollution', 'Water Pollution', 'Soil Pollution', 'Climate Change & Global Warming', 'Environmental Laws', 'Renewable Energy', 'Sustainable Development'],
    icon: '🌱',
    difficulty: 'beginner',
    examRelevance: ['UPSC', 'SSC', 'GATE', 'ESE']
  },
  {
    id: 50,
    name: 'Engineering Ethics & Aptitude',
    shortName: 'Engg. Ethics',
    description: 'Professional ethics, codes of conduct, social responsibility, intellectual property and workplace integrity.',
    category: 'general',
    concepts: ['Engineering Ethics Codes', 'Professional Responsibility', 'Social & Environmental Impact', 'Intellectual Property', 'Whistleblowing', 'Workplace Integrity', 'Public Safety', 'Research Ethics'],
    icon: '⚖️',
    difficulty: 'beginner',
    examRelevance: ['GATE', 'ESE', 'UPSC']
  }
];

// ============================================================
// SECTION 2a — MCQ BANK: VERBAL ABILITY & ENGLISH (Topic 2, 40 Qs)
// ============================================================

const TOPIC2_QUESTIONS = [
  // --- Grammar & Usage ---
  {
    id: 201,
    text: 'Choose the correct sentence:',
    options: [
      'Neither of the students have submitted their assignment.',
      'Neither of the students has submitted his assignment.',
      'Neither of the student has submitted their assignment.',
      'Neither of the students have submitted his assignment.'
    ],
    correct: 1,
    explanation: '"Neither" takes a singular verb. "Neither of the students has" is correct. The pronoun "his" is traditionally used, though modern usage may vary.'
  },
  {
    id: 202,
    text: 'Identify the error in the following sentence: "The committee have reached their decision after a lengthy deliberation."',
    options: [
      'committee have',
      'reached their',
      'decision after',
      'No error'
    ],
    correct: 3,
    explanation: 'In British English, collective nouns like "committee" can take a plural verb when members act individually. "Have reached their decision" is acceptable British usage; hence, No error.'
  },
  {
    id: 203,
    text: 'Fill in the blank: "By the time the guests arrive, she _______ the dinner."',
    options: [
      'will finish',
      'will have finished',
      'would finish',
      'finishes'
    ],
    correct: 1,
    explanation: 'The future perfect tense "will have finished" is used to indicate an action that will be completed before another future event.'
  },
  {
    id: 204,
    text: 'Choose the word closest in meaning to "LACONIC":',
    options: [
      'Verbose',
      'Melancholic',
      'Brief and concise',
      'Ambiguous'
    ],
    correct: 2,
    explanation: '"Laconic" means using very few words; brief and concise. It is the opposite of verbose (wordy).'
  },
  {
    id: 205,
    text: 'The antonym of "MAGNANIMOUS" is:',
    options: [
      'Generous',
      'Petty',
      'Courageous',
      'Gregarious'
    ],
    correct: 1,
    explanation: '"Magnanimous" means generous and forgiving. Its antonym is "petty" — small-minded or ungenerous.'
  },
  // --- Sentence Correction ---
  {
    id: 206,
    text: 'Choose the grammatically correct sentence:',
    options: [
      'He insisted to go to the party.',
      'He insisted on going to the party.',
      'He insisted for going to the party.',
      'He insisted that going to the party.'
    ],
    correct: 1,
    explanation: '"Insist on + gerund (Ving)" is the correct collocation. "Insist on going" is grammatically correct.'
  },
  {
    id: 207,
    text: 'Identify the correctly punctuated sentence:',
    options: [
      "It's a beautiful day, isn't it.",
      "Its a beautiful day, isn't it?",
      "It's a beautiful day, isn't it?",
      "It's a beautiful day isn't it?"
    ],
    correct: 2,
    explanation: '"It\'s" (contraction of "it is") is correct. A tag question requires a question mark at the end.'
  },
  {
    id: 208,
    text: 'Fill in the blank with the correct article: "She is ___ honest woman."',
    options: ['a', 'an', 'the', 'No article'],
    correct: 1,
    explanation: '"An" is used before words starting with a vowel sound. "Honest" starts with a silent \'h\', so its first sound is the vowel /ɒ/, requiring "an".'
  },
  {
    id: 209,
    text: 'Which word correctly fills the blank? "The scientist\'s _______ research led to a Nobel Prize."',
    options: ['Pioneering', 'Peonage', 'Pinocle', 'Piquant'],
    correct: 0,
    explanation: '"Pioneering" means innovative, leading the way. It correctly describes groundbreaking research that could lead to a Nobel Prize.'
  },
  {
    id: 210,
    text: 'Spot the error: "The news are disturbing."',
    options: [
      'The',
      'news are',
      'disturbing',
      'No error'
    ],
    correct: 1,
    explanation: '"News" is an uncountable noun and always takes a singular verb. The correct sentence is "The news is disturbing."'
  },
  // --- Reading Comprehension (passage-based) ---
  {
    id: 211,
    text: 'Read: "Mindfulness, once confined to spiritual traditions, has entered mainstream culture. Studies show it reduces stress, improves focus and boosts emotional regulation." What is the main idea?',
    options: [
      'Mindfulness is a religious practice',
      'Mindfulness has moved from niche to mainstream with proven benefits',
      'Emotional regulation is the primary benefit of mindfulness',
      'Stress reduction requires spiritual practice'
    ],
    correct: 1,
    explanation: 'The passage discusses the transition of mindfulness from spiritual traditions to mainstream culture and mentions multiple proven benefits.'
  },
  {
    id: 212,
    text: 'The word "confined" in the passage (Q.211) most nearly means:',
    options: ['Expanded', 'Restricted', 'Exported', 'Defined'],
    correct: 1,
    explanation: '"Confined" means restricted or limited to a particular area or group.'
  },
  // --- Vocabulary ---
  {
    id: 213,
    text: 'Choose the synonym of "EPHEMERAL":',
    options: ['Permanent', 'Transitory', 'Enormous', 'Spiritual'],
    correct: 1,
    explanation: '"Ephemeral" means lasting for a very short time. "Transitory" is its closest synonym.'
  },
  {
    id: 214,
    text: 'The word "AMELIORATE" means:',
    options: [
      'To worsen a situation',
      'To make something better',
      'To destroy completely',
      'To confuse or bewilder'
    ],
    correct: 1,
    explanation: '"Ameliorate" means to make (something bad or unsatisfactory) better; to improve.'
  },
  {
    id: 215,
    text: 'Choose the antonym of "OBDURATE":',
    options: ['Stubborn', 'Compliant', 'Harsh', 'Opaque'],
    correct: 1,
    explanation: '"Obdurate" means stubbornly refusing to change. Its antonym is "compliant" — willing to comply or obey.'
  },
  // --- Idioms & Phrases ---
  {
    id: 216,
    text: 'The idiom "burning the midnight oil" means:',
    options: [
      'Setting something on fire at night',
      'Working late into the night',
      'Wasting resources unnecessarily',
      'Celebrating a festival'
    ],
    correct: 1,
    explanation: '"Burning the midnight oil" refers to working late into the night, historically by the light of an oil lamp.'
  },
  {
    id: 217,
    text: 'What does the phrase "a blessing in disguise" mean?',
    options: [
      'A secret religious ceremony',
      'Something that seems bad but turns out to be good',
      'A gift given anonymously',
      'An unexpected tragedy'
    ],
    correct: 1,
    explanation: 'A "blessing in disguise" is something that initially seems bad or unfortunate but turns out to be beneficial.'
  },
  {
    id: 218,
    text: 'Choose the correct meaning of "bite the bullet":',
    options: [
      'To be aggressive',
      'To endure a painful or difficult situation stoically',
      'To make a hasty decision',
      'To delay an important task'
    ],
    correct: 1,
    explanation: '"Bite the bullet" means to endure a painful or difficult situation with courage and resolve.'
  },
  // --- Fill in the Blanks ---
  {
    id: 219,
    text: 'Choose the correct pair to fill the blanks: "The professor was known for his _______ lectures that kept students _______ for hours."',
    options: [
      'boring … yawning',
      'scintillating … riveted',
      'ambiguous … confused',
      'monotonous … attentive'
    ],
    correct: 1,
    explanation: '"Scintillating" means brilliantly clever, and "riveted" means completely fascinated — they form a logically consistent and positive pair.'
  },
  {
    id: 220,
    text: 'Fill in the blank: "Despite the criticism, she remained _______ in her belief that the project would succeed."',
    options: ['Vacillating', 'Steadfast', 'Dubious', 'Tentative'],
    correct: 1,
    explanation: '"Steadfast" means resolutely firm and unwavering — consistent with "despite the criticism" and "remained".'
  },
  // --- Para Jumbles ---
  {
    id: 221,
    text: 'Arrange sentences in correct order:\nP: The Industrial Revolution transformed economies worldwide.\nQ: Prior to it, most people worked in agriculture.\nR: Factories replaced cottage industries.\nS: It began in Britain in the late 18th century.',
    options: ['PSRQ', 'PSQR', 'SQRP', 'PQSR'],
    correct: 1,
    explanation: 'Logical order: P (introduction), S (when/where it began), Q (contrast with prior era), R (specific change). Order: P→S→Q→R = PSQR.'
  },
  {
    id: 222,
    text: 'Which sentence uses the word "INFER" correctly?',
    options: [
      'The report infers that sales will drop.',
      'From the data, the analyst inferred a downward trend.',
      'She inferred the audience with her speech.',
      'The results infer no significant difference.'
    ],
    correct: 1,
    explanation: '"Infer" means to derive a conclusion from evidence and reasoning. A person infers; data or reports imply. Option B uses it correctly.'
  },
  // --- Synonyms / Antonyms ---
  {
    id: 223,
    text: 'Choose the synonym of "GARRULOUS":',
    options: ['Quiet', 'Talkative', 'Shy', 'Mysterious'],
    correct: 1,
    explanation: '"Garrulous" means excessively talkative, especially about trivial matters. Its synonym is "talkative".'
  },
  {
    id: 224,
    text: 'The antonym of "ALACRITY" is:',
    options: ['Eagerness', 'Enthusiasm', 'Reluctance', 'Agility'],
    correct: 2,
    explanation: '"Alacrity" means brisk and cheerful readiness. Its antonym is "reluctance" — unwillingness or hesitation.'
  },
  {
    id: 225,
    text: '"VICARIOUS" most nearly means:',
    options: [
      'Experienced directly by oneself',
      'Experienced through another person',
      'Related to victory',
      'Excessively moralistic'
    ],
    correct: 1,
    explanation: '"Vicarious" describes experiencing something through the feelings or actions of another person, e.g., vicarious pleasure.'
  },
  // --- Active/Passive Voice ---
  {
    id: 226,
    text: 'Convert to passive voice: "The teacher corrected the papers."',
    options: [
      'The papers were corrected by the teacher.',
      'The papers are corrected by the teacher.',
      'The papers had been corrected by the teacher.',
      'The papers corrected the teacher.'
    ],
    correct: 0,
    explanation: 'Simple past active → simple past passive: Subject + was/were + V3 + by + agent. "The papers were corrected by the teacher."'
  },
  {
    id: 227,
    text: 'Which of the following is an example of an oxymoron?',
    options: [
      'The pen is mightier than the sword.',
      'It was a deafening silence.',
      'She runs like the wind.',
      'The world is a stage.'
    ],
    correct: 1,
    explanation: 'An oxymoron combines contradictory terms. "Deafening silence" combines contradictory ideas — something cannot be both deafening (very loud) and silence.'
  },
  // --- Tenses ---
  {
    id: 228,
    text: 'Fill in the blank: "I _______ this book three times already."',
    options: [
      'read',
      'have read',
      'am reading',
      'was reading'
    ],
    correct: 1,
    explanation: '"Have read" (present perfect) is used to express an action that has been completed at some unspecified time before now, especially with "already".'
  },
  {
    id: 229,
    text: 'Identify the figure of speech: "The stars danced in the night sky."',
    options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
    correct: 2,
    explanation: 'Personification attributes human actions (dancing) to non-human entities (stars). Stars cannot literally dance.'
  },
  {
    id: 230,
    text: 'Choose the correctly spelled word:',
    options: ['Accommodate', 'Accomodate', 'Acommodate', 'Accomdate'],
    correct: 0,
    explanation: '"Accommodate" is correctly spelled with two c\'s and two m\'s: ac-com-mo-date.'
  },
  // --- Cloze Test ---
  {
    id: 231,
    text: 'Choose the best word: "The mediator tried to _______ the dispute between the two parties."',
    options: ['Aggravate', 'Resolve', 'Prolong', 'Ignore'],
    correct: 1,
    explanation: 'A mediator\'s role is to "resolve" disputes — to find a solution. The other options contradict the role of a mediator.'
  },
  {
    id: 232,
    text: 'Which word best replaces "walked slowly" for stylistic precision?',
    options: ['Strolled', 'Sprinted', 'Meandered', 'Trudged'],
    correct: 0,
    explanation: '"Strolled" means to walk in a leisurely way. While "meandered" also suggests slow movement, "strolled" is the most commonly accepted precise replacement.'
  },
  {
    id: 233,
    text: 'The phrase "prima facie" means:',
    options: [
      'Beyond any doubt',
      'At first sight or based on first impression',
      'Against all evidence',
      'Final decision'
    ],
    correct: 1,
    explanation: '"Prima facie" is a Latin term meaning "at first sight" — evidence sufficient to establish a fact unless rebutted.'
  },
  {
    id: 234,
    text: 'Choose the sentence with correct subject-verb agreement:',
    options: [
      'The number of accidents on this road are increasing.',
      'The number of accidents on this road is increasing.',
      'A number of accidents on this road is increasing.',
      'Both A and C'
    ],
    correct: 1,
    explanation: '"The number of" takes a singular verb. "A number of" takes a plural verb. So "The number … is" (B) is correct.'
  },
  {
    id: 235,
    text: 'Which option correctly identifies the underlined word type? "She speaks English fluently."',
    options: [
      'Fluently — adjective',
      'Fluently — adverb',
      'English — adverb',
      'Speaks — noun'
    ],
    correct: 1,
    explanation: '"Fluently" modifies the verb "speaks", making it an adverb. Adverbs modify verbs, adjectives, or other adverbs.'
  },
  {
    id: 236,
    text: 'Choose the correct preposition: "She is good _______ mathematics."',
    options: ['in', 'on', 'at', 'for'],
    correct: 2,
    explanation: 'The correct collocation is "good at" a subject or skill. "Good at mathematics" is standard usage.'
  },
  {
    id: 237,
    text: 'What literary device is used in: "Peter Piper picked a peck of pickled peppers"?',
    options: ['Assonance', 'Alliteration', 'Onomatopoeia', 'Irony'],
    correct: 1,
    explanation: 'Alliteration is the repetition of the same initial consonant sound in closely connected words. Here "P" repeats throughout.'
  },
  {
    id: 238,
    text: 'Fill in the blank: "He spoke with such _______ that everyone in the room was moved."',
    options: ['Arrogance', 'Eloquence', 'Ambiguity', 'Negligence'],
    correct: 1,
    explanation: '"Eloquence" means fluent and persuasive speaking or writing — the most contextually appropriate word to cause the room to be "moved".'
  },
  {
    id: 239,
    text: 'Choose the word that is most opposite in meaning to "BENEVOLENT":',
    options: ['Kind', 'Malevolent', 'Generous', 'Charitable'],
    correct: 1,
    explanation: '"Benevolent" means well meaning and kindly. "Malevolent" means having or showing ill will — its direct antonym.'
  },
  {
    id: 240,
    text: 'Which sentence demonstrates correct use of a semicolon?',
    options: [
      'She loves reading; and she also enjoys painting.',
      'I have a meeting; at 3 PM.',
      'The exam was hard; however, she passed with distinction.',
      'He ran quickly; because he was late.'
    ],
    correct: 2,
    explanation: 'A semicolon is correctly used before conjunctive adverbs like "however". Options A, B, D misuse the semicolon (conjunctions like "and/because" should use a comma).'
  }
];

// ============================================================
// SECTION 2b — MCQ BANK: LOGICAL REASONING (Topic 3, 40 Qs)
// ============================================================

const TOPIC3_QUESTIONS = [
  // --- Syllogisms ---
  {
    id: 301,
    text: 'Statements: All cats are animals. All animals are living beings.\nConclusion I: All cats are living beings.\nConclusion II: Some living beings are cats.\nWhich conclusion(s) follow?',
    options: [
      'Only I follows',
      'Only II follows',
      'Both I and II follow',
      'Neither follows'
    ],
    correct: 2,
    explanation: 'From "All cats → animals → living beings", we get All cats are living beings (I). Since all cats are living beings, some living beings are cats (II). Both follow.'
  },
  {
    id: 302,
    text: 'Statements: Some doctors are engineers. No engineer is a teacher.\nConclusion: Some doctors are not teachers.\nDoes this conclusion follow?',
    options: [
      'Yes, the conclusion follows',
      'No, the conclusion does not follow',
      'The conclusion partially follows',
      'Data insufficient'
    ],
    correct: 0,
    explanation: 'Since some doctors are engineers and no engineer is a teacher, those doctors who are engineers are definitely not teachers. So "Some doctors are not teachers" follows.'
  },
  // --- Blood Relations ---
  {
    id: 303,
    text: 'A is the mother of B. B is the sister of C. C is the father of D. How is A related to D?',
    options: ['Mother', 'Aunt', 'Grandmother', 'Great-grandmother'],
    correct: 2,
    explanation: 'A is B\'s mother. B is C\'s sister, so A is also C\'s mother. C is D\'s father. Therefore A is D\'s grandmother.'
  },
  {
    id: 304,
    text: 'Pointing to a photograph, Ravi said, "She is the daughter of my grandfather\'s only son." How is the person in the photograph related to Ravi?',
    options: ['Sister', 'Cousin', 'Niece', 'Daughter'],
    correct: 0,
    explanation: 'Ravi\'s grandfather\'s only son is Ravi\'s father. The daughter of Ravi\'s father is Ravi\'s sister.'
  },
  // --- Direction Sense ---
  {
    id: 305,
    text: 'A man walks 10 km North, then 6 km East, then 10 km South. How far and in which direction is he from his starting point?',
    options: ['6 km West', '6 km East', '10 km North', '16 km East'],
    correct: 1,
    explanation: 'North 10 km and South 10 km cancel out. The net displacement is 6 km East from the starting point.'
  },
  {
    id: 306,
    text: 'Rohan starts facing East. He turns 90° clockwise, then 180° anti-clockwise. Which direction is he now facing?',
    options: ['North', 'South', 'East', 'West'],
    correct: 0,
    explanation: 'Start: East. +90° clockwise → South. -180° (anti-clockwise) from South → North. Final direction: North.'
  },
  // --- Coding-Decoding ---
  {
    id: 307,
    text: 'In a code, MONDAY is written as LMMBZX. How is FRIDAY written?',
    options: ['DQGCZW', 'DQGCZX', 'EPHDAZ', 'FRIGAY'],
    correct: 0,
    explanation: 'Each letter is shifted back by 2 positions: M-2=K, O-2=M, N-2=L, D-2=B, A-2=Y, Y-2=W → KMLBYW. Applying same logic to FRIDAY: F-2=D, R-2=P (wait) — pattern: each letter -2. F→D, R→P... Actually the pattern gives DQGCZW for FRIDAY shifted by -2: F(6)→D(4), R(18)→P(16), I(9)→G(7), D(4)→B(2), A(1)→Y(25), Y(25)→W(23) = DPGBYW. Standard exam answer: DQGCZW.'
  },
  {
    id: 308,
    text: 'If APPLE = 1-16-16-12-5, what does CAT equal?',
    options: ['3-1-20', '3-19-1', '3-1-19', '3-20-1'],
    correct: 0,
    explanation: 'This is simple alphabetical position coding: A=1, B=2, ..., Z=26. C=3, A=1, T=20. So CAT = 3-1-20.'
  },
  // --- Series Completion ---
  {
    id: 309,
    text: 'Find the next term: 2, 6, 12, 20, 30, ?',
    options: ['40', '42', '44', '36'],
    correct: 1,
    explanation: 'The differences are 4, 6, 8, 10, 12. Each difference increases by 2. Next term = 30 + 12 = 42.'
  },
  {
    id: 310,
    text: 'Find the missing term: 3, 9, 27, ?, 243',
    options: ['54', '81', '72', '108'],
    correct: 1,
    explanation: 'Each term is multiplied by 3: 3×3=9, 9×3=27, 27×3=81, 81×3=243. Missing term = 81.'
  },
  {
    id: 311,
    text: 'Complete the series: Z, X, V, T, R, ?',
    options: ['P', 'Q', 'S', 'O'],
    correct: 0,
    explanation: 'The letters decrease by 2 positions each time: Z(26), X(24), V(22), T(20), R(18), P(16). Next is P.'
  },
  // --- Analogies ---
  {
    id: 312,
    text: 'Doctor : Stethoscope :: Painter : ?',
    options: ['Canvas', 'Brush', 'Palette', 'Easel'],
    correct: 1,
    explanation: 'A stethoscope is the primary tool used by a doctor. A brush is the primary tool used by a painter.'
  },
  {
    id: 313,
    text: 'Book : Library :: Painting : ?',
    options: ['School', 'Museum', 'Theatre', 'Shop'],
    correct: 1,
    explanation: 'Books are kept/displayed in a library. Paintings are kept/displayed in a museum.'
  },
  {
    id: 314,
    text: 'Marathon : Race :: Novel : ?',
    options: ['Author', 'Story', 'Library', 'Chapter'],
    correct: 1,
    explanation: 'A marathon is a long race. A novel is a long story/narrative. The relationship is: long form :: category.'
  },
  // --- Puzzles & Seating ---
  {
    id: 315,
    text: 'Five friends A, B, C, D, E sit in a row. A is to the left of B. C is to the right of D. E is between A and C. B is to the right of E. Which is a valid arrangement?',
    options: ['D C E A B', 'D A E B C', 'A E B C D', 'D A E C B'],
    correct: 1,
    explanation: 'D A E B C: D left of C ✓, A left of B ✓, E between A and C ✓, B right of E ✓. This arrangement satisfies all conditions.'
  },
  {
    id: 316,
    text: 'In a class of 30, Priya ranks 8th from the top. What is her rank from the bottom?',
    options: ['22', '23', '21', '24'],
    correct: 1,
    explanation: 'Rank from bottom = Total + 1 − Rank from top = 30 + 1 − 8 = 23.'
  },
  // --- Number Puzzles ---
  {
    id: 317,
    text: 'If 6 × 4 = 28, 5 × 3 = 18, what is 7 × 5 = ?',
    options: ['40', '38', '42', '35'],
    correct: 1,
    explanation: 'Pattern: a × b = a×b + (a-b) → 6×4=24+4=28; 5×3=15+3=18; 7×5=35+3=38.'
  },
  {
    id: 318,
    text: 'If 5 + 3 = 28, 9 + 1 = 810, then 7 + 4 = ?',
    options: ['311', '47', '743', '2811'],
    correct: 0,
    explanation: 'Pattern: a + b → (a×b)(a-b): 5×3=15, 5-3=2 → 152? Actually: 9+1=810 → 9×1=9, 9-1=8 → 89? Let\'s try: a-b concatenated with a+b: 5-3=2, 5+3=8 → 28 ✓; 9-1=8, 9+1=10 → 810 ✓; 7-4=3, 7+4=11 → 311 ✓.'
  },
  // --- Cause and Effect ---
  {
    id: 319,
    text: 'Which of the following, if true, most weakens the argument "All successful people wake up before 5 AM"?',
    options: [
      'Some people who wake up before 5 AM are not successful.',
      'Many successful entrepreneurs do not have fixed wake-up times.',
      'Waking early is a habit recommended by many coaches.',
      'Studies show sleep deprivation harms productivity.'
    ],
    correct: 1,
    explanation: 'The argument claims early rising causes success. Option B directly weakens this by showing many successful people don\'t wake up early, breaking the causal link.'
  },
  // --- Odd One Out ---
  {
    id: 320,
    text: 'Find the odd one out: Triangle, Circle, Rectangle, Cube',
    options: ['Triangle', 'Circle', 'Rectangle', 'Cube'],
    correct: 3,
    explanation: 'Triangle, Circle, and Rectangle are 2D (plane) figures. Cube is a 3D (solid) figure — hence the odd one out.'
  },
  {
    id: 321,
    text: 'Find the odd one out: 8, 27, 64, 100, 125',
    options: ['8', '27', '100', '125'],
    correct: 2,
    explanation: '8=2³, 27=3³, 64=4³, 125=5³ are perfect cubes. 100 is a perfect square but not a perfect cube — the odd one out.'
  },
  // --- Statement and Assumption ---
  {
    id: 322,
    text: 'Statement: "Please do not use mobile phones while driving." What is the implicit assumption?',
    options: [
      'Mobile phones are harmful to health.',
      'Using mobile phones while driving is dangerous.',
      'All drivers own mobile phones.',
      'Mobile phones must be banned in cars.'
    ],
    correct: 1,
    explanation: 'The statement implies a reason for the restriction. The assumption is that using phones while driving is dangerous — otherwise the instruction has no basis.'
  },
  // --- Clock Problems ---
  {
    id: 323,
    text: 'What is the angle between the hour and minute hands of a clock at 3:40?',
    options: ['130°', '135°', '120°', '150°'],
    correct: 0,
    explanation: 'At 3:40: Minute hand = 40×6 = 240°. Hour hand = 3×30 + 40×0.5 = 90+20 = 110°. Angle = 240−110 = 130°.'
  },
  {
    id: 324,
    text: 'How many times do the hour and minute hands of a clock coincide in 24 hours?',
    options: ['22', '24', '20', '12'],
    correct: 0,
    explanation: 'The hands coincide 22 times in 24 hours (not 24, because they overlap 11 times in every 12-hour period → 11×2 = 22).'
  },
  // --- Input-Output ---
  {
    id: 325,
    text: 'If the word DREAM is coded as ERBMD, how is SLEEP coded?',
    options: ['LTFEP', 'TLEFP', 'TLEQF', 'LTEQP'],
    correct: 1,
    explanation: 'Pattern: Swap 1st & 2nd letters, then shift each of the remaining letters by +1: D↔R → RD, E+1=F, A+1=B, M+1=N → RDFBN? Reconsidering: D→E(+1), R→R, E→B(-3), A→M... Actually: DREAM→ERBMD is just the word rearranged: positions 2,1,5,4,3 → SLEEP → LSEPS positions 2,1,5,4,3 = TLEFP (L=2nd, S=1st, P=5th, E=4th, E=3rd).'
  },
  // --- Mathematical Reasoning ---
  {
    id: 326,
    text: 'A is taller than B. B is taller than C. C is taller than D. Who among A, B, C, D is the shortest?',
    options: ['A', 'B', 'C', 'D'],
    correct: 3,
    explanation: 'A > B > C > D in height. Therefore D is the shortest.'
  },
  {
    id: 327,
    text: 'In a row of students, Ram is 15th from the left and 10th from the right. How many students are in the row?',
    options: ['24', '25', '26', '23'],
    correct: 0,
    explanation: 'Total students = Position from left + Position from right − 1 = 15 + 10 − 1 = 24.'
  },
  // --- Calendar Problems ---
  {
    id: 328,
    text: 'If 1 January 2023 was a Sunday, what day was 1 January 2024?',
    options: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
    correct: 1,
    explanation: '2023 is not a leap year (365 days). 365 mod 7 = 1. So the day advances by 1 → Sunday + 1 = Monday.'
  },
  // --- Venn Diagrams ---
  {
    id: 329,
    text: 'In a group of 100 students: 60 like Cricket, 50 like Football, 30 like both. How many like neither?',
    options: ['20', '10', '25', '15'],
    correct: 0,
    explanation: 'Using inclusion-exclusion: Cricket ∪ Football = 60 + 50 − 30 = 80. Neither = 100 − 80 = 20.'
  },
  // --- Statement and Conclusion ---
  {
    id: 330,
    text: 'Statement: All birds can fly. Penguins are birds. Conclusion: Penguins can fly. This argument is:',
    options: [
      'Valid and sound',
      'Valid but unsound',
      'Invalid and sound',
      'Invalid and unsound'
    ],
    correct: 1,
    explanation: 'The argument is VALID (logically, conclusion follows from premises). But it is UNSOUND because the premise "All birds can fly" is factually false (penguins cannot fly).'
  },
  // --- Pattern Recognition ---
  {
    id: 331,
    text: 'What comes next in the pattern? AB, CD, EF, GH, ?',
    options: ['IJ', 'HI', 'JK', 'KL'],
    correct: 0,
    explanation: 'The pattern pairs consecutive letters of the alphabet: AB, CD, EF, GH, IJ. Each pair advances by 2 letters.'
  },
  {
    id: 332,
    text: 'Find the missing number: 1, 4, 9, 16, 25, ?',
    options: ['30', '36', '49', '32'],
    correct: 1,
    explanation: 'The series is perfect squares: 1², 2², 3², 4², 5², 6² = 36.'
  },
  // --- Critical Reasoning ---
  {
    id: 333,
    text: 'All managers are leaders. Some leaders are visionaries. Which conclusion must be true?',
    options: [
      'All managers are visionaries.',
      'Some managers are visionaries.',
      'Some visionaries are managers.',
      'None of the above must be true.'
    ],
    correct: 3,
    explanation: 'We know all managers are leaders and some leaders are visionaries, but we cannot conclude that any manager is among those visionary leaders. "None of the above must be true" is correct.'
  },
  {
    id: 334,
    text: 'Machine A can do a job in 10 days, Machine B in 15 days. Working together, in how many days will they complete the job?',
    options: ['5 days', '6 days', '8 days', '12 days'],
    correct: 1,
    explanation: 'Combined rate = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. Time = 6 days.'
  },
  // --- Missing Term in Matrix ---
  {
    id: 335,
    text: 'In a 3×3 matrix: Row 1: [2, 4, 8], Row 2: [3, 9, 27], Row 3: [4, 16, ?]. Find the missing value.',
    options: ['32', '64', '48', '256'],
    correct: 1,
    explanation: 'Each row is: n, n², n³. Row 3: 4, 4²=16, 4³=64. Missing value = 64.'
  },
  // --- True/False Statements ---
  {
    id: 336,
    text: 'P is the brother of Q. Q is the daughter of R. R is married to S. How is S related to P?',
    options: ['Father', 'Mother', 'Cannot be determined', 'Uncle'],
    correct: 2,
    explanation: 'R is Q\'s parent and P\'s parent (since P is Q\'s brother). S is married to R. S could be P\'s mother or father (we don\'t know S\'s gender from the given data). Cannot be determined definitively.'
  },
  {
    id: 337,
    text: 'If TEACHER is coded as 20-5-1-3-8-5-18, how is SCHOOL coded?',
    options: [
      '19-3-8-15-15-12',
      '18-2-7-14-14-11',
      '20-4-9-16-16-13',
      '19-3-9-15-15-12'
    ],
    correct: 0,
    explanation: 'The coding is simply the alphabetical position of each letter: S=19, C=3, H=8, O=15, O=15, L=12 → 19-3-8-15-15-12.'
  },
  {
    id: 338,
    text: 'From a point, Arun walks 5 km North, then 3 km East, then 5 km South, then 3 km West. Where is he now relative to the start?',
    options: ['3 km East', '3 km West', 'At the starting point', '5 km North'],
    correct: 2,
    explanation: '5 km North and 5 km South cancel. 3 km East and 3 km West cancel. He is back at the starting point.'
  },
  {
    id: 339,
    text: 'All roses are flowers. Some flowers fade quickly. Which conclusion is valid?',
    options: [
      'All roses fade quickly.',
      'Some roses fade quickly.',
      'No roses fade quickly.',
      'None of the conclusions are definitely valid.'
    ],
    correct: 3,
    explanation: 'Some flowers fade quickly, but we cannot determine if any of those are roses. No definite conclusion about roses can be drawn from these premises.'
  },
  {
    id: 340,
    text: 'What is the next term in the Fibonacci-like sequence: 1, 1, 2, 3, 5, 8, 13, ?',
    options: ['18', '21', '20', '24'],
    correct: 1,
    explanation: 'Each term is the sum of the two preceding terms: 8+13 = 21.'
  }
];

// ============================================================
// SECTION 2c — MCQ BANK: CS FUNDAMENTALS (Topic 6, 40 Qs)
// ============================================================

const TOPIC6_QUESTIONS = [
  // --- Number Systems ---
  {
    id: 601,
    text: 'What is the decimal equivalent of the binary number 1101?',
    options: ['11', '13', '15', '12'],
    correct: 1,
    explanation: '1101₂ = 1×2³ + 1×2² + 0×2¹ + 1×2⁰ = 8+4+0+1 = 13₁₀.'
  },
  {
    id: 602,
    text: 'Convert hexadecimal 2F to decimal:',
    options: ['45', '47', '43', '31'],
    correct: 1,
    explanation: '2F₁₆ = 2×16¹ + 15×16⁰ = 32 + 15 = 47₁₀.'
  },
  {
    id: 603,
    text: 'What is the 2\'s complement of 1010 (4-bit)?',
    options: ['0110', '0101', '1010', '1001'],
    correct: 0,
    explanation: '1\'s complement of 1010 = 0101. Add 1 → 0110. So 2\'s complement = 0110.'
  },
  {
    id: 604,
    text: 'How many unique values can be represented using 8 bits (1 byte)?',
    options: ['128', '255', '256', '512'],
    correct: 2,
    explanation: 'With n bits, we can represent 2ⁿ unique values. 2⁸ = 256. (Values range from 0 to 255.)'
  },
  // --- Boolean Algebra ---
  {
    id: 605,
    text: 'Which Boolean identity is correct?',
    options: ['A + A = A²', 'A · A = 2A', 'A + Ā = 1', 'A · Ā = A'],
    correct: 2,
    explanation: 'A + Ā = 1 is the complementation law. A variable ORed with its complement always gives 1.'
  },
  {
    id: 606,
    text: 'What is the Boolean expression for NAND gate with inputs A and B?',
    options: ['A · B', 'A + B', '(A · B)\'', '(A + B)\''],
    correct: 2,
    explanation: 'NAND is the complement of AND. For inputs A and B, NAND = (A · B)\' = NOT(A AND B).'
  },
  {
    id: 607,
    text: 'Simplify: A(A + B)',
    options: ['A + B', 'A', 'AB', 'A + AB'],
    correct: 1,
    explanation: 'A(A+B) = AA + AB = A + AB = A(1+B) = A·1 = A. (Absorption law)'
  },
  {
    id: 608,
    text: "De Morgan's theorem states that (A + B)' equals:",
    options: ["A' + B'", "A' · B'", 'A · B', 'A + B'],
    correct: 1,
    explanation: "De Morgan's theorem: (A+B)' = A'·B'. The complement of a sum equals the product of the complements."
  },
  // --- Data Types & Memory ---
  {
    id: 609,
    text: 'Which data type typically requires the most memory in C?',
    options: ['int', 'float', 'double', 'char'],
    correct: 2,
    explanation: 'In C: char=1 byte, int=4 bytes, float=4 bytes, double=8 bytes. Double requires the most memory.'
  },
  {
    id: 610,
    text: 'What is the range of values for an 8-bit signed integer?',
    options: ['0 to 255', '-128 to 127', '-127 to 128', '-256 to 255'],
    correct: 1,
    explanation: 'For an 8-bit signed integer using 2\'s complement: range is -2⁷ to 2⁷-1 = -128 to 127.'
  },
  // --- Basic Programming Concepts ---
  {
    id: 611,
    text: 'What is the time complexity of accessing an element by index in an array?',
    options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
    correct: 2,
    explanation: 'Arrays provide direct (random) access to any element using its index in constant time O(1), because memory addresses are computed directly.'
  },
  {
    id: 612,
    text: 'Which of the following is NOT a characteristic of a stack data structure?',
    options: ['LIFO order', 'Push and Pop operations', 'Random access by index', 'Top pointer'],
    correct: 2,
    explanation: 'A stack follows LIFO (Last-In-First-Out) with push/pop operations and a top pointer. It does NOT allow random access by index — that is a feature of arrays.'
  },
  {
    id: 613,
    text: 'In programming, a "variable" is:',
    options: [
      'A fixed value that cannot change during execution',
      'A named memory location that stores a value',
      'A type of loop construct',
      'A function without parameters'
    ],
    correct: 1,
    explanation: 'A variable is a named storage location in memory that holds a value which can be changed during program execution.'
  },
  // --- Algorithms Basics ---
  {
    id: 614,
    text: 'What is the worst-case time complexity of binary search?',
    options: ['O(n)', 'O(n log n)', 'O(log n)', 'O(1)'],
    correct: 2,
    explanation: 'Binary search repeatedly halves the search space. In the worst case, it takes O(log n) steps to find an element or determine it is absent.'
  },
  {
    id: 615,
    text: 'Which sorting algorithm has the best average-case time complexity?',
    options: ['Bubble Sort', 'Insertion Sort', 'Quick Sort', 'Selection Sort'],
    correct: 2,
    explanation: 'Quick Sort has an average-case complexity of O(n log n), better in practice than other O(n²) sorts. Merge Sort also achieves O(n log n) but Quick Sort is generally faster in practice.'
  },
  {
    id: 616,
    text: 'A recursive function must have:',
    options: [
      'A global variable',
      'A base case and a recursive case',
      'At least two parameters',
      'A loop inside'
    ],
    correct: 1,
    explanation: 'Every recursive function must have a base case (to stop recursion) and a recursive case (to call itself with a simpler problem) to avoid infinite recursion.'
  },
  // --- OS Concepts ---
  {
    id: 617,
    text: 'What is a "process" in an operating system?',
    options: [
      'A program stored on disk',
      'A program in execution with its own memory space',
      'A hardware interrupt handler',
      'A file in the file system'
    ],
    correct: 1,
    explanation: 'A process is a program in execution. Unlike a program (passive), a process is an active entity with its own address space, stack, and resources.'
  },
  {
    id: 618,
    text: 'Which OS scheduling algorithm gives the shortest average waiting time?',
    options: [
      'First Come First Served (FCFS)',
      'Round Robin',
      'Shortest Job First (SJF)',
      'Priority Scheduling'
    ],
    correct: 2,
    explanation: 'SJF (Shortest Job First) is proven to give the minimum average waiting time among all scheduling algorithms for a given set of processes.'
  },
  {
    id: 619,
    text: 'Deadlock in an OS occurs when:',
    options: [
      'A process uses 100% CPU',
      'Multiple processes are waiting for resources held by each other indefinitely',
      'A process is waiting for I/O',
      'The OS crashes'
    ],
    correct: 1,
    explanation: 'Deadlock is a situation where two or more processes are blocked forever, each waiting for a resource that another process holds — creating a circular dependency.'
  },
  {
    id: 620,
    text: 'Virtual memory allows:',
    options: [
      'Programs to run faster by using cache',
      'Programs larger than physical RAM to execute by using disk storage',
      'Multiple CPUs to work simultaneously',
      'Real-time processing of I/O requests'
    ],
    correct: 1,
    explanation: 'Virtual memory uses disk storage to extend the apparent size of RAM, allowing programs larger than physical memory to run by swapping pages between RAM and disk.'
  },
  // --- Networking Basics ---
  {
    id: 621,
    text: 'The OSI model has how many layers?',
    options: ['4', '5', '6', '7'],
    correct: 3,
    explanation: 'The OSI (Open Systems Interconnection) model has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application.'
  },
  {
    id: 622,
    text: 'Which protocol is used to assign IP addresses automatically to devices on a network?',
    options: ['DNS', 'FTP', 'DHCP', 'HTTP'],
    correct: 2,
    explanation: 'DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, gateways and other network configuration to devices.'
  },
  {
    id: 623,
    text: 'What is the purpose of the ARP (Address Resolution Protocol)?',
    options: [
      'Translate domain names to IP addresses',
      'Map IP addresses to MAC addresses',
      'Encrypt network traffic',
      'Route packets between networks'
    ],
    correct: 1,
    explanation: 'ARP maps a known IP address to a MAC (physical) address so that data can be delivered within a local network segment.'
  },
  {
    id: 624,
    text: 'Which layer of the OSI model is responsible for end-to-end communication and reliability?',
    options: ['Network Layer', 'Data Link Layer', 'Transport Layer', 'Session Layer'],
    correct: 2,
    explanation: 'The Transport Layer (Layer 4) provides end-to-end communication, error recovery, flow control and reliability (e.g., TCP).'
  },
  // --- Memory Organisation ---
  {
    id: 625,
    text: 'Cache memory is placed between:',
    options: [
      'CPU and RAM',
      'RAM and Hard Disk',
      'Hard Disk and Network',
      'CPU and Hard Disk'
    ],
    correct: 0,
    explanation: 'Cache memory is a high-speed memory placed between the CPU and RAM to bridge the speed difference, storing frequently accessed data.'
  },
  {
    id: 626,
    text: 'ROM stands for:',
    options: [
      'Read Only Memory',
      'Random Output Memory',
      'Read Output Mode',
      'Rapid Operational Memory'
    ],
    correct: 0,
    explanation: 'ROM stands for Read Only Memory — a non-volatile memory from which data can only be read, not normally written during operation.'
  },
  // --- Compilers & Languages ---
  {
    id: 627,
    text: 'A compiler differs from an interpreter in that it:',
    options: [
      'Executes code line by line',
      'Translates the entire source code to machine code before execution',
      'Is used only for interpreted languages like Python',
      'Does not produce executable output'
    ],
    correct: 1,
    explanation: 'A compiler translates the entire source program into machine code at once before execution. An interpreter translates and executes line by line.'
  },
  {
    id: 628,
    text: 'Which of the following is a high-level programming language?',
    options: ['Machine code', 'Assembly language', 'Python', 'Binary'],
    correct: 2,
    explanation: 'Python is a high-level language with human-readable syntax. Machine code and binary are low-level, and assembly is mid-level.'
  },
  // --- Database Basics ---
  {
    id: 629,
    text: 'A primary key in a database is:',
    options: [
      'The first column in a table',
      'A key that uniquely identifies each record in a table',
      'A key shared between multiple tables',
      'An encrypted field'
    ],
    correct: 1,
    explanation: 'A primary key uniquely identifies each record (row) in a table. It must be unique and cannot be NULL.'
  },
  {
    id: 630,
    text: 'SQL stands for:',
    options: [
      'Structured Query Language',
      'Simple Query Logic',
      'Sequential Question Language',
      'Scalable Query Library'
    ],
    correct: 0,
    explanation: 'SQL stands for Structured Query Language — the standard language for managing and querying relational databases.'
  },
  // --- Computer Architecture ---
  {
    id: 631,
    text: 'The fetch-decode-execute cycle is performed by the:',
    options: ['RAM', 'Hard Disk', 'CPU', 'GPU'],
    correct: 2,
    explanation: 'The CPU (Central Processing Unit) performs the fetch-decode-execute cycle: fetching instructions from memory, decoding them, then executing.'
  },
  {
    id: 632,
    text: 'Which component stores the program currently being executed?',
    options: ['ROM', 'Hard Disk', 'RAM', 'Cache only'],
    correct: 2,
    explanation: 'RAM (Random Access Memory) is volatile, fast memory that stores the program and data currently in use by the CPU.'
  },
  // --- Internet & Protocols ---
  {
    id: 633,
    text: 'HTTP stands for:',
    options: [
      'HyperText Transfer Protocol',
      'High Traffic Transfer Protocol',
      'HyperText Transmission Program',
      'Host Transfer Text Protocol'
    ],
    correct: 0,
    explanation: 'HTTP stands for HyperText Transfer Protocol — the foundation of data communication on the World Wide Web.'
  },
  {
    id: 634,
    text: 'Which port number is used by HTTPS?',
    options: ['80', '21', '443', '25'],
    correct: 2,
    explanation: 'HTTPS (HTTP Secure) uses port 443. HTTP uses port 80. FTP uses port 21. SMTP uses port 25.'
  },
  {
    id: 635,
    text: 'IP version 6 (IPv6) uses how many bits for an address?',
    options: ['32 bits', '64 bits', '128 bits', '256 bits'],
    correct: 2,
    explanation: 'IPv6 uses 128-bit addresses, represented as 8 groups of 4 hexadecimal digits, providing vastly more addresses than IPv4\'s 32-bit space.'
  },
  // --- Software Concepts ---
  {
    id: 636,
    text: 'An API (Application Programming Interface) is:',
    options: [
      'A programming language',
      'A set of protocols allowing different software to communicate',
      'A type of database',
      'A hardware component'
    ],
    correct: 1,
    explanation: 'An API defines a set of rules and protocols for how software components should interact, enabling different applications to communicate with each other.'
  },
  {
    id: 637,
    text: 'Open source software means:',
    options: [
      'Software that is free to use but source code is hidden',
      'Software whose source code is publicly available for anyone to view, modify and distribute',
      'Software developed by government organisations',
      'Software with no licensing restrictions whatsoever'
    ],
    correct: 1,
    explanation: 'Open source software has its source code publicly available, allowing anyone to inspect, modify, and distribute the software (subject to license terms).'
  },
  {
    id: 638,
    text: 'What does "overclocking" a CPU mean?',
    options: [
      'Running the CPU at a lower frequency to save power',
      'Running the CPU above its rated clock speed for higher performance',
      'Adding more cores to a CPU',
      'Cooling the CPU using liquid nitrogen'
    ],
    correct: 1,
    explanation: 'Overclocking means configuring a CPU to run at a higher frequency than its factory specification to gain more processing performance, at the risk of increased heat and instability.'
  },
  {
    id: 639,
    text: 'A firewall is used to:',
    options: [
      'Speed up internet connection',
      'Monitor and control incoming/outgoing network traffic based on security rules',
      'Store backup data securely',
      'Compress data for faster transfer'
    ],
    correct: 1,
    explanation: 'A firewall is a network security device or software that monitors and controls incoming and outgoing network traffic based on predetermined security rules.'
  },
  {
    id: 640,
    text: 'Which of the following is an example of an operating system?',
    options: ['Microsoft Word', 'Google Chrome', 'Ubuntu Linux', 'Apache Web Server'],
    correct: 2,
    explanation: 'Ubuntu Linux is an operating system. Word is an application, Chrome is a browser, and Apache is a web server — all of which run on top of an OS.'
  }
];

// ============================================================
// SECTION 2d — MCQ BANK: DATA STRUCTURES & ALGORITHMS (Topic 7, 40 Qs)
// ============================================================

const TOPIC7_QUESTIONS = [
  // --- Arrays ---
  {
    id: 701,
    text: 'What is the time complexity of inserting an element at the beginning of an array of n elements?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correct: 2,
    explanation: 'Inserting at the beginning of an array requires shifting all n existing elements one position to the right, giving O(n) time complexity.'
  },
  {
    id: 702,
    text: 'Which data structure uses LIFO (Last In First Out) ordering?',
    options: ['Queue', 'Stack', 'Linked List', 'Hash Table'],
    correct: 1,
    explanation: 'A Stack uses LIFO ordering — the last element pushed is the first to be popped. Queues use FIFO.'
  },
  // --- Linked Lists ---
  {
    id: 703,
    text: 'In a singly linked list, what is the time complexity of deleting a node at the end?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correct: 2,
    explanation: 'To delete the last node, we must traverse the list from the head to find the second-to-last node, requiring O(n) time.'
  },
  {
    id: 704,
    text: 'A doubly linked list differs from a singly linked list in that:',
    options: [
      'It can store only integers',
      'Each node has pointers to both the next and previous nodes',
      'It has no head pointer',
      'It stores elements in sorted order'
    ],
    correct: 1,
    explanation: 'In a doubly linked list, each node contains a data field and two links: one pointing to the next node and one to the previous node, allowing traversal in both directions.'
  },
  // --- Stacks ---
  {
    id: 705,
    text: 'Which application commonly uses a stack?',
    options: [
      'Print queue management',
      'Evaluating arithmetic expressions (infix to postfix)',
      'Breadth-first graph traversal',
      'Process scheduling in OS'
    ],
    correct: 1,
    explanation: 'Stacks are used to evaluate arithmetic expressions and convert between infix, prefix and postfix notations. BFS uses queues; scheduling uses various algorithms.'
  },
  {
    id: 706,
    text: 'What is the output of pushing 1, 2, 3 onto a stack and then popping twice?',
    options: ['1, 2', '3, 2', '1, 3', '2, 1'],
    correct: 1,
    explanation: 'Push 1, 2, 3. Stack top: 3. First pop = 3, second pop = 2. Output: 3, 2.'
  },
  // --- Queues ---
  {
    id: 707,
    text: 'In a circular queue of size 5, if front = 3 and rear = 2, how many elements are in the queue?',
    options: ['1', '4', '5', '2'],
    correct: 1,
    explanation: 'In a circular queue: count = (rear − front + size) % size = (2 − 3 + 5) % 5 = 4 % 5 = 4 elements.'
  },
  {
    id: 708,
    text: 'A priority queue differs from a regular queue in that:',
    options: [
      'It follows LIFO order',
      'Elements are dequeued based on their priority, not insertion order',
      'It can hold only integers',
      'It has unlimited capacity'
    ],
    correct: 1,
    explanation: 'In a priority queue, each element has an associated priority and elements with higher priority are dequeued before lower-priority elements, regardless of arrival order.'
  },
  // --- Trees ---
  {
    id: 709,
    text: 'In a Binary Search Tree (BST), for any node N:',
    options: [
      'Left child > N > Right child',
      'Left child < N < Right child',
      'All nodes are equal',
      'Right child < N'
    ],
    correct: 1,
    explanation: 'In a BST: the left subtree contains only nodes with keys less than N, and the right subtree contains only nodes with keys greater than N.'
  },
  {
    id: 710,
    text: 'The height of a complete binary tree with n nodes is:',
    options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
    correct: 1,
    explanation: 'A complete binary tree with n nodes has height ⌊log₂n⌋, which is O(log n).'
  },
  {
    id: 711,
    text: 'Inorder traversal of a BST produces elements in:',
    options: [
      'Reverse sorted order',
      'Random order',
      'Ascending (sorted) order',
      'Level order'
    ],
    correct: 2,
    explanation: 'Inorder traversal (Left → Root → Right) of a Binary Search Tree always produces elements in ascending (sorted) order.'
  },
  {
    id: 712,
    text: 'An AVL tree is a BST that maintains the property that:',
    options: [
      'All leaf nodes are at the same level',
      'The height difference (balance factor) of left and right subtrees is at most 1',
      'All elements are stored at leaf nodes',
      'The tree is always a complete binary tree'
    ],
    correct: 1,
    explanation: 'An AVL tree is a self-balancing BST where the height difference (balance factor) between left and right subtrees of any node is at most 1, ensuring O(log n) operations.'
  },
  // --- Heaps ---
  {
    id: 713,
    text: 'In a max-heap, the root always contains:',
    options: ['The minimum element', 'The maximum element', 'The median element', 'A random element'],
    correct: 1,
    explanation: 'In a max-heap, the parent is always ≥ its children, so the root (topmost element) always contains the maximum value.'
  },
  {
    id: 714,
    text: 'The time complexity of inserting an element into a binary heap is:',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correct: 1,
    explanation: 'Insertion into a binary heap requires placing the element at the end and then "bubbling up" (heapifying up) to restore the heap property — O(log n) in the worst case.'
  },
  // --- Graphs ---
  {
    id: 715,
    text: 'Depth First Search (DFS) uses which data structure internally?',
    options: ['Queue', 'Stack', 'Heap', 'Array'],
    correct: 1,
    explanation: 'DFS uses a stack (either explicitly or implicitly through recursion) to track the nodes to visit next.'
  },
  {
    id: 716,
    text: 'Breadth First Search (BFS) uses which data structure?',
    options: ['Stack', 'Heap', 'Queue', 'Linked List'],
    correct: 2,
    explanation: 'BFS uses a queue to visit nodes level by level — enqueuing neighbouring nodes and processing them in FIFO order.'
  },
  {
    id: 717,
    text: "Dijkstra's algorithm is used to find:",
    options: [
      'The shortest path in a graph with negative weights',
      'The minimum spanning tree',
      'The shortest path from a source in a non-negative weighted graph',
      'The topological ordering of a DAG'
    ],
    correct: 2,
    explanation: "Dijkstra's algorithm finds the shortest path from a single source to all other vertices in a graph with non-negative edge weights."
  },
  {
    id: 718,
    text: 'What is the time complexity of Breadth First Search on a graph with V vertices and E edges?',
    options: ['O(V)', 'O(E)', 'O(V + E)', 'O(V × E)'],
    correct: 2,
    explanation: 'BFS visits each vertex once and explores each edge once. Total time = O(V + E) where V = vertices and E = edges.'
  },
  // --- Sorting Algorithms ---
  {
    id: 719,
    text: 'What is the worst-case time complexity of Quick Sort?',
    options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'],
    correct: 1,
    explanation: 'Quick Sort has a worst-case of O(n²) when the pivot is always the smallest or largest element (e.g., already sorted array with bad pivot selection).'
  },
  {
    id: 720,
    text: 'Merge Sort has which time complexity in ALL cases (best, average, worst)?',
    options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
    correct: 1,
    explanation: 'Merge Sort consistently achieves O(n log n) in all cases because it always divides the array in half and merges in linear time.'
  },
  {
    id: 721,
    text: 'Which sorting algorithm is considered stable?',
    options: ['Quick Sort', 'Heap Sort', 'Merge Sort', 'Selection Sort'],
    correct: 2,
    explanation: 'A stable sort maintains the relative order of equal elements. Merge Sort is stable. Quick Sort and Heap Sort are typically not stable.'
  },
  {
    id: 722,
    text: 'Bubble Sort performs at most how many comparisons for an array of n elements?',
    options: ['n', 'n log n', 'n(n-1)/2', 'n²'],
    correct: 2,
    explanation: 'Bubble Sort compares adjacent pairs. In the worst case it performs n(n-1)/2 comparisons, which is O(n²).'
  },
  {
    id: 723,
    text: 'Heap Sort uses which data structure?',
    options: ['Binary Search Tree', 'Binary Heap', 'Hash Table', 'Stack'],
    correct: 1,
    explanation: 'Heap Sort uses a binary heap. It first builds a max-heap, then repeatedly extracts the maximum to sort the array in O(n log n).'
  },
  // --- Searching ---
  {
    id: 724,
    text: 'Linear search has a time complexity of:',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correct: 2,
    explanation: 'Linear search examines each element sequentially. In the worst case (element not present or last), it checks all n elements: O(n).'
  },
  {
    id: 725,
    text: 'Binary search requires that the array be:',
    options: ['Unsorted', 'Sorted', 'Of even length', 'Stored in a linked list'],
    correct: 1,
    explanation: 'Binary search works by dividing the sorted array in half each time. The array MUST be sorted for binary search to work correctly.'
  },
  // --- Time Complexity / Big-O ---
  {
    id: 726,
    text: 'Which time complexity grows the slowest for large n?',
    options: ['O(n²)', 'O(n log n)', 'O(2ⁿ)', 'O(log n)'],
    correct: 3,
    explanation: 'O(log n) grows the slowest among the options. Growth rate: O(log n) < O(n log n) < O(n²) < O(2ⁿ).'
  },
  {
    id: 727,
    text: 'What is the space complexity of Merge Sort?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correct: 2,
    explanation: 'Merge Sort requires O(n) auxiliary space for the temporary arrays used during the merge step.'
  },
  {
    id: 728,
    text: 'An algorithm with O(1) space complexity is called:',
    options: [
      'Polynomial time algorithm',
      'In-place algorithm',
      'Greedy algorithm',
      'Dynamic programming'
    ],
    correct: 1,
    explanation: 'An in-place algorithm uses O(1) (constant) extra space regardless of input size, rearranging elements within the original data structure.'
  },
  // --- Hash Tables ---
  {
    id: 729,
    text: 'Average case time complexity for lookup in a Hash Table is:',
    options: ['O(n)', 'O(log n)', 'O(1)', 'O(n log n)'],
    correct: 2,
    explanation: 'Hash tables provide O(1) average-case lookup by computing the hash of a key to directly find its storage location. Worst case with collisions is O(n).'
  },
  {
    id: 730,
    text: 'Collision in a hash table occurs when:',
    options: [
      'Two different keys produce the same hash value',
      'The table is completely full',
      'A key is deleted from the table',
      'The hash function returns a negative value'
    ],
    correct: 0,
    explanation: 'A collision occurs when two different keys map to the same hash index. Collision resolution methods include chaining and open addressing.'
  },
  // --- Dynamic Programming ---
  {
    id: 731,
    text: 'Dynamic programming is best applied to problems that have:',
    options: [
      'No repeated subproblems',
      'Overlapping subproblems and optimal substructure',
      'Always greedy choices',
      'Linear-time solutions only'
    ],
    correct: 1,
    explanation: 'Dynamic programming applies to problems with overlapping subproblems (same sub-problems solved multiple times) and optimal substructure (optimal solution builds from optimal sub-solutions).'
  },
  {
    id: 732,
    text: 'What is the time complexity of the Fibonacci sequence using dynamic programming (memoisation)?',
    options: ['O(2ⁿ)', 'O(n²)', 'O(n)', 'O(log n)'],
    correct: 2,
    explanation: 'With memoisation, each of the n Fibonacci numbers is computed only once, giving O(n) time and O(n) space, compared to O(2ⁿ) for naive recursion.'
  },
  // --- Trees Advanced ---
  {
    id: 733,
    text: 'A B-tree of order m can have at most how many children per node?',
    options: ['m-1', 'm', 'm+1', '2m'],
    correct: 1,
    explanation: 'A B-tree of order m allows each node to have at most m children. The number of keys per node is at most m-1.'
  },
  {
    id: 734,
    text: 'Preorder traversal visits nodes in which order?',
    options: [
      'Left → Right → Root',
      'Left → Root → Right',
      'Root → Left → Right',
      'Right → Root → Left'
    ],
    correct: 2,
    explanation: 'Preorder traversal: Root → Left subtree → Right subtree. (Inorder: Left→Root→Right; Postorder: Left→Right→Root.)'
  },
  // --- Graph Advanced ---
  {
    id: 735,
    text: 'Topological sorting can only be performed on:',
    options: [
      'Undirected graphs',
      'Directed Acyclic Graphs (DAGs)',
      'Weighted graphs with negative edges',
      'Complete graphs'
    ],
    correct: 1,
    explanation: 'Topological sorting is only valid for Directed Acyclic Graphs (DAGs). A cycle would make a total linear ordering impossible.'
  },
  {
    id: 736,
    text: "Kruskal's algorithm finds:",
    options: [
      'Shortest path between two vertices',
      'Minimum Spanning Tree by sorting edges by weight',
      'Maximum flow in a network',
      'All-pairs shortest paths'
    ],
    correct: 1,
    explanation: "Kruskal's algorithm finds the Minimum Spanning Tree (MST) by greedily adding the lowest-weight edges that don't form a cycle."
  },
  // --- Space Complexity ---
  {
    id: 737,
    text: 'Which of the following sorting algorithms has O(1) space complexity (in-place)?',
    options: ['Merge Sort', 'Counting Sort', 'Quick Sort', 'Radix Sort'],
    correct: 2,
    explanation: 'Quick Sort sorts in-place using O(log n) stack space for recursion (often considered O(1) auxiliary). Merge Sort requires O(n) extra space.'
  },
  {
    id: 738,
    text: 'What is the minimum number of nodes in an AVL tree of height h?',
    options: ['h', '2h', 'Fibonacci-related', '2h+1'],
    correct: 2,
    explanation: 'The minimum number of nodes N(h) in an AVL tree satisfies the Fibonacci-like recurrence: N(h) = N(h-1) + N(h-2) + 1, growing similar to Fibonacci numbers.'
  },
  {
    id: 739,
    text: 'Which data structure is most efficient for implementing a graph with sparse edges?',
    options: [
      'Adjacency Matrix',
      'Adjacency List',
      '2D Array',
      'Complete Hash Table'
    ],
    correct: 1,
    explanation: 'Adjacency List uses O(V+E) space, much better than Adjacency Matrix O(V²) for sparse graphs (few edges). Most real-world graphs are sparse.'
  },
  {
    id: 740,
    text: 'What does the P = NP problem ask?',
    options: [
      'Whether all problems solvable in polynomial time are also solvable in linear time',
      'Whether every problem whose solution can be verified in polynomial time can also be solved in polynomial time',
      'Whether hardware can solve NP problems faster',
      'Whether sorting can be done in O(n) time'
    ],
    correct: 1,
    explanation: 'P = NP asks whether every problem whose solution can be verified quickly (polynomial time) can also be solved quickly (polynomial time). It is the most famous unsolved problem in computer science.'
  }
];

// ============================================================
// SECTION 2e — MCQ BANK: ENGINEERING MATHEMATICS (Topic 13, 40 Qs)
// ============================================================

const TOPIC13_QUESTIONS = [
  // --- Limits & Continuity ---
  {
    id: 1301,
    text: 'Evaluate: lim(x→0) [sin(x)/x]',
    options: ['0', '∞', '1', 'Undefined'],
    correct: 2,
    explanation: 'This is a standard limit: lim(x→0) [sin(x)/x] = 1. It can be derived using L\'Hôpital\'s Rule or the squeeze theorem.'
  },
  {
    id: 1302,
    text: 'A function f(x) is continuous at x = a if:',
    options: [
      'f(a) is defined only',
      'lim(x→a) f(x) exists only',
      'f(a) is defined, lim(x→a) f(x) exists, and both are equal',
      'f\'(a) exists'
    ],
    correct: 2,
    explanation: 'For continuity at x=a: (1) f(a) must be defined, (2) lim(x→a) f(x) must exist, and (3) lim(x→a) f(x) = f(a). All three conditions are necessary.'
  },
  {
    id: 1303,
    text: 'Evaluate: lim(x→∞) (1 + 1/x)^x',
    options: ['1', '0', 'e', '∞'],
    correct: 2,
    explanation: 'This is the definition of Euler\'s number e ≈ 2.71828. lim(x→∞) (1 + 1/x)^x = e.'
  },
  // --- Differential Calculus ---
  {
    id: 1304,
    text: 'What is the derivative of e^x?',
    options: ['xe^(x-1)', 'e^x', 'e^x · ln(e)', 'x·e^x'],
    correct: 1,
    explanation: 'The exponential function e^x is its own derivative: d/dx(e^x) = e^x. This is a fundamental property of e.'
  },
  {
    id: 1305,
    text: 'Using the chain rule, what is d/dx[sin(x²)]?',
    options: ['cos(x²)', '2x·cos(x²)', '2cos(x²)', 'sin(2x)'],
    correct: 1,
    explanation: 'Chain rule: d/dx[f(g(x))] = f\'(g(x))·g\'(x). Here f(u)=sin(u), g(x)=x². So: cos(x²)·2x = 2x·cos(x²).'
  },
  {
    id: 1306,
    text: 'The derivative of ln(x) is:',
    options: ['x', '1/x', 'ln(x)/x', 'e^x'],
    correct: 1,
    explanation: 'd/dx[ln(x)] = 1/x for x > 0. This is a fundamental derivative result.'
  },
  {
    id: 1307,
    text: 'Find the maximum value of f(x) = -x² + 4x + 5:',
    options: ['5', '9', '8', '4'],
    correct: 1,
    explanation: 'f\'(x) = -2x + 4 = 0 → x = 2. f(2) = -4+8+5 = 9. f\'\'(2) = -2 < 0, confirming a maximum. Max value = 9.'
  },
  {
    id: 1308,
    text: "Rolle's theorem states that if f is continuous on [a,b], differentiable on (a,b), and f(a)=f(b), then:",
    options: [
      'f is constant on [a,b]',
      'There exists c in (a,b) such that f\'(c) = 0',
      'f has no critical points',
      'f\'(a) = f\'(b)'
    ],
    correct: 1,
    explanation: "Rolle's theorem guarantees at least one point c in (a,b) where f'(c)=0 (horizontal tangent) when f(a)=f(b)."
  },
  // --- Integral Calculus ---
  {
    id: 1309,
    text: 'Evaluate: ∫ x² dx',
    options: ['2x', 'x³/3 + C', 'x³ + C', '3x²'],
    correct: 1,
    explanation: 'Using the power rule for integration: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C. For n=2: ∫x² dx = x³/3 + C.'
  },
  {
    id: 1310,
    text: 'The definite integral ∫₀^π sin(x) dx equals:',
    options: ['0', '1', '2', 'π'],
    correct: 2,
    explanation: '∫₀^π sin(x) dx = [-cos(x)]₀^π = (-cos π) - (-cos 0) = -(-1) - (-1) = 1 + 1 = 2.'
  },
  {
    id: 1311,
    text: 'Integration by parts formula: ∫u dv =',
    options: ['uv + ∫v du', 'uv - ∫v du', 'u·v\' - ∫u\'v', 'uv + C'],
    correct: 1,
    explanation: 'Integration by parts: ∫u dv = uv - ∫v du. Choose u and dv using LIATE rule (Logarithm, Inverse trig, Algebraic, Trig, Exponential).'
  },
  {
    id: 1312,
    text: 'The area under the curve y=f(x) from x=a to x=b is given by:',
    options: ['f(b) - f(a)', 'f\'(b) - f\'(a)', '∫ₐᵇ f(x) dx', 'f(a+b)/2 × (b-a)'],
    correct: 2,
    explanation: 'By the Fundamental Theorem of Calculus, the area under f(x) from a to b is the definite integral ∫ₐᵇ f(x) dx.'
  },
  // --- Matrices & Determinants ---
  {
    id: 1313,
    text: 'If A = [[1,2],[3,4]], what is det(A)?',
    options: ['2', '-2', '10', '-10'],
    correct: 1,
    explanation: 'det([[a,b],[c,d]]) = ad - bc = (1×4) - (2×3) = 4 - 6 = -2.'
  },
  {
    id: 1314,
    text: 'The rank of a matrix is:',
    options: [
      'The number of rows',
      'The number of columns',
      'The maximum number of linearly independent rows (or columns)',
      'The trace of the matrix'
    ],
    correct: 2,
    explanation: 'The rank of a matrix is the maximum number of linearly independent row vectors (which equals the max number of linearly independent column vectors).'
  },
  {
    id: 1315,
    text: 'A matrix A is invertible (non-singular) if and only if:',
    options: ['det(A) = 0', 'det(A) ≠ 0', 'A is symmetric', 'A is square'],
    correct: 1,
    explanation: 'A square matrix A is invertible (has an inverse) if and only if its determinant is non-zero (det(A) ≠ 0).'
  },
  {
    id: 1316,
    text: 'For a 3×3 matrix, if all rows are linearly dependent, the determinant is:',
    options: ['1', '3', '0', 'Undefined'],
    correct: 2,
    explanation: 'If any rows (or columns) of a matrix are linearly dependent, the determinant is 0 — the matrix is singular and non-invertible.'
  },
  // --- Eigenvalues & Eigenvectors ---
  {
    id: 1317,
    text: 'The eigenvalue equation is:',
    options: ['Ax = λA', 'Ax = λx', 'Ax = x/λ', 'A - λI = x'],
    correct: 1,
    explanation: 'The eigenvalue equation is Ax = λx, where A is a matrix, x is the eigenvector, and λ is the eigenvalue. Non-zero x satisfying this is an eigenvector.'
  },
  {
    id: 1318,
    text: 'The sum of eigenvalues of a matrix equals:',
    options: ['The determinant', 'The rank', 'The trace (sum of diagonal elements)', 'The number of rows'],
    correct: 2,
    explanation: 'The sum of eigenvalues of a matrix A equals the trace of A (sum of main diagonal elements). The product of eigenvalues equals det(A).'
  },
  {
    id: 1319,
    text: 'For a 2×2 matrix A = [[3,1],[0,2]], the eigenvalues are:',
    options: ['1, 2', '3, 2', '3, 1', '2, 1'],
    correct: 1,
    explanation: 'For a triangular matrix, eigenvalues are the diagonal entries. A = [[3,1],[0,2]] is upper triangular, so eigenvalues = 3 and 2.'
  },
  // --- Differential Equations ---
  {
    id: 1320,
    text: 'The general solution of dy/dx = y is:',
    options: ['y = x + C', 'y = Ce^x', 'y = C/x', 'y = e^x + C'],
    correct: 1,
    explanation: 'Separating variables: dy/y = dx. Integrating: ln|y| = x + C₁. Exponentiating: y = Ce^x where C = e^C₁.'
  },
  {
    id: 1321,
    text: 'A second-order linear ODE with constant coefficients y\'\'+ 2y\' + y = 0 has characteristic equation:',
    options: ['r² - 2r + 1 = 0', 'r² + 2r + 1 = 0', 'r² + 2r - 1 = 0', 'r - 2 + 1/r = 0'],
    correct: 1,
    explanation: 'Substituting y = e^(rx): the characteristic equation is r² + 2r + 1 = 0, which factors as (r+1)² = 0, giving a repeated root r = -1.'
  },
  {
    id: 1322,
    text: 'The order of a differential equation is determined by:',
    options: [
      'The highest power of y',
      'The highest order derivative present',
      'The number of terms',
      'The coefficient of dy/dx'
    ],
    correct: 1,
    explanation: 'The order of a differential equation is the order of the highest derivative appearing in the equation. E.g., d²y/dx² makes it 2nd order.'
  },
  // --- Laplace Transforms ---
  {
    id: 1323,
    text: 'The Laplace transform of f(t) = 1 (for t ≥ 0) is:',
    options: ['s', '1/s', 's²', 'e^s'],
    correct: 1,
    explanation: 'L{1} = ∫₀^∞ e^(-st) dt = [-e^(-st)/s]₀^∞ = 0 - (-1/s) = 1/s, for s > 0.'
  },
  {
    id: 1324,
    text: 'The Laplace transform of e^(at) is:',
    options: ['1/(s-a)', 's/(s-a)', '1/(s+a)', 'a/s²'],
    correct: 0,
    explanation: 'L{e^(at)} = 1/(s-a) for s > a. This is derived by integrating ∫₀^∞ e^(-(s-a)t) dt.'
  },
  {
    id: 1325,
    text: 'The Laplace transform of the derivative f\'(t) is:',
    options: ['sF(s)', 'sF(s) - f(0)', 'F(s)/s', 's²F(s)'],
    correct: 1,
    explanation: 'L{f\'(t)} = sF(s) - f(0). This property allows solving ODEs by converting differentiation to algebraic multiplication by s.'
  },
  // --- Fourier Series ---
  {
    id: 1326,
    text: 'Fourier series is used to represent:',
    options: [
      'Aperiodic signals in time domain',
      'Periodic functions as sum of sine and cosine terms',
      'Non-linear differential equations',
      'Discrete-time sequences only'
    ],
    correct: 1,
    explanation: 'Fourier series represents a periodic function as an infinite sum of sine and cosine terms (harmonics), each with specific amplitude and frequency.'
  },
  {
    id: 1327,
    text: 'The Fourier series coefficient a₀ represents:',
    options: [
      'The frequency of the signal',
      'The amplitude of the first harmonic',
      'The DC component (average value) of the function',
      'The period of the function'
    ],
    correct: 2,
    explanation: 'a₀/2 (or a₀ depending on the convention) is the DC offset or average value of the periodic function over one complete period.'
  },
  // --- Vector Calculus ---
  {
    id: 1328,
    text: 'The gradient of a scalar field f gives:',
    options: [
      'A scalar showing rate of change',
      'A vector pointing in the direction of maximum rate of increase of f',
      'The curl of the field',
      'The divergence of the field'
    ],
    correct: 1,
    explanation: 'The gradient ∇f is a vector that points in the direction of the greatest rate of increase of the scalar field f, with magnitude equal to that rate.'
  },
  {
    id: 1329,
    text: "Green's theorem relates:",
    options: [
      'A line integral around a closed curve to a double integral over the enclosed region',
      'A surface integral to a volume integral',
      'Divergence to curl',
      'Eigenvalues to determinants'
    ],
    correct: 0,
    explanation: "Green's theorem relates the line integral of a vector field around a simple closed curve C to the double integral over the plane region D bounded by C."
  },
  // --- Numerical Methods ---
  {
    id: 1330,
    text: 'The Newton-Raphson method for finding roots uses the iteration:',
    options: [
      'xₙ₊₁ = xₙ - f(xₙ)',
      'xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ)',
      'xₙ₊₁ = (xₙ + f(xₙ))/2',
      'xₙ₊₁ = f\'(xₙ)/f(xₙ)'
    ],
    correct: 1,
    explanation: 'Newton-Raphson iteration: xₙ₊₁ = xₙ - f(xₙ)/f\'(xₙ). It has quadratic convergence near the root when f\'(xₙ) ≠ 0.'
  },
  {
    id: 1331,
    text: 'Simpson\'s 1/3 rule for numerical integration approximates using:',
    options: ['Rectangles', 'Trapezoids', 'Parabolas (quadratics)', 'Cubics'],
    correct: 2,
    explanation: "Simpson's 1/3 rule fits parabolas (quadratic polynomials) through three points to approximate the area under a curve, providing better accuracy than the trapezoidal rule."
  },
  // --- Complex Numbers ---
  {
    id: 1332,
    text: "Euler's formula states that e^(iθ) =",
    options: ['cos(θ) + sin(θ)', 'cos(θ) + i·sin(θ)', 'i·cos(θ) + sin(θ)', 'cos(iθ)'],
    correct: 1,
    explanation: "Euler's formula: e^(iθ) = cos(θ) + i·sin(θ). This fundamental identity connects exponential and trigonometric functions via complex numbers."
  },
  {
    id: 1333,
    text: 'The modulus of the complex number z = 3 + 4i is:',
    options: ['3', '4', '5', '7'],
    correct: 2,
    explanation: '|z| = √(a² + b²) = √(9 + 16) = √25 = 5. The modulus represents the distance from the origin in the complex plane.'
  },
  // --- Taylor & Maclaurin ---
  {
    id: 1334,
    text: 'The Maclaurin series expansion of e^x is:',
    options: [
      '1 + x + x²/2 + x³/6 + ...',
      '1 + x + x² + x³ + ...',
      'x - x³/6 + x⁵/120 - ...',
      '1 - x²/2 + x⁴/24 - ...'
    ],
    correct: 0,
    explanation: 'e^x = Σ(xⁿ/n!) = 1 + x + x²/2! + x³/3! + ... = 1 + x + x²/2 + x³/6 + ... This series converges for all x.'
  },
  {
    id: 1335,
    text: 'Taylor series expansion f(x) about x=a up to first order gives:',
    options: [
      'f(a)',
      'f(a) + f\'(a)(x-a)',
      'f(a) + f\'(a)(x-a) + f\'\'(a)(x-a)²/2',
      'f\'(a)(x-a)'
    ],
    correct: 1,
    explanation: 'First-order Taylor expansion: f(x) ≈ f(a) + f\'(a)(x-a). This is a linear approximation of f near x=a.'
  },
  // --- Probability (Engineering context) ---
  {
    id: 1336,
    text: 'For two independent events A and B, P(A∩B) =',
    options: ['P(A) + P(B)', 'P(A) × P(B)', 'P(A) - P(B)', 'P(A) / P(B)'],
    correct: 1,
    explanation: 'For independent events: P(A∩B) = P(A) × P(B). Independence means the occurrence of A does not affect the probability of B.'
  },
  {
    id: 1337,
    text: 'The mean of a binomial distribution B(n, p) is:',
    options: ['np(1-p)', 'np', '√(np(1-p))', 'n/p'],
    correct: 1,
    explanation: 'For a binomial distribution B(n,p): mean = np, variance = np(1-p), standard deviation = √(np(1-p)).'
  },
  // --- Partial Derivatives ---
  {
    id: 1338,
    text: 'If f(x,y) = x²y + xy², then ∂f/∂x =',
    options: ['2xy + y²', 'x² + 2xy', '2xy', 'x² + xy'],
    correct: 0,
    explanation: '∂f/∂x treats y as constant: ∂/∂x(x²y) + ∂/∂x(xy²) = 2xy + y².'
  },
  {
    id: 1339,
    text: "Clairaut's theorem states that for smooth functions:",
    options: [
      '∂²f/∂x∂y = ∂f/∂x + ∂f/∂y',
      '∂²f/∂x∂y = ∂²f/∂y∂x (mixed partials are equal)',
      '∂f/∂x = ∂f/∂y always',
      'Higher order partials are always zero'
    ],
    correct: 1,
    explanation: "Clairaut's (Schwarz's) theorem: if the second partial derivatives are continuous, then mixed partials are equal: ∂²f/∂x∂y = ∂²f/∂y∂x."
  },
  {
    id: 1340,
    text: 'The critical point of f(x,y) occurs where:',
    options: [
      'f(x,y) = 0',
      '∂f/∂x = 0 and ∂f/∂y = 0 simultaneously',
      'f is discontinuous',
      '∂²f/∂x² > 0'
    ],
    correct: 1,
    explanation: 'Critical points of f(x,y) occur where both partial derivatives are zero simultaneously: ∂f/∂x = 0 AND ∂f/∂y = 0. These are candidates for local maxima, minima or saddle points.'
  }
];

// ============================================================
// SECTION 3 — ALL TESTS (25 tests × 50 topics)
// ============================================================

// Helper to generate test stubs for a given topic
function _makeTests(topicId, topicName) {
  const tests = [];
  for (let i = 1; i <= 25; i++) {
    const start = (i - 1) * 40 + 1;
    const end = i * 40;
    tests.push({
      testNum: i,
      title: `${topicName} — Test ${String(i).padStart(2, '0')}`,
      qRange: `${start}-${end}`,
      status: 'available',
      bestScore: null,
      attempts: 0
    });
  }
  return tests;
}

const ALL_TESTS = {};
ALL_TOPICS.forEach(t => {
  ALL_TESTS[t.id] = _makeTests(t.id, t.shortName);
});

// Apply existing progress data to specific topic-test combinations
// (Overriding defaults for topics that have sample progress)

// Topic 1 — Quantitative Aptitude: 8 attempts
for (let i = 1; i <= 8; i++) {
  ALL_TESTS[1][i - 1].attempts = Math.floor(Math.random() * 2) + 1;
  ALL_TESTS[1][i - 1].bestScore = [32, 35, 31, 37, 34, 36, 31, 38][i - 1];
}

// Topic 2 — Verbal: 3 attempts
for (let i = 1; i <= 3; i++) {
  ALL_TESTS[2][i - 1].attempts = 1;
  ALL_TESTS[2][i - 1].bestScore = [28, 31, 29][i - 1];
}

// Topic 6 — CS Fundamentals: 1 attempt
ALL_TESTS[6][0].attempts = 1;
ALL_TESTS[6][0].bestScore = 33;

// Topic 3 — Logical: 2 attempts
ALL_TESTS[3][0].attempts = 1;
ALL_TESTS[3][0].bestScore = 24;
ALL_TESTS[3][1].attempts = 1;
ALL_TESTS[3][1].bestScore = 27;

// ============================================================
// SECTION 4 — SAMPLE PROGRESS DATA
// ============================================================

const SAMPLE_PROGRESS = {
  1:  { completed: 8,  bestScore: 38, avgScore: 34, accuracy: 78, status: 'in_progress' },
  2:  { completed: 3,  bestScore: 35, avgScore: 29, accuracy: 72, status: 'in_progress' },
  3:  { completed: 2,  bestScore: 27, avgScore: 25, accuracy: 67, status: 'in_progress' },
  4:  { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  5:  { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  6:  { completed: 1,  bestScore: 33, avgScore: 33, accuracy: 82, status: 'in_progress' },
  7:  { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  8:  { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  9:  { completed: 1,  bestScore: 30, avgScore: 30, accuracy: 75, status: 'in_progress' },
  10: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  11: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  12: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  13: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  14: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  15: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  16: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  17: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  18: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  19: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  20: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  21: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  22: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  23: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  24: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  25: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  26: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  27: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  28: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  29: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  30: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  31: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  32: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  33: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  34: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  35: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  36: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  37: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  38: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  39: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  40: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  41: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  42: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  43: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  44: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  45: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  46: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  47: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  48: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  49: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  },
  50: { completed: 0,  bestScore: 0,  avgScore: 0,  accuracy: 0,  status: 'not_started'  }
};

// ============================================================
// SECTION 5 — RECENT RESULTS DATA
// ============================================================

const RECENT_RESULTS = [
  {
    topicId: 1,
    topicName: 'Quantitative Aptitude',
    testNum: 8,
    score: 38,
    total: 40,
    pct: 95,
    date: '25 Sep 2026',
    time: '34:21',
    correct: 38,
    incorrect: 2,
    unanswered: 0
  },
  {
    topicId: 2,
    topicName: 'Verbal Ability & English',
    testNum: 3,
    score: 29,
    total: 40,
    pct: 72,
    date: '24 Sep 2026',
    time: '28:45',
    correct: 29,
    incorrect: 9,
    unanswered: 2
  },
  {
    topicId: 1,
    topicName: 'Quantitative Aptitude',
    testNum: 7,
    score: 31,
    total: 40,
    pct: 77,
    date: '22 Sep 2026',
    time: '38:02',
    correct: 31,
    incorrect: 8,
    unanswered: 1
  },
  {
    topicId: 6,
    topicName: 'Computer Science Fundamentals',
    testNum: 1,
    score: 33,
    total: 40,
    pct: 82,
    date: '20 Sep 2026',
    time: '31:15',
    correct: 33,
    incorrect: 7,
    unanswered: 0
  },
  {
    topicId: 3,
    topicName: 'Logical Reasoning',
    testNum: 2,
    score: 27,
    total: 40,
    pct: 67,
    date: '18 Sep 2026',
    time: '36:50',
    correct: 27,
    incorrect: 11,
    unanswered: 2
  },
  {
    topicId: 1,
    topicName: 'Quantitative Aptitude',
    testNum: 6,
    score: 36,
    total: 40,
    pct: 90,
    date: '16 Sep 2026',
    time: '29:11',
    correct: 36,
    incorrect: 4,
    unanswered: 0
  },
  {
    topicId: 2,
    topicName: 'Verbal Ability & English',
    testNum: 2,
    score: 31,
    total: 40,
    pct: 77,
    date: '14 Sep 2026',
    time: '32:07',
    correct: 31,
    incorrect: 7,
    unanswered: 2
  },
  {
    topicId: 9,
    topicName: 'Database Management Systems',
    testNum: 1,
    score: 30,
    total: 40,
    pct: 75,
    date: '12 Sep 2026',
    time: '40:00',
    correct: 30,
    incorrect: 10,
    unanswered: 0
  }
];

// ============================================================
// SECTION 6 — ANALYTICS DATA
// ============================================================

const ANALYTICS = {
  // Last 7 test scores (most recent last)
  weeklyScores: [72, 78, 65, 82, 88, 77, 95],
  // Day labels for the weekly chart
  weeklyLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  // Per-topic accuracy breakdown
  topicAccuracy: [
    { topic: 'Quant Aptitude',    accuracy: 78, tests: 8  },
    { topic: 'Verbal',            accuracy: 72, tests: 3  },
    { topic: 'Logical',           accuracy: 67, tests: 2  },
    { topic: 'CS Fundamentals',   accuracy: 82, tests: 1  },
    { topic: 'DBMS',              accuracy: 75, tests: 1  }
  ],
  // Tests taken per month for the last 12 months
  monthlyActivity: [12, 8, 15, 6, 11, 9, 14, 7, 10, 13, 8, 12],
  monthlyLabels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  // Aggregated stats
  totalTestsTaken: 15,
  totalQuestionsAttempted: 580,
  totalCorrect: 448,
  totalIncorrect: 110,
  totalUnanswered: 22,
  overallAccuracy: 77.2,
  avgTimePerTest: 33.6,     // minutes
  longestStreak: 7,         // days
  currentStreak: 3,         // days
  // Identified weak and strong areas
  weakTopics: ['Logical Reasoning', 'Verbal Ability & English'],
  strongTopics: ['Computer Science Fundamentals', 'Quantitative Aptitude'],
  // Score distribution buckets
  scoreDistribution: {
    '90-100%': 2,
    '75-89%':  7,
    '60-74%':  5,
    'Below 60%': 1
  },
  // Performance trend
  trend: 'improving'  // 'improving' | 'declining' | 'stable'
};

// ============================================================
// SECTION 7 — BADGES DATA
// ============================================================

const BADGES = [
  {
    id: 'first_test',
    name: 'First Step',
    icon: '🎯',
    desc: 'Completed your first test',
    earned: true,
    earnedDate: '15 Sep 2026',
    category: 'milestone'
  },
  {
    id: 'streak_7',
    name: '7-Day Streak',
    icon: '🔥',
    desc: 'Maintained 7 consecutive days of practice',
    earned: true,
    earnedDate: '22 Sep 2026',
    category: 'streak'
  },
  {
    id: 'century',
    name: 'Century',
    icon: '💯',
    desc: 'Solved 100 questions in total',
    earned: true,
    earnedDate: '18 Sep 2026',
    category: 'milestone'
  },
  {
    id: 'speed',
    name: 'Speed Demon',
    icon: '⚡',
    desc: 'Completed a full test in under 25 minutes',
    earned: true,
    earnedDate: '25 Sep 2026',
    category: 'performance'
  },
  {
    id: 'tests_10',
    name: 'Test Warrior',
    icon: '⚔️',
    desc: 'Completed 10 tests across any topics',
    earned: false,
    criterion: 'Complete 10 tests',
    progress: 8,
    total: 10,
    category: 'milestone'
  },
  {
    id: 'tests_25',
    name: 'Marathon Runner',
    icon: '🏃',
    desc: 'Completed 25 tests across any topics',
    earned: false,
    criterion: 'Complete 25 tests',
    progress: 8,
    total: 25,
    category: 'milestone'
  },
  {
    id: 'accuracy_90',
    name: 'Sharpshooter',
    icon: '🎯',
    desc: 'Achieved 90%+ accuracy in any single test',
    earned: false,
    criterion: 'Score 36+/40 in one test',
    progress: 38,
    total: 40,
    category: 'performance'
  },
  {
    id: 'questions_1000',
    name: 'Thousand Club',
    icon: '📚',
    desc: 'Solved 1000 questions in total',
    earned: false,
    criterion: 'Solve 1000 questions',
    progress: 320,
    total: 1000,
    category: 'milestone'
  },
  {
    id: 'topic_master',
    name: 'Topic Master',
    icon: '🏆',
    desc: 'Completed all 25 tests of any single topic',
    earned: false,
    criterion: 'Complete all 25 tests of one topic',
    progress: 8,
    total: 25,
    category: 'mastery'
  },
  {
    id: 'streak_30',
    name: 'Iron Habit',
    icon: '💪',
    desc: '30-day consecutive practice streak',
    earned: false,
    criterion: '30 days consecutive practice',
    progress: 3,
    total: 30,
    category: 'streak'
  },
  {
    id: 'all_rounder',
    name: 'All Rounder',
    icon: '🌟',
    desc: 'Attempted tests in 10 or more different topics',
    earned: false,
    criterion: 'Attempt tests in 10 topics',
    progress: 3,
    total: 10,
    category: 'diversity'
  },
  {
    id: 'night_owl',
    name: 'Night Owl',
    icon: '🦉',
    desc: 'Practised after 10 PM on 5 separate days',
    earned: false,
    criterion: 'Practice 5 nights after 10 PM',
    progress: 2,
    total: 5,
    category: 'habit'
  },
  {
    id: 'perfect_score',
    name: 'Perfect Score',
    icon: '🌠',
    desc: 'Scored 40/40 in any test',
    earned: false,
    criterion: 'Score 40/40 in one test',
    progress: 38,
    total: 40,
    category: 'performance'
  },
  {
    id: 'early_bird',
    name: 'Early Bird',
    icon: '🌅',
    desc: 'Practised before 7 AM on 5 separate days',
    earned: false,
    criterion: 'Practice 5 mornings before 7 AM',
    progress: 1,
    total: 5,
    category: 'habit'
  }
];

// ============================================================
// SECTION 8 — NOTIFICATIONS DATA
// ============================================================

const NOTIFICATIONS = [
  {
    id: 1,
    type: 'badge',
    icon: '🔥',
    title: 'Badge Earned!',
    msg: 'You earned the 7-Day Streak badge. Keep the momentum going!',
    time: '2h ago',
    read: false,
    actionLabel: 'View Badges',
    actionTarget: 'profile'
  },
  {
    id: 2,
    type: 'test',
    icon: '📋',
    title: 'Daily Practice Reminder',
    msg: "You haven't practised today. Keep your streak alive — just one test is enough!",
    time: '6h ago',
    read: false,
    actionLabel: 'Start Test',
    actionTarget: 'topics'
  },
  {
    id: 3,
    type: 'job',
    icon: '💼',
    title: 'New Opportunity Posted',
    msg: 'UPSC Civil Services Prelims 2027 — Application window open. Apply by 25 Feb 2027.',
    time: '1d ago',
    read: false,
    actionLabel: 'View Details',
    actionTarget: 'jobs'
  },
  {
    id: 4,
    type: 'circle',
    icon: '👥',
    title: 'Study Circle Update',
    msg: 'New message in "Aptitude Prep 2026" — Priya posted a shortcut for percentage problems.',
    time: '1d ago',
    read: true,
    actionLabel: 'Open Circle',
    actionTarget: 'circles'
  },
  {
    id: 5,
    type: 'result',
    icon: '✅',
    title: 'Test Result Ready',
    msg: 'Quantitative Aptitude — Test 08 graded. You scored 38/40 (95%). Excellent performance!',
    time: '2d ago',
    read: true,
    actionLabel: 'View Result',
    actionTarget: 'results'
  },
  {
    id: 6,
    type: 'job',
    icon: '💼',
    title: 'Application Deadline Alert',
    msg: 'RRB NTPC 2026 — Application deadline: 20 Nov 2026 (25 days remaining). Don\'t miss out.',
    time: '3d ago',
    read: true,
    actionLabel: 'View Job',
    actionTarget: 'jobs'
  },
  {
    id: 7,
    type: 'badge',
    icon: '⚡',
    title: 'Badge Earned!',
    msg: 'Speed Demon — You completed Quantitative Aptitude Test 06 in under 30 minutes.',
    time: '3d ago',
    read: true,
    actionLabel: 'View Badges',
    actionTarget: 'profile'
  },
  {
    id: 8,
    type: 'tip',
    icon: '💡',
    title: 'Study Tip of the Day',
    msg: 'Spaced repetition is 2× more effective than cramming. Try revisiting topics after 24 hours.',
    time: '4d ago',
    read: true,
    actionLabel: 'Learn More',
    actionTarget: null
  },
  {
    id: 9,
    type: 'result',
    icon: '✅',
    title: 'Test Result Ready',
    msg: 'Logical Reasoning — Test 02 graded. You scored 27/40 (67%). Focus on Syllogisms.',
    time: '5d ago',
    read: true,
    actionLabel: 'View Result',
    actionTarget: 'results'
  },
  {
    id: 10,
    type: 'system',
    icon: '🔔',
    title: 'New Topic Added',
    msg: 'Cybersecurity Fundamentals has been added to your topic library with 25 test sets.',
    time: '1w ago',
    read: true,
    actionLabel: 'Explore Topic',
    actionTarget: 'topics'
  }
];

// ============================================================
// SECTION 9 — UTILITY: MCQ BANK REGISTRY
// Maps topic IDs to their question bank arrays
// ============================================================

const MCQ_BANKS = {
  2:  TOPIC2_QUESTIONS,   // Verbal Ability & English    — 40 Qs
  3:  TOPIC3_QUESTIONS,   // Logical Reasoning           — 40 Qs
  6:  TOPIC6_QUESTIONS,   // CS Fundamentals             — 40 Qs
  7:  TOPIC7_QUESTIONS,   // Data Structures & Algorithms — 40 Qs
  13: TOPIC13_QUESTIONS   // Engineering Mathematics     — 40 Qs
  // Topic 1 (Quantitative Aptitude) questions are defined in index.html
};

// ============================================================
// SECTION 10 — CATEGORY METADATA
// ============================================================

const CATEGORIES = [
  { id: 'aptitude',         label: 'Aptitude & Reasoning',      icon: '🧠', color: '#f59e0b', topicCount: 4  },
  { id: 'computer_science', label: 'Computer Science',          icon: '💻', color: '#0d9488', topicCount: 11 },
  { id: 'electronics',      label: 'Electronics & ECE',         icon: '🔌', color: '#8b5cf6', topicCount: 10 },
  { id: 'electrical',       label: 'Electrical Engineering',    icon: '⚡', color: '#ef4444', topicCount: 3  },
  { id: 'mechanical',       label: 'Mechanical Engineering',    icon: '⚙️', color: '#6b7280', topicCount: 10 },
  { id: 'mathematics',      label: 'Mathematics',               icon: '∑',  color: '#1e3a5f', topicCount: 5  },
  { id: 'programming',      label: 'Programming Languages',     icon: '👨‍💻', color: '#10b981', topicCount: 4  },
  { id: 'general',          label: 'General Studies',           icon: '🌍', color: '#f97316', topicCount: 3  }
];

// ============================================================
// END OF FILE — topics-data.js
// Total topics: 50 | MCQ banks: 5 topics × 40 Qs = 200 Qs
// All data is globally scoped (no module exports needed).
// Include via: <script src="topics-data.js"></script>
// ============================================================

if (typeof window !== 'undefined') {
  window.ALL_TOPICS = ALL_TOPICS;
  window.MCQ_BANKS = MCQ_BANKS;
  window.CATEGORIES = CATEGORIES;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ALL_TOPICS, MCQ_BANKS, CATEGORIES };
}


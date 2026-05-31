/* =================================================================
   PORTFOLIO SITE CONTENT — assets/js/data.js
   ---------------------------------------------------------------
   All editable site content lives here.
   To update experience, projects, certifications, or personal info,
   edit this file only — the HTML pages render from this data.
   ================================================================= */

const PORTFOLIO = {

  /* ---- Personal Info ---- */
  info: {
    name:     'Vrushabh Desai',
    title:    'Senior Software Engineer',
    subtitle: 'Robotics and Autonomous System Enthusiast',
    email:    'vrushabhdesai07@gmail.com',
    phone:    '+1 (508) 206-0188',
    location: 'Massachusetts, USA',
    linkedin: 'https://www.linkedin.com/in/vrushabhdesai',
    github:   'https://github.com/vrushabhdesai',
    resume:   'docs/Resume_Vrushabh.pdf',
  },

  /* ---- Hero typed items ---- */
  typedItems: [
    'Senior Software Engineer',
    'Robotics & Autonomous Systems Enthusiast',
    'Computer Vision Specialist',
    'Embedded Systems Designer',
  ],

  /* ---- Work Experience ---- */
  /*
   * Fields:
   *   id          – unique key
   *   title       – job title
   *   company     – company name
   *   companyUrl  – URL (null if none)
   *   location    – "City, Country"
   *   periodBadge – text for the badge pill (e.g. "Current" or "2018 – 2019")
   *   type        – role type label (Full-time / Internship / Formula Student)
   *   icon        – Bootstrap Icon class (without "bi-")
   *   featured    – true → highlighted border
   *   bullets     – array of strings (HTML allowed)
   *   skills      – array of skill strings
   *   links       – array of { type, label, url }
   *                 type: "video" | "report" | "github" | "link"
   */
  experience: [
    {
      id: 'cognex',
      title: 'Senior Software Engineer',
      company: 'Cognex Corporation',
      companyUrl: 'https://www.cognex.com/',
      location: 'USA',
      periodBadge: 'Current',
      type: 'Full-time',
      icon: 'eye',
      featured: true,
      bullets: [
        'Began as Associate Software Engineer; promoted through R&D, design, and testing roles.',
        'Developing 2D and 3D vision tools for Cognex industrial machine vision products.',
        'Collaborating across teams on software architecture, algorithm design, and system testing.',
      ],
      skills: ['C++', 'Computer Vision', '3D Vision', 'Software Design', 'R&D'],
      links: [],
    },
    {
      id: 'jindal',
      title: 'Signal Processing & Control Algorithm Engineer',
      company: 'Jindal Mobilitric',
      companyUrl: 'https://jindalmobilitric.in/',
      location: 'India',
      periodBadge: '2018 – 2019',
      type: 'Full-time',
      icon: 'ev-front',
      featured: false,
      bullets: [
        'Designed ECU using ATmega 1284P with CAN bus; developed embedded firmware in C.',
        'Designed 3 KW battery pack with Battery Management System (BMS) for electric motorbike.',
        'Led controls team for autonomous delivery bot using Raspberry Pi and OpenCV.',
      ],
      skills: ['Embedded C', 'CAN Bus', 'OpenCV', 'BMS', 'Raspberry Pi'],
      links: [],
    },
    {
      id: 'djs-racing',
      title: 'Electronics & Data Acquisition Lead',
      company: 'Team DJS Racing',
      companyUrl: 'https://djs-racing.com/',
      location: 'Mumbai, India',
      periodBadge: '2016 – 2018',
      type: 'Formula Student',
      icon: 'car-front',
      featured: false,
      bullets: [
        'Led the electronics division across two Formula Student car builds (DJS 03.v2 &amp; DJS 04) competing at international events in Germany and Austria.',
        '<strong>DJS 04:</strong> Designed custom Power Distribution Module; implemented paddle-controlled clutch servo; integrated Race Capture Pro MK3 for live data logging and telemetry.',
        '<strong>DJS 03.v2:</strong> Designed industrial-grade wiring harness for PE3 ECU; built an electronic solenoid sequential shifter; engineered closed-loop DRS using brake pressure &amp; steering angle sensors.',
        'Competed at Formula Student Germany 2017 (Hockenheim) &mdash; <em>2nd Best Asian Team</em>; Formula Student Austria 2018 (Red Bull Ring) &mdash; <em>Cost Event Award</em>.',
      ],
      skills: ['Embedded C', 'Wiring Harness', 'ECU', 'CAN Bus', 'Telemetry', 'DRS', 'PCB Design'],
      links: [
        { type: 'video',  label: 'DJS 04 Video',        url: 'https://www.youtube.com/watch?v=1DCMZfrBiH4',          group: 'DJS 04' },
        { type: 'link',   label: 'DJS 04 Specs',        url: 'https://djs-racing.com/cars/#1538210459689-7fc4e06c-4ea9', group: 'DJS 04' },
        { type: 'video',  label: 'DJS 03 Video',        url: 'https://www.youtube.com/watch?v=bkzT7z1dCs0',          group: 'DJS 03.v2' },
        { type: 'report', label: 'Electronics Report',  url: 'docs/Design Report ELECTRONICS .pdf',                  group: 'DJS 03.v2' },
        { type: 'report', label: 'Cost Design Report',  url: 'docs/FB2018-C-Design.pdf',                             group: 'DJS 03.v2' },
      ],
    },
    {
      id: 'kp-footwear',
      title: 'Business Development Intern',
      company: 'KP Footwear',
      companyUrl: null,
      location: 'India',
      periodBadge: '2017',
      type: 'Internship',
      icon: 'graph-up-arrow',
      featured: false,
      bullets: [
        'Analyzed sales and manufacturing data using ML-powered software.',
        'Delivered actionable strategy that contributed to a 10% profit increase.',
      ],
      skills: ['Machine Learning', 'Data Analysis'],
      links: [],
    },
  ],

  /* ---- Projects ---- */
  /*
   * Fields:
   *   title    – project name
   *   category – "robotics" | "computer-vision" | "embedded" | "systems"
   *   date     – date string shown on the card
   *   desc     – one–two sentence description
   *   tech     – array of tech/skill strings
   *   links    – array of { type, label, url }
   *              type: "video" | "report" | "github" | "link"
   *
   * NOTE: DJS Racing projects are in the experience section above.
   */
  projects: [

    /* ---------- ROBOTICS ---------- */
    {
      title: 'TurtleBot Path Tracking (PID Controller)',
      category: 'robotics',
      date: 'May – Aug 2020',
      desc: 'Designed closed-loop PID path-tracking controllers for a TurtleBot differential-drive mobile robot. Modelled non-holonomic kinematic constraints in Cartesian coordinates, derived position control laws, and validated point-to-point and multi-waypoint navigation in Gazebo simulation. Tuned gains to demonstrate stable trajectory following with minimal overshoot.',
      tech: ['C++', 'ROS', 'Gazebo', 'PID Control', 'Differential Drive', 'Kinematics'],
      links: [
        { type: 'video',  label: 'Video',  url: 'https://youtu.be/8Y3Wkv1REyE' },
        { type: 'report', label: 'Report', url: 'docs/RC.pdf' },
      ],
    },
    {
      title: 'Trajectory Generation for Serial Manipulators',
      category: 'robotics',
      date: 'Feb – May 2020',
      desc: 'Analysed trajectory generation for 3-DoF Cartesian (PPP) and Articulated (RRR) serial manipulators. Derived DH parameters, forward/inverse kinematics, and Jacobians for both configurations. Compared Polynomial and LSPB interpolation in joint and task space, evaluating position, velocity, and acceleration profiles for smooth, energy-efficient motion.',
      tech: ['MATLAB', 'DH Parameters', 'Forward/Inverse Kinematics', 'Jacobian', 'LSPB', 'Trajectory Planning'],
      links: [
        { type: 'video',  label: 'Video',  url: 'https://www.youtube.com/watch?v=XhCT4XaOYMo' },
        { type: 'report', label: 'Report', url: 'docs/Trajectory_gen.pdf' },
      ],
    },
    {
      title: 'Indoor 3D Mapping (RGB-D SLAM)',
      category: 'robotics',
      date: 'Feb – May 2020',
      desc: 'Implemented RTAB-Map SLAM for indoor 3D mapping using RGB-D camera, LiDAR, and IMU sensor fusion on a TurtleBot3 platform. Achieved real-time loop closure and map optimization.',
      tech: ['C++', 'ROS', 'RTAB-Map', 'SLAM', 'LiDAR'],
      links: [
        { type: 'video', label: 'Video', url: 'https://www.youtube.com/watch?v=uIxt7ti0y7U' },
      ],
    },
    {
      title: 'Autonomous Robotic Arm (3-DOF)',
      category: 'robotics',
      date: 'Jun 2017 – Mar 2018',
      desc: 'Designed a 3-DOF robotic arm from scratch: forward kinematics via DH parameters, SolidWorks CAD with FEA structural analysis, and PID control implementation tuned with LabVIEW NI DAQ.',
      tech: ['Embedded C', 'SolidWorks', 'LabVIEW', 'FEA', 'PID'],
      links: [
        { type: 'video',  label: 'Video',  url: 'https://www.youtube.com/watch?v=EVBGGDy6_04' },
        { type: 'report', label: 'Poster', url: 'docs/Poster Final.pdf' },
      ],
    },

    /* ---------- COMPUTER VISION ---------- */
    {
      title: '3D Object Detection (KITTI Dataset)',
      category: 'computer-vision',
      date: 'Feb – May 2020',
      desc: 'Built an efficient 3D object detection pipeline for autonomous driving by integrating embedded-friendly SqueezeDet 2D proposals into the Frustum PointNet architecture, replacing the heavier Fast-RCNN baseline. Investigated Smooth L1 vs MSE regression losses for 3D bounding box estimation on the KITTI benchmark (Cars, Pedestrians, Cyclists). Trained with Adam optimizer on GCP with a batch size of 32.',
      tech: ['Python', 'TensorFlow', 'Frustum PointNet', 'SqueezeDet', 'Point Clouds', 'KITTI Dataset', 'Deep Learning', 'GCP'],
      links: [
        { type: 'report', label: 'Report', url: 'docs/3D_Object.pdf' },
      ],
    },
    {
      title: 'Distracted Driver Detection',
      category: 'computer-vision',
      date: 'Sep – Dec 2019',
      desc: 'Built a CNN-based classifier to detect 10 categories of distracted driving behaviour from dashboard camera images. Benchmarked transfer learning with VGG16 and ResNet architectures, achieving high multi-class accuracy through targeted fine-tuning on the Kaggle State Farm dataset.',
      tech: ['Python', 'Keras', 'CNN', 'Transfer Learning', 'VGG16', 'ResNet', 'Computer Vision'],
      links: [
        { type: 'report', label: 'Slides', url: 'docs/CS539.pptx' },
      ],
    },

    /* ---------- EMBEDDED ---------- */
    {
      title: 'Gesture Controlled Wheelchair',
      category: 'embedded',
      date: 'Jun – Jul 2019',
      desc: 'Developed a low-cost gesture-controlled smart wheelchair for mobility-impaired users. Tilt angles from an ADXL-335 3-axis accelerometer map to directional motion commands, driving dual DC motors via an L293D H-bridge motor driver. Custom Arduino firmware translates gesture thresholds into motor speed and direction, providing independent mobility without joystick or voice input.',
      tech: ['C', 'Arduino Uno', 'ADXL-335', 'L293D Motor Driver', 'Gesture Control', 'Embedded Systems'],
      links: [
        { type: 'report', label: 'Report', url: 'docs/Wheelchair.pdf' },
      ],
    },
    {
      title: 'Gesture Controlled Robotic Arm',
      category: 'embedded',
      date: 'Jan – Apr 2017',
      desc: 'Designed a minimum embedded system and manufactured a custom PCB (schematic + layout in Proteus) for a gesture-controlled pick-and-place arm. An MPU-6050 IMU (3-axis accelerometer + gyroscope) worn on the hand streams raw orientation data over I²C to an ATmega-32A, which decodes gestures and drives servo motors via an L293D motor driver in real time.',
      tech: ['Embedded C', 'ATmega-32A', 'MPU-6050', 'I2C', 'Proteus PCB Design', 'L293D', 'Atmel Studio'],
      links: [
        { type: 'report', label: 'Report', url: 'docs/G.C.Robotic Arm Report.pdf' },
      ],
    },
    {
      title: 'Electromagnetic Pulse Generator',
      category: 'embedded',
      date: 'Aug – Oct 2016',
      desc: 'Designed and characterised an EMP generator using a monostable multivibrator → BJT driver → Power MOSFET → capacitor bank discharge topology. Simulated passive component interactions in LTspice to model discharge timing and coil current pulse shape. Successfully produced a 150 V transient surge at the primary coil output during bench testing.',
      tech: ['LTspice', 'Circuit Design', 'MOSFET', 'BJT', 'Capacitor Bank', 'Power Electronics', 'Circuit Simulation'],
      links: [
        { type: 'report', label: 'Report', url: 'docs/EMP_Report.pdf' },
      ],
    },

    /* ---------- SYSTEMS PROGRAMMING ---------- */
    {
      title: 'Snake Game (C++ Capstone)',
      category: 'systems',
      date: '2020',
      desc: 'Object-oriented C++ game applying OOP principles, memory management, and concurrency. Features multiple difficulty levels with separate threads for rendering and input. Udacity C++ Nanodegree capstone.',
      tech: ['C++', 'OOP', 'SDL2', 'Multithreading'],
      links: [
        { type: 'github', label: 'Code', url: 'https://github.com/vrushabhdesai/Capstone_Project_Snake_Game' },
      ],
    },
    {
      title: 'Concurrent Traffic Simulation',
      category: 'systems',
      date: '2020',
      desc: 'Multithreaded traffic simulator on a real OpenStreetMap road network. Each vehicle runs on its own thread; traffic lights use mutexes and condition variables to manage intersections safely.',
      tech: ['C++', 'Multithreading', 'Mutexes', 'OpenStreetMap'],
      links: [
        { type: 'github', label: 'Code', url: 'https://github.com/vrushabhdesai/Concurrent_Traffic_Simulation' },
      ],
    },
    {
      title: 'Memory Management Chatbot',
      category: 'systems',
      date: '2020',
      desc: 'C++ chatbot demonstrating smart pointer ownership and move semantics. Parses a knowledge graph from a text file and applies Levenshtein distance string matching to answer questions.',
      tech: ['C++', 'Smart Pointers', 'Move Semantics'],
      links: [
        { type: 'github', label: 'Code', url: 'https://github.com/vrushabhdesai/Memory_Management_Chatbot' },
      ],
    },
    {
      title: 'Linux Process Monitor',
      category: 'systems',
      date: '2020',
      desc: 'An htop-inspired system monitor built in object-oriented C++ for Linux. Reads the /proc filesystem to display live CPU usage, memory consumption, and per-process statistics.',
      tech: ['C++', 'Linux', '/proc', 'OOP'],
      links: [
        { type: 'github', label: 'Code', url: 'https://github.com/vrushabhdesai/Linux_System_Monitor' },
      ],
    },
    {
      title: 'Route Planner (A* Algorithm)',
      category: 'systems',
      date: '2020',
      desc: 'A* search implementation on real OpenStreetMap data with IO2D visualization. Finds the shortest path between user-specified points on real-world map coordinates.',
      tech: ['C++', 'A* Search', 'OpenStreetMap', 'IO2D'],
      links: [
        { type: 'github', label: 'Code', url: 'https://github.com/vrushabhdesai/OpenStreetMap_Route_Planning' },
      ],
    },
  ],

  /* ---- Certifications ---- */
  /*
   * Fields: name, issuer, url (null if no link), icon
   */
  certifications: [
    {
      name: 'C++ Nanodegree',
      issuer: 'Udacity',
      url: 'https://www.udacity.com/course/c-plus-plus-nanodegree--nd213',
      icon: 'patch-check-fill',
    },
    {
      name: 'Robotics: Mobility',
      issuer: 'UPenn / Coursera',
      url: 'https://www.coursera.org/learn/robotics-mobility',
      icon: 'patch-check-fill',
    },
    {
      name: 'Modern Robotics (Course I–IV)',
      issuer: 'Northwestern / Coursera',
      url: 'https://www.coursera.org/specializations/modernrobotics',
      icon: 'patch-check-fill',
    },
    {
      name: 'MATLAB Programming',
      issuer: 'Vanderbilt / Coursera',
      url: 'https://www.coursera.org/learn/matlab',
      icon: 'patch-check-fill',
    },
    {
      name: 'Machine Learning A–Z',
      issuer: 'Udemy',
      url: 'https://www.udemy.com/course/machinelearning/',
      icon: 'patch-check-fill',
    },
    {
      name: 'Complete Python Bootcamp',
      issuer: 'Udemy',
      url: 'https://www.udemy.com/course/complete-python-bootcamp/',
      icon: 'patch-check-fill',
    },
    {
      name: 'Mastering Microcontrollers (Embedded C)',
      issuer: 'FastBit / Udemy',
      url: 'https://www.udemy.com/course/microcontroller-embedded-c-programming/',
      icon: 'patch-check-fill',
    },
    {
      name: 'CAN Bus Technology',
      issuer: 'Udemy',
      url: 'https://www.udemy.com/course/can-fd/',
      icon: 'patch-check-fill',
    },
  ],

  /* ---- Key Courses ---- */
  courses: [
    'Computer Vision',
    'Machine Learning',
    'Deep Learning',
    'Advanced Robot Navigation',
    'Robot Dynamics',
    'Motion Planning',
    'Foundations of Robotics',
    'Embedded System Design',
    'Control Systems',
    'Artificial Intelligence',
    'Object-Oriented Programming',
    'Project Management',
  ],
};

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
      title: 'Senior Software Engineer – R&D',
      company: 'Cognex Corporation',
      companyUrl: 'https://www.cognex.com/',
      location: 'Natick, MA',
      periodBadge: 'Jun 2021 – Present',
      type: 'Full-time',
      icon: 'eye',
      featured: true,
      bullets: [
        { category: 'Diagnostics & Tooling', items: [
          'Built a <strong>C/C++ remote diagnostics platform</strong> for embedded vision systems, enabling engineers to debug Linux-based cameras from Windows and view live graphics and algorithm state, reducing hardware issue resolution time from <strong>4 hours to 15-30 minutes</strong>.',
          'Built a <strong>C++ diagnostic replay framework</strong> that captured runtime system state from production devices and reproduced customer failures in desktop tools, cutting investigation time from <strong>1 day to 1 hour</strong>.',
        ]},
        { category: 'SDK & Platform Development', items: [
          'Designed and shipped the <strong>Cognex Development Kit (CDK)</strong>, a cross-platform software development kit with C++, Python, and C# interfaces that unified internal 2D, 3D, and AI-based vision tools into a single developer platform, reducing on-device tool deployment time by <strong>60%</strong> and enabling teams to launch new tools faster.',
          'Eliminated a <strong>performance bottleneck</strong> in a 3D vision point-cloud pipeline by replacing deep-copy ownership with pointer-based semantics, improving benchmark performance by <strong>2x</strong>.',
          'Expanded <strong>CDK adoption across embedded products</strong> by resolving deployment and production integration blockers with customers and downstream engineering teams, smoothing cross-product rollout.',
        ]},
        { category: 'CI/CD & Release Engineering', items: [
          'Owned <strong>CDK continuous integration and delivery (CI/CD) architecture</strong> in TeamCity, introducing infrastructure-as-code pipelines and on-demand build agents that reduced build times by <strong>4x</strong> across ARM and x64 platforms.',
          'Built <strong>AI-assisted release and dependency-management workflows</strong> that automated build validation, release-note generation, and pull-request creation, cutting release effort by <strong>60%</strong>.',
          'Coordinated <strong>cross-functional CDK releases</strong> across Windows installers, Debian packages, Python wheels, and NuGet packages, improving release readiness and execution across multiple distribution channels.',
        ]},
        { category: 'Technical Leadership', items: [
          'Led modernization planning for <strong>Cognex Vision Library (CVL)</strong> product by defining MVP scope, aligning stakeholders, and prioritizing engineering investments to accelerate delivery and lower program risk.',
        ]},
      ],
      skills: ['C++', 'C', 'Python', 'C#', 'CMake', 'TeamCity', 'Docker', 'CI/CD', 'Computer Vision', '3D Vision'],
      links: [],
    },
    {
      id: 'jindal',
      title: 'Embedded Systems Engineer',
      company: 'Jindal Mobilitrics',
      companyUrl: 'https://jindalmobilitric.in/',
      location: 'Mumbai, India',
      periodBadge: 'Jun 2018 – Jun 2019',
      type: 'Full-time',
      icon: 'ev-front',
      featured: false,
      bullets: [
        'Led controls development for an <strong>autonomous delivery robot</strong>, building Raspberry Pi-based perception and control software with OpenCV and YOLOv3 and running system-level testing to validate lane-following and obstacle-avoidance behavior on embedded hardware.',
        'Architected a custom microcontroller-based <strong>Vehicle Control Unit (VCU)</strong> for an electric motorbike, developed embedded C firmware and CAN bus communication software to integrate sensor inputs into a real-time vehicle control system.',
        'Designed a <strong>3 kW battery pack, Battery Management System (BMS), and low-voltage electrical harness</strong> for an electric motorbike, contributing end-to-end power-system architecture and vehicle-electronics integration alongside embedded control development.',
      ],
      skills: ['Embedded C', 'CAN Bus', 'OpenCV', 'YOLOv3', 'Raspberry Pi', 'BMS'],
      links: [],
    },
    {
      id: 'djs-racing',
      title: 'Vehicle Systems & Telemetry Lead',
      company: 'DJS Racing Formula Student Team',
      companyUrl: 'https://djs-racing.com/',
      location: 'Mumbai, India',
      periodBadge: 'Jun 2016 – May 2018',
      type: 'Formula Student',
      icon: 'car-front',
      featured: false,
      bullets: [
        'Architected the race car\'s <strong>vehicle electronics and telemetry stack</strong>, integrating the engine control unit (ECU), power distribution, and real-time data acquisition systems, and developed a closed-loop drag reduction system (DRS) controller for track-based aerodynamic control.',
        'Built <strong>real-time embedded control systems</strong> for a Formula Student race car, including paddle-actuated electronic shifting and drivetrain control, improving response time and reliability under high-speed racing conditions.',
        'Delivered vehicle systems for an <strong>award-winning Formula Student race car</strong> that won Best Designed Car at Formula Bharat in 2017 and 2018, ranked as the second-best Asian team at Formula Student Germany 2017, and won the Cost event at Formula Student Austria 2018.',
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
        'Conducted data-driven analysis of sales trends, inventory turnover, and manufacturing throughput using ML-powered business intelligence software to identify revenue growth opportunities.',
        'Synthesized findings into an actionable market expansion strategy presented to leadership, contributing to a <strong>10% increase in profit</strong> within one quarter.',
        'Collaborated with cross-functional teams to define KPIs and build reporting dashboards that informed pricing and production planning decisions.',
      ],
      skills: ['Machine Learning', 'Data Analysis', 'Business Intelligence'],
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

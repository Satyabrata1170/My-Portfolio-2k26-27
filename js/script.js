/* =====================================================================
   CENTRAL CONFIGURATION: edit everything about the site here.
   ===================================================================== */
const portfolioData = {
  name: "Satyabrata Brahmachary", initials: "SB",
  title: "AI Engineer | Data Analyst | Business Intelligence | Data Science",
  tagline: "Transforming data into meaningful insights.",
  profileImage: ".\\assets\\homepg.png",           // HERO portrait (home section)
  aboutImage: "assets/aboutpg.png",
  defaultLogo: "assets/images/logos/demo.png",   // fallback logo for experience/education cards            // ABOUT section photo (separate image)
  email: "satyabratabrahmachary1610@gmail.com", linkedin: "https://www.linkedin.com/in/satyabrata16/", github: "https://github.com/Satyabrata1170",
  instagram: "https://www.instagram.com/imsitu._/", facebook: "https://www.facebook.com/satyabratananda.brahmachary", resume: "assets/Resume-Satyabrata.pdf",mobile: "+91 84579 41170", hometown: "Balasore, Odisha, India",
  // location: { label: "Marathahalli, Bengaluru", query: "Marathahalli, Bengaluru, Karnataka, India", zoom: 14 },
  location: { label: "Bangalore", query: "Bangalore, Karnataka, India", zoom: 11 },
  heroDescription: "I am a passionate data professional interested in transforming complex data into meaningful insights through analytics, business intelligence, and intelligent technology.",
  /* Hero scroll-animation settings */
  hero: {
    rotation: 360,          // total degrees rotated across the scroll range
    direction: 1,           // 1 = clockwise, -1 = counter-clockwise
    scrollDistance: 2.6,    // scroll length in viewport heights (desktop)
    mobileDistance: 1.8,    // same on mobile
    scaleBoost: 0.1,        // extra zoom at mid-rotation
    perspective: 1200,      // px depth
    start: 0, end: 1,       // animation start/end as fractions of scroll range
    mobileSwing: 40,        // mobile: portrait sways +/- this many degrees instead of a full spin
    headlines: [["CREATIVE", "DATA SCIENTIST"], ["TURNING DATA", "INTO INSIGHTS"], ["BUSINESS", "INTELLIGENCE"], ["BUILDING SMARTER", "SOLUTIONS"]],
    roles: ["AI Engineer", "Data Analyst", "Business Intelligence", "Data Science"]
  },
  about: [
    "I'm a data professional who enjoys turning messy, complex datasets into clear stories and decisions. My work spans SQL, dashboards, automation and applied machine learning.",
    "Career goals: grow into a data science and AI leadership role, building intelligent products that make businesses faster and smarter. I'm especially interested in BI, cloud data engineering, LLMs and RAG systems."],
  aboutTags: ["Analytics", "Business Intelligence", "Machine Learning", "Generative AI", "Cloud Data"],
  education_summary: "B.Tech in Computer Science, specialising in Data Science.",
  stats: [{ v: 2, s: "+", l: "Years of Experience" }, { v: 20, s: "+", l: "Projects Completed" }, { v: 35, s: "+", l: "Technologies Worked With" }, { v: 20, s: "+", l: "Certifications Earned" }],
  tech: ["Python", "SQL", "Power BI", "Tableau", "BigQuery", "Looker", "Excel", "AWS", "GCP", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn", "OpenCV", "Flask", "Generative AI", "LLMs", "RAG", "ETL", "MySQL", "Adverity"],
  experiences: [
    {
      logo: "assets/images/logos/stagwellbg.png", company: "Stagwell Media", role: "Associate Analyst - BI", type: "Full time - Hybrid", start: "April 2026", end: "Present", location: "Bangalore, India",
      about: "A global digital marketing and media agency delivering data-driven solutions, marketing analytics, and technology-enabled business insights.",
      responsibilities: ["Developing SQL queries.", "Creating interactive dashboards.", "Performing data validation and analysis.", "Generating business insights.", "Optimizing reporting workflows.", "Working with BigQuery and data integration tools.", "Supporting data migration and reconciliation."],
      achievements: ["Improved reporting accuracy through data validation and reconciliation.", "Streamlined data integration and reporting processes.", "Delivered executive dashboards used by 5+ teams."],
      tech: ["SQL", "Python", "Power BI", "Tableau", "BigQuery" , "Looker", "Adverity"]
    },
    {
      logo: "assets/images/logos/rubixe.png", company: "Rubixe", role: "Data Science Consultant Intern", type: "Internship - Onsite", start: "December 2024", end: "February 2026", location: "Bangalore, India",
      about: "An AI and data science company specializing in machine learning, predictive analytics, and intelligent business solutions.",
      responsibilities: ["Performing data preprocessing and exploratory data analysis.", "Developing machine learning and deep learning models.", "Building CNN-based image classification solutions.", "Implementing predictive analytics using Python and TensorFlow.", "Training, evaluating, and optimizing ML/DL models.","Visualizing data and presenting analytical insights."],
      achievements: ["Developed machine learning and deep learning solutions for real-world problems.", "Built CNN models for image classification and predictive analytics."],
      tech: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Power BI"]
    },
    // {logo:"assets/images/logos/demo.png",company:"Creative Digital Labs",role:"Junior Data Analyst",type:"Freelance",start:"January 2024",end:"May 2024",location:"Remote",
    //  about:"A digital solutions company working on reporting, business intelligence, and data visualization projects.",
    //  responsibilities:["Data cleaning.","Report generation.","Dashboard development.","Data visualization."],
    //  achievements:["Delivered 6 client dashboards on schedule.","Standardised reporting templates."],
    //  tech:["Excel","SQL","Python","Power BI"]}/
  ],
  skills: [
    { cat: "Programming & Database", icon: "💻", items: ["Python", "SQL", "MySQL", "BigQuery","Pandas", "NumPy"] },
    { cat: "Business Intelligence", icon: "📊", items: ["Power BI", "Tableau", "Looker", "Excel","Data Visualization","KPI Reporting","Adverity","Data Migration"] },
    { cat: "Cloud & Data Engineering", icon: "☁️", items: ["AWS", "GCP", "Azure", "Oracle(Basic)","ETL", "Data Migration", "Data Integration"] },
    { cat: "Artificial Intelligence", icon: "🧠", items: ["Machine Learning", "Deep Learning", "Generative AI", "LLMs", "RAG", "TensorFlow", "Scikit-learn", "Keras", "CNN","NLP"] }],
  projects: [
    {
      title: "Employee Performance Analysis", cat: "Data Analytics", image: "assets/employeeprfr.png", emoji: "📈", colors: ["#4c1d95", "#1e3a8a"], desc: "Interactive Power BI dashboard analyzing employee performance, workforce trends, and key HR metrics.", tech: ["Power BI", "SQL", "Excel"],
      problem: "HR management lacked a centralized view of employee performance, productivity, and workforce insights.", solution: "Analyzed employee data using SQL and Excel and developed an interactive Power BI dashboard to identify performance trends and support data-driven HR decisions.", features: ["Drill-down by region/product", "Automated daily refresh", "KPI alerts","Employee performance analysis","Department-wise workforce insights","Data-driven HR decision-making"], github: "https://github.com/Satyabrata1170/IABAC-INX-Employee_Performance.git", live: "https://github.com/Satyabrata1170/IABAC-INX-Employee_Performance.git"
    },
    {
      title: "Sentiment Analysis Model", cat: "Machine Learning", image: "assets/sentiment.png", emoji: "🎯", colors: ["#581c87", "#0f172a"], desc: "Machine learning model analyzing Instagram comments and social media text to identify positive, negative, and neutral sentiments.", tech: ["Python","ML", "Scikit-learn","NumPy", "Pandas", "NLP"],
      problem: "Businesses struggle to understand customer opinions and emotions from large volumes of social media comments and feedback.", solution: "Developed an NLP-based sentiment analysis model that processes text data and classifies sentiments to uncover meaningful social media insights.", features: ["87% accuracy", "Positive, negative, and neutral sentiment classification", "Text preprocessing and feature extraction","Social media sentiment analysis","Interactive sentiment insights","- Data visualization and sentiment trends"], github: "https://github.com/Satyabrata1170/Sentimate-Analysis-On-Instagram.git", live: "https://github.com/Satyabrata1170/Sentimate-Analysis-On-Instagram.git"
    },
    {
      title: "GPT Pro+", cat: "Artificial Intelligence", image: "assets/gpt.png", emoji: "🤖", colors: ["#312e81", "#164e63"], desc: "AI-powered web application providing intelligent conversations, document analysis, and multimodal interactions using Large Language Models.", tech: ["LLMs", "RAG", "Python", "Vector DB","Hugging Face","Generative AI"],
      problem: "Users need an intelligent assistant capable of understanding queries, processing documents, and providing contextual answers without manually searching through information.", solution: "Developed an AI-powered web application integrating LLMs with a user-friendly interface to enable intelligent conversations, document-based question answering, and AI-assisted information retrieval.", features: ["AI-powered conversational assistant", "Document upload and analysis", "Context-aware question answering","Multimodal AI capabilities","Interactive web interface"], github: "https://github.com/Satyabrata1170/Copilot-AI-Pro.git", live: "https://github.com/Satyabrata1170/Copilot-AI-Pro.git"
    },
    // {
    //   title: "Marketing ETL Pipeline", cat: "Data Analytics", image: "assets/demo.png", emoji: "🔄", colors: ["#1e1b4b", "#065f46"], desc: "Cloud pipeline that consolidates ad platform data into BigQuery.", tech: ["BigQuery", "Adverity", "SQL", "GCP"],
    //   problem: "Marketing data was scattered across many platforms.", solution: "Automated ingestion and transformation into a unified warehouse.", features: ["Scheduled loads", "Data quality checks", "Unified schema"], github: "#", live: "#"
    // },

    {
      title: "Fake News Detection Model", cat: "Machine Learning", image: "assets/fakenews.png", emoji: "🎯", colors: ["#581c87", "#0f172a"], desc: "Machine learning model that analyzes news articles and classifies them as real or fake using NLP techniques.", tech: ["Python","ML", "Scikit-learn","NumPy", "Pandas","NLP"],
      problem: "The rapid spread of misinformation online makes it difficult for readers to distinguish authentic news from misleading or fabricated information.", solution: "Developed a machine learning classification model using text preprocessing and NLP techniques to identify and classify potentially fake news articles.", features: ["Developed a machine learning classification model using text preprocessing and NLP techniques to identify and classify potentially fake news articles.", "Text preprocessing and feature extraction", "NLP-based content analysis","Automated news credibility prediction","Model evaluation and performance analysis"], github: "https://github.com/Satyabrata1170/Fake-News-Detection-Model.git", live: "https://github.com/Satyabrata1170/Fake-News-Detection-Model.git"
    },
    {
      title: "Breast Cancer Prediction", cat: "Data Science", image: "assets/bcancer.png", emoji: "🖼️", colors: ["#4a044e", "#1e293b"], desc: "AI-powered application that analyzes breast medical images to classify cases as normal, benign, or malignant.", tech: ["TensorFlow", "Python", "Keras", "OpenCV", "CNN", "Flask"],
      problem: "Early breast cancer detection requires accurate medical image analysis, while manual examination can be time-consuming and challenging.", solution: "Developed a CNN-based deep learning model using medical image classification techniques to assist in identifying potential breast cancer cases.", features: ["98% validation accuracy", "Breast image classification", "Normal, benign, and malignant prediction","AI-powered image analysis","Image upload and prediction interface","Medical image processing","Privacy protection"], github: "https://github.com/Satyabrata1170/Early-Detection-Predictor-Machine.git", live: "https://github.com/Satyabrata1170/Early-Detection-Predictor-Machine.git"
    },
    {
      title: "Gender Detection Model", cat: "Data Science", image: "assets/gender.png", emoji: "🖼️", colors: ["#4a044e", "#1e293b"], desc: "Computer vision application that detects faces from images or video streams and predicts gender using deep learning techniques.", tech: ["TensorFlow", "Python", "Keras","OpenCV", "CNN", "Flask"],
      problem: "Developed a deep learning-based gender detection system integrating face detection and image classification to analyze facial images and predict gender.", solution: "Manual identification and demographic analysis from visual data can be inefficient when processing large numbers of images or real-time video streams.", features: ["92% validation accuracy", "Face detection", "Gender classification","Real-time camera detection","Image-based prediction","Confidence score visualization"], github: "https://github.com/Satyabrata1170/Gender-Detection-Model.git", live: "https://github.com/Satyabrata1170/Gender-Detection-Model.git"
    },
    {
      title: "Fashion Image Classifier", cat: "Data Science", image: "assets/fashion.png", emoji: "🖼️", colors: ["#4a044e", "#1e293b"], desc: "AI-powered fashion recommendation system that analyzes clothing images and suggests visually similar fashion products.", tech: ["TensorFlow", "Python", "Keras", "OpenCV", "CNN", "Computer Vision"],
      problem: "Finding similar fashion products based on visual appearance can be difficult when browsing large online shopping catalogs.", solution: "Developed a computer vision-based fashion search system that analyzes clothing images and identifies visually similar products to improve product discovery and personalized styling.", features: ["92% validation accuracy", "Fashion image classification", "Visual similarity-based search","Clothing category recognition","Image feature extraction","Personalized fashion recommendations"], github: "https://github.com/Satyabrata1170/Fashion-Visual-Model.git", live: "https://github.com/Satyabrata1170/Fashion-Visual-Model.git"
    },
    {
      title: "Body Gesture Recognition", cat: "Data Science", image: "assets/gesture.png", emoji: "🖼️", colors: ["#4a044e", "#1e293b"], desc: "Computer vision application that detects and analyzes human body poses and gestures in real-time using pose estimation techniques.", tech: ["TensorFlow", "Python", "Keras"],
      problem: "Manual tracking and interpretation of human movements and body gestures can be inefficient for applications requiring real-time motion analysis.", solution: "Developed a computer vision-based system that identifies human body landmarks and analyzes body movements to recognize poses and gestures from video streams.", features: ["Real-time pose estimation", "Human body landmark detection", "Gesture recognition","Movement tracking","Live video processing"], github: "https://github.com/Satyabrata1170/Human-Gesture-Estimator.git", live: "https://github.com/Satyabrata1170/Human-Gesture-Estimator.git"
    },
    {
      title: "Attendance Management using Face Recognition", cat: "Data Science", image: "assets/attendence.png", emoji: "🖼️", colors: ["#4a044e", "#1e293b"], desc: "Automated attendance management system that detects and recognizes faces to record attendance in real-time.", tech: ["TensorFlow", "Python", "Keras","Face Recognition", "OpenCV","Deep Learning","Computer Vision"],
      problem: "Traditional attendance systems require manual recording, which can be time-consuming, inefficient, and prone to errors.", solution: "Developed an automated face recognition-based attendance system using computer vision to identify individuals and record their attendance with timestamps.", features: ["Real-time face detection", "Facial recognition and identification", "Automated attendance recording","Timestamp-based attendance tracking","Attendance database management"], github: "https://github.com/Satyabrata1170/Attendance-Management-Using-Face-Recognition.git", live: "https://github.com/Satyabrata1170/Attendance-Management-Using-Face-Recognition.git"
    },

    {
      title: "Personal Portfolio Website", cat: "Web Development", image: "assets/portfolio.png", emoji: "🌐", colors: ["#3b0764", "#172554"], desc: "Responsive personal portfolio showcasing professional experience, technical skills, projects, certifications, and achievements through an interactive web experience.", tech: ["HTML", "CSS", "JavaScript","bootstrap", "Responsive Design", "Web Development"],
      problem: "Professionals need a centralized platform to showcase their technical skills, projects, experience, and achievements to recruiters and potential employers.", solution: "Designed and developed a responsive personal portfolio website using modern frontend technologies to present professional accomplishments, projects, and technical expertise through an engaging and interactive interface.", features: ["3D scroll animation", "Responsive design across devices", "Project showcase with detailed descriptions","Experience and education sections","Skills and certifications showcase","Smooth scrolling and dynamic animations","GitHub and social media integration"], github: "https://github.com/Satyabrata1170/My-Portfolio-2k25.git", live: "https://satyapf.vercel.app/"
    },
  
    {
  title: "MentorS - Online Learning Platform",
  cat: "Web Development",
  image: "assets/mentors.png",
  emoji: "🎓",
  colors: ["#3b0764", "#172554"],
  desc: "A modern online learning platform offering free courses, video lessons, PDF resources, and structured career learning paths across multiple technology domains.",
  tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development"],
  
  problem: "Learners often struggle to find structured, accessible, and centralized educational resources for developing technical skills and preparing for career opportunities.",
  
  solution: "Developed MentorS, a modern online learning platform inspired by Udemy, providing users with an intuitive interface to explore courses, access video lessons, download PDF resources, and follow structured career learning paths across multiple technology domains.",
  
  features: [
    "Interactive course discovery and search functionality",
    "Multiple career learning paths including Data Science, Data Analytics, Python Full Stack, and Java Full Stack",
    "Video lessons and PDF learning resources",
    "Course categorization and popular course recommendations",
    "User authentication and personalized profile",
    "Shopping cart functionality",
    "Course progress tracking",
    "Responsive design across desktop, tablet, and mobile devices",
    "Modern UI with interactive navigation and animations"
  ],
  
  github: "https://github.com/Satyabrata1170/MentorS.git",
  live: "https://mentor-s.vercel.app/"
}
  ],


  education: [
    { logo: "assets/images/logos/bput.png", inst: "Biju Pattnayak University of Technology", degree: "Bachelor of Technology", spec: "Computer Science and Engineering", start: "2020", end: "2024", grade: "Grade: A", desc: "Coursework in data structures, databases, statistics, machine learning, artificial intelligence, algorithms, and software development." },
    { logo: "assets/images/logos/chseo.png", inst: "Atal Behari Higher Secondary School", degree: "Higher Secondary Education", spec: "Physics, Chemistry, Mathematics", start: "2018", end: "2020", grade: "Grade: A", desc: "Strong foundation in mathematics, physics, analytical reasoning, and problem-solving." }],
  certifications: [
    { name: "Oracle Analytics Cloud 2025 Certified Professional", org: "Oracle", date: "September 2025", icon: "🏅", image: "assets/analyticscert.jpeg", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5700640F22B1E2D88BA9503863D87962C76BFFCDEB138344E57642A8C3008CE6" },
    { name: "Certified Data Science Professional", org: "Oracle", date: "July 2025", icon: "📊", image: "assets/datasciencecert.jpeg", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3E53C3BEF343C81B58F155BA4BAD24EDF6A4AACBC85A153F2FBAFE3A3BE1B72E" },
    { name: "Certified Data Scientist", org: "IABAC", date: "June 2025", icon: "☁️", image: "assets/iabac.jpeg", url: "https://iabac.org/certifications/verify-certificate?certNum=IAB1120176049" },
    { name: "Certified Data Scientist", org: "Nasscom", date: "May 2025", icon: "🧠", image: "assets/datascience.jpeg", url: "https://inspiration-fun-7467.my.salesforce-sites.com/CDACcertificatePage2?id=a02Vy00000Lcab5IAB" }],
  services: [
    { icon: "📈", t: "Data Analytics", d: "Turning raw data into clear findings and decisions." },
    { icon: "🧭", t: "Business Intelligence", d: "KPI frameworks and reporting that scale with your business." },
    { icon: "🖥️", t: "Dashboard Development", d: "Interactive dashboards in Power BI, Tableau and Looker." },
    { icon: "🔬", t: "Data Science", d: "Statistical modelling and experimentation for real problems." },
    { icon: "⚙️", t: "Machine Learning", d: "Predictive models from prototype to deployment." },
    { icon: "✨", t: "AI Solutions", d: "LLM, RAG and generative AI tools tailored to your data." }],
  nav: ["Home", "About", "Experience", "Skills", "Projects", "Education", "Services", "Contact"]
};

/* ===================== HELPERS ===================== */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const D = portfolioData, H = D.hero, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const chips = a => a.map(t => `<span class="chip">${t}</span>`).join('');
const li = a => a.map(t => `<li>${t}</li>`).join('');
const ini = n => n.split(' ').map(w => w[0]).slice(0, 2).join('');
const svgFallback = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#6d4de0"/><stop offset="1" stop-color="#2a4fa8"/></linearGradient></defs><rect width="400" height="500" fill="url(#g)"/><circle cx="200" cy="190" r="80" fill="#fff" opacity=".85"/><path d="M60 500c0-110 60-170 140-170s140 60 140 170z" fill="#fff" opacity=".85"/></svg>');

/* ===================== RENDER ===================== */
function render() {
  const soc = [["fa-brands fa-linkedin-in", D.linkedin, "LinkedIn"], ["fa-brands fa-facebook-f", D.facebook, "Facebook"], ["fa-brands fa-github", D.github, "GitHub"], ["fa-brands fa-instagram", D.instagram, "Instagram"], ["fa-solid fa-envelope", "mailto:" + D.email, "Email"]];
  const socHTML = soc.map(([i, u, l]) => `<a href="${u}"${u.startsWith('mailto') ? '' : ' target="_blank" rel="noopener"'} aria-label="${l}" data-tip="${l}"><i class="${i}"></i></a>`).join('');
  ['navSoc', 'heroSoc', 'footSoc'].forEach(id => $('#' + id).innerHTML = socHTML);
  $('#links').innerHTML = D.nav.map(n => `<a href="#${n.toLowerCase()}">${n}</a>`).join('');
  $('#hname').textContent = D.name.toUpperCase(); $('#aname').textContent = D.name;
  $('#hdesc').textContent = D.heroDescription; $('#resume').href = D.resume;
  [['heroImg', D.profileImage], ['aboutImg', D.aboutImage || D.profileImage]].forEach(([id, src]) => { const i = $('#' + id); i.src = src; i.onerror = () => { i.onerror = null; i.src = svgFallback } });
  $('#heads').innerHTML = H.headlines.map(h => `<h1><span>${h[0]}</span>${h[1]}</h1>`).join('');
  $('#aboutText').innerHTML = D.about.map(p => `<p>${p}</p>`).join('') + `<p>🎓 ${D.education_summary}</p>`;
  $('#aboutTags').innerHTML = chips(D.aboutTags);
  $('#stats').innerHTML = D.stats.map(s => `<div class="glass stat"><b data-n="${s.v}" data-s="${s.s}">0</b><span>${s.l}</span></div>`).join('');
  $('#marq').innerHTML = [...D.tech, ...D.tech].map(t => `<span>${t}</span>`).join('');
  $('#expTl').insertAdjacentHTML('beforeend', D.experiences.map(e => `<div class="ti reveal"><div class="glass card">
    <div class="eh"><div class="lg"><img src="${e.logo || D.defaultLogo}" alt="${e.company} logo" loading="lazy" onerror="this.parentNode.textContent='${ini(e.company)}'"></div><div><h3>${e.role}</h3><p>${e.company} · ${e.type}</p></div><span class="date">${e.start} – ${e.end}</span></div>
    <div class="meta"><span>📍 ${e.location}</span></div><p class="desc">${e.about}</p><div style="margin-top:12px">${chips(e.tech)}</div>
    <div class="more"><div><h4>Responsibilities</h4><ul>${li(e.responsibilities)}</ul><h4>Key achievements</h4><ul>${li(e.achievements)}</ul></div></div>
    <button class="tog">View Details ↓</button></div></div>`).join(''));
  $('#skGrid').innerHTML = D.skills.map(s => `<div class="glass skc reveal"><h3><i>${s.icon}</i>${s.cat}</h3><div>${s.items.map(x => `<span>${x}</span>`).join('')}</div></div>`).join('');
  const cats = ['All', ...new Set(D.projects.map(p => p.cat))];
  $('#filters').innerHTML = cats.map((c, i) => `<button class="${i ? '' : 'on'}" data-c="${c}">${c}</button>`).join('');
  $('#pGrid').innerHTML = D.projects.map((p, i) => `<article class="glass pc reveal" data-c="${p.cat}"><div class="th" style="background:linear-gradient(135deg,${p.colors[0]},${p.colors[1]})"><img src="${p.image || 'assets/demo.png'}" alt="${p.title} thumbnail" loading="lazy" onerror="this.style.display='none'"></div>
    <div class="pb"><span class="eyebrow" style="align-self:flex-start;margin:0;font-size:10px">${p.cat}</span><h3>${p.title}</h3><p>${p.desc}</p><div>${chips(p.tech)}</div>
    <div class="pl"><a class="btn" href="${p.github}" target="_blank" rel="noopener">GitHub</a><a class="btn" href="${p.live}" target="_blank" rel="noopener">Live Demo</a><button class="btn pri" data-p="${i}">View Details</button></div></div></article>`).join('');
  $('#eduTl').insertAdjacentHTML('beforeend', D.education.map(e => `<div class="ti reveal"><div class="glass card"><div class="eh"><div class="lg"><img src="${e.logo || D.defaultLogo}" alt="${e.inst} logo" loading="lazy" onerror="this.parentNode.textContent='${ini(e.inst)}'"></div><div><h3>${e.degree}</h3><p>${e.inst} · ${e.spec}</p></div><span class="date">${e.start} – ${e.end}</span></div>
    <div class="meta"><span>⭐ ${e.grade}</span></div><p class="desc">${e.desc}</p></div></div>`).join(''));
  $('#certGrid').innerHTML = D.certifications.map(c => `<div class="glass cert reveal"><div class="ci"><img src="${c.image || 'assets/demo.png'}" alt="${c.name} certificate" loading="lazy" onerror="this.style.display='none'"></div><div class="pb"><h3 style="font-size:16px">${c.name}</h3><p>${c.org}</p><p style="font:12px var(--mono)">${c.date}</p><a class="btn" href="${c.url}" target="_blank" rel="noopener" style="align-self:flex-start;margin-top:8px;padding:8px 16px;font-size:12px">View Certificate</a></div></div>`).join('');
  $('#svGrid').innerHTML = D.services.map(s => `<div class="glass svc reveal"><i>${s.icon}</i><h3>${s.t}</h3><p>${s.d}</p></div>`).join('');
  const L = D.location, mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(L.query)}&z=${L.zoom}&hl=en&output=embed`, mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(L.query)}`;
  $('#cInfo').innerHTML = `<a href="mailto:${D.email}"><small>EMAIL</small>${D.email}</a><a href="tel:${D.mobile.replace(/\s+/g, '')}"><small>MOBILE</small>${D.mobile}</a><a><small>HOMETOWN</small>${D.hometown}</a>
  <div class="mapbox" id="mapbox"><iframe title="Map of ${L.label}" src="${mapSrc}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
  <div class="pin"><i class="pulse"></i><i class="pulse p2"></i><i class="dot"></i><span class="tip">My Location</span></div><span class="hint">Click map to interact</span>
  <div class="mbar"><span class="mlabel">📍 ${L.label}</span><a class="btn pri mbtn" href="${mapLink}" target="_blank" rel="noopener">View on Google Maps ↗</a></div></div>`;
  $('#tagline').textContent = D.tagline; $('#giant').textContent = $('#giantR').textContent = D.name.split(' ')[0];
  $('#fLinks').innerHTML = D.nav.map(n => `<a href="#${n.toLowerCase()}">${n}</a>`).join('');
  $('#copy').textContent = `© ${new Date().getFullYear()} ${D.name}. All rights reserved.`;
}
render();

/* ===================== HERO: SCROLL-CONTROLLED 3D ROTATION ===================== */
const hero = $('#home'), portrait = $('#portrait'), heads = $$('#heads h1'), glow = $('#glow'), hside = $('#hside'), htxt = $('#htxt'), o1 = $('#o1'), o2 = $('#o2'), bar = $('#bar');
const stageEl = $('.stage'); let cur = 0, tgt = 0, active = -1, ticking = false;
const mobile = () => innerWidth <= 820, clamp = (v, a, b) => Math.min(b, Math.max(a, v));
function setHeroHeight() { if (reduce) return; hero.style.height = (100 + (mobile() ? H.mobileDistance : H.scrollDistance) * 100) + 'vh'; }
function readScroll() { // scrollProgress = currentScroll / animationScrollDistance
  const dist = hero.offsetHeight - innerHeight;
  const raw = clamp(scrollY / dist, 0, 1);
  tgt = clamp((raw - H.start) / (H.end - H.start), 0, 1);
}
function frame() {
  cur += (tgt - cur) * 0.12; if (Math.abs(tgt - cur) < .0004) cur = tgt;   // smooth interpolation
  const p = cur, depth = Math.sin(p * Math.PI);
  stageEl.style.perspective = H.perspective + 'px';
  let rot = reduce ? 0 : mobile() ? Math.sin(p * Math.PI * 2) * H.mobileSwing * H.direction : p * H.rotation * H.direction;
  const sc = 1 + H.scaleBoost * depth, tz = depth * (mobile() ? 20 : 60);
  portrait.style.transform = `translateZ(${tz}px) rotateY(${rot}deg) scale(${sc})`;
  if (!reduce) {
    glow.style.opacity = 1 - p * .45; glow.style.transform = `scale(${1 + p * .25}) translateY(${p * -4}%)`;
    glow.style.filter = `hue-rotate(${p * 70}deg)`;
    hside.style.opacity = 1 - clamp(p * 2.2, 0, 1); hside.style.transform = `translateY(${p * -60}px)`;
    htxt.style.transform = mobile() ? 'none' : `translateY(calc(-50% + ${p * -20}px))`;
    o1.style.transform = `translate(${p * 120}px,${p * 220}px)`; o2.style.transform = `translate(${p * -160}px,${p * -180}px)`;
  }
  bar.style.width = (p * 100) + '%';
  const idx = Math.min(heads.length - 1, Math.floor(p * heads.length * .999));
  if (idx !== active) { heads.forEach((h, i) => { h.classList.toggle('on', i === idx); h.classList.toggle('past', i < idx) }); active = idx }
  if (cur !== tgt) requestAnimationFrame(frame); else ticking = false;
}
function kick() { readScroll(); if (!ticking) { ticking = true; requestAnimationFrame(frame) } }
setHeroHeight(); readScroll(); cur = tgt; ticking = true; frame();
addEventListener('resize', () => { setHeroHeight(); kick() });

/* ===== Typing animation (hero roles) ===== */
(function () {
  let r = 0, c = 0, del = false; const el = $('#typed');
  (function tick() {
    const w = H.roles[r]; c += del ? -1 : 1; el.textContent = w.slice(0, c);
    let d = del ? 35 : 70; if (!del && c === w.length) { del = true; d = 1400 } else if (del && c === 0) { del = false; r = (r + 1) % H.roles.length; d = 300 }
    setTimeout(tick, d)
  })();
})();

/* ===================== NAV, SCROLL UI ===================== */
const nav = $('#nav'), topBtn = $('#top'), burger = $('#burger'), links = $('#links');
const secs = $$('header[id],section[id]'), navA = $$('#links a');
const tlFills = [[$('#expTl'), $('#expTl .fill')], [$('#eduTl'), $('#eduTl .fill')]];
function onScroll() {
  kick(); nav.classList.toggle('solid', scrollY > 40); topBtn.classList.toggle('show', scrollY > 700);
  let cid = secs[0].id; secs.forEach(s => { if (s.getBoundingClientRect().top < innerHeight * .4) cid = s.id });
  navA.forEach(a => a.classList.toggle('on', a.hash === '#' + cid));
  tlFills.forEach(([t, f]) => { const r = t.getBoundingClientRect(); f.style.height = clamp((innerHeight * .6 - r.top), 0, r.height) + 'px' });
}
addEventListener('scroll', onScroll, { passive: true }); onScroll();
burger.onclick = () => { burger.classList.toggle('open'); links.classList.toggle('open') };
links.onclick = e => { if (e.target.matches('a')) { burger.classList.remove('open'); links.classList.remove('open') } };
topBtn.onclick = () => scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });

/* ===== Reveal on scroll + counters ===== */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .12 });
$$('.reveal').forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(el) });
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; cio.unobserve(e.target);
  const n = +e.target.dataset.n, s = e.target.dataset.s, t0 = performance.now();
  (function step(t) { const k = clamp((t - t0) / 1400, 0, 1); e.target.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))) + s; if (k < 1) requestAnimationFrame(step) })(t0)
}), { threshold: .6 });
$$('[data-n]').forEach(el => cio.observe(el));

/* ===== Experience expand ===== */
$('#expTl').onclick = e => { const b = e.target.closest('.tog'); if (!b) return; const c = b.closest('.card'); c.classList.toggle('open'); b.textContent = c.classList.contains('open') ? 'Hide Details ↑' : 'View Details ↓' };

/* ===== Project filter + modal ===== */
$('#filters').onclick = e => {
  const b = e.target.closest('button'); if (!b) return;
  $$('#filters button').forEach(x => x.classList.toggle('on', x === b));
  $$('.pc').forEach(c => c.classList.toggle('hide', b.dataset.c !== 'All' && c.dataset.c !== b.dataset.c))
};
const modal = $('#modal'), mbody = $('#mbody');
$('#pGrid').onclick = e => {
  const b = e.target.closest('[data-p]'); if (!b) return; const p = D.projects[b.dataset.p];
  mbody.innerHTML = `<button class="x" aria-label="Close">✕</button><span class="eyebrow">${p.cat}</span><h3>${p.title}</h3><p>${p.desc}</p>
  <h4>Problem</h4><p>${p.problem}</p><h4>Solution</h4><p>${p.solution}</p><h4>Technologies</h4>${chips(p.tech)}<h4>Key features</h4><ul>${li(p.features)}</ul>
  <div class="pl" style="margin-top:24px"><a class="btn" href="${p.github}" target="_blank" rel="noopener">GitHub</a><a class="btn pri" href="${p.live}" target="_blank" rel="noopener">Live Demo</a></div>`;
  modal.classList.add('open'); document.body.style.overflow = 'hidden'
};
const closeM = () => { modal.classList.remove('open'); document.body.style.overflow = '' };
modal.onclick = e => { if (e.target === modal || e.target.closest('.x')) closeM() };
addEventListener('keydown', e => { if (e.key === 'Escape') closeM() });

/* ===== Contact form: validation + ready-to-wire send hook ===== */
async function sendForm(data) { // TODO: connect EmailJS / Formspree / your API here. Must resolve on success, throw on failure.
  console.log('Form data (wire to an email service):', data); return new Promise(r => setTimeout(r, 700));
}
const form = $('#form'), msg = $('#msg'), sendBtn = $('#sendBtn');
const rules = { name: v => v.trim().length >= 2 || 'Please enter your full name.', email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Enter a valid email address.', subject: v => v.trim().length >= 3 || 'Please add a subject.', message: v => v.trim().length >= 10 || 'Message must be at least 10 characters.' };
const fld = k => form.elements[k];
function toast(type, icon, text) { msg.className = 'toast ' + type; msg.innerHTML = `<i>${icon}</i><span>${text}</span>`; requestAnimationFrame(() => msg.classList.add('show')) }
function check(k) { const box = fld(k).closest('.f'), r = rules[k](fld(k).value); box.classList.toggle('bad', r !== true); box.classList.toggle('good', r === true); box.querySelector('.err').textContent = r === true ? '' : r; return r === true }
Object.keys(rules).forEach(k => { fld(k).addEventListener('blur', () => check(k)); fld(k).addEventListener('input', () => { if (fld(k).closest('.f').classList.contains('bad')) check(k) }) });
form.onsubmit = async e => {
  e.preventDefault();
  const ok = Object.keys(rules).map(check).every(Boolean);
  if (!ok) { toast('no', '!', 'Please fix the highlighted fields.'); return }
  sendBtn.classList.add('load'); sendBtn.disabled = true; $('.st', sendBtn).textContent = 'Sending…'; msg.classList.remove('show');
  try { await sendForm(Object.fromEntries(new FormData(form))); toast('ok', '✓', 'Thanks! Your message has been sent. I will reply soon.'); form.reset(); $$('.f', form).forEach(f => f.classList.remove('good')) }
  catch (err) { toast('no', '✕', 'Something went wrong. Please email me directly.') }
  finally { sendBtn.classList.remove('load'); sendBtn.disabled = false; $('.st', sendBtn).textContent = 'Send Message' }
};


/* ===================== MAP: click to interact (prevents scroll-trapping) ===================== */
(function () {
  const m = $('#mapbox'); if (!m) return;
  m.addEventListener('click', e => { if (!e.target.closest('a')) m.classList.add('active') });
  m.addEventListener('mouseleave', () => m.classList.remove('active'));
  document.addEventListener('pointerdown', e => { if (!m.contains(e.target)) m.classList.remove('active') });
})();

/* ===================== AMBIENT BACKGROUND: orbs, cursor glow, particles (Contact + Footer) ===================== */
function ambientFX(root, count) {
  const cv = $('canvas', root), cx = cv.getContext('2d'), glow = $('.cglow', root), orbs = $$('.corb', root), sec = root.parentElement, dpr = Math.min(devicePixelRatio || 1, 2);
  let w = 0, h = 0, ps = [], vis = false, raf = 0, mx = .5, my = .4, tx = .5, ty = .4;
  function size() {
    w = sec.clientWidth; h = sec.clientHeight; cv.width = w * dpr; cv.height = h * dpr; cv.style.width = w + 'px'; cv.style.height = h + 'px'; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ps = Array.from({ length: mobile() ? Math.round(count * .5) : count }, () => ({ x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.4 + .4, vx: (Math.random() - .5) * .15, vy: -(Math.random() * .2 + .05), a: Math.random() * .45 + .15, hue: Math.random() < .5 ? 265 : 215 }))
  }
  sec.addEventListener('pointermove', e => { const r = sec.getBoundingClientRect(); tx = (e.clientX - r.left) / r.width; ty = (e.clientY - r.top) / r.height }, { passive: true });
  function draw(t) {
    if (!vis) { raf = 0; return }
    mx += (tx - mx) * .08; my += (ty - my) * .08;
    glow.style.background = `radial-gradient(520px circle at ${mx * 100}% ${my * 100}%,rgba(139,92,246,.2),rgba(79,140,255,.08) 45%,transparent 70%)`;
    const r = sec.getBoundingClientRect(), pr = clamp((innerHeight - r.top) / (innerHeight + r.height), 0, 1) - .5;   // scroll parallax
    orbs.forEach((o, i) => o.style.transform = `translate(${Math.sin(t / 4000 + i * 2) * 40 + (mx - .5) * (i ? -60 : 60)}px,${pr * (i ? -170 : 170) + Math.cos(t / 5000 + i) * 30}px)`);
    cx.clearRect(0, 0, w, h);
    ps.forEach(p => {
      p.x += p.vx + (mx - .5) * .12; p.y += p.vy;
      if (p.y < -5) { p.y = h + 5; p.x = Math.random() * w } if (p.x < -5) p.x = w + 5; if (p.x > w + 5) p.x = -5;
      const d = Math.hypot(p.x - mx * w, p.y - my * h), b = d < 160 ? 1 + (160 - d) / 80 : 1;
      cx.beginPath(); cx.fillStyle = `hsla(${p.hue},90%,75%,${Math.min(1, p.a * b)})`; cx.arc(p.x, p.y, p.r * b, 0, 6.283); cx.fill()
    });
    raf = requestAnimationFrame(draw);
  }
  new IntersectionObserver(es => { vis = es[0].isIntersecting; if (vis && !raf && !reduce) raf = requestAnimationFrame(draw) }).observe(sec);
  size(); addEventListener('resize', size);
  if (reduce) glow.style.background = 'radial-gradient(520px circle at 50% 40%,rgba(139,92,246,.15),transparent 70%)';
}
ambientFX($('#cfx'), 55); ambientFX($('#ffx'), 45);

/* ===================== FOOTER: metallic name reveal + cursor-driven light + subtle 3D tilt ===================== */
(function () {
  const ft = $('#footer'), gw = $('#gw'); io.observe(gw);
  let vis = false, raf = 0, auto = true, idle, mx = 50, my = 30, tx = 50, ty = 30, rx = 0, ry = 0, trx = 0, tryy = 0;
  ft.addEventListener('pointermove', e => {
    const r = gw.getBoundingClientRect();
    tx = clamp((e.clientX - r.left) / r.width * 100, -20, 120); ty = clamp((e.clientY - r.top) / r.height * 100, -40, 140);
    trx = -(ty - 50) / 50 * 4; tryy = (tx - 50) / 50 * 5; auto = false; clearTimeout(idle); idle = setTimeout(() => auto = true, 2500)
  }, { passive: true });
  function loop(t) {
    if (!vis) { raf = 0; return }
    if (auto) { tx = 50 + 35 * Math.sin(t / 2200); ty = 35 + 15 * Math.cos(t / 3100); trx = 0; tryy = 0 }   // idle: light drifts on its own
    mx += (tx - mx) * .07; my += (ty - my) * .07; rx += (trx - rx) * .07; ry += (tryy - ry) * .07;
    gw.style.setProperty('--gx', mx + '%'); gw.style.setProperty('--gy', my + '%');
    if (!mobile()) gw.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    raf = requestAnimationFrame(loop);
  }
  new IntersectionObserver(es => { vis = es[0].isIntersecting; if (vis && !raf && !reduce) raf = requestAnimationFrame(loop) }).observe(ft);
})();

/* ===================== CURSOR EFFECTS: dot + trailing ring, hover grow, click ripple, sparkle trail, magnetic buttons ===================== */
(function () {
  if (reduce || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;   // desktop mouse only
  const B = document.body, dot = $('#cDot'), ring = $('#cRing'); B.classList.add('has-cursor');
  let x = 0, y = 0, rx = 0, ry = 0, lx = 0, ly = 0, seen = false, mag = null;
  const HOV = 'a,button,.btn,[data-p],.card,.skc,.svc,.pc,.mapbox,.cert,.filters button,.stat,.tech';
  function spark(px, py) {
    const s = document.createElement('i'); s.className = 'spk';
    s.style.left = px + (Math.random() * 16 - 8) + 'px'; s.style.top = py + (Math.random() * 16 - 8) + 'px';
    s.style.background = Math.random() < .5 ? '#a78bfa' : '#60a5fa'; s.style.boxShadow = '0 0 8px currentColor';
    s.addEventListener('animationend', () => s.remove()); B.appendChild(s)
  }
  addEventListener('pointermove', e => {
    x = e.clientX; y = e.clientY; if (!seen) { seen = true; rx = x; ry = y; lx = x; ly = y; B.classList.add('cur-on'); requestAnimationFrame(follow) }
    dot.style.transform = `translate(${x}px,${y}px)`;
    if (Math.hypot(x - lx, y - ly) > 38) { lx = x; ly = y; spark(x, y) }
    ring.classList.toggle('hov', !!e.target.closest(HOV));
    ring.classList.toggle('txt', !!e.target.closest('input,textarea'));
    const b = e.target.closest('.btn,.soc a,#top');
    if (b) { const r = b.getBoundingClientRect(); b.style.translate = `${(x - r.left - r.width / 2) * .25}px ${(y - r.top - r.height / 2) * .25}px`; if (mag && mag !== b) mag.style.translate = ''; mag = b }
    else if (mag) { mag.style.translate = ''; mag = null }
  }, { passive: true });
  function follow() { rx += (x - rx) * .18; ry += (y - ry) * .18; ring.style.transform = `translate(${rx}px,${ry}px)`; requestAnimationFrame(follow) }
  addEventListener('pointerdown', e => {
    ring.classList.add('down');
    const r = document.createElement('span'); r.className = 'rip'; r.style.left = e.clientX + 'px'; r.style.top = e.clientY + 'px';
    r.addEventListener('animationend', () => r.remove()); B.appendChild(r)
  });
  addEventListener('pointerup', () => ring.classList.remove('down'));
  document.addEventListener('mouseleave', () => B.classList.remove('cur-on'));
  document.addEventListener('mouseenter', () => seen && B.classList.add('cur-on'));
  const mb = $('#mapbox');   // hide custom cursor while the map is being dragged (iframe swallows pointer events)
  if (mb) new MutationObserver(() => B.classList.toggle('map-live', mb.classList.contains('active'))).observe(mb, { attributes: true, attributeFilter: ['class'] });
})();


/* ===================== STAGGERED ENTRANCE for timeline cards ===================== */
$$('#expTl .ti,#eduTl .ti').forEach((el, i) => el.style.transitionDelay = (i % 3) * 120 + 'ms');

/* ===================== INITIAL LOADING SCREEN (shown once, ~0.9-1.5s) ===================== */
(function () {
  const L = $('#loader'), B = document.body, t0 = performance.now(), MIN = 1100, MAX = 1500; let gone = false;
  if (!L) { B.classList.remove('loading'); return }
  function hide() { if (gone) return; gone = true; L.classList.add('done'); B.classList.remove('loading'); setTimeout(() => L.remove(), 800) }
  function ready() { setTimeout(hide, Math.max(0, MIN - (performance.now() - t0))) }
  if (reduce) { hide(); return }
  addEventListener('pointermove', e => { if (gone) return; L.style.setProperty('--px', (e.clientX / innerWidth - .5).toFixed(3)); L.style.setProperty('--py', (e.clientY / innerHeight - .5).toFixed(3)) }, { passive: true });
  if (document.readyState === 'complete') ready(); else addEventListener('load', ready, { once: true });
  setTimeout(hide, MAX);                       // never keep the visitor waiting longer than MAX
})();

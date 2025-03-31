  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        // entry.target.classList.remove("fade-effect");
      } else {
        entry.target.classList.remove("in-view");
        // entry.target.classList.add("fade-effect");
      }
    });
  });
  
  document.querySelectorAll(".fade-effect").forEach((element) => {
    observer1.observe(element);
  });
  


  document.querySelectorAll(".fade1-effect").forEach((element) => {
    observer1.observe(element);
  });
  
  
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
  
    // Scale effect for navbar only
    let scaleValue = Math.max(1 - scrollY / 2000, 0.9);
    let navbar = document.querySelector(".navbar");
    navbar.style.transform = `scale(${scaleValue})`;
    navbar.style.transition = "transform 0.1s ease-out, backdrop-filter 0.3s ease-out, background-color 0.3s ease-out";
    
  
    let blurValue = Math.min(scrollY / 50, 10); // Adjust blur intensity based on scroll
    if(scrollY < 200)
      {
        blurValue = 0; // Adjust blur intensity based on scroll
      navbar.style.backdropFilter = `blur(${blurValue}px)`;
      navbar.style.backgroundColor = `rgba(255, 255, 255, 1)`;
      
      }
      else{
    navbar.style.backdropFilter = `blur(${blurValue}px)`;
    navbar.style.backgroundColor = `rgba(255, 255, 255, ${Math.min(scrollY / 200, 0.8)})`; // Adjust background opacity
      }
    
  });
  
  
  


  
  
  
  
  // Eye movement functionality (unchanged)
  const eyes = document.querySelectorAll('.eye');
  const anchor = document.getElementById('anchor');
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width / 2;
  const anchorY = rekt.top + rekt.height / 2;
  
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    eyes.forEach(eye => {
      eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    });
  });
  
  function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * 180 / Math.PI;
    return deg;
  }
  
  // Branch data (unchanged)
  // Enhanced Branch Data with Additional Key Points
  const branches = {
      CSE: {
        name: "Computer Science & Engineering (CSE)",
        description: "CSE focuses on the design, development, and maintenance of software and hardware systems. It builds a strong foundation in both theoretical and practical aspects of computing.",
        keySubjects: [
          "Programming & Data Structures",
          "Algorithms & Computational Theory",
          "Operating Systems & Databases",
          "Software Engineering",
          "Computer Networks",
          "Artificial Intelligence & Machine Learning"
        ],
        skillsRequired: [
          "Problem-solving & Logical Thinking",
          "Coding & Software Development",
          "Mathematical & Analytical Skills",
          "Adaptability & Continuous Learning"
        ],
        futureScope: [
          "Rapid growth in AI, ML, and Big Data",
          "Expanding cybersecurity requirements",
          "Increasing demand for cloud computing",
          "Opportunities in research and emerging technologies"
        ],
        careers: [
          "Software Engineer/Developer",
          "Data Scientist/Analyst",
          "Cybersecurity Specialist",
          "AI/ML Engineer",
          "Cloud Solutions Architect"
        ]
      },
      ENTC: {
        name: "Electronics and Telecommunication Engineering (ENTC)",
        description: "ENTC is centered around electronic circuits, communication systems, and signal processing. It prepares graduates to tackle modern challenges in telecommunication and embedded systems.",
        keySubjects: [
          "Electronic Circuits & Devices",
          "Signal Processing",
          "VLSI Design",
          "Communication Systems & Wireless Networks",
          "Embedded Systems"
        ],
        skillsRequired: [
          "Analytical & Mathematical Skills",
          "Circuit Design & Troubleshooting",
          "Problem-solving in Electronics",
          "Technical Communication"
        ],
        futureScope: [
          "5G & Next-Gen Wireless Communication",
          "Internet of Things (IoT) & Embedded Systems",
          "Advanced VLSI & Semiconductor Technologies",
          "Satellite Communication & RADAR Systems"
        ],
        careers: [
          "Telecommunication Engineer",
          "Embedded Systems Developer",
          "VLSI Design Engineer",
          "Network Security Analyst",
          "Signal Processing Engineer"
        ]
      },
      CIVIL: {
        name: "Civil Engineering",
        description: "Civil Engineering involves planning, designing, constructing, and maintaining infrastructure. It is key to developing sustainable and resilient communities through smart urban planning.",
        keySubjects: [
          "Structural Engineering",
          "Geotechnical Engineering",
          "Transportation Engineering",
          "Hydraulics & Water Resources",
          "Environmental Engineering"
        ],
        skillsRequired: [
          "Analytical & Critical Thinking",
          "Design & Project Management",
          "Attention to Detail",
          "Effective Communication & Collaboration"
        ],
        futureScope: [
          "Sustainable & Smart Infrastructure",
          "Urban Planning & Smart Cities",
          "Earthquake-Resistant Construction",
          "Innovations in Water Resource Management"
        ],
        careers: [
          "Structural Engineer",
          "Construction Manager",
          "Geotechnical Engineer",
          "Transportation Engineer",
          "Urban Planner"
        ]
      },
      MECHANICAL: {
        name: "Mechanical Engineering",
        description: "Mechanical Engineering encompasses the design, analysis, manufacturing, and maintenance of mechanical systems. It applies principles of physics and materials science to solve real-world engineering problems.",
        keySubjects: [
          "Thermodynamics & Fluid Mechanics",
          "Mechanics of Materials",
          "Dynamics & Control Systems",
          "Robotics & Automation",
          "Manufacturing Processes"
        ],
        skillsRequired: [
          "Problem-solving & Analytical Skills",
          "Technical Drawing & CAD",
          "Understanding of Material Properties",
          "Design & Simulation Proficiency"
        ],
        futureScope: [
          "Robotics & Automation",
          "Renewable Energy & Sustainability",
          "Advanced Manufacturing & 3D Printing",
          "Innovations in Automobile & Aerospace Engineering"
        ],
        careers: [
          "Automotive Engineer",
          "Robotics Engineer",
          "Thermal Systems Engineer",
          "Manufacturing Engineer",
          "Aerospace Engineer"
        ]
      },
      AEROSPACE: {
        name: "Aerospace Engineering",
        description: "Aerospace Engineering focuses on the design, development, and maintenance of aircraft, spacecraft, and defense systems. It merges theoretical principles with practical applications in flight and space exploration.",
        keySubjects: [
          "Aerodynamics & Flight Mechanics",
          "Propulsion Systems",
          "Avionics & Control Systems",
          "Materials Science for Aerospace",
          "Spacecraft Design"
        ],
        skillsRequired: [
          "Strong Analytical & Mathematical Skills",
          "Problem-solving in High-Precision Environments",
          "Understanding of Aerodynamics",
          "Research & Technical Proficiency"
        ],
        futureScope: [
          "Space Exploration & Satellite Technology",
          "Advanced Propulsion & Hypersonic Technologies",
          "Unmanned Aerial Vehicles (Drones)",
          "Innovations in Commercial & Defense Aerospace"
        ],
        careers: [
          "Aerospace Engineer",
          "Avionics Engineer",
          "Flight Test Engineer",
          "Satellite Systems Engineer",
          "Defense Aerospace Specialist"
        ]
      }
    };
    
  
  // Display branch information with Tailwind styling
  function showBranchInfo(branchId) {
    const branchInfoDiv = document.getElementById("branch-info");
    
    if (branchId && branches[branchId]) {
      const branch = branches[branchId];
      branchInfoDiv.innerHTML = `
    <div class="text-center flex flex-col mx-40  border-2 p-6 rounded-lg shadow-lg  dark:bg-gray-900  bg-white">
      
      <h1 class="text-3xl font-bold dark:text-gray-200 text-blue-700 mb-6">${branch.name}</h1>
      
      <h2 class="text-xl font-semibold dark:text-gray-400 text-gray-700 mb-1">Branch Description</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-4">${branch.description}</p>
      <hr class="border-t border-dotted border-gray-300 my-2">
      
      <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-400 mb-1">Key Subjects</h2>
      <ul class="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-400">
      ${branch.keySubjects.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <hr class="border-t border-dotted border-gray-300 my-2">
      
      <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-400 mb-1">Skills Required</h2>
      <ul class="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-400">
      ${branch.skillsRequired.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <hr class="border-t border-dotted border-gray-300 my-2">
      
      <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-400 mb-1">Future Scope</h2>
      <ul class="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-400">
      ${branch.futureScope.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <hr class="border-t border-dotted border-gray-300 my-2">
      
      <h2 class="text-xl font-semibold text-gray-700 dark:text-gray-400 mb-1">Career Opportunities</h2>
      <ul class="list-disc pl-5 text-gray-600">
      ${branch.careers.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <hr class="border-t border-dotted border-gray-300 my-2">
    </div>
  `;
  
      branchInfoDiv.style.display = "block";
      
      // Remove previous animation class (if any) to replay the effect
      branchInfoDiv.classList.remove("section-expand");
      // Force reflow to restart the animation
      void branchInfoDiv.offsetWidth;
      // Add the animation class to trigger the container expansion
      branchInfoDiv.classList.add("section-expand");
  
      // Scroll smoothly to the branch-info section
        
    
    } else {
     branchInfoDiv.innerHTML = `<h1 class="text-2xl text-center font-bold text-gray-800 mb-2">Branch Not Found</h1>`;
      branchInfoDiv.style.display = "block";
      
    }
    setTimeout(() => {
      window.scrollTo({ top:  branchInfoDiv.offsetTop - 50, behavior: "smooth" });
  }, 900); // Adjust delay if needed
  }
  
  // Event listener for datalist input
  document.getElementById('branch-input').addEventListener('change', function() {
    const branchId = this.value; // Get the input branch 
    showBranchInfo(branchId);
  });
  
      
  


  // IntersectionObserver for visibility animations
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && (entry.target.id !== "branch-info" || entry.target.style.display === "block")) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });
    
    // Observe only the branch-info element
    const branchInfo = document.getElementById("branch-info");
    branchInfo.classList.add("hidden");
    observer.observe(branchInfo);
       
  
   // Slider functionality
  //  const next = document.querySelector('.next');
  
  //  next.addEventListener('click', function() {
    //   let items = document.querySelectorAll('.item');
    //      if (items.length > 0) {
      //          document.querySelector('.slide').appendChild(items[0]);
      //          updateSlider();
      //         }
      //         items.style.transition = 'transform 0.9s ease-in-out, opacity 0.3s ease-in-out';
      //       });
      
      
      
      
      
      
      // Function to handle slider clicks (next functionality)
      const slide = document.querySelector('.slide');
      const prev = document.querySelector('.prev');
  
  
      prev.addEventListener('click', function(e) {
        e.stopPropagation();
        console.log('Previous button clicked!');
        const items = document.querySelectorAll('.item');
        if (items.length > 0) {
            slide.prepend(items[items.length - 1]);
            updateSlider();
        }
    });
    
    slide.addEventListener('click', function() {
        console.log('Slide clicked!');
        const items = document.querySelectorAll('.item');
        if (items.length > 0) {
            slide.appendChild(items[0]);
            updateSlider();
        }
    });
  

  
   // Update slider content visibility
   function updateSlider() {
       let items = document.querySelectorAll('.item');
       items.forEach((item, index) => {
           const content = item.querySelector('.content');
           if (index === 0) {
               item.classList.remove('w-48', 'h-72', 'rounded-lg', 'shadow-lg');
               item.classList.add('w-full', 'h-full');
               item.style.left = '0';
               content.classList.remove('opacity-0');
               content.classList.add('opacity-100');
           } else {
               item.classList.remove('w-full', 'h-full');
               item.classList.add('w-48', 'h-72', 'rounded-lg', 'shadow-lg');
               item.style.left = `calc(50% + ${index * 224 - 24}px)`;
               content.classList.remove('opacity-100');
               content.classList.add('opacity-0');
           }
       });
   }
  
   // Initialize slider
   updateSlider();
  
   // Add functionality to "See More" buttons
   document.querySelectorAll('.content button').forEach(button => {
       button.addEventListener('click', function() {
           const url = this.getAttribute('data-url');
           if (url) {
               window.location.href = url;
           }
       });
   });

   

   const toggle = document.getElementById("toggle");
   const html = document.documentElement;  // Change from document.body to document.documentElement
   
   toggle.addEventListener("click", () => {
       toggle.classList.toggle("active");
       html.classList.toggle("dark");  // Apply dark class to <html> instead of <body>
       if(html.classList.contains("dark")) {
         localStorage.setItem("theme","dark");
       } else {
         localStorage.setItem("theme","light");
       }
   });


   if (localStorage.getItem("theme") === "dark") {
     html.classList.add("dark"); // Apply dark mode
     toggle.classList.add("active"); // Keep the toggle in dark mode position
    // html.style.backgroundColor = "black";
    
    // document.getElementById("unlist").style.color = "black";
   }
 





  //  let join = document.getElementById("join");
   let box = document.getElementById("box");
  //  join.addEventListener("click", () => {
  //    join.classList.toggle("menu-open");
  //    nav.classList.toggle("hidden");  
  //    if (join.classList.contains("menu-open")) {  
  //      nav.classList.remove("hidden");
  //    } 
  //  });

  let guid = document.getElementById("guid");
  let com = document.getElementById("com");



  

  let navCom = document.getElementById("nav-com");
  navCom.addEventListener("click", () => { 
    // navCom.classList.toggle("menu-open");
    //  box.classList.toggle("hidden");  
    
       
       guid.classList.add("hidden"); 
       com.classList.remove("hidden");
      
 
   });



   let navGuid = document.getElementById("nav-guid");
   navGuid.addEventListener("click", () => { 
    // navGuid.classList.toggle("menu-open");
    //  box.classList.toggle("hidden");  
     
       
       com.classList.add("hidden"); 
       guid.classList.remove("hidden"); 
     
   });



  let combtn = document.getElementById("community-btn");
  combtn.addEventListener("click", () => { 
   combtn.classList.toggle("menu-open");
    box.classList.toggle("hidden");  
    if (combtn.classList.contains("menu-open")) { 
      box.classList.remove("hidden");
      guid.classList.add("hidden"); 
      com.classList.remove("hidden");
    } 

  });

   let guidbtn = document.getElementById("guidance-btn");
   guidbtn.addEventListener("click", () => { 
    guidbtn.classList.toggle("menu-open");
     box.classList.toggle("hidden");  
     if (guidbtn.classList.contains("menu-open")) { 
       box.classList.remove("hidden");
       com.classList.add("hidden"); 
       guid.classList.remove("hidden"); 
     } 
   });

   let Navbtn = document.getElementById("nav-btn");
   Navbtn.addEventListener("click", (e) => {
      // e.stopPropagation();
      if(e.target.id === "nav-guid")
      {
        navGuid.style.textDecoration = "underline";
        navCom.style.textDecoration  = "none";
     
      }
      if(e.target.id === "nav-com")
      {
        navCom.style.textDecoration = "underline";
        navGuid.style.textDecoration = "none";
  
      }
 
   });


   const chatBox = document.getElementById("chat");
   const userInput = document.getElementById("userInput");
   
   const responses = {
       greetings: [
           "Hey there, future engineer! 👋",
           "Hi! Ready to talk engineering? 🔧",
           "Hello! How can I assist you on your engineering journey? 😊"
       ],
       branches: [
           "Computer Science & Engineering (CSE) is all about coding and tech innovation. Check out the Branches section! 💻",
           "Electronics & Telecommunication (ENTC) connects the world with communication systems. Explore the Branches section! 📡",
           "Civil Engineering builds the future—bridges, roads, and more. Learn more in the Branches section! 🏗️",
           "Mechanical Engineering is for designing machines and systems. See the Branches section! 🔧",
           "Aerospace Engineering takes you to the skies and beyond. Discover more in the Branches section! 🚀"
       ],
       studyTips: [
           "Break your study sessions into chunks with breaks—try the Pomodoro Technique! ⏰",
           "Practice solving problems daily; it’s key to mastering engineering concepts. 📚",
           "Join a study group to reinforce your understanding by teaching others. 👥",
           "Use online resources like Khan Academy for extra practice. 🌐",
           "Create mind maps to visualize tough engineering topics. 🗺️"
       ],
       careerAdvice: [
           "CSE opens doors to software development, AI, and cybersecurity careers. 🌍",
           "Mechanical engineers can work in robotics, automotive, or renewable energy. 🚗✈️",
           "Civil engineers shape cities with infrastructure and urban planning. 🌆",
           "ENTC grads excel in telecommunications and embedded systems. 📶",
           "Aerospace engineers design aircraft and spacecraft—sky’s the limit! 🛰️"
       ],
       examPrep: [
           "Start early with a study schedule—cramming won’t cut it for engineering exams! 🗓️",
           "Focus on understanding concepts, not just memorizing formulas. 🧠",
           "Take mock tests to get comfortable with exam pressure. 📝",
           "Review past papers to spot common question types. 📄",
           "Stay healthy—good sleep and nutrition boost your exam performance. 🥗💤"
       ],
       motivation: [
           "Engineering is tough, but you’ve got this! Keep pushing forward. 💪",
           "Every great engineer started where you are—believe in yourself! 🌟",
           "Mistakes are part of learning. Keep going—you’re on the right track! 🚀",
           "You’re not alone; countless students have conquered these challenges. 🤝",
           "Celebrate every step forward—progress is success! 🎉"
       ],
       general: [
           "Interesting question! Tell me more about what you’re curious about. 🤔",
           "I’m here to help with engineering studies and careers. What’s on your mind? 🛠️",
           "Let’s explore engineering together—what do you want to know? 🔍",
           "Engineering is full of exciting possibilities. What interests you? 💡",
           "Ask me anything about your engineering journey! 📘"
       ]
   };
   
   function getResponse(message) {
       const text = message.toLowerCase();
   
       if (text.includes("hi") || text.includes("hello") || text.includes("hey")) {
           return randomResponse(responses.greetings);
       } else if (text.includes("branch") || text.includes("field") || text.includes("discipline")) {
           return randomResponse(responses.branches);
       } else if (text.includes("study") || text.includes("learn") || text.includes("tips")) {
           return randomResponse(responses.studyTips);
       } else if (text.includes("career") || text.includes("job") || text.includes("future")) {
           return randomResponse(responses.careerAdvice);
       } else if (text.includes("exam") || text.includes("test") || text.includes("prepare")) {
           return randomResponse(responses.examPrep);
       } else if (text.includes("motivate") || text.includes("encourage") || text.includes("stress")) {
           return randomResponse(responses.motivation);
       } else if (text.includes("cse") || text.includes("computer science") || text.includes("computer engineering")) {
           return responses.branches[0]; // CSE
       } else if (text.includes("entc") || text.includes("electronics and telecommunication") || text.includes("electronics")) {
           return responses.branches[1]; // ENTC
       } else if (text.includes("civil") || text.includes("civil engineering")) {
           return responses.branches[2]; // Civil
       } else if (text.includes("mechanical") || text.includes("mech") || text.includes("mechanical engineering")) {
           return responses.branches[3]; // Mechanical
       } else if (text.includes("aerospace") || text.includes("aero") || text.includes("aerospace engineering")) {
           return responses.branches[4]; // Aerospace
       } else {
           return randomResponse(responses.general);
       }
   }
   
   function randomResponse(array) {
       return array[Math.floor(Math.random() * array.length)];
   }

function sendMessage() {
    const userText = userInput.value.trim();
    if (userText === "") return;

    addMessage(userText, "user");
    setTimeout(() => {
        const botResponse = getResponse(userText);
        addMessage(botResponse, "bot");
    }, 500);

    userInput.value = "";
}

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    if (sender === "user") {
        messageDiv.classList.add("user");
    }
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}



// function toggleChat() {
//     var chatbox = document.getElementById("guid");
//     if (chatbox.classList.contains("show")) {
//         chatbox.classList.remove("show");
//         setTimeout(() => { chatbox.style.display = "none"; }, 300);
//     } else {
//         chatbox.style.display = "block";
//         setTimeout(() => { chatbox.classList.add("show"); }, 10);
//     }
// }



// toggle on communitu and guid





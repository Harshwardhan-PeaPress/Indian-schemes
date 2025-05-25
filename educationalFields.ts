import React from 'react';

export const educationalFieldsData = [
  {
    id: "field-1",
    name: "Arts and Humanities",
    description: "Study of human culture, history, languages, philosophy, and creative arts",
    relatedOccupations: [
      {
        id: "occ-1",
        name: "Content Writer",
        description: "Creates written content for various media including websites, blogs, social media, and print publications",
        averageSalary: "₹3,00,000 - ₹8,00,000 per annum",
        growthProspect: "High Growth",
        requiredQualifications: [
          {
            level: "Bachelor's Degree",
            name: "BA in English/Journalism/Mass Communication",
            duration: "3 years",
            eligibility: "10+2 with minimum 50% marks",
            institutions: ["Delhi University", "Jadavpur University", "Christ University"]
          },
          {
            level: "Master's Degree (Optional)",
            name: "MA in English/Journalism/Mass Communication",
            duration: "2 years",
            eligibility: "Bachelor's degree with minimum 55% marks",
            institutions: ["Jamia Millia Islamia", "IIMC", "Symbiosis Institute of Media and Communication"]
          },
          {
            level: "Certificate Course (Optional)",
            name: "Content Writing and Digital Marketing",
            duration: "3-6 months",
            eligibility: "No specific requirements",
            institutions: ["Digital Academy India", "Content Writing Institute", "Online platforms like Coursera"]
          }
        ]
      },
      {
        id: "occ-2",
        name: "Teacher/Professor",
        description: "Educates students in schools, colleges, or universities in subjects related to arts and humanities",
        averageSalary: "₹4,00,000 - ₹12,00,000 per annum",
        growthProspect: "Stable Growth",
        requiredQualifications: [
          {
            level: "Bachelor's Degree",
            name: "BA in relevant subject",
            duration: "3 years",
            eligibility: "10+2 with minimum 50% marks",
            institutions: ["Delhi University", "Banaras Hindu University", "University of Mumbai"]
          },
          {
            level: "Master's Degree",
            name: "MA in relevant subject",
            duration: "2 years",
            eligibility: "Bachelor's degree with minimum 55% marks",
            institutions: ["Jawaharlal Nehru University", "University of Hyderabad", "Jadavpur University"]
          },
          {
            level: "B.Ed (For School Teaching)",
            name: "Bachelor of Education",
            duration: "2 years",
            eligibility: "Bachelor's degree with minimum 50% marks",
            institutions: ["Regional Institutes of Education", "NCERT", "State Universities"]
          },
          {
            level: "PhD (For College/University Teaching)",
            name: "Doctorate in relevant subject",
            duration: "3-5 years",
            eligibility: "Master's degree with minimum 55% marks, NET/JRF qualification preferred",
            institutions: ["IITs", "Central Universities", "State Universities"]
          }
        ]
      },
      {
        id: "occ-3",
        name: "Translator/Interpreter",
        description: "Converts written or spoken content from one language to another while maintaining meaning and context",
        averageSalary: "₹3,00,000 - ₹10,00,000 per annum",
        growthProspect: "Medium Growth",
        requiredQualifications: [
          {
            level: "Bachelor's Degree",
            name: "BA in Languages/Linguistics",
            duration: "3 years",
            eligibility: "10+2 with minimum 50% marks",
            institutions: ["Jawaharlal Nehru University", "English and Foreign Languages University", "Central Institute of Hindi"]
          },
          {
            level: "Master's Degree",
            name: "MA in Translation Studies/Linguistics",
            duration: "2 years",
            eligibility: "Bachelor's degree with minimum 55% marks",
            institutions: ["Jawaharlal Nehru University", "English and Foreign Languages University", "University of Hyderabad"]
          },
          {
            level: "Certificate/Diploma",
            name: "Professional Translation and Interpretation",
            duration: "6 months - 1 year",
            eligibility: "Proficiency in at least two languages",
            institutions: ["National Translation Mission", "Indian Institute of Foreign Languages", "Bharatiya Vidya Bhavan"]
          }
        ]
      }
    ]
  },
  {
    id: "field-2",
    name: "Science",
    description: "Study of the natural world through observation, experimentation, and theoretical explanation",
    relatedOccupations: [
      {
        id: "occ-4",
        name: "Research Scientist",
        description: "Conducts experiments and investigations to advance knowledge in specific scientific fields",
        averageSalary: "₹5,00,000 - ₹15,00,000 per annum",
        growthProspect: "High Growth",
        requiredQualifications: [
          {
            level: "Bachelor's Degree",
            name: "BSc in relevant science subject",
            duration: "3 years",
            eligibility: "10+2 with Science stream, minimum 60% marks",
            institutions: ["IISc Bangalore", "St. Stephen's College", "Loyola College"]
          },
          {
            level: "Master's Degree",
            name: "MSc in specialized field",
            duration: "2 years",
            eligibility: "Bachelor's degree with minimum 60% marks",
            institutions: ["IISc Bangalore", "IITs", "TIFR"]
          },
          {
            level: "PhD",
            name: "Doctorate in specialized field",
            duration: "3-5 years",
            eligibility: "Master's degree with minimum 60% marks, GATE/NET qualification",
            institutions: ["IISc Bangalore", "IITs", "CSIR Labs"]
          }
        ]
      },
      {
        id: "occ-5",
        name: "Data Scientist",
        description: "Analyzes and interprets complex data to help organizations make better decisions",
        averageSalary: "₹6,00,000 - ₹20,00,000 per annum",
        growthProspect: "Very High Growth",
        requiredQualifications: [
          {
            level: "Bachelor's Degree",
            name: "BTech/BSc in Computer Science/Statistics/Mathematics",
            duration: "3-4 years",
            eligibility: "10+2 with PCM, minimum 60% marks",
            institutions: ["IITs", "NITs", "BITS Pilani"]
          },
          {
            level: "Master's Degree",
            name: "MTech/MSc in Data Science/AI/Machine Learning",
            duration: "2 years",
            eligibility: "Bachelor's degree with minimum 60% marks",
            institutions: ["IITs", "IIITs", "IISc Bangalore"]
          },
          {
            level: "Certification Courses",
            name: "Specialized Data Science Certifications",
            duration: "3-12 months",
            eligibility: "Basic programming knowledge",
            institutions: ["Coursera", "edX", "Udacity", "upGrad"]
          }
        ]
      },
      {
        id: "occ-6",
        name: "Environmental Scientist",
        description: "Studies environmental conditions and develops solutions to environmental problems",
        averageSalary: "₹4,00,000 - ₹12,00,000 per annum",
        growthProspect: "Medium Growth",
        requiredQualifications: [
          {
            level: "Bachelor's Degree",
            name: "BSc in Environmental Science/Ecology",
            duration: "3 years",
            eligibility: "10+2 with Science stream, minimum 55% marks",
            institutions: ["Delhi University", "TERI School of Advanced Studies", "Banaras Hindu University"]
          },
          {
            level: "Master's Degree",
            name: "MSc in Environmental Science/Ecology",
            duration: "2 years",
            eligibility: "Bachelor's degree with minimum 55% marks",
            institutions: ["JNU", "TERI School of Advanced Studies", "IIT Bombay"]
          },
          {
            level: "PhD (Optional)",
            name: "Doctorate in Environmental Science",
            duration: "3-5 years",
            eligibility: "Master's degree with minimum 60% marks",
            institutions: ["IISc Bangalore", "JNU", "TERI School of Advanced Studies"]
          }
        ]
      }
    ]
  },
  {
    id: "field-3",
    name: "Engineering",
    description: "Application of scientific and mathematical principles to design, build, and maintain structures, machines, systems, and processes",
    relatedOccupations: [
      {
        id: "occ-7",
        name: "Software Engineer",
        description: "Designs, develops, and maintains software applications and systems",
        averageSalary: "₹5,00,000 - ₹25,00,000 per annum",
        growthProspect: "Very High Growth",
        requiredQualifications: [
          {
            level: "Bachelor's Degree",
            name: "BTech/BE in Computer Science/IT",
            duration: "4 years",
            eligibility: "10+2 with PCM, minimum 60% marks, entrance exam",
            institutions: ["IITs", "NITs", "BITS Pilani"]
          },
          {
            level: "Master's Degree (Optional)",
            name: "MTech/MS in Computer Science/Software Engineering",
            duration: "2 years",
            eligibility: "Bachelor's degree with minimum 60% marks, GATE score",
            institutions: ["IITs", "IIITs", "IISc Bangalore"]
          },
          {
            level: "Certification Courses",
            name: "Specialized Programming/Technology Certifications",
            duration: "3-6 months",
            eligibility: "Basic programming knowledge",
            institutions: ["Coursera", "Udemy", "edX", "Microsoft/AWS/Google Certifications"]
          }
        ]
      },
      {
        id: "occ-8",
        name: "Civil Engineer",
        description: "Designs, constructs, and maintains infrastructure projects and systems",
        averageSalary: "₹4,00,000 - ₹15,00,000 per annum",
        growthProspect: "Medium Growth",
        requiredQualifications: [
          {
            level: "Bachelor's Degree",
            name: "BTech/BE in Civil Engineering",
            duration: "4 years",
            eligibility: "10+2 with PCM, minimum 60% marks, entrance exam",
            institutions: ["IITs", "NITs", "College of Engineering Pune"]
          },
          {
            level: "Master's Degree (Optional)",
            name: "MTech/ME in Structural/Transportation/Environmental Engineering",
            duration: "2 years",
            eligibility: "Bachelor's degree with minimum 60% marks, GATE score",
            institutions: ["IITs", "NITs", "BITS Pilani"]
          },
          {
            level: "Professional Registration",
            name: "Registration with Institution of Engineers",
            duration: "After graduation",
            eligibility: "Engineering degree and experience",
            institutions: ["Institution of Engineers (India)"]
          }
        ]
      },
      {
        id: "occ-9",
        name: "Electrical Engineer",
        description: "Designs, develops, and tests electrical equipment and systems",
        averageSalary: "₹4,00,000 - ₹18,00,000 per annum",
        growthProspect: "Medium Growth",
        requiredQualifications: [
          {
            level: "Bachelor's Degree",
            name: "BTech/BE in Electrical Engineering",
            duration: "4 years",
            eligibility: "10+2 with PCM, minimum 60% marks, entrance exam",
            institutions: ["IITs", "NITs", "BITS Pilani"]
          },
          {
            level: "Master's Degree (Optional)",
            name: "MTech/ME in Power Systems/Control Systems",
            duration: "2 years",
            eligibility: "Bachelor's degree with minimum 60% marks, GATE score",
            institutions: ["IITs", "NITs", "IISc Bangalore"]
          },
          {
            level: "Professional Registration",
            name: "Registration with Institution of Engineers",
            duration: "After graduation",
            eligibility: "Engineering degree and experience",
            institutions: ["Institution of Engineers (India)"]
          }
        ]
      }
    ]
  },
  {
    id: "field-4",
    name: "Medicine",
    description: "Study and practice of diagnosing, treating, and preventing diseases and injuries in humans",
    relatedOccupations: [
      {
        id: "occ-10",
        name: "Doctor/Physician",
        description: "Diagnoses and treats illnesses, injuries, and other health conditions",
        averageSalary: "₹8,00,000 - ₹30,00,000 per annum",
        growthProspect: "High Growth",
        requiredQualifications: [
          {
            level: "Bachelor's Degree",
            name: "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
            duration: "5.5 years (including internship)",
            eligibility: "10+2 with PCB, minimum 50% marks, NEET qualification",
            institutions: ["AIIMS", "Christian Medical College", "JIPMER"]
          },
          {
            level: "Post-Graduate Degree (Optional)",
            name: "MD/MS (Doctor of Medicine/Master of Surgery)",
            duration: "3 years",
            eligibility: "MBBS degree, NEET-PG qualification",
            institutions: ["AIIMS", "PGI Chandigarh", "CMC Vellore"]
          },
          {
            level: "Super-Specialization (Optional)",
            name: "DM/MCh (Doctorate of Medicine/Magister Chirurgiae)",
            duration: "3 years",
            eligibility: "MD/MS degree, entrance examination",
            institutions: ["AIIMS", "PGI Chandigarh", "SGPGI Lucknow"]
          }
        ]
      },
      {
        id: "occ-11",
        name: "Nurse",
        description: "Provides care for patients in hospitals, clinics, and other healthcare settings",
        averageSalary: "₹3,00,000 - ₹8,00,000 per annum",
        growthProspect: "High Growth",
        requiredQualifications: [
          {
            level: "Diploma",
            name: "GNM (General Nursing and Midwifery)",
            duration: "3.5 years",
            eligibility: "10+2 with any stream, minimum 45% marks",
            institutions: ["Government Nursing Schools", "Private Nursing Institutes"]
          },
          {
            level: "Bachelor's Degree",
            name: "BSc Nursing",
            duration: "4 years",
            eligibility: "10+2 with PCB, minimum 45% marks",
            institutions: ["AIIMS College of Nursing", "CMC Vellore", "RAK College of Nursing"]
          },
          {
            level: "Master's Degree (Optional)",
            name: "MSc Nursing",
            duration: "2 years",
            eligibility: "BSc Nursing with minimum 55% marks",
            institutions: ["AIIMS", "CMC Vellore", "NIMHANS Bangalore"]
          }
        ]
      },
      {
        id: "occ-12",
        name: "Pharmacist",
        description: "Prepares and dispenses medications, and provides information on their proper use",
        averageSalary: "₹3,00,000 - ₹10,00,000 per annum",
        growthProspect: "Medium Growth",
        requiredQualifications: [
          {
            level: "Diploma",
            name: "D.Pharm (Diploma in Pharmacy)",
            duration: "2 years",
            eligibility: "10+2 with PCB/PCM, minimum 50% marks",
            institutions: ["Government Pharmacy Colleges", "Private Pharmacy Institutes"]
          },
          {
            level: "Bachelor's Degree",
            name: "B.Pharm (Bachelor of Pharmacy)",
            duration: "4 years",
            eligibility: "10+2 with PCB/PCM, minimum 50% marks",
            institutions: ["NIPER", "Jamia Hamdard", "Manipal College of Pharmaceutical Sciences"]
          },
          {
            level: "Maste
(Content truncated due to size limit. Use line ranges to read in chunks)
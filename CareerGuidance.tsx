import React, { useState } from 'react';
import { FormData } from './UserInputForm';

interface EducationalField {
  id: string;
  name: string;
  description: string;
  relatedOccupations: Occupation[];
}

interface Occupation {
  id: string;
  name: string;
  description: string;
  averageSalary: string;
  growthProspect: string;
  requiredQualifications: Qualification[];
}

interface Qualification {
  level: string;
  name: string;
  duration: string;
  eligibility: string;
  institutions: string[];
}

interface CareerGuidanceProps {
  formData: FormData;
  educationalFields: EducationalField[];
}

const CareerGuidance: React.FC<CareerGuidanceProps> = ({ formData, educationalFields }) => {
  const [selectedField, setSelectedField] = useState<EducationalField | null>(null);
  const [selectedOccupation, setSelectedOccupation] = useState<Occupation | null>(null);

  // Find the selected educational field based on form data
  React.useEffect(() => {
    if (formData.educationalField) {
      const field = educationalFields.find(f => f.name === formData.educationalField);
      if (field) {
        setSelectedField(field);
        setSelectedOccupation(null);
      }
    }
  }, [formData.educationalField, educationalFields]);

  const handleOccupationSelect = (occupation: Occupation) => {
    setSelectedOccupation(occupation);
  };

  const filterOccupationsByInterests = (occupations: Occupation[]): Occupation[] => {
    if (!formData.interests || formData.interests.length === 0) {
      return occupations;
    }

    // Simple filtering based on occupation description containing interest keywords
    return occupations.filter(occupation => {
      return formData.interests?.some(interest => 
        occupation.description.toLowerCase().includes(interest.toLowerCase())
      );
    });
  };

  return (
    <div className="career-guidance-container">
      {!selectedField ? (
        <div className="no-field-selected">
          <h2>Career Guidance</h2>
          <p>Please select an educational field to see related occupations.</p>
        </div>
      ) : (
        <div className="career-guidance-content">
          <div className="field-info">
            <h2>Career Pathways for {selectedField.name}</h2>
            <p>{selectedField.description}</p>
          </div>

          <div className="career-guidance-panels">
            <div className="occupations-panel">
              <h3>Related Occupations</h3>
              {filterOccupationsByInterests(selectedField.relatedOccupations).length === 0 ? (
                <p>No occupations match your selected interests. Try selecting different interests.</p>
              ) : (
                <div className="occupation-list">
                  {filterOccupationsByInterests(selectedField.relatedOccupations).map(occupation => (
                    <div 
                      key={occupation.id} 
                      className={`occupation-card ${selectedOccupation?.id === occupation.id ? 'selected' : ''}`}
                      onClick={() => handleOccupationSelect(occupation)}
                    >
                      <h4>{occupation.name}</h4>
                      <p className="occupation-description">{occupation.description.substring(0, 100)}...</p>
                      <div className="occupation-meta">
                        <span className="salary-range">{occupation.averageSalary}</span>
                        <span className={`growth-prospect ${occupation.growthProspect.toLowerCase().includes('high') ? 'high' : occupation.growthProspect.toLowerCase().includes('medium') ? 'medium' : 'low'}`}>
                          {occupation.growthProspect}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="education-pathway-panel">
              {selectedOccupation ? (
                <>
                  <h3>Education Pathway for {selectedOccupation.name}</h3>
                  <div className="education-pathway">
                    <div className="pathway-timeline">
                      {selectedOccupation.requiredQualifications.map((qualification, index) => (
                        <div key={index} className="qualification-step">
                          <div className="timeline-marker">{index + 1}</div>
                          <div className="qualification-card">
                            <h4>{qualification.name}</h4>
                            <p className="qualification-level">{qualification.level}</p>
                            <p className="qualification-duration">{qualification.duration}</p>
                            <div className="qualification-details">
                              <h5>Eligibility</h5>
                              <p>{qualification.eligibility}</p>
                              <h5>Notable Institutions</h5>
                              <ul className="institutions-list">
                                {qualification.institutions.map((institution, i) => (
                                  <li key={i}>{institution}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="no-occupation-selected">
                  <h3>Education Pathway</h3>
                  <p>Select an occupation to view the required education pathway.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerGuidance;

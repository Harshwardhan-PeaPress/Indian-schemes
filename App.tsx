import React, { useState, useEffect } from 'react';
import './App.css';
import UserInputForm, { FormData } from './components/UserInputForm';
import ResultsDisplay from './components/ResultsDisplay';
import CareerGuidance from './components/CareerGuidance';
import { 
  getRecommendedSchemes, 
  getRecommendedJobs, 
  convertSchemesData, 
  generateSampleJobs 
} from './lib/recommendationLogic';
import { educationalFieldsData } from './data/educationalFields';

function App() {
  const [activeTab, setActiveTab] = useState<'schemes' | 'career'>('schemes');
  const [schemesFormData, setSchemesFormData] = useState<FormData | null>(null);
  const [careerFormData, setCareerFormData] = useState<FormData | null>(null);
  const [schemes, setSchemes] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [centralSchemesData, setCentralSchemesData] = useState<string>('');
  const [stateSchemesData, setStateSchemesData] = useState<string>('');

  // Load schemes data
  useEffect(() => {
    const loadSchemesData = async () => {
      try {
        // In a real app, these would be fetched from API or files
        // For demo, we'll use placeholder data
        const centralData = `# Central Government Schemes in India

## Latest Government Schemes
1. Agnipath Defence Policy Reform - Recruitment scheme for Indian youth to serve in the Armed Forces
2. PM Poshan Shakti Nirman Abhiyaan - Formerly Mid-Day Meal Scheme, provides hot meals to school children
3. Startup India Seed Fund Scheme (SISFS) - Financial assistance for startups for proof of concept, prototype development

## Major Social Security Schemes
1. Atmanirbhar Bharat Abhiyan - Self-reliant India initiative
2. Pradhan Mantri Jan Dhan Yojana (PMJDY) - Financial inclusion program
3. Make in India - Initiative to encourage companies to manufacture in India
4. Swachh Bharat Mission - Clean India Mission
5. Beti Bachao Beti Padhao - Save girl child, educate girl child`;

        const stateData = `# State Government Schemes in India

## Andhra Pradesh
1. YSR Jagananna Saswatha Bhoomi Hakku-Bhoo Rakshana Scheme - Land protection and ownership rights program
2. YSR Rythu Bharosa - Financial assistance to farmers
3. Jagananna Vidya Deevena - Full fee reimbursement scheme for students

## Gujarat
1. Mukhyamantri Kisan Sahay Yojana - Crop assistance scheme for farmers
2. Atmanirbhar Gujarat Sahay Yojana - Financial assistance for MSMEs
3. Mukhyamantri Mahila Utkarsh Yojana - Interest-free loans for women`;

        setCentralSchemesData(centralData);
        setStateSchemesData(stateData);

        // Convert markdown data to structured format
        const allSchemes = convertSchemesData(centralData, stateData);
        setSchemes(allSchemes);

        // Generate sample jobs data
        const jobsData = generateSampleJobs();
        setJobs(jobsData);
      } catch (error) {
        console.error('Error loading schemes data:', error);
      }
    };

    loadSchemesData();
  }, []);

  const handleSchemesFormSubmit = (data: FormData) => {
    setLoading(true);
    setSchemesFormData(data);
    
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleCareerFormSubmit = (data: FormData) => {
    setLoading(true);
    setCareerFormData(data);
    
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const recommendedSchemes = schemesFormData ? getRecommendedSchemes(schemesFormData, schemes) : [];
  const recommendedJobs = schemesFormData ? getRecommendedJobs(schemesFormData, jobs) : [];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Government Schemes & Career Guidance Tool</h1>
        <div className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === 'schemes' ? 'active' : ''}`}
            onClick={() => setActiveTab('schemes')}
          >
            Government Schemes & Jobs
          </button>
          <button 
            className={`tab-button ${activeTab === 'career' ? 'active' : ''}`}
            onClick={() => setActiveTab('career')}
          >
            Career Guidance
          </button>
        </div>
      </header>

      <main className="app-content">
        {activeTab === 'schemes' ? (
          <div className="schemes-tab">
            {!schemesFormData ? (
              <UserInputForm onSubmit={handleSchemesFormSubmit} formType="schemes" />
            ) : loading ? (
              <div className="loading-indicator">
                <p>Finding suitable schemes and jobs...</p>
              </div>
            ) : (
              <div className="results-container">
                <button 
                  className="back-button"
                  onClick={() => setSchemesFormData(null)}
                >
                  ← Back to Form
                </button>
                <ResultsDisplay formData={schemesFormData} schemes={recommendedSchemes} />
              </div>
            )}
          </div>
        ) : (
          <div className="career-tab">
            {!careerFormData ? (
              <UserInputForm onSubmit={handleCareerFormSubmit} formType="career" />
            ) : loading ? (
              <div className="loading-indicator">
                <p>Finding career pathways...</p>
              </div>
            ) : (
              <div className="results-container">
                <button 
                  className="back-button"
                  onClick={() => setCareerFormData(null)}
                >
                  ← Back to Form
                </button>
                <CareerGuidance formData={careerFormData} educationalFields={educationalFieldsData} />
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>© 2025 Government Schemes & Career Guidance Tool</p>
      </footer>
    </div>
  );
}

export default App;

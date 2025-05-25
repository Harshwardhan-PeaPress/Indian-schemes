import React, { useState } from 'react';
import '../App.css';

interface UserInputFormProps {
  onSubmit: (formData: FormData) => void;
  formType: 'schemes' | 'career';
}

export interface FormData {
  gender?: string;
  age?: number;
  education?: string;
  occupation?: string;
  location?: string;
  income?: string;
  category?: string;
  educationalField?: string;
  currentEducationLevel?: string;
  interests?: string[];
}

const UserInputForm: React.FC<UserInputFormProps> = ({ onSubmit, formType }) => {
  const [formData, setFormData] = useState<FormData>({
    gender: '',
    age: undefined,
    education: '',
    occupation: '',
    location: '',
    income: '',
    category: '',
    educationalField: '',
    currentEducationLevel: '',
    interests: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        interests: [...(formData.interests || []), name],
      });
    } else {
      setFormData({
        ...formData,
        interests: (formData.interests || []).filter(interest => interest !== name),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleReset = () => {
    setFormData({
      gender: '',
      age: undefined,
      education: '',
      occupation: '',
      location: '',
      income: '',
      category: '',
      educationalField: '',
      currentEducationLevel: '',
      interests: [],
    });
  };

  const educationOptions = [
    'Below 10th',
    '10th Pass',
    '12th Pass',
    'Diploma',
    'Graduate',
    'Post Graduate',
    'Doctorate',
    'Other'
  ];

  const occupationOptions = [
    'Student',
    'Unemployed',
    'Self-employed',
    'Farmer',
    'Government Employee',
    'Private Sector Employee',
    'Homemaker',
    'Retired',
    'Other'
  ];

  const stateOptions = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Jammu and Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry'
  ];

  const categoryOptions = [
    'General',
    'SC',
    'ST',
    'OBC',
    'EWS',
    'Other'
  ];

  const educationalFieldOptions = [
    'Arts and Humanities',
    'Science',
    'Commerce',
    'Engineering',
    'Medicine',
    'Law',
    'Agriculture',
    'Management',
    'Education',
    'Computer Applications',
    'Fine Arts',
    'Vocational Training',
    'Other'
  ];

  const currentEducationLevelOptions = [
    'High School',
    'Higher Secondary',
    'Undergraduate',
    'Graduate',
    'Postgraduate',
    'Doctorate',
    'Other'
  ];

  const interestOptions = [
    'Technology',
    'Healthcare',
    'Education',
    'Finance',
    'Agriculture',
    'Public Service',
    'Defense',
    'Research',
    'Entrepreneurship',
    'Arts and Culture',
    'Sports',
    'Environment'
  ];

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="input-form">
        <h2>{formType === 'schemes' ? 'Find Government Schemes & Jobs' : 'Explore Career Pathways'}</h2>
        
        {formType === 'schemes' ? (
          <>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={formData.gender === 'Other'}
                    onChange={handleChange}
                  />
                  Other
                </label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                min="0"
                max="120"
                value={formData.age || ''}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="education">Educational Qualification</label>
              <select
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Education</option>
                {educationOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="occupation">Occupation</label>
              <select
                id="occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Occupation</option>
                {occupationOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location (State/UT)</label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select State/UT</option>
                {stateOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="income">Monthly Income (Optional)</label>
              <select
                id="income"
                name="income"
                value={formData.income}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Income Range</option>
                <option value="Below 10000">Below ₹10,000</option>
                <option value="10000-25000">₹10,000 - ₹25,000</option>
                <option value="25000-50000">₹25,000 - ₹50,000</option>
                <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                <option value="Above 100000">Above ₹1,00,000</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Category</option>
                {categoryOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="educationalField">Field of Education</label>
              <select
                id="educationalField"
                name="educationalField"
                value={formData.educationalField}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Field</option>
                {educationalFieldOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="currentEducationLevel">Current Education Level</label>
              <select
                id="currentEducationLevel"
                name="currentEducationLevel"
                value={formData.currentEducationLevel}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Level</option>
                {currentEducationLevelOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Areas of Interest (Select multiple)</label>
              <div className="checkbox-group">
                {interestOptions.map(option => (
                  <label key={option} className="checkbox-label">
                    <input
                      type="checkbox"
                      name={option}
                      checked={formData.interests?.includes(option) || false}
                      onChange={handleCheckboxChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            {formType === 'schemes' ? 'Find Schemes' : 'Explore Careers'}
          </button>
          <button type="button" onClick={handleReset} className="btn btn-secondary">
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInputForm;

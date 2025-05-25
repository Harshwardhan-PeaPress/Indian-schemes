import React, { useState } from 'react';
import { FormData } from './UserInputForm';

interface SchemeResult {
  id: string;
  name: string;
  description: string;
  ministry: string;
  type: 'Central' | 'State';
  state?: string;
  eligibility: {
    gender?: string[];
    minAge?: number;
    maxAge?: number;
    education?: string[];
    occupation?: string[];
    location?: string[];
    income?: string;
    category?: string[];
  };
  benefits: string;
  applicationProcess?: string;
  documents?: string[];
  website?: string;
}

interface ResultsDisplayProps {
  formData: FormData;
  schemes: SchemeResult[];
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ formData, schemes }) => {
  const [selectedScheme, setSelectedScheme] = useState<SchemeResult | null>(null);
  const [filters, setFilters] = useState({
    type: 'All',
    ministry: 'All',
  });
  const [sortBy, setSortBy] = useState('relevance');

  // Filter schemes based on user input and selected filters
  const filteredSchemes = schemes.filter(scheme => {
    // Filter by type (Central/State)
    if (filters.type !== 'All' && scheme.type !== filters.type) {
      return false;
    }

    // Filter by ministry
    if (filters.ministry !== 'All' && scheme.ministry !== filters.ministry) {
      return false;
    }

    return true;
  });

  // Sort schemes based on selected sort option
  const sortedSchemes = [...filteredSchemes].sort((a, b) => {
    if (sortBy === 'alphabetical') {
      return a.name.localeCompare(b.name);
    }
    // Default is relevance, which is pre-calculated
    return 0;
  });

  // Get unique ministries for filter dropdown
  const ministries = ['All', ...new Set(schemes.map(scheme => scheme.ministry))];

  const handleViewDetails = (scheme: SchemeResult) => {
    setSelectedScheme(scheme);
  };

  const handleCloseDetails = () => {
    setSelectedScheme(null);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="results-container">
      <div className="filters-section">
        <h3>Filters</h3>
        <div className="filter-group">
          <label htmlFor="type">Scheme Type</label>
          <select
            id="type"
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="filter-control"
          >
            <option value="All">All Types</option>
            <option value="Central">Central</option>
            <option value="State">State</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="ministry">Ministry/Department</label>
          <select
            id="ministry"
            name="ministry"
            value={filters.ministry}
            onChange={handleFilterChange}
            className="filter-control"
          >
            {ministries.map(ministry => (
              <option key={ministry} value={ministry}>{ministry}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="sortBy">Sort By</label>
          <select
            id="sortBy"
            name="sortBy"
            value={sortBy}
            onChange={handleSortChange}
            className="filter-control"
          >
            <option value="relevance">Relevance</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      <div className="results-section">
        <h2>Recommended Schemes</h2>
        {sortedSchemes.length === 0 ? (
          <div className="no-results">
            <p>No schemes match your criteria. Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="results-grid">
            {sortedSchemes.map(scheme => (
              <div key={scheme.id} className="result-card">
                <h3>{scheme.name}</h3>
                <p className="scheme-type">{scheme.type} {scheme.state && `- ${scheme.state}`}</p>
                <p className="scheme-ministry">{scheme.ministry}</p>
                <p className="scheme-description">{scheme.description.substring(0, 100)}...</p>
                <button 
                  className="btn btn-view-details" 
                  onClick={() => handleViewDetails(scheme)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedScheme && (
        <div className="scheme-detail-modal">
          <div className="scheme-detail-content">
            <button className="close-button" onClick={handleCloseDetails}>×</button>
            <h2>{selectedScheme.name}</h2>
            <div className="scheme-detail-header">
              <span className="scheme-type-badge">{selectedScheme.type}</span>
              {selectedScheme.state && <span className="scheme-state-badge">{selectedScheme.state}</span>}
            </div>
            <div className="scheme-detail-tabs">
              <div className="tab-content">
                <h3>Overview</h3>
                <p>{selectedScheme.description}</p>
                <h4>Benefits</h4>
                <p>{selectedScheme.benefits}</p>

                <h3>Eligibility</h3>
                <ul className="eligibility-list">
                  {selectedScheme.eligibility.gender && (
                    <li><strong>Gender:</strong> {selectedScheme.eligibility.gender.join(', ')}</li>
                  )}
                  {(selectedScheme.eligibility.minAge !== undefined || selectedScheme.eligibility.maxAge !== undefined) && (
                    <li>
                      <strong>Age:</strong> 
                      {selectedScheme.eligibility.minAge !== undefined ? ` ${selectedScheme.eligibility.minAge}` : ' Any'} 
                      {selectedScheme.eligibility.maxAge !== undefined ? ` to ${selectedScheme.eligibility.maxAge} years` : '+ years'}
                    </li>
                  )}
                  {selectedScheme.eligibility.education && (
                    <li><strong>Education:</strong> {selectedScheme.eligibility.education.join(', ')}</li>
                  )}
                  {selectedScheme.eligibility.occupation && (
                    <li><strong>Occupation:</strong> {selectedScheme.eligibility.occupation.join(', ')}</li>
                  )}
                  {selectedScheme.eligibility.location && (
                    <li><strong>Location:</strong> {selectedScheme.eligibility.location.join(', ')}</li>
                  )}
                  {selectedScheme.eligibility.income && (
                    <li><strong>Income Criteria:</strong> {selectedScheme.eligibility.income}</li>
                  )}
                  {selectedScheme.eligibility.category && (
                    <li><strong>Category:</strong> {selectedScheme.eligibility.category.join(', ')}</li>
                  )}
                </ul>

                {selectedScheme.applicationProcess && (
                  <>
                    <h3>Application Process</h3>
                    <p>{selectedScheme.applicationProcess}</p>
                  </>
                )}

                {selectedScheme.documents && selectedScheme.documents.length > 0 && (
                  <>
                    <h3>Required Documents</h3>
                    <ul>
                      {selectedScheme.documents.map((doc, index) => (
                        <li key={index}>{doc}</li>
                      ))}
                    </ul>
                  </>
                )}

                {selectedScheme.website && (
                  <div className="scheme-actions">
                    <a 
                      href={selectedScheme.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Visit Official Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsDisplay;

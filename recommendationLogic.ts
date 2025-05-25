import React, { useState, useEffect } from 'react';
import { FormData } from './UserInputForm';

// Recommendation logic helper functions
const matchesGender = (schemeGender: string[] | undefined, userGender: string | undefined): boolean => {
  if (!schemeGender || !userGender) return true;
  return schemeGender.includes(userGender) || schemeGender.includes('Any');
};

const matchesAge = (minAge: number | undefined, maxAge: number | undefined, userAge: number | undefined): boolean => {
  if (!userAge) return true;
  if (minAge !== undefined && userAge < minAge) return false;
  if (maxAge !== undefined && userAge > maxAge) return false;
  return true;
};

const matchesEducation = (schemeEducation: string[] | undefined, userEducation: string | undefined): boolean => {
  if (!schemeEducation || !userEducation) return true;
  return schemeEducation.includes(userEducation) || schemeEducation.includes('Any');
};

const matchesOccupation = (schemeOccupation: string[] | undefined, userOccupation: string | undefined): boolean => {
  if (!schemeOccupation || !userOccupation) return true;
  return schemeOccupation.includes(userOccupation) || schemeOccupation.includes('Any');
};

const matchesLocation = (schemeLocation: string[] | undefined, userLocation: string | undefined): boolean => {
  if (!schemeLocation || !userLocation) return true;
  return schemeLocation.includes(userLocation) || schemeLocation.includes('All India');
};

const matchesIncome = (schemeIncome: string | undefined, userIncome: string | undefined): boolean => {
  if (!schemeIncome || !userIncome) return true;
  
  // Parse income ranges
  const incomeRanges = {
    'Below 10000': { min: 0, max: 10000 },
    '10000-25000': { min: 10000, max: 25000 },
    '25000-50000': { min: 25000, max: 50000 },
    '50000-100000': { min: 50000, max: 100000 },
    'Above 100000': { min: 100000, max: Infinity }
  };
  
  // Simple string matching for now - can be enhanced with actual income range logic
  return true; // Placeholder - implement actual logic based on scheme requirements
};

const matchesCategory = (schemeCategory: string[] | undefined, userCategory: string | undefined): boolean => {
  if (!schemeCategory || !userCategory) return true;
  return schemeCategory.includes(userCategory) || schemeCategory.includes('Any');
};

// Main recommendation function
export const getRecommendedSchemes = (formData: FormData, allSchemes: any[]): any[] => {
  // Filter schemes based on eligibility criteria
  const matchingSchemes = allSchemes.filter(scheme => {
    // Check all eligibility criteria
    const genderMatch = matchesGender(scheme.eligibility.gender, formData.gender);
    const ageMatch = matchesAge(scheme.eligibility.minAge, scheme.eligibility.maxAge, formData.age);
    const educationMatch = matchesEducation(scheme.eligibility.education, formData.education);
    const occupationMatch = matchesOccupation(scheme.eligibility.occupation, formData.occupation);
    const locationMatch = matchesLocation(scheme.eligibility.location, formData.location);
    const incomeMatch = matchesIncome(scheme.eligibility.income, formData.income);
    const categoryMatch = matchesCategory(scheme.eligibility.category, formData.category);
    
    // Scheme is eligible if it matches all criteria
    return genderMatch && ageMatch && educationMatch && occupationMatch && 
           locationMatch && incomeMatch && categoryMatch;
  });
  
  // Calculate relevance score for each matching scheme
  const scoredSchemes = matchingSchemes.map(scheme => {
    let score = 0;
    
    // Add points for exact matches
    if (scheme.eligibility.gender && scheme.eligibility.gender.includes(formData.gender || '')) score += 10;
    if (matchesAge(scheme.eligibility.minAge, scheme.eligibility.maxAge, formData.age)) score += 10;
    if (scheme.eligibility.education && scheme.eligibility.education.includes(formData.education || '')) score += 10;
    if (scheme.eligibility.occupation && scheme.eligibility.occupation.includes(formData.occupation || '')) score += 10;
    if (scheme.eligibility.location && scheme.eligibility.location.includes(formData.location || '')) score += 10;
    if (scheme.eligibility.category && scheme.eligibility.category.includes(formData.category || '')) score += 10;
    
    // Add bonus points for state-specific schemes if user location matches
    if (scheme.type === 'State' && scheme.state === formData.location) score += 15;
    
    // Return scheme with its relevance score
    return { ...scheme, relevanceScore: score };
  });
  
  // Sort by relevance score (highest first)
  return scoredSchemes.sort((a, b) => b.relevanceScore - a.relevanceScore);
};

// Similar function for job recommendations
export const getRecommendedJobs = (formData: FormData, allJobs: any[]): any[] => {
  // Filter jobs based on eligibility criteria (similar to schemes)
  const matchingJobs = allJobs.filter(job => {
    const genderMatch = matchesGender(job.eligibility.gender, formData.gender);
    const ageMatch = matchesAge(job.eligibility.minAge, job.eligibility.maxAge, formData.age);
    const educationMatch = matchesEducation(job.eligibility.education, formData.education);
    
    // Job is eligible if it matches all criteria
    return genderMatch && ageMatch && educationMatch;
  });
  
  // Calculate relevance score for each matching job
  const scoredJobs = matchingJobs.map(job => {
    let score = 0;
    
    // Add points for exact matches
    if (job.eligibility.gender && job.eligibility.gender.includes(formData.gender || '')) score += 10;
    if (matchesAge(job.eligibility.minAge, job.eligibility.maxAge, formData.age)) score += 10;
    if (job.eligibility.education && job.eligibility.education.includes(formData.education || '')) score += 10;
    
    // Add bonus points for location match
    if (job.location === formData.location) score += 15;
    
    // Return job with its relevance score
    return { ...job, relevanceScore: score };
  });
  
  // Sort by relevance score (highest first)
  return scoredJobs.sort((a, b) => b.relevanceScore - a.relevanceScore);
};

// Function to convert markdown scheme data to structured format
export const convertSchemesData = (centralSchemesMarkdown: string, stateSchemesMarkdown: string): any[] => {
  const schemes: any[] = [];
  
  // Process central schemes
  const centralLines = centralSchemesMarkdown.split('\n');
  let currentCategory = '';
  let schemeId = 1;
  
  centralLines.forEach(line => {
    if (line.startsWith('## ')) {
      currentCategory = line.replace('## ', '').trim();
    } else if (line.match(/^\d+\.\s/)) {
      const match = line.match(/^(\d+)\.\s(.*?)(?:\s-\s(.*))?$/);
      if (match) {
        const name = match[2].trim();
        const description = match[3] ? match[3].trim() : `A scheme under ${currentCategory}`;
        
        schemes.push({
          id: `central-${schemeId++}`,
          name,
          description,
          ministry: currentCategory,
          type: 'Central',
          eligibility: {
            gender: ['Male', 'Female', 'Other'],
            location: ['All India']
          },
          benefits: description,
          applicationProcess: 'Visit the official website for application details.',
          documents: ['Identity Proof', 'Address Proof', 'Other relevant documents as specified'],
          website: ''
        });
      }
    }
  });
  
  // Process state schemes
  const stateLines = stateSchemesMarkdown.split('\n');
  let currentState = '';
  
  stateLines.forEach(line => {
    if (line.startsWith('## ')) {
      currentState = line.replace('## ', '').trim();
    } else if (line.match(/^\d+\.\s/)) {
      const match = line.match(/^(\d+)\.\s(.*?)(?:\s-\s(.*))?$/);
      if (match) {
        const name = match[2].trim();
        const description = match[3] ? match[3].trim() : `A state scheme from ${currentState}`;
        
        schemes.push({
          id: `state-${schemeId++}`,
          name,
          description,
          ministry: `${currentState} State Government`,
          type: 'State',
          state: currentState,
          eligibility: {
            gender: ['Male', 'Female', 'Other'],
            location: [currentState]
          },
          benefits: description,
          applicationProcess: 'Contact your local government office for application details.',
          documents: ['Identity Proof', 'Address Proof', 'Residence Proof', 'Other relevant documents as specified'],
          website: ''
        });
      }
    }
  });
  
  return schemes;
};

// Sample jobs data generator
export const generateSampleJobs = (): any[] => {
  return [
    {
      id: 'job-1',
      title: 'Junior Engineer',
      department: 'Public Works Department',
      type: 'Central',
      description: 'Engineering position responsible for infrastructure development and maintenance',
      eligibility: {
        gender: ['Male', 'Female', 'Other'],
        minAge: 21,
        maxAge: 30,
        education: ['Graduate'],
        specialization: ['Engineering']
      },
      selectionProcess: 'Written examination followed by interview',
      salary: '₹35,000 - ₹45,000 per month',
      applicationProcess: 'Apply through the official recruitment portal'
    },
    {
      id: 'job-2',
      title: 'Primary School Teacher',
      department: 'Department of Education',
      type: 'State',
      state: 'Maharashtra',
      description: 'Teaching position for primary education in government schools',
      eligibility: {
        gender: ['Male', 'Female', 'Other'],
        minAge: 21,
        maxAge: 35,
        education: ['Graduate'],
        specialization: ['Education']
      },
      selectionProcess: 'Written test and teaching demonstration',
      salary: '₹25,000 - ₹35,000 per month',
      applicationProcess: 'Apply through state education department'
    },
    {
      id: 'job-3',
      title: 'Staff Nurse',
      department: 'Ministry of Health and Family Welfare',
      type: 'Central',
      description: 'Nursing position in government hospitals',
      eligibility: {
        gender: ['Male', 'Female', 'Other'],
        minAge: 20,
        maxAge: 35,
        education: ['Diploma', 'Graduate'],
        specialization: ['Nursing']
      },
      selectionProcess: 'Written examination and interview',
      salary: '₹30,000 - ₹40,000 per month',
      applicationProcess: 'Apply through the official recruitment portal'
    },
    {
      id: 'job-4',
      title: 'Agricultural Extension Officer',
      department: 'Department of Agriculture',
      type: 'State',
      state: 'Punjab',
      description: 'Providing technical guidance to farmers on agricultural practices',
      eligibility: {
        gender: ['Male', 'Female', 'Other'],
        minAge: 21,
        maxAge: 35,
        education: ['Graduate'],
        specialization: ['Agriculture']
      },
      selectionProcess: 'Written examination and interview',
      salary: '₹30,000 - ₹40,000 per month',
      applicationProcess: 'Apply through state agriculture department'
    },
    {
      id: 'job-5',
      title: 'Bank Probationary Officer',
      department: 'Public Sector Banks',
      type: 'Central',
      description: 'Entry-level management position in public sector banks',
      eligibility: {
        gender: ['Male', 'Female', 'Other'],
        minAge: 20,
        maxAge: 30,
        education: ['Graduate'],
        specialization: ['Any']
      },
      selectionProcess: 'Preliminary exam, main exam, and interview',
      salary: '₹40,000 - ₹50,000 per month',
      applicationProcess: 'Apply through IBPS or SBI recruitment portal'
    }
  ];
};

import React, { useState } from "react";
import styles from "./Jobs.module.scss";
import { jobOptions, salaryOptions, dateOptions, jobData } from "./jobsdata";

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState('');
  const [selectedSalary, setSelectedSalary] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const filteredJobs = jobData.filter(job => {
    return (
      (selectedJob ? job.title === selectedJob : true) &&
      (selectedSalary ? job.salary === selectedSalary : true) &&
      (selectedDate ? job.date === selectedDate : true)
    );
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Join Our Team of <span>Cybersecurity <br /> Innovators</span>
      </h1>
      <p className={styles.subtitle}>We are looking for talented individuals to join our team.</p>
      <div className={styles.selectContainer}>
        <select className={styles.select} onChange={(e) => setSelectedJob(e.target.value)}>
          <option value="">Job Title</option>
          {jobOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <select className={styles.select} onChange={(e) => setSelectedSalary(e.target.value)}>
          <option value="">Salary Range</option>
          {salaryOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <select className={styles.select} onChange={(e) => setSelectedDate(e.target.value)}>
          <option value="">Posted Date</option>
          {dateOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <section className={styles.jobsSection}>
        <div className={styles.jobsContainer}>
          {filteredJobs.map(job => (
            <div key={job.id} className={styles.jobBox}>
              <div className={styles.jobDate}>{job.date}</div>
              <h2 className={styles.jobTitle}>{job.title}</h2>
              <p className={styles.jobDescription}>{job.description}</p>
              <div className={styles.jobDetails}>
                <div className={styles.jobDetailBox}>{job.detail1}</div>
                <div className={styles.jobDetailBox}>{job.detail2}</div>
                <div className={styles.jobDetailBox}>{job.detail3}</div>
              </div>
              <button className={styles.applyButton}>Apply</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Jobs;
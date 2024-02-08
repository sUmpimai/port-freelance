import React, { useEffect, useState } from 'react';
import { Project } from './Project';
import { projectAPI } from './projectAPI';
import ProjectList from './ProjectList';
import Footer from '../footer/Footer';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        const data = await projectAPI.get(currentPage);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects((projects) => [...projects, ...data]);
        }
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  return (
    <>
      <div className='max-w-7xl mx-auto py-28'>
        <div className='lg:px-8 mx-4 lg:mx-0'>
            <h1 className='text-center text-6xl font-bold text-black pb-20'>Works</h1>

            {error && (
              <div className="row">
                <div className="card large error">
                  <section>
                    <p>
                      <span className="icon-alert inverse"></span>
                      {error}
                    </p>
                  </section>
                </div>
              </div>
            )}

            <ProjectList projects={projects} />

            {!loading && !error && (
              <div className="row">
                <div className="col-sm-12">
                  <div className="button-group fluid">
                    <button className="button default" onClick={handleMoreClick}>
                      More...
                    </button>
                  </div>
                </div>
              </div>
            )}

            {loading && (
              <div className="center-page">
                <span className="spinner primary"></span>
                <p>Loading...</p>
              </div>
            )}
        </div>
      </div>
      <Footer />
    </>

  );
}
import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, Plus, X, Calendar, ExternalLink, Github, Eye, Trash2 } from 'lucide-react';

const PortExpo: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddProject, setShowAddProject] = useState(false);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      date: "2024-08-15",
      type: "Web Application",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "AI-Powered Task Manager",
      description: "Smart task management application that uses machine learning to predict task completion times and optimize productivity.",
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=500&h=300&fit=crop",
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      date: "2024-07-28",
      type: "Machine Learning",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features and progress visualization.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      tags: ["React Native", "Firebase", "Node.js", "Express"],
      date: "2024-06-10",
      type: "Mobile App",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform built on blockchain technology ensuring vote integrity and anonymity.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
      tags: ["Solidity", "Web3.js", "React", "Ethereum"],
      date: "2024-05-22",
      type: "Blockchain",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Weather Analytics Platform",
      description: "Advanced weather prediction system using satellite data and machine learning algorithms for accurate forecasting.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tags: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
      date: "2024-04-18",
      type: "Data Science",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, file sharing, video calls, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      tags: ["Socket.io", "React", "Node.js", "Redis"],
      date: "2024-03-30",
      type: "Web Application",
      demoUrl: "#",
      githubUrl: "#"
    }
  ]);

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    image: '',
    tags: '',
    type: '',
    demoUrl: '',
    githubUrl: ''
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
    project.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      const project = {
        id: Date.now(),
        ...newProject,
        tags: newProject.tags.split(',').map(tag => tag.trim()),
        date: new Date().toISOString().split('T')[0],
        image: newProject.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop"
      };
      setProjects([project, ...projects]);
      setNewProject({
        title: '',
        description: '',
        image: '',
        tags: '',
        type: '',
        demoUrl: '',
        githubUrl: ''
      });
      setShowAddProject(false);
    }
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <style>{`
        @import url('https://api.fonts.coollabs.io/googlefonts/satoshi');
        * {
          font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 backdrop-blur-lg border-b transition-colors duration-300 ${
        darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PE</span>
              </div>
              <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                PortExpo
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowAddProject(true)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <Plus size={16} />
                <span>Add Project</span>
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' 
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PortExpo</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Showcase your projects and explore innovative solutions from creative developers around the world.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`} size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                darkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="p-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.type}
                  </span>
                </div>

                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-md ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`flex items-center justify-between mb-4 text-xs ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {new Date(project.date).toLocaleDateString()}
                  </div>
                </div>

                {/* Project Links Section - Moved to bottom */}
                <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.demoUrl}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center ${
                      darkMode 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <Eye size={14} />
                    <span>Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-1 justify-center ${
                      darkMode 
                        ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                        : 'bg-gray-800 hover:bg-gray-700 text-white'
                    }`}
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              No projects found matching your search.
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className={`border-t mt-16 ${
        darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              PortExpo. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      {/* Add Project Modal */}
      {showAddProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`w-full max-w-md rounded-xl p-6 max-h-[90vh] overflow-y-auto ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Add New Project
              </h3>
              <button
                onClick={() => setShowAddProject(false)}
                className={`p-1 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'
                }`}
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Project title"
                value={newProject.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewProject({...newProject, title: e.target.value})}
                className={`w-full p-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />

              <textarea
                placeholder="Project description"
                value={newProject.description}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewProject({...newProject, description: e.target.value})}
                rows={3}
                className={`w-full p-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />

              <input
                type="text"
                placeholder="Image URL (optional)"
                value={newProject.image}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewProject({...newProject, image: e.target.value})}
                className={`w-full p-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />

              <input
                type="text"
                placeholder="Technologies (comma-separated)"
                value={newProject.tags}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewProject({...newProject, tags: e.target.value})}
                className={`w-full p-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />

              <input
                type="text"
                placeholder="Project type (e.g., Web Application)"
                value={newProject.type}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewProject({...newProject, type: e.target.value})}
                className={`w-full p-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />

              <input
                type="text"
                placeholder="Demo URL"
                value={newProject.demoUrl}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewProject({...newProject, demoUrl: e.target.value})}
                className={`w-full p-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />

              <input
                type="text"
                placeholder="GitHub URL"
                value={newProject.githubUrl}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewProject({...newProject, githubUrl: e.target.value})}
                className={`w-full p-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowAddProject(false)}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProject}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Add Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortExpo;
import React, { useEffect, useState } from 'react'
import './index.css' // Tailwind
import axios from 'axios'
import * as LucideIcons from 'lucide-react'

const Widget = ({ theme = 'dark', username = 'amanbairagi30' }) => {
  const [pullRequests, setPullRequests] = useState([])

  const getPullRequests = async () => {
    try {
      const response = await axios.get(`https://www.mergedandshare.in/api/pr/${username}`)
      if (response.data.success) {
        setPullRequests(response.data.userData.pullRequests)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    getPullRequests()
  }, [])

  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900'

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} p-8`}>
      <h1 className="text-3xl font-bold mb-8 text-center">Pull Requests by {username}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pullRequests.map((pr, index) => (
          <a
            key={index}
            href={pr.prURL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
          >
            <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl ${
              theme === 'dark' ? 'border border-gray-700' : ''
            } h-full flex flex-col`}>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center mb-4">
                  <img src={pr.org.avatar_url} alt={pr.org.name} className="w-10 h-10 rounded-full mr-4" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {pr.org.name}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{pr.userName}</p>
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200 line-clamp-2 flex-grow">
                  {pr.prTitle}
                </h3>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <LucideIcons.GitFork className="w-4 h-4 mr-2" />
                  <span className="truncate">{pr.prURL.split('/')[4]}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <LucideIcons.Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(pr.mergedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    <LucideIcons.GitPullRequest className="w-4 h-4 mr-2" />
                    Merged
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">View on GitHub</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Widget
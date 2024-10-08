import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as LucideIcons from 'lucide-react'
import styles from './index.css';

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

  const bgColor = theme === 'dark' ? 'widget-bg-gray-900' : 'widget-bg-gray-100'
  const textColor = theme === 'dark' ? 'widget-text-white' : 'widget-text-gray-900'
  const cardBgColor = theme === 'dark' ? 'widget-bg-gray-800' : 'widget-bg-white'
  const cardTextColor = theme === 'dark' ? 'widget-text-gray-200' : 'widget-text-gray-800'
  const cardBorderColor = theme === 'dark' ? 'widget-border-gray-700' : 'widget-border-gray-200'

  return (
    <>
      <style>{styles}</style>
      <div className={`widget-min-h-screen ${bgColor} ${textColor} widget-p-8`}>
        <h1 className="widget-text-3xl widget-font-bold widget-mb-8 widget-text-center">Pull Requests by {username}</h1>
        <div className="widget-grid widget-grid-cols-1 md:widget-grid-cols-2 lg:widget-grid-cols-3 widget-gap-8">
          {pullRequests.map((pr, index) => (
            <a
              key={index}
              href={pr.prURL}
              target="_blank"
              rel="noopener noreferrer"
              className="widget-group widget-block widget-h-full"
            >
              <div className={`${cardBgColor} ${cardTextColor} widget-rounded-lg widget-shadow-lg widget-overflow-hidden widget-transform widget-transition-all widget-duration-300 widget-ease-in-out hover:widget-scale-105 hover:widget-shadow-xl widget-border ${cardBorderColor} widget-h-full widget-flex widget-flex-col`}>
                <div className="widget-p-6 widget-flex-grow widget-flex widget-flex-col">
                  <div className="widget-flex widget-items-center widget-mb-4">
                    <img src={pr.org.avatar_url} alt={pr.org.name} className="widget-w-10 widget-h-10 widget-rounded-full widget-mr-4" />
                    <div>
                      <h2 className="widget-text-xl widget-font-semibold group-hover:widget-text-blue-600 dark:group-hover:widget-text-blue-400 widget-transition-colors widget-duration-300">
                        {pr.org.name}
                      </h2>
                      <p className="widget-text-sm widget-text-gray-600 dark:widget-text-gray-400">{pr.userName}</p>
                    </div>
                  </div>
                  <h3 className="widget-text-lg widget-font-medium widget-mb-2 widget-line-clamp-2 widget-flex-grow">
                    {pr.prTitle}
                  </h3>
                  <div className="widget-flex widget-items-center widget-text-sm widget-text-gray-600 dark:widget-text-gray-400 widget-mb-2">
                    <LucideIcons.GitFork className="widget-w-4 widget-h-4 widget-mr-2" />
                    <span className="widget-truncate">{pr.prURL.split('/')[4]}</span>
                  </div>
                  <div className="widget-flex widget-items-center widget-text-sm widget-text-gray-600 dark:widget-text-gray-400 widget-mb-4">
                    <LucideIcons.Calendar className="widget-w-4 widget-h-4 widget-mr-2" />
                    <span>{new Date(pr.mergedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="widget-flex widget-items-center widget-justify-between widget-mt-auto">
                    <span className="widget-inline-flex widget-items-center widget-px-3 widget-py-1 widget-rounded-full widget-text-sm widget-font-medium widget-bg-green-100 widget-text-green-800 dark:widget-bg-green-900 dark:widget-text-green-200">
                      <LucideIcons.GitPullRequest className="widget-w-4 widget-h-4 widget-mr-2" />
                      Merged
                    </span>
                    <span className="widget-text-sm widget-text-gray-500 dark:widget-text-gray-400">View on GitHub</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Widget
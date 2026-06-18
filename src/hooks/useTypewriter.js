import { useState, useEffect } from 'react'

function useTypewriter(text, speed = 75, delay = 0, storageKey = null) {
  const alreadySeen = storageKey ? sessionStorage.getItem(storageKey) : false
  const [displayed, setDisplayed] = useState(alreadySeen ? text : '')

  useEffect(() => {
    if (alreadySeen) return

    let i = 0
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
          if (storageKey) sessionStorage.setItem(storageKey, 'true')
        }
      }, speed)
      return () => clearInterval(interval)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [text, speed, delay, storageKey, alreadySeen])

  return displayed
}

export default useTypewriter
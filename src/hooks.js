import { useEffect, useRef, useState } from 'react'

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* ---------- theme ---------- */
export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'light'
  )

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    if (!prefersReduced()) {
      root.classList.add('theming')
      window.setTimeout(() => root.classList.remove('theming'), 450)
    }
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch (e) {
      /* storage unavailable — theme still applies for the session */
    }
    setTheme(next)
  }

  return [theme, toggle]
}

/* ---------- material ripple ---------- */
export function ripple(e) {
  const host = e.currentTarget
  if (prefersReduced()) return
  const circle = document.createElement('span')
  const rect = host.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  circle.className = 'ripple'
  circle.style.width = circle.style.height = size + 'px'
  circle.style.left = e.clientX - rect.left - size / 2 + 'px'
  circle.style.top = e.clientY - rect.top - size / 2 + 'px'
  host.appendChild(circle)
  window.setTimeout(() => circle.remove(), 600)
}

/* ---------- reveal on scroll ---------- */
export function useInView(options = { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (prefersReduced() || !('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(entry.target)
        }
      })
    }, options)
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return [ref, inView]
}

/* ---------- animated counter ---------- */
export function useCountUp(target, active, duration = 1400) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    if (prefersReduced()) {
      setValue(target)
      return
    }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration])

  return value
}

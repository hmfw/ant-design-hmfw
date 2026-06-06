import { describe, it, expect } from 'vitest'
import {
  searchIcons,
  getIconsByCategory,
  getAllCategories,
  getAllIcons,
} from '../utils'
import { iconMetadata } from '../metadata'

describe('Icon Utils', () => {
  describe('searchIcons', () => {
    it('finds icons by exact name match', () => {
      const results = searchIcons('home')
      expect(results.length).toBeGreaterThan(0)
      expect(results[0].name).toBe('home')
    })

    it('finds icons by keyword', () => {
      const results = searchIcons('house')
      expect(results.length).toBeGreaterThan(0)
      expect(results.some(r => r.name === 'home')).toBe(true)
    })

    it('finds icons by category', () => {
      const results = searchIcons('navigation')
      expect(results.length).toBeGreaterThan(0)
      expect(results.every(r => r.category === 'navigation')).toBe(true)
    })

    it('returns empty array for no matches', () => {
      const results = searchIcons('nonexistent')
      expect(results).toEqual([])
    })

    it('sorts results by relevance score', () => {
      const results = searchIcons('search')
      expect(results.length).toBeGreaterThan(0)
      // First result should have highest score
      if (results.length > 1) {
        expect(results[0].score).toBeGreaterThanOrEqual(results[1].score)
      }
    })

    it('is case insensitive', () => {
      const lower = searchIcons('home')
      const upper = searchIcons('HOME')
      expect(lower.length).toBe(upper.length)
    })
  })

  describe('getIconsByCategory', () => {
    it('returns all icons in a category', () => {
      const results = getIconsByCategory('action')
      expect(results.length).toBeGreaterThan(0)
      expect(results.every(r => r.category === 'action')).toBe(true)
    })

    it('returns empty array for non-existent category', () => {
      const results = getIconsByCategory('nonexistent')
      expect(results).toEqual([])
    })

    it('is case insensitive', () => {
      const lower = getIconsByCategory('action')
      const upper = getIconsByCategory('ACTION')
      expect(lower.length).toBe(upper.length)
    })
  })

  describe('getAllCategories', () => {
    it('returns all unique categories', () => {
      const categories = getAllCategories()
      expect(categories.length).toBeGreaterThan(0)
      expect(new Set(categories).size).toBe(categories.length) // No duplicates
    })

    it('returns sorted categories', () => {
      const categories = getAllCategories()
      const sorted = [...categories].sort()
      expect(categories).toEqual(sorted)
    })

    it('includes expected categories', () => {
      const categories = getAllCategories()
      expect(categories).toContain('action')
      expect(categories).toContain('navigation')
      expect(categories).toContain('feedback')
    })
  })

  describe('getAllIcons', () => {
    it('returns all icons (count matches metadata)', () => {
      const icons = getAllIcons()
      expect(icons.length).toBe(Object.keys(iconMetadata).length)
    })

    it('each icon has required properties', () => {
      const icons = getAllIcons()
      icons.forEach(icon => {
        expect(icon).toHaveProperty('name')
        expect(icon).toHaveProperty('component')
        expect(icon).toHaveProperty('category')
        expect(icon).toHaveProperty('keywords')
        expect(Array.isArray(icon.keywords)).toBe(true)
      })
    })

    it('all components are functions', () => {
      const icons = getAllIcons()
      icons.forEach(icon => {
        expect(typeof icon.component).toBe('function')
      })
    })
  })
})

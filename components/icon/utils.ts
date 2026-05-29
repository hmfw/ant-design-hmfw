import { iconMetadata } from './metadata'
import type { IconComponent } from './types'
import * as Icons from './icons'

export interface IconSearchResult {
  name: string
  component: IconComponent
  category: string
  keywords: string[]
  score: number
}

/**
 * 搜索图标
 * @param query 搜索关键词
 * @returns 匹配的图标列表，按相关度排序
 */
export function searchIcons(query: string): IconSearchResult[] {
  const normalizedQuery = query.toLowerCase().trim()
  const results: IconSearchResult[] = []

  Object.entries(iconMetadata).forEach(([iconName, metadata]) => {
    let score = 0

    // 检查图标名称匹配
    if (iconName.toLowerCase().includes(normalizedQuery)) {
      score += 10
    }

    // 检查关键词匹配
    metadata.keywords.forEach(keyword => {
      if (keyword.toLowerCase() === normalizedQuery) {
        score += 5 // 完全匹配
      } else if (keyword.toLowerCase().includes(normalizedQuery)) {
        score += 3 // 部分匹配
      }
    })

    // 检查分类匹配
    if (metadata.category.toLowerCase().includes(normalizedQuery)) {
      score += 2
    }

    // 检查标签匹配
    if (metadata.tags) {
      metadata.tags.forEach(tag => {
        if (tag.toLowerCase().includes(normalizedQuery)) {
          score += 2
        }
      })
    }

    if (score > 0) {
      // 转换图标名称为组件名称（如 'home' -> 'HomeOutlined'）
      const componentName = iconName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('') + 'Outlined'

      const component = (Icons as any)[componentName] as IconComponent | undefined

      if (component) {
        results.push({
          name: iconName,
          component,
          category: metadata.category,
          keywords: metadata.keywords,
          score,
        })
      }
    }
  })

  // 按相关度排序
  return results.sort((a, b) => b.score - a.score)
}

/**
 * 按分类获取图标
 * @param category 分类名称
 * @returns 该分类下的所有图标
 */
export function getIconsByCategory(category: string): IconSearchResult[] {
  const normalizedCategory = category.toLowerCase()
  const results: IconSearchResult[] = []

  Object.entries(iconMetadata).forEach(([iconName, metadata]) => {
    if (metadata.category.toLowerCase() === normalizedCategory) {
      const componentName = iconName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('') + 'Outlined'

      const component = (Icons as any)[componentName] as IconComponent | undefined

      if (component) {
        results.push({
          name: iconName,
          component,
          category: metadata.category,
          keywords: metadata.keywords,
          score: 0,
        })
      }
    }
  })

  return results
}

/**
 * 获取所有分类
 * @returns 所有分类列表
 */
export function getAllCategories(): string[] {
  const categories = new Set<string>()
  Object.values(iconMetadata).forEach(metadata => {
    categories.add(metadata.category)
  })
  return Array.from(categories).sort()
}

/**
 * 获取所有图标及其元数据
 * @returns 所有图标的完整信息
 */
export function getAllIcons(): IconSearchResult[] {
  const results: IconSearchResult[] = []

  Object.entries(iconMetadata).forEach(([iconName, metadata]) => {
    const componentName = iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Outlined'

    const component = (Icons as any)[componentName] as IconComponent | undefined

    if (component) {
      results.push({
        name: iconName,
        component,
        category: metadata.category,
        keywords: metadata.keywords,
        score: 0,
      })
    }
  })

  return results
}

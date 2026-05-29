export interface BreadcrumbItem {
  title: string
  href?: string
  onClick?: () => void
}

export interface BreadcrumbProps {
  items?: BreadcrumbItem[]
  separator?: string
}

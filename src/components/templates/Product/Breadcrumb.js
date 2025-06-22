import React from 'react'
import Link from 'next/link'

export default function Breadcrumb() {

  const items = [
    { href: `/store`, title: 'فروشگاه' },
    { href: `#`, title: 'دسته بندی' },
    { href: `#`, title: 'محصول' },
  ]

  return (
    <div className="breadcrumb">

      <div className="breadcrumb__item">
        <Link href="/" className="breadcrumb__link">
          <svg className="size-6">
            <use href="#home"></use>
          </svg>
        </Link>
        <svg className="size-4 mx-3 rotate-90">
          <use href="#chevron-down"></use>
        </svg>
      </div>

      {
        items.map((item, index) => (
          <div key={index} className="breadcrumb__item">
            <Link href={item.href} className="breadcrumb__link">
              {item.title}
            </Link>
            <svg className="size-4 mx-3 rotate-90 breadcrumb-icon">
              <use href="#chevron-down"></use>
            </svg>
          </div>
        ))
      }
    </div>
  )
}

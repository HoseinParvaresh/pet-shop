import React from 'react'
import Link from 'next/link'

export default function Breadcrumb() {

  const items = [
    { href: `#`, title: 'دسته بندی' },
    { href: `#`, title: 'محصول' },
  ]

  return (
    <div className="breadcrumb">

      <div className="breadcrumb__item">
        <Link href="/" className="breadcrumb__link">
          <svg className="w-6 h-6">
            <use href="#home"></use>
          </svg>
        </Link>
      </div>
      <div className="breadcrumb__item">
        <Link href={"/store"} className="breadcrumb__link">
          فروشگاه
        </Link>
      </div>
      {
        items.map((item, index) => (
          <div key={index} className="breadcrumb__item">
            <Link href={item.href} className="breadcrumb__link">
              {item.title}
            </Link>
          </div>
        ))
      }
    </div>
  )
}

import React from "react"

type Props = {
  title: string
  subtitle?: string
}

const Heading = ({ title, subtitle }: Props) => {
  return (
    <div className="heading_wrapper">
      <h1 className="heading">{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  )
}

export default Heading

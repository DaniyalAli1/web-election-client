import React from 'react'

interface ElectionCandidatePageProps {
    params: {id: string}
}

export default function ElectionCandidatePage ({params}: ElectionCandidatePageProps) {
  
    const id =params.id;

    return (
    <div>ElectionCandidatePage # {id}</div>
  )
}

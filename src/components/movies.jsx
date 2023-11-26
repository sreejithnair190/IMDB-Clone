import React from 'react'

export default function Movies({movies}) {
  return (
    <div>
        {movies && movies.map(movie => (
            <div key={movie.id}>
                {movie.original_title}
            </div>
        ))}
    </div>
  )
}

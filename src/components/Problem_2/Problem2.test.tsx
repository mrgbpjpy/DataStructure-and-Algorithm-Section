import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Problem2 from './Problem2'
describe('Problem2', () => {
  test('renders the heading', () => {
    render(<Problem2 />)
    expect(screen.getByRole('heading', { name: /problem2/i })).toBeInTheDocument()
  })
})
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Problem1 from './Problem1'
describe('Problem1', () => {
  test('renders the heading', () => {
    render(<Problem1 />)
    expect(screen.getByRole('heading', { name: /problem1/i })).toBeInTheDocument()
  })
})
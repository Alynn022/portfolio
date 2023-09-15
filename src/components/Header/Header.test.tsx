import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('should render a logo', () => {
    render(<Header />)
    expect(screen.getByAltText('L N logo')).toBeInTheDocument()
  })

  it('should render my name and title', () => {
    render(<Header />)
    expect(screen.getByText('Hi, I\'m Lynn')).toBeInTheDocument()
    expect(screen.getByText('Front End Engineer')).toBeInTheDocument()
  })
})
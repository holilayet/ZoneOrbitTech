// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ZoneOrbit title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ZoneOrbit/i);
    expect(titleElement).toBeInTheDocument();
});

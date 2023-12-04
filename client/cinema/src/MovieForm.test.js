import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MovieForm from './MovieForm';

describe('MovieForm component', () => {
  test('renders all input fields', () => {
    render(<MovieForm addMovie={() => {}} />);

    expect(screen.getByLabelText('Title:')).toBeInTheDocument();
    expect(screen.getByLabelText('Director:')).toBeInTheDocument();
    expect(screen.getByLabelText('Description:')).toBeInTheDocument();
    expect(screen.getByLabelText('Duration (minutes):')).toBeInTheDocument();
    expect(screen.getByLabelText('Poster (URL):')).toBeInTheDocument();
  });

  test('submits the form with valid data', () => {
    const addMovieMock = jest.fn();
    render(<MovieForm addMovie={addMovieMock} />);

    
    fireEvent.change(screen.getByLabelText('Title:'), { target: { value: 'Test Movie' } });
    fireEvent.change(screen.getByLabelText('Director:'), { target: { value: 'Test Director' } });
    fireEvent.change(screen.getByLabelText('Description:'), { target: { value: 'Test Description' } });
    fireEvent.change(screen.getByLabelText('Duration (minutes):'), { target: { value: '120' } });
    fireEvent.change(screen.getByLabelText('Poster (URL):'), { target: { value: 'https://example.com/poster.jpg' } });

    fireEvent.click(screen.getByText('Add Movie'));

    expect(addMovieMock).toHaveBeenCalledWith({
      title: 'Test Movie',
      director: 'Test Director',
      description: 'Test Description',
      duration: 120,
      poster: 'https://example.com/poster.jpg'
    });
  });
});

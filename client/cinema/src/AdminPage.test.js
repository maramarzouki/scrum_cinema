import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AdminPage from './AdminPage';

describe('AdminPage component', () => {
  test('displays MovieList and shows MovieForm when Add Movie button is clicked', () => {
    render(<AdminPage />);

    // Check if MovieList is rendered initially
    expect(screen.getByText('List of Movies')).toBeInTheDocument();

    // MovieForm should not be visible initially
    expect(screen.queryByText('Add New Movie')).toBeNull();

    // Click on the Add Movie button in the MovieList
    fireEvent.click(screen.getByText('Add Movie'));

    // MovieForm should be visible after clicking Add Movie button
    expect(screen.getByText('Add New Movie')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

describe('Homepage', () => {
  it('renders the Components', () => {
    render(<Home />);

    const home = screen.getByTestId('home-page');
    expect(home).toBeInTheDocument();
  });
});

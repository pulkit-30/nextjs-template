import { render, screen } from '@testing-library/react';

import About from '@/app/about/page';

describe('Aboutpage', () => {
  it('renders the Components', () => {
    render(<About />);

    const about = screen.getByTestId('about-page');
    expect(about).toBeInTheDocument();
  });
});

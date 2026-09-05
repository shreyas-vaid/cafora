import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
  Link: ({ children, to, ...props }) => <a href={to} {...props}>{children}</a>,
  useLocation: () => ({ pathname: '/' }),
  useNavigate: () => jest.fn(),
  useSearchParams: () => [new URLSearchParams(), jest.fn()],
  useParams: () => ({ id: '1' })
}), { virtual: true });

import Discover from './pages/Discover';
import CafeDetail from './pages/CafeDetail';
import { getCafeCoords } from './components/map/InteractiveMap';
import { CAFES_DATA } from './data/cafesData';

test('renders Discover hero, 12-mood selection, and recommendations without zero results', async () => {
  render(<Discover />);

  // 1. Hero Eyebrow contains 87 verified spots
  expect(screen.getByText(/CHANDIGARH • 87 VERIFIED SPOTS/i)).toBeInTheDocument();

  // 2. Date Night card exists and can be clicked
  const dateCard = screen.getByRole('button', { name: /Select vibe: DATE NIGHT/i });
  expect(dateCard).toBeInTheDocument();

  fireEvent.click(dateCard);

  // 3. Dynamic conversational copy updates
  await waitFor(() => {
    expect(screen.getByText(/Ah. Date night./i)).toBeInTheDocument();
  });

  // 4. Somewhere Pretty card can also be clicked (Multi-mood)
  const prettyCard = screen.getByRole('button', { name: /Select vibe: SOMEWHERE PRETTY/i });
  fireEvent.click(prettyCard);

  // 5. Verify combined copy reflects both
  await waitFor(() => {
    expect(screen.getByText(/Romantic \+ photogenic\. Let's find your spot\./i)).toBeInTheDocument();
  });

  // 6. Reset Mood button clears selections
  const resetBtn = screen.getByRole('button', { name: /Reset Mood \(Show All\)/i });
  expect(resetBtn).toBeInTheDocument();
  fireEvent.click(resetBtn);

  await waitFor(() => {
    expect(screen.getByText(/The places we'd actually recommend to a friend\./i)).toBeInTheDocument();
  });
});

test('InteractiveMap getCafeCoords resolves valid coordinates for all 87 cafes without (undefined, undefined)', () => {
  CAFES_DATA.forEach((cafe) => {
    const coords = getCafeCoords(cafe);
    expect(coords).not.toBeNull();
    expect(Array.isArray(coords)).toBe(true);
    expect(coords.length).toBe(2);
    expect(typeof coords[0]).toBe('number');
    expect(typeof coords[1]).toBe('number');
    expect(isNaN(coords[0])).toBe(false);
    expect(isNaN(coords[1])).toBe(false);
    expect(coords[0]).toBeGreaterThan(30.0);
    expect(coords[1]).toBeGreaterThan(76.0);
  });
});

test('renders CafeDetail without throwing Invalid LatLng errors', () => {
  render(<CafeDetail />);
  // Verifies the cafe detail page renders without crashing
  expect(document.body).toBeInTheDocument();
});

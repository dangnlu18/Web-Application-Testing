import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const wrapper = rtl.render(<App />);
  const h1 = wrapper.queryByText(/batter up/i);
  expect(h1).toBeInTheDocument();
  });

it('renders header with title', () => {
  const wrapper = rtl.render(<App />);
  const h1 = wrapper.queryByText(/batter up/i);
  expect(h1).toBeInTheDocument();
  });

it('renders strikes and balls', () => {
  const wrapper = rtl.render(<App />);
  const balls = wrapper.queryByText(/balls/i);
  const strikes = wrapper.queryByText(/strikes/i);
  expect(balls).toBeInTheDocument();
  expect(strikes).toBeInTheDocument();
  });

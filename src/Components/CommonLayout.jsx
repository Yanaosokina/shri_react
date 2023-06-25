'use client';
import { Provider } from 'react-redux';

import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';

import { store } from '../redux/store.js';

export default function CommonLayout({ children }) {
  return (
    <Provider store={store}>
      <Header />
      <div className='content'>{children}</div>
      <Footer />
    </Provider>
  );
}

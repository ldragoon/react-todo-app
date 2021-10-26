import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Todo from '../components/Todo';

// Note: running cleanup afterEach is done automatically
// in @testing-library/react@9.0.0 or higher.
// Unmount and cleanup DOM after the test is finished
afterEach(cleanup);
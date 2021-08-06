import dotenv from 'dotenv'
dotenv.config();
import React from 'react'
import { render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Posty from './Posty';

describe('tests the JSON parsing ability', () => {
    it('returns JSON data from http CRUD methods', async() => {
        render(<Posty/>)
        screen.getByText('Api-yi-yi');
        const input = await screen.findByLabelText('Enter Request Url below', {name: 'request-sender'});

    })
})


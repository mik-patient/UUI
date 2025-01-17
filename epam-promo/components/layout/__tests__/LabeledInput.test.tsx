import React from 'react';
import { LabeledInput } from '../LabeledInput';
import { TextInput } from '../../inputs';
import { renderWithContextAsync } from '@epam/test-utils';

describe('LabeledInput', () => {
    it('should be rendered correctly', async () => {
        const tree = await renderWithContextAsync(
            <LabeledInput>
                <TextInput value={ null } onValueChange={ () => {} } />
            </LabeledInput>
        );

        expect(tree).toMatchSnapshot();
    });

    it('should be rendered correctly with props', async () => {
        const tree = await renderWithContextAsync(
            <LabeledInput
                label='Test label'
                size='36'
                info='Test'
                isInvalid
                validationMessage='Test invalid message'
                labelPosition='left'
            >
                <TextInput value={ null } onValueChange={ () => {} } />
            </LabeledInput>
        );

        expect(tree).toMatchSnapshot();
    });
});
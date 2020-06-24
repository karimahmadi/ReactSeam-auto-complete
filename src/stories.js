import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// Import our component from this folder
import { AutoComplete } from './';

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area
storiesOf('AutoComplete')
	.add('Default', () => (
		<AutoComplete option={
			{
				label: 'سن',
				items: [
					{value: 10, label: 'ten'},
					{value: 20, label: 'twenty'},
					{value: 30, label: 'thirty'}
				],
				onChange: action('onChange'),
				onInputChange: action('onInputChange'),
			}
		}/>
	))
	.add('Disabled', () => (
		<AutoComplete option={
			{
				label: 'سن',
				items: [
					{value: 10, label: 'ten'},
					{value: 20, label: 'twenty'},
					{value: 30, label: 'thirty'}
				],
				onChange: action('onChange'),
				onInputChange: action('onInputChange'),
			}
		}/>
	))
	.add('Selected Value', () => (
		<AutoComplete option={
			{
				label: 'سن',
				items: [
					{value: 10, label: 'ten'},
					{value: 20, label: 'twenty'},
					{value: 30, label: 'thirty'}
				],
				onChange: action('onChange'),
				onInputChange: action('onInputChange'),
				selectedValue:10
			}
		}/>
	));

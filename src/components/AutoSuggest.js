import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'Alabama',
    year: 1111
  },
  {
    name: 'Arkansas',
    year: 1111
  },
  {
    name: 'American Samoa',
    year: 1111
  },
  {
    name: 'Arizona',
    year: 1111
  },
  {
    name: 'California',
    year: 1111
  },
  {
    name: 'Colorado',
    year: 1111
  },
  {
    name: 'Connecticut',
    year: 1111
  },
  {
    name: 'District of Columbia',
    year: 1111
  },
  {
    name: 'Delaware',
    year: 1111
  },
  {
    name: 'Florida',
    year: 1111
  },
  {
    name: 'Georgia',
    year: 1111
  },
  {
    name: 'Guam',
    year: 1111
  },
  {
    name: 'Hawaii',
    year: 1111
  },
  {
    name: 'Iowa',
    year: 1111
  },
  {
    name: 'Idaho',
    year: 1111
  },
  {
    name: 'Illinois',
    year: 1111
  },
  {
    name: 'Indiana',
    year: 1111
  },
  {
    name: 'Kansas',
    year: 1111
  },
  {
    name: 'Kentucky',
    year: 1111
  },
  {
    name: 'Louisiana',
    year: 1111
  },
  {
    name: 'Massachusetts',
    year: 1111
  },
  {
    name: 'Maryland',
    year: 1111
  },
  {
    name: 'Maine',
    year: 1111
  },
  {
    name: 'Michigan',
    year: 1111
  },
  {
    name: 'Minnesota',
    year: 1111
  },
  {
    name: 'Missouri',
    year: 1111
  },
  {
    name: 'Mississippi',
    year: 1111
  },
  {
    name: 'Montana',
    year: 1111
  },
  {
    name: 'North Carolina',
    year: 1111
  },
  {
    name: 'North Dakota',
    year: 1111
  },
  {
    name: 'Nebraska',
    year: 1111
  },
  {
    name: 'New Hampshire',
    year: 1111
  },
  {
    name: 'New Jersey',
    year: 1111
  },
  {
    name: 'New Mexico',
    year: 1111
  },
  {
    name: 'Nevada',
    year: 1111
  },
  {
    name: 'New York',
    year: 1111
  },
  {
    name: 'Ohio',
    year: 1111
  },
  {
    name: 'Oklahoma',
    year: 1111
  },
  {
    name: 'Oregon',
    year: 1111
  },
  {
    name: 'Pennsylvania',
    year: 1111
  },
  {
    name: 'Puerto Rico',
    year: 1111
  },
  {
    name: 'Rhode Island',
    year: 1111
  },
  {
    name: 'South Carolina',
    year: 1111
  },
  {
    name: 'South Dakota',
    year: 1111
  },
  {
    name: 'Tennessee',
    year: 1111
  },
  {
    name: 'Texas',
    year: 1111
  },
  {
    name: 'Utah',
    year: 1111
  },
  {
    name: 'Virginia',
    year: 1111
  },
  {
    name: 'Virgin Islands',
    year: 1111
  },
  {
    name: 'Vermont',
    year: 1111
  },
  {
    name: 'Washington',
    year: 1111
  },
  {
    name: 'Wisconsin',
    year: 1111
  },
  {
    name: 'West Virginia',
    year: 1111
  },
  {
    name: 'Wyoming',
    year: 1111
  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return <span>{suggestion.name}</span>;
}

class AutoSuggest extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: '',
      value,
      onChange: this.onChange
    };

    return (
      <div>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>
    );
  }
}

export default AutoSuggest;

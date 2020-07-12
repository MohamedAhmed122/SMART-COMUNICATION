import React from "react";
import PlacesAutoCompelete from "react-places-autocomplete";
import { Form, Label, Segment, List } from "semantic-ui-react";
const PlaceInput = ({
  input: { value, onChange, onBlur },
  options,
  onSelect,
  placeholder,
  meta: { touched, error },
}) => (
  <PlacesAutoCompelete
    value={value}
    onChange={onChange}
    searchOptions={options}
    onSelect={onSelect}
  >
    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <Form.Field error={touched && !!error}>
        <input
          placeholder={placeholder}
          {...getInputProps({ placeholder, onBlur })}
        />
        {touched && error ? (
          <Label basic color="red">
            {error}
          </Label>
        ) : null}
        {suggestions.length > 0 ? (
          <Segment style={{
              marginTop:0,
              position: 'absolute',
              zIndex: 1000,
              width:'100%'
          }}>
            {loading ? <div>loading..</div> : null}
            <List selection>
              {suggestions.map((suggestion) => (
                <List.Item  {...getSuggestionItemProps(suggestion)}>
                  <List.Header>
                    {suggestion.formattedSuggestion.mainText}
                  </List.Header>
                  <List.Description>
                    {suggestion.formattedSuggestion.secondaryText}
                  </List.Description>
                </List.Item>
              ))}
            </List>
          </Segment>
        ) : null}
      </Form.Field>
    )}
  </PlacesAutoCompelete>
);
export default PlaceInput;

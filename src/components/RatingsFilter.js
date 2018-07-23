import React from 'react';
import { Label, Input, InputGroup } from 'reactstrap';

export const RatingsFilter = (props) => {
    return (
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
                <InputGroup>
                    <Label for="min-rating">Minimum rating</Label>
                    <Input type="number"
                           id="min-rating"
                           min="0"
                           max="10"
                           step="0.5"
                           value={props.value}
                           onChange={props.onChange}
                    />
                </InputGroup>
            </div>
        </div>
    )
};
